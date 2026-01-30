import { useEffect, useState } from "react";
import StatCard from "../components/common/StatCard";

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    const today = new Date().toDateString();

    const todayTasks = tasks.filter(t => t.date === today);
    const completedTasks = todayTasks.filter(t => t.completed).length;

    const completion =
        todayTasks.length === 0
            ? "0%"
            : `${Math.round((completedTasks / todayTasks.length) * 100)}%`;

    const streak = localStorage.getItem("focusStreak") || 0;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">
                Good Morning, Hassan 👋
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Today's Tasks" value={todayTasks.length} />
                <StatCard title="Completed" value={completedTasks} />
                <StatCard title="Completion" value={completion} />
                <StatCard title="Study Streak 🔥" value={`${streak} days`} />
            </div>
        </div>
    );
};

export default Dashboard;
