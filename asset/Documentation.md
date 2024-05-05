
# Venocyber Md WhatsApp Bot Simple Document
### Simple Document on how The Database Works
----------------------------------------------------------------
### Simple Document on how The Database Works
##### Bot Database with and without MongoDB, PostgreSQL
<p>Sometimes running Bot With MongoDb or PostgreSQL can can quite a few error well here's a documentation on how it's fixed</p>

###### References
 ```
 pg.connnectpg = () => {
  pool = new Pool({
    connectionString: global.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  pool.on("connect", () => {
    cacheTable.connnectpg = true;
    sqldb = true;
    return sqldb;
  });
  pool.on("error", (_0x18b37d) => {
    console.log("PostgreSQL database error:");
    setTimeout(pg.connnectpg, 1000);
  });
};
pg.createTable = async (tableName) => {
  if ((!sqldb && !cacheTable.connectpg) || (!pool && global.sqldb)) {
    const connectionResult = pg.connectpg();
    if (!connectionResult) {
      return false;
    }
  }
  if (cacheTable[tableName]) {
    return true;
  }
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query(pgtables[tableName]);
    await client.query("COMMIT");
    if (!cacheTable[tableName]) {
      console.log(`PostgreSQL ${tableName} Table created in Database.`);
    }
    cacheTable[tableName] = true;
    return true;
  } catch (error) {
    console.log(`Error creating PostgreSQL ${tableName} Table:`, error);
  } finally {
    client.release();
  }
};
pg.new = async (tableName, data) => {
  if (!(await pg.createTable(tableName))) {
    return false;
  }
  const client = await pool.connect();
  try {
    if (await pg.findOne(tableName, data)) {
      return await pg.updateOne(tableName, { id: data.id }, data);
    }
    await client.query("BEGIN");
    const query = `
      INSERT INTO ${tableName} (${Object.keys(data).join(", ")})
      VALUES (${Object.keys(data)
        .map((_, index) => `$${index + 1}`)
        .join(", ")})
      ON CONFLICT (id) DO NOTHING
      RETURNING *;
    `;
    const values = Object.values(data);
    const result = await client.query(query, values);
    await client.query("COMMIT");
    return result.rows[0];
  } catch (error) {
    await client.query("ROLLBACK");
    console.log(`Error inserting new row into ${tableName}\n`, error);
  } finally {
    client.release();
  }
};
pg.countDocuments = async (tableName) => {
  if (!(await pg.createTable(tableName))) {
    return 0;
  }
  const client = await pool.connect();
  try {
    const result = await client.query(`SELECT COUNT(*) FROM ${tableName}`);
    return parseInt(result.rows[0].count);
  } catch (error) {
    return 0;
  } finally {
    client.release();
  }
};
pg.findOne = async (tableName, data) => {
  if (!(await pg.createTable(tableName))) {
    return false;
  }
  const client = await pool.connect();
  try {
    const result = await client.query(
      `SELECT * FROM ${tableName} WHERE id = $1`,
      [data.id]
    );
    return result.rows[0];
  } catch (error) {
    console.log(
      `Error while finding ${tableName} document by Id: ${data.id}\n`,
      error
    );
    return false;
  } finally {
    client.release();
  }
};
pg.find = async (tableName, query = {}) => {
  if (!(await pg.createTable(tableName))) {
    return [];
  }
  const client = await pool.connect();
  try {
    let values = Object.values(query);
    if (!values || !values[0]) {
      return (await client.query(`SELECT * FROM ${tableName}`)).rows || [];
    } else if (query.id) {
      return [{ ...(await pg.findOne(tableName, query)) }] || [];
    }
  } catch (error) {
    console.log(`Error while find ${tableName} documents`, error);
    return [];
  } finally {
    client.release();
  }
};
pg.updateOne = async (tableName, selector, update = {}) => {
  if (!(await pg.createTable(tableName))) {
    return false;
  }
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const selectQuery = `SELECT * FROM ${tableName} WHERE id = $1 FOR UPDATE`;
    const selectResult = await client.query(selectQuery, [selector.id]);
    if (selectResult.rows[0]) {
      const updateQuery = `UPDATE ${tableName} SET ${Object.keys(update)
        .map((key, index) => `${key} = $${index + 2}`)
        .join(", ")} WHERE id = $1 RETURNING *;`;
      const updateValues = [selector.id, ...Object.values(update)];
      const updateResult = await client.query(updateQuery, updateValues);
      await client.query("COMMIT");
      return updateResult.rows[0];
    } else {
      return await pg.new(tableName, { ...selector, ...update });
    }
  } catch (error) {
    await client.query("ROLLBACK");
    console.error(
      `Error while finding and updating ${tableName} document by Id: ${selector.id}\n`,
      error
    );
    return [];
  } finally {
    client.release();
  }
};
pg.findOneAndDelete = async (tableName, selector) => {
  if (!(await pg.createTable(tableName))) {
    return false;
  }
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const selectQuery = `SELECT * FROM ${tableName} WHERE id = $1 FOR UPDATE`;
    const selectResult = await client.query(selectQuery, [selector.id]);
    if (selectResult.rows[0]) {
      const deleteQuery = `DELETE FROM ${tableName} WHERE id = $1 RETURNING *`;
      const deleteResult = await client.query(deleteQuery, [selector.id]);
      await client.query("COMMIT");
      return deleteResult.rows[0];
    } else {
      return true;
    }
  } catch (error) {
    await client.query("ROLLBACK");
    console.error(
      `Error while finding and deleting ${tableName} document by Id: ${selector.id}\n`,
      error
    );
    return false;
  } finally {
    client.release();
  }
};
pg.collection = {
  drop: async (tableName) => {
    if (!(await pg.createTable(tableName))) {
      return false;
    }

    const client = await pool.connect();

    try {
      await client.query("BEGIN");
      await client.query(`DROP TABLE IF EXISTS ${tableName}`);
      await client.query("COMMIT");
      delete cacheTable[tableName];
      return true;
    } catch (error) {
      await client.query("ROLLBACK");
      console.error(`Error while dropping ${tableName} table\n`, error);
      return false;
    } finally {
      client.release();
    }
  },
};

 /**
 * PostgreSQL Database Helper Functions
 * 
 * This module provides a set of functions for interacting with a PostgreSQL database.
 * 
 * @module pg
 */

/**
 * Establishes a connection to the PostgreSQL database.
 * 
 * @returns {boolean} Returns true if the connection is successful, otherwise false.
 */
pg.connectpg = () => {
  // Implementation details...
};

/**
 * Creates a table in the database if it doesn't already exist.
 * 
 * @param {string} tableName - The name of the table to be created.
 * @returns {boolean} Returns true if table creation is successful, otherwise false.
 */
pg.createTable = async (tableName) => {
  // Implementation details...
};

/**
 * Inserts a new record into the specified table.
 * 
 * @param {string} tableName - The name of the table.
 * @param {object} data - The data to be inserted.
 * @returns {object|boolean} Returns the inserted record if successful, otherwise false.
 */
pg.new = async (tableName, data) => {
  // Implementation details...
};

/**
 * Returns the count of documents in the specified table.
 * 
 * @param {string} tableName - The name of the table.
 * @returns {number} The count of documents in the table.
 */
pg.countDocuments = async (tableName) => {
  // Implementation details...
};

/**
 * Retrieves a single document from the specified table based on the provided ID.
 * 
 * @param {string} tableName - The name of the table.
 * @param {object} data - The ID of the document to retrieve.
 * @returns {object|boolean} Returns the retrieved document if found, otherwise false.
 */
pg.findOne = async (tableName, data) => {
  // Implementation details...
};

/**
 * Retrieves documents from the specified table based on the provided query parameters.
 * 
 * @param {string} tableName - The name of the table.
 * @param {object} [query={}] - The query parameters.
 * @returns {Array} An array of documents matching the query criteria.
 */
pg.find = async (tableName, query = {}) => {
  // Implementation details...
};

/**
 * Updates a single document in the specified table.
 * 
 * @param {string} tableName - The name of the table.
 * @param {object} selector - The selector (usually ID) for the document to update.
 * @param {object} update - The data to update the document with.
 * @returns {object|boolean} Returns the updated document if successful, otherwise false.
 */
pg.updateOne = async (tableName, selector, update = {}) => {
  // Implementation details...
};

/**
 * Finds and deletes a single document from the specified table.
 * 
 * @param {string} tableName - The name of the table.
 * @param {object} selector - The selector (usually ID) for the document to delete.
 * @returns {object|boolean} Returns the deleted document if found and deleted, otherwise false.
 */
pg.findOneAndDelete = async (tableName, selector) => {
  // Implementation details...
};

/**
 * Collection-related operations for PostgreSQL tables.
 */
pg.collection = {

  /**
   * Drops (deletes) the specified table from the database.
   * 
   * @param {string} tableName - The name of the table to drop.
   * @returns {boolean} Returns true if table dropping is successful, otherwise false.
   */
  drop: async (tableName) => {
    // Implementation details...
  }
};
```

