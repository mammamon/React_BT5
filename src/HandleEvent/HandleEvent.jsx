// rafce
import React from 'react'

const HandleEvent = () => {
    const loger = () => {
        alert('Hello Word')
    }

    const showMessage = (message) => {
        alert(message)
    }

    // Mọi event trong react đều trả về 1 tham số event

    return (
        <div className="container mt-5">
            <h1 className="subTitle">HandleEvent</h1>

            {/* Hàm ko có tham số */}
            <button className="btn btn-outline-success mt-3" onClick={loger}>
                Loger
            </button>

            {/* Hàm có tham số */}
            <button
                className="btn btn-outline-info mt-3"
                onClick={() => {
                    showMessage('Hello CyberSoft')
                    // loger()
                }}
            >
                Show message
            </button>

            <button
                className="btn btn-outline-danger mt-3 ms-3"
                onClick={(event) => {
                    console.log(event.target)
                    // alert('Nguyễn Viết Hải Rank Bạc IV')
                }}
            >
                <span>Show message</span>
            </button>
        </div>
    )
}

export default HandleEvent

// useRef
