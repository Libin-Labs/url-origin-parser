import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('parses https origin', () => {
  assert.deepEqual(api.parseUrlOrigin('https://example.com/path'), {
    protocol: 'https:',
    hostname: 'example.com',
    port: '',
  });
});
test('exposes explicit port', () => {
  assert.equal(api.parseUrlOrigin('http://localhost:3000').port, '3000');
});
test('normalizes hostname', () => {
  assert.equal(api.parseUrlOrigin('https://EXAMPLE.com').hostname, 'example.com');
});
test('supports IPv6 host', () => {
  assert.equal(api.parseUrlOrigin('http://[::1]:8080').hostname, '[::1]');
});
test('ignores path and query', () => {
  assert.deepEqual(api.parseUrlOrigin('https://example.com/a?q=1').protocol, 'https:');
});
test('rejects relative URL', () => {
  assert.throws(() => api.parseUrlOrigin('/path'), RangeError);
});
