(this["webpackJsonpclient-side"]=this["webpackJsonpclient-side"]||[]).push([[0],{127:function(e){e.exports=JSON.parse('{"address":"0x30Cb06ec313f8D4acc618195389F442727aaF1D6","ABI":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_categories","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tweets","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"content","type":"string"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"likes","type":"uint256"},{"internalType":"uint256","name":"dislikes","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"categories","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"content","type":"string"},{"internalType":"string","name":"category","type":"string"}],"name":"create","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"dislike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"dislikesHistory","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feesToCreate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feesToLike","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"like","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"likesHistory","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"category","type":"string"}],"name":"setCategory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_feesToCreate","type":"uint256"}],"name":"setFeesToCreate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_feesToLike","type":"uint256"}],"name":"setFeesToLike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tweets","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"content","type":"string"},{"internalType":"string","name":"category","type":"string"},{"internalType":"uint256","name":"likes","type":"uint256"},{"internalType":"uint256","name":"dislikes","type":"uint256"},{"internalType":"address payable","name":"owner","type":"address"}],"internalType":"struct Token.Tweet[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}]}')},248:function(e,t,a){e.exports=a(562)},253:function(e,t,a){},255:function(e,t,a){},265:function(e,t){},288:function(e,t){},290:function(e,t){},334:function(e,t){},336:function(e,t){},345:function(e,t){},347:function(e,t){},372:function(e,t){},374:function(e,t){},375:function(e,t){},381:function(e,t){},383:function(e,t){},401:function(e,t){},404:function(e,t){},419:function(e,t){},422:function(e,t){},427:function(e,t){},562:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(57),i=a.n(r),c=(a(253),a(34)),o=a(47),l=a(8),m=a.n(l),p=a(15),u=a(16),d=(a(255),a(87)),y=a.n(d),g=a(127),f=new y.a(window.web3.currentProvider),v=g.address,E=g.ABI,w=new f.eth.Contract(E,v),b=function(e,t,a){return new Promise(function(){var n=Object(p.a)(m.a.mark((function n(s,r){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.methods.create(e,t).send({value:a}).once("receipt",function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(t.events.Transfer.returnValues.tokenId);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),r(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e,t){return n.apply(this,arguments)}}())},N=function(e,t){return new Promise(function(){var a=Object(p.a)(m.a.mark((function a(n,s){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w.methods.like(e).send({value:t}).once("receipt",function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),s(a.t0);case 8:case"end":return a.stop()}}),a,null,[[0,5]])})));return function(e,t){return a.apply(this,arguments)}}())},k=function(e){return new Promise(function(){var t=Object(p.a)(m.a.mark((function t(a,n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.methods.dislike(e).send().once("receipt",function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("printing inside the tokenContract info file"),console.log(t),a(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),n(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e,a){return t.apply(this,arguments)}}())},h=a(40),x=a(12),T=a(580),C=a(581);function L(e){var t=e.children,a=(e.isActive,e.onClick),n=e.filterName;return s.a.createElement(C.a,{className:"btn p-0 border-0",onClick:function(){a(n)}},t)}var O=Object(T.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100}}})),M=function(e){var t,a;O(),window.location.pathname.replace("/owner/","");if(void 0!==e.location){var n=e.location.state;t=n.owner,a=n.tokenList}console.log("print1: "+t),console.log("print2: "+a);var r=a;r=r.filter((function(e){return e.owner.toLowerCase()==t.toLowerCase()})),console.log("print7"),console.log("print8: "+r);var i=s.a.useState(1),c=Object(u.a)(i,2),o=c[0],l=c[1];return console.log("print10"),console.log(o),s.a.createElement("div",{className:"main mb-5"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"raleway-semibold"},"User's Tokens"),s.a.createElement("div",{className:"row"},r.length>0&&r.map((function(e,t){if(t<5*o)return t%2==0?s.a.createElement("div",{className:"col-12 pr-lg-5 col-lg-6"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 my-3",key:t},s.a.createElement("div",{className:"tweet-details"},s.a.createElement("div",{className:"bg-black px-3 py-2"},s.a.createElement("div",{className:"owner-id"}," ",s.a.createElement("span",{className:"title theme-text"},"Owner:")," ",s.a.createElement("span",{className:"p-id text-white"},e.owner)),s.a.createElement("div",{className:"row justify-content-between"},s.a.createElement("div",{className:"col-auto token-id"},s.a.createElement(h.b,{to:{pathname:"/token/".concat(e.id),state:{owner:e.owner,content:e.content,category:e.category,likes:e.likes,dislikes:e.dislikes,tokenId:e.id}}},s.a.createElement("span",{className:"title theme-text"},"Token ID:")," ",s.a.createElement("span",{className:"p-id text-white"},e.id))),s.a.createElement("div",{className:"col-auto category"},s.a.createElement("span",{className:"title theme-text"},"Category:")," ",s.a.createElement("span",{className:"p-id text-white"},e.category)))),s.a.createElement("div",{className:"bg-white px-3"},s.a.createElement("div",{className:"desc pt-3 pb-2"},e.content),s.a.createElement("div",{className:"text-right"},s.a.createElement("span",{className:"like px-1"},s.a.createElement("span",{className:"count px-1"},"Likes: ",e.likes)),s.a.createElement("span",{className:"unLike px-1"},s.a.createElement("span",{className:"count px-1"},"Dislikes: ",e.dislikes)),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rinkeby.opensea.io/assets/".concat(w.options.address,"/").concat(e.id)},s.a.createElement("span",{className:"opensea pl-3"},s.a.createElement("img",{src:"./assets/img/open-sea.svg",alt:"open_sea_img"}))))))))):s.a.createElement("div",{className:"col-12 pl-lg-5 col-lg-6"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 my-3",key:t},s.a.createElement("div",{className:"tweet-details"},s.a.createElement("div",{className:"bg-black px-3 py-2"},s.a.createElement("div",{className:"owner-id"}," ",s.a.createElement("span",{className:"title theme-text"},"Owner:")," ",s.a.createElement("span",{className:"p-id text-white"},e.owner)),s.a.createElement("div",{className:"row justify-content-between"},s.a.createElement("div",{className:"col-auto token-id"},s.a.createElement(h.b,{to:{pathname:"/token/".concat(e.id),state:{owner:e.owner,content:e.content,category:e.category,likes:e.likes,dislikes:e.dislikes}}},s.a.createElement("span",{className:"title theme-text"},"Token ID:")," ",s.a.createElement("span",{className:"p-id text-white"},e.id))),s.a.createElement("div",{className:"col-auto category"},s.a.createElement("span",{className:"title theme-text"},"Category:")," ",s.a.createElement("span",{className:"p-id text-white"},e.category)))),s.a.createElement("div",{className:"bg-white px-3"},s.a.createElement("div",{className:"desc pt-3 pb-2"},e.content),s.a.createElement("div",{className:"text-right"},s.a.createElement("span",{className:"like px-1"},s.a.createElement("span",{className:"count px-1"},"Likes: ",e.likes)),s.a.createElement("span",{className:"unLike px-1"},s.a.createElement("span",{className:"count px-1"},"Dislikes: ",e.dislikes)),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rinkeby.opensea.io/assets/".concat(w.options.address,"/").concat(e.id)},s.a.createElement("img",{src:"./assets/img/open-sea.svg",alt:"open_sea_img"}))))))))})),s.a.createElement("div",{className:"col-12 text-center mt-5"},s.a.createElement("button",{className:"btn text-white bg-black",onClick:function(e){!function(e){e.preventDefault(),console.log("print9"),l(o+1)}(e)}},"Load More")))))},I=function(e){var t,a,n,r,i;if(void 0!==e.location){var c=e.location.state;t=c.owner,r=c.content,c.category,a=c.likes,n=c.dislikes,i=c.tokenId}return i?s.a.createElement("div",{className:"main mb-5"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row",style:{marginLeft:"200px",marginRight:"-200px"}},s.a.createElement("div",{className:"col-12 pl-lg-5 col-lg-6"},s.a.createElement("div",{className:"raleway-semibold"},"User's Token Info"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 my-3"},s.a.createElement("div",{className:"tweet-details"},s.a.createElement("div",{className:"bg-black px-3 py-2"},s.a.createElement("div",{className:"owner-id"}," ",s.a.createElement("span",{className:"title theme-text"},"Token Details")," ")),s.a.createElement("div",{className:"bg-white px-3"},s.a.createElement("div",{className:"desc pt-3 pb-2"},"Owner: ",t),s.a.createElement("div",{className:"desc pt-3 pb-2"},"Token Id: ",i),s.a.createElement("div",{className:"desc pt-3 pb-2"},"Content: ",r),s.a.createElement("div",{className:"desc pt-3 pb-2"},"Likes: ",a),s.a.createElement("div",{className:"desc pt-3 pb-2"},"Dislikes: ",n),s.a.createElement("div",{className:"text-right"}))))))))):s.a.createElement("div",null,"No Token Id passed.!")};function j(e){var t=e.filtersList,a=e.searchValue,n=e.feesToCreate,r=e.feesToLike,i=s.a.useState([]),o=Object(u.a)(i,2),l=o[0],d=o[1],y=s.a.useState([]),g=Object(u.a)(y,2),f=g[0],v=g[1],E=s.a.useState(""),x=Object(u.a)(E,2),T=x[0],C=x[1],L=s.a.useState(""),O=Object(u.a)(L,2),M=O[0],I=O[1],j=s.a.useState(""),S=Object(u.a)(j,2),_=(S[0],S[1]),A=s.a.useState(1),D=Object(u.a)(A,2),F=D[0],B=D[1],P=s.a.useState(1),U=Object(u.a)(P,2),R=U[0],G=U[1],J=l;J=J.filter((function(e){return!(t.general&&!e.category.toLowerCase().includes("general"))&&(!(t.cryptocurrency&&!e.category.toLowerCase().includes("cryptocurrency"))&&(!(t.nft&&!e.category.toLowerCase().includes("nft"))&&(!(t.arts&&!e.category.toLowerCase().includes("arts"))&&(!(t.games&&!e.category.toLowerCase().includes("games"))&&(!(t.science&&!e.category.toLowerCase().includes("science"))&&(!(t.technology&&!e.category.toLowerCase().includes("technology"))&&(!(t.politics&&!e.category.toLowerCase().includes("politics"))&&(!(t.society&&!e.category.toLowerCase().includes("society"))&&(!(t.sports&&!e.category.toLowerCase().includes("sports"))&&!(Boolean(a)&&!e.owner.toLowerCase().includes(a.toLowerCase())&&!e.content.toLowerCase().includes(a.toLowerCase())))))))))))}));var V=f;V=V.filter((function(e){return!(t.general&&!e.category.toLowerCase().includes("general"))&&(!(t.cryptocurrency&&!e.category.toLowerCase().includes("cryptocurrency"))&&(!(t.nft&&!e.category.toLowerCase().includes("nft"))&&(!(t.arts&&!e.category.toLowerCase().includes("arts"))&&(!(t.games&&!e.category.toLowerCase().includes("games"))&&(!(t.science&&!e.category.toLowerCase().includes("science"))&&(!(t.technology&&!e.category.toLowerCase().includes("technology"))&&(!(t.politics&&!e.category.toLowerCase().includes("politics"))&&(!(t.society&&!e.category.toLowerCase().includes("society"))&&(!(t.sports&&!e.category.toLowerCase().includes("sports"))&&!(Boolean(a)&&!e.owner.toLowerCase().includes(a.toLowerCase())&&!e.content.toLowerCase().includes(a.toLowerCase())))))))))))})),s.a.useEffect((function(){new Promise(function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.methods.tweets().call();case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()).then((function(e){console.log("printing1.. "),console.log("result: "+e);var t=e;t.length>0&&(console.log("printing2..."),console.log("received result: "+t),d(Object(c.a)(t).reverse()),console.log("printign3..."),console.log("all tweets: "+l),v(Object(c.a)(l).sort((function(e,t){return parseInt(t[3])-parseInt(e[3])}))),console.log("printing4..."),console.log("trending tweets: "+f)),console.log("printing5...")}))}),[l,f]);var H=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("ffef: ",M),""===T||""===M||"Choose..."===M){e.next=5;break}return e.next=5,b(T.toString(),M.toString(),n.toString()).then((function(e){_(e.toString())}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(p.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("clicked like button"),console.log(a),e.next=5,N(Number(a),r.toString()).then((function(e){console.log("app.js function printing"),console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Y=function(){var e=Object(p.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("clicked like button"),console.log(a),e.next=5,k(Number(a)).then((function(e){console.log("app.js function printing"),console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return s.a.createElement("div",{className:"main mb-5"},s.a.createElement("div",{className:"container"},s.a.createElement("form",{action:""},s.a.createElement("div",{className:"row justify-content-center my-5"},s.a.createElement("div",{className:"col-10 col-md-9 col-lg-7 bg-white shadow-sm pt-3 px-0"},s.a.createElement("textarea",{name:"tweetBox",id:"tweet",className:"w-100 border-0",rows:"6",placeholder:"Messages with 500 characters or longer may be costly to mint due to gas fees. Your NFT image will only support up to 280 characters.",onChange:function(e){!function(e){e.preventDefault(),null!=e.target.value&&C(e.target.value)}(e)}}),s.a.createElement("div",{className:"text-right"},s.a.createElement("span",null,"Category:"),s.a.createElement("select",{id:"inputState",className:"form-control d-inline-block mr-3",onChange:function(e){!function(e){e.preventDefault(),null!=e.target.value&&(console.log(e.target.value),I(e.target.value))}(e)}},s.a.createElement("option",{selected:!0},"Choose..."),s.a.createElement("option",null,"General"),s.a.createElement("option",null,"Cryptocurrency"),s.a.createElement("option",null,"NFT"),s.a.createElement("option",null,"Arts"),s.a.createElement("option",null,"Games"),s.a.createElement("option",null,"Science"),s.a.createElement("option",null,"Technology"),s.a.createElement("option",null,"Politics"),s.a.createElement("option",null,"Society"),s.a.createElement("option",null,"Sports")),s.a.createElement("button",{type:"submit",className:"border-0 btn px-3 py-2",onClick:function(e){H(e)}},s.a.createElement("span",{className:"px-3"},"Publish")))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 pr-lg-5 col-lg-6"},s.a.createElement("div",{className:"raleway-semibold"},"Trending"),s.a.createElement("div",{className:"row"},V.length>0&&V.map((function(e,t){if(t<5*R)return s.a.createElement("div",{className:"col-12 my-3"},s.a.createElement("div",{className:"tweet-details"},s.a.createElement("div",{className:"bg-black px-3 py-2"},s.a.createElement("div",{className:"owner-id"}," ",s.a.createElement(h.b,{to:{pathname:"/owner/".concat(e.owner),state:{owner:e.owner,tokenList:l}}},s.a.createElement("span",{className:"title theme-text"},"Owner:")," ",s.a.createElement("span",{className:"p-id text-white"},e.owner))),s.a.createElement("div",{className:"row justify-content-between"},s.a.createElement("div",{className:"col-auto token-id"},s.a.createElement(h.b,{to:{pathname:"/token/".concat(e.id),state:{owner:e.owner,content:e.content,category:e.category,likes:e.likes,dislikes:e.dislikes,tokenId:e.id}}},s.a.createElement("span",{className:"title theme-text"},"Token ID:")," ",s.a.createElement("span",{className:"p-id text-white"},e.id))),s.a.createElement("div",{className:"col-auto category"},s.a.createElement("span",{className:"title theme-text"},"Category:")," ",s.a.createElement("span",{className:"p-id text-white"},e.category)))),s.a.createElement("div",{className:"bg-white px-3"},s.a.createElement("div",{className:"desc pt-3 pb-2"},e.content),s.a.createElement("div",{className:"text-right"},s.a.createElement("span",{className:"like px-1"},s.a.createElement("button",{key:t,className:"btn border-0",onClick:function(t){W(t,e.id)}},s.a.createElement("img",{src:"./assets/img/like.png",alt:"like_img"})),s.a.createElement("span",{className:"count px-1"},e.likes)),s.a.createElement("span",{className:"unLike px-1"},s.a.createElement("button",{key:t,className:"btn border-0",onClick:function(t){Y(t,e.id)}},s.a.createElement("img",{src:"./assets//img/unlike.png",alt:"unlike_img"})),s.a.createElement("span",{className:"count px-1"},e.dislikes)),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rinkeby.opensea.io/assets/".concat(w.options.address,"/").concat(e.id)},s.a.createElement("span",{className:"opensea pl-3"},s.a.createElement("img",{src:"./assets/img/open-sea.svg",alt:"open_sea_img"})))))))})),s.a.createElement("div",{className:"col-12 text-center my-5"},s.a.createElement("button",{className:"btn text-white bg-black",onClick:function(e){!function(e){e.preventDefault(),G(R+1)}(e)}},"Load More")))),s.a.createElement("div",{className:"col-12 pl-lg-5 col-lg-6"},s.a.createElement("div",{className:"raleway-semibold"},"Latest"),s.a.createElement("div",{className:"row"},J.length>0&&J.map((function(e,t){if(t<5*F)return s.a.createElement("div",{className:"col-12 my-3",key:t},s.a.createElement("div",{className:"tweet-details"},s.a.createElement("div",{className:"bg-black px-3 py-2"},s.a.createElement("div",{className:"owner-id"}," ",s.a.createElement(h.b,{to:{pathname:"/owner/".concat(e.owner),state:{owner:e.owner,tokenList:l}}},s.a.createElement("span",{className:"title theme-text"},"Owner:")," ",s.a.createElement("span",{className:"p-id text-white"},e.owner))),s.a.createElement("div",{className:"row justify-content-between"},s.a.createElement("div",{className:"col-auto token-id"},s.a.createElement(h.b,{to:{pathname:"/token/".concat(e.id),state:{owner:e.owner,content:e.content,category:e.category,likes:e.likes,dislikes:e.dislikes,tokenId:e.id}}},s.a.createElement("span",{className:"title theme-text"},"Token ID:")," ",s.a.createElement("span",{className:"p-id text-white"},e.id))),s.a.createElement("div",{className:"col-auto category"},s.a.createElement("span",{className:"title theme-text"},"Category:")," ",s.a.createElement("span",{className:"p-id text-white"},e.category)))),s.a.createElement("div",{className:"bg-white px-3"},s.a.createElement("div",{className:"desc pt-3 pb-2"},e.content),s.a.createElement("div",{className:"text-right"},s.a.createElement("span",{className:"like px-1"},s.a.createElement("button",{key:t,className:"btn border-0",onClick:function(t){W(t,e.id)}},s.a.createElement("img",{src:"./assets/img/like.png",alt:"like_img"})),s.a.createElement("span",{className:"count px-1"},e.likes)),s.a.createElement("span",{className:"unLike px-1"},s.a.createElement("button",{key:t,className:"btn border-0",onClick:function(t){Y(t,e.id)}},s.a.createElement("img",{src:"./assets//img/unlike.png",alt:"unlike_img"})),s.a.createElement("span",{className:"count px-1"},e.dislikes)),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://rinkeby.opensea.io/assets/".concat(w.options.address,"/").concat(e.id)},s.a.createElement("span",{className:"opensea pl-3"},s.a.createElement("img",{src:"./assets/img/open-sea.svg",alt:"open_sea_img"})))))))})),s.a.createElement("div",{className:"col-12 text-center mt-5"},s.a.createElement("button",{className:"btn text-white bg-black",onClick:function(e){!function(e){e.preventDefault(),B(F+1)}(e)}},"Load More")))))))}var S=function(){var e=s.a.useState(""),t=Object(u.a)(e,2),a=t[0],n=t[1],r=s.a.useState(""),i=Object(u.a)(r,2),c=i[0],l=i[1];s.a.useEffect((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new y.a(window.ethereum),e.prev=1,e.next=4,window.ethereum.enable();case 4:return e.next=6,t.eth.getAccounts();case 6:a=e.sent,w.options.from=a[0],e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),s.a.useEffect((function(){try{new Promise(function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.methods.feesToCreate().call();case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()).then((function(e){n("0x"+Number(e).toString(16))})),new Promise(function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.methods.feesToLike().call();case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()).then((function(e){l("0x"+Number(e).toString(16))}))}catch(e){console.log(e)}}),[]);var d=s.a.useState({general:!1,cryptocurrency:!1,nft:!1,arts:!1,games:!1,science:!1,technology:!1,politics:!1,society:!1,sports:!1}),g=Object(u.a)(d,2),f=g[0],v=g[1],E=function(e){v(Object(o.a)({general:!1,cryptocurrency:!1,nft:!1,arts:!1,games:!1,science:!1,technology:!1,politics:!1,society:!1,sports:!1},e,!f[e]))},b=s.a.useState(""),N=Object(u.a)(b,2),k=N[0],T=N[1];return s.a.createElement(h.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("header",null,s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-white py-1"},s.a.createElement("div",{className:"container"},s.a.createElement("a",{className:"navbar-brand",href:"#"},s.a.createElement("span",{className:"tag-line"},s.a.createElement("img",{src:"./assets/img/logo_svg.svg",width:"50",alt:""})," ","ChainConvo Tweet Currency Exchange")),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s.a.createElement("form",{className:"form-inline mx-auto my-2 my-lg-0",onSubmit:function(e){!function(e){e.preventDefault(),T(e.target[0].value)}(e)}},s.a.createElement("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search"}),s.a.createElement("button",{className:"btn my-2 my-sm-0",type:"submit"},s.a.createElement("img",{src:"./assets/img/icon_search.svg",width:"18",alt:""}))),s.a.createElement("div",{className:"dropdown-divider"}),s.a.createElement("ul",{className:"navbar-nav ml-auto"},s.a.createElement("div",{className:"dropdown-divider"}),s.a.createElement("li",{className:"nav-item active"},s.a.createElement("span",{className:"social-links"},s.a.createElement("a",{className:"nav-link",href:"#"},s.a.createElement("img",{src:"./assets/img/twitter_logo.svg",width:"30",alt:"twitter_img"}))),s.a.createElement("span",{className:"social-links pl-3"},s.a.createElement("a",{className:"nav-link",href:"#"},s.a.createElement("img",{src:"./assets/img/discord_logo.svg",width:"30",alt:"discord_img"})))))))),s.a.createElement("div",{className:"container-fluid category-section d-none d-lg-block"},s.a.createElement("div",{className:"container py-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-auto font-weight-bold"},s.a.createElement("i",{className:"d-inline-block"},s.a.createElement("img",{src:"./assets/img/category-24px.svg",width:"30px",alt:""})),"Categories"),s.a.createElement("div",{className:"col-auto ml-auto"},s.a.createElement(L,{isActive:f.general,onClick:E,filterName:"general"},"General")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:f.cryptocurrency,onClick:E,filterName:"cryptocurrency"},"Cryptocurrency")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:f.nft,onClick:E,filterName:"nft"},"NFT")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:f.arts,onClick:E,filterName:"arts"},"Arts")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:f.games,onClick:E,filterName:"games"},"Games")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:f.science,onClick:E,filterName:"science"},"Science")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:f.technology,onClick:E,filterName:"technology"},"Technology")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:f.politics,onClick:E,filterName:"politics"},"Politics")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:f.society,onClick:E,filterName:"society"},"Society")),s.a.createElement("div",{className:"col-auto"},s.a.createElement(L,{isActive:f.sports,onClick:E,filterName:"sports"},"Sports")))))),s.a.createElement(x.c,null,s.a.createElement(x.a,{exact:!0,path:"/token/:id",component:I}),s.a.createElement(x.a,{exact:!0,path:"/owner/:address",component:M}),s.a.createElement(x.a,{exact:!0,path:"/"},s.a.createElement(j,{filtersList:f,searchValue:k,feesToCreate:a,feesToLike:c}))),s.a.createElement("footer",null,s.a.createElement("div",{className:"container py-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 text-center"},"Footer"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[248,1,2]]]);
//# sourceMappingURL=main.0452031d.chunk.js.map