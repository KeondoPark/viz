var wc_data_1 = "map3_data/map3_dec4_0.csv"
var wc_data_4 = "map3_data/map3_dec4_8.csv"

// console.log(data1)
  // 여기까지 data set
  // ========================================================================================================================
  // ========================================================================================================================
  // ========================================================================================================================
  // ========================================================================================================================
  // ========================================================================================================================
  // ========================================================================================================================
  


var width = window.innerWidth,
    height = window.innerHeight,
    centered,
    clicked_point;
  

// append the svg object to the body of the page
// var svg = d3.select("#my_dataviz")
//   .append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//   .attr("transform",
//     "translate(" + margin.left + "," + margin.top + ")")


  var svg = d3.select("#my_dataviz").append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("class", "map");
  var map = svg.append("g").attr("id", "map");
  var places = svg.append("g").attr("id", "places");
  
  var projection = d3.geoMercator()
      .translate([width / 2.2, height / 1.5]);
  
  var path = d3.geoPath()
      .projection(projection);
  
  var g = svg.append("g");
  
  queue()
      .defer(d3.json, "https://unpkg.com/world-atlas@1/world/110m.json" )
      .await(ready);
  
  function ready(error, data){
  
      var features = topojson.feature(data, data.objects.countries).features;
  
      svg.selectAll("path")
          .data(features)
          .enter()
          .append("path")
          .attr("d", path)
          .attr("fill", "#b8b8b8")
          .lower();
  }

//   Define tooltip
  var tooltip = d3.select('body').append('div')
  .attr('class','tooltip')
  .attr('id','tooltip')
  .style('opacity',0)



function update(data){
    d3.csv(data, function(error, data) {
        if (error) throw error;
            console.log(data)
            svg.selectAll("circle")
            .data(data)
            .enter().append("circle")
            // console.log(data)
            .transition()
            .duration(500)
            .attr("cx", function(d) { return projection([d.long, d.lat])[0]; })
            .attr("cy", function(d) { return projection([d.long, d.lat])[1]; })
            .attr("r", function(d) { return d.city_ind_count })
            .on("mouseover", handleMouseOver)
            .on("mouseout", handleMouseOut);  


// function add
    function handleMouseOver(d) {  // Add interactivity
        tooltip.style('opacity',0.9)
        //Information to display on tooltip
        tooltip.html(function(){
            return d.city + "," + d.city_ind_count
        })
        .style('left', d3.event.pageX + 10 + 'px')
        .style('top', d3.event.pageY - 28 + 'px')
    }
    function handleMouseOut(d, i) {
        // Use D3 to select element, change color back to normal
        d3.select(this).attr({
        fill: "black",
        });
        // Select text by id and then remove
        d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
    }
}
)}



// Initialize the plot with the first dataset
update(wc_data_1)
