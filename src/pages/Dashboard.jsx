import { useEffect, useState } from "react";
import TopNavbar from "../components/TopNavbar";
import axios from "axios";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(3);
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (currentPage) => {
    let response = await fetch(
      `http://localhost:8000/api/books?page=${currentPage}&limit=10`
    );
    let data = await response.json();
    console.log(data);
    setApiResponse(data.data);
  };

  const handlePage = (pageNumber) => {
    if (pageNumber > 0 && pageNumber < totalPage) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <div>
      <TopNavbar />
      <div className="container mt-4">
        <h1 className="mb-4">Dashboard</h1>

        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header">
                <h5>Users</h5>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiResponse.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <button onClick={() => handlePage(currentPage - 1)}>
                  Previous
                </button>
                <button onClick={() => handlePage(currentPage + 1)}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
