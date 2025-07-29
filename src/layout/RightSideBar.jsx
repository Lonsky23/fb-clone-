import Advertisement from "@/sidebar/Advertisement"
import Birthdays from "@/sidebar/Birthdays"
import Contacts from "@/sidebar/Contact"

function RightSideBar() {
    return(
        <div className="flex flex-col w-100 h-screen overflow-y-auto">
            <Advertisement />
            <Birthdays />
            <Contacts />
        </div>
    )
}

export default RightSideBar