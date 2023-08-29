import React from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

const BTForm = () => {
  return (
    <div>
      <h1>Thông tin sinh viên</h1>
      <StudentForm />
      <StudentTable />
    </div>
  );
};

export default BTForm;
