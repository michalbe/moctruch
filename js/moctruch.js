MOCTRUCH = function(element, options) {
  var canvas = document.createElement('canvas');
  var img = new Image();
  var blur = options.blur || 5;
  var width = element.scrollWidth;
  var height = element.scrollHeight;
  
  var createSVG = function() {
    var doc = document.implementation.createHTMLDocument("");
    doc.write(element.innerHTML);
    doc.documentElement.setAttribute("xmlns", doc.documentElement.namespaceURI);
    var html = (new XMLSerializer).serializeToString(doc);
    
    var svg = 
      "<svg xmlns='http://www.w3.org/2000/svg' width='" + width + "' height='" + height + "'>" +
        "<defs>" +
          "<filter id='f1' x='0' y='0'>" +
            "<feGaussianBlur in='SourceGraphic' stdDeviation='" + blur + "' />" +
          "</filter>" +
        "</defs>" +
      "<foreignObject width='100%' height='100%' filter='url(#f1)'>" +
        html
      "</foreignObject>" +
    "</svg>";
    
    return svg;
  }

}

MOCTRUCH(document.getElementById('container'), {blur: 5});