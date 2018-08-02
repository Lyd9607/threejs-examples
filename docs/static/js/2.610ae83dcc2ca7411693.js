webpackJsonp([2],{"8uR8":function(e,t){},eIDq:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={makeShape:function(){var e;if(window.THREE&&arguments.length){var t=arguments[0];(e=new THREE.Shape).moveTo(t[0][0],t[0][1]);for(var a=1;a<t.length;a++)e.lineTo(t[a][0],t[a][1]);if(arguments.length>1)for(a=1;a<arguments.length;a++){var o=arguments[a],r=new THREE.Path;r.moveTo(o[0][0],o[0][1]);for(a=1;a<o.length;a++)r.lineTo(o[a][0],o[a][1]);e.holes.push(r)}return e}console.error("Something wrong!")},makeExtrudeGeometry:function(e,t){var a={steps:1,amount:t,bevelEnabled:!1},o=new THREE.ExtrudeBufferGeometry(e,a);return o.rotateX(-.5*Math.PI),o},makeShapeGeometry:function(e){var t=this.makeShape(e);return new THREE.ShapeGeometry(t)},makeMesh:function(e,t,a){var o,r;return"lambert"===e?o=new THREE.MeshLambertMaterial({color:a}):"phong"===e?o=new THREE.MeshPhongMaterial({color:a}):console.error("unrecognized type!"),(r=new THREE.Mesh(t,o)).castShadow=!0,r.receiveShadow=!0,r}},r=function(e){var t=[2931378,4695808,14024704,556935,3648782,5066061,13532672,14721555,8895710],a=Math.floor(Math.random()*t.length);this.color=e||t[a],this.mesh=new THREE.Object3D,this.wheels=[],this.startAngle=0;var r=this;function n(e){var t=o.makeShape(e),a=o.makeExtrudeGeometry(t,.1);a.rotateX(.5*Math.PI);var r=o.makeMesh("phong",a,0);return r.castShadow=!1,r}!function(){var e=o.makeShape([[-13,2],[13,2],[13,8],[5,8],[3,13],[-8,13],[-10,8],[-13,8],[-13,2]]),t=o.makeExtrudeGeometry(e,14);t.translate(0,-7,0),t.rotateX(.5*Math.PI);var a=o.makeMesh("phong",t,r.color);r.mesh.add(a)}(),function(){var e=new THREE.Object3D,t=new THREE.Object3D,a=n([[-2,8],[4,8],[2.5,12],[-2,12]]);t.add(a);var i=n([[-9,8],[-3,8],[-3,12],[-7.5,12]]);t.add(i),t.position.z=7.1,e.add(t);var s=t.clone();s.position.z=-7.1,e.add(s);var h=new THREE.CubeGeometry(.1,5,12);h.rotateZ(.12*Math.PI),h.translate(4.2,10,0);var m=o.makeMesh("phong",h,0);e.add(m);var d=m.clone();d.rotation.z=-.24*Math.PI,d.position.x=-19,d.position.y=6,e.add(d),r.mesh.add(e)}(),function(){var e=new THREE.Geometry,t=new THREE.BoxGeometry(2,2,2);[[12.5,7.1,6.1],[12.5,7.1,-6.1],[-14,7.1,6.1],[-14,7.1,-6.1]].forEach(function(a){var o=a[0],r=a[1],n=a[2],i=t.clone();i.translate(o,r,n),e.merge(i)});var a=t.clone();a.scale(1,1.3,7.1),a.translate(12.1,3.3,0),e.merge(a);var n=a.clone();n.translate(-26,0,0),e.merge(n),e=(new THREE.BufferGeometry).fromGeometry(e);var i=o.makeMesh("phong",e,16777215);r.mesh.add(i)}(),function(){var e=i();e.position.set(8,3,-6),r.wheels.push(e),r.mesh.add(e);var t=i();t.position.set(8,3,6),r.wheels.push(t),r.mesh.add(t);var a=i();a.position.set(-8,3,6),r.wheels.push(a),r.mesh.add(a);var n=i();function i(){var e=new THREE.Object3D,t=new THREE.CylinderGeometry(3,3,3,32);t.rotateX(.5*Math.PI);var a=o.makeMesh("lambert",t,0);e.add(a);var r=o.makeMesh("lambert",t,14540253);r.castShadow=!1,r.scale.set(.8,.8,1.1),e.add(r);var n=new THREE.CylinderGeometry(1,1,3.6,4);n.rotateX(.5*Math.PI);var i=o.makeMesh("lambert",n,10987431);return i.castShadow=!1,e.add(i),e}n.position.set(-8,3,-6),r.wheels.push(n),r.mesh.add(n)}()};r.prototype={setPosition:function(e,t,a){this.mesh.position.set(e,t,a)},forward:function(e){e=e||1;this._moving(e,!0)},backward:function(e){e=e||1;this._moving(e,!1)},turnLeft:function(e,t){this._turn(e,!0,t)},turnRight:function(e,t){this._turn(e,!1,t)},_turn:function(e,t,a){t=t?1:-1;if(a){if(this.startAngle<e&&(this.mesh.rotation.y+=a,this.startAngle+=a,e-this.startAngle<a)){var o=this.mesh.rotation.y-this.startAngle;return this.mesh.rotation.y=o+e,void(this.startAngle=0)}}else this.mesh.rotation.y+=e*t},_moving:function(e,t){var a=this.mesh.rotation.y,o=(t=t?1:-1,e*Math.cos(a)*t),r=e*Math.sin(a)*t;this.mesh.position.x+=o,this.mesh.position.z-=r,this._rotateWheels(e)},_rotateWheels:function(e){this.wheels.forEach(function(t){t.rotation.z-=.1*e})}};var n=r,i={window:function(){var e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32;var a="#3c3443",o="#9d94a7",r="#796e8c";t.fillStyle=a,t.fillRect(0,0,32,32),t.fillStyle=o,t.fillRect(2,2,13,13),t.fillStyle=o,t.fillRect(17,2,13,13),t.fillStyle=r,t.fillRect(2,17,13,13),t.fillStyle=r,t.fillRect(17,17,13,13);var n=new THREE.Texture(e);return n.wrapS=THREE.RepeatWrapping,n.wrapT=THREE.RepeatWrapping,n.needsUpdate=!0,n}},s={name:"HelloWorld",data:function(){return{workList:[{link:"",img:""},{link:"/mini-city",img:"/static/img/threejs-example-mini-city.png"},{link:"",img:""},{link:"/jump",img:"/static/img/threejs-example-jump.png"},{link:"",img:""},{link:"/mall",img:"/static/img/threejs-example-mall.png"}]}},mounted:function(){var e,t,a,r,s,h,m=[],d={isMobile:!1,background:2631720};r=window.innerWidth,s=window.innerHeight,e=new THREE.Scene,(t=new THREE.PerspectiveCamera(45,r/s,1,5e3)).position.set(330,330,330),t.lookAt(e.position),(a=new THREE.WebGLRenderer({antialias:!0})).setSize(r,s),a.setClearColor(d.background),a.shadowMap.enabled=!0,a.shadowMap.type=THREE.PCFSoftShadowMap,document.body.appendChild(a.domElement),((h=navigator.userAgent).match(/Android/i)||h.match(/webOS/i)||h.match(/iPhone/i)||h.match(/iPad/i)||h.match(/iPod/i)||h.match(/BlackBerry/i))&&(d.isMobile=!0,t.position.set(420,420,420),a.shadowMap.enabled=!1),function(){var o=new THREE.GridHelper(320,32);e.add(o);var r=new THREE.OrbitControls(t,a.domElement);r.enableDamping=!0,r.dampingFactor=.25,r.rotateSpeed=.35}(),function(){if(d.isMobile){var t=new THREE.HemisphereLight(16777215,1);e.add(t);var a=new THREE.AmbientLight(16777215,.15);e.add(a)}else{var o=new THREE.DirectionalLight(16777215,1.1);o.position.set(300,1e3,500),o.target.position.set(0,0,0),o.castShadow=!0;var r=300;o.shadow.camera=new THREE.OrthographicCamera(-r,r,r,-r,500,1600),o.shadow.bias=1e-4,o.shadow.mapSize.width=o.shadow.mapSize.height=1024,e.add(o);var a=new THREE.AmbientLight(16777215,.3);e.add(a)}}(),function(){var t=new THREE.BoxBufferGeometry(320,6,320),a=o.makeMesh("lambert",t,7298922);function r(){var e=new THREE.Object3D,t=new THREE.BoxBufferGeometry(180,3,140),a=o.makeMesh("lambert",t,16777215);a.position.y=1,e.add(a);var r=o.makeShape([[-80,-30],[-80,20],[50,20],[50,0],[20,-30],[-80,-30]]),n=o.makeExtrudeGeometry(r,100),s=new THREE.MeshPhongMaterial({map:i.window()});s.map.repeat.set(.1,.08);var h=new THREE.Mesh(n,s);h.castShadow=!0,h.receiveShadow=!0,e.add(h);var m=r,d=o.makeExtrudeGeometry(m,5),l=o.makeMesh("lambert",d,11642799);l.position.y=100,e.add(l);for(var E=new THREE.Geometry,c=new THREE.BoxGeometry(2,2,40),p=0;p<12;p++){var u=c.clone();u.translate(5*p,0,0),E.merge(u)}for(var p=0;p<2;p++){var u=c.clone();u.rotateY(.5*Math.PI),u.scale(1.6,1,1),u.translate(27,0,30*p-15),E.merge(u)}for(var v=[[0,0],[1,0],[0,1],[1,1]],p=0;p<v.length;p++){var f=v[p],u=c.clone();u.scale(1,1,.4),u.rotateX(.5*Math.PI),u.translate(55*f[0],0,30*f[1]-15),E.merge(u)}E=(new THREE.BufferGeometry).fromGeometry(E);var w=o.makeMesh("phong",E,16777215);w.position.set(-70,115,5),e.add(w);var y=new THREE.BoxBufferGeometry(150,3,90),g=o.makeMesh("lambert",y,496293);g.position.set(-3,18,25),e.add(g);var M=new THREE.BoxBufferGeometry(150,15,3),R=o.makeMesh("phong",M,496293);R.receiveShadow=!1,R.position.set(-3,24,68.5),e.add(R);var k=new THREE.BoxBufferGeometry(150,3,3),T=o.makeMesh("phong",k,16777215);T.position.set(-3,33,68.5),e.add(T);var H=new THREE.CylinderGeometry(2,2,15,32),b=o.makeMesh("lambert",H,16777215);b.position.set(-60,10,55),e.add(b);var G=b.clone();G.position.set(55,10,55),e.add(G);var P=new THREE.Object3D,x=new THREE.BoxBufferGeometry(4,106,4),S=o.makeMesh("phong",x,16777215),I=S.clone();I.position.set(-80,52,30),P.add(I);var B=S.clone();B.position.set(-80,52,-20),P.add(B);var j=S.clone();j.position.set(50,52,-18),P.add(j),e.add(P);var C=o.makeShape([[-82,-32],[20,-32],[52,0],[52,22],[-82,22],[-82,-32]],[[-78,-28],[20,-28],[48,0],[48,18],[-78,18],[-78,-28]]),_=o.makeExtrudeGeometry(C,8),z=o.makeMesh("phong",_,16777215);z.position.y=100,e.add(z);var L=o.makeShape([[-80,20],[-80,60],[80,60],[80,20],[-80,20]],[[-78,22],[78,22],[78,58],[-78,58],[-78,22]]),O=o.makeExtrudeGeometry(L,90),D=o.makeMesh("lambert",O,15917595);e.add(D);var A=o.makeShape([[0,0],[36,0],[36,70],[0,70],[0,0]],[[2,2],[34,2],[34,68],[2,68],[2,2]]),W=o.makeExtrudeGeometry(A,165),X=o.makeMesh("lambert",W,16777215);X.rotation.x=-.5*Math.PI,X.rotation.z=-.5*Math.PI,X.position.y=86,X.position.z=-58,X.position.x=-78,e.add(X);var F=new THREE.PlaneGeometry(32,66,1,1),Y=new THREE.MeshPhongMaterial({map:i.window()});Y.map.repeat.set(2,6);var q=new THREE.Mesh(F,Y);q.position.set(83,51,-40),q.rotation.y=.5*Math.PI,e.add(q);var J=function(){var e=new THREE.Object3D,t=new THREE.PlaneGeometry(20,20),a=o.makeMesh("phong",t,6970996);e.add(a);var r=new THREE.BoxBufferGeometry(22,2,2),n=o.makeMesh("phong",r,16777215),i=n.clone();i.position.y=10,e.add(i);var s=n.clone();s.position.y=-10,e.add(s);var h=n.clone();h.rotation.z=.5*Math.PI,h.position.x=-10,e.add(h);var m=h.clone();return m.position.x=10,e.add(m),e}();J.scale.set(.6,.6,1),J.rotation.y=Math.PI,J.position.set(65,75,-61);for(var p=0;p<7;p++)for(var U=0;U<4;U++){var $=J.clone();$.position.x-=22*p,$.position.y-=20*U,e.add($)}return e}a.position.y=-3,e.add(a),d=o.makeShape([[-130,-130],[-130,130],[130,130],[130,-130],[20,-130],[20,-120],[120,-120],[120,120],[-120,120],[-120,-120],[-20,-120],[-20,-130],[-130,-130]]),l=o.makeExtrudeGeometry(d,3),E=o.makeMesh("lambert",l,15059647),e.add(E),s=o.makeShape([[-120,-120],[-120,120],[120,120],[120,-120],[20,-120],[20,-100],[100,-100],[100,100],[-100,100],[-100,-100],[-20,-100],[-20,-120],[-120,-120]]),h=o.makeExtrudeGeometry(s,3),m=o.makeMesh("lambert",h,12632170),e.add(m),[[-110,-110],[-90,-110],[-70,-110],[-50,-110],[-30,-110],[-10,-110],[10,-110],[30,-110],[50,-110],[70,-110],[90,-110],[-110,110],[-110,90],[-110,70],[-110,50],[-110,30],[-110,10],[-110,-10],[-110,-30],[-110,-50],[-110,-70],[-110,-90],[110,110],[90,110],[70,110],[50,110],[30,110],[-30,110],[-50,110],[-70,110],[-90,110],[110,-110],[110,-90],[110,-70],[110,-50],[110,-30],[110,-10],[110,10],[110,30],[110,50],[110,70],[110,90]].forEach(function(t){var a=t[0],r=t[1],n=function(e,t,a){var e=e||0,t=t||0,a=a||0,r=new THREE.Object3D,n=new THREE.BoxBufferGeometry(2,16,2),i=o.makeMesh("lambert",n,9068858);i.position.y=8,r.add(i);var s=new THREE.BoxBufferGeometry(8,8,8),h=o.makeMesh("lambert",s,10264157);return h.position.y=13,r.add(h),r.position.set(e,t,a),r}(a,1,r);e.add(n)}),n=r(),n.position.z=-20,e.add(n),[[-12.5,12.5,1.25],[-7.5,12.5,-.5],[-2.5,12.5,-.5],[2.5,12.5,-.5],[7.5,12.5,-.5],[12.5,12.5,-.25],[12.5,7.5,0],[12.5,2.5,0],[12.5,-2.5,0],[12.5,-7.5,0],[12.5,-12.5,.25],[7.5,-12.5,.5],[2.5,-12.5,.5],[-2.5,-12.5,.5],[-7.5,-12.5,.5],[-12.5,-12.5,.75],[-12.5,-7.5,1],[-12.5,-2.5,1],[-12.5,2.5,1],[-12.5,7.5,1]].forEach(function(t){var a=10*t[0],r=10*t[1],n=t[2],i=function(){var e=new THREE.Object3D,t=new THREE.CubeGeometry(2,30,2);t.translate(0,15,0);var a=o.makeMesh("phong",t,15454658);e.add(a);var r=new THREE.CubeGeometry(10,1,1),n=o.makeMesh("phong",r,2887182);n.position.set(3,30,0),e.add(n);var i,s=new THREE.CubeGeometry(6,2,4);return(i=o.makeMesh("phong",s,15454658)).position.set(10,30,0),e.add(i),e}();i.rotation.y=n*Math.PI,i.position.set(a,0,r),e.add(i)});var n;var s,h,m;var d,l,E}(),function(){var t=new THREE.Object3D,a=o.makeShape([[-160,160],[160,160],[160,-160],[-160,-160]],[[-159,159],[-159,-159],[159,-159],[159,159]]),r=o.makeExtrudeGeometry(a,.1),n=o.makeMesh("phong",r,16777215);t.add(n);var i=o.makeShape([[-131,131],[-131,-131],[131,-131],[131,131],[19,131],[19,99],[99,99],[99,-99],[-99,-99],[-99,99],[-19,99],[-19,131]]),s=o.makeExtrudeGeometry(i,.1),h=o.makeMesh("phong",s,16777215);h.rotation.y=Math.PI,t.add(h);for(var m=new THREE.Geometry,d=new THREE.BoxGeometry(20,.1,2),l=new THREE.Geometry,E=0;E<9;E++){var c=d.clone();c.translate(30*E,0,-1),l.merge(c)}l.translate(-120,0,145),m.merge(l);var p=l.clone();p.translate(0,0,-290),m.merge(p);var u=l.clone();u.rotateY(.5*Math.PI),m.merge(u);var v=l.clone();v.rotateY(-.5*Math.PI),m.merge(v),m=(new THREE.BufferGeometry).fromGeometry(m);var f=o.makeMesh("phong",m,16777215);t.add(f),e.add(t)}(),[[-84,82,1.5],[-58,82,1.5],[-32,82,1.5],[84,82,1.5]].forEach(function(t){var a=new n,o=t[0],r=t[1],i=t[2];a.setPosition(o,0,r),a.mesh.rotation.y=i*Math.PI,e.add(a.mesh)}),[[-130,145,0],[10,145,0],[145,20,.5],[30,-145,1],[-145,-60,1.5]].forEach(function(t){var a=new n,o=t[0],r=t[1],i=t[2];a.setPosition(o,0,r),a.mesh.rotation.y=i*Math.PI,m.push(a),e.add(a.mesh)}),function o(){m.forEach(function(e){!function(e){var t=e.mesh.rotation.y,a=e.mesh.position.x,o=e.mesh.position.z;a<145&&145===o?e.forward():t<.5*Math.PI?e.turnLeft(.5*Math.PI,.1):145===a&&o>-145?e.forward():t<Math.PI?e.turnLeft(.5*Math.PI,.1):a>-145&&-145==o?e.forward():t<1.5*Math.PI?e.turnLeft(.5*Math.PI,.1):-145===a&&o<145?(e.mesh.rotation.y=1.5*Math.PI,e.forward()):t<2*Math.PI?e.turnLeft(.5*Math.PI,.1):(e.setPosition(-145,0,145),e.mesh.rotation.set(0,0,0))}(e)});a.render(e,t);requestAnimationFrame(o)}(),window.addEventListener("resize",function(){r=window.innerWidth,s=window.innerHeight,t.aspect=r/s,t.updateProjectionMatrix(),a.setSize(r,s)})}},h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("a",{staticClass:"title",attrs:{href:"https://github.com/luosijie/threejs-examples",target:"_blank"}},[this._v("\n        Mini City\n    ")]),this._v(" "),t("a",{staticClass:"author",attrs:{href:"https://luosijie.github.io/",target:"_blank"}},[this._v("\n        Created By Jesse Luo\n    ")])])}]};var m=a("VU/8")(s,h,!1,function(e){a("8uR8")},"data-v-320bbcfe",null);t.default=m.exports}});
//# sourceMappingURL=2.610ae83dcc2ca7411693.js.map