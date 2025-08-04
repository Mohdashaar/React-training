interface BooksesProps {
  name: string;
  auther: string;
  pages: number;
  pirce: number[];
}

const Bookses = (props: BooksesProps) => {
  return (
    <div className="border border-warning m-2 p-3 rounded">
      <h3 className="text-dark">{props.name}</h3>
      <p className="text-info"><strong>Author:</strong> {props.auther}</p>
      <p className="text-primary"><strong>Pages:</strong> {props.pages}</p>
      <p className="text-muted"><strong>Price:</strong></p>
      <ol>
        {props.pirce.map((price) => (
          <li key={price}>₹{price}</li> 
        ))}
      </ol>
    </div>
  );
};

export default Bookses;
