import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Welcome to CVR College</h1>

          <p className="lead mt-3">
            Student Management System using React,
            Node.js, MySQL and JWT Authentication.
          </p>

          <Link
            to="/register"
            className="btn btn-warning btn-lg"
          >
            Register Student
          </Link>
        </div>
      </section>

      <div className="container py-5">

        <div className="row">

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h4>Registration</h4>

                <p>
                  Register students with complete
                  academic details.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h4>Attendance</h4>

                <p>
                  Track student attendance
                  efficiently.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h4>Placements</h4>

                <p>
                  Monitor placement status of
                  students.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;