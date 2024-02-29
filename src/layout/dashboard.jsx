import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import Sidebar from './sidebar'
import { Helmet } from 'react-helmet'

export default function Dashboard() {

    return (
        <>
            <Helmet>
                <body className='dashboard show' />
            </Helmet>

            <Navbar />

            <Sidebar />

            <div className='dashboard__content'>
                <Outlet />
            </div>

            {/* <Footer /> */}
        </>
    )
}
