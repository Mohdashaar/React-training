function Greet() {
  let name: string = "ASHAAR";
  if (name) {
    return <h3>Hello {name}</h3>;
  } else {
    return <h3>Hello guys</h3>;
  }
}
export default Greet;