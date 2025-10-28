// tests/handler.test.js
const { handler } = require('../src/handler');

describe('AWS Lambda Handler', () => {
  test('should return a 200 status and success message', async () => {
    const res = await handler({ key: 'value' });

    expect(res.statusCode).toBe(200);
    const body = JSON.parse(res.body);
    expect(body.message).toBe("Lambda executed successfully!");
    expect(body.input).toEqual({ key: 'value' });
  });
});
