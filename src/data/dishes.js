
const dishes = [                                            // Масив страв з їх назвами та цінами
    { name: "Рулет \"Шуба\"",
         category: 'Холодні закуски', 
         unit: ' г', 
         amount: 220, 
         price: 250, 
         image: "/images/rulet_Shuba.jpg", 
         ingredients: ''
        }, 

    { name: "Профітролі з креветкою і сьомгою", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 5, 
        price: 300, 
        image: "/images/profitroli_z_krevetkoyu_i_syomgoyu.jpg" 
    },

    { name: "Рибне плато", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 280, 
        price: 480, 
        image: "/images/rybne_plato.jpg", 
        ingredients: '(масляна, сьомга, креветки королівські, мідії)'
    },

    { name: "Мʼясна дошка «Буржуй»", 
        category: '?', 
        unit: '', 
        amount: '0', 
        price: 0, 
        image: "/images/myasna_doshka_burjuy.jpg" 
    },

    { name: "Брускети з прошуто", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 5, 
        price: 300, 
        image: "/images/bruskety_z_proshutto.jpg" 
    },

    { name: "Канапе з моцарелою , вяленими томатами, песто, креветками та базиліком", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 8, 
        price: 280, 
        image: "/images/Kanape_z_mocareloyu,_vyalenymy_tomatamy,_pesto,_krevetkamy_ta_bazylykom.jpg" 
    },

    { name: "Млинці з сьомого, з ікрою, креветками та авокадо, з копченим вугром та норі", 
        category: '?', 
        unit: ' г', 
        amount: 0, 
        price: 0, 
        image: "/images/Mlyntsi_z_syomhoiu_z_ikroiu_krevetkamy_ta_avokado_z_kopchenym_vuhrem_ta_nori.jpg" 
    },

    { name: "Мʼясне асорті", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '190/20', 
        price: 370, 
        image: "/images/Myasne_asorti.jpg", 
        ingredients: '(мацик, хамон, фует, снеки, грісіні)'
    },

    { name: "Щука фарширована", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 'За 100', 
        price: 68, 
        image: "/images/Shchuka_farshyrovana.jpg" 
    },

    { name: "Соління з погребка", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 400, 
        price: 280, 
        image: "/images/Solinnia_z_pohrebka.jpg" 
    },

    { name: "Пікантні рулети з язика", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 240, 
        price: 240, 
        image: "/images/Pikantni_rulety_z_yazyka.jpg", 
        ingredients: '(язик телячий, печериці мариновані, цибуля, сир твердий, майонез, грецький горіх, зелень)'
    },

    { name: "Салат з качиною грудкою та карамелізованою грушею", 
        category: 'Салати', 
        unit: ' г', 
        amount: 280, 
        price: 250, 
        image: "/images/Salat_z_kachynoyu_hrudkoyu_ta_karamelizovanoyu_hrusheyu.jpg", 
        ingredients: `(мікс салата, качина грудка, крутони, йогуртовий соус, груша у вині, в'ялені томати, мигдальні пластівці)`
    },

    { name: "Салат Цезар", 
        unit: ' г', 
        category: 'Салати', 
        amount: 280, 
        price: 200, 
        image: "/images/Salat_Tsezar.jpg",
        ingredients: `філе курки, листя салату, соус "Цезар", пармезан, крутони білі, перепелине яйце, сир пармезан, помідори черрі, соус бальзамічний` 
    },

    { name: "Баклажани з сиром", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 250, 
        price: 220, 
        image: "/images/Baklazhany_z_syrom.jpg",
        ingredients: '(баклажан, сир кисломолочний, часник, зелень)' 
    },

    { name: "Сирне плато 2", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 300, 
        price: 340, 
        image: "/images/Syrne_plato_2.jpg",
        ingredients: 'моцарела, верш.ананасовий сир, камамбер, горгонзола, сухофрукти, мед' 
    },

    { name: "Рибне асорті", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '250/50', 
        price: 370, 
        image: "/images/Rybne_asorti.jpg",
        ingredients: 'сьомга слабосолена, оселедець, скумбрія копчена'  
    },

    { name: "Салат Бравіссімо", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 240, 
        image: "/images/Salat_Bravissimo.jpg",
        ingredients: 'мікс салата, карамелізований буряк, прошутто, горіхи, соус медово-гірчичний, яблука, сир дорблю'  
    },

    { name: "Качина грудка з томленим яблуком та малиновим соусом", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 'За 100', 
        price: 85, 
        image: "/images/Kachyna_hrudka_z_tomlenym_yablukom_ta_malynovym_sousom.jpg" 
    },

    { name: "Язик під мʼятним соусом", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: '100/50', 
        price: 280, 
        image: "/images/Yazyk_pid_myatnym_sousom.jpg" 
    },

    { name: "Закуска з баношу з бринзою, дор блю та печерицями", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 200, 
        price: 190, 
        image: "/images/Zakuska_z_banoshu_z_brynzoyu_dor_blyu_ta_pecherytsyamy.jpg"
    },

    { name: "Курячий рулет з вʼяленими томатами , шпинатом та сиром дорблю", 
        category: 'Гарячі страви', 
        unit: ' г', 
        amount: 300, 
        price: 280, 
        image: "/images/Kuryachyi_rulet_z_vyalenymy_tomatamy_shpynatom_ta_syrom_dorblyu.jpg" 
    },
        
    { name: "Ребра томлені в соусі сацебелі", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 'За 100', 
        price: 65, 
        image: "/images/Rebra_tomleni_v_sousi_satsebeli.jpg" 
    },

    { name: "Запечений морський окунь з овочевим соте", 
        category: 'Страви з риби', 
        unit: ' г', 
        amount: 100, 
        price: 180, 
        image: "/images/Zapechenyi_morskyi_okun_z_ovochevym_sote.jpg" 
    },

    { name: "Рулет з індички , овочами та норі", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: 350, 
        price: 350, 
        image: "/images/Rulet_z_indychky_ovochamy_ta_nori.jpg" 
    },

    { name: "Снекі з прошутто, сиром горгонзола та грушею", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 300, 
        price: 300, 
        image: "/images/Sneky_z_proshutto_syrom_horhonzola_ta_hrusheyu.jpg" 
    },

    { name: "Помідори з бринзою", 
        category: 'Холодні закуски', 
        unit: ' г', 
        amount: 200, 
        price: 200, 
        image: "/images/Pomidory_z_brynzoyu.jpg",
        ingredients: 'помідори сир бринза, бальзамічний оцет, олія оливкова, часник, зелень'  
    },

    { name: "Млинці Буржуй", 
        category: 'Десерти', 
        unit: ' г', 
        amount: 190, 
        price: 160, 
        image: "/images/Mlyntsi_Burzhui.jpg",
        ingredients: 'вершковий сир, желе'  
    },

    { name: "Млинці «Весільні»", 
        category: 'Десерти', 
        unit: ' г', 
        amount: 250, 
        price: 200, 
        image: "/images/Mlyntsi_Vesilni.jpg",
        ingredients: 'творог домашній, кориця, цукор, вершки'  
    },

    { name: "Салат Чоловіча мрія", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 220, 
        image: "/images/Salat_Cholovicha_mriya.jpg",
        ingredients: 'шинка, філе курки, кукурудза, печериці мариновані, цибуля ріпчаста, яйце, майонез, листя салату, зелень'  
    },

    { name: "Брускети", 
        category: '?', 
        unit: ' г', 
        amount: 0, 
        price: 0, 
        image: "/images/Bruskety.jpg" 
    },

    { name: "Салат з телятини та бринзи", 
        category: 'Салати', 
        unit: ' г', 
        amount: 250, 
        price: 190, 
        image: "/images/Salat_z_telyatyny_ta_brynzy.jpg" 
    },

    { name: "Салат Капрезе", 
        category: 'Салати', 
        unit: ' г', 
        amount: 230, 
        price: 180, 
        image: "/images/Salat_Kapreze.jpg",
        ingredients: 'помідори, сир моцарела, олія оливкова, базилік, соус, каперси'  
    },

    { name: "Салат з авокадо та креветками", 
        category: 'Салати', 
        unit: ' г', 
        amount: 200, 
        price: 240, 
        image: "/images/Salat_z_avokado_ta_krevetkamy.jpg",
        ingredients: 'креветки, пармезан, черрі, мікс салату, кунжутний соус, авокадо, часник, зелень'  
    },

    { name: "Салат Грецький", 
        category: 'Салати', 
        unit: ' г', 
        amount: 250, 
        price: 200, 
        image: "/images/Salat_Hretskyi.jpg",
        ingredients: 'помідори, огірок, перець болгарський, сир фета, маслини б/к, олія оливкова, цибуля кримська, кунжут'  
    },

    { name: "Салат з сьомгою та грейпфрутом", 
        category: 'Салати', unit: ' г', 
        amount: 300, 
        price: 250, 
        image: "/images/Salat_z_somgoyu_ta_hreypfrutom.jpg",
        ingredients: 'сир філадельфія, кунжут, листя салату, мигдаль, руккола, грейпфрут, сьомга запечена, фірмова заправка'  
    },

    { name: "Асорті сирне", 
        category: '?', 
        unit: ' г', 
        amount: 0, 
        price: 0, 
        image: "/images/Asorti_syrne.jpg" 
    },

    { name: "Салат Грузинський", 
        category: 'Салати', 
        unit: ' г', 
        amount: 280, 
        price: 240, 
        image: "/images/Salat_Hruzynskyi.jpg",
        ingredients: 'баклажани запечені, гранат, куряча грудка, цибуля синя, перець болгарський, кінза'  
    },

    { name: "Канапе з форшмаком", 
        category: 'Холодні закуски', 
        unit: ' шт', 
        amount: 15, 
        price: 200, 
        image: "/images/Kanape_z_forshmakom.jpg" 
    },

    { name: "Салат Теплий від шефа", 
        category: 'Салати', 
        unit: ' г', 
        amount: 230, 
        price: 230, 
        image: "/images/Salat_Teplyi_vid_shefa.jpg",
        ingredients: `свинина, телятина, огірок солений, перець болгарський, яблуко, цибуля синя, печериці мариновані, соус "Цезар", листя салату, бальзамічний соус`  
    },

    { name: "Салат Італійський", 
        category: 'Салати', 
        unit: ' г', 
        amount: 220, 
        price: 200, 
        image: "/images/Salat_Italiyskyi.jpg",
        ingredients: 'телятина, чеддер, помідори, айсберг, маслини, майонез'  
    },

    { name: "Фірмова тарілка «Буржуй»", 
        category: `Страви з м'яса`, 
        unit: ' г', 
        amount: '900/300/75', 
        price: 1100, 
        image: "/images/Firmova_tarilka_Burzhui.jpg",
        ingredients: 'люля-кебаб з телятини, свинні ребра, курячі бедра, соус барбекю, картопляні крокети, цибуля'  
    },

    { name: "Млинці вишиванка", 
        category: 'Десерти', 
        unit: ' г', 
        amount: 220, 
        price: 200, 
        image: "/images/Mlyntsi_Vyshyvanka.jpg",
        ingredients: 'маскарпоне, мак, вишня' 
    },

    { name: "Кіш лорен з куркою та печерицями", 
        category: 'Кіш лорен', 
        unit: ' г', 
        amount: 550, 
        price: 380, 
        image: "/images/Kish_Loren_z_kurkoyu_ta_pecherytsyamy.jpg" 
    },

    { name: "Кіш лорен з сьомгою , грушею та сиром брі", 
        category: 'Кіш лорен', unit: ' г', 
        amount: 450, 
        price: 440, 
        image: "/images/Kish_Loren_z_somgoyu_hrusheyu_ta_syrom_bri.jpg" 
    },

    { name: "Кіш лорен з морепродуктами", 
        category: 'Кіш лорен', 
        unit: ' г', 
        amount: 550, 
        price: 420, 
        image: "/images/Kish_Loren_z_moreproduktamy.jpg" 
    },
]; 

export default dishes; // Експорт масиву страв для використання в інших частинах програми