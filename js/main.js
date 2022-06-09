var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormSelect = document.querySelector(".form__select");
var elFormResult = document.querySelector(".form__result");


elForm.addEventListener("submit" , function(evt){

  evt.preventDefault();

  var elFormInputVal = Number(elFormInput.value);
  var elFormSelectVal = Number(elFormSelect.value);

  elFormResult.textContent = elFormInputVal * elFormSelectVal;
  console.log(elFormInputVal * elFormSelectVal);
});
