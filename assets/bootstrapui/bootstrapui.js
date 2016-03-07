(function ($) {

    function runFunction(functionToCheck) {
        var getType = {};
        if(functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'){
            functionToCheck();
        }
    }

    $.bootstrapui_radio_group = function(radioName,radioSelector,callback){
        var radioItems = "";
        for(var i =0; i<radioSelector.length; i++){
            radioItems += "<div class='radio'><label><input type='radio' name='"+radioName+"radio' id='"+radioName+i+"' value ='"+i+"'>"+radioSelector[i]+"</label></div>";
        }
        var radioGroup = $("<div class='form-group'>"+radioItems+"</div>");
        runFunction(callback);
        return radioGroup;
    };

    $.bootstrapui_radio_inline_group = function(radioName,radioSelector,callback){
        var radioItems = "";
        for(var i =0; i<radioSelector.length; i++){
            radioItems += "<label class='radio-inline'><input type='radio' name='"+radioName+"radio' id='"+radioName+i+"' value ='"+i+"'>"+radioSelector[i]+"</label>";
        }
        var radioGroup = $("<div class='form-group'>"+radioItems+"</div>");
        runFunction(callback);
        return radioGroup;
    };


    $.bootstrapui_checkbox_group = function(checkboxName,checkboxSelector,callback){
        var checkboxItems = "";
        for(var i =0; i<checkboxSelector.length; i++){
            checkboxItems += "<div class='checkbox'><label><input type='checkbox' id='"+checkboxName+i+"' value ='"+i+"'>"+checkboxSelector[i]+"</label></div>";
        }
        var checkboxGroup = $("<div class='form-group'>"+checkboxItems+"</div>");
        runFunction(callback);
        return checkboxGroup;
    };

    $.bootstrapui_checkbox_inline_group = function(checkboxName,checkboxSelector,callback){
        var checkboxItems = "";
        for(var i =0; i<checkboxSelector.length; i++){
            checkboxItems += "<label class='checkbox-inline'><input type='checkbox' id='"+checkboxName+i+"' value ='"+i+"'>"+checkboxSelector[i]+"</label>";
        }
        var checkboxGroup = $("<div class='form-group'>"+checkboxItems+"</div>");
        runFunction(callback);
        return checkboxGroup;
    };

    $.bootstrapui_textbox = function(textName,textboxtype,placeholder,callback){
        var textbox = $("<input type='"+textboxtype+"' id='"+textName+"' class='form-control' placeholder='"+placeholder+"'></div>");
        runFunction(callback);
        return textbox;
    };

    $.bootstrapui_button = function(btnName,btnlabel,btnclass,callback){
        var button = $("<button id='"+btnName+"'    class='btn btn-"+btnclass+"' type='submit'>"+btnlabel+"</button>");
        runFunction(callback);
        return button;
    };

    $.bootstrapui_dropbox = function (dropboxName,btnlabel, btnclass, selectfield, callback) {
        var dropboxselectitem = "";
        for (var i =0; i < selectfield.length; i++){
            dropboxselectitem +="<li id='"+dropboxName+i+"'>"+selectfield[i]+"</li>";
        }
        var dropboxselector = "<ul id='bank_deposit_selector' class='dropdown-menu' aria-labelledby='bank_deposit_btn'>" + dropboxselectitem + "</ul>";
        var dropbutton =
            "<button class='btn "+btnclass+" dropdown-toggle' type='button' id='bank_deposit_btn' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'><span class='btn-text'>"+btnlabel+"</span><span class='caret'></span></button>" + dropboxselector;

        var dropbox = $("<div class='dropdown'>"+dropbutton+dropboxselector+"</div>");

        dropbox.find("ul>li").on("click",function(e){
            dropbox.find("span.btn-text").text($(this).text());
        });

        runFunction(callback);
        return dropbox;

    };
})(jQuery);
