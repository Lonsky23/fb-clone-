import ShortcutItem from "@/sidebar/shortcutItem"
import ShortcutList from "@/sidebar/ShortcutList"

function LeftSideBar(){
    return(
        <div className="w-70 ml-2">
            <ShortcutItem />
            <hr className="border"/>
            <ShortcutList />
        </div>
    )
}


export default LeftSideBar