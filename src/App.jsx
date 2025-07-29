import LeftSideBar from "./layout/LeftSideBar"
import Navbar from "./layout/Navbar"
import RightSideBar from "./layout/RightSideBar"


function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-1 justify-between overflow-hidden">
        <LeftSideBar />
        <RightSideBar />
      </div>
    </div>


  )
}

export default App
