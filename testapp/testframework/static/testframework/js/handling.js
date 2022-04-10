var Handler = function(){
    return {
        load : function(url, data, element){
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
        loadDropdown: function(element, data, type){
            var renderedList= '';
            renderedList += '<option value="'+data+'">'+ data +'</option>'
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
        loadTableData: function(){
            
        }

    }
}();