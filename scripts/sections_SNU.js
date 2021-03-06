var ind_list = ["AllIndustries", "AI", "Ecommerce", "Education", "F&B", "Financial", "Healthcare", "Manufacturing", "Security", "Software", "Transportation"]
var checkIn = {'inTitle': 0, 'inYB1': 0, 'inRBC': 0, 'inWC1': 0, 'inWC2': 0, 'inWC3': 0, 'inYJ1': 0, 'inYJ2': 0, 'inKD1': 0, 'inKD2': 0, 'inWordCloud': 0, 'inlistInd': 0}
var funding_order = { 'Seed': 1, "Series A": 2, 'Series B': 3, 'Series C': 4, 'Series D+': 5, 'M&A': 6, 'IPO': 7 }
var funding_label = { 1: 'Seed', 2: "Series A", 3: 'Series B', 4: 'Series C', 5: 'Series D+', 6: 'M&A', 7: 'IPO' }
var labelsMap = {'goog':'Google','apple':'Apple','fb':'Facebook','amzn':'Amazon'}
var colors = ['#F06A93', '#CD59B1', '#A97DD8', '#F38787', '#EF8D5D', '#3FB68E', '#4D78A2', '#3AB5C2', '#6973F6', '#74ABE2']

var width = 1200;
var height = 600;
var margin = { top: 10, left: 20, bottom: 40, right: 10 };

var timerYoutube = 0;
setTimeout(function(){
  timerYoutube = 1;
},1)

