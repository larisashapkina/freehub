import CreateAccForm from "../Components/CreateAccForm";

function Account({ setUserName }) {
  return (
    <div>
       {/* Create Account */}
      <CreateAccForm setUserName={setUserName} />
    </div>
  );
}

export default Account;
