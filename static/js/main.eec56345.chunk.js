(this["webpackJsonpcensus-tract-with-mapbox-compare"]=this["webpackJsonpcensus-tract-with-mapbox-compare"]||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/Graphicacy_logo.a21d2b02.svg"},49:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),l=a(29),c=a(92),s=a(87),p=a(88),d=a(94),m="#353131",u="#fff",f="#4292c6",g="#d73027",h="#ffffbf",b={latitude:41.5096879,longitude:-73.0447974,zoom:8,bearing:0,pitch:0},x=Object(c.a)("$,.0f"),v=Object(c.a)(",.0%"),y=Object(c.a)("$.3s"),E="total_est",w="previous_total_est",j="percent_change",C="mapbox://styles/graphicacy/ckiqeeqtl0sgz18qv6xnslftp",O="tractsclippedbystatewithalldata",S="mapbox://graphicacy.1a7bxyc8",N=[35419,54875,74271,96503,125157,167104,266908],k=[-.161,-.11,-.05,0,.05,.11,.161],I=s.a[7].map((function(e,t){return[e,N[t]]})),M=p.a[7].map((function(e,t){return[e,k[t]]})),z=[{label:"Total Income",id:"total_income",fillColorPaints:[{"fill-color":["step",["get",E]].concat(Object(d.a)(I)).concat("#fff"),"fill-opacity":.9},{"fill-color":["step",["get",w]].concat(Object(d.a)(I)).concat("#fff"),"fill-opacity":.9}],legendColors:I,formatter:x,legendFormatter:y,properties:[w,E],isActive:!0},{label:"% Change",id:"percent_change",fillColorPaints:[{"fill-color":["step",["get",j]].concat(Object(d.a)(M)).concat(M[M.length-1][0]),"fill-opacity":.9}],legendColors:M,formatter:v,legendFormatter:v,properties:[j],isActive:!1}],R={"line-width":["case",["boolean",["feature-state","hover"],!1],3,.5],"line-color":["case",["boolean",["feature-state","hover"],!1],"#000","#969090"],"line-opacity":["case",["boolean",["feature-state","hover"],!1],1,0]},T=a(9),W=a(20),_=a(38),B=a.n(_),F=a(89),A=Object(F.a)((function(e){return{legend:{flex:"0 0 420px",display:"flex",color:m,fontSize:"14px","& h4":{marginBlockStart:0,marginBlockEnd:".25rem"},"& h5":{marginBlockStart:0,marginBlockEnd:".5rem",fontStyle:"italic"},"& :not(:last-child)":{paddingBottom:".25rem"}},innerContainer:{display:"flex",flexDirection:"row",width:"100%"},legendItem:{display:"flex",flexDirection:"column",flex:"0 0 60px","& .block":{width:"100%",height:"17px"},textAlign:"end"}}})),J=function(e){var t=e.activeToggle,a=A({width:500});return r.a.createElement("div",{className:a.legend},r.a.createElement("div",{className:a.innerContainer},t.legendColors.map((function(e,n){var o=Object(l.a)(e,2),i=o[0],c=o[1];return r.a.createElement("div",{className:a.legendItem,key:"legend-item-for-".concat(i)},r.a.createElement("div",{className:"block",style:{backgroundColor:i}}),r.a.createElement("div",null,"".concat(n?"":"<").concat(n===t.legendColors.length-1&&t.properties[0]===j?">":"").concat(t.legendFormatter(c))))}))))},G=a(93),H=a(95),L=Object(F.a)((function(e){return{header:Object(W.a)({display:"flex",zIndex:"999",backgroundColor:"#fff",width:"calc(100% - 50px)",padding:"25px 25px 15px",justifyContent:"space-between"},e.breakpoints.down("sm"),{flexWrap:"wrap"}),info:{display:"flex",flexWrap:"wrap",flex:"1 1 auto","& > *":{"&:not(:last-child)":Object(W.a)({marginRight:60,marginBottom:20},e.breakpoints.down("sm"),{flex:"0 0 100%"})}},leftContainer:{display:"flex",flexDirection:"column",color:m,fontWeight:"bold",fontSize:"20px",lineHeight:1.3,flex:"0 0 340px","& .source":{marginTop:"2px",fontWeight:"normal",fontSize:"14px",lineHeight:1.36,"& a":{color:f}}},toggleContainer:{},toggleGroup:{height:30},toggleBtn:{whiteSpace:"nowrap",padding:"0 20px",textTransform:"capitalize","&:first-child":{borderRadius:"20px 0 0 20px"},"&:last-child":{borderRadius:"0 20px 20px 0"}},builtByContainer:Object(W.a)({display:"flex",height:30,paddingBottom:10,"& img":{marginLeft:"6px",height:23},"& h3":{whiteSpace:"noWrap",margin:0},"& a":{display:"block"}},e.breakpoints.down("sm"),{paddingBottom:0,marginTop:20})}})),Y=function(e){var t=e.state,a=e.setState,n=L(),o=t.toggles.find((function(e){return e.isActive}));return r.a.createElement("div",{className:n.header},r.a.createElement("div",{className:n.info},r.a.createElement("div",{className:n.leftContainer},r.a.createElement("div",null,"How has Median Household Income changed over time?"),r.a.createElement("div",{className:"source"},"Source:"," ",r.a.createElement("a",{href:"http://data.diversitydatakids.org/dataset/19013_1_d-median-household-income--dollar--by-race-ethnicity/resource/c5334c27-3cf0-439b-b8b0-5ff7eb632b57",target:"_blank",rel:"noopener noreferrer"},"diversitydatakids.org, ACS"))),r.a.createElement("div",{className:n.toggleContainer},r.a.createElement(H.a,{className:n.toggleGroup,value:o.id,exclusive:!0,onChange:function(e,t){a((function(e){return Object(T.a)(Object(T.a)({},e),{},{toggles:e.toggles.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{isActive:e.id===t})}))})}))},"aria-label":"toggle"},t.toggles.map((function(e){return r.a.createElement(G.a,{className:n.toggleBtn,key:"toggle-button-for-".concat(e.id),value:e.id,"aria-label":e.label},e.label)})))),r.a.createElement(J,{activeToggle:o})),r.a.createElement("div",{className:n.builtByContainer},r.a.createElement("div",null,r.a.createElement("h3",null,"BUILT BY")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://graphicacy.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:B.a,alt:"Large G branding for Graphicacy - a data visualization and design firm."})))))},D=a(10),V=a(44),Z=a.n(V),P=Object(F.a)((function(e){return{container:{position:"relative",width:"100%"},map:{position:"absolute",top:0,bottom:0,width:"100%"},yearRangeContainer:{position:"absolute",top:30,width:"123px",height:"30px",padding:"1px 8px 3px 15px",backgroundColor:"rgb(9, 69, 148, .3)",fontSize:"20px",fontWeight:"bold",color:u,display:"flex",justifyContent:"center",alignItems:"center",zIndex:1}}})),q=function(e){var t=e.state,a=e.setState,o=e.activeToggle,i=e._onViewportChange,l=e.mapboxRef,c=e.onMouseMove,s=P(),p=Object(n.useRef)(null),d=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=p.current,t=e.offsetWidth,n=e.offsetHeight,r=new Z.a(l.current.getMap(),d.current.getMap(),"#comparison-container");return a((function(e){return Object(T.a)(Object(T.a)({},e),{},{width:t,height:n})})),function(){return r.remove()}}),[l,a]),r.a.createElement("div",{id:"comparison-container",className:s.container},r.a.createElement("div",{id:"before",className:s.map,ref:p},r.a.createElement("div",{className:s.yearRangeContainer,style:{left:0}},"2008 - 2012"),r.a.createElement(D.c,Object.assign({},t.viewport,{ref:d,width:"100%",height:"100%",mapStyle:C,onViewportChange:i,mapboxApiAccessToken:"pk.eyJ1IjoiZ3JhcGhpY2FjeSIsImEiOiJja2hjNWRkbHowMTRzMnhsOWw2YTEyNGg0In0.U7iJwzcfSizpZ9E0eexscg"}),r.a.createElement(D.b,{id:O,type:"vector",url:S}),r.a.createElement(D.a,{beforeId:"bridge-rail",type:"fill",id:"fill_layer",filter:["has",o.properties[0]],source:O,"source-layer":O,paint:o.fillColorPaints[0]}),r.a.createElement(D.a,{type:"line",source:O,"source-layer":O,paint:R}))),r.a.createElement("div",{id:"after",className:s.map},r.a.createElement("div",{className:s.yearRangeContainer,style:{right:0,zIndex:0}},"2013 - 2017"),r.a.createElement(D.c,Object.assign({},t.viewport,{ref:l,width:"100%",height:"100%",onMouseMove:c,mapStyle:C,onViewportChange:i,mapboxApiAccessToken:"pk.eyJ1IjoiZ3JhcGhpY2FjeSIsImEiOiJja2hjNWRkbHowMTRzMnhsOWw2YTEyNGg0In0.U7iJwzcfSizpZ9E0eexscg"}),r.a.createElement(D.b,{id:O,type:"vector",url:S}),r.a.createElement(D.a,{beforeId:"bridge-rail",type:"fill",id:"fill_layer",filter:["has",o.properties[1]],source:O,"source-layer":O,paint:o.fillColorPaints[1]}),r.a.createElement(D.a,{type:"line",source:O,"source-layer":O,paint:R}))))},U=Object(F.a)((function(){return{map:{position:"absolute",top:0,bottom:0,width:"100%"}}})),X=function(e){var t=e.state,a=e.setState,o=e.activeToggle,i=e._onViewportChange,l=e.mapboxRef,c=e.onMouseMove,s=U(),p=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=p.current,t=e.offsetWidth,n=e.offsetHeight;a((function(e){return Object(T.a)(Object(T.a)({},e),{},{width:t,height:n})}))}),[a]),r.a.createElement("div",{id:"percent-change-map"},r.a.createElement("div",{className:s.map,ref:p},r.a.createElement(D.c,Object.assign({},t.viewport,{ref:l,width:"100%",height:"100%",onMouseMove:c,mapStyle:C,onViewportChange:i,mapboxApiAccessToken:"pk.eyJ1IjoiZ3JhcGhpY2FjeSIsImEiOiJja2hjNWRkbHowMTRzMnhsOWw2YTEyNGg0In0.U7iJwzcfSizpZ9E0eexscg"}),r.a.createElement(D.b,{id:O,type:"vector",url:S}),r.a.createElement(D.a,{beforeId:"bridge-rail",type:"fill",id:"fill_layer",filter:["has",o.properties[0]],source:O,"source-layer":O,paint:o.fillColorPaints[0]}),r.a.createElement(D.a,{type:"line",source:O,"source-layer":O,paint:R}))))},$=Object(F.a)((function(e){return{tooltip:{position:"absolute",margin:"8px",fontSize:"18px",zIndex:"9",pointerEvents:"none",maxWidth:function(e){return e.tooltipWidth},padding:"10px",opacity:"0.9",borderRadius:"5px",boxShadow:"1px 3px 15px 0 rgba(0, 0, 0, 0.49)",backgroundColor:"#2e2e2e"},header:{width:"calc(100% - 10px)",height:"calc(100% - 10px)",color:u,padding:5},topContainer:{"& .name":{fontSize:"20px",fontWeight:"bold"},paddingBottom:"16.5px",borderBottom:"solid 1px ".concat(u)},bottomContainer:{display:"flex",flexDirection:"column",width:"100%"},metricsContainer:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"},yearContainer:{display:"flex",flexDirection:"column",width:"60%"},percentChangeContainer:{fontSize:"32px",width:"107px",height:"43px",margin:"1px 0 0",fontWeight:"bold",borderRadius:"5px",textAlign:"center"},incomeLabel:{margin:"10px 0"}}})),K=function(e){var t=e.activeFeature,a=e.x,n=e.y,o=e.width,i=e.height,l=$({tooltipWidth:335,tooltipHeight:195});if(!t)return null;335+a>o-10&&(a-=375),195+n>i-10&&(n-=195);var c=+t.properties[j],s=h,p=m;return c>.009?(s=f,p=u):c<-.009&&(s=g,p=u),r.a.createElement("div",{className:l.tooltip,style:{left:a,top:n}},r.a.createElement("div",{className:l.header},r.a.createElement("div",{className:l.topContainer},r.a.createElement("div",{className:"name"},t.properties.name)),r.a.createElement("div",{className:l.bottomContainer},r.a.createElement("div",{className:l.incomeLabel},"Median Household Income"),r.a.createElement("div",{className:l.metricsContainer},r.a.createElement("div",{className:l.yearContainer},r.a.createElement("div",null,"2008-2012: ",r.a.createElement("b",null,x(t.properties[w]))),r.a.createElement("div",null,"2013-2017: ",r.a.createElement("b",null,x(t.properties[E])))),r.a.createElement("div",{className:l.percentChangeContainer,style:{backgroundColor:s,color:p}},"".concat(c>=0?"+":"").concat(v(c)))))))},Q=Object(F.a)((function(e){return{mapContainer:{display:"flex",position:"relative",flex:"1 1 auto"}}})),ee=function(e){var t=e.state,a=e.setState,o=Q(),i=Object(n.useRef)(null),l=t.toggles.find((function(e){return e.isActive})),c=function(e){return a((function(t){return Object(T.a)(Object(T.a)({},t),{},{viewport:e})}))},s=function(e){var n,r=e.srcEvent,o=r.offsetX,l=r.offsetY,c=[o,l],s=i.current.getMap();try{n=i.current.getMap().queryRenderedFeatures(c,{layers:["fill_layer"]})[0]}catch(p){return}n&&(t.activeFeature&&s.removeFeatureState({source:O,sourceLayer:O}),s.setFeatureState({source:O,sourceLayer:O,id:n.id},{hover:!0})),a((function(e){return Object(T.a)(Object(T.a)({},e),{},{activeFeature:n,x:o,y:l})}))};return r.a.createElement("div",{className:o.mapContainer,onMouseOut:function(){i.current.getMap().removeFeatureState({source:O,sourceLayer:O}),a((function(e){return Object(T.a)(Object(T.a)({},e),{},{activeFeature:null})}))}},l.properties[0]===j?r.a.createElement(X,{state:t,setState:a,activeToggle:l,_onViewportChange:c,mapboxRef:i,onMouseMove:s}):r.a.createElement(q,{state:t,setState:a,activeToggle:l,_onViewportChange:c,mapboxRef:i,onMouseMove:s}),r.a.createElement(K,t))},te=Object(F.a)((function(e){return{app:{display:"flex",flexDirection:"column",height:"100vh",width:"100vw",scrollX:"none"}}})),ae=function(){var e=te(),t=Object(n.useState)({viewport:b,toggles:z,activeFeature:null,x:0,y:0,width:100,height:100}),a=Object(l.a)(t,2),o=a[0],i=a[1];return r.a.createElement("div",{className:e.app},r.a.createElement(Y,{state:o,setState:i}),r.a.createElement(ee,{state:o,setState:i}))};a(64),a(65);i.a.render(r.a.createElement(ae,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.eec56345.chunk.js.map