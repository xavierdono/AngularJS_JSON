(function () {
    'use strict';

    var injector = angular.injector(['ng', 'funwithjson']);
    var Users = injector.get('Users');

    QUnit.module('Users Service');

    QUnit.test('service injected correctly', function (assert) {
        assert.expect(2);
        assert.ok(angular.isFunction(Users.getAllUsers), 'getAllUsers exists');
        assert.ok(angular.isFunction(Users.getPostsByUserId), 'getPostsByUserId exists');
    });

    QUnit.test('Should have 10 Users', function (assert) {
        assert.expect(1);

        var done = assert.async();

        Users.getAllUsers().then(function (data) {
            if (data.status === 200) {
                assert.equal(data.users.length, 10, 'Users: ' + data.users.length);
                done();
            } else {
                console.log(data.statusText);
            }
        }).catch(function (data) {
            console.log(data);
        });
    });

    QUnit.test('Should have 10 Posts on User 1', function (assert) {
        assert.expect(1);

        var done = assert.async();

        Users.getPostsByUserId(1).then(function (data) {
            if (data.status === 200) {
                assert.equal(data.posts.length, 10, 'Posts: ' + data.posts.length);
                done();
            } else {
                console.log(data.statusText);
            }
        }).catch(function (data) {
            console.log(data);
        });
    });    
})();