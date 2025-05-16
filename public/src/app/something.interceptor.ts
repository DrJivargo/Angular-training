import { HttpInterceptorFn } from '@angular/common/http';

export const somethingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
