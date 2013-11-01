/* --------------- 

  Script for validation of contact form 

  ---------------*/

function validate () {
  if(testValidation()){   // if no errors display ththank you message
    document.getElementById('success_msg').innerHTML = "<p>Thanks for writing! I'll get back to you soon</p>";
  }
}

function testValidation () {

  var i;
  var values = new Array();
  var errors = new Array();

  values[0] = document.getElementById('txtName').value;
  values[1] = document.getElementById('txtEmail').value;
  values[2] = document.getElementById('txtNum').value;
  values[3] = document.getElementById('txtAddress').value;
  values[4] = document.getElementById('txtPostal').value;
  values[5] = document.getElementById('txtMessage').value;
  try{
    console.log(values.length);
    for ( i = 0; i < values.length; i++) {
console.log(i);
      // only null check first
      if(values[i]==null || values[i]==""){
        if(i==0){
          errors[i] = "Please Enter Name";
        }
        else if(i==1){
          errors[i] = "Please Enter Email ID";
        }
        else if(i==2){
          errors[i] = "Please Enter Contact Number";
        }
        else if(i==3){
          errors[i] = "Please Enter Address";
        }
        else if(i==4){
          console.log("Here");
          errors[i] = "Please Enter Postal Code";
        }
        else if(i==5){
          errors[i] = "Please Enter Message";
        }
        if(errors.length == values.length){
          throw "";
        }
      }else{      // If no null value check regex validation       
        switch(i){
          case 0: //Name
            var reg = /^[a-zA-Z]/;
            if(reg.test(values[i])) {     // If valid set error array to null
              errors[i] ="";
            }else{                        // If invalid set error array with error message
              errors[i] ="Please Enter Characters only";
            }
            break;
          case 1: //Email
            var reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if(reg.test(values[i])){
              errors[i] ="";
            }else{
              errors[i] ="";
              errors[i] ="Please Enter Correct Email ID";
            }
            break;
          case 2: //Phone Number
            var reg = /^(\([0-9]|[0-9])(\d{2}|\d{2}\))(-|.|\s)?\d{3}(-|.|\s)?\d{4}$/;
            if(reg.test(values[i])){
              errors[i] ="";
            }else{
              errors[i] ="Please Use the format <br/> [213-123-1234 | 2131231234 | (213) 123-1234]";
            }
            break;  
          case 3:  // Address
            if (!values[i]==" ") {
              errors[i]="";
            } 
            break;        
          case 4:  // Postal Code
            var reg = /^(\d{5})$|^([a-zA-Z]\d[a-zA-Z]( )?\d[a-zA-Z]\d)$/;
            if(reg.test(values[i])){
              errors[i] ="";
            }else{
              errors[i] ="Please Use the format <br/> [12345 | A6A 6A6 | A6A6A6]";              
            }
            break;
          case 5: //Message
            if (!values[i]==" ") {
              errors[i]="";
            } 
            break;
        }  // switch ends here
      }  // else ends here
    }
    if (errors.length > 0) {  // throwing errors 
      throw ""; 
    }
  }catch(e){
    for (var i = 0; i < errors.length; i++) {
      if(errors[i]=="")     // if errors value null set the innerHTML to null else display error message
      {
        document.getElementById("error"+i).innerHTML ="";
      }else{
        document.getElementById("error"+i).innerHTML = "Error: " +errors[i];
      } 
    }    
  } // catch ends here
  finally{
    var j=0;
    for (var i = 0; i < errors.length; i++) {
      if(errors[i]==""){
        j++;
      }
    }
    if (j==errors.length) {
      return true;
    } else{
      return false;
    }
  }   //finally ends here
  
}// testValidation ends here