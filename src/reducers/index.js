import * as types from '../constants/actionTypes'

//Just one root state for simplication, could be divided to mylist and recommendation for 2 parts of state
const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_MYLIST:
            //If not found in mylist, then change
            if (state.mylist.findIndex(action.id) < 0) {
                let indexFound = state.recommendations.findIndex(x => x.id === action.id)
                if (indexFound > 0) {
                    state.mylist.concat(state.recommendations.splice(indexFound, 1))
                }
                return state
            }
            case types.RM_MYLIST:
                //If found in mylist, then change
                let indexFound = state.mylist.findIndex(x => x.id === action.id)
                if (indexFound > 0) {
                    state.recommendations.concat(state.mylist.splice(indexFound, 1))
                }
                return state

            case types.UPDATE_ITEMS:
                return action.items
                
            default:
                return state
    }
}

export default rootReducer