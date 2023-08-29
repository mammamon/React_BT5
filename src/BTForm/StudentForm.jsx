import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { baiTapFormActions } from '../store/baiTapForm/slice';
import '../App.css'

const StudentForm = () => {
  // State to manage form values and errors
  const [formValue, setFormValue] = useState({
    maSV: '',
    hoTen: '',
    soDienThoai: '',
    email: '',
  });

  const [formError, setFormError] = useState({
    maSV: '',
    hoTen: '',
    soDienThoai: '',
    email: '',
  });

  const dispatch = useDispatch();

  // Function to handle input changes and update form values and errors
  const handleFormValue = (name) => (ev) => {
    const { value } = ev.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });

    setFormError({
      ...formError,
      [name]: validate(name, value),
    });
  };

  // Validation function to validate input values
  const validate = (name, value) => {
    switch (name) {
      case 'maSV':
        if (!/^\d{6}$/.test(value)) {
          return 'Mã sinh viên phải có 6 số';
        }
        break;
      case 'hoTen':
        if (value.trim() === '') {
          return 'Họ Tên không được để trống';
        }
        break;
      case 'soDienThoai':
        if (!/^\d{10}$/.test(value)) {
          return 'Số điện thoại phải có 10 số';
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          return 'Email không hợp lệ';
        }
        break;
      default:
        break;
    }
    return ''; // No error
  };

  // Function to handle form submission
  const handleSubmit = (ev) => {
    ev.preventDefault();

    // Validate each field and update form errors
    const errors = {};
    for (const key in formValue) {
      errors[key] = validate(key, formValue[key]);
    }
    setFormError(errors);

    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error !== '');
    if (hasErrors) {
      return;
    }

    // Dispatch action to add student to the store
    dispatch(baiTapFormActions.addProduct(formValue));

    // Clear form values after submission
    setFormValue({
      maSV: '',
      hoTen: '',
      soDienThoai: '',
      email: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="row">
        {/* Column 1: Mã sinh viên and Số điện thoại */}
        <div className="col-md-6">
          <div className="mb-1">
            <label htmlFor="maSV" className="form-label">
              Mã sinh viên
            </label>
            <input
              type="text"
              className={`form-control ${formError.maSV ? 'is-invalid' : ''}`}
              id="maSV"
              name="maSV"
              value={formValue.maSV}
              onChange={handleFormValue('maSV')}
              required
            />
            <div className="invalid-feedback">{formError.maSV}</div>
          </div>
          <div className="mb-1">
            <label htmlFor="soDienThoai" className="form-label">
              Số điện thoại
            </label>
            <input
              type="text"
              className={`form-control ${formError.soDienThoai ? 'is-invalid' : ''}`}
              id="soDienThoai"
              name="soDienThoai"
              value={formValue.soDienThoai}
              onChange={handleFormValue('soDienThoai')}
              required
            />
            <div className="invalid-feedback">{formError.soDienThoai}</div>

          </div>
        </div>
        {/* Column 2: Họ Tên and Email */}
        <div className="col-md-6">
          <div className="mb-1">
            <label htmlFor="hoTen" className="form-label">
              Họ Tên
            </label>
            <input
              type="text"
              className={`form-control ${formError.hoTen ? 'is-invalid' : ''}`}
              id="hoTen"
              name="hoTen"
              value={formValue.hoTen}
              onChange={handleFormValue('hoTen')}
              required
            />
            <div className="invalid-feedback">{formError.hoTen}</div>
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${formError.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={formValue.email}
              onChange={handleFormValue('email')}
              required
            />
            <div className="invalid-feedback">{formError.email}</div>
          </div>
        </div>
        {/* Submit button */}
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
