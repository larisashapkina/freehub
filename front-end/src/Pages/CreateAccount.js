import CreateAccForm from "../Components/CreateAccForm";

function Account({setUserName}){
    
    return (
        <div>
            Please create account
        <CreateAccForm setUserName = {setUserName}/>
        </div>
    )
}

export default Account;
