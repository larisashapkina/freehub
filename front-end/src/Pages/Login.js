import LoginForm from "../Components/LoginForm";

function Login({setUserName,setText}) {
  return (
    <div>
      Login
      <LoginForm setUserName={setUserName} setText={setText}/>
    </div>
  );
}

export default Login;
