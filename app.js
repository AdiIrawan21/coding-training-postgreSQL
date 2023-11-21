// call express module express
const express = require("express")
// call express library
const app = express()
// call database
const pool = require("./koneksi")

app.use(express.json()) // req.body
const port = 3000;

// melakukan insert data
// app.get("/addasync", async (req,res) => {
//     try {
//         const nama = "Anggi Kurniawan"
//         const mobile = "087745239087"
//         const email = "anggi@gmail.com"
//         const newCont = await pool.query(`INSERT INTO contacts values ('${nama}', '${mobile}', '${email}') RETURNING *`)
//         res.json(newCont)
//     } catch (err) {
//         console.error(err.message)
//     }
// })

// menampilkan list contact pada table postgreSQL
app.get('/list', async (req,res) => {
    try {
        const contact = await pool.query(`SELECT * from contacts`)
        res.json(contact.rows)
    } catch (err) {
        console.error(err.message)
    }
})


// call server
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
