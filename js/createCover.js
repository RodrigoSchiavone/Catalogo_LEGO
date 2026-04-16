export function createCover(pptx, slide, linkType) {

                slide[0] = pptx.addSlide()

                switch (linkType) {
                    case "LEGO":

                        let lego_logo_image = {
                            path: 'images/lego_logo.png',
                            x: 0.70,
                            y: 0.81,
                            h: 1.58,
                            w: 1.58
                        }

                        let background_light_image = {
                            path: 'images/light_first_slide.png',
                            x: -4.24,
                            y: 2.39,
                            w: 19.97,
                            h: 8.86

                        }
                        let minifigure_image = {
                            path: 'images/mnifigure_first_slide.png',
                            x: 4.18,
                            y: 0.46,
                            w: 6.66,
                            h: 7.04

                        }

                        let text_shape = "Imagens meramente ilustrativas, não estão proporcionais umas as outras. Qualquer dúvida consultar o vendedor da sua região."

                        slide[0].background = { color: "FFD500" }

                        slide[0].addImage(lego_logo_image)
                        slide[0].addImage(background_light_image)
                        slide[0].addImage(minifigure_image)
                        slide[0].addText(text_shape, {
                            shape: pptx.shapes.ROUNDED_RECTANGLE,
                            rectRadius: 0.3,
                            y: 5.73,
                            x: 0.40,
                            align: "left",
                            fill: { type: "solid", color: "d70911" },
                            fontFace: "Cera Pro",
                            color: 'ffffff',
                            fontSize: 12,
                            h: 2.21,
                            w: 3.46,

                        });
                        slide[0].addText("Catálogo de\nProdutos", {

                            y: 3.00,
                            x: 0.59,
                            align: "left",
                            fill: { type: "none" },
                            fontFace: "Cera Pro",
                            color: '000000',
                            fontSize: 35,
                            h: 1.33,
                            w: 5.38,


                        });
                        const actualDate = new Date()
                        const actualYear = actualDate.getFullYear()
                        slide[0].addText(actualYear, {

                            y: 4.20,
                            x: 0.59,
                            align: "left",
                            fill: { type: "none" },
                            fontFace: "Cera Pro",
                            color: '000000',
                            fontSize: 90,
                            h: 1.25,
                            w: 5.38,
                            bold: true


                        });
                        break

                    case "Education":
                        

                        break

                    case "MGA":

                        break


                }
            }