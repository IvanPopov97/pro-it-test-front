import React from 'react';
import './App.css';

function App() {
  return (
      <div className="Table-container">
        <table className="Flex-table">
          <thead>
          <tr>
            <th>ID</th>
            <th>Название компании</th>
            <th>Количество сотрудников</th>
            <th>Головная компания</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><span>ID</span>1</td>
            <td><span>Название компании</span>Perm State University</td>
            <td><span>Количество сотрудников</span>19563</td>
            <td><span>Головная компания</span></td>
          </tr>
          <tr>
            <td><span>ID</span>2</td>
            <td><span>Название компании</span>Мегафон</td>
            <td><span>Количество сотрудников</span>963475</td>
            <td><span>Головная компания</span>Yota</td>
          </tr>
          </tbody>
        </table>
      </div>
  );
}

export default App;
