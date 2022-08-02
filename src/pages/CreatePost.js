import { useAuth } from "../hook/UseAuth";
import {useNavigate} from "react-router";


const CreatePost = () => {

    const {signOut} = useAuth();

    const navigate = useNavigate();

  return (
    <div>
        <h1>Create post</h1>
        {/*     replace: true -  user cannot back on prev page */}
        <button onClick={() => signOut(() => navigate('/', {replace: true}))}>Log out</button>
    </div>
  )
}

export { CreatePost }