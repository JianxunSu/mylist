import React from 'react'
import PropTypes from 'prop-types'
import './itemsList.css'

const ItemsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div className="flex-container">{children}</div>
  </div>
)

ItemsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ItemsList