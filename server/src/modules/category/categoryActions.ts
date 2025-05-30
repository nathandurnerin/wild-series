// Some data to make the trick
const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  const query = req.query.q as string | undefined;

  if (query) {
    const filteredCategories = categories.filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase()),
    );
    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);
  const category = categories.find((c) => c.id === parsedId);

  if (category) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else
export default {
  browse,
  read,
};
