import { useEffect, useState } from "react";

const Planner = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    // Load tasks from localStorage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(saved);
    }, []);

    // Save tasks to localStorage
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Add task
    const addTask = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                title,
                completed: false,
                date: new Date().toDateString(),
            },
        ]);

        setTitle("");
    };

    // Toggle complete
    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Study Planner 📚
            </h2>

            {/* Add Task */}
            <form onSubmit={addTask} className="flex gap-2">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add study task..."
                    className="flex-1 p-3 rounded-lg border dark:bg-gray-800 dark:text-white"
                />
                <button className="px-4 rounded-lg bg-blue-600 text-white">
                    Add
                </button>
            </form>

            {/* Task List */}
            <ul className="space-y-3">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={`p-4 rounded-lg flex justify-between items-center bg-white dark:bg-gray-800 shadow ${task.completed && "opacity-60"
                            }`}
                    >
                        <span
                            onClick={() => toggleTask(task.id)}
                            className={`cursor-pointer ${task.completed && "line-through"
                                }`}
                        >
                            {task.title}
                        </span>

                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Planner;
