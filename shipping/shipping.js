$(document).ready(function(){
    var price = 301;

    if(price >= 300){
        $(".select").remove();
        $(".delivery").append('<input type="delivery" disabled="disabled" name="delivery" value="Free express shipping">')
    }

    $('.forename').change(checkForename);
    $('.address').change(checkAddress);
    $('.phone').change(checkPhone);
    $('.email').change(checkEmail);
    $('.forename, .address, .phone, .email').change(checkButton);
    $(".btn").attr("disabled", true);

    function checkForename(){

        if(!validForename()){                        
            $(".error-forename").css("display", "inline");
            $("input.forename").css("border", "1px solid red");
        }else{
            $(".error-forename").css("display", "none");
            $("input.forename").css("border", "1px solid #ccc");
        }
    }

    function checkAddress(){
        if(!validAddress()){                        
            $(".error-address").css("display", "inline");
            $("input.address").css("border", "1px solid red");
        }else{
            $(".error-address").css("display", "none");
            $("input.address").css("border", "1px solid #ccc");

        }
    }

    function checkPhone(){
        if(!validPhone()){                        
            $(".error-phone").css("display", "inline");
            $("input.phone").css("border", "1px solid red");
        }else{
            $(".error-phone").css("display", "none");
            $("input.phone").css("border", "1px solid #ccc");
        }
    }

    function checkEmail(){
        if(!validEmail()){                        
            $(".error-email").css("display", "inline");
            $("input.email").css("border", "1px solid red");
        }else{
            $(".error-email").css("display", "none");
            $("input.email").css("border", "1px solid #ccc");
        }
    }

    function checkButton(){
        
        if(validForename() && validAddress() && validPhone() && validEmail()){
            $(".btn").attr("disabled", false);  
        }else {
            $(".btn").attr("disabled", true);
        }
    }    
    
    function validForename(){
        let forename = $("input.forename")[0].value;

        return /[a-zA-Z]/.test(forename);
    }

    function validAddress(){
        let address = $("input.address")[0].value;

        return /[a-zA-Z0-9_-]/.test(address);
    }

    function validPhone(){
        let phone = $("input.phone")[0].value;

        return /[0-9]/.test(phone);
    }

    function validEmail(){
        let email = $("input.email")[0].value;
    
        return ((email.indexOf(".") > 0) && (email.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(email);
    }
 
});


