import React from 'react'
import { connect } from 'react-redux'
import { removeMylist } from '../actions'
import ItemsList from '../components/ItemsList'

const MylistContainer = ({ items, removeMylist }) => (
    <ItemsList title="My List">
      {items.map(item =>
        <Item
          key={item.id}
          item={item}
          onRmClicked={() => removeMylist(item.id)} />
      )}
    </ItemsList>
  )
  
  ItemsContainer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired
    })).isRequired,
    removeMylist: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({
    items: getVisibleitems(state.items)
  })
  
  export default connect(
    mapStateToProps,
    { removeMylist }
  )(ItemsContainer)
  