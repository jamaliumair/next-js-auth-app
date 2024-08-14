import Greet from "./greet";
import Hobbies from "./hobbies";
import Post from "./post";
import { UserType } from "./usertype";

type UserTimelineType = {
    userData: (UserType | null)
  };
  

export default function Usertimeline({userData}: UserTimelineType) {


    return (
        <>
        <Greet userName={userData?.userName}/>
        <Hobbies hobbies={userData?.hobbies}/>
        {/* <Post post={userData?.post}/> */}

        {
            userData?.post.map((postData,i) => (
                <Post
                post={postData}
                key={postData.content + i}
                />
            ))
        }
        </>
    )
}