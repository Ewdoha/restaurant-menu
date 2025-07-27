const meatDishes = [

    { name: "М'ясна тарілка", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 1400, 
        price: 1400, 
        image: "/images/miatsna_tarylka.jpg",
        ingredients: '(медальйони з свинини під вишневим соусом, курячі бедра з карамелізованим яблуком, ребра з сацебелі, соус барбекю, ковбаски гриль)'  
    },

    {   name: "Фірмова тарілка «БурЖуй»", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: '900/300/75', 
        price: 1200, 
        image: "/images/Firmova_tarilka_Burzhui.jpg",
        ingredients: '(люля-кебаб з телятини, свинні ребра, курячі бедра, соус барбекю, картопляні крокети, цибуля)'  
    },

    {   name: "М'ясна гаряча тарілка «Мікс»", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: '1500/300/150', 
        price: 1100, 
        image: "",
        ingredients: '(гомілки курячі, свинні ребра, домашні ковбаски, картопля фрі, соус пікантний)'  
    },

    {   name: "Відбивна зі свинини", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 150, 
        price: 180, 
        image: "",
        ingredients: ''  
    },

    {   name: "Медальйони зі свинини під вишневим або смородиновим соусом", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: '130/30', 
        price: 280, 
        image: "",
        ingredients: ''  
    },

    {   name: "Дошка ковбасок", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 900, 
        price: 1100, 
        image: "",
        ingredients: '(курячі, телячі, свинні) подається з бататом на подушці з карамелізованого буряка'  
    },

    {   name: "Свинина в зеленій паніровці", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 250, 
        price: 270, 
        image: "",
        ingredients: ''  
    },

    {   name: "Крученики з філе свинини та білими грибами", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 300, 
        price: 300, 
        image: "",
        ingredients: ''  
    },

    {   name: "Свинина на овочевій подушці від шефа", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 350, 
        price: 350, 
        image: "",
        ingredients: ''  
    },

    {   name: "Запечена карковина з мисливськими ковбасками", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 'за 100', 
        price: 65, 
        image: "",
        ingredients: ''  
    },

    {   name: "Стейк свинний гриль з соусом Барбекю", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 'за 100', 
        price: 75, 
        image: "",
        ingredients: ''  
    },

    {   name: "Ребра томлені в соусі сацебелі", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 'За 100', 
        price: 65, 
        image: "/images/Rebra_tomleni_v_sousi_satsebeli.jpg",
        ingredients: '' 
    },

    {   name: "Качка під медово-гірчичним соусом з томленим яблуком", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 'за 100', 
        price: 80, 
        image: "",
        ingredients: ''  
    },

    {   name: "Качина грудка з томленим яблуком та малиновим соусом", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 'За 100', 
        price: 85, 
        image: "/images/Kachyna_hrudka_z_tomlenym_yablukom_ta_malynovym_sousom.jpg",
        ingredients: '' 
    },

    {   name: "Качина ніжка з карамелізованим яблуком та журавлиним соусом", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 'за 100', 
        price: 45, 
        image: "",
        ingredients: ''  
    },

    {   name: "Медальйони з свинини та білими грибами", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 180, 
        price: 350, 
        image: "",
        ingredients: ''  
    },

    {   name: "Рулет з індички, овочами та норі", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 350, 
        price: 350, 
        image: "/images/Rulet_z_indychky_ovochamy_ta_nori.jpg",
        ingredients: '' 
    },

    {   name: "Відбивна куряча з твердим сиром", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 120, 
        price: 190, 
        image: "",
        ingredients: ''  
    },

    {   name: "Куряча грудка «Капрезе»", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 480, 
        price: 350, 
        image: "/images/kurka_kapreze.jpg",
        ingredients: ''  
    },

    {   name: "Крученики з курячої грудки та твердим сиром", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 180, 
        price: 200, 
        image: "",
        ingredients: ''  
    },

    {   name: "Крученики з курячої грудки та печерицями", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 180, 
        price: 200, 
        image: "",
        ingredients: ''  
    },

    {   name: "Куряча грудка фарширована беконом та печерицями", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 170, 
        price: 220, 
        image: "",
        ingredients: ''  
    },

    {   name: "Індичі крокети в соусі дор блю", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 220, 
        price: 300, 
        image: "",
        ingredients: ''  
    },

    {   name: "Стейк курячий з овочами гриль", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 450, 
        price: 250, 
        image: "",
        ingredients: ''  
    },

];

export default meatDishes;