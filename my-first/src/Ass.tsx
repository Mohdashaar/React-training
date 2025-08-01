type EmployeeProps = {
 name: string;
 id: string;
 role: string;
 age: string;
};

function Ass ({ name ,id, role, age }: EmployeeProps ){
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">id:{id}</p>
                <p className="card-text">role:{role}</p>
                <p className="card-text">age:{age}</p>
            </div>
        </div>
    )
}
export default Ass;