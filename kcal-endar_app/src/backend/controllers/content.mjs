import * as dotenv from "dotenv";
dotenv.config();

import { db } from "../db.mjs";
import jwt from "jsonwebtoken";

// ... (il resto del tuo codice rimane invariato)

import process from "process";

/* ------------------------------------------------------------------------------------------------------ */

// REGISTRAZIONE UTENTE USER
const signupUser = async (req, res) => {
  const { name, surname, username, email, password } = req.body;

  try {
    await db.tx(async (t) => {
      // Seleziona i dati dalla tabella userData
      const existingUser = await t.oneOrNone(
        "SELECT * FROM userData WHERE email = $1 OR username = $2",
        [email, username]
      );

      const existingDoc = await t.oneOrNone(
        "SELECT * FROM docData WHERE email = $1 OR username = $2",
        [email, username]
      );

      // Verifica se l'utente è già presente nel database
      if (existingUser || existingDoc) {
        res.status(500).json({ message: "Utente già registrato" });
        return;
      }

      // Inserisci il nuovo utente nella tabella userData
      const result = await t.one(
        `
        INSERT INTO userData (name, surname, username, email, password)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id;
      `,
        [name, surname, username, email, password]
      );

      const userId = result.id;

      // Inserisci automaticamente un record nella tabella meals con l'ID dell'utente
      await t.none("INSERT INTO meals (userData_id) VALUES ($1)", [userId]);
    });

    res.status(201).json({ message: "Utente aggiunto" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Errore durante la registrazione" });
  }
};
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */

// REGISTRAZIONE UTENTE DOCTOR
const signupDoc = async (req, res) => {
  const { name, surname, username, email, password } = req.body;
  try {
    // Seleziona i dati dalla tabella userData
    const existingDoc = await db.oneOrNone(
      "SELECT * FROM docData WHERE email = $1 OR username = $2",
      [email, username]
    );
    const existingUser = await db.oneOrNone(
      "SELECT * FROM userData WHERE email = $1 OR username = $2",
      [email, username]
    );

    // Verifica se l'utente è già presente nel database
    if (existingDoc || existingUser) {
      res.status(500).json({ message: "Utente già registrato" });
    } else {
      // Inserisci il nuovo utente nella tabella userData
      await db.none(
        `
        INSERT INTO docData (name, surname, username, email, password)
        VALUES ($1, $2, $3, $4, $5);
      `,
        [name, surname, username, email, password, email]
      );

      res.status(201).json({ message: "Utente aggiunto" });
    }
  } catch (error) {
    console.error(error.message);
  }
};

/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */

// LOGIN UTENTE
const login = async (req, res) => {
  let userType = null;
  const { email, password } = req.body;

  try {
    // Cerca utente nella tabella userData
    const userData = await db.oneOrNone(
      "SELECT * FROM userData WHERE email = $1 ",
      [email]
    );

    // Cerca dottore nella tabella docData
    const docData = await db.oneOrNone(
      "SELECT * FROM docData WHERE email = $1",
      [email]
    );

    // Se l'utente è presente nel database, imposta il userType corretto
    if (userData && userData.password === password) {
      userType = "user";
    } else if (docData && docData.password === password) {
      userType = "doc";
    }

    // Restituisci la risposta in base al userType
    if (userType === "user") {
      const payload = {
        id: userData.id,
        email,
      };
      const { SECRET = " " } = process.env;
      const token = jwt.sign(payload, SECRET);
      console.log(token);

      await db.oneOrNone(`UPDATE userData SET token=$2 WHERE id=$1`, [
        userData.id,
        token,
      ]);

      res.status(201).json({
        message: `L'utente esiste: si può loggare`,
        userType,
        id: Number(userData.id),
        email,
        token,
      });
    } else if (userType === "doc") {
      const payload = {
        id: docData.id,
        email,
      };

      const { SECRET = " " } = process.env;
      const token = jwt.sign(payload, SECRET);
      console.log(token);

      await db.oneOrNone(`UPDATE docData SET token=$2 WHERE id=$1`, [
        docData.id,
        token,
      ]);

      res.status(201).json({
        message: `L'utente esiste: si può loggare`,
        userType,
        id: Number(docData.id),
        email,
        token,
      });
    } else {
      res
        .status(500)
        .json({ message: `L'utente NON esiste o i dati sono sbagliati` });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Errore durante il login" });
  }
};

/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */

//RECUPERA UTENTI DAL DATABASE
const getUsers = async (req, res) => {
  try {
    // Cerca utente nella tabella userData
    const userData = await db.many("SELECT * FROM userData");

    const contieneOggettoConID = (array, idSearch) => {
      return array.filter((element) => {
        element.id !== idSearch.id;
        console.log(element);
      });
    };

    if (userData.length > 0) {
      let filterUser = [];
      userData.forEach((user) => {
        if (contieneOggettoConID(filterUser, user)) {
          filterUser.push(user);
        }
      });

      res.status(200).json({ message: "Utenti fetchati", users: filterUser });
    } else {
      res.status(404).json({ message: "Utenti non presenti" });
    }
  } catch (error) {
    console.error("Errore durante la fetch degli utenti:", error.message);
    res.status(500).json({ message: "Errore durante la get" });
  }
};
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    // Cerca utente nella tabella userData
    const userData = await db.oneOrNone(
      "SELECT * FROM userData WHERE id = $1",
      Number(id)
    );

    if (userData !== null) {
      res.status(200).json({ message: "Utente fetchato", user: userData });
    } else {
      res.status(404).json({ message: "Utente non presente" });
    }
  } catch (error) {
    console.error("Errore durante la fetch dell'utente:", error.message);
    res.status(500).json({ message: "Errore durante la get" });
  }
};

/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */

const getDoc = async (req, res) => {
  const { id } = req.params;

  try {
    // Cerca utente nella tabella userData
    const userData = await db.one(
      "SELECT * FROM docData WHERE id = $1",
      Number(id)
    );

    if (userData !== null) {
      res.status(200).json({ message: "Utente fetchato", user: userData });
    } else {
      res.status(404).json({ message: "Utente non presente" });
    }
  } catch (error) {
    console.error("Errore durante la fetch dell'utente:", error.message);
    res.status(500).json({ message: "Errore durante la get:" });
  }
};

/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */

const getUserMealsPlanner = async (req, res) => {
  const { userId } = req.params;

  try {
    console.log("UserID:", userId);

    const meals = await db.many(
      "SELECT * FROM meals WHERE userData_id = $1",
      userId
    );
    console.log("Meals:", meals);

    res.status(200).json({ meals, message: "dati ricevuti correttamente" });
  } catch (error) {
    console.error("Errore nel recupero dei dati del monthPlanner:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
const createFullMealsPlanner = async (req, res) => {
  const { title, calories, notes, start, eend, resource } = req.body;
  const { userId } = req.params;

  try {
    // Esegui la query per inserire un nuovo pasto nel database
    const result = await db.oneOrNone(
      `
      INSERT INTO meals (title, calories, notes, start, eEnd, resource, userData_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING*;
    `,
      [title, calories, notes, start, eend, resource, userId]
    );

    // Invia la risposta con i dati del pasto appena creato
    res.status(201).json({ result, message: "dati ricevuti correttamente" });
  } catch (error) {
    console.error("Errore nell'inserimento del pasto:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
const updateFullMealsPlanner = async (req, res) => {
  const { title, calories, notes, eEnd, start, resource } = req.body;
  const { mealId, userId } = req.params;

  try {
    const result = await db.oneOrNone(
      `
      UPDATE meals
      SET 
        title = COALESCE($1, title),
        calories = COALESCE($2, calories),
        notes = COALESCE($3, notes),
        start = COALESCE($4, start),
        eEnd = COALESCE($5, eend),
        resource = COALESCE($6, resource)
      WHERE id = $7 AND userData_id = $8
      RETURNING *;

          `,
      [title, calories, notes, start, eEnd, resource, mealId, userId]
    );

    res.status(201).json({ result, message: "dati aggiornati correttamente" });
  } catch (error) {
    console.error("Errore nell'aggiornamento del pasto:", error);
    res.status(500).send("Internal Server Error");
  }
};

/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
const deleteFullMealsPlanner = async (req, res) => {
  const { mealId, userId } = req.params;

  try {
    // Esegui la query per inserire un nuovo pasto nel database
    const result = await db.one(
      `
     DELETE FROM meals
      WHERE id = $1 AND userData_id = $2
      RETURNING *;
    `,
      [mealId, userId]
    );

    // Invia la risposta con i dati del pasto appena creato
    res.status(201).json({ result, message: "dati cancellati correttamente" });
  } catch (error) {
    console.error("Errore nell'inserimento del pasto:", error);
    res.status(500).send("Internal Server Error");
  }
};

/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
//relazione paziente dottore

const establishRelationship = async (userId, docId) => {
  try {
    // Aggiornamento userData con l'id del dottore scelto
    await db.none(
      `
      UPDATE userData
      SET docData_id = $1
      WHERE id = $2;
    `,
      [docId, userId]
    );

    // Aggiornamento meals con l'id del dottore
    await db.none(
      `
      UPDATE meals
      SET docData_id = $1
      WHERE userData_id = $2;
    `,
      [docId, userId]
    );

    console.log("Relationship established successfully");
  } catch (error) {
    console.error("Error establishing relationship:", error);
  }
};

const relationshipUserDoc = async (req, res) => {
  const { userId, doctorId} = req.body;

  try {
    await establishRelationship(userId, doctorId)
    res.status(201).json({ message: "dati aggiornati correttamente" });
  } catch (error) {
    console.error("Errore nello stabilire la relazione:", error);
    res.status(500).send("Internal Server Error");
  }
};

/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */

export {
  signupUser,
  signupDoc,
  login,
  getUsers,
  getUser,
  getDoc,
  getUserMealsPlanner,
  createFullMealsPlanner,
  updateFullMealsPlanner,
  deleteFullMealsPlanner,
  establishRelationship,
  relationshipUserDoc,
};
