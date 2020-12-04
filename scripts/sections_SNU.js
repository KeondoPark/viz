var ind_list = ["AllIndustries", "AI",	"Ecommerce", "Education", "F&B", "Financial","Healthcare","Manufacturing","Security","Software","Transportation"]
var inTitle = 0, inYB1 = 0, inRBC = 0, inWC1 = 0, inWC2 = 0, inYJ1 = 0, inYJ2 = 0, inKD1 = 0, inKD2 = 0
var funding_order = {'Seed':1, "Series A":2, 'Series B':3, 'Series C':4, 'Series D+':5, 'M&A':6, 'IPO':7, 'Others':8}
var funding_label = {1:'Seed', 2:"Series A", 3:'Series B', 4:'Series C', 5:'Series D+', 6:'M&A', 7:'IPO', 8:'Others'}
  


/**
 * scrollVis - encapsulates
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var scrollVis = function () {  
  // constants to define the size
  // and margins of the vis area.
  var width = 1200;
  var height = 520;
  var margin = { top: 0, left: 20, bottom: 40, right: 10 };

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
   * @param selection - the current d3 selection(s)
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function (selection) {
    selection.each(function (data) {      

      var KDdata = data.data1
      var YB_data = data.data2  
      var raw_rbc_data = data.data3    
      var worldMapData = data.data4    
      var WC1data = data.data5
      var YJPieData = data.data6
      
      // create svg and give it a width and height
      //svg = d3.select(this).selectAll('svg')//.data([YB_data]);
      svg = d3.select("#vis").append("svg")
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

      setupVis(KDdata, YB_data, rbc_data, worldMapData, WC1data, YJPieData);

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
  var setupVis = function (KDdata, YB_data, rbc_data, worldMapData, WC1data, YJPieData) {        
    
    //---------------------------------------------------------------------
    // Yoobin's bar chart start
    //---------------------------------------------------------------------
    let xYB = d3.scaleBand().rangeRound([0, width]).padding(0.1);
    let yYB = d3.scaleLinear().rangeRound([height,0]);

    xYB.domain(YB_data.map(function(d) { return d.type; }));    
    maxYYB = d3.max(YB_data, d => +d.value)
    selected = ind_list
    filtered = YB_data.filter(function(d){     
      return selected.includes(d.ind_list)})
    yYB.domain([0, d3.max(filtered, function(d) { return +d.value; })*1.2]);

    g.append("g")
        .attr("class", "x_axis axis YB")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xYB));

    g.append("g")
        .attr("class", "axis y_axis YB")
        .call(d3.axisLeft(yYB));

    g.selectAll(".rect")
        .data(filtered)
        .enter().append("rect")
        .attr("id", function(d) {
            return "bar" + ind_list.indexOf(d.ind_list)}  )
        .attr("y", function(d) {             
            return yYB(+d.value)})
        .attr("x", function(d) { return xYB(d.type)+8 * ind_list.indexOf(d.ind_list); })
        .attr("height", function(d) { return height - yYB(+d.value); })
        .attr("width", xYB.bandwidth()/4)
        .attr("class","rectYB")  

    var legendYB = g.selectAll(".legend")
      .data(filtered)
      .enter()
      .append("g")
      .attr("class", "legend YB")      

    var legend_keys = ["AllIndustries", "AI",	"Ecommerce", "Education", "F&B", "Financial","Healthcare","Manufacturing","Security","Software","Transportation"]

    var lineLegend = g.selectAll(".legend").data(legend_keys)
        .enter()
        .append("g")
        .attr("class", "legend YB")

    lineLegend.append("text").text(function(d) {return d;})
        .attr("transform", "translate(15,9")
    lineLegend.append("rect").attr("fill", function (d,i) {
                return "bar"+ind_list.indexOf(d).style("fill")
              })
        .attr("width", 10)
        .attr("height", 10)

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

    const halo = function(text, strokeWidth) {
      text.select(function() { return this.parentNode.insertBefore(this.cloneNode(true), this); })
        .style('fill', '#ffffff')
         .style( 'stroke','#ffffff')
         .style('stroke-width', strokeWidth)
         .style('stroke-linejoin', 'round')         
         .style('opacity', 0)
         .attr('class','rbc');
       
    } 

    /*
    let rbcTitle = g
            .append('g')
            .append('text')
            .attr('class', 'rbc')
            //.attr('x', 100)
            .attr('y', 24)
            .attr('text-anchor','start')
            .attr('fill', '#5487b1')
            .html('Footprint of my Successful Business will go on')
            .attr('opacity',0);
            */

    let rbcSubTitle = g.append("text")
        .attr("class", "rbc")
        .attr("y", 40)
        .attr('text-anchor','start')
        .html("Total Asset, $m")
        .attr('opacity',0)
        .attr('fill', '#5487b1')
        ;

    let rbcCaption = g.append('text')
        .attr('class', 'rbc')
        .attr('x', width)
        .attr('y', height - 5)
        .style('text-anchor', 'end')
        .attr('fill', '#5487b1')
        .html('Source: CrunchBase, yChart')
        .attr('opacity',0);

    let yearSlice = rbc_data.filter(d => d.year == year && !isNaN(d.value))
      .sort((a,b) => b.value - a.value)
      .slice(0, top_n);

    yearSlice.forEach((d,i) => d.rank = i);

    let xRbc = d3.scaleLinear()
        .domain([0, d3.max(yearSlice, d => d.value)])
        .range([margin.left, width-margin.right-65]);
    
    let yRbc = d3.scaleLinear()
        .domain([top_n, 0])
        .range([height-margin.bottom, margin.top + 55]);
    
    let xAxisRbc = d3.axisTop()
        .scale(xRbc)
        .ticks(width > 500 ? 5:2)
        .tickSize(-(height-margin.top-margin.bottom))
        .tickFormat(d => d3.format(',')(d))

    g.append('g')
        .attr('class', 'rbc xAxisRbc')
        //.attr('transform', `translate(0, ${margin.top})`)
        .attr('transform', `translate(0, 30)`)
        .call(xAxisRbc)        
        .selectAll('.tick line')
        .classed('origin', d => d == 0)
        ;    

    g.selectAll('rect.bar')
        .data(yearSlice, d => d.name)
        .enter()
        .append('rect')
        .attr('class', 'barRbc rbc')
        .attr('x', xRbc(0)+1)
        .attr('width', d => xRbc(d.value) - xRbc(0) - 1)
        .attr('y', d => yRbc(d.rank)+5)
        .attr('height', yRbc(1) - yRbc(0) - barPadding)
        .style('fill', d => d.colour)
        .attr('opacity', 0)
        ;
    
    g.selectAll('text.label')
        .data(yearSlice, d => d.name)
        .enter()
        .append('text')
        .attr('class', 'labelRbc rbc')
        .attr('x', d => xRbc(d.value) - 8)
        .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0))/2) + 1)
        .style('text-anchor', 'end')
        .html(d => d.name)
        ;
  
    g.selectAll('.valueLabel')        
        .data(yearSlice, d => d.name)
        .enter()
        .append('text')
        .attr('class', 'valueLabel rbc')
        .attr('x', d => xRbc(d.value)+5)
        .attr('y', d => yRbc(d.rank)+5+((yRbc(1)-yRbc(0))/2)+1)
        .text(d => d3.format(',.0f')(d.lastValue))
        ;
  
    let yearTextRbc = g.append('text')
        .attr('class', 'yearText rbc')
        .attr('x', width-margin.right)
        .attr('y', height-25)
        .style('text-anchor', 'end')
        .attr('opacity',0)
        .html(~~year)
        .call(halo, 10)        

    let ticker = d3.interval(e => {      

          if (inRBC == 0) {
            ticker.stop();
          } else {
            year = d3.format('.1f')((+year) + 0.1);
            /*
            g.selectAll('.rbc')
            .transition()
            .duration(600)
            .attr('opacity', 0);
            */
            //ticker.start();            
          }
          yearSlice = rbc_data.filter(d => d.year == year && !isNaN(d.value))
            .sort((a,b) => b.value - a.value)
            .slice(0,top_n);
    
          yearSlice.forEach((d,i) => d.rank = i);          
    
          xRbc.domain([0, d3.max(yearSlice, d => d.value)]); 
         
          g.select('.xAxisRbc')
            .transition()
            .duration(tickDuration)
            .ease(d3.easeLinear)
            .call(xAxisRbc);
        
          let bars = g.selectAll('.barRbc').data(yearSlice, d => d.name);
        
          bars.enter()
            .append('rect')
            .attr('class', d => `barRbc ${d.name.replace(/\s/g,'_')}`)
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
            .attr('width', d => xRbc(d.value) - xRbc(0) - 1)
            .attr('y', d => yRbc(d.rank) + 5);
                
          bars.exit()
            .transition()
            .duration(tickDuration)
            .ease(d3.easeLinear)
            .attr('width', d => xRbc(d.value) - xRbc(0) - 1)
            .attr('y', d => yRbc(top_n+1) + 5)
            .remove();    
            
          let labels = g.selectAll('.labelRbc')              
              .data(yearSlice, d => d.name);
         
          labels.enter()
            .append('text')
            .attr('class', 'labelRbc rbc')
            .attr('x', d => xRbc(d.value)-8)
            .attr('y', d => yRbc(top_n+1)+5+((yRbc(1)-yRbc(0))/2))
            .style('text-anchor', 'end')
            .attr('fill', '#000000')            
            .style("font-size", "24px")
            .html(d => d.name)    
            .transition()
            .duration(tickDuration)
            .ease(d3.easeLinear)
            .attr('y', d => yRbc(d.rank)+5+((yRbc(1)-yRbc(0))/2)+1);                 
        
          labels.transition()
            .duration(tickDuration)
            .ease(d3.easeLinear)
            .attr('fill', '#000000')   
            .style("font-size", "24px")         
            .attr('x', d => xRbc(d.value) - 8)
            .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1)-yRbc(0))/2)+1);
      
          labels.exit()
            .transition()
            .duration(tickDuration)
            .ease(d3.easeLinear)
            .attr('x', d => xRbc(d.value)-8)
            .attr('y', d => yRbc(top_n+1)+5)
            .remove();


             
          let valueLabels = g.selectAll('.valueLabel').data(yearSlice, d => d.name);                
          
          valueLabels.enter()
            .append('text')
            .attr('class', 'valueLabel rbc')
            .attr('x', d => xRbc(d.value) + 5)
            .attr('y', d => yRbc(top_n+1) + 5)
            .text(function(d){ return d3.format(',.0f')(d.lastValue) })
            .transition()
            .duration(tickDuration)
            .ease(d3.easeLinear)
            .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0))/2) + 1)
            .attr('fill', '#000000')     
            .style('text-anchor', 'start')       
            .style("font-size", "24px");
                
          valueLabels.transition()
            .duration(tickDuration)
            .ease(d3.easeLinear)
            .attr('x', d => xRbc(d.value) + 5)
            .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0))/2)+1)            
            .tween("text", function(d) {              
                let i = d3.interpolateRound(d.lastValue, d.value);
                return function(t) {                  
                  this.textContent = d3.format(',')(i(t));
              };
            })
            .attr('fill', '#000000')            
            .style("font-size", "24px")
            .style('text-anchor', 'start')            ;          
         
          valueLabels.exit()
            .transition()
            .duration(tickDuration)
            .ease(d3.easeLinear)
            .attr('x', d => xRbc(d.value)+5)
            .attr('y', d => yRbc(top_n+1)+5)
            .remove();
            
        
          yearTextRbc.html(~~year);
         
         if(year >= 2020) ticker.stop();
         year = d3.format('.1f')((+year) + 0.1);
       }, tickDuration);    
     
    //---------------------------------------------------------------------
    // Woochul's racing bar chart end
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    // Woochul's map 1 start
    //---------------------------------------------------------------------
    
    var map = g.append('g').attr("id", "map_WC1").attr("class","WC1").attr("opacity", 0), 
      places = g.append('g').attr("id", "places_WC1").attr("class","WC1").attr("opacity", 0);

    var projection = d3.geoMercator()
        .translate([width / 2.2, height / 1.5]);
        
    var path = d3.geoPath()
        .projection(projection);
    
    var features = topojson.feature(worldMapData, worldMapData.objects.countries).features;
  
    g.append('g').selectAll("path")
        .data(features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#b8b8b8")
        .attr("class", "WC1")
        .attr('opacity',0)
        .lower();

    //Define tooltip
    var tooltip_wc1 = d3.select('body').append('div')
        .attr('class','tooltip WC1')      
        .attr('id','tooltipWC1')
        .style('opacity',0)  

    places.selectAll("circle")
        .data(WC1data)
        .enter().append("circle")
        .attr("cx", function(d) { return projection([d.long, d.lat])[0]; })
        .attr("cy", function(d) { return projection([d.long, d.lat])[1]; })
        .attr("r", function(d) { return d.city_count })
        .attr("class", "WC1")
        .attr("opacity", 0)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);
    
    places.selectAll("text")
        .data(WC1data)
        .enter().append("text")
        .attr("x", function(d) { return projection([d.long, d.lat])[0]; })
        .attr("y", function(d) { return projection([d.long, d.lat])[1] + 8; })
        .attr("class", "WC1")
        .attr("opacity", 0)

    function handleMouseOver(d) {  // Add interactivity

      if (inWC1){
        tooltip_wc1.style('opacity',0.9)
        //Information to display on tooltip
        tooltip_wc1.html(function(){
            return d.city + d.city_count
        })
        .style('left', d3.event.pageX + 10 + 'px')
        .style('top', d3.event.pageY - 28 + 'px')
      }
    }

    function handleMouseOut(d, i) {
      tooltip_wc1.style('opacity',0)
    }  
        
    //---------------------------------------------------------------------
    // Woochul's map 1 end
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    // Woochul's map 2 start
    //---------------------------------------------------------------------


    //---------------------------------------------------------------------
    // Woochul's map 2 end
    //---------------------------------------------------------------------


    //---------------------------------------------------------------------
    // Youngjun's bar start
    //---------------------------------------------------------------------

    const YJ1data = [  
      {name: 'SNU', value: 119, color: '#5487b1'},
      {name: 'KAIST', value: 52, color: '#63a1af'},
      {name: 'Korea', value: 40, color: '#7ab8aa'},
      {name: 'Yonsei', value: 32, color: '#93caa8'},
      {name: 'Hanyang', value: 23, color: '#add7a8'},
      {name: 'Stanford', value: 14, color: '#c6e3a7'},
      {name: 'POSTECH', value: 10, color: '#c6e3a7'},
      {name: 'Columbia', value: 9, color: '#c6e3a7'},
      {name: 'CMU', value: 8, color: '#c6e3a7'},
      {name: 'SKKU', value: 7, color: '#c6e3a7'},
      {name: 'Columbia', value: 6, color: '#c6e3a7'},
      {name: 'KHU', value: 6, color: '#c6e3a7'},
      {name: 'MIT', value: 6, color: '#c6e3a7'},
      {name: 'PNU', value: 6, color: '#c6e3a7'},
      {name: 'Hongik', value: 6, color: '#c6e3a7'},
      {name: 'UPENN', value: 5, color: '#c6e3a7'},
      {name: 'NU', value: 5, color: '#c6e3a7'},
      {name: 'Kangwon', value: 5, color: '#c6e3a7'},
      {name: 'Harvard', value: 5, color: '#c6e3a7'},
      {name: 'UC Berkley', value: 5, color: '#c6e3a7'},
      {name: 'Ajou', value: 5, color: '#c6e3a7'},
      {name: 'Cornell', value: 5, color: '#c6e3a7'}
    ];


    const xYJ = d3.scaleBand()
      .domain(YJ1data.map(d => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.3);

    const yYJ = d3.scaleLinear()
        .domain([0, d3.max(YJ1data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);

    const xAxisYJ = g => g
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xYJ).tickSizeOuter(0))
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('line').remove())
      .attr('class','YJ1');

    const yAxisYJ = g => g
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yYJ))
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('line')
                .attr('x2', width)
                .style('stroke', '#f5f5f5'))
      .attr('class','YJ1');


    //const svg = d3.select('#svg-area').append('svg').style('width', width).style('height', height);

    g.call(xAxisYJ);
    g.call(yAxisYJ);
    //svg.append('g')
    g.append('g')
      .selectAll('rect')
      .data(YJ1data)
      .enter()
      .append('rect')
      .attr('x', d => xYJ(d.name))
      .attr('y', d => yYJ(d.value))
      .attr('height', d => yYJ(0) - yYJ(d.value))
      .attr("rx", 15)
      .attr('width', xYJ.bandwidth())
      .attr('fill', d => d.color)
      .attr('data-x', d => d.name)
      .attr('data-y', d => d.value)
      .attr('data-color', d=> d.color)
      .attr('class', 'rectYJ YJ1')
      .attr('opacity', 0)

    svg.node();

    const rectEl = document.getElementsByClassName('rectYJ');
    //const tooltop = document.getElementById('tooltip');  
    
    var tooltip_YJ1 = d3.select('body').append('div')
      .attr('class','tooltip YJ1')      
      .attr('id','tooltipYJ1')
      .style('opacity', 0)

    for(const el of rectEl) {     
      el.addEventListener('mouseover', (event) => {        
        var tooltip = document.getElementById('tooltipYJ1');

        const target = event.target;
        const positionLeft = Number(target.getAttribute('x')) + Number(xYJ.bandwidth()/2) - tooltip.clientWidth/2;
        const positionTop = height - margin.top - target.getAttribute('height') - tooltip.clientHeight - 5;
        const color = target.dataset.color;
        const value = target.dataset.y;        

        tooltip.innerText = value;
        tooltip.style.background = color;
        tooltip.style.top = positionTop + 'px';
        tooltip.style.left = positionLeft + 'px';
        tooltip.style.opacity = 1;
      });
    }

    //---------------------------------------------------------------------
    // Youngjun's bar end
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    // Youngjun's pie start
    //---------------------------------------------------------------------

    YJPieData = YJPieData.map(d => ({
      major: d.major,
      count: +d.count
    }))
  
    let pie = d3.pie()
      .value(d => d.count);
      
    let colorScale = d3.scaleOrdinal()
      .range(d3.schemeCategory10)
      .domain(YJPieData.map(d => d.major))
     
    let arc = d3.arc()
      .outerRadius(height / 2)
      .innerRadius(30);

    var tooltip_YJ2 = d3.select('body').append('div')
      .attr('class','tooltip YJ2')      
      .attr('id','tooltipYJ2')
      .style('opacity', 0)

    //g //.selectAll(".arc")
    g.selectAll(".arc")
      .data(pie(YJPieData))
      .enter()
      .append("g")
      .attr("class","YJ2")
      .on("mouseover", function (d) {       

        d3.select("#tooltipYJ2")
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY + "px")
          .style("opacity", 1)
          .select("#value")
          .text(d.value);
      })
      .on("mouseout", function () {
          // Hide the tooltip    
          d3.select("#tooltipYJ2")
            .style("opacity", 0);;
      })
      .append("path")
      .attr("d", arc)
      .attr("fill", d => {
          return colorScale(d.data.major)
      })
      .attr("class","YJ2")
      .attr("opacity",0)
      .attr('transform', `translate(${width/2}, ${height/2})`)

    //---------------------------------------------------------------------
    // Youngjun's pie end
    //--------------------------------------------------------------------- 
    
    //---------------------------------------------------------------------
    // Keondo's line chart start
    //---------------------------------------------------------------------
    KDdata.forEach(function(d){
      d.n = Number(d.Number_of_Employees_Avg)
      d.Last_Funding_Type = Number(funding_order[d.Last_Funding_Type])
    })

    KDdata.sort(function(a,b){return d3.ascending(a.Last_Funding_Type,b.Last_Funding_Type)})             

    // group the data: I want to draw one line per group
    var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
      .key(function(d) { return d.Industry;})
      .entries(KDdata);

    // What is the list of groups?
    allKeys = sumstat.map(function(d){return d.key})

    var container = g.append("g")
                      .classed("container-group", true);
    var chartgroup = container.append("g").classed("chart-group", true);
    gKD = container.selectAll(".chart-group")    
      .data(sumstat)
      .enter()
      //.append('g')    
      //.attr({transform:"translate(100,100)"})//(d, i) => "translate(" + 100*i + "," + 100*i + ")");

      /*
    // Select all bars and bind data:  
    var paths = svg.selectAll(".chart-group")
              .selectAll(".path")
              .data(sumstat);
              */
    /*
    gKD = g.selectAll("uniqueChart")
      .data(sumstat)
      .enter()
      .append('g')
      */

    // Add X axis --> it is a date format
    var xKD = d3.scaleLinear()
      //.domain(d3.extent(data, function(d) { return d.Last_Funding_Type; }))
      .domain([0,9])
      .range([ 0, width/4  - margin.left - margin.right]);           
      
    gKD.append("g")
      .attr("transform", function(d,i){return "translate(" + (width/4) * ((i-1) % 4) + "," + ((height/3) * (parseInt((i-1)/4)+1) - margin.bottom) + ")"})
      .attr("class","KD1")
      .call(d3.axisBottom(xKD).ticks(3))
      .attr('opacity', 0);

    //Add Y axis
    var yKD = d3.scaleLinear()      
      .domain([0, d3.max(KDdata, function(d) { return +d.n; })])
      .range([ height/3-margin.top-margin.bottom, 0 ]);
    
    gKD.append("g")
      .attr("class","KD1")
      .attr("transform", function(d,i){return "translate(" + (width/4)  * ((i-1) % 4) + "," + (height/3) * (parseInt((i-1)/4)) + ")"})
      .call(d3.axisLeft(yKD).ticks(5))
      .attr('opacity', 0);

    // color palette
    var color = d3.scaleOrdinal()
      .domain(allKeys)
      .range(['#5487b1','#5487b1','#63a1af','#63a1af','#7ab8aa','#93caa8','#add7a8','#c6e3a7','#c6e3a7','#E7846F','#E7846F'])

    // Draw the line
    gKD//.selectAll("path")
      //.data(sumstat)
      .append('g')
      .append("path")
      .attr("fill", function(d){ return color(d.key) })
      .attr("stroke", "none")
      .attr("d", function(d){        
        console.log(d)
        return d3.area()
        .x(function(d) { return xKD(d.Last_Funding_Type) })
        .y0(yKD(0))
        .y1(function(d) { return yKD(+d.n) })            
          (d.values)
      })
      .attr("transform", function(d,i){return "translate(" + (width/4) * ((i-1) % 4) + "," + (height/3) * (parseInt((i-1)/4)) + ")"})
      .attr('class','KD1')
      .attr('opacity', 0);

    // Add titles
    
    gKD.append('g')
      //.selectAll('text')
      //.data(KDdata)
      //.enter()
      .append("text")
      .attr("text-anchor", "start")
      //.attr("y", 0)
      //.attr("x", 0)
      .text(function(d){ return(d.key)})
      .style("fill", function(d){ return color(d.key) })
      .attr("transform", function(d,i){return "translate(" + ((width/4) * ((i-1) % 4) + 100) + "," + ((height/3) * (parseInt((i-1)/4)) + 20) + ")"})
      .attr('class','KD1')
      .attr('opacity', 0);


    //---------------------------------------------------------------------
    // Keondo's line chart end
    //---------------------------------------------------------------------
  };

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
    activateFunctions[0] = showTitle;
    //activateFunctions[1] = showFillerTitle;
    activateFunctions[1] = showYooBin;
    activateFunctions[2] = showRbc;
    activateFunctions[3] = showWooChul1;
    activateFunctions[4] = showWooChul2;
    activateFunctions[5] = showYoungJun1;
    activateFunctions[6] = showYoungJun2;
    activateFunctions[7] = showKeondo1;
    activateFunctions[8] = showHistAll;

    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for (var i = 0; i < 9; i++) {
      updateFunctions[i] = function () {};
    }
    updateFunctions[7] = updateCough;
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

  /**
   * showTitle - initial title
   *
   * hides: count title
   * (no previous step to hide)
   * shows: intro title
   *
   */
  function showTitle() {

    inTitle = 1
    inYB1 = 0

    g.selectAll('.YB')
      .transition()
      .duration(0)
      .attr('opacity', 0);
    
    g.selectAll('.rectYB')
      .transition()
      .duration(600)
      .attr('opacity', 0);
    
    g.selectAll('.rbc')
      .transition()
      .duration(600)
      .attr('opacity', 0);
    
    $('.YB')
      .css("opacity", 0)

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
    
    inTitle = 0
    inYB1 = 1
    inRBC = 0    

    g.selectAll('.openvis-title')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    
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

    g.selectAll('.rbc')
      .transition()
      .duration(600)
      .attr('opacity', 0);
    
  }
  function showRbc() {

    inYB1 = 0
    inRBC = 1
    inWC1 = 0

    g.selectAll('.YB')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.rectYB')
      .transition()
      .duration(0)
      .attr('opacity', 0);
    
    $('.YB')
      .css("opacity", 0)

    g.selectAll('.WC1')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.rbc')
      .transition()
      .duration(600)
      .attr('opacity', 1);    
  }


  function showWooChul1() {
    inRBC = 0
    inWC1 = 1
    inWC2 = 0

    g.selectAll('.rbc')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.WC1')
      .transition()
      .duration(600)
      .attr('opacity', 1);   
  }

  function showWooChul2() {    
    inWC1 = 0
    inWC2 = 1
    inYJ1 = 0

    g.selectAll('.WC1')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.WC2')
      .transition()
      .duration(600)
      .attr('opacity', 1);
    
    g.selectAll('.YJ1')
      .transition()
      .duration(0)
      .attr('opacity', 0);        
  }


  function showYoungJun1() { 
    
    inWC2 = 0
    inYJ1 = 1
    inYJ2 = 0        

    g.selectAll('.WC2')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.YJ1')
      .transition()
      .duration(600)
      .attr('opacity', 1);   

    g.selectAll('.YJ2')
      .transition()
      .duration(0)
      .attr('opacity', 0);   
  }



  function showYoungJun2() {       
    
    inYJ1 = 0
    inYJ2 = 1  
    inKD1 = 0

    g.selectAll('.YJ1')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.YJ2')
      .transition()
      .duration(600)
      .attr('opacity', 1);  

    g.selectAll('.KD1')
      .transition()
      .duration(0)
      .attr('opacity', 0); 

  }

  function showKeondo1() {           
    
    inYJ2 = 0  
    inKD1 = 1
    inKD2 = 0

    g.selectAll('.YJ2')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.KD1')
      .transition()
      .duration(600)
      .attr('opacity', 1); 
      
    g.selectAll('.KD2')
      .transition()
      .duration(0)
      .attr('opacity', 0);

  }

  /**
   * showHistAll - show all histogram
   *
   * hides: cough title and color
   * (previous step is also part of the
   *  histogram, so we don't have to hide
   *  that)
   * shows: all histogram bars
   *
   */
  function showHistAll() {

    g.selectAll('.YJ1')
    .transition()
    .duration(0)
    .attr('opacity', 0);
  }

  /**
   * showCough
   *
   * hides: nothing
   * (previous and next sections are histograms
   *  so we don't have to hide much here)
   * shows: histogram
   *
   */
  function showCough() {
    /*
    // ensure the axis to histogram one
    showAxis(xAxisHist);

    g.selectAll('.hist')
      .transition()
      .duration(600)
      .attr('y', function (d) { return yHistScale(d.length); })
      .attr('height', function (d) { return height - yHistScale(d.length); })
      .style('opacity', 1.0);
      */
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
   * UPDATE FUNCTIONS
   *
   * These will be called within a section
   * as the user scrolls through it.
   *
   * We use an immediate transition to
   * update visual elements based on
   * how far the user has scrolled
   *
   */

  /**
   * updateCough - increase/decrease
   * cough text and color
   *
   * @param progress - 0.0 - 1.0 -
   *  how far user has scrolled in section
   */
  function updateCough(progress) {
    g.selectAll('.cough')
      .transition()
      .duration(0)
      .attr('opacity', progress);

    g.selectAll('.hist')
      .transition('cough')
      .duration(0)
      .style('fill', function (d) {
        return (d.x0 >= 14) ? coughColorScale(progress) : '#008080';
      });
  }

  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */

  

  /**
   * groupByWord - group words together
   * using nest. Used to get counts for
   * barcharts.
   *
   * @param words
   */
  function rbcModify(raw_rbc_data) {
    rbc_data = raw_rbc_data.forEach(d => {
      d.value = +d.value,
      d.lastValue = +d.lastValue,
      d.value = isNaN(d.value) ? 0 : d.value,
      d.year = +d.year,
      d.colour = d3.hsl(Math.random()*360,0.75,0.75)
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
function display(error, YB_data, raw_rbc_data, worldMapData, WC1data, YJPieData, KDdata) {
  
  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select('#vis')
    //.datum(data)
    .datum({"data1": KDdata, "data2": YB_data, "data3": raw_rbc_data, "data4": worldMapData, "data5": WC1data, "data6": YJPieData})
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

// load data and display
//d3.tsv('data/words.tsv', display);
d3.queue()  
  .defer(d3.csv, 'data/final.csv')
  .defer(d3.csv, 'data/rbc_112006.csv')
  .defer(d3.json, "https://unpkg.com/world-atlas@1/world/110m.json" )
  .defer(d3.csv, "data/map_1_nov27.csv")
  .defer(d3.csv, "data/korea_major_rank.csv")
  .defer(d3.tsv, 'data/crunch_data_grp_NoEmployees2.tsv')
  .await(display)

  
  
  
  



//---------------------------------------------------------------------
// Yoobin's bar chart filter interactions start
//---------------------------------------------------------------------  

d3.selectAll("filter").on("change",updateBarYB)
updateBarYB()
d3.selectAll(".industry1").on("change",updateBarYB)
updateBarYB()
d3.selectAll(".industry2").on("change",updateBarYB)
updateBarYB()


function updateBarYB() {
  d3.selectAll(".filter").each(function(d) {
      bt = d3.select(this)
      if(bt.property("checked")) {
          svg = d3.select(this).selectAll('svg')
          g = d3.selectAll('svg').select('g')
          console.log(svg)
          g.select("#bar0").transition().attr("opacity",0)
          g.select("#bar1").transition().attr("opacity",0)
          g.select("#bar2").transition().attr("opacity",0)
          g.selectAll("#bar3").transition().attr("opacity",0)
          g.selectAll("#bar4").transition().attr("opacity",0)
          g.selectAll("#bar5").transition().attr("opacity",0)
          g.selectAll("#bar6").transition().attr("opacity",0)
          g.selectAll("#bar7").transition().attr("opacity",0)
          
          d3.selectAll(".industry1").each(function(d) {
              cb = d3.select(this)                
              grp = cb.property("value")                
      
              if(cb.property("checked")) {                    
                  num = ind_list.indexOf(cb.property("value"))                    
                  g.selectAll("#bar"+num).transition().attr("opacity",0.25)        
              }
              else {
                  num = ind_list.indexOf(cb.property("value")) 
                  g.selectAll("#bar"+num).transition().attr("opacity",0)                    
              }
          })

          d3.selectAll(".industry2").each(function(d) {
              cb = d3.select(this)                
              grp = cb.property("value")               
      
              if(cb.property("checked")) {                    
                  console.log(cb.property("value"))                    
                  num = ind_list.indexOf(cb.property("value"))                     
                  g.selectAll("#bar"+num).transition().attr("opacity",1)        
              }                
          })
      }
  }
)}

//---------------------------------------------------------------------
// END 
//---------------------------------------------------------------------  
