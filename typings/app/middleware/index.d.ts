// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'beidou';
import ExportAuth from '../../../app/middleware/auth';

declare module 'beidou' {
  interface IMiddleware {
    auth: typeof ExportAuth;
  }
}
