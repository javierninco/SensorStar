const { Router } = require("express");
const router=Router();
const naves=require('../sample.json')

router.get('/naves',(req,res)=>{
    res.json(naves);
});
router.post('/almacenarnaves',(req,res)=>{
    const{fecha,maquina,megatones,otrodato}=req.body;
    if(fecha&&maquina&&megatones&&otrodato){
        const id=naves.length+1;
        const nuevanave={...req.body,id};
        naves.push(nuevanave);
        res.json("guardado");
    }
    else{
        res.json("ocuurio un error");
    }
    
  
});


module.exports=router;