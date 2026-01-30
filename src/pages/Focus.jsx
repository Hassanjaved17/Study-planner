import useTimer from "../hooks/useTimer";

const Focus = () => {
    const { time, running, start, pause, reset } = useTimer();

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Focus Timer ⏱
            </h2>

            <div className="text-6xl font-mono">
                {minutes}:{seconds.toString().padStart(2, "0")}
            </div>

            <div className="flex gap-4">
                {!running ? (
                    <button
                        onClick={start}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg"
                    >
                        Start
                    </button>
                ) : (
                    <button
                        onClick={pause}
                        className="px-6 py-2 bg-yellow-500 text-white rounded-lg"
                    >
                        Pause
                    </button>
                )}

                <button
                    onClick={reset}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Focus;
