// App.js
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react'; // Імпортуємо useState та useEffect

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false); // Стан для видимості кнопки

  // Ефект для обробки події прокрутки
  useEffect(() => {
    const handleScroll = () => {
      // Показуємо кнопку, якщо прокрутили більше 300px
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll); // Додаємо слухача події
    return () => {
      window.removeEventListener('scroll', handleScroll); // Очищення слухача при видаленні компонента
    };
  }, []); // Пустий масив залежностей означає, що ефект запускається один раз при монтуванні

  // Функція для прокрутки на початок сторінки
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Для плавної прокрутки
    });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Menu />
      </main>
      <Footer />

      {/* Кнопка "Наверх" */}
      {showScrollButton && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          title="На початок сторінки" // Додаємо підказку при наведенні
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;