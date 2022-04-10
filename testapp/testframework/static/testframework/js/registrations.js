var Registration = function () {
    return {
        init : function(){
            var data = Handler.load_data('getdata');
            console.log(data);
            Handler.loadDropdown("projects", ["AI", "Cybersecurity", "DataScience"]);
            Handler.loadCheckbox("checkboxes", ["AI", "Cybersecurity", "DataScience"]);
            Handler.loadRadioButtons("radiobuttons", ["AI", "Cybersecurity", "DataScience"]);
        },
        addStudent : function(){
            list = ["gmail.com", "outlook.com"]
            try{
                var data = Handler.getCheckboxesValue("domain", false);
                console.log(data)
                Validations.customValidation($("#username"), /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/, false, "Should be Alphanumeric Pattern");
                Validations.name($("#fname"), false);
                Validations.email($("#emailAddress"), list, false, "Invalid EMAIL ID");
                Validations.password($("#passwd"), 12, false, "");
                //Validations.passwordNotMatch($("#passwd"), $("#cnfpasswd"));
                Validations.numberInRange($("#age"), 18, 72, false);
            }catch(e){
                console.log(e.message);
                Handler.showInputError(e.source, e.message);
                //If an error is caught, then the message gets displayed below the input box! we have added a 'errorTag' to the 
                //class of the div surrounding the input, so whenever an error is caught for a particular validation
                //it shows exactly below the input box, which failed the validation
            }
        }
    }
}();

jQuery(document).ready(function () {
    Registration.init();
});
