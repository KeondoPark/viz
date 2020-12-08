// 1. Software = ['Software','Information Technology','SaaS','Internet','Enterprise Software','Mobile','Apps','Cloud Computing','Information Services','Cloud Data Services','Social Media','Blockchain','Mobile Apps','Gaming', 'Internet of Things']
// 2. Financial_Services =['Finance','Financial Services','FinTech','Payments','Banking']
// 3. E_Commerce =['E-Commerce','Retail','Marketplace']
// 4. Health_Care =['Health Care','Biotechnology','Medical','Wellness','Pharmaceutical']
// 5. AI=['Analytics','Artificial Intelligence','Machine Learning','Big Data']
// 6. Security =['Security','Cyber Security','Network Security']
// 7. Manufacturing =['Manufacturing','Consumer Electronics','Robotics','Hardware']
// 8. Education =['Education','EdTech']
// 9. Transportation =['Transportation','Logistics','Automotive']
// 10. Food=['Food and Beverage']
// 11. Others


var wc_data_1 = "map3_data/map3_dec4_0.csv" // all industries
var wc_data_2 = "map3_data/map3_dec4_5.csv" // ai
var wc_data_3 = "map3_data/map3_dec4_3.csv" // ecommerce
var wc_data_4 = "map3_data/map3_dec4_8.csv" // education
var wc_data_5 = "map3_data/map3_dec4_10.csv" //f/b
var wc_data_6 = "map3_data/map3_dec4_2.csv" //financial
var wc_data_7 = "map3_data/map3_dec4_4.csv" //healthcare
var wc_data_8 = "map3_data/map3_dec4_7.csv" //manufacturing
var wc_data_9 = "map3_data/map3_dec4_6.csv" //security
var wc_data_10 = "map3_data/map3_dec4_1.csv" //software
var wc_data_11 = "map3_data/map3_dec4_9.csv" //transportation

// console.log(data1)
  // 여기까지 data set
  // ========================================================================================================================
  // ========================================================================================================================
  // ========================================================================================================================
  // ========================================================================================================================
  // ========================================================================================================================
  // ========================================================================================================================
  


var WC3width = window.innerWidth,
    WC3height = window.innerHeight,
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


  var WC3svg = d3.select("#WC3_dataviz").append("svg")
      .attr("width", WC3width)
      .attr("height", WC3height)
      .attr("class", "map");
  var WC3map = WC3svg.append("g").attr("id", "map");
  var WC3places = WC3svg.append("g").attr("id", "places");
  
  var WC3projection = d3.geoMercator()
      .translate([WC3width / 2.2, WC3height / 1.5]);
  
  var WC3path = d3.geoPath()
      .projection(WC3projection);
  
  var WC3g = WC3svg.append("g");

  queue()
      .defer(d3.json, "https://unpkg.com/world-atlas@1/world/110m.json" )
      .await(ready);
  
  function ready(error, data){
  
      var WC3features = topojson.feature(data, data.objects.countries).features;
  
      WC3svg.selectAll("path")
          .data(WC3features)
          .enter()
          .append("path")
          .attr("d", WC3path)
          .attr("fill", "#b8b8b8")
          .lower();
  }

//   Define tooltip
  var WC3tooltip = d3.select("#WC3_dataviz").append('div')
  .attr('class','tooltip')
  .attr('id','tooltip')
  .style('opacity',0)

function update(data){

    // function add
    function handleMouseOver(d) {  // Add interactivity
        WC3tooltip.style('opacity',0.9)
        //Information to display on tooltip
        WC3tooltip.html(function(){
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
        d3.select(this).style("opacity", 0)
        d3.select("#t" + d.cx + "-" + d.cy + "-" + d.r + "-" + i).remove();  // Remove text location
    }



    d3.csv(data, function(error, data) {
        if (error) throw error;
            WC3svg.selectAll("circle").data(data)
            console.log(data)

            var WC3u = WC3svg.selectAll("circle")
            .data(data)
        
            WC3u
            .enter().append("circle").merge(WC3u)
            .attr("cx", function(d) { return WC3projection([d.long, d.lat])[0]; })
            .attr("cy", function(d) { return WC3projection([d.long, d.lat])[1]; })
            .attr("r", function(d) { return d.city_ind_count });
        
            WC3u
            .on("mouseover", handleMouseOver)
            .on("mouseout", handleMouseOut);
        
            WC3u
            .exit()
            .remove();
}
);


}
// Initialize the plot with the first dataset
update(wc_data_1)
