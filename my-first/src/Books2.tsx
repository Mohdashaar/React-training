import Bookses from './Bookses';

const Books2 = () => {
  const Books = [
    {
      bookId: "b1",
      name: "Atomic Habits",
      auther: "James Clear",
      pages: 320,
      pirce: [600],
    },
    {
      bookId: "b2",
      name: "The 7 Habits of Highly Effective People",
      auther: "Stephen R. Covey",
      pages: 432,
      pirce: [650],
    },
    {
      bookId: "b3",
      name: "You Can Win",
      auther: "Shiv Khera",
      pages: 340,
      pirce: [500],
    },
  ];

  return (
    <div className="border border-danger p-4 m-4">
      <h2>Available Books</h2>
      {Books.map((book) => (
        <Bookses
          key={book.bookId} 
          name={book.name}
          auther={book.auther}
          pages={book.pages}
          pirce={book.pirce}
        />
      ))}
    </div>
  );
};

export default Books2;
