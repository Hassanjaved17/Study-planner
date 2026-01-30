export const getWeeklyStats = (tasks) => {
    const last7Days = [...Array(7)].map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        return d.toDateString();
    });

    return last7Days.map((day) => ({
        day,
        completed: tasks.filter(
            (t) => t.date === day && t.completed
        ).length,
    }));
};

export const getSubjectStats = (tasks) => {
    return tasks.reduce((acc, task) => {
        acc[task.subject] = (acc[task.subject] || 0) + 1;
        return acc;
    }, {});
};
