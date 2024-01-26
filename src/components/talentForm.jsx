import React, { useState } from "react";
import axios from "axios";

export const TalentForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const url = "http://localhost:7000";

  const axiosAPI = axios.create({
    baseURL: url,
  });

  const apiFromRequest = (method, url, request) => {
    return axiosAPI({
      method,
      url,
      data: request,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        return Promise.resolve(res.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const postFrom = (url, request) => apiFromRequest("post", url, request);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleTalentSave(e) {
    e.preventDefault();
    console.log(e.target);
    // Code to handle login goes here

    try {
      //const response = await fetch("http://localhost:7000/talent/save", {
      const response = postFrom("/talent/save", e.target);

      if (response.ok) {
        console.log("Data successfully submitted!");
        // You can handle success here, such as showing a success message to the user.
      } else {
        console.error("Error submitting data:", response.statusText);
        // You can handle errors here, such as showing an error message to the user.
      }
    } catch (error) {
      console.error("Error:", error.message);
    }

    props.toggle();
  }

  return (
    <div className="popup w-full h-full flex items-center justify-center p-8 lg:p-0">
      <div className="popup-inner w-full h-full bg-gray-900 opacity-50">
        <div className="p-8 rounded border border-gray-200">
          <h2>Save to Ulah database</h2>
          <p className="text-gray-600 mt-6">
            Name, phonenumber and email are mandatory.
          </p>
          <form enctype="multipart/form-data" onSubmit={handleTalentSave}>
            <div className="mt-8 grid lg:grid-cols-3 gap-4">
              {/* <label>
                Name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  value={number}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label> */}

              <div className="form-group">
                <label for="name" className="col-sm-2 control-label">
                  Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label for="name" className="col-sm-2 control-label">
                  Email:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    // required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label for="birthdate" className="col-sm-2 control-label">
                  Birthdate:
                </label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    id="birthdate"
                    name="birthdate"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
              >
                Save
              </button>
              <button
                onClick={props.toggle}
                className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
