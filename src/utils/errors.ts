export class CustomError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string
  ) {
    super(message);
  }
  static BadRequest(message: string) {
    return new CustomError(400, message);
  }
  static Unauthorized(message: string) {
    return new CustomError(401, message);
  }
  static Forbidden(message: string) {
    return new CustomError(403, message);
  }
  static NotFound(message: string) {
    return new CustomError(404, message);
  }
  static InternalServerError(message: string = "Internal Server Error") {
    return new CustomError(500, message);
  }
  static errorHandler(error: any) {
    if (error && error.statusCode) {
      return error;
    }
    if (error.response && error.response.status) {
      return new CustomError(error.response.status, error.response.statusText);
    }
    return CustomError.InternalServerError(error.message || "Unknown error");
  }
}
