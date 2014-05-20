/*
 * CAN Utilitary JavaScript Library
 *
 * Creation Date: 22/03/2012
 *
 * Copyright 2012 AdvanceMe Inc, All rights reserved
 * This software and documentation is the confidential and proprietary information of Advanceme, Inc.
 * You shall not disclose such Confidential Information and shall use it only in accordance with the
 * terms of the license agreement you entered into with this company.
 *
 */

/*
 Author: Wagner Alvarado Quesada
 Date: 22/03/2012
 Description:This function disable all controls type input and buttons of the div with id LeftContent
 */
function ReadOnly(isReadOnly) {
    if(isReadOnly == 1) {
        $('#LeftContent :input').attr('disabled', true);
        $('.button').hide();
        $('.button2').hide();
        $('.buttonStep').hide();
    }
}

/*
 Author: Bernal Fernandez Rojas
 Date: 19/03/2012
 Description: return true if is a Valid URI
 */
function isUrl(uri) {
	
    return /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(uri);
}

/*
Author: Bernal Fernandez Rojas
Date: 19/03/2012
Description: String Builder implementation in Javacript
*/
//Initializes a new instance of the StringBuilder class
// and appends the given value if supplied
function StringBuilder(value) {
    this.strings = [];
    this.append(value);
}

//Appends the given value to the end of this instance.
StringBuilder.prototype.append = function(value) {
    if(value) {
        this.strings.push(value);
    }
}
//Clears the string buffer
StringBuilder.prototype.clear = function() {
    this.strings.length = 1;
}
//Converts this instance to a String.
StringBuilder.prototype.toString = function() {
    return this.strings.join("");
}
/*
 Author: Bernal Fernandez Rojas
 Date: 19/03/2012
 Description: Return a date formated
 Note: require Date.js
 */
function ParseDate(datePHP, type) {
    date = datePHP.replace("T", " ");
    if(type == "hrs") {
        return $.format.date(date, "MM/dd/yyyy hh:mm:ss a");
    } else
        return $.format.date(date, "MM/dd/yyyy");
}

/*
 Author: Bernal Fernandez Rojas
 Date: 19/03/2012
 Description: Start and Stop timer implementation
 */
var TimerModule = ( function() {
    var timerHandle;
    var startTimer = function(fnc, interval) {
        if(timerHandle) {
            alert('timer already running');
            return;
        }
        timerHandle = window.setInterval(fnc, interval);
    };
    var stopTimer = function() {
        window.clearInterval(timerHandle);
        timerHandle = null;
    };
    return {
        start : startTimer,
        stop : stopTimer
    };
}());

/*
 Author: Bernal Fernandez Rojas
 Date: 19/03/2012
 Description: Generic Function to display errors
 */
function DisplayError(errorMessage, errorStatus, errorFire) {
    var content = new StringBuilder();
    if(errorStatus != undefined) {
        content.append('<li><span class="gray"> Status: </span>');
        content.append(errorStatus);
        content.append('</li>');
    }
    if(errorFire != undefined) {
        content.append('<li><span class="gray"> Origin: </span>');
        content.append(errorFire);
        content.append('</li>');
    }
    if(errorMessage != undefined) {
        content.append('<li><span class="gray"> Message: </span>');
        content.append(errorMessage);
        content.append('</li>');
    }
    $('#ErrorContent').html(content.toString());
    $.fancybox($("#GeneralMessagesError").html(), {
        'titlePosition' : 'inside',
        'transitionIn' : 'none',
        'transitionOut' : 'none'
    });
}

/*
 Author: Bernal Fernandez Rojas
 Date: 24/03/2012
 Description: Generic Function to execute Ajax Request with any action
 */
