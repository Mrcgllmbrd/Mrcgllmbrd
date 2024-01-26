import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDb = async () => {
  try {
    /* ------------------------------------------------------------------------------------------------------ */
    /* ------------------------------------------------------------------------------------------------------ */
    /* ------------------------------------------------------------------------------------------------------ */
    // Creazione tabella userData
    await db.none(`
      CREATE TABLE IF NOT EXISTS userData (
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        surname TEXT NOT NULL,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT,
        docData_id INT REFERENCES docData(id) ON DELETE CASCADE
      );
    `);

    /* ------------------------------------------------------------------------------------------------------ */
    /* ------------------------------------------------------------------------------------------------------ */
    /* ------------------------------------------------------------------------------------------------------ */

    // Creazione tabella docData
    await db.none(`
      CREATE TABLE IF NOT EXISTS docData (
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        surname TEXT NOT NULL,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT

      );
    `);

    /* ------------------------------------------------------------------------------------------------------ */
    /* ------------------------------------------------------------------------------------------------------ */
    /* ------------------------------------------------------------------------------------------------------ */

    // Creazione tabella relazionale meals
    await db.none(`
    CREATE TABLE IF NOT EXISTS meals (
        id SERIAL PRIMARY KEY,
        start TIMESTAMP,
        eEnd TIMESTAMP,
        title VARCHAR(255),
        resource INTEGER,
        calories INTEGER,
        notes TEXT,
        userData_id INT REFERENCES userData(id) ON DELETE CASCADE,
        docData_id INT REFERENCES docData(id) ON DELETE CASCADE
    );
`);

    console.log("Database setup completed successfully");
  } catch (error) {
    console.error("Error during database setup:", error);
  }
};

/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */

setupDb();

export { db };
