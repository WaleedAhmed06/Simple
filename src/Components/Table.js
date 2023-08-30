import React from 'react';

const Table = ({ data }) => {
  return (
    <table >
      <thead>
        <tr>
          <th>ID</th>
          <th>Age</th>
          <th>UserName</th>
          <th>Institute</th>
          <th>isActive</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.id}</td>
            <td>{row.age}</td>
            <td>{row.userName}</td>
            <td>{row.institute}</td>
            <td>{row.isActive ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
