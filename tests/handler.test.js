const { handler } = require('../src/handler');

test('handler returns success', async () => {
  const res = await handler({ key: 'value' });
  expect(res.statusCode).toBe(200);
});
