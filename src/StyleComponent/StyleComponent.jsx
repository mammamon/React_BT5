// rafce
import React from 'react'
import './style.css' // css ăn toàn bộ component trong dự án
import './style.scss'

import style from './style.module.css'
import stl from './style.module.scss'

const StyleComponent = () => {
    return (
        <div className="container mt-5 StyleComponent">
            <h1 className="title">StyleComponent</h1>
            <p className={`${style.subTitle} ${style.description} ${style['sub-title']}`}>
                Sub Title
            </p>

            <p style={{ fontSize: '20px', fontWeight: 600, color: 'red' }}>Nguyễn Viết Hải</p>
            <p className="style__title">Hello</p>
        </div>
    )
}

export default StyleComponent

// styled-component
