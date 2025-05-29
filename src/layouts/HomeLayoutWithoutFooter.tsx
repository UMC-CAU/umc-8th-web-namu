import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { useState } from "react"
import Sidebar from "../components/Sidebar"

const HomeLayoutWithoutFooter = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(v => !v)
    return (
        <div className="bg-gray-100">
            <Navbar onClose={toggle}/>
            <div className="h-dvh flex flex-col ">
            {isOpen && <Sidebar/>}
            <main
                    className={
                        `flex-1 p-4 transition-margin duration-300 ease-in-out ${
                            isOpen ? 'ml-64' : ''
                        }`
                    }
                >
                    <Outlet />
                </main>
        </div>
        </div>
    )
}

export default HomeLayoutWithoutFooter