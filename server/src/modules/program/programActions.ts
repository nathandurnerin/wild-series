import programRepository from "./programRepository";

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all programs
    const programs = await programRepository.readAll();

    // Respond with the programs in JSON format
    res.json(programs);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific program based on the provided ID
    const programId = Number(req.params.id);
    const program = await programRepository.read(programId);

    // If the program is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the program in JSON format
    if (program == null) {
      res.sendStatus(404);
    } else {
      res.json(program);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    // Update a specific program based on the provided ID
    const program = {
      id: Number(req.params.id),
      title: req.body.title,
      synopsis: req.body.synopsis,
      poster: req.body.poster,
      country: req.body.country,
      year: req.body.year,
    };

    const affectedRows = await programRepository.update(program);

    // If the program is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the program in JSON format
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the program data from the request body
    const newProgram = {
      title: req.body.title,
      synopsis: req.body.synopsis,
      poster: req.body.poster,
      country: req.body.country,
      year: req.body.year,
    };

    // Create the program
    const insertId = await programRepository.create(newProgram);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    // Delete a specific program based on the provided ID
    const programId = Number(req.params.id);

    await programRepository.delete(programId);

    // Respond with HTTP 204 (No Content) anyway
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const validate: RequestHandler = (req, res, next) => {
  type ValidationError = {
    field: string;
    message: string;
  };

  const errors: ValidationError[] = [];

  const { title, year, poster, synopsis, country } = req.body;

  // put your validation rules here
  if (title == null) {
    errors.push({
      field: "title",
      message: "Title is required.",
    });
  } else if (typeof title !== "string" || title.trim() === "") {
    errors.push({
      field: "title",
      message: "Title must be a non-empty string.",
    });
  }

  if (year == null) {
    errors.push({
      field: "year",
      message: "Year is required.",
    });
  } else if (typeof year !== "number" || year < 1900 || year > 2100) {
    errors.push({
      field: "year",
      message: "Year must be a valid number between 1900 and 2100.",
    });
  }

  if (poster == null) {
    errors.push({
      field: "poster",
      message: "Poster is required.",
    });
  }

  if (synopsis == null) {
    errors.push({
      field: "synopsis",
      message: "Synopsis is required.",
    });
  }

  if (country == null) {
    errors.push({
      field: "country",
      message: "Country is required.",
    });
  }

  if (errors.length === 0) {
    next();
  } else {
    res.status(400).json({ validationErrors: errors });
  }
};

// Export it to import it somewhere else

export default { browse, read, edit, add, destroy, validate };
