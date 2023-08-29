import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.scss'
import { PATH } from '../constant/config'

const SideBar = () => {
    return (
        <div className="SideBar d-flex flex-column gap-3">
            {/* <Link to="/bindingdata">Binding Data</Link> */}
            <NavLink to={PATH.bindingData}>Binding Data</NavLink>
            <NavLink to={PATH.baiTapComponent}>BT component</NavLink>
            <NavLink to={PATH.renderCondition}>Render with condition</NavLink>
            <NavLink to={PATH.handleEvent}>Handle Event</NavLink>
            <NavLink to={PATH.styledComponent}>Style Component</NavLink>
            <NavLink to={PATH.renderMap}>Render With Map</NavLink>
            <NavLink to={PATH.demoState}>Demo State</NavLink>
            <NavLink to={PATH.demoProps}>Demo Props</NavLink>
            <NavLink to={PATH.baiTapShoeShop}>BT Shoe Shop</NavLink>
            <NavLink end to={PATH.redux}>
                Demo Redux
            </NavLink>
            <NavLink to={PATH.baiTapPhone}>BT Phone</NavLink>
            <NavLink to={PATH.baiTapMovie}>BT Movie</NavLink>
            <NavLink to={PATH.baiTapForm}>BT Form Product</NavLink>
            <NavLink to={PATH.useEffect}>Demo UseEffect</NavLink>
        </div>
    )
}

export default SideBar
