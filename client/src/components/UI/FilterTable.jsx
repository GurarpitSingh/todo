import React, { useState, useEffect } from "react";
import axios from "axios";
import EditModal from "./EditModal";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const FilterTable = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  let fetchFn = () => {
    let token = localStorage.getItem("token");
    axios
      .get(`http://localhost:3000/todo/getTodos/${token}`)
      .then((res) => {
        setData(res.data.todos);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  };
  useEffect(() => {
    fetchFn();
  }, []);
  useEffect(() => {
    fetchFn();
  }, [props.data]);

  const deleteTodo = (e) => {
    let token = localStorage.getItem("token");
    axios
      .post(`http://localhost:3000/todo/deleteTodo/${token}`, {
        todo:  e.target.dataset.item,
      })
      .then((res) => {
        console.log(res.data);
        fetchFn();
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="flex flex-col gap-3 ">
      {data.map((item, index) => {
        return (
          <div class="stack">
            <div class="card w-72 shadow-md bg-primary text-primary-content">
              <div class="card-body">
                <div className="flex justify-between">
                <h2 class="card-title">#{index + 1}</h2>
                <button onClick={deleteTodo} data-item={item}><box-icon name='trash' type='solid' color='white' data-item={item}></box-icon></button>
                </div>
                <p>{item}</p>
              </div>
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default FilterTable;
