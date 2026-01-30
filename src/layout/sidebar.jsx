import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/planner", label: "Planner" },
  { to: "/focus", label: "Focus" },
  { to: "/progress", label: "Progress" },
];

const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-64 bg-white dark:bg-gray-800 shadow">
      <nav className="p-6 space-y-4">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block font-medium ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-600 dark:text-gray-300"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
