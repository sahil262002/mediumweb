import { useState } from "react"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Publish() {
    const[title , setTitle]=useState("");
    const[content, setContent]=useState("");
    const navigate = useNavigate();
    return <div>
        <Appbar />
        <div className="flex justify-center w-full ">
            <div className="max-w-screen-lg  w-full pt-10">
                <input  onChange={function(e){
                    setTitle(e.target.value);
                }} type="text" className="font-semibold bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" />

                <textarea onChange={function(e){
                    setContent(e.target.value);
                }}
                id="message" rows={6} className="font-semibold block p-2.5 w-full text-sm text-gray-900 mt-4
                bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                <button onClick={async function(){
                    const response=await axios.post(`${BACKEND_URL}/api/v1/post`,{
                        title,
                        content
                    },
                    {
                        headers:{
                            Authorization: localStorage.getItem('token'),
                        }
                    }
                );

                    console.log("hlo");
                    console.log(response.data);
                    console.log("yellow");
                    navigate(`/post/${response.data}`)
                }}
                type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 mt-2">publish</button>
            </div>
            
        </div>
        
        
    </div>
}