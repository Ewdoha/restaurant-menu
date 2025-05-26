import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/Menu.css";
import dishesData from "../data";

const Menu = () => {
    const dishes = dishesData;

    // Створіть масив унікальних повних назв категорій для відображення у Sidebar
    // Тепер ми комбінуємо category та subCategory, якщо subCategory існує
    const displayCategories = [...new Set(dishesData.map(dish => {
        if (dish.subCategory) {
            return `${dish.category} ${dish.subCategory}`; // Комбінуємо "Кіш лорен (гаряча закуска)"
        }
        return dish.category; // Для інших категорій залишаємо як є
    }))];

    // !!!!! вимкнув правило ESlint для цього конкретного рядка
    // eslint-disable-next-line no-unused-vars 
    const [categories, setCategories] = useState(displayCategories); // Використовуємо displayCategories

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="menu-container">
            <Sidebar 
                categories={categories} // Передаємо скомбіновані категорії
                selectedCategory={selectedCategory} 
                onSelectCategory={setSelectedCategory} 
            />
            <ul className="menu-list">
                {dishes
                    // Важливо: фільтруємо все ще за dish.category, бо це основна категорія для фільтрації
                    .filter(dish => !selectedCategory || dish.category === selectedCategory || `${dish.category} ${dish.subCategory || ''}`.trim() === selectedCategory)
                    .map((dish) => (
                        <li key={dish.id} className="menu-item">
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
                                    onClick={() => setSelectedImage(dish.image)} 
                                />
                            )}
                        </li>
                    ))}
            </ul>

            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Збільшене зображення" />
                </div>
            )}
        </div>
    );
};

export default Menu;