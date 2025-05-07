import React from "react";

const Menu = () => {                                            // Створення функціонального компонента Menu
    const dishes = [                                            // Масив страв з їх назвами та цінами
        { name: "Рулет \"Шуба\"", weight: 220, price: 250, image: "/images/rulet_Shuba.jpg"}, // Додано поле Image
        { name: "Профітролі з креветкою і сьомгою", weight: 0, price: 300, image: "/images/profitroli_z_krevetkoyu_i_syomgoyu.jpg" },
        { name: "Рибне плато", weight: 280, price: 480, image: "/images/rybne_plato.jpg" },
        { name: "Мʼясна дошка «Буржуй»", weight: 0, price: 1100, image: "/images/myasna_doshka_burjuy.jpg" },
        { name: "Брускети з прошуто", weight: 0, price: 300, image: "/images/bruskety_z_proshutto.jpg" },
        { name: "Канапе з моцарелою , вяленими томатами, песто, креветками та базиліком", weight: 0, price: 280, image: "/images/Kanape_z_mocareloyu,_vyalenymy_tomatamy,_pesto,_krevetkamy_ta_bazylykom.jpg" },
        { name: "Млинці з сьомого, з ікрою, креветками та авокадо, з копченим вугром та норі", weight: 220, price: 12, image: "/images/Mlyntsi_z_syomhoiu_z_ikroiu_krevetkamy_ta_avokado_z_kopchenym_vuhrem_ta_nori.jpg" },
        { name: "Мʼясне асорті", weight: 220, price: 12, image: "/images/Myasne_asorti.jpg" },
        { name: "Щука фарширована", weight: 220, price: 12, image: "/images/Shchuka_farshyrovana.jpg" },
        { name: "Соління з погребка", weight: 220, price: 12, image: "/images/Solinnia_z_pohrebka.jpg" },
        { name: "Пікантні рулети з язика", weight: 220, price: 12, image: "/images/Pikantni_rulety_z_yazyka.jpg" },
        { name: "Салат з качиною грудкою та карамелізованою грушею", weight: 220, price: 12, image: "/images/Salat_z_kachynoyu_hrudkoyu_ta_karamelizovanoyu_hrusheyu.jpg" },
        { name: "Салат Цезар", weight: 220, price: 12, image: "/images/Salat_Tsezar.jpg" },
        { name: "Баклажани з сиром", weight: 220, price: 12, image: "/images/Baklazhany_z_syrom.jpg" },
        { name: "Сирне плато 2", weight: 220, price: 12, image: "/images/Syrne_plato_2.jpg" },
        { name: "Рибне асорті", weight: 220, price: 12, image: "/images/Rybne_asorti.jpg" },
        { name: "Салат Бравіссімо", weight: 220, price: 12, image: "/images/Salat_Bravissimo.jpg" },
        { name: "Качина грудка з томленим яблуком та малиновим соусом", weight: 220, price: 12, image: "/images/Kachyna_hrudka_z_tomlenym_yablukom_ta_malynovym_sousom.jpg" },
        { name: "Язик під мʼятним соусом", weight: 220, price: 12, image: "/images/Yazyk_pid_myatnym_sousom.jpg" },
        { name: "Закуска з баношу з бринзою, дор блю та печерицями", weight: 220, price: 12, image: "/images/Zakuska_z_banoshu_z_brynzoyu_dor_blyu_ta_pecherytsyamy.jpg" },
        { name: "Курячий рулет з вʼяленими томатами , шпинатом та сиром дорблю", weight: 220, price: 12, image: "/images/Kuryachyi_rulet_z_vyalenymy_tomatamy_shpynatom_ta_syrom_dorblyu.jpg" },
        { name: "Ребра томлені в соусі сацебелі", weight: 220, price: 12, image: "/images/Rebra_tomleni_v_sousi_satsebeli.jpg" },
        { name: "Запечений морський окунь з овочевим соте", weight: 220, price: 12, image: "/images/Zapechenyi_morskyi_okun_z_ovochevym_sote.jpg" },
        { name: "Рулет з індички , овочами та норі", weight: 220, price: 12, image: "/images/Rulet_z_indychky_ovochamy_ta_nori.jpg" },
        { name: "Снекі з прошутто, сиром горгонзола та грушею", weight: 220, price: 12, image: "/images/Sneky_z_proshutto_syrom_horhonzola_ta_hrusheyu.jpg" },
        { name: "Помідори з бринзою", weight: 220, price: 12, image: "/images/Pomidory_z_brynzoyu.jpg" },
        { name: "Млинці Буржуй", weight: 220, price: 12, image: "/images/Mlyntsi_Burzhui.jpg" },
        { name: "Млинці «Весільні»", weight: 220, price: 12, image: "/images/Mlyntsi_Vesilni.jpg" },
        { name: "Салат Чоловіча мрія", weight: 220, price: 12, image: "/images/Salat_Cholovicha_mriya.jpg" },
        { name: "Брускети", weight: 220, price: 12, image: "/images/Bruskety.jpg" },
        { name: "Салат з телятини та бринзи", weight: 220, price: 12, image: "/images/Salat_z_telyatyny_ta_brynzy.jpg" },
        { name: "Салат Капрезе", weight: 220, price: 12, image: "/images/Salat_Kapreze.jpg" },
        { name: "Салат з авокадо та креветками", weight: 220, price: 12, image: "/images/Salat_z_avokado_ta_krevetkamy.jpg" },
        { name: "Салат Грецький", weight: 220, price: 12, image: "/images/Salat_Hretskyi.jpg" },
        { name: "Салат з сьомгою та грейпфрутом", weight: 220, price: 12, image: "/images/Salat_z_somgoyu_ta_hreypfrutom.jpg" },
        { name: "Асорті сирне", weight: 220, price: 12, image: "/images/Asorti_syrne.jpg" },
        { name: "Салат Грузинський", weight: 220, price: 12, image: "/images/Salat_Hruzynskyi.jpg" },
        { name: "Канапе з форшмаком", weight: 220, price: 12, image: "/images/Kanape_z_forshmakom.jpg" },
        { name: "Салат Теплий від шефа", weight: 220, price: 12, image: "/images/Salat_Teplyi_vid_shefa.jpg" },
        { name: "Салат Італійський", weight: 220, price: 12, image: "/images/Salat_Italiyskyi.jpg" },
        { name: "Фірмова тарілка «Буржуй»", weight: 220, price: 12, image: "/images/Firmova_tarilka_Burzhui.jpg" },
        { name: "Млинці вишиванка", weight: 220, price: 12, image: "/images/Mlyntsi_Vyshyvanka.jpg" },
        { name: "Кіш лорен з куркою та печерицями", weight: 220, price: 12, image: "/images/Kish_Loren_z_kurkoyu_ta_pecherytsyamy.jpg" },
        { name: "Кіш лорен з сьомгою , грушею та сиром брі", weight: 220, price: 12, image: "/images/Kish_Loren_z_somgoyu_hrusheyu_ta_syrom_bri.jpg" },
        { name: "Кіш лорен з морепродуктами", weight: 220, price: 12, image: "/images/Kish_Loren_z_moreproduktamy.jpg" },
    ];                                                         // Масив страв з їх назвами та цінами
    return (                                                   // Повертає JSX
        <main>
            <h2>Меню</h2>
            <ul>
                {dishes.map((dish, index) => (                 // Перебір масиву страв
                    <li key={index}>
                        <img src={dish.image} alt={dish.name} style={{width:'100px', height:'100px', objectFit: 'cover'}} />                           {/*Створення списку <li>*/} 
                        {dish.name} - {dish.weight}г - ₴{dish.price} грн.       {/*Виведення назви страви та її ціни*/}
                    </li>
                ))}
            </ul>
        </main>
    );
};                                                              // Створення функціонального компонента Menu

export default Menu;                                          // Експорт компонента Menu для використання в інших частинах програми