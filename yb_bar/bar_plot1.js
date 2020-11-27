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
    fill: #8CA2AB;
    opacity: 0.5;
}

.bar1 {
    fill: #F06A93;
    opacity: 0.5;
}

.bar2 {
    fill: #CD59B1;
    opacity: 0.5;
}

.bar3 {
    fill: #A97DD8;
    opacity: 0.5;
}

.bar4 {
    fill: #F38787;
    opacity: 0.5;
}

.bar5 {
    fill: #EF8D5D;
    opacity: 0.5;
}

.bar6 {
    fill:#3FB68E;
    opacity: 0.5;
}

.bar7 {
    fill:#4D78A2;
    opacity: 0.5;
}

.bar8 {
    fill:#3AB5C2;
    opacity: 0.5;
}

.bar9 {
    fill:  #6973F6;
    opacity: 0.5;
}

.bar10 {
    fill: #74ABE2;
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
