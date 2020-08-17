import ip2c from '../src/ip2c';

test('mac safari', async () => {
  const result = await ip2c();
  expect(result).toHaveProperty('code');
});
