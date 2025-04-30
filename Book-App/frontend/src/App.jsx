import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import AddBook from "./components/AddBook";
import ViewBook from "./components/ViewBook";
import SearchBook from "./components/SearchBook";
import UpdateBook from "./components/UpdateBook";
import DeleteBook from "./components/DeleteBook";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link className="nav-link" to="/add">
            Add Book
          </Link>
          <Link className="nav-link" to="/view">
            View Book
          </Link>
          <Link className="nav-link" to="/search">
            Search Book
          </Link>
          <Link className="nav-link" to="/update">
            Update Book
          </Link>
          <Link className="nav-link" to="/delete">
            Delete Book
          </Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="welcome-message">
                  Welcome to the Book Management App
                </h1>
              }
            />
            <Route path="/add" element={<AddBook />} />
            <Route path="/view" element={<ViewBook />} />
            <Route path="/search" element={<SearchBook />} />
            <Route path="/update" element={<UpdateBook />} />
            <Route path="/delete" element={<DeleteBook />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>
            <strong>Jay Kishan</strong> | <strong>CSE(DS)</strong> |{" "}
            <strong>Section A</strong> | <strong>2200321540089</strong>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;