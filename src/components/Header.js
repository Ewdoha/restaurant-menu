import React from "react";                                                        // Імпорт бібліотеки React

const Header = () => {                                                            // Створення функціонального компонента Header
  return (                                                                        // Повертає JSX
    <header className="header">                                                   {/*Головний елемент заголовка*/}
      <h1>БурЖуй</h1>                                                         {/*Заголовок сайту*/}
      <nav>                                                                       {/*Навігаційне меню*/}
        <ul>                                                                      {/*Список навігаційних пунктів*/}
          <li><a href="#home">Home</a></li>                                       {/*Посилання на домашню сторінку*/}
          <li><a href="#about">About</a></li>                                     {/*Посилання на сторінку "Про нас"*/}
          <li><a href="#contact">Contact</a></li>                                 {/*Посилання на сторінку "Контакти"*/}
        </ul>
      </nav>
    </header>
  );
}

export default Header;                                                             // Експорт компонента Header для використання в інших частинах програми