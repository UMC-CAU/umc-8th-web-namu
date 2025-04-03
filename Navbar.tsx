import clsx from "clsx"
import { useTheme } from "./context/ThemeProvider"
import ThemeToggleButton from "./ThemeToggleButton"

export default function Navbar() {
    const {theme} = useTheme()

    const isLightMode = theme === 'light'
    return <nav className={clsx('p-4 w-full flex justify-end',
    isLightMode ? 'bg-white text-black' : 'bg-black text-white')
    }>
        <ThemeToggleButton/>
    </nav>
    
}