/**
 * Created by zhagnian on 16-8-6.
 */
let zipcode2barcode=require('../commands/zipcode-2-barcode.js');
let barcode2zipcode=require('../commands/barcode-2-zipcode.js');
let quitProcess=require('../commands/exit');
let wrongInput=require('../commands/wrongInput');
module.exports = function () {
    return {
        text: `
1. Translate zip code to bar code
2. Translate bar code to zip code
3. Quit
Please input your choices(1~3):`,
        newItem:{
            '1':zipcode2barcode,
            '2':barcode2zipcode,
            '3':quitProcess,
            '#':wrongInput
        }
    }
};