const UseStreak = () => {
    const today = new Date().toDateString();
    const lastDay = localStorage.getItem("lastFocusDay");
    let streak = Number(localStorage.getItem("focusStreak")) || 0;

    const markFocused = () => {
        if (lastDay !== today) {
            streak += 1;
            localStorage.setItem("focusStreak", streak);
            localStorage.setItem("lastFocusDay", today);
        }
    };

    return { streak, markFocused };
};

export default UseStreak;
