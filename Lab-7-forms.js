/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
  cid: 0,
  name: "",
  pc: "",
  speed: "",
  cost: 0,
};

window.onload = function () {
  var formhandle = document.forms.form_ship;
  formhandle.onsubmit = handleForm;
  //on form submiission
  var fName = formhandle.f_Name; //access the element through form
    var customerId = formhandle.f_Id; //customer's id form input
    var postalCode = formhandle.f_pc; //postal code form input

  function handleForm() {
   
    //validate inputs
    if (fName.value == "") {
      //show where error is made
      var msg = document.getElementById("in_Name");
      msg.style.background = "red";
      fName.focus();
      return false;
    }
    //validate the customerid input
    if (customerId.value == "") {
      //show where error is made
      var msg = document.getElementById("in_Id");
      msg.style.background = "red";
      customerId.focus();
      return false;
    }

    //validat the postal code
    if (postalCode.value == "") {
      //show where error is made
      var msg = document.getElementById("in_pc");
      msg.style.background = "red";
      postalCode.focus();
      return false; //stop submission progression
    }
	hideForm();//call hide form function
	displayMessage() 
	return false;
	
	
  } //handle form

  //name attribute for form element
  //when form is submitted
  function processForm() {
    //when submitted display message

    console.log(formhandle);
  }

  //display message.
  function displayMessage() {
    var message = document.getElementById("thanks_msg");
	var thCus = document.getElementById('thanksCustomer');
	message.style.display ="block"
    thCus.innerHTML = `${fName.value}  ( Customer # ${customerId.value})`;

	var pstcode = document.getElementById('thanksPC');
	pstcode.innerHTML = `${postalCode.value}`

  }

  function hideForm(){
	var getForm = document.getElementById('shippingForm');
	getForm.style.display ="none"

  }
};
