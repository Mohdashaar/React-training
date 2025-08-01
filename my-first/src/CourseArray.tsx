function Courses (){
 let courses =[
  "Front-end Dev",
  "advance web design",
  "full stack MERN",
  "canva",
  "mongo DB"

 ];
 return (
  <div>
    <h2 className="Text-Warning">List of courses</h2>
    <ul className="List-group">
  {courses.map((course) =>(
  <li className="LIst-group-items">{course} </li>
  
  ))}

 </ul>
 </div>
 );
}
export default Courses;
