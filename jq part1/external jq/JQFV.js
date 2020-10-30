/* heading */
if(typeof jQuery == "undefined"){
    //alert("jQuery not installed ! try again")
}else{
   // alert("jQuery installed sucessfully")
}

/* detecting a click */
$("#circle1").click(function(){
    alert("rec circle is clicked")
})
$("#square1").click(function(){
    alert("orange square is clicked")
})
$("#square2").click(function(){
    alert("green square is clicked")
})

/* changing website content */
$("#circle2").hover(function(){ //hover or click
    $("#det-click").html("refresh the page to go back")
    //or
    //alert($("#det-click").html())
    $("iframe").attr("src","https://timesofindia.indiatimes.com/")
})

/* changing styles */
$("#circle3").click(function(){
    //$("#cng-click").html("this topic is changing styles")
    //alert($("#cng-click").html())
    //$("#circle3").css("background-color", "green")
    $("#circle3").fadeOut("slow") //we can use insted of fadeout() to hide()
    //alert("red circle is clicked to dis appear")
})
$("#square3").click(function(){
$("#square3").hide()
})
$("#square4").click(function(){
$("#square4").hide()
})

//or
/*$("#cng-style").click(function(){
    $("#cng-style").css("display", "none")
})*/ // all will disappear

//or
/*$("#cng-style").click(function(){
    $(this).css("display", "none")
})*/


/* fading content*/
$("#fadebtn-out").click(function(){
    $("#fadetxt").fadeOut()
})
$("#fadebtn-in").click(function(){
    $("#fadetxt2").fadeIn()
})

/*
$("#togglebtn").click(function(){
    $("#toggletext").fadeOut()
})

$("#togglebtn").click(function(){
    $("#toggletext").fadeIn()
})
        meathod 1 
        */
/*
$("#togglebtn").click(function(){
    if($("#toggletext").css("display") == "none"){
        $("#toggletext").fadeIn()
    }else{
        $("#toggletext").fadeOut()
}
})
        meathod 2
        */

var textDisplay = true
$("#togglebtn").click(function(){
    if(textDisplay){
        $("#toggletext").fadeOut(function(){
            textDisplay = false
        })
    }else{
        $("#toggletext").fadeIn(function(){
            textDisplay = true
        })
}
}) // meathod 3, meathod 2 is better


/* animating content */
$("#circle4").click(function(){
    //alert("clicked circle4")
    $("#circle4").animate({
                           width : "400px",
                           height: "400px",
                           marginLeft : "100px",
                           marginTop : "100px",
                           backgroundColor: "green",
                           }, 2500, function(){
                                $("#circle4").css("background-color" , "green")
                           }) 
})

/*AJAX*/


/* regular expressions*/
//var regex = /e/g // try with i or g
//var string = "you are not subscribed,you are not subscribed"
//var result = string.match(regex)
//alert(result)

/* form validation system*/ 
 function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
return regex.test(email);
}


$("#submit").click(function(){
    var errorMessage = ""
    var fieldsMissing =""

    if ($("#Email").val() == ""){
        fieldsMissing += "<br>Email"
    }
    if ($("#Telephone").val() == ""){
        fieldsMissing += "<br>phonenumber"
    }
    if ($("#Password").val() == ""){
        fieldsMissing += "<br>password"
    }
    if ($("#c-Password").val() == ""){
        fieldsMissing += "<br>confirm pasword"
    }
    if(fieldsMissing != ""){
        errorMessage += "<p>the following fields are missimg:" +
fieldsMissing
    }
        if(isEmail($("#Email").val()) == false)
        {
            errorMessage += "<p>your email is not found ! try again</p>"
        } 
        if($.isNumeric($("#Telephone").val()) == false){
            errorMessage += "<p>your phonenumber is incorrect or not found ! try again</p>"
        }
        if($("#Password").val() != $("#c-Password").val()){
            errorMessage += "<p>your password is incorrect or not matching! please try again</p>"
        }
        //alert(errorMessage) 
        if(errorMessage != ""){
            $("#errorMessage").html(errorMessage)
        }else{
            $("#sucessfull").show()
        }  
})
