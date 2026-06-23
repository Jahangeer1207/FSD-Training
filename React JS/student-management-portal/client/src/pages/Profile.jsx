import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import API from "../services/api";

function Profile() {

  const { id } = useParams();

  const [student, setStudent] =
    useState(null);

  useEffect(() => {

    API.get(`/students/${id}`)
      .then((res) =>
        setStudent(res.data)
      );

  }, [id]);

  if (!student)
    return <h3>Loading...</h3>;

  return (
    <div className="container py-5">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          Student Profile
        </div>

        <div className="card-body">

          <h4>{student.name}</h4>

          <hr />

          <p>
            <strong>Roll:</strong>{" "}
            {student.roll}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {student.email}
          </p>

          <p>
            <strong>Branch:</strong>{" "}
            {student.branch}
          </p>

          <p>
            <strong>Attendance:</strong>{" "}
            {student.attendance}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {student.address}
          </p>

        </div>
      </div>
    </div>
  );
}

export default Profile;