import { useApp } from "../context/AppContext";
import { getWeeklyStats, getSubjectStats } from "../utils/analytics";

const Progress = () => {
  const { tasks } = useApp();

  const weekly = getWeeklyStats(tasks);
  const subjects = getSubjectStats(tasks);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Progress 📊</h2>

      {/* Weekly */}
      <div>
        <h3 className="font-semibold mb-2">Last 7 Days</h3>
        {weekly.map((d) => (
          <p key={d.day}>
            {d.day}: {d.completed} tasks
          </p>
        ))}
      </div>

      {/* Subjects */}
      <div>
        <h3 className="font-semibold mb-2">By Subject</h3>
        {Object.entries(subjects).map(([sub, count]) => (
          <p key={sub}>
            {sub}: {count}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Progress;
