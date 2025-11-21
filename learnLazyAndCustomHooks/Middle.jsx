import useFetchPosts from "./hooks/useFetchPosts"


export default function Middle() {
    const data = useFetchPosts();
    return (
        <>
            <h1>This component is loaded by lazy</h1>
            {
                data.map((post)=>{
                    return (
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
