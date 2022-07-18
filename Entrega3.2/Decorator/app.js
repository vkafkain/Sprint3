const Producte = require("./Producte");
const conversor = require("./decorator");

let nintendoSwitch = new Producte('Switch v2.1', 340, 'USD');
let playstation4 = new Producte('Playstation 4', 300, 'GBP');
let xboxOne = new Producte('Xbox One', 300, 'CHF');
let cameraSony = new Producte('Sony EMC291', 100000, 'JPY');
let samsungTV = new Producte('Samsung UE40J5000', 2000, 'CAD');
let iphoneX = new Producte('Iphone X', 10200, 'CNY');


conversor(nintendoSwitch);
conversor(playstation4);
conversor(xboxOne);
conversor(cameraSony);
conversor(samsungTV);
conversor(iphoneX);




