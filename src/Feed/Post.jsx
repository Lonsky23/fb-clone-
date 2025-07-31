import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Ellipsis, Forward, MessageCircle, ThumbsUp, X } from "lucide-react"
const user = {
    "dpUrl":" https://imgcdn.stablediffusionweb.com/2024/3/12/91f69dac-3c3e-4bdc-93c3-fa8a3aa912d5.jpg",
    "userName" : "Facebook user"
}
const content = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna temporPulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
const imageUrl = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
function Post({profileURL,user, dateTime, content, imgUrl}){
    return(
        <div className="w-full h-fit rounded-xl shadow-[0_0_10px_0_rgba(0,0,0,0.1)] p-2 mb-5">
            <div className="profile p-3 flex items-center justify-between">
                <div className="flex gap-2 items-center">
                     <Avatar className="h-10 w-10">
                    <AvatarImage src={profileURL}/>
                    <AvatarFallback >FB</AvatarFallback>
                    </Avatar>
                    <div className="">
                        <h1 className="font-sans font-semibold">{user}</h1>
                        <h1 className="font-sant text-sm text-gray-600 font-semibold">{dateTime}</h1>
                    </div>
                </div>
                <div className="flex gap-3 mr-2">
                    <Ellipsis className="text-gray-600"/>
                    <X  className="text-gray-600"/>
                </div>
            </div>
            <div className="px-3 pb-3">
                <p className="font-sans text-md ">
                    {content}
                </p>
            </div>
            {imgUrl && 
            <div className="picture storage mb-2 h-100 border py-1">
                <img src={imgUrl} 
                alt="" className="w-full h-full "/>
            </div>
            }
            <div className="px-3 flex justify-between pb-2">
                <div className="flex gap-3 items-center">
                    <ThumbsUp className="h-5 w-5"/>
                    <h1 className="font-sans text-sm text-gray-700">47 Like</h1>
                </div>

                <div className="flex gap-4 pr-3 items-center">
                    <h1 className="font-sans text-sm text-gray-700"># Comments</h1>
                    <h1 className="font-sans text-sm text-gray-700"># Shares</h1>
                </div>
            </div>
            <hr />
            <div className="w-full h-10 flex mx-2 mt-2">
                <button className="flex gap-2 flex-1 justify-center items-center text-gray-600 rounded-xl hover:bg-gray-100 ">
                    <ThumbsUp className="text-gray-600 h-5 w-5"/> Like
                </button>
                <button className="flex gap-2 flex-1 justify-center items-center text-gray-600  hover:bg-gray-100 ">
                    <MessageCircle className="text-gray-600 h-5 w-5"/> Comment
                </button>
                <button className="flex gap-2 flex-1 justify-center items-center text-gray-600  hover:bg-gray-100 ">
                    <Forward className="text-gray-600h-5 w-5"/> Share
                </button>
            </div>
        </div>
    )
}

function Posts() {
    return(
        <div className="w-full h-full">
            <Post profileURL={user.dpUrl} user={user.userName} dateTime="yesterday" content={content} />
            <Post profileURL={user.dpUrl} user={user.userName}  dateTime="yesterday" content={content} imgUrl={imageUrl} />
        </div>
    )

}

export default Posts