/**
 * scrollVis - encapsulates
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var scrollVis = function () {
  // constants to define the size
  // and margins of the vis area.

  // Keep track of which visualization
  // we are on and which was the last
  // index activated. When user scrolls
  // quickly, we want to call all the
  // activate functions that they pass.
  var lastIndex = -1;
  var activeIndex = 0;

  // main svg used for visualization
  var svg = null;

  // d3 selection that will be used
  // for displaying visualizations
  var g = null;

  // When scrolling to a new section
  // the activation function for that
  // section is called.
  var activateFunctions = [];
  // If a section has an update function
  // then it is called while scrolling
  // through the section with the current
  // progress through the section.
  var updateFunctions = [];

  /**
   * chart
   *
   * @param selection - the current d3 selection(s)gi
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function (selection) {
    selection.each(function (data) {

      var KDdata = data.KDdata
      var YB_data = data.YB_data
      var raw_rbc_data = data.raw_rbc_data
      var worldMapData = data.worldMapData
      var WC1data = data.WC1data
      var WC2data = data.WC2data
      var YJPieData = data.YJPieData
      var USMapData = data.USMapData
      var WC3data = data.WC3data
      var wordCloudData = data.wordCloudData
      var wordCloudData2 = data.wordCloudData2

      // create svg and give it a width and height
      //svg = d3.select(this).selectAll('svg')//.data([YB_data]);
      svg = d3.select("#vis").append("svg").attr('class','svgBase')
      //var svgE = svg.enter().append('svg');
      // @v4 use merge to combine enter and existing selection
      //svg = svg.merge(svgE);

      svg.attr('width', width + margin.left + margin.right);
      svg.attr('height', height + margin.top + margin.bottom);

      svg.append('g');

      // this group element will be used to contain all
      // other elements.
      g = svg.select('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      rbc_data = rbcModify(raw_rbc_data)

      setupVis(YB_data, rbc_data, worldMapData, WC1data, USMapData, WC2data, YJPieData, KDdata, WC3data, wordCloudData, wordCloudData2);

      setupSections();
    });
  };


  /**
   * setupVis - creates initial elements for all
   * sections of the visualization.
   *
   * @param wordData - data object for each word.
   * @param fillerCounts - nested data that includes
   *  element for each filler word type.
   * @param histData - binned histogram data
   */
  var setupVis = function (YB_data, rbc_data, worldMapData, WC1data, USMapData, WC2data, YJPieData, KDdata, WC3data, wordCloudData, wordCloudData2) {

    //---------------------------------------------------------------------
    // Yoobin's bar chart start
    //---------------------------------------------------------------------
    let xYB = d3.scaleBand().rangeRound([0, width]).padding(0.1);
    let yYB = d3.scaleLinear().rangeRound([height, 0]);

    YB_data.forEach(function(d){
      d.value /= 1000000
    })

    xYB.domain(YB_data.map(function (d) { return d.type; }));
    maxYYB = d3.max(YB_data, d => +d.value)
    selected = ind_list
    filtered = YB_data.filter(function (d) {
      return selected.includes(d.ind_list)
    })
    
    yYB.domain([0, d3.max(filtered, function (d) { return +d.value; }) * 1.2]);

    g.append("g")
      .attr("class", "x_axis axis YB")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xYB));

    g.append("g")
      .attr("class", "axis y_axis YB")
      .attr("transform", "translate(50,0)")
      .call(d3.axisLeft(yYB));
      
    g.selectAll(".rect")
      .data(filtered)
      .enter().append("rect")
      .attr("id", function (d) {
        return "bar" + ind_list.indexOf(d.ind_list)
      })
      .attr("y", function (d) {
        return yYB(+d.value)
      })
      .attr("x", function (d) { return 30 + xYB(d.type) + 10 * ind_list.indexOf(d.ind_list); })
      .attr("height", function (d) { return height - yYB(+d.value); })
      .attr("width", xYB.bandwidth() / 6)
      .attr("class", "rectYB")

    g.append("text")
      .attr("class", "axis y_axis YB")
      .attr("text-anchor", "middle")
      .attr("x",0 - (height / 2))
      .attr('transform', 'rotate(-90)')
      .text("Funding Amount($1M)");

    //---------------------------------------------------------------------
    // Yoobin's bar chart end
    //---------------------------------------------------------------------


    //---------------------------------------------------------------------
    // Woochul's racing bar chart start
    //---------------------------------------------------------------------

    let year = 2008;
    var top_n = 4;
    var tickDuration = 500;
    let barPadding = (height - (margin.bottom + margin.top)) / (top_n * 5);

    const halo = function (text, strokeWidth) {
      text.select(function () { return this.parentNode.insertBefore(this.cloneNode(true), this); })
        .style('fill', '#ffffff')
        .style('stroke', '#ffffff')
        .style('stroke-width', strokeWidth)
        .style('stroke-linejoin', 'round')
        .style('opacity', 0)
    }

    let rbcSubTitle = g.append("text")
      .attr("class", "rbc")
      .attr("y", 40)
      .attr('text-anchor', 'start')
      .html("Total Asset, $m")
      .attr('opacity', 0)
      .attr('fill', '#777777')
      ;

    let rbcCaption = g.append('text')
      .attr('class', 'rbc')
      .attr('x', width)
      .attr('y', height - 5)
      .style('text-anchor', 'end')
      .attr('fill', '#777777')
      .html('Source: CrunchBase, yChart')
      .attr('opacity', 0);

    let yearSlice = rbc_data.filter(d => Number(d.year) == Number(year) && !isNaN(d.value))
      .sort((a, b) => b.value - a.value)
      .slice(0, top_n);

    yearSlice.forEach((d, i) => d.rank = i);

    let xRbc = d3.scaleLinear()
      .domain([0, d3.max(yearSlice, d => d.value)])
      .range([margin.left, width - margin.right - 65]);

    let yRbc = d3.scaleLinear()
      .domain([top_n, 0])
      .range([height - margin.bottom, margin.top + 55]);

    let xAxisRbc = d3.axisTop()
      .scale(xRbc)
      .ticks(width > 500 ? 5 : 2)
      .tickSize(-(height - margin.top - margin.bottom))
      .tickFormat(d => d3.format(',')(d))


    gRbc = g.append('g')
      .attr('class', 'gRbc')

    gRbc.append('g')
      .attr('class', 'rbc xAxisRbc')
      //.attr('transform', `translate(0, ${margin.top})`)
      .attr('transform', `translate(0, 30)`)
      .call(xAxisRbc)
      .selectAll('.tick line')
      .classed('origin', d => d == 0)
      ;

    gRbc.selectAll('rect.bar')
      .data(yearSlice, d => d.name)
      .enter()
      .append('rect')
      .attr('class', 'barRbc rbc')
      .attr('x', xRbc(0) + 1)
      .attr('width', d => xRbc(d.value) - xRbc(0) - 1)
      .attr('y', d => yRbc(d.rank) + 5)
      .attr('height', yRbc(1) - yRbc(0) - barPadding)
      .style('fill', d => d.colour)
      .attr('opacity', 0)
      ;

    gRbc.selectAll('text.label')
      .data(yearSlice, d => d.name)
      .enter()
      .append('text')
      .attr('class', 'labelRbc rbc')
      .attr('x', d => xRbc(d.value) - 8)
      .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0)) / 2) + 1)
      .style('text-anchor', 'end')
      .html(d => labelsMap[d.name])
      ;

    gRbc.selectAll('.valueLabel')
      .data(yearSlice, d => d.name)
      .enter()
      .append('text')
      .attr('class', 'valueLabel rbc')
      .attr('x', d => xRbc(d.value) + 5)
      .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0)) / 2) + 1)
      .text(d => d3.format(',.0f')(d.lastValue))
      ;

    let yearTextRbc = gRbc.append('text')
      .attr('class', 'yearText rbc')
      .attr('x', width - margin.right)
      .attr('y', height - 25)
      .style('text-anchor', 'end')
      .attr('opacity', 0)
      .html('')
      //.html(~~year)
      //.call(halo, 10) 


    //---------------------------------------------------------------------
    // Woochul's racing bar chart end
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    // Woochul's map 1 start
    //---------------------------------------------------------------------

    var map = g.append('g').attr("id", "map_WC1").attr("class", "WC1").attr("opacity", 0)

    var svgWC = d3.select("#vis").append("svg").attr('class','svgWC');
    svgWC.attr('width', width + margin.left + margin.right);
    svgWC.attr('height', height + margin.top + margin.bottom);
    

    var placesWC3 = svgWC.append('g')
      .attr("id", "places_WC3")
      .attr("class", "WC3")
      .attr("opacity", 0);

    var projectionWC3 = d3.geoMercator()
      .translate([width / 2.2, height / 1.5])

    var path = d3.geoPath()
      .projection(projectionWC3);

    var features = topojson.feature(worldMapData, worldMapData.objects.countries).features;

    placesWC3//.append('g')
      .selectAll("path")
      .data(features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#b8b8b8")
      .attr("stroke-width", 1)
      .attr("class", "WC3")
      .attr('opacity', 0)
      .lower();

    //Define tooltip
    var tooltip_wc3 = d3.select('body').append('div')
        .append('g')
        .attr('class', 'tooltip')
        .attr('id', 'tooltipWC3')
        .style('opacity', 0)

    placesWC3.selectAll("circle")
      .data(WC3data)
      .enter()
      .append("circle")
      .attr("cx", function (d) { return projectionWC3([d.long, d.lat])[0]; })
      .attr("cy", function (d) { return projectionWC3([d.long, d.lat])[1]; })
      .attr("r", function (d) { return d.city_ind_count > 10 ? (d.city_ind_count) ** 0.8 : d.city_ind_count })
      .attr("class", "WC3")
      .attr("opacity", 0)      

    placesWC3.selectAll("circle")
      .on("mouseover", function () { console.log("mouse over"); tooltip_wc3.style("display", "block"); })
      .on("mouseout", function () { tooltip_wc1.style("display", "none"); })
      .on("mousemove", function (d) {
        console.log("mouse move")
        tooltip_wc3.style("opacity",1)
        tooltip_wc3.style("left", (d3.event.pageX + 10) + "px");
        tooltip_wc3.style("top", (d3.event.pageY - 10) + "px");
        tooltip_wc3.style('z-index', '999')
        tooltip_wc3.html("<br><p style='font:15px sans-serif'> <strong>" + d.city + "</strong> <br><span style='color:white'>" + d.city_ind_count + "</span>");
      });     


      /*
    placesWC3.selectAll("circle")
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    function handleMouseOver(d) {  // Add interactivity


      if (checkIn.inWC3) {
        tooltip_wc3
          .style('opacity', 0.9)
          .attr('width', 200)
          .attr('text-align', 'center')
        //Information to display on tooltip
        tooltip_wc3.html(function () {
          return d.city + d.city_ind_count
        })
          .style('left', d3.event.pageX + 100 + 'px')
          .style('top', d3.event.pageY - 28 + 'px')
      }
    }

    function handleMouseOut(d, i) {
      tooltip_wc3.style('opacity', 0)
    }
*/
    /*

    var placesWC1 = svgWC.append('g')
      .attr("id", "places_WC1")
      .attr("class", "WC1")
      //.attr("opacity", 0);

    var projectionWC1 = d3.geoMercator()
      .translate([width / 2.2, height / 1.5 - 200]);

    var path = d3.geoPath()
      .projection(projectionWC1);

    var features = topojson.feature(worldMapData, worldMapData.objects.countries).features;

    placesWC1//.append('g')
      .selectAll("path")
      .data(features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#b8b8b8")
      .attr("stroke-width", 1)
      .attr("class", "WC1")
      .attr('opacity', 0)
      .lower();

    //Define tooltip
    var tooltip_wc1 = d3.select('body').append('div')
      .append('g')
      .attr('class', 'tooltip')
      .attr('id', 'tooltipWC1')
      .style('opacity', 0)      

    placesWC1.selectAll("circle")
      .data(WC1data)
      .enter()
      .append("circle")
      .attr("cx", function (d) { return projectionWC1([d.long, d.lat])[0]; })
      .attr("cy", function (d) { return projectionWC1([d.long, d.lat])[1]; })
      .attr("r", function (d) { return d.city_count > 10 ? (d.city_count) ** 0.8 : d.city_count })
      .attr("class", "WC1")
      .attr("opacity", 0)      
    
      
    placesWC1.selectAll("circle")
      .on("mouseover", function () { console.log("mouse over"); tooltip_wc1.style("display", "block"); })
      .on("mouseout", function () { tooltip_wc1.style("display", "none"); })
      .on("mousemove", function (d) {
        console.log("mouse move")
        tooltip_wc1.style("opacity",1)
        tooltip_wc1.style("left", (d3.event.pageX + 10) + "px");
        tooltip_wc1.style("top", (d3.event.pageY - 10) + "px");
        tooltip_wc1.style('z-index', '999')
        tooltip_wc1.html("<br><p style='font:15px sans-serif'> <strong>" + d.city + "</strong> <br><span style='color:white'>" + d.city_count + "</span>");
      });     

    
    placesWC1.selectAll("circle")
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    function handleMouseOver(d) {  // Add interactivity

      console.log('MOUSE OVer')

      if (checkIn.inWC1) {
        tooltip_wc1
          .style('opacity', 0.9)
          .attr('width', 200)
          .attr('text-align', 'center')
        //Information to display on tooltip
        tooltip_wc1.html(function () {
          return d.city + d.city_count
        })
          .style('left', d3.event.pageX + 100 + 'px')
          .style('top', d3.event.pageY - 28 + 'px')
      }
    }

    function handleMouseOut(d, i) {
      tooltip_wc1.style('opacity', 0)
    }*/
    
    //---------------------------------------------------------------------
    // Woochul's map 1 end
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    // Woochul's map 2 start
    //---------------------------------------------------------------------

    var wc2_width = 960,
      wc2_height = 600,
      centered,
      clicked_point;

    var placesWC2 = svgWC.append('g')
      .attr("id", "places_WC2")
      .attr("class", "WC2")
      .attr("opacity", 0);

    var projectionWC2 = d3.geoAlbersUsa()
      .translate([wc2_width / 2, wc2_height / 2])
      .scale([1200]);

    var path = d3.geoPath();


    placesWC2
      .append("path")
      .attr("d", path(topojson.feature(USMapData, USMapData.objects.nation)))
      .attr("stroke-width", 1)
      .attr("stroke", "#000000")
      .attr('fill', '#b8b8b8')
      .attr('class', 'WC2')
      .attr('opacity', 0)
      .lower();


    placesWC2
      .append('path')
      .attr("d", path(topojson.mesh(USMapData, USMapData.objects.states, function (a, b) { return a !== b; })))
      .attr("stroke-width", 0.5)
      .attr("stroke", "#000000")
      .attr("fill", "#b8b8b8")
      .attr('class', 'WC2')
      .attr('opacity', 0)
    
    //Define tooltip
    var tooltip_wc2 = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .attr('id', 'tooltipWC2')
      .style('opacity', 0)

    placesWC2.selectAll("circle")
      .data(WC2data)
      .enter().append("circle")
      .attr("cx", function (d) { return projectionWC2([d.long, d.lat])[0]; })
      .attr("cy", function (d) { return projectionWC2([d.long, d.lat])[1]; })
      .attr("r", function (d) { return d.city_count })
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut)
      .attr('class', 'WC2')
      .attr('opacity', 0);

  placesWC2.selectAll("text")
    .data(WC2data)
    .enter().append("text")
    .attr("x", function (d) { return projectionWC2([d.long, d.lat])[0]; })
    .attr("y", function (d) { return projectionWC2([d.long, d.lat])[1] + 8; })
  //   .text(function(d) { return d.city});
  

    function handleMouseOver(d) {  // Add interactivity
      if (checkIn.inWC2) {
        tooltip_wc2.style('opacity', 0.9)
        //Information to display on tooltip
        tooltip_wc2.html(function () {
          return "City: " + d.city + "<br> Number of startups: " + d.city_count
        })
          .style('left', d3.event.pageX + 10 + 'px')
          .style('top', d3.event.pageY - 28 + 'px')
      }
    }

    function handleMouseOut(d, i) {
      tooltip_wc2.style('opacity', 0)
    }
    

    //---------------------------------------------------------------------
    // Woochul's map 2 end
    //---------------------------------------------------------------------


    //---------------------------------------------------------------------
    // Woochul's map 3 start
    //---------------------------------------------------------------------
