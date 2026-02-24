
import express from 'express';
import {selfServiceWarehouse} from "./selfServiceWarehouse.js";

const app = express();
const port = 3000;
/*
a/
app.get('/customers/ids', (req, res) => {
    const customersIds = Object.keys(selfServiceWarehouse);
    res.send(`Customer ids: ${customersIds.join(', ')}.`);
});
b/
app.get('/customers/:customerId/items', (req, res) => {
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

app.delete(`/customer/:customerId`, (req, res) => {
    const customerId = req.params.customerId;
    //check customerId exist or not
    if(selfServiceWarehouse[customerId]){
        delete selfServiceWarehouse[customerId];
        //return status 201 if succeed
        return res.status(201).end();

    }
    //if customerId does not exist
    return res.status(404).end();
})

app.get('/customerIds', (req, res) => {
    const customerIds = Object.keys(selfServiceWarehouse);
    const sortOrder = req.query.sort === 'desc' ? 'desc' : 'asc';

    customerIds.sort((a, b) => sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a));

    res.send(customerIds);   
    //res.json({ customerIds });   
});


7c/
*/
import path from 'path';
import { fileURLToPath } from 'url';
// __dirname trong ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/report', (req, res) => {
    res.sendFile(path.join(__dirname, 'report.txt'));
    //res.sendFile('/home/dell/1_backend/be_2026_e2_2/report.txt')
});

app.listen(port, () => {
    console.log(`Server is running on http://localhos:${port}`);
});
