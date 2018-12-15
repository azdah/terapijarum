var uri=window.location.toString();if(uri.indexOf("&m=1","&m=1")>0){var clean_uri=uri.substring(0,uri.indexOf("&m=1"));window.history.replaceState({},document.title,clean_uri)}var uri=window.location.toString();if(uri.indexOf("?m=1","?m=1")>0){var clean_uri=uri.substring(0,uri.indexOf("?m=1"));window.history.replaceState({},document.title,clean_uri)}
var cari=navigator.userAgent;var redirect=cari.search("UCBrowser");if(redirect>1){var OpenChrome=window.location.assign("googlechrome://navigate?url="+window.location.href);var activity=OpenChrome;document.getElementsByTagName('head')[0].appendChild(activity)}
// Copy Text
function nocopas(){var e=window.getSelection();pagelink=" Sumber : "+document.location.href,copytext=e+pagelink,newdiv=document.createElement("div"),newdiv.style.position="absolute",newdiv.style.left="-99999px",document.body.appendChild(newdiv),newdiv.innerHTML=copytext,e.selectAllChildren(newdiv),window.setTimeout(function(){document.body.removeChild(newdiv)},100)}document.addEventListener("copy",nocopas)
//Seo Image
$(document).ready(function(){$("img").each(function(){var t=$(this),a=t.attr("src");t.attr("alt",a.substring(a.lastIndexOf("/")+1,a.lastIndexOf(".")))})});
$(document).ready(function(){$("img").each(function(){var t=$(this),n=t.attr("src");t.attr("title",n.substring(n.lastIndexOf("/")+1,n.lastIndexOf(".")))})});
var scrollTimer=null;$(window).scroll(function(){var viewportHeight=$(this).height(),scrollbarHeight=viewportHeight/$(document).height()*viewportHeight,progress=$(this).scrollTop()/($(document).height()-viewportHeight),distance=progress*(viewportHeight-scrollbarHeight)+scrollbarHeight/2-$('#scroll').height()/2;$('#scroll').css('top',distance).text(' ('+Math.round(progress*100)+'%)').fadeIn(100);if(scrollTimer!==null){clearTimeout(scrollTimer)}
scrollTimer=setTimeout(function(){$('#scroll').fadeOut()},1500)})
//tejalink
protected_links = "twitter.com, youtube.com, www.facebook.com, google.com, terapijarum.blogspot.co.id, terapijarum.blogspot.com, web.facebook.com, fb.com, plus.google.com, t.me";
(function() {var sl = document.createElement('script');sl.type = 'text/javascript'; sl.async = true;sl.src = 'https://rawcdn.githack.com/azdah/safelink/21744bcab4a6da6f39ea76ac84b7c0da54f3cbe6/safelink.js';(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(sl);
})();
