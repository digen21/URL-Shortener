interface ErrorHandler {
  status: number;
  message: string;
  cause?: any;
}

export default class ServerError extends Error {
  status: number;
  message: string;
  cause?: string;

  constructor({ message, status, cause }: ErrorHandler) {
    super();
    this.message = message;
    this.status = status;
    this.cause = cause;
  }
}