/*
    var placesWC3 = svgWC.append('g')
      .attr("id", "places_WC3")
      .attr("class", "WC3")
      .attr("opacity", 0);

    var projectionWC3 = d3.geoMercator()
      .translate([width / 2.2 + 500, height / 1.5 + 100])

    var path = d3.geoPath()
      .projection(projectionWC3);

    var features = topojson.feature(worldMapData, worldMapData.objects.countries).features;

    placesWC3//.append('g')
      .selectAll("path")
      .data(features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#b8b8b8")
      .attr("stroke-width", 1)
      .attr("class", "WC3")
      .attr('opacity', 0)
      .lower();

    //Define tooltip
    var tooltip_wc3 = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .attr('id', 'tooltipWC3')
      .style('opacity', 0)

    placesWC3.selectAll("circle")
      .data(WC3data)
      .enter()
      .append("circle")
      .attr("cx", function (d) { return projectionWC3([d.long, d.lat])[0]; })
      .attr("cy", function (d) { return projectionWC3([d.long, d.lat])[1]; })
      .attr("r", function (d) { return d.city_ind_count > 10 ? (d.city_ind_count) ** 0.8 : d.city_ind_count })
      .attr("class", "WC3")
      .attr("opacity", 0)


    placesWC3.selectAll("circle")
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    function handleMouseOver(d) {  // Add interactivity


      if (checkIn.inWC3) {
        tooltip_wc3
          .style('opacity', 0.9)
          .attr('width', 200)
          .attr('text-align', 'center')
        //Information to display on tooltip
        tooltip_wc3.html(function () {
          return d.city + d.city_ind_count
        })
          .style('left', d3.event.pageX + 100 + 'px')
          .style('top', d3.event.pageY - 28 + 'px')
      }
    }

    function handleMouseOut(d, i) {
      tooltip_wc3.style('opacity', 0)
    }
*/

    //---------------------------------------------------------------------
    // Woochul's map 3 end
    //---------------------------------------------------------------------


    //---------------------------------------------------------------------
    // Keondo's area chart start
    //---------------------------------------------------------------------

    KDdata.forEach(function (d) {
      d.n = Number(d.Number_of_Employees_Avg)
      d.Last_Funding_Type = Number(funding_order[d.Last_Funding_Type])
    })

    KDdata.sort(function (a, b) { return d3.ascending(a.Last_Funding_Type, b.Last_Funding_Type) })
    KDdata1 = KDdata.filter(function (d) { return (d.Industry == 'All Industries' || d.Industry == 'Security') && (d.Last_Funding_Type < 8) })

    // group the data: I want to draw one line per group
    var sumstatKD1 = d3.nest() // nest function allows to group the calculation per level of a factor
      .key(function (d) { return d.Industry; })
      .entries(KDdata1);    

    // What is the list of groups?
    allKeys = sumstatKD1.map(function (d) { return d.key })

    var container = g.append("g")
      .classed("container-group", true);

    var chartgroup = container.append("g").classed("chart-group-KD1", true);

    gKD1 = container.selectAll(".chart-group-KD1")
      .append('g')
      .data(sumstatKD1)
      .enter()

    // Add X axis --> it is a date format
    var xKD1 = d3.scaleLinear()
      .domain([0.5, 7])
      .range([0, width - margin.right]);

    gKD1.append("g")
      .attr("transform", function (d, i) { return "translate(0," + height + ")" })
      .attr("class", "KD1")
      .call(d3.axisBottom(xKD1)
              .ticks(8)
              .tickFormat(function (d) {
                return funding_label[d];
              }))
      .attr('opacity', 0);

    //Add Y axis
    var yKD1 = d3.scaleLinear()
      .domain([0, d3.max(KDdata1, function (d) { return +d.n; })])
      .range([height, 0]);

    gKD1.append("g")
      .attr("class", "KD1")      
      .attr("transform", function (d, i) { return "translate(" + (margin.left * 4 + (width / 4) * ((i - 1) % 4)) + "," + (height / 3) * (parseInt((i - 1) / 4)) + ")" })
      .call(d3.axisLeft(yKD1).ticks(5))
      .attr('opacity', 0);

    // color palette
    var color = d3.scaleOrdinal()
      .domain(allKeys)
      .range(['#4D78A2'])

    // Draw the line
    gKD1//.selectAll("path")
      //.data(sumstat)
      .append('g')
      .append("path")
      .attr("fill", function (d) { return color(d.key) })
      .attr("stroke", "none")
      .attr("d", function (d) {        
        return d3.area()
          .x(function (d) { return xKD1(d.Last_Funding_Type) })
          .y0(yKD1(0))
          .y1(function (d) { return yKD1(+d.n) })
          (d.values)
      })
      .attr("transform", function (d, i) { return "translate(" + (width / 4) * ((i - 1) % 4) + "," + (height / 3) * (parseInt((i - 1) / 4)) + ")" })
      .attr('class', 'KD1')
      .attr('opacity', 0);

    // Add titles
    container.selectAll(".chart-group-KD1") 
      .append("text")
      .attr("text-anchor", "start")      
      //.text("Growth Curve: All Industries")
      .style("fill", '#000000')                  
      .attr("transform", "translate(" + (30 + width / 3) +"," + height / 10 + ")")
      .style("font-size", "24px")
      .attr('class', 'KD1')
      .attr('opacity', 0);

    // Add Additional descriptions
    container.selectAll(".chart-group-KD1") 
      .append("text")
      .attr("text-anchor", "middle")      
      .text("Valley of death")
      .style("fill", '#000000')                  
      .attr("transform", "translate(" + width / 4 + "," + height * 4 / 6 + ")")
      .style("font-size", "24px")
      .attr('class', 'KD1')
      .attr('opacity', 0);

    container.selectAll(".chart-group-KD1") 
      .append("text")
      .attr("text-anchor", "start")      
      .text("Number of Employees")
      .style("fill", '#000')                  
      .attr("transform", "translate(" + 15 + "," + 30 + ")")
      .style("font-size", "12px")
      .attr('class', 'KD1')
      .attr('opacity', 0);

    svg.append('defs')
      .append('marker')
      .attr('id', 'arrowhead')
      .attr('refY', 2)
      .attr('markerWidth', 6)
      .attr('markerHeight', 4)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M 0,0 V 4 L6,2 Z')
      .attr('class','KD1');

    container.selectAll(".chart-group-KD1")       
      .append('path')
      .attr('class', 'KD1')
      .attr('marker-end', 'url(#arrowhead)')
      .attr('d', function () {
        var line = 'M ' + ((width / 4) - 10) + ' ' + (height * 5 / 6 - 50);
        line += ' l 0 ' + 80;
        return line;
      })
      .attr('opacity', 0)
      .style('stroke','#000000');


    //---------------------------------------------------------------------
    // Keondo's area chart end
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    // Keondo's multiarea chart start
    //---------------------------------------------------------------------

    
    KDdata2 = KDdata.filter(function (d) { return d.Industry != 'All Industries' && d.Last_Funding_Type < 8 })
    KDdata2.sort(function (a, b) { return d3.ascending(a.Last_Funding_Type, b.Last_Funding_Type) })
    // group the data: I want to draw one line per group
    var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
      .key(function (d) { return d.Industry; })
      .entries(KDdata2);

    // What is the list of groups?
    allKeys = sumstat.map(function (d) { return d.key })

    var container = g.append("g")
      .classed("container-group", true);
    var chartgroup = container.append("g").classed("chart-group", true);
    gKD2 = container
      .selectAll(".chart-group")
      //.data(sumstat)
      //.enter()    

    // Add X axis --> it is a date format
    var xKD = d3.scaleLinear()
      //.domain(d3.extent(data, function(d) { return d.Last_Funding_Type; }))
      .domain([0.2, 8])
      .range([0, (width - margin.left - margin.right)/4]);
    
    //Add Y axis
    var yKD = d3.scaleLinear()
      .domain([0, d3.max(KDdata2, function (d) { return +d.n; })])
      .range([height / 3 - margin.top - margin.bottom, 0]);

    // color palette
    var color = d3.scaleOrdinal()
      .domain(allKeys)
      .range(colors) //['#F06A93', '#CD59B1', '#A97DD8', '#F38787', '#EF8D5D', '#3FB68E', '#4D78A2', '#3AB5C2', '#6973F6', '#74ABE2'])
    
    // Add titles    
    gKD2      
      .selectAll('text')
      .data(sumstat)
      .enter() 
      //.append('g')
      .append("text")
      .attr("text-anchor", "middle")
      .text(function (d) { return (d.key) })
      .style("fill", function (d) { return color(d.key) })
      .attr("transform", function (d, i) { return "translate(" + (width / 8 + (width / 4) * ((i) % 4)) + "," + ((height / 3) * (parseInt((i) / 4)) + 20) + ")" })
      .attr('class', 'KD2')
      .attr('opacity', 0);

    // Draw the line
    gKD2
      .selectAll('path')
      .data(sumstat)
      .enter()
      .append("path")
      .attr("fill", function (d) {; return color(d.key) })
      .attr("stroke", "none")
      .attr("d", function (d) {
        return d3.area()
          .x(function (d) { return xKD(d.Last_Funding_Type) })
          .y0(yKD(0))
          .y1(function (d) { return yKD(+d.n) })
          (d.values)
      })
      .attr("transform", function (d, i) {return "translate(" + (width / 4) * ((i) % 4) + "," + (height / 3) * (parseInt((i) / 4)) + ")" })
      .attr('class', 'KD2')
      .attr('opacity', 0);  
      
    //Cover
    gKD2
      .selectAll('rect')
      .data(sumstat)
      .enter()
      .append("rect")
      .attr("fill", '#f0f0f0')      
      .attr("x", function (d, i) { return (width / 4) * ((i) % 4) - 20 })
      .attr("y", function (d, i) { return (height / 3) * (parseInt((i) / 4)) })
      .attr("width", width / 4)
      .attr("height", height / 3)      
      .attr('class', 'KD2 rectKD2')
      .attr('id',function(d){return `rectKD2_${d.key}`})      
      .attr('opacity', 0);
    
    gKD2
      //.selectAll('g')      
      .data(sumstat)
      .enter() 
      .append("g")
      .call(d3.axisLeft(yKD).ticks(3))      
      .attr("transform", function (d, i) { return "translate(" + (margin.left*1.5 +  (width / 4) * (i % 4)) + "," + (height / 3) * (parseInt((i) / 4)) + ")" })
      .attr("class", "KD2 axisBlack")
      .attr('opacity', 0);
    
    gKD2 
      .selectAll('g')      
      .data(sumstat)
      .enter() 
      .append("g")
      .call(
        d3.axisBottom(xKD)
          .ticks(3)
          .tickFormat(function (d) {
              return funding_label[d];
          })
      )
      .attr("transform", function (d,i) { return "translate(" + (width / 4) * ((i) % 4) + "," + ((height / 3) * (parseInt((i) / 4) + 1) - margin.bottom) + ")" })
      .attr("class", "KD2")      
      .attr('opacity', 0);

    //---------------------------------------------------------------------
    // Keondo's multiarea chart end
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    // Word cloud start
    //---------------------------------------------------------------------
    wordScale = d3.scaleLinear().domain([0, 100]).range([0, 150]).clamp(true);      
    var gWordCloud = d3.select("svg")
              .select('g')
              .append("g")
              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")  


    d3.layout.cloud()
        .size([width, height])
        //클라우드 레이아웃에 데이터 전달
        .words(wordCloudData)
        .rotate(function (d) {
            return d.text.length > 3 ? 0 : 90;
        })
        //스케일로 각 단어의 크기를 설정
        .fontSize(function (d) {
            return wordScale(d.frequency);
        })
        //클라우드 레이아웃을 초기화 > end이벤트 발생 > 연결된 함수 작동  
        .on("end", draw)
        .start();

    function draw(words) { 
        var cloud = gWordCloud.selectAll("text").data(words)

        
        //Entering words
        cloud.enter()
            .append("text")                
            .style("fill", function (d, i) {
                return colors[i % 10];
            })
            .style("fill-opacity", .5)
            .attr("text-anchor", "middle") 
            .style("font-size", function (d) {
              return d.size + "px";
            })
            .text(function (d) {
                return d.text;
            })
            .attr("transform", function (d) {
              return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .attr('class','wordCloud');             
      }  
    //---------------------------------------------------------------------
    // Word cloud end
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    // Lists of 10 major industries Start
    //---------------------------------------------------------------------
    wordScale = d3.scaleLinear().domain([0, 100]).range([0, 150]).clamp(true);      
    var gListInd = d3.select("svg")
              .select('g')
              .append("g")
              //.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
              
    wordCloudData2.sort(function(a,b){return d3.descending(Number(a.frequency), Number(b.frequency))})

    var colorInd = {'AI':'#F06A93', 'E-Commerce':'#CD59B1', 'Education':'#A97DD8', 'F&B':'#F38787', 'Financial Services':'#EF8D5D', 'Health Care':'#3FB68E', 'Manufacturing':'#4D78A2', 'Security':'#3AB5C2', 'Software':'#6973F6', 'Transportation':'#74ABE2'}

    maxFreq = d3.max(wordCloudData2, d => d.frequency);
    baseFontSize = 60;
    gListInd.selectAll('text')
            .data(wordCloudData2)
            .enter()
            .append('text')
            .text(function(d){ return d.text})
            .attr('x',function(d,i){
              if (i < 5){
                return width / 4 + 30
              } else {
                return width * 3 / 4
              }
            })
            .attr('y', function(d,i){
              return (i % 5) * height / 5 + + height / 10
            })
            .style('font-size',function(d){
              return Math.sqrt(d.frequency / maxFreq) * baseFontSize + "px"
            })
            .style("fill", function (d) {
              return colorInd[d.text];
            })
            .attr('text-anchor','middle')
            .attr('class','listInd')                
      
    //---------------------------------------------------------------------
    // Lists of 10 major industries End
    //---------------------------------------------------------------------

  }

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  var setupSections = function () {
    // activateFunctions are called each
    // time the active section changes  

    activateFunctions[0] = showRbc;
    activateFunctions[1] = showWordCloud;
    activateFunctions[2] = showlistInd;
    activateFunctions[3] = showYooBin;
    activateFunctions[4] = showKeondo1;
    activateFunctions[5] = showKeondo2;    
    activateFunctions[6] = showYoungJun1;
    activateFunctions[7] = showYoungJun2;
    activateFunctions[8] = showWooChul3;
    activateFunctions[9] = showWooChul2;
    activateFunctions[10] = showImage;
    //activateFunctions[11] = showTitle; 
    

    /*
    activateFunctions[0] = showTitle;    
    activateFunctions[1] = showYooBin;
    activateFunctions[2] = showRbc;
    activateFunctions[3] = showWooChul1;
    activateFunctions[4] = showWooChul2;
    activateFunctions[5] = showWooChul3;
    activateFunctions[6] = showYoungJun1;
    activateFunctions[7] = showYoungJun2;
    activateFunctions[8] = showKeondo1;
    activateFunctions[9] = showKeondo2;
    activateFunctions[10] = showWordCloud;
    activateFunctions[11] = showlistInd;
    */

    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for (var i = 0; i < 11; i++) {
      updateFunctions[i] = function () { };
    }

    //updateFunctions[2] = updateRBC
  };

  /**
   * ACTIVATE FUNCTIONS
   *
   * These will be called their
   * section is scrolled to.
   *
   * General pattern is to ensure
   * all content for the current section
   * is transitioned in, while hiding
   * the content for the previous section
   * as well as the next section (as the
   * user may be scrolling up or down).
   *
   */

    function translateSvg(){
      svg.attr('height', 1);
      d3.select('.svgWC').attr('height', 650);      
    }

    function translateSvgWC(){
      svg.attr('height', 650);
      d3.select('.svgWC').attr('height',1);   
    }
  

  /**
   * showTitle - initial title
   *
   * hides: count title
   * (no previous step to hide)
   * shows: intro title
   *
   */
  function showTitle() {

    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });

    checkIn.inTitle = 1  
    hideOthers()

    g.selectAll('.openvis-title')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);
  }

  /**
   * showFillerTitle - filler counts
   *
   * hides: intro title
   * hides: square grid
   * shows: filler count title
   *
   */
  function showYooBin() {
    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });

    checkIn.inYB1 = 1  
    
    if (timerYoutube){
      $("#youtubeclip").remove();    
    }

    hideOthers();

    g.selectAll('.YB')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);

    $('.YB')
      .css("opacity", 1)


    g.selectAll('.rectYB')
      .transition()
      .duration(600)
      .attr('opacity', 0.5);

  }
  function showRbc() {

    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });

    checkIn.inRBC = 1 
    hideOthers()

    g.selectAll('.rbc')
      .transition()
      .duration(600)
      .attr('opacity', 1);

    updateRBC();    
    }


  function showWooChul1() {
    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });

    checkIn.inWC1 = 1 
    hideOthers()

    d3.selectAll('.WC1')
      .transition()
      .duration(600)
      .attr('opacity', 1)  

    

  }

  function showWooChul2() {
    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });

    checkIn.inWC2 = 1 
    hideOthers()

    d3.selectAll('.WC2')
      .transition()
      .duration(600)
      .attr('opacity', 1);

    d3.selectAll('circle')            
      .transition()
      .duration(600)
      .attr('opacity', 0.6)
      .style('opacity',0.6);
  }

  function showWooChul3() {
    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });

    checkIn.inWC3 = 1 
    hideOthers()

    $('.WC3')
      .css('opacity', 1)

    d3.selectAll('.WC3')
      .transition()
      .duration(600)
      .attr('opacity', 1);
    
    d3.selectAll('circle')      
      .transition()
      .duration(600)
      .attr('opacity', 0.6)
      .style('opacity',0.6);
    
    $('.btn-industry')
      .css('opacity',1)
      translateSvg();
  }

  function showYoungJun1() {

    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });

    checkIn.inYJ1 = 1 
    hideOthers()

    $('.YJ1')
      .css('opacity', 1)
    
    $('.btn-industry')
      .css('opacity',1)

    updateYJ1("All Industries")
    updateYJ1("All Industries")

  }



  function showYoungJun2() {

    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });

    checkIn.inYJ2 = 1 
    hideOthers()

    updateYJ2("All Industries")
    updateYJ2("All Industries")

    $('.YJ2')
      .css('opacity', 0.8)
    
    $('.btn-industry')
      .css('opacity', 1)

    translateSvgWC();

  }

  function showKeondo1() {

    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });

    checkIn.inKD1 = 1 
    hideOthers()

    g.selectAll('.KD1')
      .transition()
      .duration(600)
      .attr('opacity', 1);

  }

  function showKeondo2() {

    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });

    checkIn.inKD2 = 1 
    hideOthers()

    $('.btn-industry')
      .css('opacity',1)

    g.selectAll('.KD2')
      .transition()
      .duration(600)
      .attr('opacity', 1);
    
    g.selectAll('.rectKD2')
      .transition()
      .duration(0 )
      .attr('opacity', 0.8);

  }

  function showWordCloud() {

    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });

    checkIn.inWordCloud = 1
    hideOthers(); 

    g.selectAll('.wordCloud')
      .transition()
      .duration(600)
      .attr('opacity', 1);
    
  }

  function showlistInd() {

    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });

    checkIn.inlistInd = 1
    hideOthers(); 

    g.selectAll('.listInd')
      .transition()
      .duration(600)
      .attr('opacity', 0.8);
    
  }

  function showImage() {

    Object.keys(checkIn).forEach(function(key){      
      checkIn[key] = 0;      
    });
    
    hideOthers(); 
    $('#imgStartup').css('height','600px');
  }

