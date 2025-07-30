import CreatePost from "@/Feed/Create"
import Stories from "@/Feed/Stories"
import Post from "@/Feed/Post"

function Feed() {
    return(
        <div className="w-full">
            <div className="mt-5">
                <CreatePost />
            </div>
            <div className="h-50 mt-4">
                <Stories /> 
            </div>
            <div className="h-full w-full mt-3">
                <Post/>
            </div>

            
        </div>
    )
}

export default Feed