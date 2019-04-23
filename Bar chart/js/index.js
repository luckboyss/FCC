document.addEventListener("DOMContentLoaded", function () {

    const req = new XMLHttpRequest();
    req.open("GET", "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json", true);
    req.send();
    req.onload = function () {

        const json = JSON.parse(req.responseText),
            dataset = json.data,
            w = 800,
            h = 400,
            padding = 60,
            bw = w / dataset.length;
        //console.log(dataset);
        const tooltip = d3.select(".chart").append("div")
            .attr("id", "tooltip")
            .style("opacity",0);

        const overlay = d3.select(".chart").append("div")
            .attr("class", "overlay")
            .style("opacity",0);

        const xMax = new Date(dataset[dataset.length - 1][0]);
        xMax.setMonth(xMax.getMonth() + 3);

        const xScale = d3.scaleTime()
            .domain([new Date(dataset[0][0]),xMax])
            .range([0, w]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, d => d[1])])
            .range([h, 0]);

        const svg = d3.select(".chart")
            .append("svg")
            .attr("width", w + 100)
            .attr("height", h + 60)
            //.style("background-color", "pink")

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -260)
            .attr("y", 80)
            .text("Gross Domestic Product");

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class","bar")
            .attr("data-date",d => d[0])
            .attr("data-gdp",d => d[1])
            .attr("x", d => padding + xScale(new Date(d[0])))
            .attr("y", d => yScale(d[1]))
            .attr("width", bw)
            .attr("height", d => h - yScale(d[1]))
            .attr("fill", "lightskyblue")
            .attr("class", "bar")
            .on("mouseover",function (d,i) {
                overlay.transition()
                    .duration(0)
                    .style("height",(h - yScale(d[1])) + "px")
                    .style("width",bw + "px")
                    .style("opacity",0.9)
                    .style("left",(i * bw) + 0 + "px")
                    .style("top",yScale(d[1]) + "px")
                    .style("transform","translate(" + padding + "px,0");
                tooltip.transition()
                    .duration(200)
                    .style("opacity",0.9);
                tooltip.html(d[0].slice(0,7) + "<br>" + "$" + d[1].toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g,"$1,") + "Billion")
                    .attr("data-date",d[0])
                    .style("left",(i * bw) + 30 + "px")
                    .style("top",h - 100 + "px")
                    .style("transform","translateX(" + padding +"px)");
                
            })
            .on("mouseout",function (d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity",0);
                overlay.transition()
                    .duration(200)
                    .style("opacity",0);
            });

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        svg.append("g")
            .attr("id","x-axis")
            .attr("transform", "translate(" + padding + "," + h + ")")
            .call(xAxis);
        svg.append("g")
            .attr("id","y-axis")
            .attr("transform", "translate(" + padding + ",0)")
            .call(yAxis);
    };
});