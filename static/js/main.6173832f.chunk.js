(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(a,e,t){a.exports={profile:"Profile_profile__1JZYm",description:"Profile_description__1kew7",name:"Profile_name__2KO5N",tag:"Profile_tag__2fTHL",location:"Profile_location__hTo2e",avatar:"Profile_avatar__2OVVE",stats:"Profile_stats__26E5B",label:"Profile_label__3yA0P",quantity:"Profile_quantity__JEYW4"}},function(a,e,t){a.exports={wrapperFriend:"Friends_wrapperFriend__6A4gU",item:"Friends_item__2BK1G",status:"Friends_status__WMjQr",avatar:"Friends_avatar__1jt85",name:"Friends_name__212FR"}},function(a,e,t){a.exports={statistics:"Statistics_statistics__1j9Zn",title:"Statistics_title__2_WD3",statisticalList:"Statistics_statisticalList__r2NAC",statisticalItem:"Statistics_statisticalItem__2e_SY",label:"Statistics_label__27rST",percentage:"Statistics_percentage__1Zc58"}},function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,,function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(a,e,t){a.exports={container:"Container_container__3Kb1Z"}},function(a){a.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},,,,,function(a,e,t){},,,,function(a,e,t){"use strict";t.r(e);var s=t(5),i=t.n(s),n=t(9),c=t.n(n),r=(t(16),t(10)),l=t.n(r),o=t(0);function d(a){var e=a.children;return Object(o.jsx)("div",{className:l.a.container,children:e})}var p=t(1),j=t.n(p);function m(a){var e=a.name,t=a.tag,s=a.location,i=a.avatar,n=a.stats,c=n.followers,r=n.views,l=n.likes;return Object(o.jsxs)("div",{className:j.a.profile,children:[Object(o.jsxs)("div",{className:j.a.description,children:[Object(o.jsx)("img",{src:i,alt:e,className:j.a.avatar}),Object(o.jsx)("p",{className:j.a.name,children:e}),Object(o.jsxs)("p",{className:j.a.tag,children:["@ ",t]}),Object(o.jsx)("p",{className:j.a.location,children:s})]}),Object(o.jsxs)("ul",{className:j.a.stats,children:[Object(o.jsxs)("li",{className:j.a.statsItem,children:[Object(o.jsx)("span",{className:j.a.label,children:"Followers"}),Object(o.jsx)("span",{className:j.a.quantity,children:c})]}),Object(o.jsxs)("li",{className:j.a.statsItem,children:[Object(o.jsx)("span",{className:j.a.label,children:"Views"}),Object(o.jsx)("span",{className:j.a.quantity,children:r})]}),Object(o.jsxs)("li",{className:j.a.statsItem,children:[Object(o.jsx)("span",{className:j.a.label,children:"Likes"}),Object(o.jsx)("span",{className:j.a.quantity,children:l})]})]})]})}m.defaultProps={avatar:"https://cdn-icons-png.flaticon.com/512/2922/2922506.png"};var b=t(4),_=t(3),O=t.n(_);function h(a){var e=a.title,t=a.stats;return Object(o.jsxs)("section",{className:O.a.statistics,children:[e&&Object(o.jsx)("h2",{className:O.a.title,children:e.toUpperCase()}),Object(o.jsx)("ul",{className:O.a.statisticalList,children:t.map((function(a){var e=a.id,t=a.label,s=a.percentage;return Object(o.jsxs)("li",{className:O.a.statisticalItem,style:{backgroundColor:"rgb(".concat(255*Math.random()<<0,", ").concat(255*Math.random()<<0,", ").concat(255*Math.random()<<0,")")},children:[Object(o.jsx)("span",{className:O.a.label,children:t}),Object(o.jsxs)("span",{className:O.a.percentage,children:[s,"%"]})]},e)}))})]})}var f=t(8),u=t(2),x=t.n(u),v=t(6),g=t.n(v);function N(a){var e,t=a.avatar,s=a.name,i=a.isOnline,n=a.id;return Object(o.jsx)("ul",{className:x.a.wrapperFriend,children:Object(o.jsxs)("li",{className:x.a.item,children:[Object(o.jsx)("span",{className:x.a.status,style:{color:(e=i,e?"#008000":"#FF0000")},children:"\u2022"}),Object(o.jsx)("img",{className:x.a.avatar,src:t,alt:s,width:"48"}),Object(o.jsx)("p",{className:x.a.name,children:s})]})},n)}function w(a){var e=a.friends;return Object(o.jsx)("div",{className:x.a.wrapperFriends,children:Object(o.jsx)("ul",{className:x.a.friendList,children:e.map((function(a){var e=a.avatar,t=a.name,s=a.isOnline,i=a.id;return Object(o.jsx)("li",{children:Object(o.jsx)(N,{avatar:e,name:t,isOnline:s,id:i})},i)}))})})}N.defaultProps={avatar:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",name:"User name",isOnline:!1},w.propeTypes={friends:g.a.arrayOf(g.a.shape({id:g.a.number.isRequired}))};var y=t(11);var F=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(d,{children:[Object(o.jsx)(m,{name:b.name,tag:b.tag,location:b.location,avatar:b.avatar,stats:b.stats}),Object(o.jsx)(h,{title:"Upload stats",stats:f}),";",Object(o.jsx)(h,{stats:f}),";",Object(o.jsx)(w,{friends:y})]})})};c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(F,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.6173832f.chunk.js.map