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
     * @param radioName 單選框群組名稱
     * @param radioSelector 單選框選項，請使用物件{}形式
     * @param callback 自定義回調函數
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_radio_group = function (radioName, radioSelector, callback) {
        radioSelector = radioSelector || {0:"請選擇..."};
        var radioItems = "";

        for (var k in radioSelector) {
            radioItems += "<div class='radio'><label><input type='radio' name='" + radioName +"_radio' id='" + radioName +"_" + k + "' value ='" + k + "'>" + radioSelector[k] + "</label></div>";
        }

        var radioGroup = $("<div id='"+radioName+"' class='form-group'>" + radioItems + "</div>");
        runFunction(callback);
        return radioGroup;
    };

    /**
     * 建立一个水平的单选群组
     * @param radioName 單選框群組名稱
     * @param radioSelector 單選框選項，請使用物件{}形式
     * @param callback 自定義回調函數
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_radio_inline_group = function (radioName, radioSelector, callback) {
        radioSelector = radioSelector || {0:"請選擇..."};
        var radioItems = "";

        for (var k in radioSelector) {
            radioItems += "<label class='radio-inline radio inline'><input type='radio' name='" + radioName +"_radio' id='" + radioName +"_"+ k + "' value ='" + k + "'>" + radioSelector[k] + "</label>"
        }
        var radioGroup = $("<div id='"+radioName+"' class='form-group'>" + radioItems + "</div>");
        runFunction(callback);
        return radioGroup;
    };


    /**
     * 建立一个垂直的checkbox群组
     * @param checkboxName checkbox選項群組名稱
     * @param checkboxSelector checkbox選項，請使用物件{}形式
     * @param callback 自定義回調函數
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_checkbox_group = function (checkboxName, checkboxSelector, callback) {
        checkboxSelector = checkboxSelector || {0:"請選擇..."};
        var checkboxItems = "";
        for (var k in checkboxSelector) {
            checkboxItems += "<div class='checkbox'><label><input type='checkbox' id='" + checkboxName +"_checkbox_"+ k + "' name='" + checkboxName +"_checkbox_"+ k + "' value ='" + k + "'>" + checkboxSelector[k] + "</label></div>";
        }
        var checkboxGroup = $("<div id='"+checkboxName+"' class='form-group'>" + checkboxItems + "</div>");
        runFunction(callback);
        return checkboxGroup;
    };

    /**
     * 建立一个水平的checkbox群组
     * @param checkboxName checkbox選項群組名稱
     * @param checkboxSelector checkbox選項，請使用物件{}形式
     * @param callback 自定義回調函數
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_checkbox_inline_group = function (checkboxName, checkboxSelector, callback) {
        checkboxSelector = checkboxSelector || {0:"請選擇..."};
        var checkboxItems = "";
        for (var k in checkboxSelector) {
            checkboxItems += "<label class='checkbox-inline checkbox inline'><input type='checkbox' id='" + checkboxName +"_checkbox_"+ k + "' name='" + checkboxName +"_checkbox_"+ k + "' value ='" + k + "'>" + checkboxSelector[k] + "</label>";
        }
        var checkboxGroup = $("<div id='"+checkboxName+"' class='form-group'>" + checkboxItems + "</div>");
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
     * @param btnName 按鈕名稱
     * @param btnlabel 按鈕顯示文字
     * @param btnclass 按鈕類型
     * @param callback 自定義回調函數
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
     * @param dropboxName 下拉選單控件名稱
     * @param btnclass 下拉選單按鈕類型
     * @param selectfield  下拉選單選項，請使用物件{}形式
     * @param callback 自定義回調函數
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_dropbox = function (dropboxName, btnclass, selectfield, callback) {
        selectfield = selectfield || {0:"請選擇..."}
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
     * @param panelName 面板名稱
     * @param panelClass 面板類型
     * @param panelTitle 面板標題
     * @param panelContent 面板內容
     * @param panelfooter 面板頁腳
     * @param callback 回調函數
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_panel = function(panelName, panelClass,panelTitle,panelContent,panelfooter,callback){
        var panel = $("<div id='"+panelName+"' class='panel panel-"+panelClass+"'><div class='panel-title'>"+panelTitle+"</div><div class='panel-body'>"+panelContent+"</div><div class='panel-footer'>"+panelfooter+"</div></div>")
        runFunction(callback);
        return panel;
    };

    /**
     * 建立一個提醒框
     * @param alertName 提醒框名稱
     * @param alertClass 提醒框類型
     * @param alertContent 提醒框內容
     * @param callback 回調函數
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_alert = function(alertName,alertClass,alertContent,callback){
        var alert = $("<div id='"+alertName+"' class='alert alert-"+alertClass+"' role='alert'>"+alertContent+"</div>");
        runFunction(callback);
        return alert;
    }

    /**
     * (特別注意，本部份功能需要加入(github)smalot/bootstrap-datetimepicker插件才能正常運作)
     * 建立一個日期時間選擇器，預設為天類型
     * @param datetimepickerName 日期選擇器名稱
     * @param selecterType 日期選擇器類型。目前僅支持小時('hour')和天('day')類型
     * @returns {*|HTMLElement}
     */
    $.bootstrapui_datetimepicker = function(datetimepickerName,selecterType){
        selecterType = selecterType || 'day';
        var format = 'yyyy-mm-dd';
        var minView = 2;
        switch (selecterType){
            case 'hour':
                format = 'yyyy-mm-dd hh:ii';
                minView = 0;
                break;
            case 'day':
                format = 'yyyy-mm-dd';
                minView = 2;
                break;
            default:
                format = 'yyyy-mm-dd';
                minView = 2;
        }

        var datetimepicker = $(" <input id='"+datetimepickerName+"' type='text' placeholder='請選擇時間…' class='form_datetime'>");

        datetimepicker.datetimepicker({
            format: format,
            minView: minView,
            todayBtn: true,
            clearBtn: true,
            todayHighlight: true,
            language:'zh-CN',
            minuteStep:10,
            autoclose:true
        });
        return datetimepicker;
    }

})(jQuery);
