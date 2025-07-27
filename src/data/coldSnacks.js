
const coldSnacks = [

    { name: "Профітролі з креветками, вершковим сиром та авокадо", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 5, 
        price: 290, 
        image: "/images/profitroli_z_krevetkamy.jpg",
        ingredients: '' 
    },

    { name: "Профітролі з сьомгою та вершковим сиром", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 5, 
        price: 300, 
        image: "",
        ingredients: '' 
    },

    { name: "Брускета з тунцем, томатом, оливками", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 5, 
        price: 300, 
        image: "",
        ingredients: '' 
    },

    { name: "Брускета з прошутто, вершковим сиром та в’яленими томатами", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 5, 
        price: 300, 
        image: "",
        ingredients: '' 
    },

    { name: "Брускета з авокадо, вершковим сиром, креветкою та пармезаном", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 5, 
        price: 300, 
        image: "",
        ingredients: '' 
    },

    { name: "Канапе з червоною ікрою", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 15, 
        price: 280, 
        image: "",
        ingredients: '' 
    },

    { name: "Канапе з червоною рибою", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 15, 
        price: 280, 
        image: "",
        ingredients: '' 
    },

    { name: "Паштет в глазурі", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 220, 
        price: 220, 
        image: "",
        ingredients: '' 
    },

    { name: "Канапе з вершковим сиром та копченим вугрем", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 15, 
        price: 280, 
        image: "/images/Kanape_z_forshmakom.jpg",
        ingredients: '' 
    },

    { name: "Канапе з форшмаком", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 15, 
        price: 200, 
        image: "/images/Kanape_z_forshmakom.jpg",
        ingredients: '' 
    },

    { name: "Снекі з яблука, бастурми та сиру брі", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 350, 
        price: 300, 
        image: "",
        ingredients: '(яблуко, руккола, бастурма, сир брі)' 
    },

    { name: "Снекі з прошутто, сиром горгонзола та грушею", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 300, 
        price: 320, 
        image: "/images/Sneky_z_proshutto_syrom_horhonzola_ta_hrusheyu.jpg",
        ingredients: '' 
    },

     { name: "Канапе з моцарелою , вяленими томатами, песто, креветками та базиліком", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 8, 
        price: 280, 
        image: "/images/Kanape_z_mocareloyu,_vyalenymy_tomatamy,_pesto,_krevetkamy_ta_bazylykom.jpg",
        ingredients: '' 
    },

    { name: "Закуска з Баношу з бринзою соусом дор-блю та шампіньонами", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 200, 
        price: 190, 
        image: "/images/Zakuska_z_banoshu_z_brynzoyu_dor_blyu_ta_pecherytsyamy.jpg",
        ingredients: ''
    },

    { name: "Рулети пікантні з язика", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 240, 
        price: 270, 
        image: "/images/Pikantni_rulety_z_yazyka.jpg", 
        ingredients: '(язик телячий, печериці мариновані, цибуля, сир твердий, майонез, грецький горіх, зелень)'
    },

    { name: "Рулети з цукіні в кокосовій паніровці з вершковим сиром та томатами", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 250, 
        price: 200, 
        image: "", 
        ingredients: ''
    },

    { name: "Щука фарширована", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 'За 100', 
        price: 68, 
        image: "/images/Shchuka_farshyrovana.jpg",
        ingredients: '' 
    },

    { name: "Рулети з баклажана, сиром фета та бринза з арахісом", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 250, 
        price: 220, 
        image: "", 
        ingredients: ''
    },

    { name: "Язик під мʼятним соусом", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '100/50', 
        price: 280, 
        image: "/images/Yazyk_pid_myatnym_sousom.jpg",
        ingredients: '' 
    },

    { name: "Язик заливний", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 350, 
        price: 260, 
        image: "", 
        ingredients: '(язик телячий, помідори, зелень)'
    },

    { name: "М'ясне заливне", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 410, 
        price: 290, 
        image: "/images/miasne_zalyvne.jpg", 
        ingredients: '(свинина, телятина, курка, помідори, маслини, зелень)'
    },

    { name: "Асорті із свіжих овочів", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 280, 
        price: 230, 
        image: "", 
        ingredients: '(помідора, огірок, перець болгарський)'
    },

    { name: "Асорті сирів з медом", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '200/30/20', 
        price: 300, 
        image: "", 
        ingredients: '(сир королівський, сир адегейський, сир фета з травами, сир копчений, мед, грецький горіх)'
    },

    { name: "Асорті м'ясне", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '190/20', 
        price: 380, 
        image: "/images/Myasne_asorti.jpg", 
        ingredients: '(мацик, хамон, фует, снеки, грісіні)'
    },

    { name: "Асорті м'ясне печене від шефа", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '400/50', 
        price: 390, 
        image: "", 
        ingredients: '(ковбаса домашня, буженина печена, бочок печений, рулет з сиром, хрін)'
    },

    { name: "Рибне плато", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 280, 
        price: 480, 
        image: "/images/rybne_plato.jpg", 
        ingredients: '(масляна, сьомга, креветки королівські, мідії)'
    },

    { name: "Асорті рибне", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '250/50', 
        price: 380, 
        image: "/images/Rybne_asorti.jpg",
        ingredients: '(сьомга слабосолена, оселедець, скумбрія копчена)'  
    },

    { name: "Оселедець з маринованою цибулькою", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '100/30', 
        price: 180, 
        image: "",
        ingredients: ''  
    },

    { name: "Рулет \"Шуба\"",
         category: 'Холодні закуски', 
         unit: ' г', 
         amount: 220, 
         price: 290, 
         image: "/images/rulet_Shuba.jpg", 
         ingredients: ''
    },

    { name: "Млинці з норі, вершковим сиром, копченим вугрем та огірком", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '210', 
        price: 280, 
        image: "",
        ingredients: ''  
    },

    { name: "Млинці зі шпинатом та сьомгою", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '210', 
        price: 280, 
        image: "",
        ingredients: ''  
    },

    { name: "Млинці з сиром та червоною ікрою", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '150', 
        price: 280, 
        image: "",
        ingredients: ''  
    },

    { name: "Млинці зі шпинатом, сьомгою, сиром фета та брокколі", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '250', 
        price: 280, 
        image: "",
        ingredients: ''  
    },

    { name: "Млинці з чорнилами каракатиці, авокадо та креветкою", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '185', 
        price: 280, 
        image: "",
        ingredients: ''  
    },

    { name: "Баклажани з сиром", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 250, 
        price: 220, 
        image: "/images/Baklazhany_z_syrom.jpg",
        ingredients: '(баклажан, сир кисломолочний, часник, зелень)' 
    },

    { name: "Рулети з баклажаном, сиром та горіхом", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 250, 
        price: 250, 
        image: "",
        ingredients: '' 
    },

    { name: "Сирне плато 2", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 300, 
        price: 350, 
        image: "/images/Syrne_plato_2.jpg",
        ingredients: '(моцарела, верш.ананасовий сир, камамбер, горгонзола, сухофрукти, мед)' 
    },

    { name: "Сирне плато", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '200/50/50', 
        price: 350, 
        image: "",
        ingredients: '(сир пармезан, сир брі, сир горгонзола, сир камамбер, грецький горіх, малиновий соус)' 
    },

    { name: "Помідори з бринзою", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 200, 
        price: 200, 
        image: "/images/Pomidory_z_brynzoyu.jpg",
        ingredients: '(помідори сир бринза, бальзамічний оцет, олія оливкова, часник, зелень)'  
    },

    { name: "Помідори з бастурмою", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 200, 
        price: 230, 
        image: "",
        ingredients: '(помідори, бастурма, майонез, часник, зелень)'  
    },

    { name: "Помідори по-рівненські", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 200, 
        price: 180, 
        image: "",
        ingredients: '(помідори, часник, сир твердий, майонез, зелень)'  
    },

    { name: "Соління з погребка", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 400, 
        price: 280, 
        image: "/images/Solinnia_z_pohrebka.jpg",
        ingredients: '' 
    },

    { name: "Капуста лінива", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 'За 100', 
        price: 25, 
        image: "",
        ingredients: '' 
    },

]



export default coldSnacks;