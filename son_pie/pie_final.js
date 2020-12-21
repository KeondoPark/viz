// 얘로 bar chart 하나 넣자
const YJ2data =
{
  'Computer Science': 2868,
  'Economics': 783,
  'Business': 921,
  'Electrical Engineering': 550,
  'Marketing': 385,
  'Finance': 499,
  'Management': 332,
  'Engineering': 496,
  'Mathematics': 240,
  'Mechanical Engineering': 200,
  'Physics': 177,
  'Accounting': 110,
  'Psychology': 141,
  'Law': 198,
  'Biomedical': 191,
  'Accounting': 95,
  'History': 110,
  'Information Technology': 269,
  'Chemistry': 116,
  'Communication': 127,
  'etc': 1450
};

const YJ2data1 =
{
  'Engineering': 4574,
  'Economics': 1392,
  'Business': 1638,
  'Natural Science': 533,
  'etc': 2026
};

const YJ2data2 =
{
  'Engineering': 303,
  'Economics': 48,
  'Business': 85,
  'Natural Science': 46,
  'etc': 93
}
  ;

const YJ2data3 =
{
  'Engineering': 490,
  'Economics': 152,
  'Business': 184,
  'Natural Science': 56,
  'etc': 246
}
  ;

const YJ2data4 =
{
  'Engineering': 74,
  'Economics': 25,
  'Business': 29,
  'Natural Science': 7,
  //  'Psychology': 6, 
  //  'Communication': 5, 
  //  'Design': 3, 
  //  'Education': 3, 
  //  'History': 2, 
  //  'Law': 2, 
  //  'Philosophy': 2, 
  'etc': 42
}
  ;

const YJ2data5 =
{
  'Business': 41,
  'Engineering': 26,
  'Economics': 14,
  'Natural Science': 5,
  //  'Psychology': 3, 
  //  'Design': 2, 
  'etc': 16
}
  ;

const YJ2data6 =
{
  'Engineering': 400,
  'Economics': 403,
  'Business': 255,
  //  'Law': 45, 
  'Natural Science': 88,
  //  'History': 18, 
  //  'Psychology': 18, 
  'etc': 255
};

const YJ2data7 =
{
  'Engineering': 114,
  'Economics': 39,
  'Business': 47,
  //  'Medicine': 11,
  'Natural Science': 72,
  //  'Design': 5,
  //  'Law': 7,
  //  'Psychology': 8,
  'etc': 86
}
  ;

const YJ2data8 =
{
  'Engineering': 926,
  'Economics': 123,
  'Business': 245,
  //  'Communication': 26, 
  'Natural Science': 120,
  //  'Design': 26, 
  //  'Law': 24, 
  //  'Psychology': 22, 
  'etc': 351
}
  ;

const YJ2data9 =
{
  'Engineering': 249,
  'Economics': 83,
  'Business': 81,
  'Natural Science': 30,
  //  'English': 6, 
  //  'Communication': 6, 
  //  'Design': 4, 
  //  'Law': 14, 
  //  'Psychology': 7, 
  'etc': 88
}
  ;

const YJ2data10 =
{
  'Engineering': 1584,
  'Economics': 351,
  'Business': 424,
  // 'Communication': 49,
  'Natural Science': 113,
  //  'History': 35,  
  // 'Law': 54,
  // 'Design': 67,
  //  'Psychology': 43, 
  'etc': 510+49+35+54+67
}
  ;

const YJ2data11 =
{
  'Engineering': 217,
  'Economics': 60,
  'Business': 93,
  'Natural Science': 25,
  //  'Communication': 8, 
  //  'Law': 7, 
  //  'Robotics': 6, 
  //  'Design': 5, 
  //  'Philosophy': 5, 
  //  'Psychology': 8, 
  'etc': 103
}
  ;

// 여기까지 data set
// ========================================================================================================================
// ========================================================================================================================
// ========================================================================================================================
// ========================================================================================================================
// ========================================================================================================================
// ========================================================================================================================

var YJ2width = 650
YJ2height = 650
YJ2margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
// var radius = Math.min(width, height) / 2 - margin
var YJ2radius = 200

// append the svg object to the div called 'my_dataviz'
var YJ2svg = d3.select("#YJ2_dataviz")
  .append("svg")
  .attr("width", YJ2width)
  .attr("height", YJ2height)
  .append("g")
  .attr("transform", "translate(" + YJ2width / 2 + "," + YJ2height / 2 + ")")


  YJ2svg.append("g")
  .attr("class", "slices");
  YJ2svg.append("g")
  .attr("class", "labels");
  YJ2svg.append("g")
  .attr("class", "lines");


  // set the color scale
var YJ2color = d3.scaleOrdinal()
  .domain(['Engineering', 'Economics', 'Business', 'Natural Science','etc'])
  // .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);
  .range(d3.schemeDark2);

// A function that create / update the plot for a given variable:
function updateYJ2(data) {

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
  var YJ2u = YJ2svg.selectAll("path")
    .data(data_ready)

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
    // .style("opacity", 0.6)

  // remove the group that is not present anymore
  YJ2u
    .exit()
    .remove();

  var YJ2text = YJ2svg.select(".labels").selectAll("text")
  .data(data_ready);

	YJ2text.enter()
		.append("text")
		.attr("dy", ".35em")
		.text(function(d) {
			return d.data.key ;
		});
	
	function midAngle(d){
		return d.startAngle + (d.endAngle - d.startAngle)/2;
	}

	YJ2text.transition().duration(1000)
		.attrTween("transform", function(d) {
			this._current = this._current || d;
			var interpolate = d3.interpolate(this._current, d);
			this._current = interpolate(0);
			return function(t) {
				var YJ2d2 = interpolate(t);
				var YJ2pos = YJ2outerArc.centroid(YJ2d2);
				YJ2pos[0] = YJ2radius * (midAngle(YJ2d2) < Math.PI ? 1 : -1);
				return "translate("+ YJ2pos +")";
			};
		})
		.styleTween("text-anchor", function(d){
			this._current = this._current || d;
			var interpolate = d3.interpolate(this._current, d);
			this._current = interpolate(0);
			return function(t) {
				var YJ2d2 = interpolate(t);
				return midAngle(YJ2d2) < Math.PI ? "start":"end";
			};
		});

	YJ2text.exit()
		.remove();


  var polyline = YJ2svg.select(".lines").selectAll("polyline")
		.data(data_ready);
	
	polyline.enter()
		.append("polyline");

	polyline.transition().duration(1000)
		.attrTween("points", function(d){
			this._current = this._current || d;
			var interpolate = d3.interpolate(this._current, d);
			this._current = interpolate(0);
			return function(t) {
				var d2 = interpolate(t);
				var pos = YJ2outerArc.centroid(d2);
				pos[0] = YJ2radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
				return [YJ2arc.centroid(d2), YJ2outerArc.centroid(d2), pos];
			};			
		});
	
	polyline.exit()
		.remove();
}

// Initialize the plot with the first dataset
updateYJ2(YJ2data1)
updateYJ2(YJ2data1)
