import TopNavbar from "../components/TopNavbar";
import BookList from "./BookList";
import bookList from "../data/bookList.json";

export default function Home() {
  const trendingBooks = bookList.filter((books) => books.isTrending === true);
  const featuredBooks = bookList.filter((books) => books.isFeatured === true);
  return (
    <div>
      <TopNavbar />
      <div className="container mt-4">
        <h1 className="mb-4">Home</h1>
        <hr />

        <section className="mb-5">
          <h2>Trending Books</h2>
          <div className="row">
            {trendingBooks.length > 0 ? (
              trendingBooks.map((books) => (
                <div className="col-md-4 mb-3" key={books.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{books.bookname}</h5>
                      <p className="card-text">
                        <strong>Author:</strong> {books.authorName}
                      </p>
                      <p className="card-text">
                        <strong>Genre:</strong> {books.genre}
                      </p>
                      <p className="card-text">
                        <strong>Published:</strong> {books.published}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>
                No trending books available {console.log(trendingBooks.length)}
              </p>
            )}
          </div>
        </section>
        <section>
          <h2>Featuring Books</h2>
          <div className="row">
            {featuredBooks.length > 0 ? (
              featuredBooks.map((books) => (
                <div className="col-md-4 mb-3" key={books.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{books.bookname}</h5>
                      <p className="card-text">
                        <strong>Author:</strong> {books.authorName}
                      </p>
                      <p className="card-text">
                        <strong>Genre:</strong> {books.genre}
                      </p>
                      <p className="card-text">
                        <strong>Published:</strong> {books.published}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No Featuring books available</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
