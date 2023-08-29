import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="d-flex flex-column gap-3">
            {/* <NavLink to="/bindingdata">Binding Data</NavLink> */}
            <Link to="/bindingdata">Binding Data</Link>
            <NavLink to="/btcomponent">BT component</NavLink>
            <NavLink to="/rendercondition">Render with condition</NavLink>
        </div>
    )
}

export default HomePage
