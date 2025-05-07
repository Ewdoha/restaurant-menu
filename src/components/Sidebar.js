import React from "react";
import "../styles/Sidebar.css"; // Імпорт стилів для компонента Sidebar

const Sidebar = ({categories, onSelectCategory}) => {
    return (
        <aside className="sidebar">
            <h2>Меню</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} onClick={() => onSelectCategory(category)}>
                        {category}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;