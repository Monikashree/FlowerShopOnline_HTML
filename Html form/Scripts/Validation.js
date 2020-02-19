function ValidateCardNumber() {                     //Function to validate card number
    var data = document.getElementById("txtCardNum");
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (!data.value.match(regex)) {
        document.getElementById("erNum").style.display = "block";        
        data.focus();
        data.value = null;
        return false;
    }
    else 
    {
       document.getElementById("erNum").style.display = "none"; 
       return true;
   }  
        
}

function ValidateSecurityCode() {                   //Function to validate security code
    var data = document.getElementById("txtCode");
    var regex = /[0-9]{3}/;
    if (!data.value.match(regex)) {
        document.getElementById("erCode").style.display = "block"; 
        data.focus();
        data.value = null;
        return false;
    }
    else
    {
       document.getElementById("erCode").style.display = "none";
       return true;
    }

}

function ValidateExpiryMonth() {                    //Function to validate Expiry month
    var data = document.getElementById("ddlMonth");
    if (data.value == 0){
        document.getElementById("erMonth").style.display = "block"; 
        data.focus();
        data.value = null;
        return false;
    }
    else
    {
       document.getElementById("erMonth").style.display = "none"; 
       return true; 
    }
}

function ValidateExpiryYear() {                     //Function to validate Expiry year
    var data = document.getElementById("ddlYear").value;
    if (data == 0){
        document.getElementById("erYear").style.display = "block"; 
        data.focus();
        data = null;
        return false;
    }
    else
    {
       document.getElementById("erYear").style.display = "none"; 
       return true;
    }
}

function ValidateName() {                           //Function to validate name
    var data = document.getElementById("txtCardName");
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!data.value.match(regex)){
     document.getElementById("erName").style.display = "block"; 
     data.focus();
     data.value = null;
     return false;
    }
    else
    {
        document.getElementById("erName").style.display = "none";
        return true;
    }
}
function ValidateCity() {                           //Function to validate name    
    var data = document.getElementById("txtTown");
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!data.value.match(regex)){
     document.getElementById("erCity").style.display = "block"; 
     data.focus();
     data.value = null;
     return false;
    }
    else
    {
        document.getElementById("erCity").style.display = "none";
        return true;
    }
}

function ValidateAddress() {                        //Function to validate address
    var data = document.getElementById("txtAdd1");
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!data.value.match(regex)){
     document.getElementById("erAdd1").style.display = "block"; 
     data.focus();
     data.value = null;
     return false;
    }
    else
    {
       document.getElementById("erAdd1").style.display = "none";
       return true;
    }
}

function ValidatePhoneNo() {                        //Function to validate phone number
    var data = document.getElementById("txtPhone");
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!data.value.match(regex)){
        document.getElementById("erPhone").style.display = "block"; 
        data.focus();
        data.value = null;
        return false;
    } 
    else
    {
       document.getElementById("erPhone").style.display = "none";
       return true;
    }
}

function ValidateFax() {                            //Function to validate fax
    var data = document.getElementById("txtFax");
    var regex = /^\+?[0-9]{6,}$/;
    if (!data.value.match(regex)){ 
         document.getElementById("erFax").style.display = "block"; 
        data.focus();
        data.value = null;
        return false;
    }
    else
    {
       document.getElementById("erFax").style.display = "none";
       return true;
    }
}

function ValidateMail() {                          //Function to validate mail
    var data = document.getElementById("txtMail");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!data.value.match(regex)){
     document.getElementById("erMail").style.display = "block"; 
     data.focus();
     data.value = null;
     return false;
    }
    else
    {
       document.getElementById("erMail").style.display = "none";
       return true;
    }
}

function ValidateZipCode() {                        //Function to validate Zip code
    var data = document.getElementById("txtPost");
    var regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (!data.value.match(regex)){
        document.getElementById("erPost").style.display = "block"; 
        data.focus();
        data.value = null;
        return false;
    }
    else
    {
       document.getElementById("erPost").style.display = "none"; 
       return true;
    }
}


function Cancel() {
    window.stop();
}

function ValidateRequiredFields() { 
    var cardNumber = document.getElementById('txtCardNum').value;
    var code = document.getElementById('txtCode').value;
    var name = document.getElementById('txtCardName').value;
    var address = document.getElementById('txtAdd1').value;
    var town = document.getElementById('txtTown').value;
    var post = document.getElementById('txtPost').value;
    var month = document.getElementById('ddlMonth').value;
    var year = document.getElementById('ddlYear').value;    
    var mail = document.getElementById('txtMail').value;
    
    
    if (cardNumber == "") 
        document.getElementById('txtCardNum').style.borderColor = "red";
    
    else{
        document.getElementById('txtCardNum').style.borderColor = "";
        
    }
    if (code == "") 
        document.getElementById('txtCode').style.borderColor = "red";
    
    else 
        document.getElementById('txtCode').style.borderColor = "";     

    if (name == "") 
        document.getElementById('txtCardName').style.borderColor = "red";
    
    else 
        document.getElementById('txtCardName').style.borderColor = "";       
     
    if (year == 0) 
        document.getElementById('ddlYear').style.borderColor = "red";
    
    else
        document.getElementById('ddlYear').style.borderColor = "";
    
    if (month == 0) 
        document.getElementById('ddlMonth').style.borderColor = "red";
    
    else
        document.getElementById('ddlMonth').style.borderColor = "";
    
    if (address == "") 
        document.getElementById('txtAdd1').style.borderColor = "red";
    
    else
        document.getElementById('txtAdd1').style.borderColor = "";
    
    if (town == "") 
        document.getElementById('txtTown').style.borderColor = "red";
    
    else
        document.getElementById('txtTown').style.borderColor = "";
    
    if (post == "") 
        document.getElementById('txtPost').style.borderColor = "red";
    
    else
        document.getElementById('txtPost').style.borderColor = "";
    
    if (mail == "") 
        document.getElementById('txtMail').style.borderColor = "red";
    
    else
        document.getElementById('txtMail').style.borderColor = "";
   
    if(cardNumber.length > 0 && code.length > 0 && name.length > 0 && address.length > 0 
        && town.length > 0 && post.length > 0 && month.length > 0 && year.length > 0 && mail.length > 0)
    {       
        alert("Payment Successfull!!!!");
        location.replace("FlowerShop.html");
    }
    else
    {
        alert("Please fill out the fields and try again!");
    }     
}