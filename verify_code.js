'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}(function(a){'function'==typeof define&&define.amd?define(function(){return a()}):window.VerifyCode=a()})(function(){var a=function(){function a(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:200,d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:40,e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;_classCallCheck(this,a);var f={background:'rand',dotNum:200,randCharType:'all',strLen:4};for(var h in e)f[h]=e[h];this.elms=document.querySelectorAll(b),this.width=c,this.height=d,this.options=f;var g=document.createElement('canvas');this.canvas=g,this.drawer=g.getContext('2d'),this.codeString='',this.initCanvas()}var b=Math.floor;return _createClass(a,[{key:'draw',value:function draw(){this.drawBackground(),this.drawPixel(),this.writeCode()}},{key:'drawBackground',value:function drawBackground(){var a=this;a.drawer.fillStyle='rand'==a.options.background.toLowerCase()?a.getRandColor():a.options.background,a.drawer.fillRect(0,0,a.width,a.height)}},{key:'drawPixel',value:function drawPixel(){for(var a=this.options.dotNum,b=this;a--;)b.drawer.beginPath(),b.drawer.fillStyle=b.getRandColor('rgba'),b.drawer.arc(b.rand(0,b.width),b.rand(0,b.height),2,0,2*Math.PI),b.drawer.fill()}},{key:'initCanvas',value:function initCanvas(){var a=this,b=a.canvas;b.width=a.width,b.height=a.height,this.draw();for(var c,d=0,e=this.elms.length;d<e;d++)c=this.elms[d],c.append(b),c.addEventListener('click',function(){a.draw()})}},{key:'writeCode',value:function writeCode(){var a=this.getRandArr(),c=this,d=b((c.width-20)/c.options.strLen),e=c.height;c.codeString='';for(var f=0,g=c.options.strLen;f<g;f++){var h=c.rand(a.length-1),i=a[h],j=d*(f+1)+c.rand(-d/2,0);c.codeString+=i,c.drawer.beginPath(),c.drawer.fillStyle='white',c.drawer.font=c.rand(20,50)+'px Arial',c.drawer.fillText(i,j,e/2+c.rand(10,20))}}},{key:'getRandArr',value:function getRandArr(){var a=['0','1','2','3','4','5','6','7','8','9'],b=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],c=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],d=[],e=this;return'all'==this.options.randCharType?d=a.concat(b,c):(this.options.randCharType.match(/(\s|\&|^)num(\s|\&|$)/)&&(d=d.concat(a)),this.options.randCharType.match(/(\s|\&|^)eng(\s|\&|$)/)&&(d=d.concat(b)),this.options.randCharType.match(/(\s|\&|^)ENG(\s|\&|$)/)&&(d=d.concat(c)),this.options.randCharType.match(/(\s|\&|^)auto(\s|\&|$)/)&&e.options.randArr&&(d=d.concat(e.options.randArr))),d}},{key:'getRandColor',value:function getRandColor(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'rgb',b=void 0,c=this;return'rgb'===a?b='rgb('+c.rand(0,255)+', '+c.rand(0,255)+', '+c.rand(0,255)+')':'rgba'===a?b='rgba('+c.rand(0,255)+', '+c.rand(0,255)+', '+c.rand(0,255)+', '+Math.random().toFixed(2)+')':'hsl'===a||'hsv'===a?b='hsl('+c.rand(0,360)+', '+c.rand(0,100)+', '+c.rand(0,100)+')':'hsla'===a?b='hsla('+c.rand(0,360)+', '+c.rand(0,100)+', '+c.rand(0,100)+', '+Math.random().toFixed(2)+')':void 0,b}},{key:'rand',value:function rand(a){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;if(a=parseInt(a),c=parseInt(c),a>c){var d=c;c=a,a=d}return b(Math.random()*(c-a+1))+a}}]),a}();return a});

//# sourceMappingURL=verify_code.js.map