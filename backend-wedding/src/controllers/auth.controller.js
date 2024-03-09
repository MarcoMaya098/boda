const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { expressjwt: jwte } = require("express-jwt");
const pool = require("../db");

// const User=require('../model/user')
//const validateJwt = jwte({ secret: process.env.SECRET, algorithms: ["HS256"] })
//sconst signToken = id => jwt.sign({ id }, process.env.SECRET)

const signToken = id => jwt.sign({ id }, "mi-string-secreto")
const validateJwt = jwte({ secret: "mi-string-secreto", algorithms: ["HS256"] })
const findAndAssignUser = async (req, res, next) =>{   
    try {
        const user = await pool.query("SELECT * FROM users WHERE id = $1",[req.auth.id])
        //console.log(user.rows[0].id)

        if (user.rows.length === 0){
            return res.status(401).end()
        }
         //req.user = user
       // res.send(user.rows[0])
       // console.log("autorizado")
        next()
    } catch (e){
        next(e)
    }
}
const isAuthenticated = express.Router().use(validateJwt, findAndAssignUser)

const Auth = {
    login: async (req,res)=>{
        const email = req.body.email;
        const password = req.body.password;

        try{
            //const user = await User.findOne({ email: body.email })
            const user = await pool.query("SELECT * FROM users WHERE email = $1",[email])

            //console.log(user)
            if (user.rows.length === 0) {
                //console.log(user)
                res.status(401).send('Usuario y/o contrasena invalida')
                //return res.status(404).json({ message: "Task not found" });
            } else{ 
                const isMatch = await bcrypt.compare(password, user.rows[0].password)
                //console.log(ismatch)
                if(isMatch){
                    const signed = signToken(user.rows[0].id)
                    res.status(200).send(signed)
                   // console.log("logged")
                }else{
                    res.status(401).send('Usuario y/o contrasena invalida')
                }
            }                
        }catch (e){
            //console.log(err)
            res.send(e.message)
        }
    },
    register: async (req,res)=>{
        //const { body } = req
        //const { email } = req.body;
        const email = req.body.email;
        const password = req.body.password;

        console.log(req.body)
        try{
           // const isUser = await User.findOne({ email: body.email })
            const isUser = await pool.query("SELECT * FROM users WHERE email = $1",[email])

            if (isUser.rows.length > 0) { 
                console.log(isUser.rows[0])
            return res.status(403).send('Usuario existente')
            }else{ 
            const salt=await bcrypt.genSalt() //generar salt
            const hashed = await bcrypt.hash(password, salt) //hash encriptar
            const user = await pool.query("INSERT INTO users (email,password) VALUES ($1, $2)  RETURNING *",
            [email, hashed])
            //console.log(user.rows[0].id)
            const signed = signToken(user.rows[0].id)
            res.status(201).send(signed)  
            console.log("registrado")
            }          
    
        }catch (err){
            console.log(err)
            res.status(500).send(err.message)
        }
    }
}


module.exports = { Auth, isAuthenticated }