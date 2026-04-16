        
        import { loader } from "./loader.js";
        import { createCover } from "./createCover.js";
        import { createFinalSlide } from "./createFinalSlide.js";
        
        
        const input = document.querySelector('input');
        const formData = new FormData();

        const initialRow = 1;


        input.addEventListener('change', () => {
            

            let text = `Carregando arquivo...`
            let validate = 0
            loader(text, validate)


            readXlsxFile(input.files[0]).then(function (data) {


                text = `Gerando ─=≡Σ((( つ◕ل͜◕)つ Catálogo...`
                let validate = 0
                loader(text, validate)
                let csvArray = []
                const excel = data
                console.log(excel)

                let lineToCheck = excel[initialRow]
                let cell = String(lineToCheck[1])
                let linkType
                console.log(cell)
                switch (cell.substring(0, 3)) {
                    case "411":
                        console.log('Lista LEGO')
                        linkType = "LEGO"
                        filterInformation(excel, linkType)
                        break
                    default:
                        alert('formato incorreto da planilha ')
                        text = '(눈_눈)'
                        validate = 2
                        loader(text, validate)
                        break
                }




                function filterInformation(excel, linkType) {

                    
                    
                    let lego_code = 0
                    let lego_name = 2
                    let lego_line = 3
                    let lego_age_group = 4
                    let release_date = 5
                    let lego_price = 6
                    let lego_caixa_master = 7


                    for (let i = initialRow; i < excel.length; i++) {

                        let excelRow = excel[i];

                        csvArray.push(excelRow[lego_code])
                        csvArray.push(excelRow[lego_name])

                        let linha = excelRow[lego_line].toLowerCase()
                        linha = linha.replace(" ", "_")
                        linha = linha.replace(" ", "_")
                        if (linha == "lego_classic") {
                            linha = "classic"
                        }
                        if (linha == "4+") {
                            linha = "juniors"
                        }
                        if (linha == "art") {
                            linha = "lego_art"
                        }
                        csvArray.push(linha)
                    

                    if (excelRow[release_date] != null) {
                        csvArray.push("new")
                    } else {
                        csvArray.push("old")
                    }

                    csvArray.push("R$ " + excelRow[lego_price])
                    csvArray.push(excelRow[lego_caixa_master])

                   

                }

                }

                arrayObjects(csvArray, linkType)

            }
            );







            function lineObject(line, quantity, slidesNumber) {
                let lineObject = {}

                lineObject.line = line
                lineObject.quantity = quantity
                lineObject.slidesNumber = slidesNumber

                return lineObject

            }

            const getOcurrences = (array, value) => array.reduce((acc, item) => value === item ? acc + 1 : acc, 0)




            function arrayObjects(csvArray, linkType) {


                let lines = linesArray(csvArray)

                let item = {};


                function itemFactory(cod, name, line, novelty, price,master, image, opt) {

                    let item = {}
                    item.cod = cod
                    item.name = name
                    item.line = line
                    item.novelty = novelty
                    item.price = price
                    item.master = master
                    item.image = image
                    item.opt = opt


                    return item

                }

                let codFont = { fontFace: "Cera Pro", fontSize: 16, bold: true, underline: false }
                let nameFont = { fontFace: "Cera Pro Medium", fontSize: 12, align: 'center' }
                let priceFont = { fontFace: "Cera Pro", fontSize: 12 }

                let opts = [{
                    cod: { x: 3, y: 0.2, h: '4%', fontFace: codFont.fontFace, fontSize: codFont.fontSize, bold: codFont.bold, underline: codFont.underline },
                    name: { x: 3, y: 2.4, h: '10%', w: '20%', fontFace: nameFont.fontFace, fontSize: nameFont.fontSize, align: nameFont.align },
                    price: { x: 3, y: 3, h: '7%', fontFace: priceFont.fontFace, fontSize: priceFont.fontSize }
                },
                {
                    cod: { x: 5.5, y: 0.2, h: '4%', fontFace: codFont.fontFace, fontSize: codFont.fontSize, bold: codFont.bold, underline: codFont.underline },
                    name: { x: 5.5, y: 2.4, h: '10%', w: '20%', fontFace: nameFont.fontFace, fontSize: nameFont.fontSize, align: nameFont.align },
                    price: { x: 5.5, y: 3, h: '7%', fontFace: priceFont.fontFace, fontSize: priceFont.fontSize }
                },
                {
                    cod: { x: 8, y: 0.2, h: '4%', fontFace: codFont.fontFace, fontSize: codFont.fontSize, bold: codFont.bold, underline: codFont.underline },
                    name: { x: 8, y: 2.4, h: '10%', w: '20%', fontFace: nameFont.fontFace, fontSize: nameFont.fontSize, align: nameFont.align },
                    price: { x: 8, y: 3, h: '7%', fontFace: priceFont.fontFace, fontSize: priceFont.fontSize }
                },

                {
                    cod: { x: 3, y: 3.7, h: '4%', fontFace: codFont.fontFace, fontSize: codFont.fontSize, bold: codFont.bold, underline: codFont.underline },
                    name: { x: 3, y: 6.2, h: '10%', w: '20%', fontFace: nameFont.fontFace, fontSize: nameFont.fontSize, align: nameFont.align },
                    price: { x: 3, y: 6.89, h: '7%', fontFace: priceFont.fontFace, fontSize: priceFont.fontSize }
                },
                {
                    cod: { x: 5.5, y: 3.7, h: '4%', fontFace: codFont.fontFace, fontSize: codFont.fontSize, bold: codFont.bold, underline: codFont.underline },
                    name: { x: 5.5, y: 6.2, h: '10%', w: '20%', fontFace: nameFont.fontFace, fontSize: nameFont.fontSize, align: nameFont.align },
                    price: { x: 5.5, y: 6.89, h: '7%', fontFace: priceFont.fontFace, fontSize: priceFont.fontSize }
                },
                {
                    cod: { x: 8, y: 3.7, h: '4%', fontFace: codFont.fontFace, fontSize: codFont.fontSize, bold: codFont.bold, underline: codFont.underline },
                    name: { x: 8, y: 6.2, h: '10%', w: '20%', fontFace: nameFont.fontFace, fontSize: nameFont.fontSize, align: nameFont.align },
                    price: { x: 8, y: 6.89, h: '7%', fontFace: priceFont.fontFace, fontSize: priceFont.fontSize }
                }]



                let images = [{
                    path: '',
                    x: 3,
                    y: 0.6,

                    sizing: { type: "contain", h: "25%", w: "25%" }
                },
                {
                    path: '',
                    x: 5.5,
                    y: 0.6,

                    sizing: { type: "contain", h: "25%", w: "25%" }
                },
                {
                    path: '',
                    x: 8,
                    y: 0.6,

                    sizing: { type: "contain", h: "25%", w: "25%" }
                },



                {
                    path: '',
                    x: 3,
                    y: 4.2,

                    sizing: { type: "contain", h: "25%", w: "25%" }
                },
                {
                    path: '',
                    x: 5.5,
                    y: 4.2,

                    sizing: { type: "contain", h: "25%", w: "25%" }

                },
                {
                    path: '',
                    x: 8,
                    y: 4.2,

                    sizing: { type: "contain", h: "25%", w: "25%" }

                },];


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
                let imageSize = []




                let products = [];

                let actualLineIndex = 0;
                let itemsPerPage = 0;
                let positionCounter = 0;
                let lineQuantityCounter = 0;
                let actualLine;
                let img = {};
                let cod;
                let name;
                let line;
                let novelty;
                let price;
                let master;
                let image;
                let opt;

                function linkAttribution(cod, linkType) {

                    let url
                    switch (linkType) {

                        case 'LEGO':
                            url = `https://img.bricklink.com/ItemImage/ON/0/${cod}-1.png`
                            return url
                            break

                        case 'Education':
                            url = `https://cdn.rebrickable.com/media/sets/${cod}-1.jpg`
                            return url
                            break


                    }
                }

                for (let i = 0; i < csvArray.length / 6; i++) {

                    cod = csvArray[itemsPerPage];
                    itemsPerPage = itemsPerPage + 1;

                    name = csvArray[itemsPerPage];
                    itemsPerPage = itemsPerPage + 1;

                    line = csvArray[itemsPerPage];
                    itemsPerPage = itemsPerPage + 1;

                    novelty = csvArray[itemsPerPage];
                    itemsPerPage = itemsPerPage + 1;

                    price = csvArray[itemsPerPage];
                    itemsPerPage = itemsPerPage + 1;

                    master = csvArray[itemsPerPage];
                    itemsPerPage = itemsPerPage + 1;


                    actualLine = lines[actualLineIndex];



                    if (lineQuantityCounter < actualLine.quantity) {
                        //alterar maxima posição
                        if (positionCounter <= 5) {
                            img = { ...images[positionCounter] };
                            img.path = linkAttribution(cod, linkType)


                            image = img;



                            opt = opts[positionCounter];

                            positionCounter = positionCounter + 1;

                            lineQuantityCounter = lineQuantityCounter + 1;
                        } else {
                            positionCounter = 0;
                            img = { ...images[positionCounter] };
                            img.path = linkAttribution(cod, linkType)
                            image = img;

                            opt = opts[positionCounter];

                            positionCounter = positionCounter + 1;

                            lineQuantityCounter = lineQuantityCounter + 1;
                        }
                    } else {
                        positionCounter = 0;
                        lineQuantityCounter = 0;
                        img = { ...images[positionCounter] };
                        img.path = linkAttribution(cod, linkType)
                        image = img;

                        opt = opts[positionCounter];

                        positionCounter = positionCounter + 1;

                        actualLineIndex = actualLineIndex + 1;
                        lineQuantityCounter = lineQuantityCounter + 1;
                    }





                    products.push(itemFactory(cod, name, line, novelty, price,master, image, opt));

                    console.log(products)

                };


                let i = 0;

                let sizes = []

                generate(products, lines, linkType)


            }



            function addNewProduct(slide, lego, slidecounter, pptx) {

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


            }



            


          
            function generate(products, lines, linkType) {
                console.log(lines)
                let pptx = new PptxGenJS();
                pptx.defineLayout({ name: 'A3', width: 10.83, height: 7.5 })
                pptx.layout = 'A3'


                let actualLineIndex = 0;
                let itemsPerPage = 0;
                let positionCounter = 0;
                let lineQuantityCounter = 0;
                let actualLine;
                let slidecounter = 0;
                let porcentagem = 0;


                let slide = [];


                createCover(pptx, slide, linkType)

                slidecounter = slidecounter + 1
                slide[slidecounter] = pptx.addSlide();
                for (let i = 0; i < products.length; i++) {

                    actualLine = lines[actualLineIndex];


                    if (lineQuantityCounter < actualLine.quantity && itemsPerPage <= 5) {

                        let lego = products[i];




                        if (itemsPerPage == 0) {
                            addLateralImage(slide, slidecounter, products[i])
                        }

                        addNewProduct(slide, lego, slidecounter, pptx);

                        lineQuantityCounter = lineQuantityCounter + 1;
                        itemsPerPage = itemsPerPage + 1;


                    } else {

                        itemsPerPage = 0;
                        let lego = products[i];



                        if (!(lineQuantityCounter < actualLine.quantity)) {
                            actualLineIndex = actualLineIndex + 1;
                            lineQuantityCounter = 0;
                            actualLine = lines[actualLineIndex];

                        }

                        slidecounter = slidecounter + 1;

                        slide[slidecounter] = pptx.addSlide();

                        if (itemsPerPage == 0) {

                            addLateralImage(slide, slidecounter, lego)

                        }


                        addNewProduct(slide, lego, slidecounter, pptx);
                        lineQuantityCounter = lineQuantityCounter + 1;


                        itemsPerPage = itemsPerPage + 1;

                    }



                }


                switch (linkType) {
                    case "LEGO":
                        createFinalSlide(pptx, slide, slidecounter, linkType)
                        break
                    case "Education":

                        break
                    default:

                        break

                }



                pptx.writeFile().then(() => {
                    let pElement = 'Pronto! (☞ﾟ∀ﾟ)☞ '
                    let validate = 1
                    loader(pElement, validate)
                
                })
            }
        });
