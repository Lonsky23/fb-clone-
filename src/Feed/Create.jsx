import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function CreatePost(){
    return(
        <div className="w-full h-fit bg-white flex flex-col shadow-xl rounded-sm border-1 "> 
            <div className="w-full flex p-3 gap-2 items-center">
                <Avatar className="ml-0.5 h-11 w-11">
                    <AvatarImage src="https://imgcdn.stablediffusionweb.com/2024/3/12/91f69dac-3c3e-4bdc-93c3-fa8a3aa912d5.jpg" />
                    <AvatarFallback className='text-black bg-blue-300 text-sm'>MM</AvatarFallback>
                </Avatar>
                <Input type='text' placeholder="What's on your mind, Facebook User?" className="rounded-3xl p-6 bg-gray-200 text-gray-700 text-2xl font-semibold border-0"/>
            </div>
            <hr />
            <div className="w-full px-3 py-2 flex gap-1">
                
                <button className="hover:bg-gray-100 rounded-mdpy-2 flex  flex-1 items-center justify-center gap-2 font-sans text-sm font-semibold text-gray-500">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeH8cfiUgsABTvTcXAMkmPqxueRic5Ym8Wm55GJzlibxabLHTOFkqRwgQyx4WEwPqelQ24FiobN7XuysUTRMFHz5" 
                    alt="" className="w-6 h-6"/>
                Live Video</button>
                <button className="hover:bg-gray-100 rounded-md py-2 flex  flex-1 items-center justify-center gap-2 font-sans font-semibold text-sm text-gray-500">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeHgTOj2niZzISI9l4zx9P-CkBVQC4m7dx6QFVALibt3Hnb9llt2dZsqc4cscTi5ebBmVX0bCpfUY6LRyV5cXhOk" 
                alt=""/>    
                Photo/Video
                </button>
                <button className="hover:bg-gray-100 rounded-md py-2 flex  flex-1 items-center justify-center gap-2 font-sans font-semibold text-sm text-gray-500">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeHaX8qxvOEFC0VpNAiskvF0fPQ6N5_OUfV89Do3n85R9blqH5FYR1FuPukfL5t52IfUNlAldsR7NnaGDAbIPIXj"
                 alt="" />
                Feeling/Activity
                </button>
            </div>

        </div>
    )
}


export default CreatePost