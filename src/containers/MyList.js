import React from 'react'
import { connect } from 'react-redux'
import { removeMylist } from '../actions'
import ItemsList from '../components/ItemsList'
import Item from '../components/Item'
import {getMylist} from '../reducers'
import PropTypes from 'prop-types'

const MylistContainer = ({ items, removeMylist }) => (
    <ItemsList title="My List">
      {
    items.map(item =>
        <Item
          key={item.id}
          title={item.title}
          isMine = {true}
          link = {item.img}
          onClick = {() => removeMylist(item.id)} />
      )}
    </ItemsList>
  )
  
  MylistContainer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired
    })).isRequired,
    removeMylist: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({
    items: getMylist(state)
  })
  
  export default connect(
    mapStateToProps,
    { removeMylist }
  )(MylistContainer)
  