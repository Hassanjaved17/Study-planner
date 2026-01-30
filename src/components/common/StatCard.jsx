const StatCard = ({ title, value }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-2">
                {value}
            </h2>
        </div>
    );
};

export default StatCard;
