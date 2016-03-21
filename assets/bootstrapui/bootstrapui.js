(function ($) {

    /**
     * 检测是不是方法，如果是方法就执行
     * @param functionToCheck
     */
    function runFunction(functionToCheck) {
        if (typeof functionToCheck === 'function') {
            functionToCheck();
        }
    }

    /**
     * 建立一个垂直的单选群组
     * @param radioName
     * @param radioSelector
     * @param callback
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_radio_group = function (radioName, radioSelector, callback) {
        var radioItems = "";
        for (var i = 0; i < radioSelector.length; i++) {
            radioItems += "<div class='radio'><label><input type='radio' name='" + radioName + "radio' id='" + radioName + i + "' value ='" + i + "'>" + radioSelector[i] + "</label></div>";
        }
        var radioGroup = $("<div class='form-group'>" + radioItems + "</div>");
        runFunction(callback);
        return radioGroup;
    };

    /**
     * 建立一个水平的单选群组
     * @param radioName
     * @param radioSelector
     * @param callback
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_radio_inline_group = function (radioName, radioSelector, callback) {
        var radioItems = "";
        for (var i = 0; i < radioSelector.length; i++) {
            radioItems += "<label class='radio-inline'><input type='radio' name='" + radioName + "radio' id='" + radioName + i + "' value ='" + i + "'>" + radioSelector[i] + "</label>";
        }
        var radioGroup = $("<div class='form-group'>" + radioItems + "</div>");
        runFunction(callback);
        return radioGroup;
    };


    /**
     * 建立一个垂直的checkbox群组
     * @param checkboxName
     * @param checkboxSelector
     * @param callback
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_checkbox_group = function (checkboxName, checkboxSelector, callback) {
        var checkboxItems = "";
        for (var i = 0; i < checkboxSelector.length; i++) {
            checkboxItems += "<div class='checkbox'><label><input type='checkbox' id='" + checkboxName + i + "' name='" + checkboxName + i + "' value ='" + i + "'>" + checkboxSelector[i] + "</label></div>";
        }
        var checkboxGroup = $("<div class='form-group'>" + checkboxItems + "</div>");
        runFunction(callback);
        return checkboxGroup;
    };

    /**
     * 建立一个水平的checkbox群组
     * @param checkboxName
     * @param checkboxSelector
     * @param callback
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_checkbox_inline_group = function (checkboxName, checkboxSelector, callback) {
        var checkboxItems = "";
        for (var i = 0; i < checkboxSelector.length; i++) {
            checkboxItems += "<label class='checkbox-inline'><input type='checkbox' id='" + checkboxName + i + "' name='" + checkboxName + i + "' value ='" + i + "'>" + checkboxSelector[i] + "</label>";
        }
        var checkboxGroup = $("<div class='form-group'>" + checkboxItems + "</div>");
        runFunction(callback);
        return checkboxGroup;
    };

    /**
     * 建立一个文本框
     * @param textName 文本框id、name
     * @param textboxtype 文本框類型
     * @param placeholder 提示訊息
     * @param defaultValue 預設值
     * @param isOnlyRead 是否唯讀
     * @param callback 回調函數
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_textbox = function (textName, textboxtype, placeholder,defaultValue,isOnlyRead ,callback) {
        isOnlyRead= isOnlyRead ? "disabled" : "";
        placeholder = placeholder || "";
        defaultValue = defaultValue || "";
        var textbox = $("<input type='" + textboxtype + "' id='" + textName + "' name='" + textName + "' class='form-control' placeholder='" + placeholder + "' value='"+defaultValue+"' "+isOnlyRead+" ></div>");
        runFunction(callback);
        return textbox;
    };

    /**
     * 建立一个按钮
     * @param btnName
     * @param btnlabel
     * @param btnclass
     * @param callback
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_button = function (btnName, btnlabel, btnclass, callback) {
        var button = $("<button id='" + btnName + "' name='" + btnName + "'  class='btn btn-" + btnclass + "'>" + btnlabel + "</button>");
        button.on("click",function(e){
            e.preventDefault();
            runFunction(callback);
        })
        return button;
    };

    /**
     * 建立一个下拉选单
     * @param dropboxName
     * @param btnclass
     * @param selectfield
     * @param callback
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_dropbox = function (dropboxName, btnclass, selectfield, callback) {
        var dropboxselectitem = "";
        var firstValue=selectfield[Object.keys(selectfield)[0]];
        var firstKey = Object.keys(selectfield)[0];
        for (var k in selectfield) {
            dropboxselectitem += "<li id='"+ k +"'>" + selectfield[k] + "</li>";
        }
        var dropboxselector = "<ul id='"+dropboxName+"_selector' class='dropdown-menu' aria-labelledby='"+dropboxName+"_btn'>" + dropboxselectitem + "</ul>";
        var dropbutton =
            "<button class='btn " + btnclass + " dropdown-toggle' type='button' id='"+dropboxName+"_btn' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'><span class='btn-text'>" + firstValue + "</span><span class='caret'></span></button>" + dropboxselector;

        var dropbox = $("<div id='" + dropboxName + "' class='dropdown' dropbox-value='"+firstKey+"'>" + dropbutton + dropboxselector + "</div>");

        dropbox.find("ul>li").on("click", function (e) {
            dropbox.find("span.btn-text").text($(this).text());
            dropbox.attr("dropbox-value",$(this).attr("id"));
            var dropboxid = $(this).attr("id");
            runFunction(callback(dropboxid));
        });
        return dropbox;

    };

    /**
     * 建立一个面板 (Bootstrap3 限定)
     * @param panelName
     * @param panelClass
     * @param panelTitle
     * @param panelContent
     * @param panelfooter
     * @param callback
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_panel = function(panelName, panelClass,panelTitle,panelContent,panelfooter,callback){
        var panel = $("<div id='"+panelName+"' class='panel panel-"+panelClass+"'><div class='panel-title'>"+panelTitle+"</div><div class='panel-body'>"+panelContent+"</div><div class='panel-footer'>"+panelfooter+"</div></div>")
        runFunction(callback);
        return panel;
    };

    /**
     * 建立一個提醒視窗
     * @param alertName
     * @param alertClass
     * @param alertContent
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_alert = function(alertName,alertClass,alertContent){
        var alert = $("<div id='"+alertName+"' class='alert alert-"+alertClass+"' role='alert'>"+alertContent+"</div>");
        return alert;
    }
})(jQuery);
