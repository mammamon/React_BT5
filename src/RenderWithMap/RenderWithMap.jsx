import React from 'react'
import BaiTapMovie from './BaiTapMovie'

const RenderWithMap = () => {
    const products = [
        {
            name: 'Iphone 7+',
            price: 10000000,
            color: 'black',
        },
        {
            name: 'Iphone 8+',
            price: 8000000,
            color: 'pink',
        },
        {
            name: 'Iphone 10+',
            price: 12000000,
            color: 'blue',
        },
    ]

    return (
        <div className="container mt-5">
            <h1>RenderWithMap</h1>
            <p>Danh sách sản phẩm</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 
                    1. Bắt buộc có return => UI
                    2. Chỉ đc phép return về 1 thẻ duy nhất
                    3. Phải có thuộc tính key ở thẻ bao bọc ngoài cùng và giá trị của key là duy nhất
                    4. Hạn chế sử dụng index làm giá trị của thuộc tính key 
                        => chỉ sử dụng khi mảng tĩnh (ko có thêm xóa sửa)
                 */}
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.color}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <h2 className="mt-5">Bài tập Movie</h2>
            <BaiTapMovie />
        </div>
    )
}

export default RenderWithMap

// state, props
