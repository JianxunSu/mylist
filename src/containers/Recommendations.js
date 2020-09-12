import React from 'react'
import { connect } from 'react-redux'
import { addMylist } from '../actions'
import ItemsList from '../components/ItemsList'
import Item from '../components/Item'
import {getRecommends} from '../reducers'
import PropTypes from 'prop-types'


const RecommendsContainer = ({ items, addMylist }) => (
    <ItemsList title="Recommendations">
      {items.map(item =>
        <Item
          key={item.id}
          title={item.title}
          isMine = {false}
          link = {item.img}
          onClick = {() => addMylist(item.id)} />
      )}
    </ItemsList>

  )
  
  RecommendsContainer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired
    })).isRequired,
    addMylist: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({
    items: getRecommends(state)
  })
  
  export default connect(
    mapStateToProps,
    { addMylist }
  )(RecommendsContainer)
  