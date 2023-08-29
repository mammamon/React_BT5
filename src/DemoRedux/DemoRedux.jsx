//rafce
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREASE_NUMBER, INCREASE_NUMBER } from '../store/demoRedux/actionType'
import { demoReduxActions } from '../store/demoRedux/actions'

const DemoRedux = () => {
    // Lấy giá trị từ store redux
    const { number } = useSelector((state) => state.demoRedux)

    // Thay đổi giá trị trên store redux
    // dung dispatch để gửi lên store 1 action
    // action là 1 object gồm 2 thuộc tính :
    // + type: string (HẰNG SỐ) ex: 'ABC'
    // + payload: number, string, boolean, obj, array, func, undefined, null
    // => khi giá trị của store thay đổi => component nào đang lấy giá trị đó về sẽ bị render lại

    const dispatch = useDispatch()

    return (
        <div className="container mt-5">
            <h1>DemoRedux</h1>
            <p className="mt-3">Number: {number}</p>
            <div className="mt-3">
                <button
                    className="btn btn-success"
                    onClick={() => {
                        // dispatch({
                        //     type: INCREASE_NUMBER,
                        //     payload: 1,
                        // })
                        dispatch(demoReduxActions.increaseNumber(1))
                    }}
                >
                    + Number
                </button>
                <button
                    className="btn btn-danger ms-3"
                    onClick={() => {
                        // dispatch({
                        //     type: DECREASE_NUMBER,
                        //     payload: -1,
                        // })
                        dispatch(demoReduxActions.decreaseNumber(-1))
                    }}
                >
                    - Number
                </button>
            </div>
        </div>
    )
}

export default DemoRedux
