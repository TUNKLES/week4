$( document ).ready(function() {
    console.log("Page Ready");
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost(){

        var formData = {
            email:$("#email").val(),
            upwd:$("#upwd").val()
        }
        $.ajax({
            type:"POST",
            contentType:"application/json",
            url: window.location + "api/login",
            data : JSON.stringify(formData),
            dataType: "json",
            success : function(customer) {
                console.log("Login Test");
                if(customer.valid == true) {
                    $("#errormsg").removeClass("showmessage");
                    $("#errormsg").addClass("hidemessage");
                    var url = "http://localhost:3000/account";
                    $(location).attr('href',url);


                } else {
                    $("errormsg").removeClass("hidemessage");
                    $("#errormsg").addClass("showmessage");
                    
                    
                }
            //$("#postResultDiv").html("<p>"+"Post Successfully! </br>"+"Email Adress: "+customer.email+"</br>"+ "Password: "+ customer.upwd+ "</br>" + "Valid User: " + customer.valid+ "</p>");
            },
            error : function(e) {
                alert("Error!")
                console.log("Error: ", e);
            }
            
        });
        resetData();
    }
    
    
    function resetData() {
        $("#email").val("");
        $("#upwd").val("");
    }
});