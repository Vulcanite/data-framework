var Validations = function(){
    var EMAIL_PATTERN = /^\w+([\+\.\-]\w+)*@\w+([\-\.]\w+){0,2}(\.[a-zA-Z]{2,4})+$/;
    var PASSWORD_PATTERN = /^[A-Za-z0-9\@\#\$\%\!\-]+$/;
    var INTEGER_PATTERN = /^(([0-9]*)|([0-9]))$/;
    var ALPHANUMERIC_PATTERN = /^[a-z0-9]+$/i;

    var readDataFromElement = function(element, allowEmpty) {
        var data = [];
        if (Array.isArray($(element).val()) == true) {
            var value = $(element).val();
            if (value != undefined && value != null) {
                data = $(element).val();
            }
        } else {
            var value = $(element).val();
            if (value != undefined && value != null) {
                value = value.trim();
                if (value !== "") {
                    data.push(value);
                }
            }
        }

        if (data.length == 0 && allowEmpty != true) {
            throw {
                source : element,
                message : "Cannot be empty"
            }
        }

        return data;
    }

    var validate = function(element, pattern, allowEmpty, message) {
        var data = readDataFromElement(element, allowEmpty);
        for (var i = 0; i < data.length; i++) {
            if (data[i].length == 0) {
                if (allowEmpty == false) {
                    throw {
                        source : element,
                        message : "Cannot be empty"
                    }
                } else {
                    continue;
                }
            }

            if (pattern.test(data[i]) == false) {
                throw {
                    source : element,
                    message : message
                }
            }
        }
    }

    return {
        numberInRange : function(element, start, end, allowEmpty, message){
            var data = readDataFromElement(element, allowEmpty);
            validate(element, INTEGER_PATTERN, allowEmpty, "Invalid Number");
            for (var i = 0; i < data.length; i++) {
                if (start != null && Number(data[i]) < Number(start)) {
                    if (message === null || message === undefined) {
                        message = "Input value should be greater than or equal to " + start;
                    }

                    throw {
                        source : element,
                        message : message
                    }
                }

                if (end != null && Number(end) < Number(data[i])) {
                    if (message === null || message === undefined) {
                        message = "Input value should be less than or equal to " + end;
                    }

                    throw {
                        source : element,
                        message : message
                    }
                }
            }
        },
        notEmpty : function(element){
            var data = readDataFromElement(element, false);
            for (var i = 0; i < data.length; i++) {
                if (data[i].length == 0) {
                    throw {
                        source : element,
                        message : "Cannot be empty"
                    }
                }
            }
        },
        customValidation : function(element, pattern, allowEmpty, message){
            validate(element, pattern, allowEmpty, message);
        },
        lengthInRange : function(element, start, end, allowEmpty) {
            var data = readDataFromElement(element, allowEmpty);
            for (var i = 0; i < data.length; i++) {
                if (start != null && data[i].length < start) {
                    throw {
                        source : element,
                        message : "Input length should be atleast " + start
                    }
                }

                if (end != null && end < data[i].length) {
                    throw {
                        source : element,
                        message : "Maximum input length should be " + end
                    }
                }
            }
        },
        password : function(element, maxlength, allowEmpty){
            Validations.lengthInRange(element, 8, maxlength, allowEmpty);
            var data = readDataFromElement(element, allowEmpty);
            for (var i = 0; i < data.length; i++) {
                if (data[i] === data[i].toLowerCase()) {
                    throw {
                        source : element,
                        message : "Atleast one upper case character required"
                    }
                }

                if (data[i] === data[i].toUpperCase()) {
                    throw {
                        source : element,
                        message : "Atleast one lower case character required"
                    }
                }

                if (/\d/.test(data[i]) == false) {
                    throw {
                        source : element,
                        message : "Atleast one numerical character required"
                    }
                }

                if (/\s/.test(data[i]) == true) {
                    throw {
                        source : element,
                        message : "No whitespace characters allowed"
                    }
                }

                if (/[@#$%!-]/.test(data[i]) == false) {
                    throw {
                        source : element,
                        message : "Atleast one special character required"
                    }
                }

                validate(element, PASSWORD_PATTERN, allowEmpty,"Invalid Password Provided");
            }
        },
        alphanumeric : function(element, allowEmpty, message){
            validate(element, ALPHANUMERIC_PATTERN, allowEmpty, message);
        },
        excludedEmailHosts : function(element, list, allowEmpty){
            var data = readDataFromElement(element, allowEmpty);
            var elementData = data[0].split('@');
            if (list.includes(elementData[1]) == true){
                console.log("error");
                throw{
                    source: element,
                    message: "This Email Host is not allowed",
                } 
            }
        },
        email: function(element, list, allowEmpty, message){
            Validations.excludedEmailHosts(element, list, allowEmpty);
            validate(element, EMAIL_PATTERN, allowEmpty, message);
        },
        notInList : function(element, list, allowEmpty) {
            var data = readDataFromElement(element, allowEmpty);
            for (var i = 0; i < data.length; i++) {
                if (list.indexOf(data[i]) != -1) {
                    throw {
                        source : element,
                        message : "Already exists"
                    }
                }
            }
        }
    }
}();