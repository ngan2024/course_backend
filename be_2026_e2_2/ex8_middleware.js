
import express from 'express';
import {selfServiceWarehouse} from "./selfServiceWarehouse.js";

const app = express();
const port = 3000;
// Logging middleware
function logRequestInfo(req, res, next) {
  console.log("---- Incoming Request ----");
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.originalUrl}`);
  console.log(`Time: ${new Date().toISOString()}`);
  console.log("--------------------------");

  next(); // allow the request to continue
}

app.get('/customers/:customerId/items', logRequestInfo, (req, res) => {
    const {customerId} = req.params;
    const customerData = selfServiceWarehouse[customerId];

    console.log(`customerId: ${customerId}`);
    console.log(`customerData: `, customerData);
    if (!customerData) {
        return res.status(404).json({
            message: `Customer with id "${customerId}" not found`
        });
    }

    // Convert object slots into array format
  const items = Object.entries(customerData).map(([slot, data]) => ({
    slot: Number(slot),
    item: data.item,
    quantity: data.quantity
  }));

  res.json({
    customerId,
    items
  });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhos:${port}`);
});
