(function () {
  function addCss(cssCode) {
    var styleElement = document.createElement("style");
    styleElement.type = "text/css";
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = cssCode;
    } else {
      styleElement.appendChild(document.createTextNode(cssCode));
    }
    document.getElementsByTagName("head")[0].appendChild(styleElement);
  }
  var css = `
.list-card-cover.js-card-cover.is-covered {
  max-height: 100px !important;
  background-size: contain !important;
  min-width: 100px;
}

a.list-card.js-member-droppable.is-covered.ui-droppable {
  display: flex;
  flex-direction: row;
}
`
  addCss(css)
})()
