import LeftSideBar from "./layout/LeftSideBar"
import Navbar from "./layout/Navbar"
import RightSideBar from "./layout/RightSideBar"
import Feed from "./layout/Feed"


function App() {
  return (
    <div className="flex flex-col overflow-x-hidden h-screen">
      <Navbar />

      <div className="flex justify-between">
        <div className="w-full ">
          <div className="sticky top-16">
            <LeftSideBar />
          </div>
        </div>

        <div className="w-full ">
          <Feed />
        </div>
        <div className="w-full  flex justify-end">
          <div   className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-hidden hover:overflow-y-auto transition-opacity duration-1000 overflow-x-hidden custom-scrollbar">
            <RightSideBar />
          </div>
        </div>
      </div>  
    </div>
  );
}


export default App
