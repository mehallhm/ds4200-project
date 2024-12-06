const data = d3.csv("./data/shopping_behavior_updated.csv");

data.then((data) => {
	const width = 660;
	const height = 500;
	const marginTop = 20;
	const marginRight = 20;
	const marginBottom = 30;
	const marginLeft = 40;

	data.forEach((element) => {
		element["Age"] = +element["Age"];
	});

	let svg = d3
		.select("#figure2")
		.append("svg")
		.attr("width", width)
		.attr("height", height);

	const bins = d3
		.bin()
		.thresholds(10)
		.value((d) => d.Age)(data);

	const x = d3
		.scaleLinear()
		.domain([bins[0].x0, bins[bins.length - 1].x1])
		.range([marginLeft, width - marginRight]);

	const y = d3
		.scaleLinear()
		.domain([0, d3.max(bins, (d) => d.length)])
		.range([height - marginBottom, marginTop]);

	svg.append("g")
		.attr("fill", "steelblue")
		.selectAll()
		.data(bins)
		.join("rect")
		.attr("x", (d) => x(d.x0) + 1)
		.attr("width", (d) => x(d.x1) - x(d.x0) - 1)
		.attr("y", (d) => y(d.length))
		.attr("height", (d) => y(0) - y(d.length));

	svg.append("g")
		.attr("transform", `translate(0,${height - marginBottom})`)
		.call(
			d3
				.axisBottom(x)
				.ticks(width / 80)
				.tickSizeOuter(0)
		)
		.call((g) =>
			g
				.append("text")
				.attr("x", width)
				.attr("y", marginBottom - 4)
				.attr("fill", "currentColor")
				.attr("text-anchor", "end")
				.text("Age (years) →")
		);

	svg.append("g")
		.attr("transform", `translate(${marginLeft},0)`)
		.call(d3.axisLeft(y).ticks(height / 40))
		.call((g) => g.select(".domain").remove())
		.call((g) =>
			g
				.append("text")
				.attr("x", -marginLeft)
				.attr("y", 10)
				.attr("fill", "currentColor")
				.attr("text-anchor", "start")
				.text("↑ Frequency (no. of sales)")
		);
});
