interface ErrorResponse {
  status: string,
  message: string
  data: { cause: string }
}

export function createErrorResponse(message: string, error: Error): ErrorResponse {
  return {
    status: 'error',
    message,
    data: { cause: error.message }
  };
}
