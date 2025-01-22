import { useParams } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import bookList from "../data/bookList.json";

export default function BookDetails() {
  const { booksId } = useParams();
  const currentBook = bookList.filter((books) => books.id == booksId);
  return (
    <div>
      <TopNavbar />
      <hr />
      Book Details for BookId: {booksId}
      <h3>{currentBook[0].name}</h3>
      <h5>{currentBook[0].author}</h5>
      <h5>{currentBook[0].rating}</h5>
    </div>
  );
}
