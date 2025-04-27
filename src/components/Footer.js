import React from "react";

const Footer = () => {                                          // Створення функціонального компонента Footer
    return (                                                   // Повертає JSX
        <footer className="footer">                             {/*Головний елемент футера*/}
            <p>&copy; 2023 My Website</p>                       {/*Текст з авторським правом*/}
            <ul>                                               {/*Список соціальних мереж*/}
                <li><a href="#facebook">Facebook</a></li>      {/*Посилання на Facebook*/}
                <li><a href="#twitter">Twitter</a></li>        {/*Посилання на Twitter*/}
                <li><a href="#instagram">Instagram</a></li>    {/*Посилання на Instagram*/}
            </ul>
        </footer>
    );
}

export default Footer;                                      // Експорт компонента Footer для використання в інших частинах програми