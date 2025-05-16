// Menu.js
import React, { useState } from "react";
import dishes from "../data/dishes";
import Sidebar from "./Sidebar";
import "../styles/Menu.css";

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null); // Стан для модального вікна

    const categories = [...new Set(dishes.map(dish => dish.category))];

    return (
        <div className="menu-container"> {/* ЦЕЙ div ТЕПЕР ВНУТРІ main */}
            <Sidebar categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
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