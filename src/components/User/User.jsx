import { useParams } from "react-router-dom"

function User() {

  const {userid, username} = useParams();

  return (
    <h1 className="flex items-center content-center text-5xl max-h-[20%] max-w-[80%] mx-[30%] my-[15%]">User : {userid}, Name : {username}</h1>
  )
}

export default User