/*
  Hide all components
*/
  function hideOthers(){
    g.selectAll('.YB')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.rectYB')
      .transition()
      .duration(600)
      .attr('opacity', 0);

    $('.YB')
      .css("opacity", 0);
    
    g.selectAll('.openvis-title')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.YB')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.rectYB')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    $('.YB')
      .css("opacity", 0);

    g.select('.yearText')      
      .transition()
      .duration(1000)
      .text('')

    g.selectAll('.rbc')
      .transition()
      .duration(0)
      .attr('opacity', 0);


    d3.selectAll('.WC1')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    
    $('.btn-industry')
      .css('opacity',0);
    
    d3.selectAll('.WC2')
      .transition()
      .duration(0)
      .attr('opacity', 0);


    d3.selectAll('.WC3')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    $('.WC3')
      .css('opacity', 0)


    g.selectAll('.YJ2')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    $('.YJ2')
      .css('opacity', 0);


    g.selectAll('.YJ1')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    $('.YJ1')
      .css('opacity', 0);

    g.selectAll('.YJ2')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.KD2')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.KD1')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.rectKD2')
      .transition()
      .duration(600)
      .attr('opacity', 0);

    g.selectAll('.wordCloud')
      .transition()
      .duration(600)
      .attr('opacity', 0);
      
    g.selectAll('.listInd')      
      .transition()
      .duration(0)
      .attr('opacity', 0);   
      
      $('#imgStartup').css('height','0px');
  }


  /**
   * showAxis - helper function to
   * display particular xAxis
   *
   * @param axis - the axis to show
   *  (xAxisHist or xAxisBar)
   */
  function showAxis(axis) {
    g.select('.x.axis')
      .call(axis)
      .transition().duration(500)
      .style('opacity', 1);
  }

  /**
   * hideAxis - helper function
   * to hide the axis
   *
   */
  function hideAxis() {
    g.select('.x.axis')
      .transition().duration(500)
      .style('opacity', 0);
  }
 
  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */



  function rbcModify(raw_rbc_data) {
    rbc_data = raw_rbc_data.forEach(d => {
      d.value = +d.value,
        d.lastValue = +d.lastValue,
        d.value = isNaN(d.value) ? 0 : d.value,
        d.year = +d.year,
        d.colour = d3.hsl(Math.random() * 360, 0.75, 0.75)
    });

    return raw_rbc_data
  }



  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function (index) {
    activeIndex = index;
    var sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function (i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function (index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};


/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display(error, YB_data, raw_rbc_data, worldMapData, WC1data, USMapData, WC2data, YJPieData, KDdata, WC3data, wordCloudData, wordCloudData2) {
  

  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select('#vis')
    //.datum(data)
    .datum({
      "YB_data": YB_data,
      "raw_rbc_data": raw_rbc_data,
      "worldMapData": worldMapData,
      "WC1data": WC1data,
      "USMapData": USMapData,
      "WC2data": WC2data,
      "YJPieData": YJPieData,
      "KDdata": KDdata,
      "WC3data": WC3data,
      "wordCloudData": wordCloudData,
      "wordCloudData2": wordCloudData2
    })
    .call(plot);

  // setup scroll functionality
  var scroll = scroller()
    .container(d3.select('#graphic'));

  // pass in .step selection as the steps
  scroll(d3.selectAll('.step'));

  // setup event handling
  scroll.on('active', function (index) {
    // highlight current step text
    d3.selectAll('.step')
      .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

    // activate current section
    plot.activate(index);
  });

  scroll.on('progress', function (index, progress) {
    plot.update(index, progress);
  });
  
}

//---------------------------------------------------------------------
// Yoobin's bar chart filter interactions start
//---------------------------------------------------------------------  

d3.selectAll("filter").on("change", updateBarYB)
updateBarYB()
d3.selectAll(".industry1").on("change", updateBarYB)
updateBarYB()
d3.selectAll(".industry2").on("change", updateBarYB)
updateBarYB()


function updateBarYB() {
  d3.selectAll(".filter").each(function (d) {
    bt = d3.select(this)
    if (bt.property("checked")) {
      svg = d3.select(this).selectAll('.svgBase')
      g = d3.selectAll('.svgBase').select('g')
      console.log(svg)
      g.select("#bar0").transition().attr("opacity", 0)
      g.select("#bar1").transition().attr("opacity", 0)
      g.select("#bar2").transition().attr("opacity", 0)
      g.selectAll("#bar3").transition().attr("opacity", 0)
      g.selectAll("#bar4").transition().attr("opacity", 0)
      g.selectAll("#bar5").transition().attr("opacity", 0)
      g.selectAll("#bar6").transition().attr("opacity", 0)
      g.selectAll("#bar7").transition().attr("opacity", 0)

      d3.selectAll(".industry1").each(function (d) {
        cb = d3.select(this)
        grp = cb.property("value")

        if (cb.property("checked")) {
          num = ind_list.indexOf(cb.property("value"))
          if(num==-1){
            num = 10
          }
          g.selectAll("#bar" + num).transition().attr("opacity", 0.25)
        }
        else {
          num = ind_list.indexOf(cb.property("value"))
          if(num==-1){
            num = 10
          }
          g.selectAll("#bar" + num).transition().attr("opacity", 0)
        }
      })

      d3.selectAll(".industry2").each(function (d) {
        cb = d3.select(this)
        grp = cb.property("value")

        if (cb.property("checked")) {
          console.log(cb.property("value"))
          num = ind_list.indexOf(cb.property("value"))
          if(num==-1){
            num = 10
          }
          g.selectAll("#bar" + num).transition().attr("opacity", 1)
        }
      })
    }
  }
  )
}

//---------------------------------------------------------------------
// END 
//---------------------------------------------------------------------  


// A function that create / update the plot for a given variable:
function updateYJ2(Industry) {

  if (!checkIn.inYJ2) return;

  data = YJ2dataMap[Industry];

  var YJ2width = 650
  YJ2height = 650
  YJ2margin = 40

  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  // var radius = Math.min(width, height) / 2 - margin
  var YJ2radius = 200

  // append the svg object to the div called 'my_dataviz'
  svgYJ2 = d3.selectAll('.svgBase')
  gYJ2 = svgYJ2.select('g').append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
  gYJ2.append("g")
    .attr("class", "slices");
  gYJ2.append("g")
    .attr("class", "labels");
  gYJ2.append("g")
    .attr("class", "lines");


  // set the color scale
  var YJ2color = d3.scaleOrdinal()
    .domain(['Engineering', 'Economics', 'Business', 'Natural Science', 'etc'])
    // .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);
    .range(d3.schemeDark2);



  // Compute the position of each group on the pie:
  var YJ2pie = d3.pie()
    .value(function (d) { return d.value; })
  // .sort(null)
  // .sort(function(a, b) { console.log(a) ; return d3.ascending(a.key, b.key);} ) // This make sure that group order remains the same in the pie chart
  var YJ2arc = d3.arc().innerRadius(YJ2radius / 3).outerRadius(YJ2radius);
  var YJ2outerArc = d3.arc()
    .innerRadius(YJ2radius * 0.9)
    .outerRadius(YJ2radius * 0.9);
  var data_ready = YJ2pie(d3.entries(data))

  // map to data
  var YJ2u = svgYJ2.select(".slices").selectAll("path")
    .data(data_ready)

  // var YJ2u = gYJ2.selectAll("path")
  //   .data(data_ready)

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  YJ2u
    .enter()
    .append('path')
    .merge(YJ2u)
    .transition()
    .duration(500)
    .attr('d', YJ2arc)
    .attr('fill', function (d) { return (YJ2color(d.data.key)) })
    .attr("stroke", "grey")
    .style("stroke-width", "2px")
    .attr('class', 'YJ2')
    //.attr('opacity',0);;

  // remove the group that is not present anymore
  YJ2u
    .exit()
    .remove();

  function midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }
  function percentage(d) {
    return (d.endAngle - d.startAngle) / (2 * Math.PI) * 100;
  }
  var YJ2text = svgYJ2.select(".labels").selectAll("text")
    .data(data_ready);

  YJ2text
    .enter()
    .append("text")
    .merge(YJ2text)
    .attr("dy", ".35em")
    .text(function (d) {      
      return d.data.key + " ( " + percentage(d).toFixed(1) + "% )";
    })

    .attr('fill', '#000000')
    .attr('class', 'YJ2');



  YJ2text.transition().duration(1000)
    .attrTween("transform", function (d) {
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function (t) {
        var YJ2d2 = interpolate(t);
        var YJ2pos = YJ2outerArc.centroid(YJ2d2);
        YJ2pos[0] = YJ2radius * (midAngle(YJ2d2) < Math.PI ? 1.3 : -1.3);
        return "translate(" + YJ2pos + ")";
      };
    })
    .styleTween("text-anchor", function (d) {
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function (t) {
        var YJ2d2 = interpolate(t);
        return midAngle(YJ2d2) < Math.PI ? "start" : "end";
      };
    });

  YJ2text.exit()
    .remove();


  var polyline = svgYJ2.select(".lines").selectAll("polyline")
    .data(data_ready);

  polyline.enter()
    .append("polyline")
    .attr('class', 'YJ2')
    .attr('stroke', '#000000')
    .attr('fill', 'transparent');

  polyline.transition().duration(1000)
    .attrTween("points", function (d) {
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function (t) {
        var d2 = interpolate(t);
        var pos = YJ2outerArc.centroid(d2);
        pos[0] = YJ2radius * 1.2 * (midAngle(d2) < Math.PI ? 1 : -1);
        return [YJ2arc.centroid(d2), YJ2outerArc.centroid(d2), pos];
      };
    });

  polyline.exit()
    .remove();
}

var YJ1index = 0

// A function that create / update the plot for a given variable:
function updateYJ1(Industry) {

  if (!checkIn.inYJ1) return;

  data = YJ1dataMap[Industry];

  
  if (YJ1index) {
    d3.selectAll(".YJ1axis").remove();
    d3.selectAll(".YJ1_form").exit();

  }
  YJ1svg = d3.selectAll('svg')

  YJ1g = YJ1svg.select('g').append('g').attr('transform', 'translate(' + 20 + ',' + 0 + ')')

  YJ1g.append("g")
    .attr("class", "bars");

  YJ1g.append("g")
    .attr("class", "axis");

  // Initialize the X axis
  var YJ1x = d3.scaleBand()
    .range([0, width])
    .padding(0.3);

  var YJ1xAxis = YJ1g.select(".axis").append("g")
    .attr("transform", "translate(0," + height + ")")
    .attr("class", "YJ1 YJ1axis")


  // Initialize the Y axis
  var YJ1y = d3.scaleLinear()
    .range([height, 0]);

  var YJ1yAxis = YJ1g.append("g")
    .attr("class", "YJ1 YJ1axis")
    .style('font-size', 10)
  
  YJ1index += 1

  // Update the X axis
  YJ1x.domain(data.map(function (d) { return d.name; }))
  YJ1xAxis.call(d3.axisBottom(YJ1x))


  // Update the Y axis
  YJ1y.domain([0, d3.max(data, function (d) { return d.value })]);
  YJ1yAxis.transition().duration(500).call(d3.axisLeft(YJ1y));

  var YJ1tooltip = d3.select("body").append("div")
    .append('g')
    .attr("class", "YJ1 YJ1toolTip")
    ;

  // Create the u variable
  var YJ1u = YJ1svg.select(".bars").selectAll("rect")
    .data(data)

  YJ1u
    .enter()
    .append("rect") // Add a new rect for each new elements
    .merge(YJ1u) // get the already existing elements as well
    .transition() // and apply changes to all of them
    .duration(1000)
    .attr("x", function (d) { return YJ1x(d.name); })
    .attr("y", function (d) { return YJ1y(d.value); })
    .attr("width", YJ1x.bandwidth())
    .attr("height", function (d) { return height - YJ1y(d.value); })
    .attr("rx", 10)
    .attr('fill', d => d.color)
    .attr('class', 'YJ1')
    //.attr('opacity',0);

  YJ1g.selectAll("rect")
    .on("mouseover", function () { YJ1tooltip.style("display", "block"); })
    .on("mouseout", function () { YJ1tooltip.style("display", "none"); })
    .on("mousemove", function (d) {
      YJ1tooltip.style("left", (d3.event.pageX + 10) + "px");
      YJ1tooltip.style("top", (d3.event.pageY - 10) + "px");
      YJ1tooltip.style('z-index', '999')
      YJ1tooltip.html("<br><p style='font:15px sans-serif'> <strong>" + d.name + "</strong> <br><span style='color:white'>" + d.value + "</span>");
    });
  // If less name in the new dataset, I delete the ones not in use anymore
  YJ1u
    .exit()
    .remove();

  YJ1g
    .exit()
    .remove();
}


function updateRBC() {

  d3.queue()
    .defer(d3.csv, 'data/rbc_112006.csv')
    .await(function (error, rbc_data) {
      let year = 2008;
      let top_n = 4;
      let tickDuration = 500;
      let barPadding = (height - (margin.bottom + margin.top)) / (top_n * 5);

      rbc_data.forEach(d => {
        d.value = +d.value,
          d.lastValue = +d.lastValue,
          d.value = isNaN(d.value) ? 0 : d.value,
          d.year = +d.year,
          d.colour = d3.hsl(Math.random() * 360, 0.75, 0.75)
      });

    gRbc = d3.select('.svgBase')
                .select('.gRbc')                 

    let ticker = d3.interval(e => {

      if (checkIn.inRBC == 0) {
        ticker.stop();
        gRbc.select('.yearText')      
          .transition()
          .duration(1000)
          .text('')

        gRbc.attr('opacity',0)
      } else {
        gRbc.attr('opacity',1)
        year = d3.format('.1f')((+year) + 0.1);             
      }       
    
      yearSlice = rbc_data.filter(d => Number(d.year) == Number(year) && !isNaN(d.value))
        .sort((a, b) => b.value - a.value)
        .slice(0, top_n);
    
      yearSlice.forEach((d, i) => d.rank = i);         
    
      let xRbc = d3.scaleLinear()
        .domain([0, d3.max(yearSlice, d => d.value)])
        .range([margin.left, width - margin.right - 100]);
        
        
      let xAxisRbc = d3.axisTop()
      .scale(xRbc)
      .ticks(width > 500 ? 5 : 2)
      .tickSize(-(height - margin.top - margin.bottom))
      .tickFormat(d => d3.format(',')(d))

      let yRbc = d3.scaleLinear()
      .domain([top_n, 0])
      .range([height - margin.bottom, margin.top + 55]);      
    
      gRbc.select('.xAxisRbc')
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .call(xAxisRbc);
    
      let bars = gRbc.selectAll('.barRbc')
                      .data(yearSlice, d => d.name);   

      xRbc = d3.scaleLinear()
        .domain([0, d3.max(yearSlice, d => d.value)])
        .range([margin.left, width - margin.right - 100]);      
                      
      bars.enter()
        .append('rect')
        .attr('class', d => `barRbc ${d.name.replace(/\s/g, '_')}`)
        .classed('rbc', true)
        .attr('x', xRbc(0) + 1)
        .attr('width', d => xRbc(d.value) - xRbc(0) - 1)        
        .attr('y', d => yRbc(top_n + 1) + 5)
        .attr('height', yRbc(1) - yRbc(0) - barPadding)
        .style('fill', d => d.colour)
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('y', d => yRbc(d.rank) + 5);
    
      bars.transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('width', d => xRbc(d.value) - xRbc(0) - 10)
        .attr('y', d => yRbc(d.rank) + 5)        
    
      bars.exit()
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('width', d => xRbc(d.value) - xRbc(0) - 10)
        .attr('y', d => yRbc(top_n + 1) + 5)
        .remove();
    
      let labels = gRbc.selectAll('.labelRbc')
        .data(yearSlice, d => d.name);

      
    
      labels.enter()
        .append('text')
        .attr('class', 'labelRbc rbc')
        .attr('x', d => xRbc(d.value) - 20)
        .attr('y', d => yRbc(top_n + 1) + ((yRbc(1) - yRbc(0)) / 2))
        .style('text-anchor', 'end')
        .attr('fill', '#000000')
        .style("font-size", "24px")
        .html(d => labelsMap[d.name])
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('y', d => yRbc(d.rank) + ((yRbc(1) - yRbc(0)) / 2));
    
      labels.transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('fill', '#000000')
        .style("font-size", "24px")
        .attr('x', d => xRbc(d.value) - 20)
        .attr('y', d => yRbc(d.rank) + ((yRbc(1) - yRbc(0)) / 2));
    
      labels.exit()
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', d => xRbc(d.value) - 100)
        .attr('y', d => yRbc(top_n + 1) + 5)
        .remove();
    
      let valueLabels = gRbc.selectAll('.valueLabel').data(yearSlice, d => d.name);
    
      valueLabels.enter()
        .append('text')
        .attr('class', 'valueLabel rbc')
        .attr('x', d => xRbc(d.value) + 5)
        .attr('y', d => yRbc(top_n + 1) + 5)
        .text(function (d) { return d3.format(',.0f')(d.lastValue) })
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0)) / 2) + 1)
        .attr('fill', '#000000')
        .style('text-anchor', 'start')
        .style("font-size", "24px");
    
      valueLabels.transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', d => xRbc(d.value) + 5)
        .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0)) / 2) + 1)        
        .attr('id',d => d.name)
        .tween("text", function (d) {
          let i = d3.interpolateRound(d.lastValue, d.value);          
          if (this.id == 'goog'){            
            textThis = this            
            return function (t) {               
              textThis.textContent = d3.format(',')(i(t));              
            };
          } else if (this.id == 'amzn'){            
            textThis2 = this            
            return function (t) {               
              textThis2.textContent = d3.format(',')(i(t));              
            };
          } else if (this.id == 'fb'){            
            textThis3 = this            
            return function (t) {               
              textThis3.textContent = d3.format(',')(i(t));              
            };
          } else if (this.id == 'apple'){            
            textThis4 = this            
            return function (t) {               
              textThis4.textContent = d3.format(',')(i(t));              
            };
          }
        })
        .attr('fill', '#000000')
        .style("font-size", "24px")
        .style('text-anchor', 'start');
    
      valueLabels.exit()
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', d => xRbc(d.value) + 5)
        .attr('y', d => yRbc(top_n + 1) + 5)
        .remove();
    
    
        
      d3.selectAll('.svgBase')
        .select('.gRbc')
        .select('.yearText')          
        .html(~~year);
    
      if (year >= 2020) ticker.stop();      
    }, tickDuration);
  })
}


