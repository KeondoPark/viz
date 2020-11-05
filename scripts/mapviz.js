//United states education visualization
var body = d3.select('body')


//Minimum and maximum of data points
var minData = 2.6, maxData = 75.1
var noDiv = 8 //Number of divisions

//Create a svg
var w = 960, h = 600

var svg = body.append('svg')
  .attr('width', w)
  .attr('height', h)

var path = d3.geoPath()

//Legend range setting
var x = d3.scaleLinear().domain([minData, maxData]).rangeRound([600,860])

//Define color scheme: Need d3-sclae-chromatic
var color = d3.scaleThreshold()
  .domain(d3.range(minData, maxData, (maxData - minData) / noDiv))
  .range(d3.schemeGreens[noDiv + 1]);

//Define tooltip
var tooltip = body.append('div')
  .attr('class','tooltip')
  .attr('id','tooltip')
  .style('opacity',0)

//Define legend
var g = svg.append('g')
  .attr('class','key')
  .attr('id','legend')
  .attr('transfrom','translate(0,40)')

//Create a legend
g.selectAll('rect')
  //Get the data range of legend
  .data(
    color.range().map(function (d){      
      d = color.invertExtent(d) //Get data range from color mapping      

      //Handling left and right end
      if (d[0] === undefined){
        d[0] = x.domain()[0]
      }
      if (d[1] === undefined){
        d[1] = x.domain()[1]
      }
      return d
    })
  )
  .enter()
  .append('rect')
  .attr('height', 8)
  //Starting point of each box in legend
  .attr('x',function (d){
    return x(d[0])
  })
  //Width of each box in legend
  .attr('width', function(d){
    return x(d[1]) - x(d[0])
  })
  //Color of each box in legend
  .attr('fill', function(d){
    return color(d[0])
  })

  /*
  g.append('text')
    .attr('class','caption')
    .attr('x', x.range()[0])
    .attr('y', -6)
    .attr('fill', '#000')
    .attr('text-anchor', 'start')
    .attr('font-weight', 'bold')
  */  

  //Draw axis for legend
  g.call(
    d3.axisBottom(x)
      .tickSize(13)
      .tickFormat(function(x){
        return Math.round(x) + '%';
      })
      .tickValues(color.domain().concat(maxData)) //Ticker values: Added the maximum values
  )
  .select('.domain').remove() //Remove axis line

  
const COUNTY_FILE = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json';
const EDUCATION_FILE = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json'

//Load county geographic data and education data 
//Then start visualize
//queue is used to define the order of loading and visualizing
d3.queue()
  .defer(d3.json, COUNTY_FILE)        
  .defer(d3.json, EDUCATION_FILE)
  .await(createMap);

//Visualizing function
function createMap(error, us, education){
  if (error) throw error;    

  //Get county geographic data and visualize
  svg.append('g')
    .attr('class','counties')
    .selectAll('path')
    .data(topojson.feature(us, us.objects.counties).features)
    .enter()
    .append('path')
    .attr('class', 'county')
    //get the county fips id
    .attr('data-fips', function(d){
      return d.id
    })    
    //Append Education data, not displayed on the page
    .attr('data-education', function(d){
      var result = education.filter(function(obj){
        return obj.fips === d.id
      })
      if (result[0]){
        return result[0].bachelorsOrHigher
      }
      return 0
    })
    //Fill color according to education data
    .attr('fill', function(d){
      var result = education.filter(function(obj){
        return obj.fips === d.id
      })
      if (result[0]){
        return color(result[0].bachelorsOrHigher)
      }
      return 0
    })
    .attr('d',path)
    //Tooltip
    .on('mouseover', function(d){
      tooltip.style('opacity',0.9)
      //Information to display on tooltip
      tooltip.html(function(){
        var result = education.filter(function(obj){
          return obj.fips === d.id
        })
        if (result[0]){
          return (result[0]['area_name'] + ', ' + result[0]['state'] +', ' + result[0].bachelorsOrHigher + '%')
        }
        return 0
      })
      .attr('data-education', function(){
        var result = education.filter(function(obj){
          return obj.fips === d.id
        })
        if (result[0]){
          return result[0].bachelorsOrHigher
        }
        return 0
      })
      //Tooltip display location
      .style('left', d3.event.pageX + 10 + 'px')
      .style('top', d3.event.pageY - 28 + 'px')
    })
    .on('mouseout', function(){
      tooltip.style('opacity',0)
    })
    
    //States border
    svg.append('path')
    .datum(
      topojson.mesh(us, us.objects.states, function (a, b) {
      return a !== b;
    }))
    .attr('class', 'states')
    .attr('d', path);

};




console.log("End of javascript");