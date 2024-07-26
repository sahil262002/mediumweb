import { ChangeEvent, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { signupInput } from "sahilkumar_common_file";

import axios from "axios";
import { BACKEND_URL } from "../config";


export function Auth({ type }: { type: "signup" | "signin" }) {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<signupInput>({
        name: "",
        email: "",
        password: ""
    })
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,postInputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token",jwt);
            navigate("/posts ");
        }
        catch(e){
            
        }
    }
    return <div className=" h-screen flex justify-center flex-col ">

       

            <div className="flex justify-center ">
                <div>
                    <div className="px-20 ">
                        <div className=" text-3xl font-bold ">
                            Create an account
                        </div>
                        <p className="pl-2">
                            {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                            <Link className="no-underline hover:underline pl-1" to={type === "signin" ? "/signup" : "/signin"}>
                                {type === "signin" ? "Sign up" : "Sign in"}</Link>
                        </p>
                    </div>
                    <div className="pt-5">
                        {type === "signup" ? <LabelledInput label="Name" placeholder="your name" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                name: e.target.value
                            }))
                        }} /> : null}
                        <LabelledInput label="email" placeholder="email" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                email: e.target.value
                            }))
                        }} />
                        <LabelledInput label="password" type={"password"} placeholder="password" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} />

                    </div>
                    <button type="submit" onClick={sendRequest}
                        className=" mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm w-full px-5 py-2.5 text-center dark:bg-black dark:hover:bg-slate-800 dark:focus:ring-blue-800 w-full">
                        {type === "signin" ? "Sign in" : "Sign up"}</button>
                </div>
            </div>
        

    </div>
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-black pt-3">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="font-medium bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    </div>
}