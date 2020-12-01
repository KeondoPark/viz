    let svg = d3.select(".my_bar")

    let margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom;

    let x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
    let y = d3.scaleLinear().rangeRound([height,0]);


    let g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   d3.queue()
   .defer(d3.csv, "final.csv")
   .await(showData)

    function showData(error, data) {    
        x.domain(data.map(function(d) { 
            console.log(d.type)
            return d.type; }));
        
        maxY = d3.max(data, d => +d.value)
        //console.log(maxY)
        //y.domain([0, d3.max(data, function(d) { return +d.value; })]);


//d3.csv("final.csv").then(showData)
//d3.csv("f_data.csv",showData)


d3.queue()
.defer(d3.csv, "final.csv")
.await(showData)


function showData(error, data) {    
    x.domain(data.map(function(d) { return d.type; }));
    
    maxY = d3.max(data, d => +d.value)
    //console.log(maxY)
    //y.domain([0, d3.max(data, function(d) { return +d.value; })]);

    


        ind_list = ["AllIndustries", "AI",	"Ecommerce", "Education", "F&B", "Financial","Healthcare","Manufacturing","Security","Software","Transportation"]
        selected = ind_list //["Artificial Intelligence","Ecommerce","education", "healthcare"]
        filtered = data.filter(function(d){     
                return selected.includes(d.ind_list)})
        
        console.log(filtered)
        
        y.domain([0, d3.max(filtered, function(d) { return +d.value; })*1.2]);

        g.append("g")
            .attr("class", "axis x_axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));


        g.append("g")
            .attr("class", "axis y_axis")
            .call(d3.axisLeft(y));

        g.selectAll(".rect")
        .data(filtered)
        .enter().append("rect")
            .attr("class", function(d) {
                return "bar" + ind_list.indexOf(d.ind_list)} )
            .attr("y", function(d) { 
                console.log(+d.value)
                return y(+d.value)})
            .attr("x", function(d) { return x(d.type)+8 * ind_list.indexOf(d.ind_list); })
            .attr("height", function(d) { return height - y(+d.value); })
            .attr("width", x.bandwidth()/4)
            
        

        var legend = g.selectAll(".legend")
                    .data(filtered)
                    .enter()
                    .append("g")
                    .attr("class", "legend")



        var legend_keys = ["AllIndustries", "AI",	"Ecommerce", "Education", "F&B", "Financial","Healthcare","Manufacturing","Security","Software","Transportation"]

        var lineLegend = svg.selectAll(".legend").data(legend_keys)
                .enter()
                .append("g")
                .attr("class", "legend")
                

        lineLegend.append("text").text(function(d) {return d;})
                    .attr("transform", "translate(15,9")
        lineLegend.append("rect").attr("fill", function (d,i) {
            return "bar"+ind_list.indexOf(d).style("fill")
        })
        .attr("width", 10)
        .attr("height", 10)

        function update() {
            d3.selectAll(".industry1").each(function(d) {
                cb = d3.select(this)
                
                grp = cb.property("value")
                
        
                if(cb.property("checked")) {
                    num = ind_list.indexOf(cb.property("value")) + 1
                    g.selectAll(".bar"+num).transition().style("opacity",0.2)
                }
                else {
                    num = ind_list.indexOf(cb.property("value")) + 1
                    g.selectAll(".bar"+num).transition().style("opacity",0)
                    
                }
                
        
            })
            d3.selectAll(".industry2").each(function(d) {
                cb = d3.select(this)
                
                grp = cb.property("value")
                
        
                if(cb.property("checked")) {
                    console.log(cb.property("value"))
                    num = ind_list.indexOf(cb.property("value")) + 1
                    g.selectAll(".bar"+num).transition().style("opacity",1)
                }
            })
        }

    }



    function update() {
        d3.selectAll(".filter").each(function(d) {
            bt = d3.select(this)
            if(bt.property("checked")) {
                g.select(".bar0").transition().style("opacity",0)
                g.select(".bar1").transition().style("opacity",0)
                g.select(".bar2").transition().style("opacity",0)
                g.selectAll(".bar3").transition().style("opacity",0)
                g.selectAll(".bar4").transition().style("opacity",0)
                g.selectAll(".bar5").transition().style("opacity",0)
                g.selectAll(".bar6").transition().style("opacity",0)
                g.selectAll(".bar7").transition().style("opacity",0)
                
                
                
                d3.selectAll(".industry1").each(function(d) {
                    cb = d3.select(this)
                    
                    grp = cb.property("value")
                    
            
                    if(cb.property("checked")) {
                        
                        num = ind_list.indexOf(cb.property("value")) 
                    
                        g.selectAll(".bar"+num).transition().style("opacity",0.25)
            
                    }
                    else {
                        num = ind_list.indexOf(cb.property("value")) 
                        g.selectAll(".bar"+num).transition().style("opacity",0)
                        
                    }
                    
                    
                })

                d3.selectAll(".industry2").each(function(d) {
                    cb = d3.select(this)
                    
                    grp = cb.property("value")
                    
            
                    if(cb.property("checked")) {
                        //g.selectAll("."+grp).transition().style("opacity", 1)
                        console.log(cb.property("value"))
                        //console.log(ind_list.indexOf(cb.property("value")))
                        num = ind_list.indexOf(cb.property("value")) 
                        //console.log(num)
                        //var b = document.getElementsByClassName("bar"+num)
                        //bar.style["opacity"] = 1;
                        //b.opacity = 1
                        g.selectAll(".bar"+num).transition().style("opacity",1)
            
            
                        
                        //elem.style.setProperty('opacity', 1)
                        
            
                    }
                    
                })
                
            
            
            }
        }
        )}

    d3.selectAll("filter").on("change",update)
    update()
    d3.selectAll(".industry1").on("change",update)
    update()
    d3.selectAll(".industry2").on("change",update)
    update()
    }