(function ($) {        
    var defaults = {
        eventType: "",
        type: "POST",
        url: "",
        data: {},
        cache: true,
        dataType: "html",
        contentType: "application/x-www-form-urlencoded",
        async: true,
        eventNamespace: "",
        ajaxBeforeSend: undefined,
        ajaxSuccess: undefined,
        ajaxError: undefined             
    }        
    $.extend({
        CANWebEvents: function(options){
            var opts = $.extend({}, defaults, options);                   
            $("#CANLoading").css("display", "block");
            $.ajax({
                type : opts.type,
                url : opts.url,
                data : opts.data,
                beforeSend: function(xhr){
                    if (typeof opts.ajaxBeforeSend === "function") {
                        opts.ajaxBeforeSend(xhr);
                    }
                },
                cache: opts.cache,
                dataType: opts.dataType,
                contentType: opts.contentType,
                async: opts.async,
                success: function(response){
                    opts.ajaxSuccess (response);
                },
                error : function(jqXHR, textStatus){
                    (typeof opts.ajaxError === "function") ? opts.ajaxError(jqXHR, textStatus) : defaultErrorCallback(jqXHR, textStatus);                        
                }
            });                          
        }                                                         
    });
            
    $.fn.extend({
        CANWebEvents: function(options){
            var opts = $.extend({}, defaults, options);
            var button = $(this);                
            if(opts.eventType != ""){
                var evtNamespace = "";
                if(opts.eventNamespace == ""){
                    evtNamespace = button.attr("id");
                }
                else
                    evtNamespace = opts.eventNamespace;
                button.unbind(opts.eventType + "." + evtNamespace).bind(opts.eventType + "." + evtNamespace, function(){
                    $("#CANLoading").css("display", "block");
                    $.ajax({
                        type : opts.type,
                        url : opts.url,
                        data : opts.data,
                        beforeSend: function(xhr){
                            if (typeof opts.ajaxBeforeSend === "function") {
                                opts.ajaxBeforeSend(xhr);
                            }
                        },
                        cache: opts.cache,
                        dataType: opts.dataType,
                        contentType: opts.contentType,
                        async: opts.async,
                        success: function(response){
                            opts.ajaxSuccess (response);
                        },
                        error : function(jqXHR, textStatus){
                            (typeof opts.ajaxError === "function") ? opts.ajaxError(jqXHR, textStatus) : defaultErrorCallback(jqXHR, textStatus);                                                
                        }
                    });       
                });                    
            }                                
        }
    });                      
})(jQuery);

/*
 Author: Bernal Fernandez Rojas
 Date: 24/03/2012
 Description: Default error Callback funtion
 */
function defaultErrorCallback(jqXHR, textStatus){
    $("#CANLoading").css("display", "none");           
    if (jqXHR.status === 0) {
        DisplayError('Not connect.\n Verify Network.', jqXHR.status);                
    } else if (jqXHR.status == 404) {
        DisplayError('Requested page not found.', jqXHR.status);                
    } else if (jqXHR.status == 500) {
        DisplayError('Internal Server Error.', jqXHR.status);                
    } else if (textStatus === 'parsererror') {
        DisplayError('Requested JSON parse failed.', jqXHR.status);                
    } else if (textStatus === 'timeout') {
        DisplayError('Time out error.', jqXHR.status);                
    } else if (textStatus === 'abort') {
        DisplayError('Ajax request aborted.', jqXHR.status);                
    } else {
        DisplayError('Uncaught Error.\n', jqXHR.responseText);                
    }          
}
/*
 Author: Sharel Quesada
 Date: 07/05/2012
 Description: Date Differences funtion
 */
function dateDiff(pendDate,pstartDate,opt)
{
    var startDate = new Date(pstartDate);
    var endDate = new Date(pendDate);
  
    if (startDate != '' && endDate != '')
    {
        if (opt=="DD")
        {
            var ONE_DAY = 1000 * 60 * 60 * 24; 
            var diff = endDate.getTime() - startDate.getTime()
            var days = (diff/ONE_DAY);
            return days;
        }
    }
}

/*
*Author: Adrián Ortiz
*Date: 17/04/2012
*Description: Open a file as a "pop-up" and alert if the browser has the option: "pop-up blocker" activated 
**/
function openValidatePopUp(response){
    var myPopup = '';
    myPopup = window.open(response);
    var navigatorName = navigator.userAgent;
    navigatorName = navigatorName.toLowerCase();
    navigatorName = navigatorName.indexOf("chrome");
    if (myPopup == null || typeof(myPopup)=='undefined'){
        alert('Please allow "pop-ups" for our site and click again');
    }
    else if (navigatorName > -1) {
        myPopup.onload = function() {
            setTimeout(function() {
                if (myPopup.screenX === 0){
                    alert('Please allow "pop-ups" for our site and click again');
                }
            }, 100);
        };
    }
}//END statementList_AjaxSuccess()
