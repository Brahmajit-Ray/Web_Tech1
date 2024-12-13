onmessage = function(event) {
    // event.data contains the data sent from the main thread
    console.log("Worker received message:", event.data);
    // Perform some heavy computation, for example, calculating the sum of squares

    let sum = 0;
    let num = event.data;
    for (let i = 0; i <= num; i++) {
        sum += i * i;  // Sum of squares
    }
    // Post the result back to the main thread
    postMessage(sum);
};