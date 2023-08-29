import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Child from './Child'

const DemoUseEffect = () => {
    const [number, setNumber] = useState(1)
    const [like, setLike] = useState(1)

    // cú pháp
    useEffect(() => {}, [])
    useEffect(() => {})

    // param 1: callback, param 2: [] (dependencies) có thể có hoặc không
    // 1. Luôn luôn chạy ít nhất 1 lần trong tất cả các trường hợp và sẽ chạy sau khi component render xong.

    // TH1:
    //+ Rất ít khi sử dụng tới
    //+ Luôn luôn chạy mỗi khi component render

    useEffect(() => {
        console.log('useEffect TH1')
    })

    // TH2:
    // + Chỉ chạy duy nhất 1 lần sau khi component render xong
    // + Sử dụng để call API, tương tác vs DOM

    useEffect(() => {
        console.log('useEffect TH2')
    }, [])

    // TH3:
    // + Chạy mỗi khi dependencies thay đổi

    useEffect(() => {
        console.log('useEffect TH3')
    }, [number, like])

    // TH4: cleanup function

    useEffect(() => {
        console.log('useEffect TH4')

        const time = setInterval(() => {
            console.log('Hello BC47')
        }, 1000)

        return () => {
            console.log('useEffect TH4 return')
            clearInterval(time)
        }
    }, [])

    // example

    const [movieList, setMovieList] = useState([])
    console.log('movieList: ', movieList)

    const getMovie = async () => {
        const data = await axios({
            method: 'GET',
            url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            headers: {
                TokenCybersoft:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NyIsIkhldEhhblN0cmluZyI6IjAxLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNjc0NTYwMDAwMCIsIm5iZiI6MTY3ODk4NjAwMCwiZXhwIjoxNzA2ODkzMjAwfQ.-axBsmkeW5i-ufzRXjqOhPEUumPXCQLTot5UjBRmtdQ',
            },
        })

        // console.log({ data })
        setMovieList(data?.data?.content)
    }

    // getMovie()

    useEffect(() => {
        // getMovie()
        // IIFE
        ;(async () => {
            const data = await axios({
                method: 'GET',
                url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                headers: {
                    TokenCybersoft:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NyIsIkhldEhhblN0cmluZyI6IjAxLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNjc0NTYwMDAwMCIsIm5iZiI6MTY3ODk4NjAwMCwiZXhwIjoxNzA2ODkzMjAwfQ.-axBsmkeW5i-ufzRXjqOhPEUumPXCQLTot5UjBRmtdQ',
                },
            })

            // console.log({ data })
            setMovieList(data?.data?.content)
        })()
    }, [])

    console.log('RENDER')
    return (
        <div>
            <h1>DemoUseEffect</h1>

            <p className="fs-3 mt-3">Number: {number}</p>
            <button
                className="btn btn-success mt-3"
                onClick={() => {
                    setNumber(number + 1)
                }}
            >
                + Number
            </button>
            <p className="fs-3 mt-3">Like: {like}</p>
            <button
                className="btn btn-success mt-3"
                onClick={() => {
                    setLike(like + 1)
                }}
            >
                + Like
            </button>

            <Child />
        </div>
    )
}

export default DemoUseEffect
