import { BookText, FileWarning, Info, MonitorX } from "lucide-react";
import { useState } from "react"
import ReactDOM from 'react-dom'




function Popup ({ onclose }) {
    return(
        <div className="w-100 absolute top-8 right-22 bg-white shadow-lg z-50 rounded-2xl" onMouseLeave={onclose}>   
                {/* hide ad */}
                <div className="p-2 group rounded-2xl hover:bg-gray-200 transition-colors duration-200">
                    <div className="p-2 flex gap-5">
                        <div className="flex items-center">
                            <MonitorX className="w-7 h-7" />
                        </div>
                        <div className="flex-col">
                            <h1 className="font-semibold font-sans">Hide ad</h1>
                            <p className="text-sm font-sans text-gray-500">Never see this ad again</p>
                        </div>
                    </div>
                </div>
                {/* Report ad */}
                    <div className="p-2 group rounded-2xl hover:bg-gray-200 transition-colors duration-200">
                    <div className="p-2 flex gap-5">
                        <div className="flex items-center">
                            <FileWarning className="w-7 h-7" />
                        </div>
                        <div className="flex-col">
                            <h1 className="font-semibold font-sans">Report ad</h1>
                            <p className="text-sm font-sans text-gray-500">Tell us about a problem with this ad</p>
                        </div>
                    </div>
                </div>
                {/* Why */}
                <div className="p-2 group rounded-2xl hover:bg-gray-200 transition-colors duration-200">
                    <div className="p-2 flex gap-5">
                        <div className="flex items-center">
                            <Info className="w-7 h-7" />
                        </div>
                        <div className="flex-col">
                            <h1 className="font-semibold font-sans">Why I am seeing this ad?</h1>
                        </div>
                    </div>
                </div>
                {/* Info */}
                    <div className="p-2 group rounded-2xl hover:bg-gray-200 transition-colors duration-200">
                    <div className="p-2 flex gap-5">
                        <div className="flex items-center">
                            <BookText className="w-7 h-7" />
                        </div>
                        <div className="flex-col">
                            <h1 className="font-semibold font-sans">Ad Info</h1>
                        </div>
                    </div>
                </div>

            </div>          
            )
}


function Ads({imgURL, header, link}){
    const [close, setClose] = useState(false);
    const [more, setMore] = useState(false);

    function handleCloseClick() {
        setClose(!close);
    }

    function handleMoreClick(){
        setMore(!more)
    }

    return !close? ( <div className=" relative flex gap-3 items-center w-full p-3 rounded-xl group hover:bg-gray-300 transition-colors duration-200">
                <img src={imgURL} 
                alt="" className="w-35 h-35 rounded-2xl object-cover" />
                <div className="text">
                        <h1 className="header font-semibold font-sans">{header}</h1>
                        <h1 className="link font-sans text-gray-500">{link}</h1>
                        <button></button>
                </div>
                <div className="bg-gray-400 p-2 w-8 h-8 rounded-full absolute top-3 right-5 justify-center items-center
                hidden group-hover:flex cursor-pointer  transition-colors duration-300" onClick={handleCloseClick}><button>X</button></div>
                <div className="bg-gray-400 p-2 w-8 h-8 rounded-full absolute top-3 right-15  justify-center items-center
                hidden group-hover:flex  cursor-pointer transition-colors duration-300">
                    <button className="w-full h-full relative flex justify-center items-center mb-2" onClick={handleMoreClick}>...</button></div>
                    {more ? <Popup onclose={handleMoreClick}/> : <></>}
                   
            </div>) : (
            <div className="flex w-100 p-3">
                <div className="flex-3/4">
                    <h1 className="font-semibold ">Add hidden</h1>
                    <h1 className="font-light">You won't see this ad and ads like it.</h1>
                </div>
                <div className="flex-1/4 flex ">
                    <button className=" px-3 py-0.5 rounded-2xl hover:bg-gray-300" onClick={handleCloseClick}>Undo</button>
                </div>
            </div>
            )

    
}

function Advertisement() {
    return (
        <div className="w-full flex-col m-0.5">
            <h1 className="text-gray-500 font-bold p-2 ml-2 ">Sponsored</h1>
            <Ads imgURL="https://scontent.fmnl4-6.fna.fbcdn.net/v/t45.1600-4/394162912_6521659184488_7413920939893156683_n.png?stp=cp0_dst-jpg_q90_s526x296_spS444_tt6&_nc_cat=111&ccb=1-7&_nc_sid=c02adf&_nc_eui2=AeEYxM1kKpacBmrryJKODB9z0xVJIhf2GIzTFUkiF_YYjBxYY8TtGl8XlPAn4ES27cF37OEkBePOKynZ17PHgdEZ&_nc_ohc=sRLFrKB-kP4Q7kNvwFAYmEn&_nc_oc=AdmOse-u0ray55nk-XigcwbZnXsU0vzDeaQ3WmqACd5lunZ-JPn6ZmQALziG9gMX49zj2GMEGVvPrqMrMdd4Z93D&_nc_zt=1&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=V03Jzo-hcmrpuq-8GswW3Q&oh=00_AfQEQkZTUovIHhmrBx74RKHfVo5hV85GxEqqDhPFL-1T8Q&oe=688DDB3E"
            header="Chatgpt: Complete Course for Work" link="chatgpt.com"/>

            <Ads imgURL="https://scontent.fmnl4-6.fna.fbcdn.net/v/t45.1600-4/462686053_6639343286542_523746398576203945_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444_tt6&_nc_cat=1&ccb=1-7&_nc_sid=c02adf&_nc_eui2=AeH13wseZppQbZgIXKDKS1xVAxrAwhhmf5MDGsDCGGZ_k22AwbOIF23deHRuHN0efkSvlP5EbasDVRXuPyDslqRo&_nc_ohc=flif_qi71scQ7kNvwGGsSjj&_nc_oc=AdlTRWm5W75CskMtebzBMuFxSSE8sS_B4u8jOieBB9VhmJ0kOVtGpjb5iJU7kRqjM-2oipZ23kWzFSrWj_hQpsTb&_nc_zt=1&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=V03Jzo-hcmrpuq-8GswW3Q&oh=00_AfQwsUGIk9F57VxsHqkQ82RqdEuBxBcw3iB4j5WEz3bZTg&oe=688DFB59"
            header="Try the free MongoDB Atlas Demo" link="mongodb.com" />
            

        </div>
    )
}


export default Advertisement