const { Pool} = require('pg');


const pool = new Pool({
    connectionString: 'postgres://postgres:zahro3028@localhost:5432/todo'
});


const pg = async (SQL, ...values) =>{
    const client = await pool.connect();
    try {
        const {rows} = await client.query(SQL, values.length ? values : null);

        return rows;
    } catch (error) {
        console.log(error);
    } finally {
        await client.release();
    }
};

module.exports = {pg};