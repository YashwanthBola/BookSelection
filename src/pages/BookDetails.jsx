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
      <h3>{currentBook[0].bookname}</h3>
      <h5>{currentBook[0].authorName}</h5>
      <h5>{currentBook[0].rating}</h5>
      <h5>{currentBook[0].published}</h5>
      <h5>{currentBook[0].isFeatured}</h5>
      <h5>{currentBook[0].isTrending}</h5>
      <h5>{currentBook[0].genre}</h5>
      <h5>{currentBook[0].reviews.rating}</h5>
    </div>
  );
}
