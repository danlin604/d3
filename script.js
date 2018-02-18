d3.select('body').style("background-color", '#FDD835')

// Create a bar chart
const data = [4, 8, 15, 16, 23, 42]

d3.select('.chart')
  .selectAll('div')
    .data(data)
  .enter().append('div')
    .style('width', (d) => { return d * 10 + 'px' })
    .text((d) => { return d })
