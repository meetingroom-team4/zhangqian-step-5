/**
 * Created by zhagnian on 16-8-6.
 */
let {zipcodeToBarcode}=require('../core/zipcode-to-barcode');
//console.log(zipcodeToBarcode);
//let zipcode='12345';
module.exports=function (zipcode){
    let barcode=zipcodeToBarcode(zipcode);
    //console.log(barcode);
    if(barcode.startsWith('Invalid barcode:')) {
        return {
            err: 'please input right zipcode'
        }

    }else{
        return {
            text:barcode,
            reset:true
        }
    }

};
