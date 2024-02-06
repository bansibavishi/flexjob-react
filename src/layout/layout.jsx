import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout() {
    return (
        <>
            <a id="scroll-top"></a>
            <div className='boxed'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
