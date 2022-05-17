import CreateAccForm from "../Components/CreateAccForm";

function Account({accountUserName}){
    
    return (
        <div>
            Please create account
        <CreateAccForm accountUserName = {accountUserName}/>
        </div>
    )
}

export default Account;