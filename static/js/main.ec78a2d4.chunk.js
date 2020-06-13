(this["webpackJsonpclient-side"]=this["webpackJsonpclient-side"]||[]).push([[0],{122:function(e){e.exports=JSON.parse('{"address":"0x5f8d73f746307900209fd128830a3c2da34cbbdb","ABI":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_categories","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tweets","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"content","type":"string"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"likes","type":"uint256"},{"internalType":"uint256","name":"dislikes","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"categories","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"content","type":"string"},{"internalType":"string","name":"category","type":"string"}],"name":"create","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"dislike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"dislikesHistory","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feesToCreate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feesToLike","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"like","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"likesHistory","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"category","type":"string"}],"name":"setCategory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_feesToCreate","type":"uint256"}],"name":"setFeesToCreate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_feesToLike","type":"uint256"}],"name":"setFeesToLike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tweets","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"content","type":"string"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"likes","type":"uint256"},{"internalType":"uint256","name":"dislikes","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"}],"internalType":"struct Token.Tweet[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}]}')},242:function(e,t,a){e.exports=a(556)},247:function(e,t,a){},249:function(e,t,a){},259:function(e,t){},282:function(e,t){},284:function(e,t){},328:function(e,t){},330:function(e,t){},339:function(e,t){},341:function(e,t){},366:function(e,t){},368:function(e,t){},369:function(e,t){},375:function(e,t){},377:function(e,t){},395:function(e,t){},398:function(e,t){},413:function(e,t){},416:function(e,t){},421:function(e,t){},556:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(55),i=a.n(r),c=(a(247),a(32)),l=a(45),o=a(8),m=a.n(o),p=a(14),u=a(15),d=(a(249),a(83)),y=a.n(d),f=a(122),g=new y.a(window.web3.currentProvider),v=f.address,E=f.ABI,w=new g.eth.Contract(E,v),b=function(e,t,a){return new Promise(function(){var n=Object(p.a)(m.a.mark((function n(s,r){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.methods.create(e,t).send({value:a}).once("receipt",function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(t.events.Transfer.returnValues.tokenId);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),r(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e,t){return n.apply(this,arguments)}}())},N=function(e,t){return new Promise(function(){var a=Object(p.a)(m.a.mark((function a(n,s){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w.methods.like(e).send({value:t}).once("receipt",function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),s(a.t0);case 8:case"end":return a.stop()}}),a,null,[[0,5]])})));return function(e,t){return a.apply(this,arguments)}}())},k=function(e){return new Promise(function(){var t=Object(p.a)(m.a.mark((function t(a,n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.methods.dislike(e).send().once("receipt",function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("printing inside the tokenContract info file"),console.log(t),a(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),n(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e,a){return t.apply(this,arguments)}}())},h=a(38),x=a(11),T=a(570);function C(e){var t=e.children,a=(e.isActive,e.onClick),n=e.filterName;return s.a.createElement("a",{className:"dropdown-item",href:"/#",onClick:function(e){a(e,n)}},t)}function L(e){var t=e.children,a=(e.isActive,e.onClick),n=e.filterName;return s.a.createElement(T.a,{className:"btn p-0 border-0",onClick:function(e){a(e,n)}},t)}var O=function(e){var t,a,n=Object(x.f)();if(console.log("line 564.."),console.log(n.state),console.log("line 566.."),void 0!==e.location){var r=e.location.state;t=r.owner,a=r.tokenList}console.log("print1: "+t),console.log("print2: "+a);var i=a;i=i.filter((function(e){return e.owner.toLowerCase().toString()===t.toLowerCase().toString()})),console.log("print7"),console.log("print8: "+i);var c=s.a.useState(1),l=Object(u.a)(c,2),o=l[0],m=l[1];return console.log("print10"),console.log(o),s.a.createElement("div",{className:"main mb-5"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"raleway-semibold"},"User's Tokens"),s.a.createElement("div",{className:"row"},i.length>0&&i.map((function(e,t){return t<5*o?t%2===0?s.a.createElement("div",{className:"col-12 pr-lg-5 col-lg-6",key:t},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 my-3",key:t},s.a.createElement("div",{className:"tweet-details"},s.a.createElement("div",{className:"bg-black px-3 py-2"},s.a.createElement("div",{className:"owner-id"}," ",s.a.createElement("span",{className:"title theme-text"},"Owner:")," ",s.a.createElement("span",{className:"p-id text-white"},e.owner)),s.a.createElement("div",{className:"row justify-content-between"},s.a.createElement("div",{className:"col-auto token-id"},s.a.createElement(h.b,{to:{pathname:"/token/".concat(e.id),state:{owner:e.owner,content:e.content,category:e.category,likes:e.likes,dislikes:e.dislikes,tokenId:e.id}}},s.a.createElement("span",{className:"title theme-text"},"Token ID:")," ",s.a.createElement("span",{className:"p-id text-white"},e.id))),s.a.createElement("div",{className:"col-auto category"},s.a.createElement("span",{className:"title theme-text"},"Category:")," ",s.a.createElement("span",{className:"p-id text-white"},e.category)))),s.a.createElement("div",{className:"bg-white px-3"},s.a.createElement("div",{className:"desc pt-3 pb-2"},e.content),s.a.createElement("div",{className:"text-right"},s.a.createElement("span",{className:"like px-1"},s.a.createElement("span",{className:"count px-1"},"Likes: ",e.likes)),s.a.createElement("span",{className:"unLike px-1"},s.a.createElement("span",{className:"count px-1"},"Dislikes: ",e.dislikes)),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rinkeby.opensea.io/assets/".concat(w.options.address,"/").concat(e.id)},s.a.createElement("span",{className:"opensea pl-3"},s.a.createElement("img",{src:"./assets/img/open-sea.svg",alt:"open_sea_img"}))))))))):s.a.createElement("div",{className:"col-12 pl-lg-5 col-lg-6",key:t},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 my-3",key:t},s.a.createElement("div",{className:"tweet-details"},s.a.createElement("div",{className:"bg-black px-3 py-2"},s.a.createElement("div",{className:"owner-id"}," ",s.a.createElement("span",{className:"title theme-text"},"Owner:")," ",s.a.createElement("span",{className:"p-id text-white"},e.owner)),s.a.createElement("div",{className:"row justify-content-between"},s.a.createElement("div",{className:"col-auto token-id"},s.a.createElement(h.b,{to:{pathname:"/token/".concat(e.id),state:{owner:e.owner,content:e.content,category:e.category,likes:e.likes,dislikes:e.dislikes,tokenId:e.id}}},s.a.createElement("span",{className:"title theme-text"},"Token ID:")," ",s.a.createElement("span",{className:"p-id text-white"},e.id))),s.a.createElement("div",{className:"col-auto category"},s.a.createElement("span",{className:"title theme-text"},"Category:")," ",s.a.createElement("span",{className:"p-id text-white"},e.category)))),s.a.createElement("div",{className:"bg-white px-3"},s.a.createElement("div",{className:"desc pt-3 pb-2"},e.content),s.a.createElement("div",{className:"text-right"},s.a.createElement("span",{className:"like px-1"},s.a.createElement("span",{className:"count px-1"},"Likes: ",e.likes)),s.a.createElement("span",{className:"unLike px-1"},s.a.createElement("span",{className:"count px-1"},"Dislikes: ",e.dislikes)),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rinkeby.opensea.io/assets/".concat(w.options.address,"/").concat(e.id)},s.a.createElement("img",{src:"./assets/img/open-sea.svg",alt:"open_sea_img"})))))))):null})),s.a.createElement("div",{className:"col-12 text-center mt-5"},s.a.createElement("button",{className:"btn text-white bg-black",onClick:function(e){!function(e){e.preventDefault(),console.log("print9"),m(o+1)}(e)}},"Load More")))))},M=function(e){var t,a,n,r,i;if(void 0!==e.location){var c=e.location.state;t=c.owner,r=c.content,c.category,a=c.likes,n=c.dislikes,i=c.tokenId}return i?s.a.createElement("div",{className:"main mb-5"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 pl-lg-5 col-lg-6",style:{margin:"auto"}},s.a.createElement("div",{className:"raleway-semibold"},"User's Token Info"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 my-3"},s.a.createElement("div",{className:"tweet-details"},s.a.createElement("div",{className:"bg-black px-3 py-2"},s.a.createElement("div",{className:"owner-id"}," ",s.a.createElement("span",{className:"title theme-text"},"Token Details")," ")),s.a.createElement("div",{className:"bg-white px-3"},s.a.createElement("div",{className:"desc pt-3 pb-2"},"Owner: ",t),s.a.createElement("div",{className:"desc pt-3 pb-2"},"Token Id: ",i),s.a.createElement("div",{className:"desc pt-3 pb-2"},"Content: ",r),s.a.createElement("div",{className:"desc pt-3 pb-2"},"Likes: ",a),s.a.createElement("div",{className:"desc pt-3 pb-2"},"Dislikes: ",n),!1,s.a.createElement("div",{className:"text-right"}))))))))):s.a.createElement("div",null,"No Token Id passed.!")};function S(e){var t=e.filtersList,a=e.searchValue,n=e.feesToCreate,r=e.feesToLike,i=s.a.useState([]),l=Object(u.a)(i,2),o=l[0],d=l[1],y=s.a.useState([]),f=Object(u.a)(y,2),g=f[0],v=f[1],E=s.a.useState(""),x=Object(u.a)(E,2),T=x[0],C=x[1],L=s.a.useState(""),O=Object(u.a)(L,2),M=O[0],S=O[1],I=s.a.useState(""),A=Object(u.a)(I,2),j=A[0],_=A[1],D=s.a.useState(1),F=Object(u.a)(D,2),P=F[0],B=F[1],U=s.a.useState(1),G=Object(u.a)(U,2),R=G[0],V=G[1],J=o;J=J.filter((function(e){return!(t.general&&!e.category.toLowerCase().includes("general"))&&(!(t.cryptocurrency&&!e.category.toLowerCase().includes("cryptocurrency"))&&(!(t.nft&&!e.category.toLowerCase().includes("nft"))&&(!(t.arts&&!e.category.toLowerCase().includes("arts"))&&(!(t.games&&!e.category.toLowerCase().includes("games"))&&(!(t.science&&!e.category.toLowerCase().includes("science"))&&(!(t.technology&&!e.category.toLowerCase().includes("technology"))&&(!(t.politics&&!e.category.toLowerCase().includes("politics"))&&(!(t.society&&!e.category.toLowerCase().includes("society"))&&(!(t.sports&&!e.category.toLowerCase().includes("sports"))&&!(Boolean(a)&&!e.owner.toLowerCase().includes(a.toLowerCase())&&!e.content.toLowerCase().includes(a.toLowerCase())))))))))))}));var H=g;H=H.filter((function(e){return!(t.general&&!e.category.toLowerCase().includes("general"))&&(!(t.cryptocurrency&&!e.category.toLowerCase().includes("cryptocurrency"))&&(!(t.nft&&!e.category.toLowerCase().includes("nft"))&&(!(t.arts&&!e.category.toLowerCase().includes("arts"))&&(!(t.games&&!e.category.toLowerCase().includes("games"))&&(!(t.science&&!e.category.toLowerCase().includes("science"))&&(!(t.technology&&!e.category.toLowerCase().includes("technology"))&&(!(t.politics&&!e.category.toLowerCase().includes("politics"))&&(!(t.society&&!e.category.toLowerCase().includes("society"))&&(!(t.sports&&!e.category.toLowerCase().includes("sports"))&&!(Boolean(a)&&!e.owner.toLowerCase().includes(a.toLowerCase())&&!e.content.toLowerCase().includes(a.toLowerCase())))))))))))})),s.a.useEffect((function(){var e=!0;return new Promise(function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.methods.tweets().call();case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()).then((function(t){if(e){var a=t;a.length>0&&(d(Object(c.a)(a).reverse()),v(Object(c.a)(o).sort((function(e,t){return parseInt(t[3])-parseInt(e[3])}))))}})),function(){return e=!1}}),[o,g]);var W=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("ffef: ",M),""===T||""===M||"Choose..."===M){e.next=5;break}return e.next=5,b(T.toString(),M.toString(),n.toString()).then((function(e){_(e.toString()),j||console.log(j)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(p.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("clicked like button"),console.log(a),e.next=5,N(Number(a),r.toString()).then((function(e){console.log("app.js function printing"),console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),$=function(){var e=Object(p.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("clicked like button"),console.log(a),e.next=5,k(Number(a)).then((function(e){console.log("app.js function printing"),console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return s.a.createElement("div",{className:"main mb-5"},s.a.createElement("div",{className:"container"},s.a.createElement("form",{action:""},s.a.createElement("div",{className:"row justify-content-center my-5"},s.a.createElement("div",{className:"col-10 col-md-9 col-lg-7 bg-white shadow-sm pt-3 px-0"},s.a.createElement("textarea",{name:"tweetBox",id:"tweet",className:"w-100 border-0",rows:"6",placeholder:"Messages with 500 characters or longer may be costly to mint due to gas fees. Your NFT image will only support up to 280 characters.",onChange:function(e){!function(e){e.preventDefault(),null!=e.target.value&&C(e.target.value)}(e)}}),s.a.createElement("div",{className:"text-right"},s.a.createElement("span",null,"Category:"),s.a.createElement("select",{id:"inputState",className:"form-control d-inline-block mr-3",onChange:function(e){!function(e){e.preventDefault(),null!=e.target.value&&(console.log(e.target.value),S(e.target.value))}(e)}},s.a.createElement("option",{defaultValue:!0},"Choose..."),s.a.createElement("option",null,"General"),s.a.createElement("option",null,"Cryptocurrency"),s.a.createElement("option",null,"NFT"),s.a.createElement("option",null,"Arts"),s.a.createElement("option",null,"Games"),s.a.createElement("option",null,"Science"),s.a.createElement("option",null,"Technology"),s.a.createElement("option",null,"Politics"),s.a.createElement("option",null,"Society"),s.a.createElement("option",null,"Sports")),s.a.createElement("button",{type:"submit",className:"border-0 btn px-3 py-2",onClick:function(e){W(e)}},s.a.createElement("span",{className:"px-3"},"Publish")))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 pr-lg-5 col-lg-6"},s.a.createElement("div",{className:"raleway-semibold"},"Trending"),s.a.createElement("div",{className:"row"},H.length>0&&H.map((function(e,t){return t<5*R?s.a.createElement("div",{className:"col-12 my-3",key:t},s.a.createElement("div",{className:"tweet-details"},s.a.createElement("div",{className:"bg-black px-3 py-2"},s.a.createElement("div",{className:"owner-id"}," ",s.a.createElement(h.b,{to:{pathname:"/owner/".concat(e.owner),state:{owner:e.owner,tokenList:o}}},s.a.createElement("span",{className:"title theme-text"},"Owner:")," ",s.a.createElement("span",{className:"p-id text-white"},e.owner))),s.a.createElement("div",{className:"row justify-content-between"},s.a.createElement("div",{className:"col-auto token-id"},s.a.createElement(h.b,{to:{pathname:"/token/".concat(e.id),state:{owner:e.owner,content:e.content,category:e.category,likes:e.likes,dislikes:e.dislikes,tokenId:e.id}}},s.a.createElement("span",{className:"title theme-text"},"Token ID:")," ",s.a.createElement("span",{className:"p-id text-white"},e.id))),s.a.createElement("div",{className:"col-auto category"},s.a.createElement("span",{className:"title theme-text"},"Category:")," ",s.a.createElement("span",{className:"p-id text-white"},e.category)))),s.a.createElement("div",{className:"bg-white px-3"},s.a.createElement("div",{className:"desc pt-3 pb-2"},e.content),s.a.createElement("div",{className:"text-right"},s.a.createElement("span",{className:"like px-1"},s.a.createElement("button",{key:t,className:"btn border-0",onClick:function(t){Y(t,e.id)}},s.a.createElement("img",{src:"./assets/img/like.png",alt:"like_img"})),s.a.createElement("span",{className:"count px-1"},e.likes)),s.a.createElement("span",{className:"unLike px-1"},s.a.createElement("button",{key:t,className:"btn border-0",onClick:function(t){$(t,e.id)}},s.a.createElement("img",{src:"./assets//img/unlike.png",alt:"unlike_img"})),s.a.createElement("span",{className:"count px-1"},e.dislikes)),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rinkeby.opensea.io/assets/".concat(w.options.address,"/").concat(e.id)},s.a.createElement("span",{className:"opensea pl-3"},s.a.createElement("img",{src:"./assets/img/open-sea.svg",alt:"open_sea_img"}))))))):null})),s.a.createElement("div",{className:"col-12 text-center my-5"},s.a.createElement("button",{className:"btn text-white bg-black",onClick:function(e){!function(e){e.preventDefault(),V(R+1)}(e)}},"Load More")))),s.a.createElement("div",{className:"col-12 pl-lg-5 col-lg-6"},s.a.createElement("div",{className:"raleway-semibold"},"Latest"),s.a.createElement("div",{className:"row"},J.length>0&&J.map((function(e,t){return t<5*P?s.a.createElement("div",{className:"col-12 my-3",key:t},s.a.createElement("div",{className:"tweet-details"},s.a.createElement("div",{className:"bg-black px-3 py-2"},s.a.createElement("div",{className:"owner-id"}," ",s.a.createElement(h.b,{to:{pathname:"/owner/".concat(e.owner),state:{owner:e.owner,tokenList:o}}},s.a.createElement("span",{className:"title theme-text"},"Owner:")," ",s.a.createElement("span",{className:"p-id text-white"},e.owner))),s.a.createElement("div",{className:"row justify-content-between"},s.a.createElement("div",{className:"col-auto token-id"},s.a.createElement(h.b,{to:{pathname:"/token/".concat(e.id),state:{owner:e.owner,content:e.content,category:e.category,likes:e.likes,dislikes:e.dislikes,tokenId:e.id}}},s.a.createElement("span",{className:"title theme-text"},"Token ID:")," ",s.a.createElement("span",{className:"p-id text-white"},e.id))),s.a.createElement("div",{className:"col-auto category"},s.a.createElement("span",{className:"title theme-text"},"Category:")," ",s.a.createElement("span",{className:"p-id text-white"},e.category)))),s.a.createElement("div",{className:"bg-white px-3"},s.a.createElement("div",{className:"desc pt-3 pb-2"},e.content),s.a.createElement("div",{className:"text-right"},s.a.createElement("span",{className:"like px-1"},s.a.createElement("button",{key:t,className:"btn border-0",onClick:function(t){Y(t,e.id)}},s.a.createElement("img",{src:"./assets/img/like.png",alt:"like_img"})),s.a.createElement("span",{className:"count px-1"},e.likes)),s.a.createElement("span",{className:"unLike px-1"},s.a.createElement("button",{key:t,className:"btn border-0",onClick:function(t){$(t,e.id)}},s.a.createElement("img",{src:"./assets//img/unlike.png",alt:"unlike_img"})),s.a.createElement("span",{className:"count px-1"},e.dislikes)),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rinkeby.opensea.io/assets/".concat(w.options.address,"/").concat(e.id)},s.a.createElement("span",{className:"opensea pl-3"},s.a.createElement("img",{src:"./assets/img/open-sea.svg",alt:"open_sea_img"}))))))):null})),s.a.createElement("div",{className:"col-12 text-center mt-5"},s.a.createElement("button",{className:"btn text-white bg-black",onClick:function(e){!function(e){e.preventDefault(),B(P+1)}(e)}},"Load More")))))))}var I=function(){var e=s.a.useState(""),t=Object(u.a)(e,2),a=t[0],n=t[1],r=s.a.useState(""),i=Object(u.a)(r,2),c=i[0],o=i[1];s.a.useEffect((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new y.a(window.ethereum),e.prev=1,e.next=4,window.ethereum.enable();case 4:return e.next=6,t.eth.getAccounts();case 6:a=e.sent,w.options.from=a[0],e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),s.a.useEffect((function(){try{new Promise(function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.methods.feesToCreate().call();case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()).then((function(e){n("0x"+Number(e).toString(16))})),new Promise(function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.methods.feesToLike().call();case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()).then((function(e){o("0x"+Number(e).toString(16))}))}catch(e){console.log(e)}}),[]);var d=s.a.useState({general:!1,cryptocurrency:!1,nft:!1,arts:!1,games:!1,science:!1,technology:!1,politics:!1,society:!1,sports:!1}),f=Object(u.a)(d,2),g=f[0],v=f[1],E=function(e,t){e.preventDefault(),v(Object(l.a)({general:!1,cryptocurrency:!1,nft:!1,arts:!1,games:!1,science:!1,technology:!1,politics:!1,society:!1,sports:!1},t,!g[t]))},b=s.a.useState(""),N=Object(u.a)(b,2),k=N[0],T=N[1];return s.a.createElement(h.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("header",null,s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-white py-1"},s.a.createElement("div",{className:"container"},s.a.createElement("a",{className:"navbar-brand",href:"/#"},s.a.createElement("span",{className:"tag-line"},s.a.createElement("img",{src:"./assets/img/logo_svg.svg",width:"50",alt:""})," ","ChainConvo Tweet Currency Exchange")),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s.a.createElement("form",{className:"form-inline mx-auto my-2 my-lg-0",onSubmit:function(e){!function(e){e.preventDefault(),T(e.target[0].value)}(e)}},s.a.createElement("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search"}),s.a.createElement("button",{className:"btn my-2 my-sm-0",type:"submit"},s.a.createElement("img",{src:"./assets/img/icon_search.svg",width:"18",alt:""}))),s.a.createElement("div",{className:"dropdown-divider"}),s.a.createElement("ul",{className:"navbar-nav ml-auto"},s.a.createElement("li",{className:"nav-item dropdown d-lg-none"},s.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Categories",s.a.createElement("i",null,s.a.createElement("img",{src:"./assets/img/expand_more-24px.svg",width:"30",alt:""}))),s.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},s.a.createElement(C,{isActive:g.general,onClick:E,filterName:"general"},"General"),s.a.createElement(C,{isActive:g.cryptocurrency,onClick:E,filterName:"cryptocurrency"},"Cryptocurrency"),s.a.createElement(C,{isActive:g.nft,onClick:E,filterName:"nft"},"NFT"),s.a.createElement(C,{isActive:g.arts,onClick:E,filterName:"arts"},"Arts"),s.a.createElement(C,{isActive:g.games,onClick:E,filterName:"games"},"Games"),s.a.createElement(C,{isActive:g.science,onClick:E,filterName:"science"},"Science"),s.a.createElement(C,{isActive:g.technology,onClick:E,filterName:"technology"},"Technology"),s.a.createElement(C,{isActive:g.politics,onClick:E,filterName:"politics"},"Politics"),s.a.createElement(C,{isActive:g.society,onClick:E,filterName:"society"},"Society"),s.a.createElement(C,{isActive:g.sports,onClick:E,filterName:"sports"},"Sports"))),s.a.createElement("div",{className:"dropdown-divider"}),s.a.createElement("li",{className:"nav-item active"},s.a.createElement("span",{className:"social-links"},s.a.createElement("a",{className:"nav-link",href:"/#"},s.a.createElement("img",{src:"./assets/img/twitter_logo.svg",width:"30",alt:"twitter_img"}))),s.a.createElement("span",{className:"social-links pl-3"},s.a.createElement("a",{className:"nav-link",href:"/#"},s.a.createElement("img",{src:"./assets/img/discord_logo.svg",width:"30",alt:"discord_img"})))))))),s.a.createElement("div",{className:"container-fluid category-section d-none d-lg-block"},s.a.createElement("div",{className:"container py-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-auto font-weight-bold"},s.a.createElement("i",{className:"d-inline-block"},s.a.createElement("img",{src:"./assets/img/category-24px.svg",width:"30px",alt:""})),"Categories"),s.a.createElement("div",{className:"col-auto ml-auto"},s.a.createElement(L,{isActive:g.general,onClick:E,filterName:"general"},"General")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:g.cryptocurrency,onClick:E,filterName:"cryptocurrency"},"Cryptocurrency")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:g.nft,onClick:E,filterName:"nft"},"NFT")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:g.arts,onClick:E,filterName:"arts"},"Arts")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:g.games,onClick:E,filterName:"games"},"Games")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:g.science,onClick:E,filterName:"science"},"Science")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:g.technology,onClick:E,filterName:"technology"},"Technology")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:g.politics,onClick:E,filterName:"politics"},"Politics")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:g.society,onClick:E,filterName:"society"},"Society")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:g.sports,onClick:E,filterName:"sports"},"Sports")))))),s.a.createElement(x.c,null,s.a.createElement(x.a,{exact:!0,path:"/token/:id",component:M}),s.a.createElement(x.a,{exact:!0,path:"/owner/:address",render:function(e){return s.a.createElement(O,e)}}),s.a.createElement(x.a,{exact:!0,path:"/"},s.a.createElement(S,{filtersList:g,searchValue:k,feesToCreate:a,feesToLike:c}))),s.a.createElement("footer",null,s.a.createElement("div",{className:"container py-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 text-center"},"Footer"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[242,1,2]]]);
//# sourceMappingURL=main.ec78a2d4.chunk.js.map