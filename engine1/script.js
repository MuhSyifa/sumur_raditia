// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_kenburns(d,l,m){var e=jQuery;var g=e(this);var f=document.createElement("canvas").getContext;var i=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_kenburns").appendTo(m);var p=d.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[0.5,1,1],to:[0.5,1,1.3]},{from:[1,0.5,1.2],to:[1,0.5,1]},{from:[1,0.5,1],to:[1,0.5,1.2]},{from:[0,0.5,1.2],to:[0,0.5,1]},{from:[1,0.5,1.2],to:[1,0.5,1]},{from:[0.5,0.5,1],to:[0.5,0.5,1.2]},{from:[0.5,0.5,1.3],to:[0.5,0.5,1]},{from:[0.5,1,1],to:[0.5,0,1.15]}];function c(h){return p[h?Math.floor(Math.random()*(f?p.length:Math.min(5,p.length))):0]}function o(u,v){var x=new Date().getTime();var w=function(){var y=(new Date().getTime()-x)/v;if(y<1){u(y);requestAnimationFrame(w)}else{h(1)}};w();function h(y){cancelAnimationFrame(w);if(y){u(1)}}return{stop:h}}var k=d.width,q=d.height;var j,b;var a,s;function n(){a=e('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(i)}n();function t(x,u,h){var v={width:100*x[2]+"%"};v[u?"right":"left"]=-100*(x[2]-1)*(u?(1-x[0]):x[0])+"%";v[h?"bottom":"top"]=-100*(x[2]-1)*(h?(1-x[1]):x[1])+"%";if(!f){for(var w in v){if(/\%/.test(v[w])){v[w]=(/right|left|width/.test(w)?k:q)*parseFloat(v[w])/100+"px"}}}return v}function r(x,A,B){var u=e(x);u={width:u.width(),height:u.height(),marginTop:u.css("marginTop"),marginLeft:u.css("marginLeft")};if(f){if(b){b.stop(1)}b=j}if(s){s.remove()}s=a;n();if(B){a.hide();s.stop(true,true)}if(f){var z,y;var v,h;v=e('<canvas width="'+k+'" height="'+q+'"/>');v.css({position:"absolute",left:0,top:0}).css(u).appendTo(a);z=v.get(0).getContext("2d");h=v.clone().appendTo(a);y=h.get(0).getContext("2d");j=new o(function(C){var E=[A.from[0]*(1-C)+C*A.to[0],A.from[1]*(1-C)+C*A.to[1],A.from[2]*(1-C)+C*A.to[2]];y.drawImage(x,-k*(E[2]-1)*E[0],-q*(E[2]-1)*E[1],k*E[2],q*E[2]);z.clearRect(0,0,k,q);var D=z;z=y;y=D},d.duration+d.delay*2)}else{k=u.width;q=u.height;var w=e('<img src="'+x.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(a).css(t(A.from,A.from[0]>0.5,A.from[1]>0.5)).animate(t(A.to,A.from[0]>0.5,A.from[1]>0.5),{easing:"linear",queue:false,duration:(1.5*d.duration+d.delay)})}if(B){a.fadeIn(d.duration)}}if(typeof d.effect=="string"){e(function(){l.each(function(h){e(this).css({visibility:"hidden"});if(h==d.startSlide){r(this,c(0),0)}})})}this.go=function(h,u){setTimeout(function(){g.trigger("effectEnd")},d.duration);r(l.get(h),c(h),1)}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_slices(k,h,i){var b=jQuery;var f=b(this);function g(p,m,n,l,o){if(k.support.transform&&k.support.transition){if(m.top){m.transform="translate3d(0,"+(m.top?m.top:0)+",0)"}delete m.top;if(n){m.transition=n+"ms all "+(l?l:0)+"ms ease-in-out"}p.css(m);if(o){p.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){p.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");o()})}}else{if(n){p.delay(l?l:0).animate(m,{duration:k.duration,complete:o?o:0})}else{p.css(m)}}}var e=function(r,x){var q=b.extend({},{effect:"random",slices:15,animSpeed:500,pauseTime:3000,startSlide:0,container:null,onEffectEnd:0},x);var t={currentSlide:0,currentImage:"",totalSlides:0,randAnim:"",stop:false};var o=b(r);o.data("wow:vars",t);if(!/absolute|relative/.test(o.css("position"))){o.css("position","relative")}var m=x.container||o;var p=o.children();t.totalSlides=p.length;if(q.startSlide>0){if(q.startSlide>=t.totalSlides){q.startSlide=t.totalSlides-1}t.currentSlide=q.startSlide}if(b(p[t.currentSlide]).is("img")){t.currentImage=b(p[t.currentSlide])}else{t.currentImage=b(p[t.currentSlide]).find("img:first")}if(b(p[t.currentSlide]).is("a")){b(p[t.currentSlide]).css("display","block")}for(var s=0;s<q.slices;s++){var w=Math.round(m.width()/q.slices);var v=b('<div class="wow-slice"></div>').css({left:w*s+"px",overflow:"hidden",width:((s==q.slices-1)?(m.width()-(w*s)):w)+"px",position:"absolute"}).appendTo(m);b("<img>").css({position:"absolute",left:0,top:0,transform:"translate3d(0,0,0)"}).appendTo(v)}var n=0;this.sliderRun=function(y,z){if(t.busy){return false}q.effect=z||q.effect;t.currentSlide=y-1;u(o,p,q,false);return true};var l=function(){if(q.onEffectEnd){q.onEffectEnd(t.currentSlide)}m.hide();b(".wow-slice",m).css({transition:"",transform:""});t.busy=0};var u=function(y,z,C,E){var F=y.data("wow:vars");if((!F||F.stop)&&!E){return false}F.busy=1;F.currentSlide++;if(F.currentSlide==F.totalSlides){F.currentSlide=0}if(F.currentSlide<0){F.currentSlide=(F.totalSlides-1)}F.currentImage=b(z[F.currentSlide]);if(!F.currentImage.is("img")){F.currentImage=F.currentImage.find("img:first")}var A=b(h[F.currentSlide]);A={width:A.width(),heiht:A.height(),marginTop:A.css("marginTop"),marginLeft:A.css("marginLeft")};b(".wow-slice",m).each(function(J){var L=b(this),I=b("img",L);var K=Math.round(m.width()/C.slices);I.width(m.width());I.attr("src",F.currentImage.attr("src"));I.css({left:-K*J+"px"}).css(A);L.css({height:"100%",opacity:0,left:K*J,width:((J==C.slices-1)?(m.width()-(K*J)):K)})});m.show();if(C.effect=="random"){var G=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDownRight","sliceUpDownLeft","fold","fade");F.randAnim=G[Math.floor(Math.random()*(G.length+1))];if(F.randAnim==undefined){F.randAnim="fade"}}if(C.effect.indexOf(",")!=-1){var G=C.effect.split(",");F.randAnim=b.trim(G[Math.floor(Math.random()*G.length)])}if(C.effect=="sliceDown"||C.effect=="sliceDownRight"||F.randAnim=="sliceDownRight"||C.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){H=H._reverse()}g(H,{top:"-100%"});setTimeout(function(){H.each(function(I){g(b(this),{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})},0)}else{if(C.effect=="sliceUp"||C.effect=="sliceUpRight"||F.randAnim=="sliceUpRight"||C.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){H=H._reverse()}g(H,{top:"100%"});setTimeout(function(){H.each(function(I){g(b(this),{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})},0)}else{if(C.effect=="sliceUpDown"||C.effect=="sliceUpDownRight"||F.randAnim=="sliceUpDownRight"||C.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:((I%2)?"-":"")+"100%"})});setTimeout(function(){H.each(function(I){g(b(this),{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})},0)}else{if(C.effect=="fold"||F.randAnim=="fold"){var B=0;var H=b(".wow-slice",m);var D=H.width();H.css("width",0).each(function(I){b(this).delay(100+B).animate({width:D,opacity:1},C.animSpeed,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="fade"||F.randAnim=="fade"){var H=b(".wow-slice",m);b(".wow-slice",m).each(function(I){b(this).css("height","100%");b(this).animate({opacity:"1.0"},(C.animSpeed*2),(I==C.slices-1)?l:0)})}}}}}}};b.fn._reverse=[].reverse;var a=b("li",i);var c=b("ul",i);var d=b("<div>").addClass("ws_effect ws_slices").css({left:0,top:0,"z-index":8,overflow:"hidden",width:"100%",height:"100%",position:"absolute"}).appendTo(i);var j=new e(c,{keyboardNav:false,caption:0,effect:"sliceDownRight,sliceDownLeft,sliceUpRight,sliceUpLeft,sliceUpDownRight,sliceUpDownLeft,sliceUpDownRight,sliceUpDownLeft,fold,fold,fold",animSpeed:k.duration,startSlide:k.startSlide,container:d,onEffectEnd:function(l){f.trigger("effectEnd")}});this.go=function(m,l){var n=j.sliderRun(m);if(k.fadeOut){c.fadeOut(k.duration)}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_basic_linear(j,g,a){var c=jQuery;var f=c(this);var i=c("<div>").addClass("ws_effect ws_basic_linear").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(a);var b=c("<div>").css({position:"absolute",display:"none","z-index":2,width:"200%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(i);var h=c("<div>").css({position:"absolute",left:"auto",top:"auto",width:"50%",height:"100%",overflow:"hidden"}),d=h.clone();b.append(h,d);function e(n,k,l,m){if(j.support.transform&&j.support.transition){if(k.right){k.left=-k.right;delete k.right}k.transform="translate3d("+k.left+"px,0,0)";delete k.left;k.transition="all "+l+"ms cubic-bezier(0.770, 0.000, 0.175, 1.000)";n.css(k);if(m){n.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){n.css({transform:"",transition:""});n.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");m()})}}else{n.animate(k,{easing:"easeInOutExpo",duration:j.duration,complete:m?m:0})}}this.go=function(k,o,m){b.stop(1,1);if(m==undefined){m=(!!((k-o+1)%g.length)^j.revers?"left":"right")}else{m=m?"left":"right"}var p=c(g[o]);var l={width:p.width()||j.width,height:p.height()||j.height};p.clone().css(l).appendTo(h).css(m,0);c(g[k]).clone().css(l).appendTo(d).show();if(m=="right"){h.css("left","50%");d.css("left",0)}else{h.css("left",0);d.css("left","50%")}b.css({left:"auto",right:"auto",top:0}).css(m,0).show();var n={};n[m]=-a.width();e(b,n,j.duration,function(){f.trigger("effectEnd");b.hide().find("div").html("")})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"kenburns,slices,basic_linear",prev:"",next:"",duration:20*100,delay:20*100,width:830,height:360,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,responsive:2,fullScreen:false,gestures:2,onBeforeStep:0,images:0});