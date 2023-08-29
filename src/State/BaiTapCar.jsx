import React, { useState } from 'react'

const BaiTapCar = () => {
    const [imgSrc, setImgSrc] = useState('./images/car/red-car.jpg')

    const handleImgSrc = (name) => {
        setImgSrc(`./images/car/${name}-car.jpg`)
    }

    // currying func
    const handleImg = (name) => (event) => {
        setImgSrc(`./images/car/${name}-car.jpg`)
    }

    return (
        <div className="mt-5">
            <h2>Bài tập car</h2>
            <div className="row">
                <div className="col-8">
                    <img className="img-fluid" src={imgSrc} alt="..." />
                </div>
                <div className="col-4 d-flex flex-column" style={{ gap: 20 }}>
                    <button
                        className="btn btn-dark"
                        // onClick={() => {
                        //     setImgSrc('./images/car/black-car.jpg')
                        // }}
                        // onClick={() => handleImgSrc('black')}
                        onClick={handleImg('black')}
                    >
                        Black
                    </button>
                    <button
                        className="btn btn-danger"
                        // onClick={() => {
                        //     setImgSrc('./images/car/red-car.jpg')
                        // }}
                        // onClick={() => handleImgSrc('red')}
                        onClick={handleImg('red')}
                    >
                        Red
                    </button>
                    <button
                        className="btn btn-secondary"
                        // onClick={(event) => {
                        //     setImgSrc('./images/car/silver-car.jpg')
                        // }}
                        // onClick={() => handleImgSrc('silver')}
                        onClick={handleImg('silver')}
                    >
                        Silver
                    </button>
                    <button
                        className="btn text-white"
                        style={{ background: 'grey' }}
                        // onClick={() => {
                        //     setImgSrc('./images/car/steel-car.jpg')
                        // }}
                        // onClick={() => handleImgSrc('steel')}
                        onClick={handleImg('steel')}
                    >
                        Steel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BaiTapCar
