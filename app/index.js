/*
* File: index.js
* Author: Siegenthaler Alexandra 
* Copyright: 2025, Siegenthaler Alexandra 
* Group: Szoft II/2/E
* Date: 2025-10-23
* Github: Siegenthaler Alexandra
* Licenc: MIT
*/
import express from 'express'
import router from './routes/api.js'
import dotenv from 'dotenv'
dotenv.config()

const app =express()

app.use('/api', router)
const PORT = process.env.APP_PORT || 8000
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)

})