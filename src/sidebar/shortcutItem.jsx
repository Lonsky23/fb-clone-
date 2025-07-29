
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Hourglass } from "lucide-react";

function ShortcutItem () {
    return(
        <div className=" w-100 flex flex-col gap-3 p-4">
            <div className="text-white flex items-center gap-3">
                <Avatar className="ml-0.5">
                    <AvatarImage src="https://imgcdn.stablediffusionweb.com/2024/3/12/91f69dac-3c3e-4bdc-93c3-fa8a3aa912d5.jpg" />
                    <AvatarFallback className='text-black bg-blue-300 text-sm'>MM</AvatarFallback>
                </Avatar>
                <h1 className="text-black font-sans font-semibold text-md ">Facebook User</h1>
            </div>
            <div  className="flex items-center gap-3">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/w5I9ktz_3Ib.png?_nc_eui2=AeHf7di0Dqm
                LnXegpruuv5FAeJuJLUjrSS54m4ktSOtJLousRriUvIHNM6Xe8BDx8IpgkAaaUkoNIMpTA9mgFuI-" alt="Meta " />
                <h1 className="text-black font-sans font-semibold text-md ">Meta AI</h1>
            </div>
            <div  className="flex items-center gap-3">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/w5I9ktz_3Ib.png?_nc_eui2=AeHf7di0Dqm
                LnXegpruuv5FAeJuJLUjrSS54m4ktSOtJLousRriUvIHNM6Xe8BDx8IpgkAaaUkoNIMpTA9mgFuI-" alt="Meta " />
                <h1 className="text-black font-sans font-semibold text-md ">Friends</h1>
            </div>
            <div  className="flex items-center gap-3">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/w5I9ktz_3Ib.png?_nc_eui2=AeHf7di0Dqm
                LnXegpruuv5FAeJuJLUjrSS54m4ktSOtJLousRriUvIHNM6Xe8BDx8IpgkAaaUkoNIMpTA9mgFuI-" alt="Meta " />
                <h1 className="text-black font-sans font-semibold text-md ">Memories</h1>
            </div>
            <div  className="flex items-center gap-3">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/w5I9ktz_3Ib.png?_nc_eui2=AeHf7di0Dqm
                LnXegpruuv5FAeJuJLUjrSS54m4ktSOtJLousRriUvIHNM6Xe8BDx8IpgkAaaUkoNIMpTA9mgFuI-" alt="Meta " />
                <h1 className="text-black font-sans font-semibold text-md ">Saved</h1>
            </div>
            <div  className="flex items-center gap-3">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/w5I9ktz_3Ib.png?_nc_eui2=AeHf7di0Dqm
                LnXegpruuv5FAeJuJLUjrSS54m4ktSOtJLousRriUvIHNM6Xe8BDx8IpgkAaaUkoNIMpTA9mgFuI-" alt="Meta " />
                <h1 className="text-black font-sans font-semibold text-md ">Groups</h1>
            </div>
            <div  className="flex items-center gap-3">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/w5I9ktz_3Ib.png?_nc_eui2=AeHf7di0Dqm
                LnXegpruuv5FAeJuJLUjrSS54m4ktSOtJLousRriUvIHNM6Xe8BDx8IpgkAaaUkoNIMpTA9mgFuI-" alt="Meta " />
                <h1 className="text-black font-sans font-semibold text-md ">Video</h1>
            </div>
            <div  className="flex items-center gap-3">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/w5I9ktz_3Ib.png?_nc_eui2=AeHf7di0Dqm
                LnXegpruuv5FAeJuJLUjrSS54m4ktSOtJLousRriUvIHNM6Xe8BDx8IpgkAaaUkoNIMpTA9mgFuI-" alt="Meta " />
                <h1 className="text-black font-sans font-semibold text-md ">Marketplace</h1>
            </div>


        </div>
    ) 
}

export default ShortcutItem;
