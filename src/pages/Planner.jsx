import { useState } from "react";
import { useApp } from "../context/AppContext";

const Planner = () => {
    const { tasks, addTask, toggleTask } = useApp();

    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("Math");

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        addTask({
            id: Date.now(),
            title,
            subject,
            completed: false,
            date: new Date().toDateString(),
        });

        setTitle("");
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">
                Study Planner 📚
            </h2>

            {/* Add Task */}
            <form onSubmit={handleAddTask} className="flex gap-2 flex-wrap">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add study task..."
                    className="flex-1 p-3 rounded-lg border dark:bg-gray-800"
                />

                <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="p-3 rounded-lg border dark:bg-gray-800"
                >
                    <option>Math</option>
                    <option>Physics</option>
                    <option>Computer Science</option>
                    <option>English</option>
                </select>

                <button className="px-4 bg-blue-600 text-white rounded-lg">
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
                        <div>
                            <p
                                onClick={() => toggleTask(task.id)}
                                className={`cursor-pointer ${task.completed && "line-through"
                                    }`}
                            >
                                {task.title}
                            </p>
                            <p className="text-sm text-gray-500">
                                {task.subject}
                            </p>
                        </div>

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
