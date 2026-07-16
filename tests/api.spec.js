import { test, expect } from '@playwright/test';

test("handling alert @api", async ({ request }) => {

    const authEndpoint = "http://localhost:4000/api/auth/login";

    const authResponse = await request.post(authEndpoint, {
        data: {
            email: "admin@acme.test",
            password: "admin123"
        }
    });

    expect(authResponse.status()).toBe(200);

    const json = await authResponse.json();
    const token = json.data.token;

    const userEndpoint = "http://localhost:4000/api/users";

    const userResponse = await request.post(userEndpoint, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        data: {
            firstName: "sakshi 1",
            lastName: "navhate",
            email: "sakshu@gmail.com",
            phone: "9876587210",
            role: "QA",
            status: "Active"
        }
    });

    expect(userResponse.status()).toBe(201);

    const userJson = await userResponse.json();
    console.log(userJson);
});