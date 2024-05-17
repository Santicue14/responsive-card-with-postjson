const path = require('path');
const card = path.join(__dirname, '../../data/data.json');
const fs = require('fs');

const postCard = (req, res) => {
    const newCard = req.body;
    fs.readFile(card, 'utf-8', (err, jsonString) => {
        if (err) {
            console.log('File read failed', err);
            return res.status(500).json({ error: 'Error reading file' });
        }
        let jsonData = JSON.parse(jsonString);
        jsonData.push(newCard);

        fs.writeFile(card, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.log('Error writing file', err);
                return res.status(500).json({ error: 'Error writing file' });
            }
            res.status(200).json({ message: 'Data saved' });
        });
    });
};

module.exports = { postCard };
