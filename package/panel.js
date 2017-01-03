chrome.devtools.inspectedWindow.getResources(function(resources) {
  console.log(resources);
  resources.forEach(function(r) {
    if(r.url.endsWith('app.js')) {
      r.getContent(function(c) {
        eval(c);
        Elm.Main.fullscreen();//TODO
      });
      // var script = document.createElement('script');
      // script.id = "app";
      // script.src = r.url;
      // document.body.appendChild(script);
      // setTimeout(function() {
      //   Elm.Main.fullscreen();//TODO
      // });
    }
  });

});

// chrome.devtools.inspectedWindow.eval(
//   "$$('head script[data-elm-devtool]')[0].getAttribute('src')",
//   function(src, e) {
//     if(e) {
//       console.log(e);
//     } else {
//       var script = document.createElement('script');
//   		script.id = "app";
//   		script.src = src;
//   		document.body.appendChild(script);
//   		setTimeout(function() {
//   			Elm.Main.fullscreen();//TODO
//   		});
//     }
// 	}
// );
