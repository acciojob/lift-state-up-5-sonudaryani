import React, { useState } from "react";

const App = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  );
};

const ParentComponent = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <ChildComponent setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

const ChildComponent = ({ setIsLoggedIn }) => {
  const handleClick = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="child">
      <form>
        <label>Username: </label>
        <input type="text" />
        <br />
        <label>Password: </label>
        <input type="password" />
        <br />
        <button type="submit" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
};

export default App;
