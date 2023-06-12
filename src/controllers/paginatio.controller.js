// pagination and filter data
const {pg} = require('../utils/pg');
const pagination = async(req,res) =>{
        try {
         let {skip, limit, from, to} = req.query;
         limit = limit ? limit :10;
         skip = skip ? (skip-1)* limit :0;
         from = from ? new Date(from) : new Date("1970-01-01")
         to =to ? new Date(to) : new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate()+1
         );
         const paginationList = await pg(`select * from todo where todo_created_at between $3 and $4 offset $1 limit $2`, skip, limit, from, to);
         res.status(200).json({ paginationList });
        } catch (error) {
         console.log(error);
        }
}

module.exports = {pagination};
