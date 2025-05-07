import React from "react";
import dishes from "../data/dishes";            // Імпорт масиву страв з їх назвами та цінами dishes з файлу dishes.js
import Sidebar from "./Sidebar";
import "../styles/Menu.css";                // Імпорт стилів для компонента Menu                         

const Menu = () => {                            // Створення функціонального компонента Menu

    const [selectedCategory, setSelectedCategory] = React.useState(null); // Створення стану для вибраної категорії

    const categories = [...new Set(dishes.map(dish => dish.category))]; // Отримання унікальних категорій з масиву страв
                                     
    return (                                                   // Повертає JSX
        <div className="menu-container">                  {/*Контейнер для меню*/}
            <Sidebar categories={categories} onSelectCategory={setSelectedCategory} /> {/*Бокова панель з категоріями*/}
            <main>
        
                <ul>
                    {dishes.filter(dish => !selectedCategory || dish.category === selectedCategory).map((dish, index) => (                 // Перебір масиву страв
                        <li key={index}>
                            {dish.image && <img src={dish.image} alt={dish.name} style={{width:'100px', height:'100px', objectFit: 'cover'}} /> }         {/*Створення списку <li>*/} 
                            <strong>{dish.name}</strong> - {dish.amount}{dish.unit} - {dish.price} грн.      {/*Виведення назви страви та її ціни*/}
                            <p className= "ingredients">{dish.ingredients}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};                                                              // Створення функціонального компонента Menu

export default Menu;                                          // Експорт компонента Menu для використання в інших частинах програми