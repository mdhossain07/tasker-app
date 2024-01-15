import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import AddTaskModal from "./AddTaskModal";
import TaskLists from "./TaskLists";
import EmptyTask from "./EmptyTask";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      title: "React Native",
      description:
        "React Native is a JS library for building scalebale Mobile Application",
      tags: ["Mobile", "JS", "API"],
      priority: "High",
      isFavourite: true,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }
    setShowModal(false);
  };

  const handleEditTask = (taskValue) => {
    setTaskToUpdate(taskValue);
    setShowModal(true);
  };

  const handleDeleteTask = (taskId) => {
    const reaminingTask = tasks.filter((task) => task.id !== taskId);
    setTasks(reaminingTask);
  };

  const handleClose = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };

  const handleDeleteAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFavourite = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isFavourite: !task.isFavourite };
      } else {
        return task;
      }
    });
    setTasks(newTask);
  };

  const handleSearch = (text) => {
    const filteredData = tasks.filter((task) =>
      task.title.toLowerCase().includes(text.toLowerCase())
    );
    setTasks(filteredData);
  };

  return (
    <>
      <section className="mb-20 mx-10" id="tasks">
        {showModal && (
          <AddTaskModal
            onSave={handleAddEditTask}
            taskToUpdate={taskToUpdate}
            handleClose={handleClose}
          />
        )}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask onSearch={handleSearch} />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              onAddTask={() => setShowModal(true)}
              onDeleteAll={handleDeleteAll}
            />
            {tasks.length === 0 ? (
              <EmptyTask />
            ) : (
              <TaskLists
                tasks={tasks}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onFav={handleFavourite}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
