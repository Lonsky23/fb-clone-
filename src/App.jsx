import LeftSideBar from "./layout/LeftSideBar"
import Navbar from "./layout/Navbar"
import RightSideBar from "./layout/RightSideBar"
import Feed from "./layout/Feed"


function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-between overflow-hidden">
        <div className="flex-1/4">
          <LeftSideBar />
        </div>
        <div className="flex-3/4 mx-52">
          <Feed />
        </div> 
        <div className="flex-1/4 z-50">
          <RightSideBar />
        </div>
      </div>
    </div>


  )
}

export default App
