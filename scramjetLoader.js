// requires scramjet already included btw (AND BAREMUX)
var connection;

async function generateServiceWorkerBlob(url) {
    const code = await fetch(url).then(r => r.text());
    const blob = new Blob([code], { type: 'application/javascript' });
    const workerUrl = URL.createObjectURL(blob);
}

async function loadScramJet(bareMuxURL, transpotURL, wispURL) {
    connection = new BareMux.BareMuxConnection(generateServiceWorkerBlob(bareMuxURL));
    await connection.setTransport(generateServiceWorkerBlob(transportURL), [{ wisp:  wispURL}]);
}
