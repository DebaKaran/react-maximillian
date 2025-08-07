import express, { Request, Response, NextFunction } from "express";
import { add, get, getAll, remove, replace } from "../data/event";
import { isValidDate, isValidImageUrl, isValidText } from "../util/validation";

//import { Event } from "../data/event-data";

const router = express.Router();

interface EventInput {
  title: string;
  description: string;
  date: string;
  image: string;
}

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const events = await getAll();
    res.json({ events });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    if (!id) {
      throw new Error("Missing event ID");
    }

    const event = await get(id); // id is now definitely a string
    res.json({ event });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body as EventInput;
  const errors: Partial<Record<keyof EventInput, string>> = {};

  if (!isValidText(data.title)) {
    errors.title = "Invalid title.";
  }

  if (!isValidText(data.description)) {
    errors.description = "Invalid description.";
  }

  if (!isValidDate(data.date)) {
    errors.date = "Invalid date.";
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = "Invalid image.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Adding the event failed due to validation errors.",
      errors,
    });
  }

  try {
    await add(data);
    res.status(201).json({ message: "Event saved.", event: data });
  } catch (error) {
    next(error);
  }
});

router.patch(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body as EventInput;
    const errors: Partial<Record<keyof EventInput, string>> = {};

    if (!isValidText(data.title)) {
      errors.title = "Invalid title.";
    }

    if (!isValidText(data.description)) {
      errors.description = "Invalid description.";
    }

    if (!isValidDate(data.date)) {
      errors.date = "Invalid date.";
    }

    if (!isValidImageUrl(data.image)) {
      errors.image = "Invalid image.";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(422).json({
        message: "Updating the event failed due to validation errors.",
        errors,
      });
    }

    try {
      const id = req.params.id;

      if (!id) {
        throw new Error("Missing event ID");
      }

      await replace(id, data);
      res.json({ message: "Event updated.", event: data });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      if (!id) {
        throw new Error("Missing event ID");
      }

      await remove(id);
      res.json({ message: "Event deleted." });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
