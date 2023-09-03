import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baiTapFormActions } from '../store/baiTapForm/slice';
import '../App.css';

const StudentForm = ({ studentList }) => {
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
  const { studentEdit } = useSelector((state) => state.baiTapForm);

  // Cập nhật input value khi giá trị thay đổi
  useEffect(() => {
    if (studentEdit) {
      setFormValue(studentEdit);
    }
  }, [studentEdit]);

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

  // Đặt điều kiện và thông báo khi điều kiện lỗi
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
    return '';
  };
  // check điều kiện và hiện thông báo nếu có lỗi
  const validateForm = () => {
    const errors = {};
    for (const key in formValue) {
      errors[key] = validate(key, formValue[key]);
    }

    setFormError(errors);
    return errors;
  };

  // kiểm tra form có lỗi nào không
  const hasErrors = (errors) => {
    return Object.values(errors).some((error) => error !== '');
  };

  // làm trống form
  const clearForm = () => {
    setFormValue({
      maSV: '',
      hoTen: '',
      soDienThoai: '',
      email: '',
    });
  };

  //handle thêm sinh viên
  const handleSubmitAdd = (ev) => {
    ev.preventDefault();
    // Check điều kiện lỗi
    const errors = validateForm();
    if (hasErrors(errors)) {
      return;
    }
    // Kiểm tra trùng lặp mã sinh viên, số điện thoại, and email
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
    if (hasErrors(errors)) {
      return;
    }

    // Dispatch thêm sinh viên 
    dispatch(baiTapFormActions.addStudent(formValue));
    clearForm();
  };

  // handle cập nhật sinh viên
  const handleSubmitUpdate = (ev) => {
    ev.preventDefault();
    // Check điều kiện lỗi
    const errors = validateForm();
    if (hasErrors(errors)) {
      return;
    }

    // Dispatch cập nhật sinh viên
    dispatch(baiTapFormActions.updateStudent(formValue));
    clearForm();
  };

  return (
    <div className='px-3'>
      <form onSubmit={studentEdit ? handleSubmitUpdate : handleSubmitAdd} className="row">
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
              disabled={studentEdit !== undefined} // disable khi đang sửa
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
        <div className="col-md-12">
          {studentEdit ? (
            <button type="submit" className="btn btn-success">
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
