import express from "express";
import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";
import users from "./usersRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Library" });
  });

  app.use(express.json(), books, authors, users);
};

export default routes;
