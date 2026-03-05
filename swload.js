async function generateServiceWorkerBlob(url) {
    const code = await fetch(url).then(r => r.text());
    const blob = new Blob([code], { type: 'application/javascript' });
    const workerUrl = URL.createObjectURL(blob);
}
