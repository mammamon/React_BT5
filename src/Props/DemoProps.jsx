import React from 'react'
import HeaderDemo from './HeaderDemo'

const DemoProps = () => {
    return (
        <div className="container mt-5">
            <h1>DemoProps</h1>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />

            <HeaderDemo bg="red" fontSize="20px" name="HẢI ABC" />
            <HeaderDemo bg="yellow" />
            <HeaderDemo bg="green" />
            <HeaderDemo bg="blue" />
        </div>
    )
}

export default DemoProps
