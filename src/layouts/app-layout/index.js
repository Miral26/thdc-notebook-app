
import { useState } from 'react'
import { AppViews } from 'views/app-views'
import SideBar from './SideBar'
import TopBar from './TopBar'

const Layout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="h-screen bg-gray-50 flex overflow-hidden light-green-bg">
            <SideBar mobileMenuOpen={mobileMenuOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar setMobileMenuOpen={(e) => setMobileMenuOpen(true)} />
                <main className="items-stretch overflow-hidden pt-8 px-4 sm:px-6 lg:px-8 light-green-bg">
                    <AppViews />
                </main>
            </div>
        </div>
    )
}

export default Layout