import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baiTapFormActions } from '../store/baiTapForm/slice';
import '../App.css';

const StudentForm = ({studentList}) => {
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

  // Redux dispatch and state
  const dispatch = useDispatch();
  const { studentEdit } = useSelector((state) => state.baiTapForm);

  // Update form values when studentEdit changes
  useEffect(() => {
    if (studentEdit) {
      setFormValue(studentEdit);
    }
  }, [studentEdit]);

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

  // Function to handle form submission for adding a student
const handleSubmitAdd = (ev) => {
  ev.preventDefault();

  // Validate each field and update form errors
  const errors = validateForm();
  if (hasErrors(errors)) {
    return;
  }

  // Check for duplication of mã sinh viên, số điện thoại, and email
  const duplicateMaSV = studentList.some(
    (student) => student.maSV === formValue.maSV
  );
  const duplicateSoDienThoai = studentList.some(
    (student) => student.soDienThoai === formValue.soDienThoai
  );
  const duplicateEmail = studentList.some(
    (student) => student.email === formValue.email
  );

  if (duplicateMaSV) {
    errors.maSV = 'Mã sinh viên đã tồn tại';
  }
  if (duplicateSoDienThoai) {
    errors.soDienThoai = 'Số điện thoại đã tồn tại';
  }
  if (duplicateEmail) {
    errors.email = 'Email đã tồn tại';
  }

  setFormError(errors);

  // Check if there are any errors
  if (hasErrors(errors)) {
    return;
  }

  // Dispatch action to add student to the store
  dispatch(baiTapFormActions.addStudent(formValue));

  // Clear form values after submission
  clearForm();
};


  // Function to handle form submission for updating a student
  const handleSubmitUpdate = (ev) => {
    ev.preventDefault();

    // Validate each field and update form errors
    const errors = validateForm();
    if (hasErrors(errors)) {
      return;
    }

    // Dispatch action to update student in the store
    dispatch(baiTapFormActions.updateStudent(formValue));

    // Clear form values after submission
    clearForm();
  };

  // Function to validate all form fields and update form errors
  const validateForm = () => {
    const errors = {};
    for (const key in formValue) {
      errors[key] = validate(key, formValue[key]);
    }

    setFormError(errors);
    return errors;
  };

  // Function to check if there are any form errors
  const hasErrors = (errors) => {
    return Object.values(errors).some((error) => error !== '');
  };

  // Function to clear form values
  const clearForm = () => {
    setFormValue({
      maSV: '',
      hoTen: '',
      soDienThoai: '',
      email: '',
    });
  };

  return (
    <div>
      <form onSubmit={studentEdit ? handleSubmitUpdate : handleSubmitAdd} className="row">
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
          {studentEdit ? (
            <button type="submit" className="btn btn-primary">
              Cập nhật sinh viên
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Thêm sinh viên
            </button>
          )}
        </div>
      </form>

    </div>
  );
};

export default StudentForm;