### For more details

<p>
PostgreSQL Database Helper Functions Documentation

This documentation outlines a set of functions designed to streamline interactions with a PostgreSQL database. These functions provide functionalities such as connecting to the database, creating tables, inserting new records, querying data, updating records, and more.

### `pg.connectpg()`

This function establishes a connection to the PostgreSQL database using the provided connection string (`global.DATABASE_URL`) and SSL configuration. It also sets up event listeners for connection establishment and error handling.

### `pg.createTable(tableName)`

This asynchronous function creates a table in the database if it doesn't already exist. It first ensures that a connection to the database is established. Then, it executes the SQL command to create the table based on the provided table name.

### `pg.new(tableName, data)`

This asynchronous function inserts a new record into the specified table. If the table doesn't exist, it attempts to create it. It handles cases where a record with the same ID already exists by updating the existing record.

### `pg.countDocuments(tableName)`

This asynchronous function returns the count of documents (rows) in the specified table. If the table doesn't exist, it returns 0.

### `pg.findOne(tableName, data)`

This asynchronous function retrieves a single document from the specified table based on the provided ID. If the table doesn't exist, it returns `false`.

### `pg.find(tableName, query)`

This asynchronous function retrieves documents from the specified table based on the provided query parameters. It supports finding all documents or a specific document by ID. If the table doesn't exist, it returns an empty array.

### `pg.updateOne(tableName, selector, update)`

This asynchronous function updates a single document in the specified table based on the provided selector (usually ID) and update data. If the document doesn't exist, it creates a new one. If the table doesn't exist, it returns `false`.

### `pg.findOneAndDelete(tableName, selector)`

This asynchronous function finds and deletes a single document from the specified table based on the provided selector (usually ID). If the document doesn't exist, it returns `true`. If the table doesn't exist, it returns `false`.

### `pg.collection.drop(tableName)`

This asynchronous function drops (deletes) the specified table from the database. If the table doesn't exist, it returns `false`.

### Notes

- These functions utilize asynchronous programming to handle database operations efficiently.
- Proper error handling is implemented to ensure robustness and reliability.
- The functions automatically handle database connections, allowing for seamless interactions with the PostgreSQL database.
</p>
