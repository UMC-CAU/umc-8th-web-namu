import clsx from "clsx";
import { Theme, useTheme } from "./context/ThemeProvider";

export default function ThemeToggleButton() {
    const {theme,toggleTheme}=useTheme()

    const isLightMode = theme === Theme.LIGHT


    return <button 
    onClick={toggleTheme}
    className={clsx('px-4 py-2 rounded-md transition-all flex items-center justify-between',{' bg-black text-white': !isLightMode,
        'bg-white text-black': isLightMode,})}
        >
        <span className="absolute left-1/2 -translate-x-1/2 font-semibold">전병국의 웹페이지</span>
        <span className="ml-auto">{isLightMode ? '다크모드' : '라이트모드'}</span>
    </button>
}