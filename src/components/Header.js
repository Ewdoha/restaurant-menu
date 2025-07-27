import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>
        {/* Логотип, який знаходиться в папці `public` */}
        <img
          src="/burjui_logo.png" // Шлях до вашого логотипу
          alt="Логотип Ресторану Буржуй" // Опис для доступності
          className="header-logo" // Клас для стилізації
        />
      </h1>
    </header>
  );
}

export default Header;