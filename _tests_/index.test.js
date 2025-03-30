const request = require("supertest");
const app = require("../index"); // Import Express app
let server;

beforeAll(() => {
  server = app.listen(4000); // Start the server for testing
});

afterAll((done) => {
  server.close(done); // Close the server after tests
});

test("GET / should return 'Hello World!'", async () => {
  const response = await request(server).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello World!");
});

