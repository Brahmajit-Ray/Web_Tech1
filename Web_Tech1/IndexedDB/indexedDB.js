let db;

// Open (or create) the database
const request = indexedDB.open('MyDatabase', 1);

request.onupgradeneeded = (event) => {
    db = event.target.result;
    if (!db.objectStoreNames.contains('MyStore')) {
        db.createObjectStore('MyStore', { keyPath: 'id', autoIncrement: true });
    }
    console.log('Database setup complete');
};

request.onsuccess = (event) => {
    db = event.target.result;
    console.log('Database opened successfully');
};

request.onerror = (event) => {
    console.error('Error opening database:', event.target.error);
};

// Add data
function addData() {
    const transaction = db.transaction('MyStore', 'readwrite');
    const store = transaction.objectStore('MyStore');
    const data = { name: 'John Doe', age: 30 };
    const request = store.add(data);

    request.onsuccess = () => {
        console.log('Data added:', data);
    };

    request.onerror = (event) => {
        console.error('Error adding data:', event.target.error);
    };
}

// Read data
function readData() {
    const transaction = db.transaction('MyStore', 'readonly');
    const store = transaction.objectStore('MyStore');
    const request = store.getAll();

    request.onsuccess = (event) => {
        const result = event.target.result;
        console.log('Data read:', result);
        document.getElementById('output').innerHTML = JSON.stringify(result, null, 2);
    };

    request.onerror = (event) => {
        console.error('Error reading data:', event.target.error);
    };
}

// Update data
function updateData() {
    const transaction = db.transaction('MyStore', 'readwrite');
    const store = transaction.objectStore('MyStore');

    // Assuming we know the ID of the data to update (e.g., id = 1)
    const request = store.get(1);

    request.onsuccess = (event) => {
        const data = event.target.result;
        if (data) {
            data.age = 35; // Update the age
            const updateRequest = store.put(data);

            updateRequest.onsuccess = () => {
                console.log('Data updated:', data);
            };

            updateRequest.onerror = (event) => {
                console.error('Error updating data:', event.target.error);
            };
        } else {
            console.log('No data found with the given ID');
        }
    };

    request.onerror = (event) => {
        console.error('Error fetching data for update:', event.target.error);
    };
}

// Delete data
function deleteData() {
    const transaction = db.transaction('MyStore', 'readwrite');
    const store = transaction.objectStore('MyStore');

    // Assuming we know the ID of the data to delete (e.g., id = 1)
    const request = store.delete(1);

    request.onsuccess = () => {
        console.log('Data deleted successfully');
    };

    request.onerror = (event) => {
        console.error('Error deleting data:', event.target.error);
    };
}