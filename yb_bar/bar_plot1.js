<html>

<head>

</head>

<style>

.legend {
    font-size: 12px;
}
rect {
    stroke-width: 2;
}

.bar0 {
    fill: steelblue;
    opacity: 0.5;
}

.bar1 {
    fill:mediumpurple;
    opacity: 0.5;
}

.bar2 {
    fill: rebeccapurple;
    opacity: 0.5;
}

.bar3 {
    fill:blueviolet;
    opacity: 0.5;
}

.bar4 {
    fill: darkorchid;
    opacity: 0.5;
}

.bar5 {
    fill: slateblue;
    opacity: 0.5;
}

.bar6 {
    fill:darkslateblue;
    opacity: 0.5;
}

.bar7 {
    fill:mediumslateblue;
    opacity: 0.5;
}

.bar8 {
    fill:greenyellow;
    opacity: 0.5;
}

.bar9 {
    fill:lawngreen;
    opacity: 0.5;
}

.bar10 {
    fill:mediumspringgreen;
    opacity: 0.5;
}



</style>

<body>
    <h2>Total Equity Funding Amount Currency (in USD)</h2>
    <div id="chart">
    <svg width="1000" height="700" viewBox="0 0 800 800" class="my_bar"></svg>
    </div>
    <form>
        <label><input class="filter" type="checkbox" id="filter" value="filter">Wish to Filter</label>
        <p>Select Industries You Are Interested In</p>
        <label><input class="industry1" type="checkbox" id="industry1_1" value="AllIndustries">All Industries</label>
        <label><input class="industry1" type="checkbox" id="industry1_2" value="AI">AI</label>
        <label><input class="industry1" type="checkbox" id="industry1_3" value="Ecommerce">Ecommerce</label>
        <label><input class="industry1" type="checkbox" id="industry1_4" value="Education">Education</label>
        <label><input class="industry1" type="checkbox" id="industry1_5" value="F&B">F&B</label>
        <label><input class="industry1" type="checkbox" id="industry1_6" value="Financial">Financial</label>
        <label><input class="industry1" type="checkbox" id="industry1_7" value="Healthcare">Healthcare</label>
        <label><input class="industry1" type="checkbox" id="industry1_8" value='Manufacturing'>Manufacturing</label>
        <label><input class="industry1" type="checkbox" id="industry1_9" value="Security">Security</label>
        <label><input class="industry1" type="checkbox" id="industry1_10" value="Software">Software</label>
        <label><input class="industry1" type="checkbox" id="industry1_11"value="Transportation">Transporation</label>
        <br>
        
        <p>Select Industries You Wish To Highlight</p>
        <label><input class="industry2" type="checkbox" id="all" value="AllIndustries">All Industries</label>
        <label><input class="industry2" type="checkbox" value="AI">AI</label>
        <label><input class="industry2" type="checkbox" value="Ecommerce">Ecommerce</label>
        <label><input class="industry2" type="checkbox" value="Education">Education</label>
        <label><input class="industry2" type="checkbox" value="F&B">F&B</label>
        <label><input class="industry2" type="checkbox" value="Financial">Financial</label>
        <label><input class="industry2" type="checkbox" value="Healthcare">Healthcare</label>
        <label><input class="industry2" type="checkbox" value='Manufacturing'>Manufacturing</label>
        <label><input class="industry2" type="checkbox" value="Security">Security</label>
        <label><input class="industry2" type="checkbox" value="Software">Software</label>
        <label><input class="industry2" type="checkbox" value="Transportation">Transporation</label>
        <br>


    </form>

</body>
<script src="d3.js"></script>">
<script src="bar_plot1.js"></script>

</html>
