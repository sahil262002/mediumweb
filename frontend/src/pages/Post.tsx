
import { useParams } from "react-router-dom";
// import { usePost } from "../hooks"
import { FullPost } from "../components/FullPost";

export const Post =  ()=>{
    const {id} = useParams();
    // const {loading , post}=usePost({
    //     id: id ||""
    // });
    // if(loading){
    //     return <div>
    //         loading....
    //     </div>
    // }
    return (
        <div>
           <FullPost id={id || ""}/>
        </div>
    );
}