"use strict";(self.webpackChunkforeningsguide_backend=self.webpackChunkforeningsguide_backend||[]).push([[4985],{54985:(W,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>m});var D=_(92132),P=_(7578),n=_(41189),A=_(21272),C=_(55506),R=_(14718),i=_(12484),v=_(55151),U=_(79077),B=_(8080),t=_(15126),l=_(63299),L=_(67014),d=_(59080),I=_(79275),M=_(82437),T=_(61535),O=_(5790),E=_(12083),o=_(35223),K=_(5409),a=_(74930),h=_(2600),f=_(48940),r=_(41286),g=_(56336),S=_(13426),y=_(84624),N=_(77965),j=_(54257),H=_(71210),e=_(51187),x=_(39404),V=_(58692),F=_(501),G=_(57646),$=_(23120),c=_(44414),z=_(25962),X=_(14664),Q=_(42588),Z=_(90325),Y=_(62785),J=_(87443),u=_(41032),p=_(22957),k=_(93179),w=_(73055),b=_(15747),q=_(85306),__=_(26509),E_=_(32058),t_=_(81185),s_=_(82261),M_=_(56999),O_=_(67031);const m=()=>((0,n.u)(),(0,D.jsx)(P.HomePageCE,{}))},41189:(W,s,_)=>{_.d(s,{u:()=>B});var D=_(21272),P=_(55506),n=_(67031),A=_(54894),C=_(17703),R=_(8080);const i="strapi-notification-seat-limit",v="https://cloud.strapi.io/profile/billing",U="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:L,isLoading:d}=(0,R.m)(),I=(0,P.hN)(),{pathname:M}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:O,licenseLimitStatus:E,isHostedOnStrapiCloud:o}=l??{};D.useEffect(()=>{if(L||d)return;const K=!n(O)&&!window.sessionStorage.getItem(`${i}-${M}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let a;E==="OVER_LIMIT"?a="warning":E==="AT_LIMIT"&&(a="softWarning"),K&&I({type:a,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:O}),link:{url:o?v:U,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:o})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${M}`,"true")}})},[I,l,M,t,d,O,E,T,o,L])}}}]);