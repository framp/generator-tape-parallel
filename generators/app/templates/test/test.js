var test = require('tape');

test('beep boop', function (assert) {
  assert.plan(2);

  assert.equal(1 + 1, 2);
  setTimeout(function () {
    assert.deepEqual(
      'ABC'.toLowerCase().split(''),
      ['a', 'b', 'c']
    );
  });
});
