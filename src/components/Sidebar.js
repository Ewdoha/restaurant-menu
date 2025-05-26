import React from "react";
import "../styles/Sidebar.css"; // Імпорт стилів для компонента Sidebar

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <aside className="sidebar">
            <h2 className="menu-title" onClick={() => onSelectCategory(null)}>Меню</h2>
            <ul>
                {/* Масив 'categories' тут прийде від Menu.js. 
                  Якщо в Menu.js ви формуєте 'uniqueCategories' з dish.category,
                  то вони будуть повними рядками типу 'Кіш лорен (гаряча закуска)'.
                  Тут ми їх будемо розділяти для відображення.
                */}
                {categories.map((fullCategoryText, index) => {
                    // Логіка для розділення тексту категорії
                    const match = fullCategoryText.match(/^(.*?)\s*(\(.*?\))?$/);
                    let mainCategory = fullCategoryText; // За замовчуванням повний текст
                    let subCategory = null;

                    if (match && match[1]) {
                        mainCategory = match[1].trim(); // Основна частина
                        if (match[2]) {
                            subCategory = match[2]; // Частина в дужках
                        }
                    }

                    return (
                        <li 
                            // Важливо: Використовуйте fullCategoryText як key, якщо він унікальний.
                            // Індекс можна використовувати тільки, якщо порядок елементів не змінюється і елементи не видаляються/додаються.
                            // Але оскільки категорії унікальні, fullCategoryText буде кращим ключем.
                            key={fullCategoryText} 
                            onClick={() => onSelectCategory(fullCategoryText)} // Важливо: передаємо повний текст категорії для фільтрації
                            className={selectedCategory === fullCategoryText ? "active-category" : ""}
                        >
                            {/* Відображаємо основну частину */}
                            {mainCategory}
                            {/* Якщо є підкатегорія, відображаємо її меншим шрифтом */}
                            {subCategory && <span className="sub-category-text">{subCategory}</span>}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;