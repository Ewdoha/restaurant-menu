import React from "react";
import "../styles/Footer.css";
// Імпортуємо іконки з react-icons
import { FaInstagram } from 'react-icons/fa'; // Можна додати й інші, якщо потрібно                                 // Імпорт стилів для компонента Footer


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Контактні дані</h3>
        <p>вулиця Міцкевича, 5, Рівне, Рівненська область, Україна</p>
        <p>Забронювати столик: +38 096 741 31 88</p>
      </div>

      <div className="footer-section">
        <h3>Ми в соцмережах</h3>
        <ul>
            <li>  
                <a href="https://www.instagram.com/burjuy.rv.ua/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />{/* Додали іконку тут */}
                    Instagram
                </a>
            </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Робочий час</h3>
        <ul>
          <li>Понеділок: 10:00 - 22:00</li>
          <li>Вівторок: 10:00 - 22:00</li>
          <li>Середа: 10:00 - 22:00</li>
          <li>Четвер: 10:00 - 22:00</li>
          <li>П'ятниця: 10:30 - 22:00</li>
          <li>Субота: 10:00 - 22:00</li>
          <li>Неділя: 10:00 - 22:00</li>
        </ul>
      </div>

      <div className="footer-section map-section">
        <h3>На карті</h3>
        <div className="map-placeholder">
          {/* Тут буде вбудована карта Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10126.519673434987!2d26.24999547727592!3d50.615413961414944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f13543158db59%3A0x7c5f1d5740c83958!2z0JHRg9GA0LbRg9C5!5e0!3m2!1suk!2sua!4v1747330936559!5m2!1suk!2sua"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта розташування ресторації Буржуй" // Додано title для доступності
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;                                      // Експорт компонента Footer для використання в інших частинах програми