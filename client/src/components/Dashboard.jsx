import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import FilterTable from "./UI/FilterTable";
import axios from "axios";

const Dashboard = () => {
  const [ToDo, setToDo] = useState("");

  const [reloadTrigger, setReloadTrigger] = useState("");

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const handleSubmit = (e) => {
    let token = localStorage.getItem("token");
    axios
      .post(`http://localhost:3000/todo/addTodo/${token}`, {
        todo: ToDo,
      })
      .then((res) => {
        toast.success("ToDo Saved!");
        setReloadTrigger(!reloadTrigger);
      })
      .catch((err) => {
        alert("Please Fill a new To-Do!");
        console.log(err);
      });
  };

  return (
    <div className="bg-base-200">
      <div className="flex bg-base-200">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content w-screen flex-col lg:flex-row-reverse bg-base-200">
            <div className="h-72 bg-base-200">
              <FilterTable data={reloadTrigger} />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Add New To-Do!</h1>
              <p className="py-6">
                Please fill in your new To-Do. This addition will be stored in
                database.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">To-Do</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Add New To-Do"
                    className="input input-bordered"
                    onChange={(e) => setToDo(e.target.value)}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col p-12 justify-center">
        <FilterTable data={reloadTrigger} />
      </div> */}
    </div>
  );
};

export default Dashboard;
