import React from "react";
import dishes from "../data/dishes";                     // Імпорт масиву страв з їх назвами та цінами dishes з файлу dishes.js

const Menu = () => {   
                                             // Створення функціонального компонента Menu
    return (                                                   // Повертає JSX
        <main>
            <h2>Меню</h2>
            <ul>
                {dishes.map((dish, index) => (                 // Перебір масиву страв
                    <li key={index}>
                       {dish.image && <img src={dish.image} alt={dish.name} style={{width:'100px', height:'100px', objectFit: 'cover'}} /> }         {/*Створення списку <li>*/} 
                        {dish.name} - {dish.amount}{dish.unit} - {dish.price} грн.      {/*Виведення назви страви та її ціни*/}
                    </li>
                ))}
            </ul>
        </main>
    );
};                                                              // Створення функціонального компонента Menu

export default Menu;                                          // Експорт компонента Menu для використання в інших частинах програми