const express = require('express')
const server = express()

     const sample =async (req,res)=>{
        console.log("working")
        res.end()
    }
    
module.exports = {
    sample:sample
}



