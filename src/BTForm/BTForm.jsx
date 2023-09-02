import React from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';
import { useSelector } from 'react-redux';

const BTForm = () => {
  const { studentList } = useSelector((state) => state.baiTapForm);
  return (
    <div>
      <div className='p-2 mb-4 bg-dark'>
        <h2 className='text-white'>Thông tin sinh viên</h2>
      </div>
      <StudentForm studentList={studentList} />
      <StudentTable />
    </div>
  );
};

export default BTForm;
