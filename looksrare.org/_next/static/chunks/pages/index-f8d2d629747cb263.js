(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{87314:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(23021)}])},27508:function(e,n,r){"use strict";r.d(n,{D:function(){return u}});var t=r(98788),i=r(5163),o=r(34291),s=r.n(o),l=r(98923),a=r.n(l),c=r(2784),d=r(36687),h=r(47884),x=r(47363),u=function(e){var n=e.onSuccess,r=void 0===n?s():n,o=e.onError,l=void 0===o?s():o,u=(0,c.useState)(!1),p=u[0],f=u[1],m=(0,x.FY)();return{onRefreshMetadata:(0,c.useCallback)(function(){var e=(0,t.Z)((function(e,n){var t;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:f(!0),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,(0,d.r)(e,n)];case 2:return i.sent(),r(),f(!1),a()((function(){m(e,n)}),1e4),[3,4];case 3:return t=i.sent(),f(!1),[2,l((0,h.iC)(t))];case 4:return[2]}}))}));return function(n,r){return e.apply(this,arguments)}}(),[r,m,l]),isRefreshing:p}}},23021:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return Y},default:function(){return J}});var t=r(52322),i=r(2784),o=r(55351),s=r(15704),l=r(66170),a=r(76699),c=r(38505),d=r(39097),h=r.n(d),x=r(29287),u=r(53965),p=r(47542),f=r(17686),m=r(33234),g=r(88803),j=r(58486),v=r(64264),b=r(63501),y=r(20070),k=r(96212),w=r(65152),C=r(74851),T=r(3354),S=r(61610),R=r(27508),_=r(17722),A=r(47247),E={card:{light:"shadow-card-light",dark:"shadow-card-dark"},"card-hover":{light:"shadow-card-light-hover",dark:"shadow-card-dark-hover"},popover:{light:"shadow-popover-light",dark:"shadow-popover-dark"}},z=function(e){return(0,A.ff)(E[e].light,E[e].dark)},I=function(e){var n=e.nft,r=n.collection,o=n.image,s=n.name,l=(0,a.$)().t,c=(0,_.p)(),d=(0,x.dQ)("colors","border-01"),p=z("card"),g=z("card-hover"),j=(0,R.D)({onSuccess:function(){return c({title:l("Refreshing"),description:l("Metadata refreshing. Check back in a few moments.")})},onError:function(e){return c({title:l("Can't refresh"),description:e,status:"error"})}}),v=j.onRefreshMetadata,b=j.isRefreshing,y=(0,i.useState)(n.isRefreshed),k=y[0],w=y[1];return(0,t.jsx)(u.kC,{minWidth:"260px",maxWidth:"480px",margin:"0 auto",flexDirection:"column",transition:"background 200ms ease-out",boxShadow:p,sx:{img:{borderTopRadius:"2xl"},_hover:{bg:"hover-ui",img:{opacity:.9,transition:"opacity 200ms ease-out"},boxShadow:g},_active:{bg:"onclick-ui",img:{opacity:.8,transition:"opacity 200ms ease-out"}}},"data-id":"home-nft-card",overflow:"hidden",borderRadius:"dialog",children:(0,t.jsx)(h(),{href:"/collections/".concat(r.address),passHref:!0,children:(0,t.jsx)("a",{children:(0,t.jsxs)(u.xu,{position:"relative",cursor:"pointer",overflow:"hidden",borderRadius:"dialog",boxShadow:"inset 0px 0px 0px 1px ".concat(d,", 0px 8px 16px 0px rgba(0,0,0,0.04)"),bg:"ui-bg",children:[(0,t.jsx)(u.xu,{position:"absolute",zIndex:"docked",top:2,left:2,children:(0,t.jsx)(f.Vp9,{children:(0,t.jsx)(C.Sn,{children:(0,t.jsx)(f.J2e,{variant:"tooltip",placement:"top",renderInPortal:!0,label:l("Beep Boop... trending collections are selected by an algorithm!"),children:(0,t.jsxs)(u.kC,{alignItems:"center",children:[(0,t.jsx)(f.nbg,{boxSize:5,mr:1}),l("Trending Collection")]})})})})}),(0,t.jsx)(u.oM,{ratio:1,position:"relative",children:(0,t.jsx)(S.fU,{src:o.src,contentType:o.contentType,alt:s,collectionLogo:r.logo,collectionAddress:r.address,isRefreshing:b,isRefreshed:k,onRefreshClick:function(){v(n.collection.address,n.tokenId),w(!0)},imageProps:{sizes:"(max-width: ".concat(m.A.md,") 100vw, (max-width: ").concat(m.A.lg,") 262px, 360px"),priority:!0,objectFit:"cover"},videoProps:{preload:"auto",loop:!0,sizes:{base:768,md:262,lg:360}}})}),(0,t.jsx)(u.rj,{justifyContent:"space-between",alignItems:"center",gridTemplateColumns:"auto auto",gridColumnGap:4,p:4,children:(0,t.jsx)(u.kC,{flexDir:"column",overflow:"hidden",whiteSpace:"nowrap",alignItems:"flex-start",children:(0,t.jsx)(T.v,{name:r.name,isVerified:r.isVerified,isListingRewardsEligible:!!r.points,textProps:{textStyle:"display-body-emphasis",color:"text-01"}})})})]})})})})},W=i.memo(I),$=r(51509),B=function(){var e=(0,a.$)().t;return(0,t.jsxs)(u.kC,{flexDirection:"column",borderRadius:"dialog",overflow:"hidden",margin:"0 auto",maxWidth:"480px",children:[(0,t.jsxs)(u.xu,{position:"relative",children:[(0,t.jsx)(u.xu,{position:"absolute",zIndex:"docked",top:2,left:2,children:(0,t.jsx)(f.Vp9,{children:(0,t.jsx)(C.Sn,{children:(0,t.jsxs)(u.kC,{alignItems:"center",children:[(0,t.jsx)(f.nbg,{boxSize:5,mr:1}),(0,t.jsx)(f.xvT,{textStyle:"detail",bold:!0,children:e("Trending Collection")})]})})})}),(0,t.jsx)(u.oM,{ratio:1,children:(0,t.jsx)($.Od,{borderRadius:"square"})})]}),(0,t.jsx)(u.kC,{p:4,alignItems:"center",borderBottomRightRadius:"2xl",borderBottomLeftRadius:"2xl",borderWidth:1,borderTopWidth:0,borderColor:"border-01",children:(0,t.jsx)($.Od,{width:"180px",height:"24px"})})]})},L=i.memo(B),N=r(7653),F=r(31041),P=function(e){var n,r=e.topCollections,i=(0,a.$)().t,o=(0,N.F)({base:!0,md:!1})?null===r||void 0===r?void 0:r.slice(0,l.Ch/2):r;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.xvT,{"data-test-id":"top-collections-section-text",textAlign:"center",pb:16,bold:!0,textStyle:"display-03",children:i("Top Collections Today")}),(0,t.jsx)(F.v,{collections:null!==o&&void 0!==o?o:[],isLoading:!r,loadingRowCount:null!==(n=null===o||void 0===o?void 0:o.length)&&void 0!==n?n:0}),(0,t.jsx)(u.kC,{justifyContent:"center",mt:12,children:(0,t.jsx)(h(),{href:"/collections",passHref:!0,children:(0,t.jsx)(f.zxk,{"data-id":"top-collections-see-all-collections",size:"lg",mr:2,children:i("See all collections")})})})]})},D=r(4611),O=r(85326),G=r(35646),M=r(34699),H=r(92065),Z=function(){var e=(0,a.$)().t,n=(0,G.J)().apr,r=(0,M.p)(),i=r.apy,o=r.apr,s=r.dailyCompounds,l=n&&i?(0,D.DW)((0,O.TD)(i,n)):0,d=n?(0,D.DW)(n):void 0,x=o?(0,D.DW)(o):void 0,p=i?(0,D.DW)(i):void 0,m=(0,A.ff)((0,t.jsx)(f.LXl,{boxSize:1,width:{base:"75%",xs:"50%",md:"100%"},height:"100%"}),(0,t.jsx)(f.fGY,{boxSize:1,width:{base:"75%",xs:"50%",md:"100%"},height:"100%"}));return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(u.rj,{columnGap:12,gridTemplateAreas:{base:"'b' 'a'",md:"'a b'"},gridTemplateColumns:{base:"1fr",md:"1fr 1fr"},children:[(0,t.jsx)(u.P4,{gridArea:"a",height:"100%",children:(0,t.jsxs)(u.kC,{height:"100%",justifyContent:"center",flexDirection:"column",children:[(0,t.jsx)(c.c,{i18nKey:"transHomeAggregatorLooksApy",children:(0,t.jsxs)(f.xvT,{maxWidth:"480px",pb:8,bold:!0,textStyle:"display-03",children:["Earn up to"," ",(0,t.jsx)(f.sL9,{animate:!0,bg:"base.linearGradient",textStyle:"display-04",display:"inline",bold:!0,pr:1,children:(0,t.jsxs)(t.Fragment,{children:[{annualApyToLocale:l},"% APY"]})})," ","with LOOKS"]})}),(0,t.jsx)(c.c,{i18nKey:"transStakeLooksToEarnAShareOfDailyTradingFees",children:(0,t.jsxs)(u.xu,{display:"inline",mb:8,children:[(0,t.jsxs)(f.xvT,{color:"text-02",display:"inline",children:["Stake LOOKS tokens to"," "]}),(0,t.jsxs)(f.xvT,{bold:!0,color:"text-02",display:"inline",children:["earn a share of daily trading fees"," "]}),(0,t.jsx)(f.xvT,{color:"text-02",display:"inline",children:"in WETH, in addition to even more LOOKS."})]})}),(0,t.jsxs)(u.kC,{alignItems:"center",children:[(0,t.jsx)(h(),{href:"/rewards",passHref:!0,children:(0,t.jsx)(f.zxk,{"data-id":"earn-start-earning",size:"lg",mr:2,children:e("Start Earning")})}),(0,t.jsx)(H.hp,{looksApr:d,wethApr:x,wethApy:p,dailyCompounds:s,children:(0,t.jsx)(u.kC,{display:"inline-flex",children:(0,t.jsx)(f.byK,{color:"text-03"})})})]})]})}),(0,t.jsx)(u.P4,{gridArea:"b",children:(0,t.jsx)(u.kC,{justifyContent:"flex-end",children:m})})]})})},K=function(e){var n=e.children;return(0,t.jsx)(g.W,{maxW:"1200px",pb:24,children:n})},V=function(e){var n=e.href,r=e.children;return(0,t.jsx)(h(),{href:n,passHref:!0,children:(0,t.jsx)(f.xvT,{as:"a",color:"link-01",children:r})})},q=function(e){var n=e.children,r=e.contentType,o=e.src,s=e.altText,l=(0,x.dQ)("colors","ui-bg"),a=(0,i.useState)(!1),c=a[0],d=a[1],h=(0,i.useState)(!1),f=h[0],g=h[1];return(0,t.jsxs)(u.xu,{position:"relative",overflow:"hidden",children:[(0,t.jsx)(u.xu,{sx:{mask:"linear-gradient(".concat(l,", transparent 95%)")},width:"100%",bg:"ui-01",height:"100%",position:"absolute",transition:"opacity 1000ms ease",opacity:f?1:c?.2:0,transform:"scale(1.1)",filter:"blur(8px)",pointerEvents:"none",children:o&&!f&&(0,t.jsx)(p.E,{onLoadingComplete:function(){return d(!0)},onError:function(){return g(!0)},alt:s,contentType:r,src:o,objectFit:"cover",objectPosition:"center",layout:"fill",sizes:"(max-width: ".concat(m.A.md,") 100vw, (max-width: ").concat(m.A.lg,") 262px, 360px")})}),n]})},U=function(e){var n=e.trendingNft,r=e.topCollections,i=(0,a.$)().t;return(0,k.V)(),(0,j.$G)(),(0,v.EZ)(),(0,b.I$)(),(0,y.$)(),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(q,{src:null===n||void 0===n?void 0:n.image.src,contentType:null===n||void 0===n?void 0:n.image.contentType,altText:null===n||void 0===n?void 0:n.name,children:(0,t.jsx)(K,{children:(0,t.jsxs)(u.rj,{pt:{base:16,md:24},columnGap:12,gridTemplateColumns:{base:"1fr",md:"auto 360px",lg:"auto 480px"},alignItems:"center",children:[(0,t.jsxs)(u.P4,{position:"relative",children:[(0,t.jsx)(f.xvT,{as:"h1",mb:8,bold:!0,textStyle:"display-01",wordBreak:"keep-all",maxWidth:{base:"320px",sm:"100%",md:"455px",lg:"560px"},children:i("Buy & Sell NFTs, Get Rewards")}),(0,t.jsxs)(u.xu,{mb:8,children:[(0,t.jsx)(u.xu,{maxWidth:{base:"320px",sm:"100%",md:"455px"},children:(0,t.jsxs)(c.c,{i18nKey:"marketplaceWhereTradersEarnedBillions",children:[(0,t.jsx)(f.xvT,{as:"span",color:"text-02",children:"LooksRare is the web3 NFT Marketplace where traders and collectors have"})," ",(0,t.jsx)(V,{href:"/rewards",children:"earned over $1.3 Billion in rewards."})]})}),(0,t.jsxs)(u.Eq,{mt:8,spacing:2,children:[(0,t.jsx)(u.Uc,{children:(0,t.jsx)(h(),{href:"/accounts/me",passHref:!0,children:(0,t.jsx)(f.zxk,{"data-id":"home-view-list-an-nft",size:"lg",as:"a",children:i("Sell")})})}),(0,t.jsx)(u.Uc,{children:(0,t.jsx)(h(),{href:"/explore",passHref:!0,children:(0,t.jsx)(f.zxk,{"data-id":"home-view-explore-nfts",as:"a",size:"lg",colorScheme:"gray",variant:"outline",children:i("Explore")})})})]})]})]}),(0,t.jsx)(u.P4,{children:n?(0,t.jsx)(W,{nft:n}):(0,t.jsx)(L,{})})]})})}),(0,t.jsx)(K,{children:(0,t.jsx)(P,{topCollections:r})}),(0,t.jsx)(w.Z,{children:(0,t.jsx)(u.xu,{bgGradient:"linear(to-t, ui-01, ui-bg 100%)",children:(0,t.jsx)(K,{children:(0,t.jsx)(Z,{})})})})]})},X=r(4438),Y=!0,J=function(e){var n=e.topCollections,r=e.trendingNft,i=(0,s.$G)().t;return(0,t.jsxs)(X.Z,{children:[(0,t.jsx)(o.PB,{title:i("NFT Marketplace - Buy, Sell & Collect NFTs"),canonical:l.de.appUrl}),(0,t.jsx)(U,{trendingNft:r,topCollections:n})]})}},36687:function(e,n,r){"use strict";r.d(n,{e:function(){return x},r:function(){return h}});var t=r(98788),i=r(92228),o=r(5163),s=r(6647),l=r(79126),a=r(66842);function c(){var e=(0,i.Z)(["\n    mutation RefreshTokenMutation($tokenId: BigNumber!, $collection: Address!) {\n      refreshToken(tokenId: $tokenId, collection: $collection) {\n        success\n      }\n    }\n  "]);return c=function(){return e},e}function d(){var e=(0,i.Z)(["\n    mutation RefreshCollectionMutation($collection: Address!) {\n      refreshCollection(collection: $collection) {\n        success\n      }\n    }\n  "]);return d=function(){return e},e}var h=function(){var e=(0,t.Z)((function(e,n){var r,t;return(0,o.__generator)(this,(function(i){switch(i.label){case 0:return r=(0,s.gql)(c()),t={tokenId:n,collection:e},[4,(0,a.B)(r,t)];case 1:return[2,i.sent().refreshToken]}}))}));return function(n,r){return e.apply(this,arguments)}}(),x=function(){var e=(0,t.Z)((function(e,n){var r,t,i,c;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return r=(0,s.gql)(d()),t={collection:n},i=(0,l.w5)(e),c={Authorization:"Bearer ".concat(i)},[4,(0,a.B)(r,t,c)];case 1:return[2,o.sent().refreshCollection]}}))}));return function(n,r){return e.apply(this,arguments)}}()}},function(e){e.O(0,[6249,8928,1610,253,897,9774,2888,179],(function(){return n=87314,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=index-f8d2d629747cb263.js.map