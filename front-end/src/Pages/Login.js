import LoginForm from "../Components/LoginForm";

function Login({setUserName,setText}) {
  return (
    <div>
      <LoginForm setUserName={setUserName} setText={setText}/>
    </div>
  );
}

export default Login;
