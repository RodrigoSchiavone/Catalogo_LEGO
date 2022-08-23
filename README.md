<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css\style.css">
    <title>CATALOGO</title>
    
</head>
<script src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.11.0/dist/pptxgen.bundle.js"></script>

<body>
    <h2>Gerador de catalogos LEGO</h2>
    <p class="lead">Apenas  <b>Arquivos .CSV</b></p>
    
    <!-- Upload  -->
    <form action="" id="file-upload-form" class="uploader">
        
      <input id="fileUpload" type="file"  name="fileUpload" accept=".csv">
    
      <label for="fileUpload" id="file-drag">
        
        <div id="start">
          <i class="fa fa-download" aria-hidden="true"></i>
          <div>Selecione um arquivo aqui</div>
          
          <span id="file-upload-btn" class="btn btn-primary">Selecione</span>
        </div>
        <div id="response" class="hidden">
          <div id="messages"></div>
         
        </div>
      </label>
    </form>
    
<script>
    //<script type ="module" src="scripts/fileReader.js">,
        
    const input = document.querySelector('#fileUpload');
    let csvArray
    let test = false;

    input.addEventListener('change', function (e) {
        const reader = new FileReader();


        reader.readAsText(input.files[0]);

        reader.onload = function () {
            let commaSeparated = reader.result;
console.log('to aqui')


            commaSeparated = commaSeparated.replace(/,/g, ".");
            commaSeparated = commaSeparated.replace(/;/g, ",");
            commaSeparated = commaSeparated.replace(/\r\n/g, ",");
            commaSeparated = commaSeparated.replace(/\n/g, ",");
            let csvDataArray = commaSeparated.split(",");
            csvDataArray.pop();

            csvArray = csvDataArray;
            console.log(csvArray)

            arrayObjects(csvArray);
        }


    }, false)



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


    function arrayObjects(csvArray) {


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

        generate(products, lines);




    }



    function addNewProduct(slide, lego, slidecounter, pptx) {
        let template;
        (async () => {
            const response = await fetch('https://img.bricklink.com/ItemImage/SN/0/10964-1.png');
             template = await response.text();
             console.log(template)
        })
        
        slide[slidecounter].addImage(lego.image);
        slide[slidecounter].addText(lego.cod, lego.opt.cod);
        slide[slidecounter].addText(lego.name, lego.opt.name);
        slide[slidecounter].addText(lego.price, lego.opt.price);

        addNoveltTag(slide, lego, slidecounter, pptx)
    }


    function addNoveltTag(slide, lego, slidecounter, pptx) {
        if (lego.novelty === 'new') {

            let xShape = lego.opt.cod.x + 1;
            let yShape = lego.opt.cod.y;

            slide[slidecounter].addText("LANÇAMENTO", {

                y: yShape,
                x: xShape,
                align: "center",
                fill: { type: "solid", color: "FFD500" },
                fontFace: "Cera Pro",
                fontSize: 12,
                h: 0.3,
                w: 1.44,

            });

        }
    }
    function addLateralImage(slide, slidecounter, products) {


        let lego = products;
        let imageLine = {
            
            path: 'images/' + lego.line + '.png',
            x: 0,
            y: 0,
            h: '100%',
            w: 3.08
        }

        slide[slidecounter].addImage(imageLine);
        console.log("funcionei")

    }


    function generate(products, lines) {
        let pptx = new PptxGenJS();
        pptx.defineLayout({ name: 'A3', width: 10.83, height: 7.5 })
        pptx.layout = 'A3'





        let actualLineIndex = 0;
        let index1 = 0;
        let positionCounter = 0;
        let lineQuantityCounter = 0;
        let actualLine;
        let slidecounter = 0;
        let porcentagem = 0;


        let slide = [];
        slide[slidecounter] = pptx.addSlide();



        for (let i = 0; i < products.length; i++) {

            actualLine = lines[actualLineIndex];


            if (lineQuantityCounter < actualLine.quantity && index1 <= 5) {

                let lego = products[i];

                console.log("quantidade na linha " + actualLine.line + " : " + actualLine.quantity);
                console.log("counter" + lineQuantityCounter)
                console.log("lego atual : " + lego.name + " " + lego.line)
                console.log("------------------------------------------------------------------------")



                if (index1 == 0) {
                    addLateralImage(slide, slidecounter, products[i])
                }

                addNewProduct(slide, lego, slidecounter, pptx);

                lineQuantityCounter = lineQuantityCounter + 1;
                index1 = index1 + 1;


            } else {

                index1 = 0;
                let lego = products[i];



                if (!(lineQuantityCounter < actualLine.quantity)) {
                    actualLineIndex = actualLineIndex + 1;
                    lineQuantityCounter = 0;
                    actualLine = lines[actualLineIndex];

                }

                slidecounter = slidecounter + 1;
                console.log('                                                                      ')
                console.log('----------------------------------------------------------------------')
                console.log('novo slide')
                console.log('----------------------------------------------------------------------')
                slide[slidecounter] = pptx.addSlide();
                console.log('                                                                      ')
                console.log("quantidade na linha " + actualLine.line + " : " + actualLine.quantity);
                console.log("counter" + lineQuantityCounter)
                console.log("lego atual : " + lego.name + " " + lego.line)
                console.log("------------------------------------------------------------------------")

                if (index1 == 0) {

                    addLateralImage(slide, slidecounter, lego)

                }


                addNewProduct(slide, lego, slidecounter, pptx);
                lineQuantityCounter = lineQuantityCounter + 1;


                index1 = index1 + 1;

            }



        }

        pptx.writeFile();


        console.log(pptx.writeFile());




    }


</script>
</html>
