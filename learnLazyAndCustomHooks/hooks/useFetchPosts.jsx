import { useEffect, useState } from "react"

export default function useFetchPosts() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchPosts = async ()=> {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setData(data);
        }
        fetchPosts();
    },[])
    return data;
}
