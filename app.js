import dotenv from 'dotenv'
dotenv.config()
import {join} from 'path'
import express from 'express'
import web from './routes/web.js'

const app=express()
const port=process.env.PORT
app.set('view engine','ejs')


app.use(express.static(join(process.cwd(),'public')))
app.use(express.urlencoded({extended:true}))

app.use('/',web)


app.listen(port,(req,res)=>{
    console.log(`The server is Running at http://localhost:${port}`)
})