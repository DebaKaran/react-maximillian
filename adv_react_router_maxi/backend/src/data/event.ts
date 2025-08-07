import { readFile, writeFile } from "node:fs/promises";
import { v4 as generateId } from "uuid";

import path from "node:path";
import { NotFoundError } from "../util/errors";

// Define Event type (adjust fields as per your actual schema)
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface EventData {
  events: Event[];
}

const DATA_FILE = path.join(__dirname, "../../events.json");

async function readData(): Promise<EventData> {
  const data = await readFile(DATA_FILE, "utf8");
  return JSON.parse(data) as EventData;
}

async function writeData(data: EventData): Promise<void> {
  await writeFile(DATA_FILE, JSON.stringify(data));
}

export async function getAll(): Promise<Event[]> {
  const storedData = await readData();
  if (!storedData.events) {
    throw new NotFoundError("Could not find any events.");
  }
  return storedData.events;
}

export async function get(id: string): Promise<Event> {
  const storedData = await readData();
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError("Could not find any events.");
  }

  const event = storedData.events.find((ev) => ev.id === id);
  if (!event) {
    throw new NotFoundError(`Could not find event for id ${id}`);
  }

  return event;
}

export async function add(data: Omit<Event, "id">): Promise<void> {
  const storedData = await readData();
  storedData.events.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

export async function replace(
  id: string,
  data: Omit<Event, "id">
): Promise<void> {
  const storedData = await readData();
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError("Could not find any events.");
  }

  const index = storedData.events.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError(`Could not find event for id ${id}`);
  }

  storedData.events[index] = { ...data, id };
  await writeData(storedData);
}

export async function remove(id: string): Promise<void> {
  const storedData = await readData();
  const updatedEvents = storedData.events.filter((ev) => ev.id !== id);
  await writeData({ events: updatedEvents });
}
