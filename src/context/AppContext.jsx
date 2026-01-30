import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [focusStreak, setFocusStreak] = useState(0);

  // Load data
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const streak = Number(localStorage.getItem("focusStreak")) || 0;

    setTasks(savedTasks);
    setFocusStreak(streak);
  }, []);

  // Persist tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ---- TASK ACTIONS ----
  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // ---- FOCUS STREAK ----
  const markFocused = () => {
    const today = new Date().toDateString();
    const lastDay = localStorage.getItem("lastFocusDay");

    if (lastDay !== today) {
      const newStreak = focusStreak + 1;
      setFocusStreak(newStreak);
      localStorage.setItem("focusStreak", newStreak);
      localStorage.setItem("lastFocusDay", today);
    }
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        focusStreak,
        markFocused,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
