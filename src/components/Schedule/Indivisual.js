import React, { useState } from "react";

export default function Indivisual() {
  const [taskList, setTaskList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editId, setEditId] = useState(null);
  const [textForms, setTextForms] = useState({});

  const handleDateSubmit = (e) => {
    e.preventDefault();
  };

  const handleDateChange = (e) => {
    // 日付の変更ロジックをここで処理
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();

    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
      },
    ]);

    //setInputText("");
  };

  const handleTextChange = (e, id) => {
    setTextForms({
      ...textForms,
      [id]: { ...textForms[id], inputText: e.target.value },
    });
  };

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    setEditId(id);
    const selectedTask = taskList.find((task) => task.id === id);
    setTextForms({
      ...textForms,
      [id]: { inputText: selectedTask.text },
    });
  };

  const handleUpdate = (id, e) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, text: textForms[id].inputText } : task
      )
    );
    setEditId(null);
    setTextForms({
      ...textForms,
      [id]: { inputText: "" },
    }); // 更新後にリセット
  };

  return (
    <div className="indivisual">
      <header>
        <h2>予定</h2>
      </header>
      <form onSubmit={handleDateSubmit}>
        <input type="date" onChange={handleDateChange} />
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
      <form onSubmit={handleTextSubmit}>
        <input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText} />
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>

      <div className="todoList">
        <div className="todos">
          {taskList.map((task, index) => (
            <div className="todo" key={index}>
              <div className="todoText">
                {editId === task.id ? (
                  <>
                    <input
                      type="text"
                      onChange={(e) => handleTextChange(e, task.id)}
                      value={textForms[task.id]?.inputText || ""}
                    />
                    <button onClick={() => handleUpdate(task.id)}>
                      <i className="fa-solid fa-check"></i>
                    </button>
                  </>
                ) : (
                  <>
                    <span>{task.text}</span>
                    <button onClick={() => handleEdit(task.id)}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => handleDelete(task.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
