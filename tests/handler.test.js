const { handler } = require('../src/handler');

describe('AWS Lambda Handler', () => {
  test('should return a 200 status and success message', async () => {
    const event = { key: 'value' };
    const result = await handler(event);
    expect(result.statusCode).toBe(200);
    const body = JSON.parse(result.body);
    expect(body.message).toBe("Lambda working fine!");
  });
});
