(this.webpackJsonpj9app=this.webpackJsonpj9app||[]).push([[4],{495:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(496);t.a=function(e){return console.log(e.section),r.a.createElement("div",{className:"sectionTitle"},r.a.createElement("h1",null," ",e.section," "))}},496:function(e,t,a){},497:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a(59),r=function(e){return{type:n.c,payload:e}},i=function(e){return{type:n.b,payload:e}}},498:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(22),l=a(24);a(501);t.a=function(e){var t;return e.paragraph&&(t=Object(l.a)(e.paragraph)),r.a.createElement(i.c,{to:"/articles/".concat(e.type,"/").concat(e.title),className:"post"},r.a.createElement("div",{className:"postImage",style:{backgroundImage:"url(".concat(e.img,")")}}),r.a.createElement("div",{className:"postTitle"}," ",r.a.createElement("b",null," ",e.title," "),"  "),r.a.createElement("div",{className:"postParagraph"},t," . . ."),r.a.createElement("div",{className:"readMore"}," Continue Reading > "))}},499:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(22);a(502);t.a=function(e){return r.a.createElement(i.c,{to:"/articles/".concat(e.type.toLowerCase(),"/"),className:"post"},r.a.createElement("div",{className:"postTitle"}," ",r.a.createElement("b",null," See More ",e.type," Content . . . "),"  "))}},500:function(e,t,a){},501:function(e,t,a){},502:function(e,t,a){},513:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(498),l=a(499),c=a(495),o=a(497),s=a(93),p=a(24);a(500);var m=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.currentArticles.artArticles}));return Object(n.useEffect)((function(){fetch("https://cors-anywhere.herokuapp.com/https://historytheorymethodology.wordpress.com/category/art-gallery/feed").then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){return Object(p.d)(e)})).then((function(t){return e(Object(o.a)(t.channel.item))}))}),[]),r.a.createElement("div",{id:"designGalleryContainerMobile"},r.a.createElement("div",{className:"twoTenColumn"},r.a.createElement("div",{id:"postContainer"},r.a.createElement(c.a,{section:"Art Gallery"}),t.length>=1?r.a.createElement(i.a,{type:"art",key:t[0].title,link:t[0].link,categories:t[0].category,img:t[0]["media:content"][1].url,title:t[0].title,paragraph:t[0].description}):null,t.length>=2?r.a.createElement(i.a,{type:"art",key:t[1].title,link:t[1].link,categories:t[1].category,img:t[1]["media:content"][1].url,title:t[1].title,paragraph:t[1].description}):null,t.length>=3?r.a.createElement(i.a,{type:"art",key:t[2].title,link:t[2].link,categories:t[2].category,img:t[2]["media:content"][1].url,title:t[2].title,paragraph:t[2].description}):null,t.length>=4?r.a.createElement(i.a,{type:"art",key:t[3].title,link:t[3].link,categories:t[3].category,img:t[3]["media:content"][1].url,title:t[3].title,paragraph:t[3].description}):null,t.length>=5?r.a.createElement(i.a,{type:"art",key:t[4].title,link:t[4].link,categories:t[4].category,img:t[4]["media:content"][1].url,title:t[4].title,paragraph:t[4].description}):null,t.length>=6?r.a.createElement(i.a,{type:"art",key:t[5].title,link:t[5].link,categories:t[5].category,img:t[5]["media:content"][1].url,title:t[5].title,paragraph:t[5].description}):null,t.length>=7?r.a.createElement(i.a,{type:"art",key:t[6].title,link:t[6].link,categories:t[6].category,img:t[6]["media:content"][1].url,title:t[6].title,paragraph:t[6].description}):null,t.length>=8?r.a.createElement(i.a,{type:"art",key:t[7].title,link:t[7].link,categories:t[7].category,img:t[7]["media:content"][1].url,title:t[7].title,paragraph:t[7].description}):null,t.length>=9?r.a.createElement(i.a,{type:"art",key:t[8].title,link:t[8].link,categories:t[8].category,img:t[8]["media:content"].url,title:t[8].title,paragraph:t[8].description}):null,r.a.createElement(l.a,{type:"Art"}))))};t.default=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.currentArticles.artArticles}));return Object(n.useEffect)((function(){fetch("https://cors-anywhere.herokuapp.com/https://historytheorymethodology.wordpress.com/category/art-gallery/feed").then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){return Object(p.d)(e)})).then((function(t){return e(Object(o.a)(t.channel.item))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("div",{id:"designGalleryContainer"},r.a.createElement("div",{className:"twoTenColumn"},r.a.createElement("div",{id:"postContainer"},t.length>=1?r.a.createElement(i.a,{type:"art",key:t[0].title,link:t[0].link,categories:t[0].category,img:t[0]["media:content"][1].url,title:t[0].title,paragraph:t[0].description}):null,t.length>=2?r.a.createElement(i.a,{type:"art",key:t[1].title,link:t[1].link,categories:t[1].category,img:t[1]["media:content"][1].url,title:t[1].title,paragraph:t[1].description}):null,t.length>=3?r.a.createElement(i.a,{type:"art",key:t[2].title,link:t[2].link,categories:t[2].category,img:t[2]["media:content"][1].url,title:t[2].title,paragraph:t[2].description}):null,t.length>=4?r.a.createElement(i.a,{type:"art",key:t[3].title,link:t[3].link,categories:t[3].category,img:t[3]["media:content"][1].url,title:t[3].title,paragraph:t[3].description}):null)),r.a.createElement("div",{className:"tenFourteenColumn"},r.a.createElement("div",{id:"postContainer"},t.length>=5?r.a.createElement(i.a,{type:"art",key:t[4].title,link:t[4].link,categories:t[4].category,img:t[4]["media:content"][1].url,title:t[4].title,paragraph:t[4].description}):null,t.length>=6?r.a.createElement(i.a,{type:"art",key:t[5].title,link:t[5].link,categories:t[5].category,img:t[5]["media:content"][1].url,title:t[5].title,paragraph:t[5].description}):null,t.length>=7?r.a.createElement(i.a,{type:"art",key:t[6].title,link:t[6].link,categories:t[6].category,img:t[6]["media:content"][1].url,title:t[6].title,paragraph:t[6].description}):null,t.length>=8?r.a.createElement(i.a,{type:"art",key:t[7].title,link:t[7].link,categories:t[7].category,img:t[7]["media:content"][1].url,title:t[7].title,paragraph:t[7].description}):null)),r.a.createElement("div",{className:"fourteenEighteenColumn"},r.a.createElement("div",{id:"postContainer"},t.length>=9?r.a.createElement(i.a,{type:"art",key:t[8].title,link:t[8].link,categories:t[8].category,img:t[8]["media:content"].url,title:t[8].title,paragraph:t[8].description}):null,r.a.createElement(l.a,{type:"Art"})))))}}}]);
//# sourceMappingURL=4.8ec009a7.chunk.js.map