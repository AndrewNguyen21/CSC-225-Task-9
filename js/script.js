jQuery(document).ready(function($){
    $('#submit').on('click' , function(event){
        var textInput = document.getElementById("text-input").value;
        if(textInput == "") {
            alert("Text area empty. Please add text.");
            return false;
        }
        $("#tasks").prepend("The following text has been prepended: "  + textInput);
        });    
});