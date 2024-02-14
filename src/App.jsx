import React, { useState } from "react";

const App = () => {
  const [title, Settitle] = useState("");
  const [desc, Setdesc] = useState("");
  const [maintask, Setmaintask] = useState([]);
  //  function submitHandler(e){
  //     e.preventDefault();
  //     Setmaintask([...maintask,{title,desc}]);
  //     useEffect(() => {
  //       console.log(maintask);
  //     }, [maintask]);
  //     Settitle("");
  //     Setdesc("");
  //  }
  function submitHandler(e) {
    e.preventDefault();
    // Check if maintask is an array
    if (Array.isArray(maintask)) {
      Setmaintask([...maintask, { title, desc }]);
    } else {
      // If not an array, initialize with the new task
      Setmaintask([{ title, desc }]);
    }
    console.log(maintask);
    Settitle("");
    Setdesc("");
  }
  function deletehandler(i) {
    var copyy = [...maintask];
    copyy.splice(i, 1);
    Setmaintask(copyy);
  }
  function complete() {
    Setcompletebutton("Task completed✔");
  }
  let rendertask = <h2 className="font-bold text-2xl">No task available</h2>;
  if (maintask.length > 0) {
    rendertask = maintask.map(function (t, i) {
      return (
        <li key={i} className="flex justify-between mb-5">
          <h6 className="text-3xl font-semibold">{t.title}</h6>
          <h5 className="text-2xl font-semibold">{t.desc}</h5>

          <button
            onClick={() => {
              deletehandler(i);
            }}
            className="bg-red-400 px-3 py-2 rounded text-xl font-semibold text-white"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div>
      <h1 className="bg-black text-white text-5xl bold text-center py-6 px-3">
        MY TODOLIST
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 py-5 px-5"
          placeholder="Enter task here..."
          value={title}
          onChange={(e) => {
            Settitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 py-5 px-5"
          placeholder="Add description..."
          value={desc}
          onChange={(e) => {
            Setdesc(e.target.value);
          }}
        ></input>
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add task
        </button>
      </form>
      <hr></hr>
      <div className="p-8 bg-slate-100">
        <ul> {rendertask} </ul>
      </div>
    </div>
  );
};

export default App;
