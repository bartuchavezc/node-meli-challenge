const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/mutant', require('./src/app/mutant/mutant.router'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});