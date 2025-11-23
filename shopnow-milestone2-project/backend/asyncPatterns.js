/**
 * This file shows three versions of a fetchData function.
 * The first uses a callback, the second uses a Promise,
 * and the third uses async and await.
 */

// This function simulates an asynchronous data fetch using a callback style.
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const message = "Data fetched successfully";
    // In the callback pattern we pass the result into the callback function.
    callback(null, message);
  }, 1000);
}

// This function returns a Promise instead of using a callback.
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Here we resolve the promise with the same message as before.
      resolve("Data fetched successfully");
    }, 1000);
  });
}

// This function uses async and await to call the Promise based version.
async function fetchDataWithAsyncAwait() {
  try {
    // The await keyword pauses execution until the Promise settles.
    const result = await fetchDataWithPromise();
    return result;
  } catch (error) {
    // In case of error we simply throw it again so that the caller can handle it.
    throw error;
  }
}

// This block only runs when the file is executed directly with node.
if (require.main === module) {
  console.log("Using callback style:");
  fetchDataWithCallback((error, result) => {
    if (error) {
      console.error("Callback error:", error);
    } else {
      console.log("Callback result:", result);
    }

    console.log("Using Promise style:");
    fetchDataWithPromise()
      .then((promiseResult) => {
        console.log("Promise result:", promiseResult);
        console.log("Using async and await style:");
        return fetchDataWithAsyncAwait();
      })
      .then((asyncResult) => {
        console.log("Async/await result:", asyncResult);
      })
      .catch((promiseError) => {
        console.error("Promise or async error:", promiseError);
      });
  });
}

// These exports allow other files to reuse these functions if needed.
module.exports = {
  fetchDataWithCallback,
  fetchDataWithPromise,
  fetchDataWithAsyncAwait,
};
