import useTimer from "../hooks/useTimer";
import useStreak from "../hooks/useStreak";

const Focus = () => {
  const { time, running, start, pause, reset } = useTimer();
  const { markFocused } = useStreak();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleStart = () => {
    markFocused(); // 🔥 streak update
    start();
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold">Focus Timer ⏱</h2>

      <div className="text-6xl font-mono">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </div>

      <div className="flex gap-4">
        {!running ? (
          <button onClick={handleStart} className="px-6 py-2 bg-green-600 text-white rounded-lg">
            Start
          </button>
        ) : (
          <button onClick={pause} className="px-6 py-2 bg-yellow-500 text-white rounded-lg">
            Pause
          </button>
        )}

        <button onClick={reset} className="px-6 py-2 bg-red-600 text-white rounded-lg">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Focus;
