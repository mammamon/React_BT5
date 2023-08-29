import React from 'react'
import SideBar from '../SideBar'
import { Outlet } from 'react-router-dom'
import BindingData from '../../BindingData/BindingData'

const MainLayout = () => {
    return (
        <div className='row'>
            <div className="col-2">
                <SideBar />
            </div>
            <div className="col-10">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
