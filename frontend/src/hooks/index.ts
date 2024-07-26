import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blog {
    "author": {
        "name": string
    },
    "content":string,
    "title":string,
    "id":string

}
export function usePost({id}:{id:string}) {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<Blog>();

    useEffect(function () {
        axios.get(`${BACKEND_URL}/api/v1/post/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(function (response) {
                setPost(response.data);
                console.log(response.data);
                setLoading(false);
            })
    }, [])
    return { loading, post }
}

export function usePosts() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Blog[]>([]);

    useEffect(function () {
        axios.get(`${BACKEND_URL}/api/v1/post/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(function (response) {
                setPosts(response.data.posts);
                console.log(response.data);
                setLoading(false);
            })
    }, [])
    return { loading, posts }
}