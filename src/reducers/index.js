import * as types from '../constants/ActionTypes'

//Just one root state for simplication, could be divided to mylist and recommendation for 2 parts of state
const rootReducer = (state = {mylist:[], recommendations:[]}, action) => {
    console.error('Reducer begin')
    switch (action.type) {
        case types.ADD_MYLIST:
            // change from recommendations to mylist
            let recItem = state.recommendations.filter(item => item.id === action.id)

            // console.error('Debug')
            return {
                ...state,
                // mylist: [...state.mylist, state.recommendations.filter(item => item.id === action.id)],
                mylist: state.mylist.concat( recItem),
                recommendations: state.recommendations.filter(item => item.id !== action.id)
            }

        case types.RM_MYLIST:
            let myItem = state.mylist.filter(item => item.id === action.id)

            
            return {
                ...state,
                mylist: state.mylist.filter(item => item.id !== action.id),
                // recommendations: [...state.recommendations, state.mylist.filter(item => item.id === action.id)]
                recommendations: state.recommendations.concat( myItem)
            }

        case types.UPDATE_ITEMS:
            // console.error('UPdatehere')
            // console.error(action.items)
            return action.items

        default:
            return state
    }
}

export const getMylist = (state) => {
    return state.mylist
}

export const getRecommends = (state) => {
    // console.error('REC')
    // console.error(state)

    return state.recommendations

}

export default rootReducer