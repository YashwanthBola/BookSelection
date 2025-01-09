import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/bookDetails/:booksId" element={<BookDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
