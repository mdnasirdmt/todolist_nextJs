"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([] as any);

  const submitHandler = (e: any) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    console.log(mainTask);

    console.log(title, desc);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i: any) => {
    const copyTask = [...mainTask];
    console.log(copyTask);
    copyTask.splice(i, 1);

    setmainTask(copyTask);
  };

  let renderHandler = <h2 className="font-bold">No Task Available!</h2>;

  // using ternary operator
  mainTask.length == 0
    ? renderHandler
    : (renderHandler = mainTask.map((t: any, i: any) => {
        return (
          <>
            <li key={i} className="flex items-center justify-between mb-4">
              <div className="bg-gray-200 p-2 rounded-md flex items-center justify-between mb-4">
                <h2 className="font-bold">Task : {t.title}</h2>
                <p className="text-gray-600 ml-72">Description : {t.desc}</p>
              </div>

              <button
                onClick={() => {
                  if (window.confirm("Are you sure?")) {
                    deleteHandler(i);
                  }
                }}
                className="bg-red-600 hover:bg-red-900 rounded-xl  text-white px-4 py-2"
              >
                Delete
              </button>
            </li>
          </>
        );
      }));

  return (
    <>
      <h1 className="bg-slate-700 text-white m-10 p-3 text-center font-bold text-2xl">
        {" "}
        My To Do List
      </h1>

      <form onSubmit={submitHandler}>
        <input
          className="border-2 border-black rounded ml-28 p-1 m-2"
          type="text"
          placeholder="Enter Your Title "
          value={title}
          onChange={(e) => settitle(e.target.value)}
          required
        />

        <input
          className="border-2 border-black rounded ml-28 p-1 m-2"
          type="text"
          placeholder="Enter Description "
          value={desc}
          onChange={(e) => {setdesc(e.target.value)}}
          required
        />

        <button className=" text-white px-4 py-2 m-5 rounded-2xl hover:bg-green-400 bg-green-800  font-bold">
          Add Task
        </button>
      </form>

      <hr className="border-2 " />

      <div className="p-4 bg-slate-400 ">
        <ul>{renderHandler}</ul>
      </div>
    </>
  );
};

export default page;
