import clsx from "clsx"
import { Theme, useTheme } from "./context/ThemeProvider"

export default function ThemeContent() {
        const {theme} = useTheme()
    
    const isLightMode = theme === Theme.LIGHT
    return <div className={clsx('p-4 h-dvh w-full',
        isLightMode ? 'bg-white' : 'bg-black',
        {'bg-black text-white': !isLightMode,
            'bg-white text-black': isLightMode,})}>
        <header className="flex justify-center text-lg">Theme content</header>
        <p className="text-lg">현재 상태는 {theme} 모드 입니다.</p>
        </div>
}