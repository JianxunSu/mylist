import * as types from '../constants/ActionTypes'

//Just one root state for simplication, could be divided to mylist and recommendation for 2 parts of state
const rootReducer = (state = {mylist:[], recommendations:[]}, action) => {
    console.error('Reducer begin')
    switch (action.type) {
        case types.ADD_MYLIST:
            // change from recommendations to mylist
            let item = state.recommendations.filter(item => item.id === action.id)
            return {
                ...state,
                mylist: [...state.mylist, item],
                    recommendations: state.recommendations.filter(item => item.id !== action.id)
            }

        case types.RM_MYLIST:
            item = state.mylist.filter(item => item.id === action.id)
            return {
                ...state,
                mylist: state.mylist.filter(item => item.id !== action.id),
                    recommendations: [...state.recommendations, item]
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
    // return [{
    //     "title": "Futurama",
    //     "id": 1,
    //     "img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    // }, {
    //     "title": "The Interview",
    //     "id": 2,
    //     "img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    // }, {
    //     "title": "Gilmore Girls",
    //     "id": 3,
    //     "img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    // }]
    // return (typeof state.mylist !== undefined)? state.mylist : []
    return state.mylist
}

export const getRecommends = (state) => {
    console.error('REC')
    console.error(state)

    return state.recommendations

}

export default rootReducer