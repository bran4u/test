(this.webpackJsonpSiversStorageSPA=this.webpackJsonpSiversStorageSPA||[]).push([[0],{119:function(e,t,a){e.exports=a(218)},124:function(e,t,a){},125:function(e,t,a){},130:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(113),l=a.n(c),o=a(20),u=a(3),s=(a(124),a(125),function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav__item"},r.a.createElement(o.b,{to:"/",className:"nav__link"},"QrScanner")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(o.b,{to:"/barcode",className:"nav__link"},"BarCode"))))}),i=(a(130),function(){return r.a.createElement("div",{className:"header"},r.a.createElement(s,null))}),m=a(115),p=a.n(m),d=function(){var e=Object(u.f)();return r.a.createElement("div",null,r.a.createElement("div",{className:"Home__page"},r.a.createElement(p.a,{delay:300,onError:function(e){console.error(e)},onScan:function(t){t&&e.push("/remainder/".concat(t))},className:"qrReader"})))},f=a(117),E=a.n(f),h=function(){var e=Object(u.f)();return r.a.createElement("div",null,r.a.createElement(E.a,{width:320,height:320,onUpdate:function(t,a){a&&e.push("/result/".concat(a.text,"/1"))},className:"barcodeReader"}))},v=a(9),b=a.n(v),_=a(21),j=a(35),O="http://176.8.123.94:5000",y=function(){var e=Object(_.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(O,"/sql/").concat(t,"/").concat(a)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(_.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(O,"/sql2/").concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(_.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(O,"/sql3/").concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(n.useState)([{nametv:"\u0414\u0430\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0443 \u0442\u043e\u0432\u0430\u0440\u0443 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e",codetv:"1"}]),t=Object(j.a)(e,2),a=t[0],c=t[1],l=Object(u.g)(),o=l.inputval,s=l.typeval;console.log(o),console.log(s),Object(n.useEffect)((function(){function e(){return(e=Object(_.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(o,s).then((function(e){return c(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o,s]);var i=Object(u.f)(),m=function(e){"1"!==e&&i.push("/remainder/".concat(e))};return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"\u041d\u0430\u0437\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0443"),r.a.createElement("th",{scope:"col"},"\u0410\u0440\u0442\u0438\u043a\u0443\u043b\u044c"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{className:"result__row",key:e.codetv,onClick:m.bind(void 0,e.codetv)},r.a.createElement("th",{scope:"row"},a.indexOf(e)+1),r.a.createElement("td",null,e.nametv),r.a.createElement("td",null,e.article))})))))},x=a(118),S=function(){var e=Object(n.useState)({nametv:"\u0414\u0430\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0443 \u0442\u043e\u0432\u0430\u0440\u0443 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e",codetv:"1"}),t=Object(j.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([{}]),o=Object(j.a)(l,2),s=o[0],i=o[1],m=Object(n.useState)([{}]),p=Object(j.a)(m,2),d=p[0],f=p[1],E=Object(u.g)().codetv;return Object(n.useEffect)((function(){function e(){return(e=Object(_.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(E,"0").then((function(e){return c.apply(void 0,Object(x.a)(e))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(_.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(E).then((function(e){return i(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(_.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(E).then((function(e){return f(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}(),function(){a.apply(this,arguments)}()}),[E]),r.a.createElement("div",{className:"remainder"},r.a.createElement("div",{className:"remainder__title",key:a.article},r.a.createElement("h5",{className:"remainder__name"},a.nametv),r.a.createElement("p",{className:"card__article"},"\u0410\u0440\u0442\u0438\u043a\u0443\u043b: ",a.article),r.a.createElement("p",{className:"card__article"},"\u041a\u043e\u0434: ",a.codetv)),r.a.createElement("div",{className:"remainder__price"},r.a.createElement("table",{className:"table table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"\u041e\u0437\u043d\u0430\u043a\u0430 \u0446\u0456\u043d\u0438"),r.a.createElement("th",{scope:"col"},"\u041a\u0432\u0423"),r.a.createElement("th",{scope:"col"},"\u0426\u0456\u043d\u0430"))),r.a.createElement("tbody",null,s.map((function(e){return r.a.createElement("tr",{className:"result__row",key:e.ozn},r.a.createElement("td",null,e.ozn),r.a.createElement("td",null,e.kvu),r.a.createElement("td",null,e.cenar1," \u0433\u0440\u043d"))}))))),r.a.createElement("div",{className:"remainder__remainders"},r.a.createElement("table",{className:"table table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"\u041d\u0430\u0437\u0432\u0430 \u043f\u0456\u0434\u043f\u0440\u0438\u0454\u043c\u0441\u0442\u0432\u0430"),r.a.createElement("th",{scope:"col"},"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"))),r.a.createElement("tbody",null,d.map((function(e){return r.a.createElement("tr",{className:"result__row",key:e.viddil},r.a.createElement("td",null,e.viddil),r.a.createElement("td",null,e.kol))}))))),r.a.createElement("img",{src:"./img/icons/Totalcmd.ico",alt:""}))},g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:d}),r.a.createElement(u.a,{path:"/barcode",exact:!0,component:h}),r.a.createElement(u.a,{path:"/result/:inputval/:typeval",exact:!0,component:w}),r.a.createElement(u.a,{path:"/remainder/:codetv",exact:!0,component:S})))};l.a.render(r.a.createElement(o.a,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.7b7c5ee1.chunk.js.map