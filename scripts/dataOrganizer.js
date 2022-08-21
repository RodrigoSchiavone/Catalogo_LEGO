//import { generate } from "./pptxGenJs.js";
function lineObject(line, quantity, slidesNumber) {
    let lineObject = {};

    lineObject.line = line;
    lineObject.quantity = quantity;
    lineObject.slidesNumber = slidesNumber;

    return lineObject;

}

const getOcurrences = (array, value) => array.reduce((acc, item) => value === item ? acc + 1 : acc, 0);

function linesArray(csvArray) {
    let linesArray = [];
    let line;
    let quantity;
    let slidesNumber;
    let lines = [];
    let j = 0;


    for (let i = 2; i <= (csvArray.length - 3); i = i + 5) {

        if (linesArray[j] === undefined) {
            linesArray.push(csvArray[i]);

        } else if (linesArray[j] != csvArray[i]) {
            j = j + 1;
            linesArray.push(csvArray[i]);

        }

    }


    for (let i = 0; i < linesArray.length; i++) {
        let csv = [...csvArray];
        line = linesArray[i];


        quantity = getOcurrences(csvArray, line);
        if ((quantity / 6) < 1) {
            slidesNumber = 1;
        } else {
            slidesNumber = quantity / 6
        };


        lines.push(lineObject(line, quantity, slidesNumber));

    }

    return lines;

}


