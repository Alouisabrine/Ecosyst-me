import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function GrapheDegradation() {
  const d3Container = useRef(null);

  const data = [
    { year: 1990, forest: 4200 },
    { year: 2000, forest: 4000 },
    { year: 2010, forest: 3800 },
    { year: 2020, forest: 3600 },
  ];

  useEffect(() => {
    if (d3Container.current) {
      const width = 600;
      const height = 350;
      const margin = { top: 30, right: 30, bottom: 50, left: 60 };

      const svg = d3.select(d3Container.current)
        .attr('width', width)
        .attr('height', height);

      const x = d3.scaleBand()
        .domain(data.map(d => d.year))
        .range([margin.left, width - margin.right])
        .padding(0.3);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.forest)])
        .nice()
        .range([height - margin.bottom, margin.top]);

      svg.selectAll('*').remove(); // clear before redraw

      // Axes
      svg.append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll('text')
        .style('text-anchor', 'middle')
        .style('font-size', '12px');

      svg.append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .selectAll('text')
        .style('font-size', '12px');

      // Bars with animation
      svg.selectAll('rect')
        .data(data)
        .join('rect')
        .attr('x', d => x(d.year))
        .attr('y', height - margin.bottom)
        .attr('height', 0)  // Initial height is zero
        .attr('width', x.bandwidth())
        .attr('fill', '#2d6a4f')
        .transition()
        .duration(1000)
        .attr('y', d => y(d.forest))  // Final y position
        .attr('height', d => y(0) - y(d.forest));  // Final height

    }
  }, [data]);

  return (
    <section id="graphe-degradation" className="py-5 bg-white text-center">
      <h2 className="mb-4">🌲 Évolution inquiétante de la surface forestière mondiale</h2>
      <p>Visualisation de la perte forestière depuis 1990.</p>
      <svg ref={d3Container}></svg>
    </section>
  );
}

export default GrapheDegradation;
