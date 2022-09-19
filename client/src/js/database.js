import { openDB } from 'idb';

const initdb = async () =>
// creating a new database named 'jate' which uses version 1 of the database
  openDB('jate', 1, {
    // Add database schema if it has not already been initialized
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('Database already exists');
        return;
      }
      // Create a new object store for the data and give it an key name of 'id' which needs to increment automatically.
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// PUT to the IndexedDB database using the idb module
export const putDb = async (content) => {
  // Create a connection to the database and version we want to use
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges
  const tx = jateDb.transaction('jate', 'readwrite');
  // Open up the desired object store
  const store = tx.objectStore('jate');
  // Use the .add() method on the store and pass in the content
  const request = store.put({ id: 1, value: content });
  // Get confirmation of the request
  const result = await request;
  console.log(result.value);
};

// export a function used to GET from the IndexedDB database using the idb module
export const getDb = async () => {
  // Create a connection to the database and version we want to use
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges
  const tx = jateDb.transaction('jate', 'readonly');
  // Open up the desired object store
  const store = tx.objectStore('jate');
  // Use the .get() method to get one item from the database
  const request = store.get(1);
  // Get confirmation of the request
  const result = await request;
  result
    ? console.log('🚀 - data retrieved from the database', result.value)
    : console.log('🚀 - data not found in the database');
  // Check if a variable is defined and if it is, return it
  return result?.value;
};

initdb();
