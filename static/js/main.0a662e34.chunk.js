(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1i7Oe",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__3DtT_"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2U17u",Modal:"Modal_Modal__3CC_-"}},13:function(e,t,a){e.exports={Button:"Button_Button__189ay"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2vVu1"}},18:function(e,t,a){e.exports={loader:"LoaderView_loader__1-9Me"}},19:function(e,t,a){e.exports={container:"Container_container__3NbwN"}},29:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),o=a(4),c=a.n(o),s=(a(28),a(29),a(3)),l=a(8),i=a(12),u=a(13),m=a.n(u);var j=function(e){var t=e.onLoadMore;return Object(r.jsx)("button",{type:"button",className:m.a.Button,onClick:t,children:"Load more"})},b=a(10),h=a.n(b),d=a(14),g=a(15),p=a(22),O=a(20),f=a(11),_=a.n(f),v=document.querySelector("#modal-root"),x=function(e){Object(p.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){console.log("Modal componentDidmount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(o.createPortal)(Object(r.jsx)("div",{className:_.a.Overlay,onClick:this.handleBackdropClick,children:Object(r.jsx)("div",{className:_.a.Modal,children:Object(r.jsx)("img",{src:t,alt:a})})}),v)}}]),a}(n.Component);var y=function(e){var t=e.src,a=e.alt,o=e.largeImageURL,c=Object(n.useState)(!1),l=Object(s.a)(c,2),i=l[0],u=l[1],m=function(){return u(!i)};return Object(r.jsxs)("li",{className:h.a.ImageGalleryItem,children:[Object(r.jsx)("img",{src:t,alt:a,className:h.a.ImageGalleryItem_image,onClick:m}),i&&Object(r.jsx)(x,{onClose:m,src:o,alt:a})]})},S=a(16),I=a.n(S);var w=function(e){var t=e.images;return Object(r.jsx)("ul",{className:I.a.ImageGallery,children:t.map((function(e,t){return Object(r.jsx)(y,{src:e.webformatURL,alt:e.tags,largeImageURL:e.largeImageURL},t)}))})};var C=function(e){var t=e.message;return Object(r.jsx)("div",{role:"alert",children:Object(r.jsxs)("p",{children:["Sorry, something went wrong. Error: ",t]})})},N=a(17),k=a.n(N),F=(a(50),a(18)),E=a.n(F);var G=function(){return Object(r.jsx)(k.a,{className:E.a.loader,type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3})};var M={fetchPixabay:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=19223838-0e771d4957721b26290d866a0&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No response from server"))}))}},B="idle",L="pending",P="resolved",D="rejected";var U=function(e){var t=e.imageName,a=e.images,o=e.page,c=e.setImages,l=e.setPage,u=Object(n.useState)(null),m=Object(s.a)(u,2),b=m[0],h=m[1],d=Object(n.useState)(B),g=Object(s.a)(d,2),p=g[0],O=g[1],f=Object(n.useState)(!1),_=Object(s.a)(f,2),v=_[0],x=_[1];return Object(n.useEffect)((function(){t?(O(L),M.fetchPixabay(t,o).then((function(e){return 0===e.total?Promise.reject(new Error("Invalid request")):(c((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))})),x(e.totalHits-12*o<=0),O(P),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))})).catch((function(e){h(e),O(D)}))):console.log("\u0422\u0430\u043a\u043e\u0433\u043e \u0438\u043c\u0435\u043d\u0438 \u043d\u0435\u0442")}),[t,o,c]),p===B?Object(r.jsx)("p",{children:"Please enter a value for search images"}):p===D?Object(r.jsx)(C,{message:b.message}):p===P||p===L?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(w,{images:a}),p===P&&!v&&Object(r.jsx)(j,{onLoadMore:function(){l((function(e){return e+1}))}}),p===L&&Object(r.jsx)(G,{})]}):void 0},T=a(19),q=a.n(T);var R=function(e){var t=e.children;return Object(r.jsx)("div",{className:q.a.container,children:t})},z=a(21),H=(a(51),a(6)),K=a.n(H);var W=function(e){var t=e.onSubmit,a=Object(n.useState)(""),o=Object(s.a)(a,2),c=o[0],i=o[1];return Object(r.jsx)("header",{className:K.a.Searchbar,children:Object(r.jsxs)("form",{className:K.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return l.b.info("Please enter search query");t(c),i("")},children:[Object(r.jsx)("button",{type:"submit",className:K.a.SearchFormBtn,children:Object(r.jsx)(z.a,{})}),Object(r.jsx)("input",{value:c,onChange:function(e){i(e.currentTarget.value.toLowerCase())},className:K.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})};var J=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),i=Object(s.a)(c,2),u=i[0],m=i[1],j=Object(n.useState)(1),b=Object(s.a)(j,2),h=b[0],d=b[1];return Object(r.jsxs)(R,{children:[Object(r.jsx)(W,{onSubmit:function(e){o(e),m([]),d(1)}}),Object(r.jsx)(U,{imageName:a,images:u,page:h,setImages:m,setPage:d}),Object(r.jsx)(l.a,{autoClose:3e3})]})};c.a.render(Object(r.jsx)(J,{}),document.getElementById("root"))},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3HSev",SearchForm:"Searchbar_SearchForm__2U1PY",SearchFormBtn:"Searchbar_SearchFormBtn__68WiE",SearchForm_button_label:"Searchbar_SearchForm_button_label__MTz1p",SearchForm_input:"Searchbar_SearchForm_input__2zZE4"}}},[[52,1,2]]]);
//# sourceMappingURL=main.0a662e34.chunk.js.map