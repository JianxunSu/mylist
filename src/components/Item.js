import React from 'react'

const Item = ({ onClick, isMine, title, link }) => (
    <li
      onClick={onClick}
    >
    {title}, {isMine?'Remove':'Add'}, {link}
    </li>
  )

export default Item