export function arrayObjects(csvArray) {

    console.log("cheguei até dataOrganizer");

    let lines = linesArray(csvArray)

    let item = {};

    function itemFactory(cod, name, line, novelty, price, image, opt) {

        let item = {}
        item.cod = cod;
        item.name = name;
        item.line = line;
        item.novelty = novelty;
        item.price = price;
        item.image = image;
        item.opt = opt;


        return item;

    }

    let codFont = { fontFace: "Cera Pro", fontSize: 16, bold: true, underline: true };
    let nameFont = { fontFace: "Cera Pro Medium", fontSize: 12 };
    let priceFont = { fontFace: "Cera Pro", fontSize: 12 };

    let opts = [{
        cod: { x: 3, y: 0.2, h: '4%', fontFace: codFont.fontFace, fontSize: codFont.fontSize, bold: codFont.bold, underline: codFont.underline },
        name: { x: 3, y: 2.4, h: '10%', w: '25%', fontFace: nameFont.fontFace, fontSize: nameFont.fontSize },
        price: { x: 3, y: 3, h: '7%', fontFace: priceFont.fontFace, fontSize: priceFont.fontSize }
    }, {
        cod: { x: 3, y: 3.7, h: '4%', fontFace: codFont.fontFace, fontSize: codFont.fontSize, bold: codFont.bold, underline: codFont.underline },
        name: { x: 3, y: 6.2, h: '10%', w: '25%', fontFace: nameFont.fontFace, fontSize: nameFont.fontSize },
        price: { x: 3, y: 6.89, h: '7%', fontFace: priceFont.fontFace, fontSize: priceFont.fontSize }
    }, {
        cod: { x: 5.5, y: 0.2, h: '4%', fontFace: codFont.fontFace, fontSize: codFont.fontSize, bold: codFont.bold, underline: codFont.underline },
        name: { x: 5.5, y: 2.4, h: '10%', w: '25%', fontFace: nameFont.fontFace, fontSize: nameFont.fontSize },
        price: { x: 5.5, y: 3, h: '7%', fontFace: priceFont.fontFace, fontSize: priceFont.fontSize }
    }, {
        cod: { x: 5.5, y: 3.7, h: '4%', fontFace: codFont.fontFace, fontSize: codFont.fontSize, bold: codFont.bold, underline: codFont.underline },
        name: { x: 5.5, y: 6.2, h: '10%', w: '25%', fontFace: nameFont.fontFace, fontSize: nameFont.fontSize },
        price: { x: 5.5, y: 6.89, h: '7%', fontFace: priceFont.fontFace, fontSize: priceFont.fontSize }
    }, {
        cod: { x: 8, y: 0.2, h: '4%', fontFace: codFont.fontFace, fontSize: codFont.fontSize, bold: codFont.bold, underline: codFont.underline },
        name: { x: 8, y: 2.4, h: '10%', w: '25%', fontFace: nameFont.fontFace, fontSize: nameFont.fontSize },
        price: { x: 8, y: 3, h: '7%', fontFace: priceFont.fontFace, fontSize: priceFont.fontSize }
    }, {
        cod: { x: 8, y: 3.7, h: '4%', fontFace: codFont.fontFace, fontSize: codFont.fontSize, bold: codFont.bold, underline: codFont.underline },
        name: { x: 8, y: 6.2, h: '10%', w: '25%', fontFace: nameFont.fontFace, fontSize: nameFont.fontSize },
        price: { x: 8, y: 6.89, h: '7%', fontFace: priceFont.fontFace, fontSize: priceFont.fontSize }
    }]



    let images = [{
        path: '',
        x: 2.5,
        y: 0.6,

        sizing: { type: "contain", h: '25%', w: '25%' }
    }, {
        path: '',
        x: 2.5,
        y: 4.2,
        sizing: { type: "contain", h: '25%', w: '25%' }
    }, {
        path: '',
        x: 5,
        y: 0.6,
        sizing: { type: "contain", h: '25%', w: '25%' }
    }, {
        path: '',
        x: 5,
        y: 4.2,
        sizing: { type: "contain", h: '25%', w: '25%' }

    }, {
        path: '',
        x: 7.5,
        y: 0.6,
        sizing: { type: "contain", h: '25%', w: '25%' }
    }, {
        path: '',
        x: 7.5,
        y: 4.2,
        sizing: { type: "contain", h: '25%', w: '25%' }

    },];




    let products = [];

    let actualLineIndex = 0;
    let index1 = 0;
    let positionCounter = 0;
    let lineQuantityCounter = 0;
    let actualLine;
    let img = {};
    let cod;
    let name;
    let line;
    let novelty;
    let price;
    let image;
    let opt;


    for (let i = 0; i < csvArray.length / 5; i++) {

        cod = csvArray[index1];
        index1 = index1 + 1;

        name = csvArray[index1];
        index1 = index1 + 1;

        line = csvArray[index1];
        index1 = index1 + 1;

        novelty = csvArray[index1];
        index1 = index1 + 1;

        price = csvArray[index1];
        index1 = index1 + 1;

        actualLine = lines[actualLineIndex];



        if (lineQuantityCounter < actualLine.quantity) {

            if (positionCounter <= 5) {
                img = { ...images[positionCounter] };
                img.path = `https://img.bricklink.com/ItemImage/ON/0/${cod}-1.png`
                image = img;

                opt = opts[positionCounter];

                positionCounter = positionCounter + 1;

                lineQuantityCounter = lineQuantityCounter + 1;
            } else {
                positionCounter = 0;
                img = { ...images[positionCounter] };
                img.path = `//img.bricklink.com/ItemImage/ON/0/${cod}-1.png`
                image = img;

                opt = opts[positionCounter];

                positionCounter = positionCounter + 1;

                lineQuantityCounter = lineQuantityCounter + 1;
            }
        } else {
            positionCounter = 0;
            lineQuantityCounter = 0;
            img = { ...images[positionCounter] };
            img.path = `//img.bricklink.com/ItemImage/ON/0/${cod}-1.png`
            image = img;

            opt = opts[positionCounter];

            positionCounter = positionCounter + 1;

            actualLineIndex = actualLineIndex + 1;
            lineQuantityCounter = lineQuantityCounter + 1;
        }


        products.push(itemFactory(cod, name, line, novelty, price, image, opt));


    };

    console.log(products)

    //generate(products, lines);




}


