const salads = [

    { name: "Легкість", 
        category: 'Салати', 
        unit: ' г', 
        amount: 180, 
        price: 90, 
        image: "", 
        ingredients: `(капуста б/к, морква, олія, зелень)`
    },

    { name: "Варшава", 
        category: 'Салати', 
        unit: ' г', 
        amount: 200, 
        price: 240, 
        image: "", 
        ingredients: `(мікс салата, карамелізована груша, горіхи, сир гудбрандсдален)`
    },

    { name: "Туно", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 220, 
        image: "/images/salat_tuno.jpg", 
        ingredients: `(тунець, яйце, морква варена, картопля варена, свіжий огірок, ікра мойв, майонез)`
    },

    { name: "Капрезе", 
        category: 'Салати', 
        unit: ' г', 
        amount: 230, 
        price: 180, 
        image: "/images/Salat_Kapreze.jpg",
        ingredients: '(помідори, сир моцарела, олія оливкова, базилік, соус, каперси)'  
    },

    { name: "Грецький", 
        category: 'Салати', 
        unit: ' г', 
        amount: 250, 
        price: 200, 
        image: "/images/Salat_Hretskyi.jpg",
        ingredients: '(помідори, огірок, перець болгарський, сир фета, маслини б/к, олія оливкова, цибуля кримська, кунжут)'  
    },

    { name: "Нісуаз", 
        category: 'Салати', 
        unit: ' г', 
        amount: 230, 
        price: 190, 
        image: "",
        ingredients: '(помідори, тунець, анчоуси, яйця, стручкова пасоля, цибуля синя, огірок, оливки)'  
    },

    { name: "Королівський", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 200, 
        image: "",
        ingredients: '(рукола, сир горгонзола, горіх гр., груша, авокадо, соус ягідно-винний)'  
    },

    { name: "Салат Бравіссімо", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 240, 
        image: "/images/Salat_Bravissimo.jpg",
        ingredients: '(мікс салата, карамелізований буряк, прошутто, горіхи, соус медово-гірчичний, яблука, сир дорблю)'  
    },

    { name: "3 сирним мусом, хамоном та печеним гарбузом", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 220, 
        image: "",
        ingredients: "(сирний мус, гарбуз печений, мікс салата, хамон, в'ялені томати, соус тонато)"  
    },

    { name: "З качиною грудкою та карамелізованою грушею", 
        category: 'Салати', 
        unit: ' г', 
        amount: 280, 
        price: 250, 
        image: "/images/Salat_z_kachynoyu_hrudkoyu_ta_karamelizovanoyu_hrusheyu.jpg", 
        ingredients: `(мікс салата, качина грудка, крутони, йогуртовий соус, груша у вині, в'ялені томати, мигдальні пластівці)`
    },

    { name: "Чоловіча мрія", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 220, 
        image: "/images/Salat_Cholovicha_mriya.jpg",
        ingredients: '(шинка, філе курки, кукурудза, печериці мариновані, цибуля ріпчаста, яйце, майонез, листя салату, зелень)'  
    },

    { name: "Салют", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 290, 
        image: "",
        ingredients: "(шпинат бейбі, креветки, черрі, гранат, фісташкова крихта, оливкова олія, манго)"  
    },

    { name: "Олів'є", 
        category: 'Салати', 
        unit: ' г', 
        amount: 240, 
        price: 180, 
        image: "",
        ingredients: "(картопля, морква, цибуля ріпчаста, свинина варена, огірок солоний, горошок консервований, яйце куряче, майонез, зелень)"  
    },

    { name: "З авокадо та креветками", 
        category: 'Салати', 
        unit: ' г', 
        amount: 200, 
        price: 260, 
        image: "/images/Salat_z_avokado_ta_krevetkamy.jpg",
        ingredients: '(креветки, пармезан, черрі, мікс салату, кунжутний соус, авокадо, часник, зелень)'  
    },

    { name: "Перекус", 
        category: 'Салати', 
        unit: ' г', 
        amount: 320, 
        price: 210, 
        image: "",
        ingredients: "(шинка, печериці, горошок, сир твердий, картопля фрі, яйце, майонез, зелень)"  
    },

    { name: "3 язика", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 200, 
        image: "",
        ingredients: "(язик, печериці мариновані, огірок солений, яйце, сир твердий, горошок зелений, майонез)"  
    },

    { name: "Італійський", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 220, 
        image: "/images/Salat_Italiyskyi.jpg",
        ingredients: '(телятина, чеддер, помідори, айсберг, маслини, майонез)'  
    },

    { name: "Теплий з морепродуктами", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 240, 
        image: "",
        ingredients: '(рукколла, креветки, мідії, кальмари, сьомга)'  
    },

    { name: "Цезар", 
        unit: ' г', 
        category: 'Салати', 
        amount: 280, 
        price: 200, 
        image: "/images/Salat_Tsezar.jpg",
        ingredients: `(філе курки, листя салату, соус "Цезар", крутони білі, перепелине яйце, сир пармезан, помідори черрі, соус бальзамічний)` 
    },

    { name: "Салат Грузинський", 
        category: 'Салати', 
        unit: ' г', 
        amount: 280, 
        price: 240, 
        image: "/images/Salat_Hruzynskyi.jpg",
        ingredients: '(баклажани запечені, гранат, куряча грудка, цибуля синя, перець болгарський, кінза)'  
    },

    { name: "БурЖуй з бастурмою", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 220, 
        image: "",
        ingredients: '(листя салату, огірок, помідор черрі, сир пармезан, яйця перепелині, бастурма, яблуко, олія оливкова, гірчиця, кунжут, соєвий соус)'  
    },

    { name: "Теплий з телятини та бринзи", 
        category: 'Салати', 
        unit: ' г', 
        amount: 250, 
        price: 220, 
        image: "/images/Salat_z_telyatyny_ta_brynzy.jpg" 
    },

    { name: "Теплий із смаженою куркою та горіхами", 
        category: 'Салати', 
        unit: ' г', 
        amount: 300, 
        price: 200, 
        image: "",
        ingredients: '(філе курки в кокосовій паніровці, яйце, помідор, сир тертий, огірок, грецький горіх, соус Тартар)'  
    },

    { name: "Теплий з курячою печінкою", 
        category: 'Салати', 
        unit: ' г', 
        amount: 300, 
        price: 160, 
        image: "",
        ingredients: '(листя салату, печериці смажені, помідора черрі, печінка куряча, медово-гірчичний соус, сир пармезан, кунжут'  
    },

    { name: "3 свининою та овочами", 
        category: 'Салати', 
        unit: ' г', 
        amount: 250, 
        price: 220, 
        image: "",
        ingredients: '(айсберг, руколла, перець болгарський, цукіні, печериці, вирізка внутрішня, моцарелла, арахіс, соус горіх)'  
    },

    { name: "Теплий від шефа", 
        category: 'Салати', 
        unit: ' г', 
        amount: 230, 
        price: 250, 
        image: "/images/Salat_Teplyi_vid_shefa.jpg",
        ingredients: `(свинина, телятина, огірок солений, перець болгарський, яблуко, цибуля синя, печериці мариновані, соус "Цезар", листя салату, бальзамічний соус)`  
    },

    { name: "3 грейпфрутом та сьомгою", 
        category: 'Салати', unit: ' г', 
        amount: 300, 
        price: 250, 
        image: "/images/Salat_z_somgoyu_ta_hreypfrutom.jpg",
        ingredients: '(сир Філадельфія, кунжут, листя салату, мигдаль, руккола, грейпфрут, сьомга запечена, фірмова заправка)'  
    },

];

export default salads;