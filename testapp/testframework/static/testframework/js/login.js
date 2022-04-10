var Login = function () {
    return {
        checkValue : function(){
            list = ["gmail.com", "outlook.com"]
            try{
                Validations.email($("#loginid"), true, list, "Invalid EMAIL ID");
                Validations.password($("#passwd"), 8, false);
            }catch(e){
                console.log(e.message);
                Handler.showError(e.source, e.message);
            }
        }
    }
}();
