!function(t){if(!t.fn.licoMsgbox){var a=[],o=function(){return{version:"0.0.3",defaults:{content:"",title:"提示",icon:"default"},createOverlay:function(a){var o=Math.max(t(window).width(),t("body").width()),s=Math.max(t(window).height(),t("body").height());t("<div/>").css({width:o+"px",height:s+"px"}).addClass("au-msgbox au-msgbox-overlay au-msgbox-overlay-"+a.icon+" au-msgbox-"+a.timestamp).hide().appendTo("body")},showOverlay:function(a){t(".au-msgbox.au-msgbox-overlay.au-msgbox-"+a.timestamp).fadeIn()},deleteOverlay:function(a){t(".au-msgbox.au-msgbox-overlay.au-msgbox-"+a.timestamp).fadeOut(function(){t(this).remove()})},createBox:function(a){var o=a.icon,s=a.content,n=a.title,e=a.YES,i=a.NO,b=a.OK,u=a.CANCEL,l=a.buttons;switch(o){case"error":n="<i class='fa fa-bolt'></i>&nbsp;&nbsp;"+n;break;case"warning":n="<i class='fa fa-warning'></i>&nbsp;&nbsp;"+n;break;case"default":default:n="<i class='fa fa-star'></i>&nbsp;&nbsp;"+n}var c=t("<div/>").addClass("au-msgbox au-msgbox-box au-msgbox-box-"+o+" au-msgbox-"+a.timestamp).hide().appendTo("body");t('<h3 class="au-msgbox-box-title"/>').html(n).appendTo(c),t('<p class="au-msgbox-box-validate au-msgbox-box-validate-'+o+'"/>').appendTo(c),t('<p class="au-msgbox-box-content au-msgbox-box-content-'+o+'"/>').html(s).appendTo(c),a.html&&c.append("<p>"+a.html+"</p>"),l&&l.length>0&&t.each(l,function(a,o,s){t('<button role="msgbox" type="button" class="btn '+(o.cls||"button-info")+'" value='+o.value+"/>").html('<i class="fa fa-'+o.icon+'"></i>&nbsp;&nbsp;&nbsp;&nbsp;'+o.text).appendTo(c)}),u&&t('<button role="msgbox" type="button" class="btn btn-default" value=0/>').html('<i class="fa fa-arrow-circle-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;'+u).appendTo(c),i&&t('<button role="msgbox" type="button" class="btn button-no" value=0/>').html('<i class="fa fa-times-circle"></i>&nbsp;&nbsp;&nbsp;&nbsp;'+i).appendTo(c),b&&t('<button role="msgbox" type="button" class="btn btn-warning" value=1/>').html('<i class="fa fa-arrow-circle-right"></i>&nbsp;&nbsp;&nbsp;&nbsp;'+b).appendTo(c),e&&t('<button role="msgbox" type="button" class="btn button-yes" value=1/>').html('<i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;&nbsp;'+e).appendTo(c)},showBox:function(a){t(".au-msgbox.au-msgbox-box.au-msgbox-"+a.timestamp).fadeIn(function(){t(this).children("button").eq(1).focus()})},deleteBox:function(a){t(".au-msgbox.au-msgbox-box.au-msgbox-"+a.timestamp).fadeOut(function(){t(this).remove()})},attachHandlers:function(a){var o=(a.icon,this);t(".au-msgbox.au-msgbox-"+a.timestamp+" button").on("click",function(){var s=t(this).val(),n=t(".au-msgbox.au-msgbox-"+a.timestamp);if(a.validate){var e=a.validate.call(a,s,n);if(!e.success)return void n.find(".au-msgbox-box-validate").html(e.msg)}o.deleteOverlay(a),o.deleteBox(a),a.handler&&a.handler.call(a,s,n)})},show:function(t){return t.timestamp=((new Date).getTime()+Math.random()).toString(16).replace(/[.]/g,""),a.push(t),this.createOverlay(t),this.showOverlay(t),this.createBox(t),this.showBox(t),this.attachHandlers(t),this}}}();!function(){t(document).on("keydown.confirmon.close",function(s){if(a.length>0)if(27===s.which||13===s.which){var n=a.pop();o.deleteOverlay(n),o.deleteBox(n),n.handler&&n.handler.call(n,13===s.which?"1":"0")}else if(9===s.which||39===s.which||37===s.which){var n=a[a.length-1],e=t(".au-msgbox.au-msgbox-box.au-msgbox-"+n.timestamp+" button:focus"),i=37===s.which?e.prev("button"):t(this).next("button");i.length>0?i.focus():t(".au-msgbox.au-msgbox-box.au-msgbox-"+n.timestamp+" button").first().focus()}})}(),t.fn.licoMsgbox=function(a){var a=t.extend({},o.defaults,a||{});return function(){return o.show.apply(o,arguments)}(a)},t.fn.licoMsgbox.isMasking=function(){var a=!1;return t(".au-msgbox").each(function(){return t(this).is(":hidden")?void 0:(a=!0,!1)}),a},t.licoMsgbox=t.fn.licoMsgbox}}(jQuery);