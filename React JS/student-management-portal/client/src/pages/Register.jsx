import { useState } from "react";
import API from "../services/api";

function Register() {

  const [message, setMessage] =
    useState("");

  const [form, setForm] = useState({
    name: "",
    roll: "",
    email: "",
    mobile: "",
    gender: "",
    branch: "",
    dob: "",
    address: "",
    attendance: "Present",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        form
      );

      setMessage(
        "Student Registered Successfully"
      );

    } catch (err) {
      setMessage(
        err.response?.data?.message
      );
    }
  };

  return (
    <div className="container py-5">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          Student Registration
        </div>

        <div className="card-body">

          {message && (
            <div className="alert alert-info">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <input
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  className="form-control"
                  placeholder="Roll Number"
                  name="roll"
                  onChange={handleChange}
                />
              </div>

            </div>

            <input
              className="form-control mb-3"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />

            <input
              className="form-control mb-3"
              placeholder="Mobile"
              name="mobile"
              onChange={handleChange}
            />

            <select
              className="form-select mb-3"
              name="gender"
              onChange={handleChange}
            >
              <option>Male</option>
              <option>Female</option>
            </select>

            <select
              className="form-select mb-3"
              name="branch"
              onChange={handleChange}
            >
              <option>CSE</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>Civil</option>
            </select>

            <input
              type="date"
              className="form-control mb-3"
              name="dob"
              onChange={handleChange}
            />

            <textarea
              className="form-control mb-3"
              placeholder="Address"
              name="address"
              onChange={handleChange}
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />

            <button className="btn btn-success">
              Register
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;