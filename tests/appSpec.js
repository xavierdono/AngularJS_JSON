(function () {
    'use strict';

    var injector = angular.injector(['ng', 'funwithjson']);
    var MainCtrl = null;

    QUnit.module("Main Controller", {
        before: function () {
            MainCtrl = injector.get('$controller')('MainCtrl');
        }
    });

    QUnit.test('controller injected correctly', function (assert) {
        assert.expect(4);

        assert.ok(angular.isFunction(MainCtrl.getPostsByUserId), 'getPostsByUserId exists');
        assert.equal(MainCtrl.users.length, 0, 'Users: ' + MainCtrl.users.length);
        assert.equal(MainCtrl.posts.length, 0, 'Posts: ' + MainCtrl.posts.length);
        assert.equal(MainCtrl.error, null, 'error: ' + MainCtrl.error);
    });
})();