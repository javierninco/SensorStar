const { Router } = require("express");
const router=Router();
const datos={
    "url": "string",
    "details": "Una url publica hacia donde este api va a publicar la informacion de los sensores"
};
router.get('/', function (req, res) {
   
    /*const config = require("../../config");
    const sqlConnection = require("../../sql");
    const sql = new sqlConnection(config.connectionSQL);
    
    (async () => {
        try {
            let select = await sql.select("sensores");
            console.log(select.recordset);
        } catch (error) {
            sql.close();
            console.log(error);
        }
    })();*/
    res.json("hola bienvenido por favor consulte otras urls");
});
router.get('/hola',(req,res)=>{
    res.send(datos.url.replace('a','b'));
})
router.get('/basededatos',(req,res)=>{
    res.send(datos.url.replace('a','b'));
})

module.exports=router;