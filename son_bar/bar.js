const width = 1200;
const height = 600;
const margin = {top: 40, left: 40, bottom: 40, right: 40};

d3.selectAll("input").on("change", function(){
    console.log(this.value)
});

const data = [
    {name: 'Stanford', value: 682, color: '#5487b1', ind_list: 'AllIndustries'},
    {name: 'Harvard', value: 517, color: '#63a1af', ind_list: 'AllIndustries'},
    {name: 'MIT', value: 336, color: '#7ab8aa', ind_list: 'AllIndustries'},
    {name: 'UPENN', value: 294, color: '#93caa8', ind_list: 'AllIndustries'},
    {name: 'UC Berkeley', value: 287, color: '#add7a8', ind_list: 'AllIndustries'},
    {name: 'Cornell', value: 153, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'CMU', value: 145, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'Columbia', value: 119, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'UMich', value: 109, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'Oxford', value: 108, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'UW', value: 108, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'UCLA', value: 100, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'NU', value: 95, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'Cambridge', value: 94, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'NYU', value: 93, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'USC', value: 93, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'UIUC', value: 92, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'Tel Aviv', value: 86, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'UT Austin', value: 85, color: '#c6e3a7', ind_list: 'AllIndustries'},
    {name: 'SNU', value: 6, color: '#E7846F', ind_list: 'AllIndustries'},
    {name: 'KAIST', value: 4, color: '#E7846F', ind_list: 'AllIndustries'},
    {name: 'Yonsei', value: 3, color: '#E7846F', ind_list: 'AllIndustries'}

    // {name: 'SNU', value: 119, color: '#5487b1'},
    // {name: 'KAIST', value: 52, color: '#63a1af'},
    // {name: 'Korea', value: 40, color: '#7ab8aa'},
    // {name: 'Yonsei', value: 32, color: '#93caa8'},
    // {name: 'Hanyang', value: 23, color: '#add7a8'},
    // {name: 'Stanford', value: 14, color: '#c6e3a7'},
    // {name: 'POSTECH', value: 10, color: '#c6e3a7'},
    // {name: 'Columbia', value: 9, color: '#c6e3a7'},
    // {name: 'CMU', value: 8, color: '#c6e3a7'},
    // {name: 'SKKU', value: 7, color: '#c6e3a7'},
    // {name: 'Columbia', value: 6, color: '#c6e3a7'},
    // {name: 'KHU', value: 6, color: '#c6e3a7'},
    // {name: 'MIT', value: 6, color: '#c6e3a7'},
    // {name: 'PNU', value: 6, color: '#c6e3a7'},
    // {name: 'Hongik', value: 6, color: '#c6e3a7'},
    // {name: 'UPENN', value: 5, color: '#c6e3a7'},
    // {name: 'NU', value: 5, color: '#c6e3a7'},
    // {name: 'Kangwon', value: 5, color: '#c6e3a7'},
    // {name: 'Harvard', value: 5, color: '#c6e3a7'},
    // {name: 'UC Berkley', value: 5, color: '#c6e3a7'},
    // {name: 'Ajou', value: 5, color: '#c6e3a7'},
    // {name: 'Cornell', value: 5, color: '#c6e3a7'}
  ];

const x = d3.scaleBand()
  .domain(data.map(d => d.name))
  .range([margin.left, width - margin.right])
  .padding(0.3);

const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top]);

const xAxis = g => g
  .attr('transform', `translate(0, ${height - margin.bottom})`)
  .call(d3.axisBottom(x)
    .tickSizeOuter(0))
  .call(g => g.select('.domain').remove())
  .call(g => g.selectAll('line').remove());

const yAxis = g => g
  .attr('transform', `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(y))
  .call(g => g.select('.domain').remove())
  .call(g => g.selectAll('line')
    .attr('x2', width)
    .style('stroke', '#f5f5f5'))


const svg = d3.select('#svg-area').append('svg').style('width', width).style('height', height);

svg.append('g').call(xAxis);
svg.append('g').call(yAxis);
svg.append('g')
  .selectAll('rect').data(data).enter().append('rect')
  .attr('x', d => x(d.name))
  .attr('y', d => y(d.value))
  .transition()
  .duration(800)
  .attr('height', d => y(0) - y(d.value))
  .attr("rx", 15)
  .attr('width', x.bandwidth())
  .attr('fill', d => d.color)
  .attr('data-x', d => d.name)
  .attr('data-y', d => d.value)
  .attr('data-color', d=> d.color);

svg.node();

const rectEl = document.getElementsByTagName('rect');
const tooltop = document.getElementById('tooltip');
console.log(tooltop)

for(const el of rectEl) {  
  el.addEventListener('mouseover', (event) => {
    const target = event.target;
    console.log(target)
    const positionLeft = Number(target.getAttribute('x')) + Number(x.bandwidth()/2) - tooltop.clientWidth/2;
    const positionTop = height - margin.top - target.getAttribute('height') - tooltop.clientHeight - 5;
    const color = target.dataset.color;
    const value = target.dataset.y;

    tooltop.innerText = value;
    tooltop.style.background = color;
    tooltop.style.top = positionTop + 'px';
    tooltop.style.left = positionLeft + 'px';
    tooltop.style.opacity = 1;
  });
}
