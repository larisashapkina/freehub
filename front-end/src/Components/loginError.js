function Error({error}){
    return(
        <div>
             {error?<div >Incorrect Password or Username</div>:""}
        </div>
    )
}
export default Error;