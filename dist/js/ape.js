"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};$.prototype.aautocomplete=function(t,o){var i,a,n=this;$(n).attr("autocomplete","off"),$(document).click(function(t){$(t.target).is("#autop li")||$(t.target).is(n)||$("#autop").remove()}),$("body").on("click","li.autop-li",function(){for(var t in o.destination)$("#"+o.destination[t]).val($(this).attr(t));$(n).val($(this).children("span").html()),$("#autop").remove()}),n.on("click keyup",function(o){a=$(this).val(),$("#autop").remove(),i="function"==typeof t?t(a):t,"click"!==o.type&&$("#autop").remove(),$.a="<div id='autop' class='autop'><div id='autopin' style=\"width: "+$(this).outerWidth()+'px"><ul>',i.forEach(r),$.a+="</ul></div></div>",$(this).after($.a)});var e="",l="",r=function(t,i,a){if("object"===(void 0===t?"undefined":_typeof(t))&&t.constructor!==Array){for(var n in t)e+=n+"='"+t[n]+"' ";var r=0;for(var p in o.display)l+=0==r?"<span>"+t[o.display[p]]+"</span>":" <small>"+t[o.display[p]]+"</small>",r++;$.a+="<li class='autop-li' "+e+" >"+l+"</li>",e="",l=""}else $.a+="<li class='autop-li'><span>"+t+"</span></li>"}};