// Menu.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/Menu.css";
// Тепер імпортуємо об'єднаний масив з src/data/index.js
import dishesData from "../data"; // Або "../data/index", але index.js імпортується за замовчуванням



const Menu = () => {

    // dishesData - це вже об'єднаний масив з усіх категорій
    const [dishes, setDishes] = useState(dishesData); 
    
    // Отримуємо унікальні категорії з імпортованих даних
    const uniqueCategories = [...new Set(dishesData.map(dish => dish.category))];
    const [categories, setCategories] = useState(uniqueCategories);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <div className="menu-container"> {/* ЦЕЙ div тепер всередині main */}
            <Sidebar 
                categories={categories} 
                selectedCategory={selectedCategory} 
                onSelectCategory={setSelectedCategory} 
            />
            <ul className="menu-list"> {/* Тепер menu-list безпосередньо в menu-container */}
                {dishes
                    .filter(dish => !selectedCategory || dish.category === selectedCategory)
                    .map((dish, index) => (
                        <li key={index} className="menu-item">
                            <div className="menu-details">
                                <strong className="dish-name">{dish.name}</strong>
                                <p className="dish-price"><strong>{dish.price} грн.</strong></p>
                                <p className="dish-description">{dish.ingredients || "Опис відсутній"}</p>
                                <p className="dish-amount">{dish.amount}{dish.unit}</p>
                            </div>
                            {dish.image && (
                                <img 
                                    src={dish.image} 
                                    alt={dish.name} 
                                    onClick={() => setSelectedImage(dish.image)} // Відкриваємо модальне вікно
                                />
                            )}
                        </li>
                    ))}
            </ul>

            {/* Модальне вікно для зображення */}
            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Збільшене зображення" />
                </div>
            )}
        </div>
    );
};

export default Menu;