function updateWC3(Industry){
  if (!checkIn.inWC3) return;

  WC3data = WC3dataMap[Industry] 

  // function add
  function handleMouseOver(d) {  // Add interactivity

    console.log("WC3 mouse over")

    WC3tooltip = d3.select('body').select('#tooltipWC3')
      .attr('class', 'tooltip')
      .attr('id', 'tooltipWC3')

    WC3tooltip.style('opacity', 0.9)

    //Information to display on tooltip
    WC3tooltip.html(function () {
      return d.city + "," + d.city_ind_count
    })
      .style('left', d3.event.pageX + 10 + 'px')
      .style('top', d3.event.pageY - 28 + 'px')
  }

  function handleMouseOut(d, i) {
    WC3tooltip = d3.select('body').select('#tooltipWC3')
      .attr('class', 'tooltip')
      .attr('id', 'tooltipWC3')
    WC3tooltip.style('opacity', 0)
  }

  d3.csv(WC3data, function (error, data) {
    if (error) throw error;

    var projectionWC3 = d3.geoMercator()
      .translate([width / 2.2, height / 1.5]);

    //var WC3u = d3.selectAll('.svgWC')
    //  .select('g')
    var WC3u = d3.select('#places_WC3')
      .selectAll("circle")
      .data(data)


    maxCount = d3.max(data, d => Number(d.city_ind_count))    

    WC3u
      .enter()
      .append("circle")
      .merge(WC3u)
      .attr("cx", function (d) { return projectionWC3([d.long, d.lat])[0]; })
      .attr("cy", function (d) { return projectionWC3([d.long, d.lat])[1]; })
      .attr("r", function (d) { return Math.sqrt(d.city_ind_count / maxCount) * 30 })
      .style("fill", function(d) { return d.color })
      .attr('class', 'WC3')
      .attr("opacity",0.6)

    WC3u
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    WC3u
      .exit()
      .remove();
  })
};


