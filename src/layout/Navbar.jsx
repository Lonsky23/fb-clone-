import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { House, Search, Store, TvMinimalPlay, Users, Gamepad, Menu, MessageCircleMore, BellRing } from "lucide-react"

function NavbarButtons() {
    return(
        <div className="h-full flex gap-1 mr-40">
            <div className="w-30 h-full border-b-3 border-blue-500 ">
                <button className=" w-full h-full rounded-2xl flex justify-center items-center">
                    <House className="w-6 h-6 text-blue-500 "/>
                </button>
            </div>    
            <div className="w-30 h-full hover:border-b-3 border-blue-500 transition-colors duration-200 group ">
                <button className=" w-full h-full rounded-2xl flex justify-center items-center">
                    <TvMinimalPlay className="w-6 h-6 text-gray-600 group-hover:text-blue-500"/>
                </button>
            </div>    
            <div className="w-30 h-full hover:border-b-3 border-blue-500 transition-color duration-200 group">
                <button className=" w-full h-full rounded-2xl flex justify-center items-center">
                    <Store className="w-6 h-6 text-gray-600 group-hover:text-blue-500" />
                </button>
            </div>    
            <div className="w-30 h-full hover:border-b-3 border-blue-500 transition-color duration-200 group">
                <button className=" w-full h-full rounded-2xl flex justify-center items-center">
                    <Users className="w-6 h-6 text-gray-600 group-hover:text-blue-500"/>
                </button>
            </div>    
            <div className="w-30 h-full hover:border-b-3 border-blue-500  transition-color duration-200 group ">
                <button className=" w-full h-full rounded-2xl flex justify-center items-center">
                    <Gamepad className="w-6 h-6 text-gray-600 group-hover:text-blue-500"/>
                </button>
            </div>    
        </div>
    )
}


function NavbarCircleButtons() {
    return(
        <div className="w-full h-full flex items-center px-2 gap-3 me-3.5">
            <div className="bg-gray-300 rounded-full h-fit w-fit p-2">
                <Menu />
            </div>
            <div className="bg-gray-300 rounded-full h-fit w-fit p-2">
                <MessageCircleMore />
            </div>
            <div className="bg-gray-300 rounded-full h-fit w-fit p-2">
                <BellRing />
            </div>
            <Avatar className="h-10 w-10">
                <AvatarImage src="https://imgcdn.stablediffusionweb.com/2024/3/12/91f69dac-3c3e-4bdc-93c3-fa8a3aa912d5.jpg"/>
                <AvatarFallback >FB</AvatarFallback>
            </Avatar>
        </div>

    )
}

function Navbar() {
    return(
    <div className="shadow-md w-full flex h-15 justify-between sticky">
        <div className="flex h-full gap-2 pt-2 ps-3">
            <div className="image w-fit ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" 
                alt="" className="w-10 h-10" />
            </div>
            <div className="search-container">
                 <div className="relative w-60">
                    <input
                        type="text"
                        placeholder="Search Facebook"
                        className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-200 "
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
                </div>
            </div>
        </div>

        <div className="h-full">
            <NavbarButtons/>
        </div>

        <div className="h-full w-fit">
            <NavbarCircleButtons/>
        </div>
        

    </div>
    )
}

export default Navbar