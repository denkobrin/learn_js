let str="Привет",
        sum=123,
        num=15.8,
        flag=true,
        txt="true",
        exercise="  Задание ";
        console.log('%c%s', 'color: black; font: 1.4rem Tahoma;', exercise + 1);
        console.log(typeof str);
        console.log(typeof sum);
        console.log(typeof num);
        console.log(typeof flag);
        console.log(typeof txt);

        console.log('%c%s', 'color: black; font: 1.4rem/1 Tahoma;',exercise + 2);

        let a1=5%3,
        a2= 3 % 5,
        a3= 5 + '3',
        a4= '5' - 3,
        a5= 75 + 'кг',
        a6= 785 * 653,
        a7= 100 / 25,
        a8= 0 * 0,
        a9= 0 / 2,
        a10= 89 / 0,
        a11= 98 + 2,
        a12= 5 - 98,
        a13= (8 + 56 * 4) / 5,
        a14= (9 - 12) * 7 / (5 + 2),
        a15= +"123",
        a16= 1 || 0,
        a17= false || true,
        a18= true > 0;
        console.log(typeof a1);
        console.log(typeof a2);
        console.log(typeof a3);
        console.log(typeof a4);
        console.log(typeof a5);
        console.log(typeof a6);
        console.log(typeof a7);
        console.log(typeof a8);
        console.log(typeof a9);
        console.log(typeof a10);
        console.log(typeof a11);
        console.log(typeof a12);
        console.log(typeof a13);
        console.log(typeof a14);
        console.log(typeof a15);
        console.log(typeof a16);
        console.log(typeof a17);
        console.log(typeof a18);

        console.log('%c%s', 'color: black; font: 1.4rem/1 Tahoma;',exercise + 3);

        let widthPryam= 23 ,
        heightPryam=10 ,
        SPryam=widthPryam*heightPryam + " см^2";
        console.log(SPryam);

        console.log('%c%s', 'color: black; font: 1.4rem/1 Tahoma;',exercise + 4);

        let widthCilindra = 10 ,
        diameterCilindra = a7,
        VCilindra = Math.PI * (diameterCilindra / 2)**2 * widthCilindra;
        console.log(VCilindra.toFixed(1) + " м^3");

        console.log('%c%s', 'color: black; font: 1.4rem/1 Tahoma;',exercise + 5);

        let radiusKruga = 5,
        SKruga = Math.PI * radiusKruga**2;
        console.log(SKruga + " см^2");

        console.log('%c%s', 'color: black; font: 1.4rem/1 Tahoma;',exercise + 6);

        let widthTrap = 10,
        baseTrap_a = 5,
        baseTrap_b = 7,
        STrap =  widthTrap * (baseTrap_a + baseTrap_b)  / 2;
        console.log(STrap);

        console.log('%c%s', 'color: black; font: 1.4rem/1 Tahoma;',exercise + 7);

        let S = 2000000,
        p = 0.10,
        m = 5 * 12,
        MonthPayment = S / m + S * (p / 12),
        Pereplata = MonthPayment * m - S;
        console.log(Pereplata + " р");

        console.log('%c%s', 'color: black; font: 1.4rem/1 Tahoma;',exercise + 8);
        
        let a = 8,
        b = 3,
        x,
        y = 0;
        for (x = 0; y = a + 2 * (x - b) - 16; x++) {
            if (y == 0)   break   
        }
        x = `${x}`;
        console.log ('Работа окончена, x = ' + x );

        console.log('%c%s', 'color: black; font: 1.4rem/1 Tahoma;',exercise + 9);
        console.log (`
        Бывало, спит у ног собака,
        костер занявшийся гудит,
        и женщина из полумрака
        шлазами зыбкими глядит
        
        Потом под пихтою приляжет
        на куртку рыжую мою
        и мне,задумчивая, скажет:
        "А ну-ка, спой!.." - и я пою.`);

        console.log('%c%s', 'color: black; font: 1.4rem/1 Tahoma;',exercise + 10);

        let textLineOne = 'индо земля зашаталась под ногами - и вырос,',
        textLineTwo = "и заревел он голосом диким...",
        textLineThree = "блеснула молния и ударил гром,",
        textLineFour = "а так какое-то чудище, страшное и мохнатое,",
        textLineFive = "как будто из-под земли, перед купцом:",
        textLineSix = "Он подошёл и сорвал аленький цветочек.",
        textLineSeven = "зверь не зверь, человек не человек,",
        textLineEight = "В ту же минуту, безо всяких туч,",
        text = textLineSix + '\n' + textLineEight + '\n' + textLineThree + '\n' + textLineOne + '\n\n' + textLineFive + '\n' + textLineSeven + '\n' + textLineFour + '\n' + textLineTwo;
        console.log(text);