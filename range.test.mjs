import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidIndex } from './range.mjs';

test('first index is valid for a one-item list', () => {
  assert.equal(isValidIndex(0, 1), true);
});

test('an index equal to length is invalid', () => {
  assert.equal(isValidIndex(1, 1), false);
});
