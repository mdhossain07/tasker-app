import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import AddTaskModal from "./AddTaskModal";
import TaskLists from "./TaskLists";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "React Native",
      description:
        "React Native is a JS library for building scalebale Mobile Application",
      tags: ["Mobile", "JS", "API"],
      priority: "High",
      isFavourite: true,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (task) => {
    console.log("Adding Task", task);
  };

  return (
    <>
      <section className="mb-20 mx-10" id="tasks">
        {showModal && <AddTaskModal onSave={handleAddTask} />}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions onAddTask={() => setShowModal(true)} />
            <TaskLists tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
