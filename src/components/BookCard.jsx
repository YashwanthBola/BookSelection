import { Link } from "react-router-dom";

export default function BookCard({ books }) {
  return (
    <div className="row col-md-4">
      <div class="card text-center">
        <div class="card-header">{books.author}</div>
        <div class="card-body">
          <h5 class="card-title">{books.name}</h5>
          <Link to={`/bookDetails/${books.id}`}>Book Details</Link>
        </div>
        <div class="card-footer text-body-secondary">{books.rating}</div>
      </div>
    </div>
  );
}
