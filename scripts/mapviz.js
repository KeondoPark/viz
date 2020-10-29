/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

// Define the div for the tooltip
var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

/*

var width = 720,
    height = 500;

var projection = d3.geoAlbers()
    .scale(1000)
    .translate([width / 2, height / 2]);

var path = d3.geoPath()
    .projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);


$.getJSON("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json", function(data) {            
//$.getJSON("data/data.json", function(data) {              
  dataset = data   
    svg.append("g")
    //.attr("class","states")
    .selectAll("path")
    .data(topojson.feature(dataset, dataset.objects.states).features)    
    .enter().append("path")
    .attr("d", path)
    .style("fill","white")
    .style("stroke", "black");
    
})
*/






d3.queue()
    .defer(d3.json, "data/us.json")        
    .awaitAll(createMap);

var width = 720,    height = 500;

var projection = d3.geoAlbers()
    .scale(1000)
    .translate([width / 2, height / 2]);

var path = d3.geoPath()
    .projection(projection);



function createMap(error, data){
  if (error) throw error;

  console.log(data)

  var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

  svg.append("g")
  .attr("class","counties")
  .selectAll("path")
  .data(topojson.feature(data, data.objects.counties).features)    
  .enter().append("path")
  .attr("d", path)    
  .style("fill","white")
  /*.style("fill", function(d){
        return color(rateById[d.id]);
    })
    */
  .style("stroke", "black");

};

/*
$.getJSON("data/us_counties.json", function(data) {              
  
    dataset = data;

    svg.append("g")
    .attr("class","counties")
    .selectAll("path")
    .data(topojson.feature(dataset, dataset.objects.counties).features)    
    .enter().append("path")
    .attr("d", path)        
    .style("fill", function(d){
          return color(rateById[d.id]);
      })
      
    .style("stroke", "black");
  
})
*/


var color = d3.scaleThreshold()
.domain([0.02, 0.04, 0.06, 0.08, 0.10])
.range(["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"]);



/*
d3.queue()
    .defer(d3.json, "data/us.json")        
    .await(ready);



function ready(error, us) {
  if (error) throw error;
  
  svg.append("g")
      .attr("class", "counties")
    .selectAll("path")
      .data(topojson.feature(us, us.objects.counties).features)
    .enter().append("path")
      .attr("d", path)
      .style("fill", "white")
      .style("stroke", "black");
}

*/
console.log("JavaScript is amazing!");