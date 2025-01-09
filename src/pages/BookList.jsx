import BookCard from "../components/BookCard";
import TopNavbar from "../components/TopNavbar";
import bookList from "../data/bookList.json";

export default function BookList() {
  return (
    <div>
      <TopNavbar />
      <hr />
      {bookList.map((books, index) => (
        <BookCard key={books.id} books={books} />
      ))}
    </div>
  );
}
