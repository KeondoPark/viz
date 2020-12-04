// set the dimensions and margins of the graph
var margin = {top: 30, right: 0, bottom: 30, left: 50},
    width = 210 - margin.left - margin.right,
    height = 210 - margin.top - margin.bottom;

var funding_order = {'Seed':1, "Series A":2, 'Series B':3, 'Series C':4, 'Series D+':5, 'M&A':6, 'IPO':7, 'Others':8}
var funding_label = {1:'Seed', 2:"Series A", 3:'Series B', 4:'Series C', 5:'Series D+', 6:'M&A', 7:'IPO', 8:'Others'}

//Read the data
d3.tsv("data/crunch_data_grp_NoEmployees2.tsv", function(data) {    

    data.forEach(function(d){
        d.n = Number(d.Number_of_Employees_Avg)
        d.Last_Funding_Type = Number(funding_order[d.Last_Funding_Type])
      })

      data.sort(function(a,b){return d3.ascending(a.Last_Funding_Type,b.Last_Funding_Type)})         

      console.log(data)

  // group the data: I want to draw one line per group
  var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
    .key(function(d) { return d.Industry;})
    .entries(data);

  // What is the list of groups?
  allKeys = sumstat.map(function(d){return d.key})

  // Add an svg element for each group. The will be one beside each other and will go on the next row when no more room available
  var svg = d3.select("#my_dataviz")
    .selectAll("uniqueChart")
    .data(sumstat)
    .enter()
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
g = svg.append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  // Add X axis --> it is a date format
  var x = d3.scaleLinear()
    //.domain(d3.extent(data, function(d) { return d.Last_Funding_Type; }))
    .domain([0,9])
    .range([ 0, width ]);
  g
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(3));

  //Add Y axis
  var y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return +d.n; })])
    .range([ height, 0 ]);
  g.append("g")
    .call(d3.axisLeft(y).ticks(5));

  // color palette
  var color = d3.scaleOrdinal()
    .domain(allKeys)
    .range(['#5487b1','#5487b1','#63a1af','#63a1af','#7ab8aa','#93caa8','#add7a8','#c6e3a7','#c6e3a7','#E7846F','#E7846F'])

    // Draw the line
    g
      .append("path")
        .attr("fill", function(d){ return color(d.key) })
        .attr("stroke", "none")
        .attr("d", function(d){
          return d3.area()
          .x(function(d) { return x(d.Last_Funding_Type) })
          .y0(y(0))
          .y1(function(d) { return y(+d.n) })
            (d.values)
        })

  // Add titles
  g
    .append("text")
    .attr("text-anchor", "start")
    .attr("y", -5)
    .attr("x", 0)
    .text(function(d){ return(d.key)})
    .style("fill", function(d){ return color(d.key) })

})