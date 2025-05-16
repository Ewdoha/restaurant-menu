import React from "react";
import "../styles/Header.css";                                                         // Імпорт бібліотеки React

const Header = () => {                                                            // Створення функціонального компонента Header
  return (                                                                        // Повертає JSX
    <header className="header">                                                   {/*Головний елемент заголовка*/}
      <h1>БурЖуй</h1>
      <h2>ресторація</h2>                                                         {/*Заголовок сайту*/}
    </header>
  );
}

export default Header;                                                             // Експорт компонента Header для використання в інших частинах програми