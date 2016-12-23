import { test } from 'qunit';
import moduleForAcceptance from 'whiswhis/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | whiskers');

test('visiting /whiskers', function(assert) {
  visit('/whiskers');

  andThen(function() {
    assert.equal(currentURL(), '/whiskers');
  });
});

test('visiting /', function (assert) {
visit('/');
	andThen(function () {
		assert.equal(currentURL(),'/whiskeys');
	});
} );
