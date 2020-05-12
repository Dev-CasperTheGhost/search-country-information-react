(this["webpackJsonpsearch-country-info-react"]=this["webpackJsonpsearch-country-info-react"]||[]).push([[0],{65:function(e,t,a){e.exports=a(99)},70:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(55),c=a.n(l),o=(a(70),a(11)),i=a(12),u=a(16),s=a(17),m=a(41),p=a(108),h=a(23),E=a(112),d=a(63),f=a(7),g=a(32),y=a.n(g),v=a(104),b=a(5),C=a(105),O=a(106),j=a(33),k=a(101),S=a(102),N=a(111),x=a(39),W=a(103),w=a(109),D=a(110),I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleSearchInput=function(t){e.setState({countryName:t.target.value})},e.searchCountry=function(t){t.preventDefault();var a=e.state.countryName;e.props.searchCountry(a)},e.handleSelect=function(t){var a=t.target.value,n="http://restcountries.eu/rest/v2/region/".concat(a);"all"===a&&(n="http://restcountries.eu/rest/v2/all"),e.props.getCountries(n)},e.clearInput=function(){e.setState({countryName:""}),e.props.getCountries("http://restcountries.eu/rest/v2/all")},e.state={country:[],countryName:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.countryName;return r.a.createElement("form",{className:"search-container",onSubmit:this.searchCountry},r.a.createElement(j.a,null,r.a.createElement(k.a,{templateColumns:"75% 25%",gap:"4"},r.a.createElement("div",null,r.a.createElement(S.a,null,"Enter Country"),r.a.createElement(N.a,null,r.a.createElement(x.a,{type:"text",id:"country",rounded:"0",value:e,onChange:this.handleSearchInput}),r.a.createElement(W.a,{onClick:this.clearInput,children:"Clear",style:{cursor:"pointer"}}))),r.a.createElement("div",null,r.a.createElement(S.a,null,"Filter by Region"),r.a.createElement(w.a,{onChange:this.handleSelect},r.a.createElement("option",{defaultValue:!0,value:"all"},"All"),r.a.createElement("option",{value:"asia"},"Asia"),r.a.createElement("option",{value:"africa"},"Africa"),r.a.createElement("option",{value:"americas"},"America"),r.a.createElement("option",{value:"europe"},"Europe"),r.a.createElement("option",{value:"oceania"},"Oceania"))))),r.a.createElement(j.a,{style:{marginTop:"20px"}},r.a.createElement(D.a,{type:"submit"},"Search")))}}]),a}(n.Component),A=a(64),T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"spinner-area"},r.a.createElement(A.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"}))}}]),a}(n.Component),L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).getCountries=function(t){e.setState({loading:!0}),y.a.get(t).then((function(t){e.setState({countries:t.data}),setTimeout((function(){e.setState({loading:!1})}),1e3)})).catch((function(e){return console.log(e)}))},e.searchCountry=function(t){var a=e.state.countries.filter((function(e){return e.name.toLowerCase()===t.toLowerCase()}));e.setState({countries:a})},e.state={countries:[],loading:!0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getCountries("https://restcountries.eu/rest/v2/all"),setTimeout((function(){e.setState({loading:!1})}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.countries,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{getCountries:this.getCountries,searchCountry:this.searchCountry}),r.a.createElement("div",{className:"all-countries-grid"},a?r.a.createElement(T,null):t.map((function(e,t){return r.a.createElement(v.a,{href:"/search-country-information-react/"+e.name,key:t},r.a.createElement(b.a,{maxW:"sm",borderWidth:"1px",rounded:"lg"},r.a.createElement(C.a,{src:e.flag,alt:e.name}),r.a.createElement(b.a,{p:"5"},r.a.createElement(b.a,{alignItems:"baseline"},r.a.createElement(b.a,{style:{fontWeight:"bold"}},r.a.createElement(O.a,null,e.name)),r.a.createElement(b.a,{mt:"1"},r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Population:"," ")," ",e.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))),r.a.createElement(b.a,{mt:"1"},r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Region: "),e.region)),r.a.createElement(b.a,{mt:"1"},r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Capital:"," "),e.capital))))))}))))}}]),a}(n.Component),R=a(28),F=a(107),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).getCountryData=function(t){y.a.get("https://restcountries.eu/rest/v2/name/"+t).then((function(t){if(console.log(t.data),200!==t.status)return console.log(t.data),e.setState({message:"There was an error getting the country!"});e.setState({country:t.data[0]})})).catch((function(e){return console.log(e)}))},e.state={country:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getCountryData(this.props.match.params.country)}},{key:"render",value:function(){var e=this.state.country;return r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(v.a,{href:"/",className:"back-btn"},r.a.createElement(R.a,{name:"arrow-back",color:"white.500"}),"Back"),e.name?r.a.createElement("div",{className:"country-information-grid"},r.a.createElement("div",null,r.a.createElement(C.a,{src:e.flag,alt:e.name})),r.a.createElement("div",null,r.a.createElement(O.a,null,e.name),r.a.createElement("div",{className:"information-grid"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Native Name: "),e.nativeName),r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Capital: "),e.capital),r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Population: "),e.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Region: "),e.region),r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Sub Region: "),e.subregion)),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Top Level Domain: "),e.topLevelDomain[0]),r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Alpha2Code: "),e.alpha2Code),r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Alpha3Code: "),e.alpha3Code),r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Languages: "),e.languages.map((function(e,t){return r.a.createElement(F.a,{key:t},e.name," (",e.nativeName,")")}))),r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Currencies: "),e.currencies.map((function(e,t){return r.a.createElement(F.a,{key:t},e.name)}))))))):r.a.createElement("h1",null,"Loading..."))}}]),a}(n.Component),B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-grid"},r.a.createElement(O.a,null,"Find Country Information"),r.a.createElement("div",null,r.a.createElement(v.a,{target:"_blank",color:"teal.500",href:"https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"},"Idea Credits",r.a.createElement(R.a,{name:"external-link",mx:"2px"}))," ",r.a.createElement("br",null),r.a.createElement(v.a,{target:"_blank",color:"teal.500",href:"https://github.com/Dev-CasperTheGhost/search-country-information-react"},"Source Code",r.a.createElement(R.a,{name:"external-link",mx:"2px"}))))}}]),a}(n.Component),J=Object(m.a)({},p.a,{colors:Object(m.a)({},p.a.colors,{brand:{900:"#1a365d",800:"#153e75",700:"#2a69ac"}})}),P=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{theme:J},r.a.createElement(E.a,null),r.a.createElement(B,null),r.a.createElement(d.a,null,r.a.createElement(f.a,{path:"/search-country-information-react/",exact:!0,component:L}),r.a.createElement(f.a,{path:"/search-country-information-react/:country",exact:!0,component:M}))))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.9dbc46bc.chunk.js.map