import React from 'react'
import './item.css'

const Item = ({ onClick, isMine, title, link }) => (
    <div className="flex-item container">
       <img src={link} alt={title} />
       <div>{title}</div>
       <button onClick={onClick} className="centered hide">{isMine?'Remove from Mylist':'Add to mylist'}</button>
    </div>
  )
//   <li onClick={onClick}>
//   {title}, {isMine?'Remove':'Add'}, 
//   <img src={link} />
//   </li> 
//   <div onClick={onClick}
//   className="container">
//       <img src={link} alt="Snow" style="width:100%;">
//       <div class="top-left">{title}</div>
//       <div class="bottom-right">{isMine?'Remove from Mylist':'Add to mylist'}</div>
//     </div>   

export default Item