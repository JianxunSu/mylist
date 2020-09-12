import React from "react";
// import {ADD_MYLIST, RM_MYLIST}
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

//Reducers:
export const rootReducer = (state = sourceData, action) => {
  switch (action.type) {
    case 'ADD_MYLIST':
      //If not found in mylist, then change
      if (state.mylist.findIndex(action.id) < 0){
        let indexFound = state.recommendations.findIndex(x => x.id === action.id)
        if (indexFound > 0 ) {
          state.mylist.concat(state.recommendations.splice(indexFound, 1))
        }
        return state
      }
    case 'RM_MYLIST':
      //If found in mylist, then change
      let indexFound = state.mylist.findIndex(x => x.id === action.id)
      if (indexFound > 0 ) {
        state.recommendations.concat(state.mylist.splice(indexFound, 1))
      }
      return state
    default:
      return state
  }
}

//Components
//film item 
const Item = ({ onClick, isMine, title, link }) => (
  <li
    onClick={onClick}
  >
  {title}, {isMine?'Remove':'Add'}, {link}
  </li>
)

//items list
const ItemList = ({ items, toggleItem }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleItem(todo.id)} />
    ))}
  </ul>
)


//MyList

//Recommendations


//Main component container
export default function App() {
  return (
    <div>
    </div>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
