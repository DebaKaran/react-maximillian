export class NotFoundError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
    this.status = 404;

    // Set the prototype explicitly (for proper instanceof checks)
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
