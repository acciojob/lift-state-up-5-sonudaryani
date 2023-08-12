
import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div>
        <ParentComponent />
    </div>
  )
}

const ParentComponent = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? <p>You are logged in!</p> : <ChildComponent setIsLoggedIn={setIsLoggedIn} />}
    </div>
  )
}

const ChildComponent = ({setIsLoggedIn}) => {
  const handleClick = () => {
    setIsLoggedIn(true);
  }
  return (
    <div>
      <form>
        <label>Username: </label>
        <input type='text' /><br/>
        <label>Password: </label>
        <input type='password' /><br/>
        <button type='submit' onClick={handleClick}>Login</button>
      </form>
    </div>
  )
}

export default App

