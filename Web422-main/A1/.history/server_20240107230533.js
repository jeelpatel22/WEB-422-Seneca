// Setup
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
// Or use some other port number that you like better

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Array of strings
let colours = ['Red', 'Green', 'Blue', 'Yellow', 'Aqua', 'Fuschia'];

let people =

// Deliver the app's home page to browser clients
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Get all colours
app.get('/api/items', (req, res) => {
  res.json(colours);
});

// Get one colour by ID
app.get('/api/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  if (itemId >= 0 && itemId < colours.length) {
    res.json({ colour: colours[itemId] });
  } else {
    res.status(404).send('Resource not found');
  }
});

// Add new colour
app.post('/api/items', (req, res) => {
  const newItem = req.body.colourName;
  colours.push(newItem);
  res.status(201).json({ message: `Added ${newItem} as item identifier ${colours.length - 1}` });
});

// Edit existing colour by ID
app.put('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  if (itemId >= 0 && itemId < colours.length) {
    const updatedItem = req.body.colourName;
    colours[itemId] = updatedItem;
    res.json({ message: `Updated item with identifier: ${itemId} to ${updatedItem}` });
  } else {
    res.status(404).send('Resource not found');
  }
});

// Delete colour by ID
app.delete('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  if (itemId >= 0 && itemId < colours.length) {
    const deletedItem = colours.splice(itemId, 1)[0];
    res.status(200).json({ message: `Deleted colour: ${deletedItem}` });
  } else {
    res.status(404).send('Resource not found');
  }
});

// Resource not found (this should be at the end)
app.use((req, res) => {
  res.status(404).send('Resource not found');
});

// Tell the app to start listening for requests
app.listen(HTTP_PORT, () => {
  console.log('Ready to handle requests on port ' + HTTP_PORT);
});


