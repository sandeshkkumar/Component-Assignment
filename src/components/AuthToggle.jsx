// Q15: Login / Logout interface
import { useState } from "react";

function AuthToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h3>{isLoggedIn ? "Welcome User" : "Please Login"}</h3>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default AuthToggle;
