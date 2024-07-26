import { Link } from "react-router-dom";
import { AvatarAppBar } from "./PostCard";

export function Appbar() {
    return <div className="border-b-2 text-white bg-slate-800 flex justify-between px-10 py-4 ">
        <Link to={"/posts"}>
            <div className="flex flex-col justify-center mt-2 cursor-pointer">
                Medium
            </div>
        </Link>

        <div>
            <Link to={"/publish"}>

                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none 
            focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1 text-center me-2 
            mb-2 mr-12 mt-1">Publish</button>
                <AvatarAppBar name="Sahil" />
            </Link>
        </div>
    </div>
}