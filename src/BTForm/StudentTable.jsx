import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baiTapFormActions } from '../store/baiTapForm/slice';

const StudentTable = () => {
  const { productList } = useSelector((state) => state.baiTapForm);

  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ Tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productList.map((student) => (
            <tr key={student.maSV}>
              <td>{student.maSV}</td>
              <td>{student.hoTen}</td>
              <td>{student.soDienThoai}</td>
              <td>{student.email}</td>
              <td>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      dispatch(baiTapFormActions.editProduct(student));
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(baiTapFormActions.deleteProduct(student.maSV));
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
  );
};

export default StudentTable;
