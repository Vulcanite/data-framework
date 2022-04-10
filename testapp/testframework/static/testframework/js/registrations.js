var Registration = function () {
    return {
        init : function(){
            var data = Handler.load('getdata');
            console.log(data);
            Handler.loadDropdown("projects");
            Handler.loadCheckbox("checkboxes");
            Handler.loadRadioButtons("radio");
        },
        addStudent : function(){
            list = ["gmail.com", "outlook.com"]
            try{
                Handler.getCheckboxesValue("domain", false);
                Validations.customValidation($("#username"), /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/, false, "Should be Alphanumeric Pattern");
                Validations.name($("#fname"), false);
                Validations.name($("#lname"), false);
                Validations.email($("#emailAddress"), list, true, "Invalid EMAIL ID");
                Validations.password($("#passwd"), 12, false, "");
                Validations.passwordNotMatch($("passwd"), $("cnfpasswd"));
            }catch(e){
                console.log(e.source);
                Handler.showInputError(e.source, e.message);
            }
        }
    }
}();

jQuery(document).ready(function () {
    Registration.init()
});
