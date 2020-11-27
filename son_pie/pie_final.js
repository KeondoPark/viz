let body = d3.select("#body")

d3.queue()
    .defer(d3.csv, "korea_major_rank.csv")
    .await(showData)

function showData(error, data) {
    let bodyHeight = 300
    let bodyWidth = 500

    console.log(data)

    data = data.map(d => ({
        major: d.major,
        count: +d.count
    }))
    
    let pie = d3.pie()
        .value(d => d.count);
        
    let colorScale = d3.scaleOrdinal()
        .range(d3.schemeCategory10)
        .domain(data.map(d => d.major))
       
    let arc = d3.arc()
        .outerRadius(bodyHeight / 2)
        .innerRadius(30);
    let g = body.selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .on("mouseover", function (d) {
        d3.select("#tooltip")
            .style("left", d3.event.pageX + "px")
            .style("top", d3.event.pageY + "px")
            .style("opacity", 1)
            .select("#value")
            .text(d.value);
        })
            .on("mouseout", function () {
            // Hide the tooltip
        d3.select("#tooltip")
            .style("opacity", 0);;
        });
    g.append("path")
        .attr("d", arc)
        .attr("fill", d => {
            return colorScale(d.data.major)
        });
}

// (function(d3) {
//     'use strict';

//     var width = 500;
//     var height = 500;
//     var radius = Math.min(width, height) / 2;
//     var donutWidth = 75;
//     var legendRectSize = 18;
//     var legendSpacing = 4;

//     var color = d3.schemeCategory10;

//     var svg = d3.select('#chart')
//       .append('svg')
//       .attr('width', width)
//       .attr('height', height)
//       .append('g')
//       .attr('transform', 'translate(' + (width / 2) + 
//         ',' + (height / 2) + ')');

//     var arc = d3.arc()
//       .innerRadius(radius - donutWidth)
//       .outerRadius(radius);

//     var pie = d3.pie()
//       .value(function(d) { return d.count; })
//       .sort(null);

//     var tooltip = d3.select('#chart')                               // NEW
//       .append('div')                                                // NEW
//       .attr('class', 'tooltip');                                    // NEW
                  
//     tooltip.append('div')                                           // NEW
//       .attr('class', 'major');                                      // NEW
         
//     tooltip.append('div')                                           // NEW
//       .attr('class', 'count');                                      // NEW

//     tooltip.append('div')                                           // NEW
//       .attr('class', 'percent');                                    // NEW

//     d3.csv('world_major_rank.csv', function(error, dataset) {
//       dataset.forEach(function(d) {
//         d.count = +d.count;
//       });

//       var path = svg.selectAll('path')
//         .data(pie(dataset))
//         .enter()
//         .append('path')
//         .attr('d', arc)
//         .attr('fill', function(d, i) { 
//           return color(d.data.major); 
//         });

//       path.on('mouseover', function(d) {                            // NEW
//         var total = d3.sum(dataset.map(function(d) {                // NEW
//           return d.count;                                           // NEW
//         }));                                                        // NEW
//         var percent = Math.round(1000 * d.data.count / total) / 10; // NEW
//         tooltip.select('.major').html(d.data.major);                // NEW
//         tooltip.select('.count').html(d.data.count);                // NEW
//         tooltip.select('.percent').html(percent + '%');             // NEW
//         tooltip.style('display', 'block');                          // NEW
//       });                                                           // NEW
      
//       path.on('mouseout', function() {                              // NEW
//         tooltip.style('display', 'none');                           // NEW
//       });                                                           // NEW

//       /* OPTIONAL 
//       path.on('mousemove', function(d) {                            // NEW
//         tooltip.style('top', (d3.event.pageY + 10) + 'px')          // NEW
//           .style('left', (d3.event.pageX + 10) + 'px');             // NEW
//       });                                                           // NEW
//       */
        
//       var legend = svg.selectAll('.legend')
//         .data(color.domain())
//         .enter()
//         .append('g')
//         .attr('class', 'legend')
//         .attr('transform', function(d, i) {
//           var height = legendRectSize + legendSpacing;
//           var offset =  height * color.domain().length / 2;
//           var horz = -2 * legendRectSize;
//           var vert = i * height - offset;
//           return 'translate(' + horz + ',' + vert + ')';
//         });

//       legend.append('rect')
//         .attr('width', legendRectSize)
//         .attr('height', legendRectSize)                                   
//         .style('fill', color)
//         .style('stroke', color);
        
//       legend.append('text')
//         .attr('x', legendRectSize + legendSpacing)
//         .attr('y', legendRectSize - legendSpacing)
//         .text(function(d) { return d; });

//     });

//   })(window.d3);