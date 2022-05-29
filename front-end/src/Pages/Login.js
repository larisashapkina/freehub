import LoginForm from "../Components/LoginForm";


function Login({setUserName,setText}) {
  return (
    <div className="login">
      {/* Login */}
      <LoginForm setUserName={setUserName} setText={setText}/>
    </div>
  );
}

export default Login;
