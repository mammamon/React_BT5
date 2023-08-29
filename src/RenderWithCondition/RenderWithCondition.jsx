//rafce
import React from 'react'

const RenderWithCondition = () => {
    const isLogin = true
    const isShowMessage = true
    const renderLogin = () => {
        if (isLogin) {
            return (
                <div>
                    <p>Hello Hải</p> <button className="btn btn-danger">Đăng xuất</button>
                </div>
            )
        }
        return <button className="btn btn-success">Đăng nhập</button>
    }
    return (
        <div className="container">
            <h1>RenderWithCondition</h1>
            {/* {isLogin ? (
                <div>
                    <p>Hello Hải</p> <button className="btn btn-danger">Đăng xuất</button>
                </div>
            ) : (
                <button className="btn btn-success">Đăng nhập</button>
            )} */}

            {renderLogin()}

            {isShowMessage && <p className="fs-3 mt-5">Hello BC 47</p>}
        </div>
    )
}

export default RenderWithCondition

// state
// props
// redux
// redux-toolkit
// react-router
// form (react-hook-form)
// lifeCycle
// useEffect, useMemo, useRef, useCallback, useId, useTransition, memo
// react-query
// typescript
