import React from "react";
import MyListContainer from './MyList'
import RecommendsContainer from './Recommendations'

const App = () => (
  <div>
    <h2>Favorites</h2>
    <hr/>
    <RecommendsContainer />
    <hr/>
    <MyListContainer />
  </div>
)

export default App
