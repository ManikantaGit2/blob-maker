function generateBlob() {
    const path = document.querySelector("#blob path");
    const points = 6 + Math.floor(Math.random() * 5); // Random number of edges
    let pathData = "M ";

    for (let i = 0; i < points; i++) {
        let angle = (Math.PI * 2 * i) / points;
        let radius = 40 + Math.random() * 20; // Random smoothness
        let x = 50 + Math.cos(angle) * radius;
        let y = 50 + Math.sin(angle) * radius;
        pathData += `${x},${y} `;
    }

    pathData += "Z";
    path.setAttribute("d", pathData);
}
function downloadBlob() {
    let svgElement = document.querySelector("#blob").outerHTML;
    let blob = new Blob([svgElement], { type: "image/svg+xml" });
    let url = URL.createObjectURL(blob);

    let link = document.createElement("a");
    link.href = url;
    link.download = "blob.svg";
    link.click();
}

// Generate a blob on load
generateBlob();