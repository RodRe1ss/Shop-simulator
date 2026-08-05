const sql = require("../db");

const getAll = async () => {
    return await sql`
        SELECT * FROM products
        ORDER BY name;`;
}

const getById = async (id) => {
    return (await sql`
        SELECT * FROM products
        WHERE id = ${id};`)[0];
}


module.exports = {
    getAll,
    getById
}

const test = async () => {
  try {
    const all = await getAll();
    all && console.log("All results: ", all);

    const one = await getById(all[3].id);
    one && console.log("One result: ", one);

    return;
  } catch (error) {
    console.log(error.code);
    console.log(error.table_name);
    console.log(error.constraint_name);
    console.log(error.detail);
    return;
  } finally {
    process.exit(0);
  }
};

test();