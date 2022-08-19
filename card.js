

function iphoneInputFild(isIncrease){

 const iphoneFild = document.getElementById('iphon-input-fild');
    const iphoneFildString = iphoneFild.value;
    iphoneFild.value = '';
    const iphoneFildNumber = parseInt(iphoneFildString);

   
    // error aleart condition ending

    let phoneNumberCountPlusOrMynas;

    if(isIncrease === true){
      phoneNumberCountPlusOrMynas = iphoneFildNumber + 1;
    }
    else{
      phoneNumberCountPlusOrMynas = iphoneFildNumber - 1;
    }

    iphoneFild.value = phoneNumberCountPlusOrMynas;

    return phoneNumberCountPlusOrMynas;

 }

 //iphon cover number or price 


 function coverInputFild(isIncrease){

 const iphoneFild = document.getElementById('cover-input-fild');
    const iphoneFildString = iphoneFild.value;
    iphoneFild.value = '';
    const iphoneFildNumber = parseInt(iphoneFildString);

   
    // error aleart condition ending

    let phoneNumberCountPlusOrMynas;

    if(isIncrease === true){
      phoneNumberCountPlusOrMynas = iphoneFildNumber + 1;
    }
    else{
      phoneNumberCountPlusOrMynas = iphoneFildNumber - 1;
    }

    iphoneFild.value = phoneNumberCountPlusOrMynas;

    return phoneNumberCountPlusOrMynas;

 }

 //function 02 

 function updatePhoneTotalPrice(totalIphon){

   const totalIphonePrice = totalIphon * 1219;

  const iphonePriceIs = document.getElementById('iphone-price');

  iphonePriceIs.innerText = totalIphonePrice;

 }

 // iphon cover totolprice

  function updateCaseTotalPrice(totalIphon){

   const totalIphonePrice = totalIphon * 1219;

  const iphonePriceIs = document.getElementById('cover-price');

  iphonePriceIs.innerText = totalIphonePrice;

 }

 // function number 03

 function btnClose(){

    const iphoneFild = document.getElementById('iphon-input-fild');
  
  iphoneFild.value ='0';

  const iphonePrice = document.getElementById('iphone-price');
  iphonePrice.innerText = 0 ;
 }


 function coverBtnClose(){

    const iphoneFild = document.getElementById('cover-input-fild');
  
  iphoneFild.value ='0';

  const iphonePrice = document.getElementById('cover-price');
  iphonePrice.innerText = 0 ;
 }



// ====================total pricess ====================

 
function getTextElementById(elementId){
  
    const theElement = document.getElementById(elementId);
    const theElementString = theElement.innerText;
    const theElementNumberIs = parseInt(theElementString);
    return theElementNumberIs;

}

function setTextElementValueById(elementId, value){
const subTotalPrice = document.getElementById(elementId);
  subTotalPrice.innerText = value;
}

function calculatesumTotalPrice(){

    const currentPhoneTotal = getTextElementById('iphone-price');
  const currentCovertotal = getTextElementById('cover-price');
  const phoneOrCoverTotalPrice = currentPhoneTotal + currentCovertotal;

  setTextElementValueById('sub-Totol', phoneOrCoverTotalPrice);
  

  //calculate tax
  const taxAmountString = (phoneOrCoverTotalPrice * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);

  setTextElementValueById('tax-amount',taxAmount);

  const finalTotalAmount = phoneOrCoverTotalPrice + taxAmount;
  setTextElementValueById('final-total', finalTotalAmount);


}
