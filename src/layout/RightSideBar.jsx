import Advertisement from "@/sidebar/Advertisement"
import Birthdays from "@/sidebar/Birthdays"
import Contacts from "@/sidebar/Contact"

function RightSideBar() {
    return(
        <div className="flex flex-col w-fit h-screen overflow-y-auto overflow-x-hidden">
            <Advertisement />
            <Birthdays />
            <Contacts />
        </div>
    )
}

export default RightSideBar