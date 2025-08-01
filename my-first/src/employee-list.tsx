function EmployeeList() {
  const employees = [
    {
      id: "A101",
      name: "arshad ",
      department: "Human Resources",
      age: 34,
    },
    {
      id: "A102",
      name: "ramesh",
      department: "Engineering",
      age: 29,
    },
    {
      id: "A103",
      name: "farhan",
      department: "Marketing",
      age: 41,
    },
    {
      id: "A104",
      name: "waseem",
      department: "Sales",
      age: 31,
    },
    {
      id: "A105" ,
      name: "Abrar" ,
      department: "data base" ,
      age: 29,
    }
  ];

  return (
    <>
      <h2 className="text-success">Employee List</h2>
      <ul className="list-group">
        {employees.map((employee) => (
          <li className="list-group-item" key={employee.id}>
            {employee.name} - {employee.department}
            <br />
            <span className="small text-muted">Age: {employee.age} | ID: {employee.id}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EmployeeList;
