
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

app.get('/api/news', (req, res) => {
  res.json([
    { title: 'Breaking News: Naija Rising', content: 'Today in Nigeria, something big happened...' },
    { title: 'Elections 2025: Youth Take Charge', content: 'A wave of youth candidates emerge across the country.' }
  ]);
});

app.listen(5000, () => console.log('Server running on port 5000'));
