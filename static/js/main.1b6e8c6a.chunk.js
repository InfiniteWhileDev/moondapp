(this.webpackJsonphashlips_nft_minting_dapp_fazelpejmanfar=this.webpackJsonphashlips_nft_minting_dapp_fazelpejmanfar||[]).push([[0],{378:function(n,e){},382:function(n,e){},383:function(n,e){},387:function(n,e){},388:function(n,e){},414:function(n,e){},416:function(n,e){},430:function(n,e){},432:function(n,e){},447:function(n,e){},466:function(n,e){},468:function(n,e){},486:function(n,e){},487:function(n,e){},558:function(n,e){},560:function(n,e){},566:function(n,e){},578:function(n,e){},581:function(n,e){},586:function(n,e){},822:function(n,e,t){},823:function(n,e,t){"use strict";t.r(e);var i,a,o,r,c,p,s,x,d,l,b,h,u,f,g,m,j,w,O,y,v,C,k,S,E,A,T,_,z,N,M,F,I,D,P,R,L,U,K,H,X,W,Y,B,q,G=t(0),Q=t.n(G),J=t(46),V=t.n(J),Z=t(48),$=t(22),nn=t(5),en=t(18),tn=t.n(en),an=t(39),on=t(92),rn=t.n(on),cn=t(106),pn=t.n(cn),sn=t(108),xn=t(345),dn=t(20),ln={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},bn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ln,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(dn.a)(Object(dn.a)({},ln),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(dn.a)(Object(dn.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(dn.a)(Object(dn.a)({},ln),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(dn.a)(Object(dn.a)({},n),{},{account:e.payload.account});default:return n}},hn={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},un=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:hn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(dn.a)(Object(dn.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(dn.a)(Object(dn.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(dn.a)(Object(dn.a)({},hn),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},fn=Object(sn.b)({blockchain:bn,data:un}),gn=[xn.a],mn=Object(sn.c)(sn.a.apply(void 0,gn)),jn=Object(sn.d)(fn,mn),wn=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},On=function(){return function(){var n=Object(Z.a)(tn.a.mark((function n(e){var t;return tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,jn.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),e(wn("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},yn=function(n){return{type:"CONNECTION_FAILED",payload:n}},vn=function(){return function(){var n=Object(Z.a)(tn.a.mark((function n(e){var t,i,a,o,r,c,p,s,x,d,l,b;return tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return i=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=n.sent,n.next=12,a.json();case 12:if(o=n.sent,r=window,c=r.ethereum,!(c&&c.isMetaMask)){n.next=50;break}return rn.a.setProvider(c),p=new pn.a(c),n.prev=18,n.next=21,c.request({method:"eth_requestAccounts"});case 21:return s=n.sent,n.next=24,c.request({method:"net_version"});case 24:if(n.sent!=o.NETWORK.ID){n.next=33;break}x=new rn.a(i,o.CONTRACT_ADDRESS),d=new rn.a(i,o.TOKEN),e({type:"CONNECTION_SUCCESS",payload:{account:s[0],smartContract:x,smartToken:d,web3:p}}),c.on("accountsChanged",(function(n){e(Cn(n[0]))})),c.on("chainChanged",(function(){window.location.reload()})),n.next=43;break;case 33:return l=o.NETWORK.ID,b=pn.a.utils.toHex(l.toString()),n.prev=35,n.next=38,c.request({method:"wallet_switchEthereumChain",params:[{chainId:b}]});case 38:n.next=43;break;case 40:n.prev=40,n.t0=n.catch(35),4902===n.t0.code&&e(yn("Please Add ".concat(o.NETWORK.NAME," Network to your Metamask.")));case 43:n.next=48;break;case 45:n.prev=45,n.t1=n.catch(18),e(yn("Something went wrong."));case 48:n.next=51;break;case 50:e(yn("Install Metamask."));case 51:case"end":return n.stop()}}),n,null,[[18,45],[35,40]])})));return function(e){return n.apply(this,arguments)}}()},Cn=function(n){return function(){var e=Object(Z.a)(tn.a.mark((function e(t){return tn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(On());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},kn=t(6),Sn=kn.b.div(i||(i=Object(nn.a)(["\n  background-color: #fff;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),En=kn.b.div(a||(a=Object(nn.a)(["\n  height: 8px;\n  width: 8px;\n"]))),An=kn.b.div(o||(o=Object(nn.a)(["\n  height: 16px;\n  width: 16px;\n"]))),Tn=kn.b.div(r||(r=Object(nn.a)(["\n  height: 24px;\n  width: 24px;\n"]))),_n=kn.b.div(c||(c=Object(nn.a)(["\n  height: 32px;\n  width: 32px;\n"]))),zn=kn.b.div(p||(p=Object(nn.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),Nn=kn.b.div(s||(s=Object(nn.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: center;\n  justify-content: center;\n  align-items: center;\n  //border: 2px solid #A673EF;\n  border-radius: 10px;\n  //box-shadow: 0px 0px 3px 0px #A673EF;\n"])),(function(n){var e=n.flex;return e||0})),Mn=(kn.b.p(x||(x=Object(nn.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 60px;\n  font-weight: 400;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  text-align: center;\n  @media (max-width: 565px) {\n    font-size: 25px;\n    text-align: center;\n    letter-spacing: 2px;\n  }\n"]))),kn.b.p(d||(d=Object(nn.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 24px;\n  font-weight: 400;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    letter-spacing: 2px;\n  }\n"])))),Fn=kn.b.p(l||(l=Object(nn.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 0.75rem;\n    letter-spacing: 2px;\n  }\n"]))),In=(kn.b.p(b||(b=Object(nn.a)(["\n  font-family: 'Upheaval';\n  color: white;\n  font-size: 3rem;\n  font-weight: bold;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  border: 2px solid midnightblue;\n  width: 400px;\n  background: #9DC5F0;\n  text-align: center;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    letter-spacing: 2px;\n    width: 200px;\n  }\n"]))),kn.b.p(h||(h=Object(nn.a)(["\n  color: var(--primary-text);\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 0.75rem;\n    letter-spacing: 2px;\n    text-align: center;\n  }\n"])))),Dn=kn.b.p(u||(u=Object(nn.a)(["\n  color: var(--primary-text);\n  font-size: 60px;\n  line-height: 1.6;\n"]))),Pn=kn.b.p(f||(f=Object(nn.a)(["\n  color: var(--primary-text);\n  font-size: 30px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    line-height: 0;\n  }\n"]))),Rn=(kn.b.div(g||(g=Object(nn.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),kn.b.hr(m||(m=Object(nn.a)(["\n  border: 2px solid white;  \n  background-color: white;\n  border-radius: 2px;\n  width: 450px;\n  @media (max-width: 565px) {\n    width: 350px;\n  }\n"]))),kn.b.a(j||(j=Object(nn.a)(["\n  color: var(--primary-text);\n  text-decoration: none;\n  margin-right: 5rem;\n  cursor: pointer;\n  :hover {\n    color: #FF8938;\n  }\n  @media (max-width: 565px) {\n    margin-right: 0.75rem;\n    margin-top: 1rem;\n  }\n"]))),kn.b.img(w||(w=Object(nn.a)(["\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin-right: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    :hover {\n      transform: scale(1.5);\n      transition: transform 0.5s;\n    }\n"]))),kn.b.div(O||(O=Object(nn.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 3.5rem;\n@media (max-width: 565px) {\n  margin-right: 0;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  flex-direction: column;\n}\n"]))),kn.b.div(y||(y=Object(nn.a)(["\ndisplay: flex;\nalign-items: center;\n@media (max-width: 565px) {\n  margin-right: 0;\n  margin-top: 20px;\n  flex-direction: row;\n}\n"]))),kn.b.div(v||(v=Object(nn.a)(["\n    display: flex;\n    align-items: center;\n    @media (max-width: 565px) {\n      margin-top: 10px;\n      margin-bottom: 10px;\n    }\n"]))),kn.b.div(C||(C=Object(nn.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: center;;\n  align-items: center;\n  background-color: ",";\n  width: 100%;\n  margin-top: 5%;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){return n.test?"pink":"none"})),kn.b.p(k||(k=Object(nn.a)(["\ntext-align: center;\nfont-size: 1rem;\nletter-spacing: 1px;\nline-height: 2;\nwidth: 70%;\n"]))),kn.b.button(S||(S=Object(nn.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 40px;\n  border: none;\n  background: linear-gradient(86.57deg, #D8AE43 6.92%, rgba(255, 92, 0, 0.79) 100.73%);\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),kn.b.div(E||(E=Object(nn.a)(["\n  display: flex;\n  background: #171717;\n  border-radius: 40px;\n  width: max-content;\n  margin-top: 5%;\n  align-items: center;\n    justify-content: center;\n    @media (max-width: 565px) {\n      width: 100%;\n    }\n"]))),kn.b.div(A||(A=Object(nn.a)(["\n  display: flex;\n  margin-top: 5%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 5%;\n  @media (max-width: 565px) {\n    flex-direction: column;\n  }\n"]))),kn.b.div(T||(T=Object(nn.a)(["\nheight: 120px;\nwidth: 250px;\nborder-radius: 20px;\nbackground: #171717;\npadding: 10px;\n@media (max-width: 565px) {\n  margin-top: 10px;\n}\n:hover {\n  transform: scale(1.2);\n}\n\n"]))),kn.b.div(_||(_=Object(nn.a)(["\n    flex-direction: row;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n    padding: 10px;\n"]))),kn.b.img(z||(z=Object(nn.a)(["\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"]))),kn.b.p(N||(N=Object(nn.a)(["\ntext-align: left;\nwidth: 125px;\nfont-size: 1rem;\n"]))),kn.b.p(M||(M=Object(nn.a)(["\ntext-align: left;\nfont-size: 0.75rem;\n"]))),kn.b.div(F||(F=Object(nn.a)(["\nwidth: 30%;\n@media (max-width: 565px) {\n  width: 80%;\n}\n"]))),t(683),t(684),t(830)),Ln=t(831),Un=t(832),Kn=t(833),Hn=t(1),Xn=kn.b.button(I||(I=Object(nn.a)(["\n  font-family: 'Press Start 2P';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),Wn=kn.b.button(D||(D=Object(nn.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),Yn=kn.b.button(P||(P=Object(nn.a)(["\n  font-family: 'coder';\n  font-size: 0.75rem;\n  border-radius: 10px;\n  background-color: #F48C2C;\n  font-weight: bold;\n  color: white;\n  width: 80px;\n  height: 30px;\n  cursor: pointer;\n  letter-spacing: 2px;\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),Bn=kn.b.button(R||(R=Object(nn.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: transparent;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 30px;\n  color: white;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n"]))),qn=(kn.b.div(L||(L=Object(nn.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nalign-content: center;\ngap: 10%;\nwidth: 300px;\n"]))),kn.b.div(U||(U=Object(nn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: center;\n  margin: auto;\n  width: 70%;\n  border: 4px solid black;\n  border-radius: 20px;\n  background: #2d2b2d;\n    @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"])))),Gn=kn.b.div(K||(K=Object(nn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-height: 80px;\n  padding: 10px;\n  background-color : #252525;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n  @media (max-width: 565px) {\n    max-height: 220px;\n  }\n"]))),Qn=(kn.b.img(H||(H=Object(nn.a)(["\n  display: inline;\n  width: 200px;\n  @media (max-width: 767px) {\n    width: 150px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),kn.b.img(X||(X=Object(nn.a)(["\n  width: 450px;\n  border-radius: 5px;\n  @media (min-width: 900px) {\n    width: 450px;\n  }\n  @media (min-width: 1000px) {\n    width: 450px;\n  }\n  transition: width 0.5s;\n  @media (max-width: 565px) {\n    width: 200px;\n  }\n"]))),kn.b.img(W||(W=Object(nn.a)(["\n  width: 100%;\n  border-radius: 5px;\n  transition: width 0.5s;\n"]))),kn.b.img(Y||(Y=Object(nn.a)(["\n  width: 220px;\n  height: 220px;\n  border-radius: 5px;\n  @media (min-width: 900px) {\n    width: 220px;\n    height: 220px;\n  }\n  @media (min-width: 1000px) {\n    width: 220px;\n    height: 220px;\n  }\n  transition: width 0.5s;\n  @media (max-width: 565px) {\n    width: 200px;\n  }\n"]))),kn.b.a(B||(B=Object(nn.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])))),Jn=kn.b.div(q||(q=Object(nn.a)(["\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid white;\n  background-color: transparent;\n  //padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 180px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px white;\n  -webkit-box-shadow: 0px 4px 0px -2px white;\n  -moz-box-shadow: 0px 4px 0px -2px white;\n  @media (max-width: 565px) {\n    margin-top: 20px;\n  \n"])));var Vn,Zn,$n,ne,ee,te,ie,ae,oe=function(){var n=Object(an.b)(),e=Object(an.c)((function(n){return n.blockchain})),t=Object(an.c)((function(n){return n.data})),i=Object(G.useState)("Not Connected"),a=Object($.a)(i,2),o=a[0],r=a[1],c=Object(G.useState)(!1),p=Object($.a)(c,2),s=p[0],x=p[1],d=Object(G.useState)(""),l=Object($.a)(d,2),b=l[0],h=l[1],u=Object(G.useState)(1),f=Object($.a)(u,2),g=f[0],m=f[1],j=Object(G.useState)("2px solid #FFFFFF"),w=Object($.a)(j,2),O=w[0],y=w[1],v=Object(G.useState)("0px 0px 3px 0px #FFFFFF"),C=Object($.a)(v,2),k=C[0],S=C[1],E=Object(G.useState)("red"),A=Object($.a)(E,2),T=A[0],_=A[1],z=Q.a.useState("info"),N=Object($.a)(z,2),M=(N[0],N[1],Q.a.useState("topStart")),F=Object($.a)(M,2),I=F[0],D=(F[1],Object(Hn.jsx)(Rn.a,{type:"error",header:"error",closable:!0,children:"Sorry, something went wrong please try again later."})),P=Object(Hn.jsx)(Rn.a,{type:"success",header:"success",closable:!0,children:"Congrats, Mint Was successfull."}),R=Object(Hn.jsxs)(Rn.a,{type:"info",header:"success",closable:!0,children:[Object(Hn.jsx)(Un.a,{})," Minting in Progress...."]}),L=Object(G.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,DISPLAY_COST:0,WL_Display:0,GAS_LIMIT:0,MAX_PER_TX:0,MARKETPLACE:"",MARKETPLACE_LINK:"",Telegram:"",Discord:"",Twitter:"",SHOW_BACKGROUND:!1}),U=Object($.a)(L,2),K=U[0],H=U[1],X=function(){""!==e.account&&null!==e.smartContract&&(n(On(e.account)),r(e.account.substring(0,4)+"..."+e.account.substring(38,42)),_("green"))},W=function(){return console.log("TOTAL SUPPLY",t.totalSupply),parseInt(t.totalSupply)+parseInt(g)<=5?0:parseInt(t.totalSupply)>=5?.0088*parseInt(g):.0088*(parseInt(g)-(parseInt(g)-parseInt(t.totalSupply)))},Y=function(){var n=Object(Z.a)(tn.a.mark((function n(){var e,t;return tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,H(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(G.useEffect)((function(){Y()}),[]),Object(G.useEffect)((function(){X()}),[e.account]),Object(Hn.jsx)(Sn,{children:Object(Hn.jsxs)(zn,{flex:1,children:[Object(Hn.jsx)(Gn,{children:Object(Hn.jsx)(Jn,{children:""!==e.account?Object(Hn.jsx)(Hn.Fragment,{children:Object(Hn.jsxs)(In,{style:{fontSize:"1rem",color:"white"},children:[Object(Hn.jsx)(Kn.a,{color:T})," ",o]})}):null})}),Object(Hn.jsx)(_n,{}),Object(Hn.jsx)(An,{}),Object(Hn.jsxs)(qn,{flex:1,style:{padding:24},test:!0,children:[Object(Hn.jsx)(An,{}),Object(Hn.jsxs)(zn,{flex:1,jc:"center",ai:"center",children:[Number(t.totalSupply)>=K.MAX_SUPPLY?Object(Hn.jsxs)(Hn.Fragment,{children:[Object(Hn.jsx)(Mn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:"The sale has ended."}),Object(Hn.jsxs)(Dn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:["You can still find ",K.NFT_NAME," on"]}),Object(Hn.jsx)(An,{}),Object(Hn.jsx)(Qn,{target:"_blank",href:K.MARKETPLACE_LINK,children:K.MARKETPLACE})]}):Object(Hn.jsxs)(Hn.Fragment,{children:[Object(Hn.jsxs)(Mn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:[t.totalSupply," | ",K.MAX_SUPPLY]}),Object(Hn.jsx)(An,{}),Object(Hn.jsxs)(Fn,{style:{background:"white",borderRadius:5,padding:8,color:"black"},children:["First 600mints free  ",Object(Hn.jsx)("br",{}),"then 0.0089 ETH"]}),Object(Hn.jsx)(Tn,{}),""===e.account||null===e.smartContract?Object(Hn.jsx)(Hn.Fragment,{children:Object(Hn.jsxs)(zn,{ai:"center",jc:"center",children:[Object(Hn.jsx)(An,{}),Object(Hn.jsxs)(Wn,{onClick:function(e){e.preventDefault(),n(vn()),X()},children:["CONNECT",Object(Hn.jsx)("img",{style:{width:30,paddingLeft:10},src:"/config/images/mm.svg"})]}),""!==e.errorMsg?Object(Hn.jsxs)(Hn.Fragment,{children:[Object(Hn.jsx)(An,{}),Object(Hn.jsx)(Dn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder",fontSize:20},children:e.errorMsg})]}):null]})}):Object(Hn.jsxs)(Hn.Fragment,{children:[Object(Hn.jsxs)(Nn,{style:{border:O,boxShadow:k},children:[Object(Hn.jsx)(Bn,{style:{lineHeight:.4},disabled:s?1:0,onClick:function(n){n.preventDefault(),function(){var n=g-1;n<1&&(n=1),m(n)}()},children:"-"}),Object(Hn.jsxs)(Pn,{children:["\u2002\u2002\u2002\u2002",g,"\u2002\u2002\u2002\u2002"]}),Object(Hn.jsx)(Tn,{}),Object(Hn.jsx)(Bn,{disabled:s?1:0,onClick:function(n){n.preventDefault(),function(){var n=g+1;n>K.MAX_PER_TX&&(n=K.MAX_PER_TX),m(n)}()},children:"+"})]}),Object(Hn.jsx)(An,{}),Object(Hn.jsx)(Yn,{onClick:function(n){n.preventDefault(),m(K.MAX_PER_TX)},children:"SetMax"}),Object(Hn.jsx)(An,{}),Object(Hn.jsx)(An,{}),Object(Hn.jsx)(An,{}),Object(Hn.jsx)(En,{}),Object(Hn.jsx)(zn,{ai:"center",jc:"center",fd:"column",children:Object(Hn.jsx)(Xn,{disabled:s?1:0,onClick:function(t){t.preventDefault(),function(){var t=W();console.log("THIS IS HOW MICH HE WANTS",g);var i=pn.a.utils.toWei(t.toString(),"ether"),a=K.GAS_LIMIT,o=String(a);console.log("Cost: ",i),console.log("Gas limit: ",o),h("Minting your ".concat(K.NFT_NAME,"...")),x(!0),y("2px solid yellow"),S("0px 0px 3px 0px yellow"),Ln.a.push(R,{placement:I}),e.smartContract.methods.mint(g).send({gasLimit:String(o),to:K.CONTRACT_ADDRESS,from:e.account,value:i}).once("error",(function(n){console.log(n),h("Sorry, something went wrong please try again later."),x(!1),Ln.a.push(D,{placement:I}),y("2px solid red"),S("0px 0px 3px 0px red")})).then((function(t){console.log(t),h("WOW, the ".concat(K.NFT_NAME," is yours! go visit Opensea.io to view it.")),Ln.a.push(P,{placement:I}),y("2px solid green"),S("0px 0px 3px 0px green"),x(!1),n(On(e.account))}))}(),X()},children:s?Object(Hn.jsx)(Un.a,{speed:"fast",content:"Minting..."}):"MINT"})}),Object(Hn.jsx)(En,{}),Object(Hn.jsxs)(In,{style:{fontSize:15},children:["Max ",K.MAX_PER_TX," Per Tx"]}),Object(Hn.jsx)(En,{}),Object(Hn.jsx)(In,{style:{textAlign:"center",fontSize:"1rem"},children:b})]})]}),Object(Hn.jsx)(Tn,{})]}),Object(Hn.jsx)(_n,{})]}),Object(Hn.jsx)(_n,{}),Object(Hn.jsx)(Tn,{})]})})};kn.b.button(Vn||(Vn=Object(nn.a)(["\n  font-family: 'Upheaval';\n  padding: 10px;\n  font-size: 24px;\n  border-radius: 6px;\n  border: none;\n  background-color: #fff;\n  padding: 10px;\n  letter-spacing: 6px;\n  // font-weight: bold;\n  color: #7167E3;\n  width: 450px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),kn.b.button(Zn||(Zn=Object(nn.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: #fff;\n  padding: 10px;\n  // font-weight: bold;\n  font-size: 50px;\n  color: #7167E3;\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),kn.b.div($n||($n=Object(nn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  // margin: auto;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),kn.b.div(ne||(ne=Object(nn.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),kn.b.img(ee||(ee=Object(nn.a)(["\n  display: inline;\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),kn.b.img(te||(te=Object(nn.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  // border: 4px dashed var(--secondary);\n  // background-color: var(--accent);\n  // border-radius: 100%;\n  width: 300px;\n  @media (min-width: 900px) {\n    width: 350px;\n  }\n  @media (min-width: 1000px) {\n    width: 400px;\n  }\n  transition: width 0.5s;\n"]))),kn.b.a(ie||(ie=Object(nn.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))),kn.b.div(ae||(ae=Object(nn.a)(["\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid white;\n  background-color: #7167E3;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 250px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n"])));var re,ce=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,834)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),o(n),r(n)}))},pe=(t(822),t.p+"static/media/RenoMono.8b239c68.otf"),se=t.p+"static/media/upheavtt.e3d365ba.ttf",xe=Object(kn.a)(re||(re=Object(nn.a)(["\n    @font-face {\n        font-family: 'Upheaval';\n        src: url(",") format('truetype');\n    }\n\n    @font-face {\n        font-family: 'Renomono';\n        src: url(",") format('opentype');\n    }\n"])),se,pe);V.a.render(Object(Hn.jsxs)(an.a,{store:jn,children:[Object(Hn.jsx)(xe,{}),Object(Hn.jsx)(oe,{})]}),document.getElementById("root")),ce()}},[[823,1,2]]]);
//# sourceMappingURL=main.1b6e8c6a.chunk.js.map