
document.getElementById('btn-back-cover-iphone').addEventListener('click', function(){

   const backCoverNumber = coverInputFild(true);

    updateCaseTotalPrice(backCoverNumber);

    // calculation total phos or cover price

  calculatesumTotalPrice();

})


document.getElementById('subtraction-cover').addEventListener('click', function(){

   const backCoverNumber = coverInputFild(false);

    updateCaseTotalPrice(backCoverNumber);

    // calculation total phos or cover price

  calculatesumTotalPrice();
  
})

// close btn cover 

document.getElementById('close-cover-btn').addEventListener('click', function(){

  coverBtnClose();

})
