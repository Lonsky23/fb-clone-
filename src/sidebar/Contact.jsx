import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Ellipsis, Search } from "lucide-react"

function Contact({name, imageUrl, alternative }) {
    return(
        <div className="flex gap-3 w-80 items-center p-3 rounded-2xl hover:bg-gray-300 ">
            <div className="relative inline-block">
            <Avatar className="w-10 h-10">
                <AvatarImage src={imageUrl} />
                <AvatarFallback className="text-black bg-blue-300 text-sm">
                {alternative}
                </AvatarFallback>
            </Avatar>

            {/* Status dot */}
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
            </div>

            <h1 className="text-black font-sans font-semibold text-md">{name}</h1>

        </div>
    )
}
function Contacts(){
    return(
        <div className="w-80 h-full ml-2">
            <div className="flex-col p-3">
                <div className="flex w-full">
                    <div className=" flex-3/4">   
                        <h1 className="font-sans font-semibold text-gray-500 ml-2">CONTACTS</h1>
                    </div>
            
                    <div className="flex gap-5 flex-1/4">
                        <Search  className="text-gray-500 w-5 h-5 "/>
                        <Ellipsis className="text-gray-500 w-5 h-5"/>
                    </div>
                </div>
                <div className="users-list ">
                        <Contact name="Facebook User" imageUrl="#" alternative="FB"/> 
                        <Contact name="Facebook User" imageUrl="#" alternative="FB"/> 
                        <Contact name="Facebook User" imageUrl="#" alternative="FB"/> 
                        <Contact name="Facebook User" imageUrl="#" alternative="FB"/> 
                        <Contact name="Facebook User" imageUrl="#" alternative="FB"/> 
                        <Contact name="Facebook User" imageUrl="#" alternative="FB"/> 
                        <Contact name="Facebook User" imageUrl="#" alternative="FB"/> 
                        <Contact name="Facebook User" imageUrl="#" alternative="FB"/> 
                </div>
              
            </div>
            <hr />
            <div className="w-80 h-full mt-5 p-3">
                <h1 className="font-sans font-semibold text-gray-500 ml-2 mb-2">Group Chats</h1>
                <div className="group-list ">
                    <Contact name="Facebook Group" imageUrl="#" alternative="FB"/> 
                    <Contact name="Facebook Group" imageUrl="#" alternative="FB"/> 
                    <Contact name="Facebook Group" imageUrl="#" alternative="FB"/> 
                    <Contact name="Facebook Group" imageUrl="#" alternative="FB"/> 
                    <Contact name="Facebook Group" imageUrl="#" alternative="FB"/> 
                </div>
               
            </div>
        </div>
    )
}


export default Contacts