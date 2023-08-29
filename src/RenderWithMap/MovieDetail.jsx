import React from 'react'
import { useParams } from 'react-router-dom'
import movieList from './data.json'

const MovieDetail = () => {
    const params = useParams()
    console.log('params: ', params)

    //Tìm kiếm movielist có maPhim == params.movieId
    const movieDetail = movieList.find((e) => e.maPhim === params.movieId * 1)

    console.log('movieDetail: ', movieDetail)
    return (
        <div>
            <h2 className='text-center'>MovieDetail</h2>
            <div className="row mt-5">
                <div className="col-4">
                    <img className="img-fluid" src={movieDetail.hinhAnh} alt="" />
                </div>
                <div className="col-8">
                    <p className='fw-bold fs-2'>{movieDetail.tenPhim}</p>
                    <p>{movieDetail.moTa}</p>
                    <p>{movieDetail.ngayKhoiChieu}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
