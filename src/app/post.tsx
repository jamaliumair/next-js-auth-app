import { UserPost } from "./usertype";


type Post = {
    // post: UserPost[] | undefined;
    post: UserPost
}

export default function Post( {post: {content, likes}}: Post) {

    // console.log(post)
    return (
            <>

            <h2>Your Posts</h2>
            <p><h3 style={{display: "inline"}}>Content: </h3>{content}</p>
            <p><h3 style={{display: "inline"}}>Likes: </h3>{likes}</p>

                {/* {

                    post?.map(({content, likes}, i) => (
                        <>
                        <p key={content + i}><h3 style={{display: "inline"}}>Content: </h3>{content}</p>
                        <p key={content + i}><h3 style={{display: "inline"}}>Likes: </h3>{likes}</p>
                        </>
                    ))
                } */}
                
            </>
    )
}