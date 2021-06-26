const { Router } = require("express");
const router=Router();
const datos={
    "url": "string",
    "details": "Una url publica hacia donde este api va a publicar la informacion de los sensores"
};
router.get('/',(req,res)=>{
    res.send(datos);
});
router.get('/hola',(req,res)=>{
    res.send(datos.url.replace('a','b'));
})
router.get('/basededatos',(req,res)=>{
    res.send(datos.url.replace('a','b'));
})

module.exports=router;