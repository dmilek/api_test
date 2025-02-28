const APIClient = require("../src/apiClient");

describe("API Tests", () => {
  let apiClient;

  beforeAll(() => {
    apiClient = new APIClient();
  });

  test("GET /posts should return status 200", async () => {
    const response = await apiClient.get("/posts");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  test("POST /posts should create a new post", async () => {
    const newPost = { title: "Test Post", body: "Testing API", userId: 1 };
    const response = await apiClient.post("/posts", newPost);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe("Test Post");
  });
});
