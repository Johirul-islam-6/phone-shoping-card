
// --------------btn iphon click function-----------------

document.getElementById('btn-iphon').addEventListener('click', function(){

  const totalIphon = iphoneInputFild(true);

  updatePhoneTotalPrice(totalIphon);


  // calculation total phos or cover price

  calculatesumTotalPrice();
  
});

// ------------------------btn-iPhone-subtraction------------------

document.getElementById('btn-iphne-subtraction').addEventListener('click', function(){

   const totalIphon = iphoneInputFild(false);

    updatePhoneTotalPrice(totalIphon);

    // calculation total phos or cover price

  calculatesumTotalPrice();

});



document.getElementById('iphon-close').addEventListener('click', function(){

  btnClose();

})

