(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(28)},21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(14),r=n.n(l),i=n(31),o=(n(21),n(3)),u=n(4),b=n(6),m=n(5),d=n(7),s=n(34),f=n(33),h=n(32),E=(n(22),n(30)),p=function(e){function t(){return Object(o.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(E.a,{to:"/"},"Movies")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/customers"},"Customers")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/rentals"},"Rentals"))))}}]),t}(a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Customers"))}}]),t}(a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Not Found"))}}]),t}(a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Rentals"))}}]),t}(a.Component);var j=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z"},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(b.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={movies:j},n.handleDelete=function(e){var t=n.state.movies.filter(function(t){return t._id!==e._id});n.setState({movies:t})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.movies.length;return 0===t?c.a.createElement("p",null," There are no movies in the database."):c.a.createElement("div",null,c.a.createElement("p",null,"Showing ",t," movies in the database."),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Title"),c.a.createElement("th",null,"Genre"),c.a.createElement("th",null,"Stock"),c.a.createElement("th",null,"Rate"),c.a.createElement("th",null))),c.a.createElement("tbody",null,this.state.movies.map(function(t){return c.a.createElement("tr",{key:t._id},c.a.createElement("td",null,t.title),c.a.createElement("td",null,t.genre.name),c.a.createElement("td",null,t.numberInStock),c.a.createElement("td",null,t.dailyRentalRate),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){return e.handleDelete(t)},className:"btn btn-danger btn-sm"},"Delete")))}))))}}]),t}(a.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement("main",{className:"container"},c.a.createElement(s.a,null,c.a.createElement(f.a,{path:"/movies",component:k}),c.a.createElement(f.a,{path:"/customers",component:v}),c.a.createElement(f.a,{path:"/rentals",component:O}),c.a.createElement(f.a,{path:"/not-found",component:y}),c.a.createElement(h.a,{from:"/",exact:!0,to:"/movies"}),c.a.createElement(h.a,{to:"/not-found"}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(26),n(27);r.a.render(c.a.createElement(i.a,null,c.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.7c40ee74.chunk.js.map