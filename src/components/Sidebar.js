import React from "react";
import "../styles/Sidebar.css"; // Імпорт стилів для компонента Sidebar

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <aside className="sidebar">
            <h2 className="menu-title" onClick={() => onSelectCategory(null)}>Меню</h2>
            <ul>
                {categories.map((category, index) => (
                    <li 
                        key={index} 
                        onClick={() => onSelectCategory(category)} 
                        className={selectedCategory === category ? "active-category" : ""}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </aside>
    );
};


export default Sidebar;