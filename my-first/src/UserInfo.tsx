import "./UserInfo.css";
function UserInfo() {
  let user = {
    name: "Mohd Ashaar",
    about:
      "Frontend React Developer and UI/UX Designer with 10+ years of experience.",
    profileImg:
      "https://i0.wp.com/peppervirtualassistant.com/wp-cms/wp-content/uploads/2017/08/employees.jpg?fit=3150%2C2102&ssl=1",
    profileUrl: "https://mohdashaar.github.io/html-web-design/?fbclid=PAQ0xDSwLt9khleHRuA2FlbQIxMAABpxG--EEF7ZvUZarFbhco0jGO6XH_9k8Lm4o7iEBF8zM-xTNbn6gkVC0mU8Np_aem_AtsF7-jZN7-Yz8BDbDfUiw",
  };


  return (
    <div className="card">
      <img src={user.profileImg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.about}</p>
        <a href={user.profileUrl} className="btn btn-primary">
          View My Profile
        </a>
      </div>
    </div>
  );
}
export default UserInfo;