
  import pptxgen from "pptxgenjs";


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


 export function generate(products, lines) {
    let pptx = new pptxgen();
    pptx.defineLayout({ name: 'A3', width: 10.83, height: 7.5 })
    pptx.layout = 'A3'





    let actualLineIndex = 0;
    let index1 = 0;
    let positionCounter = 0;
    let lineQuantityCounter = 0;
    let actualLine;
    let slidecounter:number = 0;
    let porcentagem = 0;


    let slide: any[]= [];
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







}
