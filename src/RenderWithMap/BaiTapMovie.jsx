// rafce
import React, { useState } from 'react'
import filmList from './data.json'
import { generatePath, useNavigate, useSearchParams } from 'react-router-dom'
import { PATH } from '../constant/config'
import { useQueryUrl } from '../hooks/useQueryUrl'
import qs from 'qs'

const BaiTapMovie = () => {
    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState()
    
    const [queryParams, setQueryParams] = useQueryUrl()
    console.log('queryParams: ', queryParams)

    const movieSearch = filmList.filter((item) =>
        // optional chaining
        item.tenPhim.toLowerCase().includes(queryParams?.movieName?.toLowerCase())
    )

    // JSON.stringify
    // console.log(
    //     qs.stringify(
    //         {
    //             name: 'abc',
    //             age: 20,
    //             gender: undefined
    //         },
    //         {
    //             addQueryPrefix: true,
    //         }
    //     )
    // )

    return (
        <div>
            <div className="row">
                <div className="mb-3">
                    <input
                        value={inputValue || ''}
                        type="text"
                        placeholder="Nhập tên phim"
                        className="form-control"
                        onChange={(ev) => {
                            // console.log('ev: ', ev);
                            // console.log(ev.target.value)
                            setInputValue(ev.target.value)
                        }}
                    />
                    <button
                        className="btn btn-outline-warning mt-3"
                        onClick={() => {
                            setQueryParams({
                                movieName: inputValue || undefined,
                            })
                        }}
                    >
                        Search
                    </button>
                </div>
                {(queryParams?.movieName ? movieSearch : filmList).map((film) => (
                    <div className="col-4 mt-3" key={film.maPhim}>
                        <div className="card">
                            <img
                                className="img-fluid"
                                src={film.hinhAnh}
                                alt="..."
                                style={{
                                    height: 450,
                                }}
                            />
                            <div className="card-body">
                                <p className="fw-bold" style={{ height: 50 }}>
                                    {film.tenPhim}
                                </p>
                                <p className="mt-3">{film.moTa.substring(0, 50)}...</p>
                                <button
                                    className="btn btn-success mt-3"
                                    onClick={() => {
                                        const path = generatePath(PATH.movieDetail, {
                                            movieId: film.maPhim,
                                        })
                                        navigate(path)
                                        // console.log('path: ', path);
                                    }}
                                >
                                    Detail
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BaiTapMovie
