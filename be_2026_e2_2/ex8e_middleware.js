import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
// Global middleware
app.use(bodyParser.json());

function errorHandler(err, req, res, next) {
  console.error("Error:", err.message);

  res.status(400).json({
    error: err.message
  });
}

app.post('/calculate-total', (req, res, next) => {
  const data = req.body;

  // Check items
  if (!data.items || !Array.isArray(data.items)) {
    return next(new Error("Missing 'items' array in request body"));
  }

  // Check every item
  for (const item of data.items) {
    if (item.quantity == null || item.unitPrice == null) {
      return next(new Error("Each item must include 'quantity' and 'unitPrice'"));
    }
  }

  // Calculate total
  const total = data.items.reduce((sum, item) => {
    return sum + item.quantity * item.unitPrice;
  }, 0);

  data.total = total;

  res.json(data);
});

app.use(errorHandler);
/* app.post('/calculate-total', (req, res) => {
  const data = req.body;

  if (!data.items || !Array.isArray(data.items)) {
    return res.status(400).json({ message: "Invalid input: items array required" });
  }

  // Calculate total cost
  const total = data.items.reduce((sum, item) => {
    return sum + item.quantity * item.unitPrice;
  }, 0);

  // Add new attribute
  data.total = total;

  res.json(data);
});
 */
app.listen(port, () => {
    console.log(`Server is running on http://localhos:${port}`);
});