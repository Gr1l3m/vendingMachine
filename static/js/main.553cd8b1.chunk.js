(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},23:function(e,t,a){},24:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(6),c=a.n(o),i=(a(23),a(24),function(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},n.a.createElement("a",{className:"navbar-brand",href:"#"},e.titulo))}),l=a(1),u=a(2),s=a(4),p=a(3),m=a(7);var d=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this)).producto=e.producto,r}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("article",{className:"post"},n.a.createElement("p",null,this.producto.nombre),n.a.createElement("div",{className:"info"},"Precio $",this.producto.precio,n.a.createElement("br",null),"Tiempo de preparaci\xf3n ",this.producto.preparacion/1e3," seg."),n.a.createElement("div",{className:"interaction"},n.a.createElement("a",{href:"#",onClick:function(){return e.props.addItem()}},"Comprar")))}}]),a}(n.a.Component),b=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this)).articulo=e.articulo,r}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("article",{className:"post2"},n.a.createElement("p",null,this.articulo.nombre))}}]),a}(n.a.Component),v=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this)).productos=e.productos,r}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("section",{className:"row posts espacio-arriba linea-abajo"},n.a.createElement("div",{className:"col-md-6 col-md-offset-3"},n.a.createElement("header",null,n.a.createElement("h3",null,"Productos")),this.props.productos.map((function(t){return n.a.createElement(d,{producto:t,key:t.id,addItem:function(){return e.props.addItem(t.id,t.nombre,t.precio,t.preparacion)}})}))),n.a.createElement("div",{className:"col-md-6 col-md-offset-3"},n.a.createElement("header",null,n.a.createElement("h3",null,"Pedidos completados")),this.props.venta.articulo.map((function(e,t){return n.a.createElement(b,{key:t,articulo:e})})),n.a.createElement("header",null,"Total comprado"),"$ ",this.props.venta.total)))}}]),a}(n.a.Component),h=Object(m.b)((function(e){return{venta:e.venta}}),(function(e){return{addItem:function(t,a,r,n){e(function(e,t,a,r){return function(n){setTimeout((function(){return n({type:"ADD",id:e,nombre:t,precio:a})}),r)}}(t,a,r,n))}}}))(v),f=a(5),E=a(15),j=a(16),O=a(17),g=a(12),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{total:0,articulo:[],lastValues:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":e=Object(g.a)(Object(g.a)({},e),{},{total:e.total+t.precio,articulo:[].concat(Object(O.a)(e.articulo),[{id:t.id,nombre:t.nombre,precio:t.precio,preparacion:t.preparacion}])}),console.log("AQUI"+e.articulo)}return e},y=Object(f.d)(Object(f.c)({venta:k}),{},Object(f.a)(Object(E.a)(),j.a));var N=function(){return n.a.createElement("div",null,n.a.createElement(i,{titulo:"Vending machine"}),n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(m.a,{store:y},n.a.createElement(h,{productos:[{id:1,nombre:"Hamburguesa",precio:1.5,pedidos:0,preparacion:8e3},{id:2,nombre:"Pizza",precio:1.5,pedidos:0,preparacion:1e4},{id:3,nombre:"Coca-Cola",precio:1.5,pedidos:0,preparacion:1e3},{id:4,nombre:"Pepsi",precio:1,pedidos:0,preparacion:1e3},{id:5,nombre:"Agua Cristal",precio:.5,pedidos:0,preparacion:1e3}]})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.553cd8b1.chunk.js.map