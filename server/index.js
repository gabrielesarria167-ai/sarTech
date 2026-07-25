require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool();

function generateId(){
    let id = "";
    for(let i = 0; i<10; i++){
        id += Math.floor(Math.random()*10);
    }
    return id;
}

async function insertUniqueId(data) {
    const maxAttempts = 10;
    for(let attempt = 1; attempt <= maxAttempts; attempt++){
        const id = generateId();
        try{
            const result = await pool.query(
                `INSERT INTO requests (id,name,surname,phone,device_type,brand,model)
                 VALUES ($1, $2, $3, $4, $5, $6, $7)
                 RETURNING id, created`,
                [id,data.name, data.surname, data.phone, data.device_type, data.brand, data.model]
            );
            return result.rows[0];
        } catch(error){
            if(error.code === "23505"){
                continue;
            }
            throw error;
        }
    }

    throw new Error("Nessun id libero dopo 10 tentativi");
}

app.post("/api/requests", async (req,res) => {
    const { name, surname, phone, device_type, brand, model } = req.body;

    if(!name || !surname || !phone || !device_type || !brand || !model){
        return res.status(400).json({ error: "Dati mancanti" });
    }

    try{
        const saved = await insertUniqueId({ name, surname, phone, device_type, brand, model });
        res.status(201).json({ id: saved.id, created: saved.created });
    } catch(error){
        console.error(error);
        res.status(500).json({ error: "Errore nel salvataggio dati" });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server live su http://localhost:${PORT}`);
});