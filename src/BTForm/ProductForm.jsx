import React, {
    useEffect,
    useState,
    useMemo,
    memo,
    useCallback,
    useRef,
    useContext,
    useTransition,
} from 'react'
// import { flushSync } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { baiTapFormActions } from '../store/baiTapForm/slice'

const ProductForm = () => {
    const [formValue, setFormValue] = useState()
    const [formError, setFormError] = useState()

    const { productEdit } = useSelector((state) => state.baiTapForm)
    console.log('productEdit: ', productEdit)

    const dispatch = useDispatch()

    const validate = (element) => {
        const { validity, minLength, title, value } = element
        console.log('validity: ', validity)

        const { valueMissing, tooShort, patternMismatch } = validity

        let mess = ''

        if (valueMissing) {
            mess = `Vui lòng nhập ${title}`
        } else if (tooShort || value.length < minLength) {
            mess = `Vui lòng nhập ${title} tối thiểu ${minLength} ký tự`
        } else if (patternMismatch) {
            mess = `Vui lòng nhập đúng ${title}`
        }
        return mess
    }

    //currying function
    const handleFormValue = () => (ev) => {
        const { name, value } = ev.target
        let mess = validate(ev.target)

        // console.log('validity: ', validity)
        // const { valueMissing, tooShort, patternMismatch } = validity

        // let mess = ''

        // if (valueMissing) {
        //     mess = `Vui lòng nhập ${title}`
        // } else if (tooShort) {
        //     mess = `Vui lòng nhập ${title} tối thiểu ${minLength} ký tự`
        // } else if (patternMismatch) {
        //     mess = `Vui lòng nhập đúng ${title}`
        // }

        setFormError({
            ...formError,
            [name]: mess,
        })

        setFormValue({
            ...formValue,
            [name]: value,
        })
    }

    useEffect(() => {
        // if (!productEdit) return
        // setFormValue(productEdit)

        if (productEdit) {
            setFormValue(productEdit)
        }
    }, [productEdit])

    console.log('RENDER')
    return (
        <div>
            {/* button ở trong form mặc định sẽ có type là submit */}

            <form
                noValidate
                onSubmit={(ev) => {
                    // Ngăn chặn sự kiện reload của browser khi submit form
                    ev.preventDefault()

                    const elements = document.querySelectorAll('input')
                    console.log('elements: ', elements)

                    let errors = {}
                    elements.forEach((ele) => {
                        const { name } = ele
                        errors[name] = validate(ele)
                        // flushSync(
                        //     setFormError(() => {
                        //         return (errors[name] = validate(ele))
                        //     })
                        // )
                    })
                    setFormError(errors)
                    let isFlag = false
                    for (let key in errors) {
                        if (errors[key]) {
                            isFlag = true
                            break
                        }
                    }
                    if (isFlag) return

                    if (!productEdit) {
                        // submit create prouct
                        dispatch(baiTapFormActions.addProduct(formValue))
                    } else {
                        dispatch(baiTapFormActions.updateProduct(formValue))
                    }

                    console.log('submit')
                }}
            >
                <h2 className="p-4 bg-dark text-warning">Product Info</h2>

                <div className="mt-3 row">
                    <div className="col-6">
                        <p>ID</p>
                        <input
                            type="text"
                            className="form-control"
                            name="id"
                            title="id"
                            disabled={!!productEdit}
                            value={formValue?.id || ''}
                            // value={productEdit?.id}
                            required
                            minLength={5}
                            maxLength={20}
                            // pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                            // onChange={(ev) => {
                            //     setFormValue({
                            //         ...formValue,
                            //         id: ev.target.value,
                            //     })
                            // }}
                            onChange={handleFormValue()}
                        />
                        {formError?.id && <p className="text-danger">{formError?.id}</p>}
                    </div>
                    <div className="col-6">
                        <p>Image</p>
                        <input
                            type="text"
                            className="form-control"
                            name="image"
                            title="image"
                            required
                            value={formValue?.image || ''}
                            // value={productEdit?.image}
                            // onChange={(ev) => {
                            //     setFormValue({
                            //         ...formValue,
                            //         image: ev.target.value,
                            //     })
                            // }}
                            onChange={handleFormValue()}
                        />
                        {formError?.image && <p className="text-danger">{formError?.image}</p>}
                    </div>
                    <div className="col-6">
                        <p>Name</p>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            title="name"
                            value={formValue?.name || ''}
                            onChange={handleFormValue()}
                            required
                            minLength={10}
                        />
                        {formError?.name && <p className="text-danger">{formError?.name}</p>}
                    </div>
                    <div className="col-6">
                        <p>ProductType</p>
                        <input
                            type="text"
                            className="form-control"
                            title="product type"
                            name="productType"
                            value={formValue?.productType || ''}
                            onChange={handleFormValue()}
                        />
                        {formError?.productType && (
                            <p className="text-danger">{formError?.productType}</p>
                        )}
                    </div>
                    <div className="col-6">
                        <p>Price</p>
                        <input
                            type="text"
                            className="form-control"
                            name="price"
                            title="giá"
                            value={formValue?.price || ''}
                            onChange={handleFormValue()}
                            required
                            pattern="^[0-9]+$"
                        />
                        {formError?.price && <p className="text-danger">{formError?.price}</p>}
                    </div>
                    <div className="col-6">
                        <p>Description</p>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            title="description"
                            value={formValue?.description || ''}
                            onChange={handleFormValue()}
                        />
                    </div>
                </div>

                <div className="mt-3 d-flex gap-3">
                    {productEdit ? (
                        <button className="btn btn-info">Update</button>
                    ) : (
                        <button className="btn btn-success">Create</button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default ProductForm