function updateKD2(Industry){
  if (!checkIn.inKD2) return;

  d3.select('.svgBase')
      .select('g')      
      .selectAll(`.rectKD2`)
      .attr('opacity', 0)

  if (Industry != 'All Industries'){
    d3.select('.svgBase')
      .select('g')      
      .selectAll(`.rectKD2`)
      .attr('opacity', 0.8)

    d3.select('.svgBase')
      .select('g')
      .select(`#rectKD2_${Industry}`)
      .attr('opacity', 0)
  }
}

/*
  Button control center
*/
function updateButtonClick(Industry){

  if (checkIn.inWC3){
    updateWC3(Industry)
  } else if (checkIn.inYJ1) {
    updateYJ1(Industry)
  } else if (checkIn.inYJ2) {
    updateYJ2(Industry)
  } else if (checkIn.inKD2) {
    updateKD2(Industry)
  }
}


// load data and display
//d3.tsv('data/words.tsv', display);
d3.queue()
  .defer(d3.csv, 'data/final.csv')
  .defer(d3.csv, 'data/rbc_112006.csv')
  .defer(d3.json, "https://unpkg.com/world-atlas@1/world/110m.json")
  .defer(d3.csv, "data/map_1_nov27.csv")
  .defer(d3.json, "https://unpkg.com/us-atlas@1/us/10m.json")
  .defer(d3.csv, 'data/map2_nov30.csv')
  .defer(d3.csv, "data/korea_major_rank.csv")
  .defer(d3.tsv, 'data/crunch_data_grp_NoEmployees2.tsv')
  .defer(d3.csv, "wc_map/map3_data/map3_dec4_0.csv")
  .defer(d3.csv, "data/wordCloudData.csv")
  .defer(d3.csv, "data/wordCloudData2.csv")
  .await(display)
