import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="fs-1 fw-bold text-danger text-center mt-5">
            404 Not Found
            <div>
                <button
                    className="btn btn-success mt-5"
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    Back Home
                </button>
            </div>
        </div>
    )
}

export default NotFound
