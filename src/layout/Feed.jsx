import CreatePost from "@/Feed/Create"
import Stories from "@/Feed/Stories"
import Posts from "@/Feed/Post"

function Feed() {
    return(
        <div className="w-full relative">
            <div className="mt-5">
                <CreatePost />
            </div>
            <div className="mt-4">
                <Stories /> 
            </div>
            <div className="w-full mt-3 ">
                <Posts/>
            </div>

            
        </div>
    )
}

export default Feed