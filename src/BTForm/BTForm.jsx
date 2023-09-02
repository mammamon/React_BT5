import React from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

const BTForm = () => {
  // Access the studentList data from your Redux store
  const { studentList } = useSelector((state) => state.baiTapForm);

  return (
    <div>
      <h1>Thông tin sinh viên</h1>
      {/* Pass studentList as a prop to StudentForm */}
      <StudentForm studentList={studentList} />
      <StudentTable />
    </div>
  );
};

export default BTForm;
