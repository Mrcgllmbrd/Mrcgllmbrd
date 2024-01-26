import * as dotenv from "dotenv";
dotenv.config();
import process from "process";

import passport from "passport";
import passportJWT from "passport-jwt";
import { db } from "./backend/db.mjs";

const { SECRET } = process.env;
console.log("SECRET:", SECRET);

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: SECRET,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    (payload, done) => {
      db.one(`SELECT * FROM  userData WHERE id=$1`, payload.id)
        .then((user) => {
          if (user) {
            done(null, user);
          } else {
            done(new Error("user not found"));
          }
        })
        .catch((error) => {
          done(error);
        });
    }
  )
);
console.log("SECRET:", SECRET);
