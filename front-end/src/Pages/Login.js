import LoginForm from "../Components/LoginForm";

function Login({setUserName}) {
  return (
    <div>
      Login

      <LoginForm setUserName={setUserName}/>
    </div>
  );
}

export default Login;
