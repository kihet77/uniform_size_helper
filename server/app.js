const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;

const cors = require('cors');
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200
}));


const adminApi = require('./routes/admin.js');
app.use('/admin', adminApi);

app.get('/', (req,res)=>{
  res.send("hi")
})

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})