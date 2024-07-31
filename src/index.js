import { config } from 'dotenv';
import { executeStudentCrudOperations } from './studentsCrud.js';

config();

(async () => {
  await executeStudentCrudOperations();
})();