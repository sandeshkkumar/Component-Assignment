// Q7: Conditional rendering
function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h3>Welcome Back!</h3> : <h3>Please Login</h3>;
}

export default Greeting;
