//Let's make a bar tutorial
//data source: "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"

//Time format parser
var dateParser = d3.timeParse("%Y-%m-%d");
var formatDate = d3.timeFormat("%Y-%m-%d")
  
/*
    1. Get data: use getJSON 
    - fill in "..." part
*/
$.getJSON("...", function(data){
    
    var dataset = data.data
    var l = dataset.length

    /* 
        2. data preprocessing: First column of dataset is date format(YYYY-MM-DD)
                                Parse it using parser functions
    */
    dataset.forEach(function(d){

    })


    //Define size of visuals and padding
    const padding = 50;
    const w = 1000;
    const h = 500;  
    const topMargin = 50;

    //Get maximum and 
    var maxX = d3.max(dataset, d=> d[0]);  
    var minX = d3.min(dataset, d=> d[0]);  
    var minY = d3.min(dataset, d=> d[1]);
    var maxY = d3.max(dataset, d=> d[1]); 


    /* 
        3. Use scale function to define the x-axis and y-axis
        - Use scaleTime for xScale because it is time column
        - Use scaleLinear for yScale
        - domain method: define the input range
        - range method: define the output(actual size) range 
        - yScale should be defined in reverse order because it starts from top 
    */
    var xScale = d3.scaleTime()
                .domain([minX,maxX])
                .range([padding, w - padding]);
    var yScale = None

    /* 
        4. Create a svg of size (w * h)    
    */    
    const svg = None



    //Axis: 15 ticks for x axis and 10 ticks for y axis
    const xAxis = d3.axisBottom(xScale).ticks(15);
    const yAxis = d3.axisLeft(yScale).ticks(10);

    //Move x axis down by (h - padding)
    svg.append("g")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis);  
        
    /* 
        5. Move y axis right by "padding"
    */     



    // Define the div for the tooltip
    var tooltip = d3.select('.visHolder')
    .append('div')
    .attr('id', 'tooltip')
    .style('opacity', 0);


    /* 
        6. Draw bars
    */
    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
            //Use attr to indicate starting position of x; x starts from xScale(d[0])
            //Use attr to indicate starting position of y; y starts from yScale(d[1])
            //Use attr to indicate width of each bar
            //Use attr to indicate height of each bar
            //Use attr to fill bar in navy color      
        .attr("class", "bar")     
        //Hover effect
        .on("mouseover", function(d) {

            //Tooltip
            tooltip.transition()		
                .duration(200)		
                .style("opacity", .9);		
            //Contents to be displayed in tooltip
            tooltip.html(formatDate(d[0]) + "<br/>"  + d[1])	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	

        })					
        .on("mouseout", function(d) {		
            tooltip.transition()		
                .duration(500)		
                .style("opacity", 0)        
        });		

    //Graph title
    svg.append('text')
    .attr("x", w / 2)
    .attr("y", padding/2)
    .attr("text-anchor",'middle')
    .style('font-size','16px')
    .style('text-decoration','underline')
    .text('United States GDP')
})
