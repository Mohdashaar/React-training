type EmployeeProps = {
  name: string;
  designation: string;
  department: string;
  salary: number;
};

function Assignment4({ name, designation, department, salary }: EmployeeProps) {
  return (
    <div className="card m-3 bg-light">
      <div className="card-body">
        <h5 className="card-title text-success">{name}</h5>
        <p className="card-text bg-primary"><strong>Designation:</strong> {designation}</p>
        <p className="card-text text-danger"><strong>Department:</strong> {department}</p>
        <p className="card-text text-danger"><strong>Salary:</strong> ₹{salary.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Assignment4;
