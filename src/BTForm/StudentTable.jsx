import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baiTapFormActions } from '../store/baiTapForm/slice';

const StudentTable = () => {
  const { studentList } = useSelector((state) => state.baiTapForm);
  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th className="text-center">Mã sinh viên</th>
            <th className="text-center">Họ Tên</th>
            <th className="text-center">Số điện thoại</th>
            <th className="text-center">Email</th>
            <th className='text-center'>Quản lý</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => (
            <tr key={student.maSV}>
              <td className="text-center">{student.maSV}</td>
              <td className="text-center">{student.hoTen}</td>
              <td className="text-center">{student.soDienThoai}</td>
              <td className="text-center">{student.email}</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-3">
                  <button
                    className="btn-edit btn btn-success"
                    onClick={() => {
                      dispatch(baiTapFormActions.editStudent(student));
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-delete btn btn-danger"
                    onClick={() => {
                      dispatch(baiTapFormActions.deleteStudent(student.maSV));
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
