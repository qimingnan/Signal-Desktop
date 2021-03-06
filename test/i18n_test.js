describe('i18n', function() {
  describe('i18n', function() {
    it('returns empty string for unknown string', function() {
      assert.strictEqual(i18n('random'), '');
    });
    it('returns message for given string', function() {
      assert.equal(i18n('reportIssue'), 'Report an issue');
    });
    it('returns message with single substitution', function() {
      const actual = i18n('attemptingReconnection', 5);
      assert.equal(actual, 'Attempting reconnect in 5 seconds');
    });
    it('returns message with multiple substitutions', function() {
      const actual = i18n('theyChangedTheTimer', ['Someone', '5 minutes']);
      assert.equal(actual, 'Someone set the timer to 5 minutes.');
    });
  });

  describe('getLocale', function() {
    it('returns a string with length two or greater', function() {
      const locale = i18n.getLocale();
      assert.isAtLeast(locale.trim().length, 2);
    });
  });
});
