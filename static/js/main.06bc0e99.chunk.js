(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"stewie1","src":"http://images1.fanpop.com/images/image_uploads/Mayor-Adam-West-gets-married-family-guy-1239873_350_393.jpg"},{"id":2,"name":"herbert","src":"https://sottai.files.wordpress.com/2010/04/herbert-family-guy.jpg"},{"id":3,"name":"carter","src":"https://i.pinimg.com/originals/b7/5e/bb/b75ebba8e88fc3c338a82bb1876643e9.jpg"},{"id":4,"name":"joe","src":"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-family-guy-Patrick-Warburton.jpg"},{"id":5,"name":"cleaveland","src":"http://tvmedia.ign.com/tv/image/article/983/983954/the-cleveland-show-20090518102435682_640w.jpg"},{"id":6,"name":"quagmire","src":"https://th.bing.com/th/id/OIP.dC9dzQRiqbgBv3AKPh8oJQHaEj?pid=Api&rs=1"},{"id":7,"name":"chris","src":"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-family-guy-seth-green.jpg"},{"id":8,"name":"meg","src":"https://cdn.playbuzz.com/cdn/d15ae92b-2b48-46ea-af1a-4d778d65a0f9/87db10f1-2d6a-4e32-8808-ed4edb7dc671.jpg"},{"id":9,"name":"brian","src":"http://i3.kym-cdn.com/entries/icons/facebook/000/014/362/brian_griffin.jpg"},{"id":10,"name":"peter","src":"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-family-guy-sethm-glenn-quagmire.jpg"},{"id":11,"name":"lois","src":"https://th.bing.com/th/id/OIP.2OlQ2ZxKUQnnQpngjaNRBQHaFj?pid=Api&rs=1"},{"id":12,"name":"stewie2","src":"https://www.freevector.com/uploads/vector/preview/11622/FreeVector-Stewie-Griffin.jpg"}]')},,,,,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(3),s=t.n(n),i=(t(13),t(14),t(4)),o=t(5),l=t(7),m=t(6),d=t(1);function u(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("a",{href:"#"},"Clicky Game"),r.a.createElement("a",{href:"#"},e.guess),r.a.createElement("a",{href:"#"},"Score: ",r.a.createElement("span",null,e.value)," | Top Score: ",r.a.createElement("span",null,e.top))))}function p(e){return r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:e.img,onClick:function(){return e.handleScoring(e.id)},className:"card-img-top",alt:"..."})))}function h(){return r.a.createElement("div",null,r.a.createElement("div",{style:{backgroundImage:"url('https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_1280.jpg ')",color:"white"},className:"jumbotron .jumbotron-fluid .container-fluid "},r.a.createElement("h1",{className:"display-4"},"Clicky Game!"),r.a.createElement("p",{className:"lead"},r.a.createElement("i",null,"Family Guy Edition")),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"Click on an image to earn points, but don't click on the same image twice!")))}var f=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(e=a.call.apply(a,[this].concat(r))).state={characters:d,score:0,topScore:0,guessed:"",characterId:[]},e.incrementScore=function(a){var t=e.state.score+1;e.setState({score:t,guessed:"You Guessed Correctly!"}),e.state.characterId.push(a),t>=e.state.topScore&&e.setState({topScore:t})},e.resetGame=function(){e.setState({characterId:[]}),e.setState({guessed:"You Guessed Incorrectly!"}),e.setState({score:0})},e.handleScoring=function(a){for(var t,c,r=d.length;0!==r;)c=Math.floor(Math.random()*r),t=d[r-=1],d[r]=d[c],d[c]=t;e.setState({characters:d}),e.state.characterId.includes(a)?e.resetGame():e.incrementScore(a)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u,{value:this.state.score,top:this.state.topScore,guess:this.state.guessed}),r.a.createElement(h,null),r.a.createElement("div",{className:"row row-cols-1 row-cols-md-3 card-columns"},this.state.characters.map((function(a){return r.a.createElement(p,{img:a.src,key:a.id,id:a.id,handleScoring:e.handleScoring})}))))}}]),t}(c.Component);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.06bc0e99.chunk.js.map