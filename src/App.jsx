import LeftSideBar from "./layout/LeftSideBar"
import RightSideBar from "./layout/RightSideBar"


function App() {
  return (
    <div className="flex w-full justify-between">
        <LeftSideBar />
      
        <RightSideBar/>
      
    </div>

  )
}

export default App
