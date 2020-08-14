import uua from '../src/core';
import fixtures from './fixtures';

test('mac firefox', () => {
  const result = uua('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:80.0) Gecko/20100101 Firefox/80.0');
  expect(result).toEqual(fixtures.mac_firefox);
});

test('mac safari', () => {
  const result = uua('Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15');
  expect(result).toEqual(fixtures.ipod_safari);
});

test('ipod safari', () => {
  const result = uua(
    'Mozilla/5.0 (iPod; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A523 Safari/8536.25'
  );
  expect(result).toEqual(fixtures.ipod_safari);
});
