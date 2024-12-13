document.getElementById('start-worker').addEventListener('click', () => {
    // Create a new worker from the worker.js script
    const worker = new Worker('worker.js');
    // Send data to the worker
    worker.postMessage(100000);  // Passing the number up to which the sum of squares will be calculated
    // Handle the result from the worker
    worker.onmessage = function(event) {
        console.log("Received from worker:", event.data);
        document.getElementById('result').textContent = event.data;
    };
    // Handle any errors in the worker
    worker.onerror = function(error) {
        console.error("Worker error:", error.message);
        alert("Error in worker");
    };
});