import StatCard from "../components/common/StatCard";

const Dashboard = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Good Morning, Hassan 👋
                </h2>
                <p className="text-gray-500">Here’s your study overview</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Today's Tasks" value="5" />
                <StatCard title="Focus Time" value="1h 20m" />
                <StatCard title="Study Streak" value="4 Days 🔥" />
                <StatCard title="Completion" value="75%" />
            </div>

            {/* Tasks Preview */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Today’s Tasks
                </h3>

                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li>📘 Math – Trigonometry</li>
                    <li>💻 JavaScript Practice</li>
                    <li>📖 Physics Revision</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
