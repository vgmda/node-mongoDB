import http from "http";
import { executeStudentCrudOperations } from './studentsCrud.js';

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  await executeStudentCrudOperations();
  res.end("Server running successfully!\n");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});