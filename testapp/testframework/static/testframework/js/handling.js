var Handler = function(){
    return {
        load : function(url){
            $.ajax({
                type: 'GET',
                url: url,
                error: function(response){

                },
                success: function(response) {
                    console.log(response);
                },
                complete: function() {
                }
            });
        },

        send : function(type, url, data, element){
            $.ajax({
                type: type,
                url: url,
                data: data,
                error: function(response){
                    
                },
                success: function(response) {

                },
                complete: function() {
                }
            });

        },
        loadDropdown: function(element, projects){
            var renderedList= '';
            projects = ["Password Cracker", "Lock System", "Facial Recognition"];
            for(let data in projects){
                renderedList += '<option value="'+projects[data]+'">'+ projects[data] +'</option>';
            }
            $("#" + element).html("");
            $("#" + element).html(renderedList);
            $('#' + element + ' option:eq(0)').prop('selected', true);        
        },
        showInputError: function(source, message) {
            var container = $(source).closest(".errorTag");
            $(container).find(".comment").remove();
            $(container).append($('<span class="comment text-danger font-small-2">' + message + '</span>'));
            setTimeout(function() { $(container).find(".comment").remove(); }, 4000);
        },
        showRequestError: function(type, message, timeout) {
            $("#notification .alert-" + type).show();
            $("#notification .alert-" + type).html(message);
            if (timeout > 0) {
                setTimeout(function(){ $("#notification .alert-" + type).hide(); }, timeout);
            }
        },
        loadCheckbox: function(element, domain){
            var checkoptions = '';
            domain = ["ML", "DataScience", "AI", "Web Developement"]
            for(let value in domain){
                checkoptions += '<label><input name="domain" value="'+domain[value]+'" type="checkbox" class="input-checkbox" />'+domain[value]+'</label>'
            }
            $("#" + element).html("");
            $("#" + element).html(checkoptions);
        },
        getCheckboxesValue: function(name, allowEmpty){
            list = [];
            $("input:checkbox[name="+name+"]:checked").each(function(){
                list.push($(this).val());
            });
            if (list.length == 0 && allowEmpty==false){
                throw {
                    source : $(this),
                    message : "Atleast choose one box!"
                }
            }
            return list;
        },
        getRadioValue:function(name, allowEmpty){
            var data = $('input[name='+name+']:checked').val();
            return data;
        },
        loadRadioButtons : function(element, domain){
            var radioOptions = '';
            domain = ["Comps", "IT", "EXTC", "Mechanical"]
            for(let value in domain){
                radioOptions += '<label class="radio-label"><input type="radio" name="courses" class="input-radio"value="'+domain[value]+'">'+domain[value]+'</label>'
            }
            $("#" + element).html("");
            $("#" + element).html(radioOptions);

        }
    }
}();