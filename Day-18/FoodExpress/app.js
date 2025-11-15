// 1. Fetch Order using Callbacks
// ------------------------
function fetchOrder(orderId, callback) {
  console.log("Fetching order...");
  setTimeout(() => {
    if (!orderId) {
      callback(new Error("Order ID is missing"), null);
    } else {
      const order = { id: orderId, item: "Pizza", price: 450 };
      callback(null, order);
    }
  }, 1000);
}

// ------------------------
// 2. Process Payment using Promises
// ------------------------
function processPayment(order) {
  console.log("Processing payment...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (order.price > 0) {
        resolve(`Payment of ₹${order.price} successful for order ${order.id}`);
      } else {
        reject("Payment failed: invalid amount");
      }
    }, 1000);
  });
}

// ------------------------
// 3. Generate Invoice using Async/Await
// ------------------------
function generateInvoice(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        `Invoice generated for order ${order.id}: ${order.item} - ₹${order.price}`
      );
    }, 1000);
  });
}

async function runOrderProcessing(orderId) {
  // Step 1: Fetch Order using Callback
  fetchOrder(orderId, async (err, order) => {
    if (err) {
      console.error("Error fetching order:", err.message);
      return;
    }
    console.log("Order fetched:", order);

    // Step 2: Process Payment using Promise
    try {
      const paymentResult = await processPayment(order);
      console.log(paymentResult);
    } catch (paymentError) {
      console.error("Payment error:", paymentError);
      return;
    }

    // Step 3: Generate Invoice using Async/Await
    try {
      const invoice = await generateInvoice(order);
      console.log(invoice);
    } catch (invoiceError) {
      console.error("Invoice generation error:", invoiceError);
    }
  });
}

// Run the system
runOrderProcessing(101);
