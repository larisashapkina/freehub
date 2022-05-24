function Error({error}){
    return(
        <div>
             {error?<div >Wrong password or username</div>:""}
        </div>
    )
}
export default Error;