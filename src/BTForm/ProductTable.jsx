import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { baiTapFormActions } from '../store/baiTapForm/slice'

const ProductTable = () => {
    const { productList } = useSelector((state) => state.baiTapForm)
    console.log('productList: ', productList)

    const dispatch = useDispatch()

    return (
        <div className="mt-5">
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((prd) => (
                        <tr key={prd?.id}>
                            <td>{prd?.id}</td>
                            <td>
                                <img
                                    style={{
                                        width: 80,
                                        height: 80,
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                    src={prd?.image}
                                    alt="..."
                                />
                            </td>
                            <td>{prd?.name}</td>
                            <td>{prd?.price}</td>
                            <td>{prd?.description}</td>
                            <td>{prd?.productType}</td>
                            <td>
                                <div className="d-flex gap-3">
                                    <button
                                        className="btn btn-success"
                                        onClick={() => {
                                            dispatch(baiTapFormActions.editProduct(prd))
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            dispatch(baiTapFormActions.deleteProduct(prd.id))
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable
