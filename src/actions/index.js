import * as types from '../constants/actionTypes'
import api from '../api/api'

const updateItems = items => ({
  type: types.UPDATE_ITEMS,
  items
})

export const init = () => dispatch => {
  api.getItems(items => {
    dispatch(updateItems(items))
  })
}
export const addMylist = id => ({
  type: types.ADD_MYLIST,
  id
})

export const removeMylist = id => ({
  type: types.RM_MYLIST,
  id
})