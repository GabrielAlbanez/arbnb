const express = require('express')
const router = require('./router')
const app = express()
const cors = require('cors')
app.use(express.json());

//como se fosse um middlwere que server para poder dar acesso a essa localhost a fazer
//requizição
app.use(cors({ origin: 'http://localhost:3000' }));
//use express json é para nossa api enivar json
app.use(router)

module.exports = app