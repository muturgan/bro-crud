import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import { Database, Resource } from '@adminjs/typeorm';
import { validate } from 'class-validator';
import { config } from './config';
import { connectDB } from './connection';
import express = require('express');

(async () =>
{
   const conn = await connectDB();

   const ADMIN_PATH = '/admin';
   const app = express();

   Resource.validate = validate;
   AdminJS.registerAdapter({ Database, Resource });

   const adminJs = new AdminJS({
      databases: [conn],
      rootPath: ADMIN_PATH,
   });

   const router = AdminJSExpress.buildRouter(adminJs);
   app.use(ADMIN_PATH, router);

   app.listen(
      config.APP_PORT,
      () => console.info(`AdminJS is under http://localhost:${ config.APP_PORT }${ ADMIN_PATH }`),
   );
})();
