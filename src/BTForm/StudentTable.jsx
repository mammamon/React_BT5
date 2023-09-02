import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baiTapFormActions } from '../store/baiTapForm/slice';

const StudentTable = () => {
  const { studentList } = useSelector((state) => state.baiTapForm);
  const dispatch = useDispatch();
  //chức năng tìm kiếm
  const [searchQuery, setSearchQuery] = useState('');
  const filteredStudents = studentList.filter((student) => {
    const studentInfo = `${student.maSV} ${student.hoTen} ${student.soDienThoai} ${student.email}`;
    return studentInfo.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="mt-4">
      <div className="mb-4 px-3">
        <input
          type="text"
          placeholder="Tìm kiếm thông tin sinh viên..."
          className="form-control"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
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
          {filteredStudents.map((student) => (
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
                    Sửa
                  </button>
                  <button
                    className="btn-delete btn btn-danger"
                    onClick={() => {
                      dispatch(baiTapFormActions.deleteStudent(student.maSV));
                    }}
                  >
                    Xóa
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
