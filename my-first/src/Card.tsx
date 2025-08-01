type ProfileCardProps = {
  name: string;
  role: string;
  skills: string[];
};

function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="card p-4 m-5">
      <h4 className="card-title">{props.name}</h4>
      <p className="card-content">{props.role}</p>
      <h5 className="text-danger">Skills</h5>
      <ul>
        {props.skills.map((skill) => (
          <li className="text-white">{skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default ProfileCard;