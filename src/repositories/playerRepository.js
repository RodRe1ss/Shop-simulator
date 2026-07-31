const getId = require("../utils/getId");
const sql = require("../db")

const create = async (username) => {
    const id = getId("plyr")

    return (await sql`
    INSERT INTO players (id, username, created_at)
    VALUES (${id}, ${username}, NOW())
    RETURNING *;`)[0];
}

const getById = async (id) => {
    return (await sql`
        SELECT * FROM players
        WHERE id = ${id};`)[0];
}

module.exports = {
    create,
    getById
}



// const test = async () => {
//     try {
//         const created = await create("test789");
//         console.log("Created: ",created);

//         const player = await getById(created.id);
//         console.log("Player: ", player)
//         return;
//     } catch (error) {
//         console.log(error.code)
//         console.log(error.table_name)
//         console.log(error.constraint_name)
//         console.log(error.detail)
//         return;
//     } finally {
//         process.exit(0)
//     }
// }

// test();
