"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.generate = void 0;
var pptxgenjs_1 = require("pptxgenjs");
function addNewProduct(slide, lego, slidecounter, pptx) {
    var _this = this;
    var template;
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://img.bricklink.com/ItemImage/SN/0/10964-1.png')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    template = _a.sent();
                    console.log(template);
                    return [2 /*return*/];
            }
        });
    }); });
    slide[slidecounter].addImage(lego.image);
    slide[slidecounter].addText(lego.cod, lego.opt.cod);
    slide[slidecounter].addText(lego.name, lego.opt.name);
    slide[slidecounter].addText(lego.price, lego.opt.price);
    addNoveltTag(slide, lego, slidecounter, pptx);
}
function addNoveltTag(slide, lego, slidecounter, pptx) {
    if (lego.novelty === 'new') {
        var xShape = lego.opt.cod.x + 1;
        var yShape = lego.opt.cod.y;
        slide[slidecounter].addText("LANÇAMENTO", {
            y: yShape,
            x: xShape,
            align: "center",
            fill: { type: "solid", color: "FFD500" },
            fontFace: "Cera Pro",
            fontSize: 12,
            h: 0.3,
            w: 1.44
        });
    }
}
function addLateralImage(slide, slidecounter, products) {
    var lego = products;
    var imageLine = {
        path: 'images/' + lego.line + '.png',
        x: 0,
        y: 0,
        h: '100%',
        w: 3.08
    };
    slide[slidecounter].addImage(imageLine);
    console.log("funcionei");
}
function generate(products, lines) {
    var pptx = new pptxgenjs_1["default"]();
    pptx.defineLayout({ name: 'A3', width: 10.83, height: 7.5 });
    pptx.layout = 'A3';
    var actualLineIndex = 0;
    var index1 = 0;
    var positionCounter = 0;
    var lineQuantityCounter = 0;
    var actualLine;
    var slidecounter = 0;
    var porcentagem = 0;
    var slide = [];
    slide[slidecounter] = pptx.addSlide();
    for (var i = 0; i < products.length; i++) {
        actualLine = lines[actualLineIndex];
        if (lineQuantityCounter < actualLine.quantity && index1 <= 5) {
            var lego = products[i];
            console.log("quantidade na linha " + actualLine.line + " : " + actualLine.quantity);
            console.log("counter" + lineQuantityCounter);
            console.log("lego atual : " + lego.name + " " + lego.line);
            console.log("------------------------------------------------------------------------");
            if (index1 == 0) {
                addLateralImage(slide, slidecounter, products[i]);
            }
            addNewProduct(slide, lego, slidecounter, pptx);
            lineQuantityCounter = lineQuantityCounter + 1;
            index1 = index1 + 1;
        }
        else {
            index1 = 0;
            var lego = products[i];
            if (!(lineQuantityCounter < actualLine.quantity)) {
                actualLineIndex = actualLineIndex + 1;
                lineQuantityCounter = 0;
                actualLine = lines[actualLineIndex];
            }
            slidecounter = slidecounter + 1;
            console.log('                                                                      ');
            console.log('----------------------------------------------------------------------');
            console.log('novo slide');
            console.log('----------------------------------------------------------------------');
            slide[slidecounter] = pptx.addSlide();
            console.log('                                                                      ');
            console.log("quantidade na linha " + actualLine.line + " : " + actualLine.quantity);
            console.log("counter" + lineQuantityCounter);
            console.log("lego atual : " + lego.name + " " + lego.line);
            console.log("------------------------------------------------------------------------");
            if (index1 == 0) {
                addLateralImage(slide, slidecounter, lego);
            }
            addNewProduct(slide, lego, slidecounter, pptx);
            lineQuantityCounter = lineQuantityCounter + 1;
            index1 = index1 + 1;
        }
    }
    pptx.writeFile();
}
exports.generate = generate;
