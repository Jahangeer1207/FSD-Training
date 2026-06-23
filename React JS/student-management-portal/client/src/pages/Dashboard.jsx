import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";
import { Link } from "react-router-dom";

function Dashboard() {

  const [students, setStudents] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const loadStudents =
    async () => {
      const res =
        await API.get("/students");

      setStudents(res.data);
    };

  useEffect(() => {
    loadStudents();
  }, []);

  const deleteStudent =
    async (id) => {
      if (
        window.confirm(
          "Delete Student?"
        )
      ) {
        await API.delete(
          `/students/${id}`
        );

        loadStudents();
      }
    };

  const filtered =
    students.filter((s) =>
      s.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="container py-5">

      <h2>Dashboard</h2>

      <input
        className="form-control mb-4"
        placeholder="Search Student"
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      <table className="table table-bordered">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll</th>
            <th>Branch</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {filtered.map(
            (student) => (
              <tr
                key={student.id}
              >
                <td>
                  {student.id}
                </td>

                <td>
                  {student.name}
                </td>

                <td>
                  {student.roll}
                </td>

                <td>
                  {student.branch}
                </td>

                <td>

                  <Link
                    to={`/profile/${student.id}`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>

                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() =>
                      deleteStudent(
                        student.id
                      )
                    }
                  >
                    Delete
                  </button>

                </td>
              </tr>
            )
          )}

        </tbody>

      </table>
    </div>
  );
}

export default Dashboard;