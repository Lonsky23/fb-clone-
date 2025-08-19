import { BookText, FileWarning, Info, MonitorX } from "lucide-react";
import { useState } from "react"
import { createPortal } from "react-dom";





function Popup ({ onclose, pos }) {
    return createPortal(
        <div className="w-100 absolute top-8 right-22 bg-white shadow-lg z-50 rounded-2xl" onMouseLeave={onclose}
        style={{position: "fixed",
                top : pos.top,
        }}>   
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

            </div>,
            document.body   
            )
}


function Ads({imgURL, header, link}){
    const [close, setClose] = useState(false);
    const [more, setMore] = useState(false);
    const [popupPos, setPopupPos] = useState(null);

    function handleCloseClick() {
        setClose(!close);
    }

  
  function handleMoreClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPopupPos({
      top: rect.bottom + 5,
    });
    setMore(!more);
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
                    {more && popupPos ? (
                        <Popup onclose={handleMoreClick} pos={popupPos} />
                        ) : null}

                   
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
            <Ads imgURL="https://scontent.fmnl4-6.fna.fbcdn.net/v/t45.1600-4/469439963_120214246843910702_1492381652024805220_n.png?stp=cp0_dst-jpg_q90_s526x296_spS444_tt6&_nc_cat=1&ccb=1-7&_nc_sid=c02adf&_nc_eui2=AeGBe9Am6oEKFrvHkDr4KEvQz7emaE9s3wrPt6ZoT2zfCqkIx78hV9E8QW4xEx6zO0Pbq51XljxGBPXOrnQzN01D&_nc_ohc=lWGFQWxyWYoQ7kNvwH96G06&_nc_oc=Adlk2qAltYQuS8WYehK47pp38QY5RhIG5dot0-_hE7hQ7VUzbkLcCxBCvTDT5824LBa_ZbSRDjej0aNIBodvXET8&_nc_zt=1&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=4m3erNVB9D79p3UBrq_cMw&oh=00_AfWpQdb9bKuvTjS74DR9UglHEbZInJNN_InclKMSMNCLUQ&oe=68A90107"
            header="Be a Better Writer, Starting Today" link="grammarly.com"/>

            <Ads imgURL="https://scontent.fmnl4-6.fna.fbcdn.net/v/t45.1600-4/530833302_1954591895338731_5239426731796527508_n.png?stp=cp0_dst-jpg_q90_s526x296_spS444_tt6&_nc_cat=1&ccb=1-7&_nc_sid=c02adf&_nc_eui2=AeFC8oRcHQrK6sDIYOubP4GADmxQ0MGu6QIObFDQwa7pAj51i9aV7rEK3HICKKRsMgw1XOgEVZeRx0N4ZZRJNMsh&_nc_ohc=m30zn_Ry0NUQ7kNvwGFHZtg&_nc_oc=AdmPgfsi3U-D19RsztZUy16AJZjZRE1J-x3oOkgmoqxsE9aQO-PKm8-8JYHrR-Q-d1wFGn6wqz4DGDkzT0iwCNWq&_nc_zt=1&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=4m3erNVB9D79p3UBrq_cMw&oh=00_AfV_tEdD1P16REOVhPB0OLXetznIy3DsTHZCdKBcG0EUtA&oe=68A8DBDA"
            header="Try the free MongoDB Atlas Demo" link="mongodb.com" />
            

        </div>
    )
}


export default Advertisement