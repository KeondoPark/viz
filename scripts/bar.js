/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

   //const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];  
  //var parseDate = d3.time.format("%d-%b-%y").parse;
  //var formatTime = d3.time.format("%e %B");
  var dateParser = d3.timeParse("%Y-%m-%d");
  var formatDate = d3.timeFormat("%Y-%m-%d")
  
  // Define the div for the tooltip
  var div = d3.select("body").append("div")	
      .attr("class", "tooltip")				
      .style("opacity", 0);
  
  
  $.getJSON("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(data) {            
    var dataset = data.data;
    var l = dataset.length
    
    dataset.forEach(function(d){
                    d[0] = dateParser(d[0]);                  
                    })
    //console.log(dataset);
  
    const padding = 50;
    const w = 1000;
    const h = 500;  
    const topMargin = 50;
    
    var maxX = d3.max(dataset, d=> d[0]);  
    var minX = d3.min(dataset, d=> d[0]);  
    var minY = d3.min(dataset, d=> d[1]);
    var maxY = d3.max(dataset, d=> d[1]);  
    var xScale = d3.scaleTime()
      .domain([minX,maxX])
      .range([padding, w - padding]);
    var yScale = d3.scaleLinear()
      .domain([0,maxY])
      .range([h - padding, padding]);  
    
    
  
    const svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h);
  
     //Axis
    const xAxis = d3.axisBottom(xScale).ticks(15);
    const yAxis = d3.axisLeft(yScale).ticks(10);
  
    svg.append("g")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xAxis);
    
    svg.append("g")
      .attr("transform", "translate(" + padding + ", 0)")
      .call(yAxis);
    
    // Define the div for the tooltip
    var div = d3.select("body").append("div")	
      .attr("class", "tooltip")				
      .style("opacity", 0);
  
    //Draw rectangles and append title showing GDP
    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(d[0]))
      .attr("y", (d, i) => yScale(d[1]))//h - 3 * d)
      .attr("width", (d, i) => (w - padding * 2) / l)
      .attr("height", (d, i) => h - padding - yScale(d[1]))
      .attr("fill", "navy")
      .attr("class", "bar")  
      //.append("title")
      //.text(d => d[1])
      .on("mouseover", function(d) {		
              div.transition()		
                  .duration(200)		
                  .style("opacity", .9);		
              div	.html(formatDate(d[0]) + "<br/>"  + d[1])	
                  .style("left", (d3.event.pageX) + "px")		
                  .style("top", (d3.event.pageY - 28) + "px");	
              })					
          .on("mouseout", function(d) {		
              div.transition()		
                  .duration(500)		
                  .style("opacity", 0)
    });	
    svg.append('text')
      .attr("x", w / 2)
      .attr("y", padding/2)
      .attr("text-anchor",'middle')
      .style('font-size','16px')
      .style('text-decoration','underline')
      .text('United States GDP')
    //Add data labels
    /*
    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(d => d[1])
      .style("size","3px")
      .attr("x", (d, i) => xScale(d[0]))
      .attr("y", (d, i) => yScale(d[1]) - 20)
    */
    
    
  });
  
  console.log("JavaScript is amazing!");