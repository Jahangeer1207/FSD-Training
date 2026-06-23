import { useState } from "react";

function Contact() {

  const [msg, setMsg] =
    useState("");

  const submit = (e) => {
    e.preventDefault();

    setMsg(
      "Message Sent Successfully"
    );
  };

  return (
    <div className="container py-5">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          Contact Us
        </div>

        <div className="card-body">

          {msg && (
            <div className="alert alert-success">
              {msg}
            </div>
          )}

          <form onSubmit={submit}>

            <input
              className="form-control mb-3"
              placeholder="Name"
            />

            <input
              className="form-control mb-3"
              placeholder="Email"
            />

            <input
              className="form-control mb-3"
              placeholder="Subject"
            />

            <textarea
              className="form-control mb-3"
              rows="5"
              placeholder="Message"
            />

            <button className="btn btn-success">
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;