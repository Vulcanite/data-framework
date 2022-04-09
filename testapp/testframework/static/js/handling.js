var Data = function(){
    return {
        load : function(url, data){
            $.ajax({
                type: GET,
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

        send : function(type, url, data){
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
        htmlEncode : function (value) {
            return $('<div/>').text(value).html();
        },
        loadResources: function(element, type){
            var data = load();
            if(data.type == "dropdown"){
                dropList += '<option id="group' + app + '" value="' + app + '">&nbsp;' + data + '</option>';
            }
            if(data.type == "radio"){
                dropList += '<option id="group' + app + '" value="' + app + '">&nbsp;' + data + '</option>';
            }
            if(data.type == "checkbox"){
                dropList += '<option id="group' + app + '" value="' + app + '">&nbsp;' + data + '</option>';
            }            
        },
        showError: function(source, message) {
            var container = $(source).closest(".fieldError");
            $(container).find(".comment").remove();
            $(container).append($('<span class="comment text-danger font-small-2">' + message + '</span>'));
            setTimeout(function() { $(container).find(".comment").remove(); }, 4000);
        },

    }
}