/**
 * eh there should be a test
 */

const tape = require ('tape')

tape('============== suuid summary ==============', tests)

function tests (t) {
  t.test('============== uniqueness ==============', require('./uniqueness'))
  t.test('================ length ================', require('./length'))
}