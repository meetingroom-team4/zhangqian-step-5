/**
 * Created by zhagnian on 16-8-7.
 */
let {barcodeToZipcode}=require('../core/barcode-to-zipcode');
module.exports=function (barcode){
    let zipcode=barcodeToZipcode(barcode);
    if(zipcode.startsWith('Invalid barcode:')) {
        return {
            err: 'please input right zipcode'
        }

    }else{
        return {
            text:zipcode,
            reset:true
        }
    }

};

