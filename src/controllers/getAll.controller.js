const {pg} = require("../utils/pg")
const getAll =async (req,res) =>{
        try {
            const todo = await pg('select * from todo');
            res.status(200).json({todo})             

        } catch (error) {
            console.log(error);
        }
};

const getById = async (req,res)=>{
           try {
            const { id } = req.params;
            const todoOne = await pg(`SELECT * FROM todo where todo_id = $1`, id);
            res.status(200).json({ todoOne });
           } catch (error) {
            console.log(error);
           }
}


module.exports = {getAll,getById};
