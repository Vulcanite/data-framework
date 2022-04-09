var Login = function () {
    return {
        checkValue : function(){
            try{
                console.log("Heheh");
                Validations.notEmpty($("#email"));
            }catch(e){
                Handler.showError(e.source, e.message);
            }
        }
    }
}();
