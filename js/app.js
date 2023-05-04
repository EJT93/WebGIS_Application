require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer"
  ], function(Map, MapView, FeatureLayer) {
    var layer = new FeatureLayer({
      url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/2"
    });
  
    var map = new Map({
      basemap: "topo-vector",
      layers: [layer]
    });

    // Add this inside your require() function
    var zoomInButton = document.getElementById("zoom-in");
    var zoomOutButton = document.getElementById("zoom-out");

    zoomInButton.addEventListener("click", function () {
    view.zoom += 1;
    });

    zoomOutButton.addEventListener("click", function () {
    view.zoom -= 1;
    });

    // ...
  });
  