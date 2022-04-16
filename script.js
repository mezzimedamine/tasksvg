var svg = document.querySelector("svg");

var svgWidth = parseFloat(svg.getAttributeNS(null, "width"));
var svgHeight = parseFloat(svg.getAttributeNS(null, "height"));

function scaleSVG(percent) {
  svg.setAttributeNS(null, "width", svgWidth * percent);
  svg.setAttributeNS(null, "height", svgHeight * percent);
  svg.setAttributeNS(null, "viewBox", "0 0 " + svgWidth + " " + svgHeight);
}

var inputs = document.querySelectorAll("input");

var inputPercent = inputs[0];

inputPercent.oninput = (event) => {
  var percent = parseFloat(event.target.value);

  scaleSVG(percent);
};
