(this["webpackJsonplocaliza-app"]=this["webpackJsonplocaliza-app"]||[]).push([[0],Array(21).concat([function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(122),i=t.n(o),s=(t(60),t(32)),c=t(42);i.a.render(r.a.createElement(s.default,null),document.getElementById("root")),c.unregister()},,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(14),i=t(10),s=(t(61),t(33)),c=t(35),l=t(40),p=t(38),u=t(39);a.default=function(){return r.a.createElement(o.a,{basename:"/localiza-app/"},r.a.createElement(s.default,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:c.default}),r.a.createElement(i.a,{exact:!0,path:"/CarClass/:idClasse",component:l.default}),r.a.createElement(i.a,{exact:!0,path:"/localiza",component:p.default}),r.a.createElement(i.a,{exact:!0,path:"/trybe",component:u.default})))}},function(e,a,t){"use strict";t.r(a);var n=t(4),r=t(5),o=t(7),i=t(6),s=t(8),c=t(0),l=t.n(c),p=t(14),u=(t(62),t(34)),g=t.n(u),m=function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"header-content"},l.a.createElement("img",{src:g.a,alt:"logo",height:"65px"}),l.a.createElement("nav",null,l.a.createElement(p.b,{to:"/"},l.a.createElement("li",null,"In\xedcio")),l.a.createElement(p.b,{to:"/localiza"},l.a.createElement("li",null,"Sobre a Localiza")),l.a.createElement(p.b,{to:"/trybe"},l.a.createElement("li",null,"Sobre a Trybe"))))}}]),a}(l.a.Component);a.default=m},function(e,a,t){e.exports=t.p+"static/media/logo.dc605771.jpeg"},function(e,a,t){"use strict";t.r(a);var n=t(4),r=t(5),o=t(7),i=t(6),s=t(8),c=t(0),l=t.n(c),p=t(36),u=t(46),g=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).state={},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.getCars().then((function(a){e.setState({cars:a})}))}},{key:"render",value:function(){var e=this.state.cars;return e?l.a.createElement("div",null,l.a.createElement(p.default,{cars:e})):l.a.createElement("div",null,"Loading...")}}]),a}(l.a.Component);a.default=g},function(e,a,t){"use strict";t.r(a);var n=t(4),r=t(5),o=t(7),i=t(6),s=t(8),c=t(0),l=t.n(c),p=t(14),u=(t(64),function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"obrigatedFeature",value:function(e,a){return l.a.createElement("div",{className:"container-details"},l.a.createElement("img",{className:"icon",src:t(65)("./".concat(a)),alt:a,height:"20px"}),l.a.createElement("div",null,e))}},{key:"optionalFeature",value:function(e,a){if(e)return l.a.createElement("div",{className:"container-details"},l.a.createElement("img",{className:"icon",src:t(65)("./".concat(a)),alt:a,height:"20px"}),l.a.createElement("div",null,a))}},{key:"render",value:function(){var e=this,a=this.props.cars;return console.log(a),l.a.createElement("div",{className:"container-cards"},a.map((function(a){return l.a.createElement("div",{className:"container-car-card",key:a.carClass},l.a.createElement("div",null,l.a.createElement(p.b,{className:"link-carro",to:{pathname:"/CarClass/".concat(a.carClass),state:{car:a}}}," ",l.a.createElement("h1",null,a.carClass)),l.a.createElement("div",{class:"img-container"},l.a.createElement("img",{src:t(87)("./".concat(a.imageClass)),alt:a.carClass,height:"150px"}))),l.a.createElement("div",{className:"container-details-row"},l.a.createElement("div",null,l.a.createElement("h2",null,"Caracter\xedsticas do grupo:")),l.a.createElement("div",{className:"container-infos"},e.obrigatedFeature(a.carClassCharacteristcs.doors,"door"),e.obrigatedFeature(a.carClassCharacteristcs.passengers,"passengers"),e.optionalFeature(a.carClassCharacteristcs.air,"Ar-condicionado"),e.optionalFeature(a.carClassCharacteristcs.airBag,"Air Bag"),e.obrigatedFeature(a.carClassCharacteristcs.direction,"direction"),e.obrigatedFeature(a.carClassCharacteristcs.gear,"gear.svg"),e.optionalFeature(a.carClassCharacteristcs.abs,"ABS"))))})))}}]),a}(l.a.Component));a.default=u},function(e,a){e.exports="data:image/png;base64,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"},function(e,a,t){"use strict";t.r(a);var n=t(4),r=t(5),o=t(7),i=t(6),s=t(8),c=t(0),l=t.n(c),p=(t(44),function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-about"},l.a.createElement("h1",null,"O que \xe9 a Localiza?"),l.a.createElement("p",null,"A Localiza \xe9 uma empresa de aluguel de ve\xedculos. \xc9 a maior do ramo na Am\xe9rica Latina e uma das maiores do mundo considerando tamanho da frota e valor de mercado."),l.a.createElement("p",null,"O modelo de neg\xf3cios \xe9 composto por:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Aluguel de carros"),l.a.createElement("li",null,"Venda de seminovos"),l.a.createElement("li",null,"Gest\xe3o de frotas"),l.a.createElement("li",null,"Franquias")))}}]),a}(l.a.Component));a.default=p},function(e,a,t){"use strict";t.r(a);var n=t(4),r=t(5),o=t(7),i=t(6),s=t(8),c=t(0),l=t.n(c),p=t(37),u=t.n(p),g=(t(44),function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-about"},l.a.createElement("h1",null,"O que \xe9 a ",l.a.createElement("img",{src:u.a,alt:"Trybe",height:"25px"}),"?"),l.a.createElement("p",null,'A trybe \xe9 uma escola do futuro, baseado no modelo "ganha-ganha" onde a pessoa s\xf3 come\xe7a a pagar quando estiver recebendo, no m\xednimo, R$ 3.500,00 por m\xeas.'),l.a.createElement("p",null,"Com um programa de aprendizagem de alta qualidade, mentorias individuais e muitos desafios pr\xe1ticos, somos a escola do futuro e para o futuro que acelera sua carreira em desenvolvimento de software em aproximadamente 12 meses."),l.a.createElement("p",null,"O curr\xedculo \xe9 composto por:"),l.a.createElement("ul",null,l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Node"),l.a.createElement("li",null,"Express.js"),l.a.createElement("li",null,"SQL"),l.a.createElement("li",null,"Git")))}}]),a}(l.a.Component));a.default=g},function(e,a,t){"use strict";t.r(a);var n=t(4),r=t(5),o=t(7),i=t(6),s=t(8),c=t(0),l=t.n(c),p=t(41),u=function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props.location.state.car,a=e.carClass,t=e.availableCars;return l.a.createElement("div",null,l.a.createElement("h1",{className:"borda"},a),l.a.createElement("h2",{className:"borda"},"Carros dispon\xedveis:"),l.a.createElement(p.default,{carsAvailable:t}))}}]),a}(l.a.Component);a.default=u},function(e,a,t){"use strict";t.r(a);var n=t(4),r=t(5),o=t(7),i=t(6),s=t(8),c=t(0),l=t.n(c),p=(t(88),function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(s)))).handleClick=function(e){var a=e.target.value;alert("Voc\xea acaba de alugar o ".concat(a))},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.props.carsAvailable;return l.a.createElement("div",{className:"cars-available"},a.map((function(a){return l.a.createElement("div",{className:"card-car",key:a.id},l.a.createElement("h3",null,a.name),l.a.createElement("img",{src:t(87)("./".concat(a.image)),alt:a.name,className:"img-carro"}),l.a.createElement("button",{value:a.name,onClick:e.handleClick},"Alugar com um click!"))})))}}]),a}(l.a.Component));a.default=p},function(e,a,t){"use strict";t.r(a),t.d(a,"register",(function(){return r})),t.d(a,"unregister",(function(){return i}));var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e){if("serviceWorker"in navigator){if(new URL("/localiza-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/localiza-app","/service-worker.js");n?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(a,e)}))}}function o(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function i(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},,function(e,a,t){},function(e,a){e.exports=[{carClass:"A - Econ\xf4mico",imageClass:"images/A/novoUno.png",carClassCharacteristcs:{doors:"2 portas",passengers:"4 passageiros",air:!1,airBag:!1,direction:"Hidr\xe1ulica",gear:"Manual",abs:!1},availableCars:[{name:"Fiat Novo Uno 1.0",id:1,image:"images/A/novoUno.png"}]},{carClass:"B - Econ\xf4mico com ar",imageClass:"images/B/B.png",carClassCharacteristcs:{doors:"4 portas",passengers:"5 passageiros",air:!0,airBag:!1,direction:"Hidr\xe1ulica",gear:"Manual",abs:!0},availableCars:[{name:"Renault Kwid 1.0",id:2,image:"images/B/KWID.png"},{name:"Novo Ford Ka Hatch SE 1.0",id:3,image:"images/B/KACR.png"},{name:"GM Onix 1.0",id:4,image:"images/B/ONIX.png"}]},{carClass:"C - SUV",imageClass:"images/C/C.png",carClassCharacteristcs:{doors:"4 portas",passengers:"5 passageiros",air:!0,airBag:!0,direction:"Hidr\xe1ulica",gear:"Autom\xe1tico",abs:!0},availableCars:[{name:"Nissan Kicks 1.6",id:5,image:"images/C/KICA.png"},{name:"Renault Duster 1.6",id:6,image:"images/C/DUST.png"}]},{carClass:"D - Pick-Up",imageClass:"images/D/D.png",carClassCharacteristcs:{doors:"2 portas",passengers:"5 passageiros",air:!0,airBag:!0,direction:"El\xe9trica",gear:"Autom\xe1tico",abs:!0},availableCars:[{name:"Fiat Toro 1.8",id:7,image:"images/D/TORA.png"},{name:"Renault Duster Oroch 2.0",id:8,image:"images/D/OROH.png"}]},{carClass:"E - Executivo Blindado",imageClass:"images/E/E.png",carClassCharacteristcs:{doors:"4 portas",passengers:"5 passageiros",air:!0,airBag:!0,direction:"Hidr\xe1ulica",gear:"Manual",abs:!0},availableCars:[{name:"Novo Ford Fusion",id:9,image:"images/E/FUSB.png"},{name:"Audi A4 TFSI",id:10,image:"images/E/AUDB.png"}]}]},function(e,a,t){var n=t(45);e.exports={getCars:function(){return new Promise((function(e){setTimeout((function(){e(n)}),2e3)}))}}},,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){var n={"./A/novoUno.png":66,"./ABS":67,"./Air Bag":68,"./Ar-condicionado":69,"./B/B.png":70,"./B/KACR.png":71,"./B/KWID.png":72,"./B/ONIX.png":73,"./C/C.png":74,"./C/DUST.png":75,"./C/KICA.png":76,"./D/D.png":77,"./D/OROH.png":78,"./D/TORA.png":79,"./E/AUDB.png":80,"./E/E.png":81,"./E/FUSB.png":82,"./direction":83,"./door":84,"./gear.svg":85,"./logo.jpeg":34,"./passengers":86,"./trybe.png":37};function r(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=65},function(e,a,t){e.exports=t.p+"static/media/novoUno.6010ec22.png"},function(e,a,t){e.exports=t.p+"static/media/ABS.f476e551.bin"},function(e,a,t){e.exports=t.p+"static/media/Air Bag.10bcda76.bin"},function(e,a,t){e.exports=t.p+"static/media/Ar-condicionado.00744119.bin"},function(e,a,t){e.exports=t.p+"static/media/B.4f1f509a.png"},function(e,a,t){e.exports=t.p+"static/media/KACR.2818a181.png"},function(e,a,t){e.exports=t.p+"static/media/KWID.ffa99b49.png"},function(e,a,t){e.exports=t.p+"static/media/ONIX.e9b74ddb.png"},function(e,a,t){e.exports=t.p+"static/media/C.7ce77ceb.png"},function(e,a,t){e.exports=t.p+"static/media/DUST.7c521484.png"},function(e,a,t){e.exports=t.p+"static/media/KICA.337c2b36.png"},function(e,a,t){e.exports=t.p+"static/media/D.aa385617.png"},function(e,a,t){e.exports=t.p+"static/media/OROH.8346a444.png"},function(e,a,t){e.exports=t.p+"static/media/TORA.e7aa688e.png"},function(e,a,t){e.exports=t.p+"static/media/AUDB.ee60fc56.png"},function(e,a,t){e.exports=t.p+"static/media/E.2f971ee8.png"},function(e,a,t){e.exports=t.p+"static/media/FUSB.fe0cabfc.png"},function(e,a,t){e.exports=t.p+"static/media/direction.bc6ac28e.bin"},function(e,a,t){e.exports=t.p+"static/media/door.86e1682d.bin"},function(e,a,t){e.exports=t.p+"static/media/gear.d826c224.svg"},function(e,a,t){e.exports=t.p+"static/media/passengers.a7f02e06.bin"},function(e,a,t){var n={"./":21,"./App":32,"./App.css":61,"./App.js":32,"./components/About.css":44,"./components/AboutLocaliza":38,"./components/AboutLocaliza.js":38,"./components/AboutTrybe":39,"./components/AboutTrybe.js":39,"./components/CarClass":40,"./components/CarClass.js":40,"./components/Content":35,"./components/Content.js":35,"./components/Header":33,"./components/Header.css":62,"./components/Header.js":33,"./components/gerarCarAvailable":41,"./components/gerarCarAvailable.css":88,"./components/gerarCarAvailable.js":41,"./components/gerarCardClass.css":64,"./components/gerarCardsClass":36,"./components/gerarCardsClass.js":36,"./data":45,"./data.js":45,"./dataAPI":46,"./dataAPI.js":46,"./images/A/novoUno.png":66,"./images/ABS":67,"./images/Air Bag":68,"./images/Ar-condicionado":69,"./images/B/B.png":70,"./images/B/KACR.png":71,"./images/B/KWID.png":72,"./images/B/ONIX.png":73,"./images/C/C.png":74,"./images/C/DUST.png":75,"./images/C/KICA.png":76,"./images/D/D.png":77,"./images/D/OROH.png":78,"./images/D/TORA.png":79,"./images/E/AUDB.png":80,"./images/E/E.png":81,"./images/E/FUSB.png":82,"./images/direction":83,"./images/door":84,"./images/gear.svg":85,"./images/logo.jpeg":34,"./images/passengers":86,"./images/trybe.png":37,"./index":21,"./index.css":60,"./index.js":21,"./serviceWorker":42,"./serviceWorker.js":42,"./setupTests":89,"./setupTests.js":89};function r(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=87},function(e,a,t){},function(e,a,t){"use strict";t.r(a);t(134)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(21)}]),[[125,1,2]]]);
//# sourceMappingURL=main.b4660fcf.chunk.js.map