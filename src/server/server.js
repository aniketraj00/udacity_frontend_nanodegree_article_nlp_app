require('dotenv').config();
const express = require('express');
const FormData = require('form-data');
const axios = require('axios').default;
const bodyParser = require('body-parser');
const cors = require('cors');

const app  = express();

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());

app.post('/analyze', (req, res) => {
    const { sourceType, sourceValue } = req.body;
    const formData = new FormData();
    formData.append('key', process.env.API_KEY);
    formData.append('lang', 'en');
    if(sourceType === 'url') {
        formData.append('url', sourceValue);
    } else {
        formData.append('txt', sourceValue);
    }
    axios('https://api.meaningcloud.com/sentiment-2.1', {
        method: 'POST',
        data: formData,
    })
    .then((apiRes) => {
        return res.send(apiRes.data);
    })
    .catch((err) => {
        console.log(err);
        res.send({
            status: {
                code: '500',
                msg: 'Something went wrong! Please try again later.',
                err
            },
        });
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});