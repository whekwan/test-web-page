(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),i=a.n(s),c=(a(17),a(6)),o=a.n(c),l=a(9),u=a(7),p=a(1),m=a(2),d=a(5),h=a(3),b=a(4),f=a(8),g=(a(21),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState({TextInput:e.target.value}),a.props.textChange(e)},a.state={TextInput:""},a.handleChange=a.handleChange.bind(Object(f.a)(Object(f.a)(a))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"component-search-input"},r.a.createElement("input",{type:"text",value:this.state.TextInput,onChange:this.handleChange,placeholder:"search"}))}}]),t}(n.PureComponent)),v=(a(23),a(25),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.props.index%2===0?r.a.createElement("div",{className:"component-app-listing-result-row"},r.a.createElement("span",{className:"row-number"},this.props.index),r.a.createElement("img",{src:this.props.imgSource,className:"even"}),r.a.createElement("span",{className:"app-listing-result-title"}," ",this.props.title)):r.a.createElement("div",{className:"component-app-listing-result-row"},r.a.createElement("span",{className:"row-number"},this.props.index),r.a.createElement("img",{src:this.props.imgSource,className:"odd"}),r.a.createElement("span",{className:"app-listing-result-title"}," ",this.props.title))}}]),t}(n.PureComponent)),w=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={isLoading:!1},e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"component-AppListing"},this.props.appListingData.map(function(e,t){return r.a.createElement(v,{index:t+1,imgSource:e["im:image"][1].label,title:e["im:name"].label})}))}}]),t}(n.PureComponent);w.defaultProps={appListingData:[]};var j=w,O=(a(27),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"component-app-recommend-result-col"},r.a.createElement("img",{src:this.props.imgSource,className:"odd"}),r.a.createElement("br",null),r.a.createElement("span",{className:"app-recommend-title"}," ",this.props.title))}}]),t}(n.PureComponent)),C=(a(29),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={isLoading:!1},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"component-AppRecommend"},this.props.appRecommendData.map(function(e){return r.a.createElement(O,{imgSource:e["im:image"][2].label,title:e["im:name"].label})}))}}]),t}(n.PureComponent));C.defaultProps={appRecommendData:[]};var y=C,L=[];function E(e,t){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(o.a.mark(function e(t,a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json").then(function(e){return e.json()});case 2:return n=e.sent,L=n.feed.entry,e.abrupt("return",L.filter(function(e){return""===t||(!!(e["im:name"].label.toLowerCase().includes(t.toLowerCase())||e["im:artist"].label.toLowerCase().includes(t.toLowerCase())||e.summary.label.toLowerCase().includes(t.toLowerCase())||e.category.attributes.label.toLowerCase().includes(t.toLowerCase())||e.category.attributes.term.toLowerCase().includes(t.toLowerCase()))||!!(e["im:name"].label.includes(t)||e["im:artist"].label.includes(t)||e.summary.label.includes(t)||e.category.attributes.label.includes(t)||e.category.attributes.term.includes(t)))}).slice(0,a));case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var x=[];function k(e,t){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(o.a.mark(function e(t,a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json").then(function(e){return e.json()});case 2:return n=e.sent,x=n.feed.entry,e.abrupt("return",x.filter(function(e){return""===t||(!!(e["im:name"].label.toLowerCase().includes(t.toLowerCase())||e["im:artist"].label.toLowerCase().includes(t.toLowerCase())||e.summary.label.toLowerCase().includes(t.toLowerCase())||e.category.attributes.label.toLowerCase().includes(t.toLowerCase())||e.category.attributes.term.toLowerCase().includes(t.toLowerCase()))||!!(e["im:name"].label.includes(t)||e["im:artist"].label.includes(t)||e.summary.label.includes(t)||e.category.attributes.label.includes(t)||e.category.attributes.term.includes(t)))}).slice(0,a));case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}a(31);var S=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={filteredAppList:[],filteredRecommend:[]},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t,a,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([E("",10),k("",100)]);case 2:t=e.sent,a=Object(l.a)(t,2),n=a[0],r=a[1],this.setState({filteredRecommend:n}),this.setState({filteredAppList:r});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSearchChange",value:function(){var e=Object(u.a)(o.a.mark(function e(t){var a,n,r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([E(t.target.value,10),k(t.target.value,100)]);case 2:a=e.sent,n=Object(l.a)(a,2),r=n[0],s=n[1],this.setState({filteredRecommend:r}),this.setState({filteredAppList:s});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"search-bar"},r.a.createElement(g,{textChange:this.handleSearchChange.bind(this)})),r.a.createElement("div",{className:"App-recommendation"},r.a.createElement("div",{className:"App-recommendation-title"},"App Recommendation"),r.a.createElement(y,{appRecommendData:this.state.filteredRecommend})),r.a.createElement("div",{className:"App-Listing"},r.a.createElement("div",{className:"App-listing-title"},"Top 100 apps"),r.a.createElement(j,{appListingData:this.state.filteredAppList}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,2,1]]]);
//# sourceMappingURL=main.aa451c55.chunk.js.map