MOCTRUCH = function(callback, element, options) {
  var blur = options.blur || 5;
  var width = element.scrollWidth;
  var height = element.scrollHeight;
  
  var createSVG = function() {
    var doc = document.implementation.createHTMLDocument("");
    //doc.write('AAA');
    doc.body.innerHTML = '<b>AA</b>';
    doc.documentElement.setAttribute("xmlns", doc.documentElement.namespaceURI);
    var html = (new XMLSerializer).serializeToString(doc);

    var svg = 
      "<svg xmlns='http://www.w3.org/2000/svg' width='" + width + "' height='" + height + "'>" +
        "<defs>" +
          "<filter id='f1' x='0' y='0'>" +
            "<feGaussianBlur in='SourceGraphic' stdDeviation='15' />" +
          "</filter>" +
        "</defs>" +
      "<foreignObject width='100%' height='100%' filter='url(#f1)'>" +
        '<body xmlns="http://www.w3.org/1999/xhtml">'+
             '<h1>A</h1>' + 
          '</body>'+ 
      "</foreignObject>" +
    "</svg>";
    
    return svg;
  }

  var createCanvas = function(blob, cb) {
    console.log(blob);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    
    var img = new Image();
    blob = new Blob([blob], {type: "image/svg+xml;charset=utf-8"});
    var url = window.URL.createObjectURL(blob);
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        window.URL.revokeObjectURL(url);
        cb(canvas);
    };
    img.src = url;
  }
  
  createCanvas(createSVG(), callback);
}

MOCTRUCH(
  function(cvs) { 
    document.getElementById('output').appendChild(cvs);
  },
  document.getElementById('container'), 
  {blur: 15}
);