(function (vegaEmbed) {
	var spec = {
		config: {
			view: { continuousWidth: 300, continuousHeight: 300 },
			title: { anchor: "start", fontSize: 16 },
		},
		data: { name: "data-0a21b1d384c1867a83fea537814a311a" },
		mark: { type: "bar" },
		encoding: {
			tooltip: [
				{ field: "Category", type: "nominal" },
				{ field: "Count", type: "quantitative" },
			],
			x: {
				field: "Category",
				sort: "-y",
				title: "Product Category",
				type: "nominal",
			},
			y: {
				axis: { domain: false, grid: false, ticks: false },
				field: "Count",
				title: "Number of Consumers",
				type: "quantitative",
			},
		},
		height: 400,
		width: 600,
		$schema: "https://vega.github.io/schema/vega-lite/v5.8.0.json",
		datasets: {
			"data-0a21b1d384c1867a83fea537814a311a": [
				{ Category: "Clothing", Count: 1737 },
				{ Category: "Accessories", Count: 1240 },
				{ Category: "Footwear", Count: 599 },
				{ Category: "Outerwear", Count: 324 },
			],
		},
	};
	var embedOpt = { mode: "vega-lite" };

	function showError(el, error) {
		el.innerHTML =
			'<div style="color:red;">' +
			"<p>JavaScript Error: " +
			error.message +
			"</p>" +
			"<p>This usually means there's a typo in your chart specification. " +
			"See the javascript console for the full traceback.</p>" +
			"</div>";
		throw error;
	}
	const el = document.getElementById("figure1");
	vegaEmbed("#figure1", "./figure1.json", embedOpt).catch((error) =>
		showError(el, error)
	);
})(vegaEmbed);
