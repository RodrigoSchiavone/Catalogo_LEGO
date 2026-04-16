export function createFinalSlide(pptx, slide, slidecounter, linkType) {
                slidecounter = slidecounter + 1
                slide[slidecounter] = pptx.addSlide();

                switch (linkType) {
                    case "LEGO":
                        slide[slidecounter].background = { color: "FFD500" }
                        let lego_logo_image = {
                            path: 'images/lego_logo.png',
                            x: 0.70,
                            y: 0.81,
                            h: 1.58,
                            w: 1.58
                        }

                        let cloud_image_1 = {
                            path: 'images/lego_cloud.png',
                            x: 3.02,
                            y: 0.50,
                            h: 1.46,
                            w: 2.40
                        }

                        let cloud_image_2 = {
                            path: 'images/lego_cloud.png',
                            x: 9.42,
                            y: -0.46,
                            h: 1.46,
                            w: 2.40
                        }
                        let camera_cloud_image = {
                            path: 'images/camera_cloud.png',
                            x: 5.55,
                            y: 0.81,
                            h: 4.73,
                            w: 4.95
                        }
                        slide[slidecounter].addImage(lego_logo_image)
                        slide[slidecounter].addImage(cloud_image_1)
                        slide[slidecounter].addImage(cloud_image_2)
                        slide[slidecounter].addImage(camera_cloud_image)

                        let text_shape = "LEGO_ftp@2022"
                        slide[slidecounter].addText(text_shape, {
                            shape: pptx.shapes.ROUNDED_RECTANGLE,
                            rectRadius: 0.3,
                            y: 5.75,
                            x: 6.66,
                            align: "left",
                            fill: { type: "solid", color: "d70911" },
                            fontFace: "Cera Pro",
                            color: 'ffffff',
                            fontSize: 25,
                            h: 2.21,
                            w: 3.46,

                        });
                        slide[slidecounter].addText("Senha", {

                            x: 6.72,
                            y: 5.98,
                            align: "left",
                            fill: { type: "none" },
                            fontFace: "Cera Pro",
                            color: 'ffffff',
                            fontSize: 35,
                            h: 0.64,
                            w: 2.49,
                            bold: true
                        });
                        slide[slidecounter].addText("NOVO FTP!", {

                            x: 0.59,
                            y: 3.00,
                            align: "left",
                            fill: { type: "none" },
                            fontFace: "Cera Pro",
                            color: '000000',
                            fontSize: 32,
                            h: 0.52,
                            w: 2.95,
                            bold: true
                        });
                        slide[slidecounter].addText("Acesse o link para obter imagens e informações técnicas dos seus produtos LEGO®", {

                            x: 0.59,
                            y: 3.35,
                            align: "left",
                            fill: { type: "none" },
                            fontFace: "Cera Pro",
                            color: '000000',
                            fontSize: 25,
                            w: 5.52,
                            h: 2.18,
                            bold: false
                        });
                        let ftp = "https://grupomcassab-my.sharepoint.com/:f:/g/personal/tradelego_mcassab_com_br/EiRmFEmazfpBjyY66qFj66oB1Iq-BeAjLf9nVnldzdyD3g?e=CWvbCO"
                        slide[slidecounter].addText(ftp, {

                            x: 0.59,
                            y: 5.31,
                            align: "left",
                            fill: { type: "none" },
                            fontFace: "Cera Pro",
                            color: '454cad',
                            fontSize: 20,
                            h: 0.97,
                            w: 4.92,
                            hyperlink: { url: ftp },
                            bold: false
                        });

                        break

                    case "EDucation":

                        break

                    case "MGA":

                        break
                }
            }