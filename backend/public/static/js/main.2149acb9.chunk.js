(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(53)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),s=a.n(o),c=(a(38),a(9)),i=a(10),l=a(12),u=a(11),h=a(13),m=a(56),p=a(58),f=(a(39),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).msgRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillUpdate",value:function(){this.msgRef.current.classList.remove("invisible")}},{key:"componentDidUpdate",value:function(){setTimeout(function(){document.querySelector(".banner-msg").classList.add("invisible")},3e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"banner-msg invisible",ref:this.msgRef},this.props.msg)}}]),t}(r.a.Component)),g=(a(40),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={photoBase64:"",hashtags:""},a.bannerMsg="",a.textInputRef=r.a.createRef(),a.imgInputRef=r.a.createRef(),a.changeHashtagsInputValue=function(e){var t=e.target.value;a.setState({hashtags:t})},a.convertImgToBase64=function(e){var t,n=e.target.files[0];(t=n,new Promise(function(e,a){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(e){return a(e)}})).then(function(e){return a.setState({photoBase64:e})})},a.checkValidation=function(){""===a.imgInputRef.current.value?a.bannerMsg="please choose photo to upload":"#"!==a.textInputRef.current.value.charAt(0)?a.bannerMsg="text input must start with an hashtag":a.uploadPhotoToServer(),a.setState(a.state)},a.uploadPhotoToServer=function(){var e;fetch((e="public/images",d+"/"+e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.state)}).then(function(e){return e}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){this.bannerMsg=""}},{key:"render",value:function(){return r.a.createElement("div",{id:"upload-photo"},r.a.createElement("h4",null,"Upload photo"),r.a.createElement(m.a,null,r.a.createElement(m.a.Control,{className:"form-element",ref:this.imgInputRef,onChange:this.convertImgToBase64,type:"file"}),r.a.createElement(m.a.Control,{className:"form-element text-input",ref:this.textInputRef,onChange:this.changeHashtagsInputValue,value:this.state.hashtags,type:"text",placeholder:"Enter hashtags.."}),r.a.createElement(p.a,{className:"form-element",onClick:this.checkValidation,variant:"primary"},"Submit")),r.a.createElement(f,{msg:this.bannerMsg}))}}]),t}(r.a.Component)),d="http://localhost:3000";var v=g,b=a(30),E=a(57),y=a(54),j=a(55);a(41);var O=function(e){var t=e.list.map(function(e,t){return r.a.createElement(b.a,{className:"col",key:t},r.a.createElement(E.a,{className:"card"},r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Img,{className:"card-img",variant:"top",src:e.photoBase64}),r.a.createElement(E.a.Text,{className:"card-text"},e.hashtags.join("#")))))});return 0===t.length&&e.DidFirstMount?t=r.a.createElement("h3",{className:"not-found-msg"},"Did not find photo with such hashtags"):t.length%3!==0&&t.push(r.a.createElement(b.a,{key:t.length})),r.a.createElement(y.a,{type:"none"},r.a.createElement(j.a,null,t))},k=(a(42),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={imgList:[],hashtags:"",DidFirstMount:!1},a.changeHashtagsInputValue=function(e){var t=e.target.value;a.setState({hashtags:t})},a.filterCards=function(){var e=a.state.hashtags.split("#").join("-");fetch(N("public/images/byHashtags/?hashtags="+e)).then(function(e){return e.json()}).then(function(e){return a.setState({imgList:e})})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(N("public/images/?results="+this.props.imgNumToDisplay)).then(function(e){return e.json()}).then(function(t){e.setState({imgList:t,DidFirstMount:!0})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{id:"search-photo"},r.a.createElement("h4",null,"Search photos"),r.a.createElement(m.a,null,r.a.createElement(m.a.Control,{className:"form-element text-input",type:"text",onChange:this.changeHashtagsInputValue,value:this.state.hashtags,placeholder:"Enter hashtags..."}),r.a.createElement(p.a,{className:"form-element",onClick:this.filterCards},"Search")),r.a.createElement(O,{DidFirstMount:this.state.DidFirstMount,list:this.state.imgList}),r.a.createElement(f,null))}}]),t}(r.a.Component)),w="http://localhost:3000";function N(e){return w+"/"+e}var C=k,I=a(18),S=a(14);a(43);var R=function(e){return r.a.createElement("div",{id:"header"},r.a.createElement("h1",{id:"title"},e.title))},x=(a(44),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,{title:this.props.title}),r.a.createElement(I.a,null,r.a.createElement("div",{className:"all-links",bg:"light",variant:"light"},r.a.createElement(I.b,{className:"link",to:"/uploadPhoto/"},"Upload Photo"),r.a.createElement(I.b,{className:"link",to:"/searchPhotos/"},"Search Photos")),r.a.createElement(S.a,{path:"/uploadPhoto/",exact:!0,component:v}),r.a.createElement(S.a,{path:"/searchPhotos/",exact:!0,component:function(){return r.a.createElement(C,{imgNumToDisplay:100})}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(x,{title:"Interactive Photos Album"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.2149acb9.chunk.js.map