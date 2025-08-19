import ShortcutItem from "@/sidebar/shortcutItem"
import ShortcutList from "@/sidebar/ShortcutList"

function LeftSideBar(){
    return(
        <div className="w-100">
            <ShortcutItem />
            <hr className="border"/>
            <ShortcutList />
        </div>
    )
}


export default LeftSideBar