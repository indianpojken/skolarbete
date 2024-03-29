import {
  ApiResponseData,
  ApiResponseFail,
  ApiResponseError,
} from '../types/api.type';

type ApiErrorOptions = Omit<ApiResponseError, 'status' | 'code'>; // code is set in constructor

type ApiFailOptions = Omit<ApiResponseFail, 'status'>;

class BaseApiError extends Error {
  code: number;
  data: ApiResponseData;

  constructor(code: number, options: ApiErrorOptions) {
    super(options.message);
    this.name = 'BaseApiError';
    this.code = code;
    this.data = options.data ?? null;
  }
}

export class ApiFail extends BaseApiError {
  constructor(code: number, options: ApiFailOptions) {
    super(code, options as ApiErrorOptions);
    this.name = 'ApiFail';
  }
}

export class ApiError extends BaseApiError {
  constructor(code: number, options: ApiErrorOptions) {
    super(code, options);
    this.name = 'ApiError';
  }
}
