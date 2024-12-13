self.onmessage = (event) => {
    // The received ArrayBuffer
    const buffer = event.data;
    console.log('Worker: Received buffer', new Uint8Array(buffer));

    // Process the data (double the values)
    const view = new Uint8Array(buffer);
    for (let i = 0; i < view.length; i++) {
        view[i] *= 2;
    }

    console.log('Worker: Modified buffer', view);

    // Send the buffer back to the main thread
    self.postMessage('Data processed!');
};
