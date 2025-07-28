import { useState } from 'react'
import ShortcutItem from './sidebar/shortcutItem'
import ShortcutList from './sidebar/ShortcutList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
          <ShortcutItem />
          <ShortcutList />
    </div>

    
  )
}

export default App
