(function () {
    'use strict';

    angular
        .module('funwithjson.users', [])
        .factory('Users', Users);

    Users.inject = ['$http', '$q'];

    function Users($http, $q) {
        var host = 'http://jsonplaceholder.typicode.com/';

        var service = {
            getAllUsers: getAllUsers,
            getPostsByUserId: getPostsByUserId
        };

        return service;

        function getAllUsers() {
            var cmd = "users";
            var deferred = $q.defer();

            $http.get(host + cmd).then(function (response) {
                deferred.resolve({
                    status: response.status,
                    statusText: response.statusText,
                    users: response.data
                });
            }).catch(function (msg) {
                deferred.reject(msg);
            });

            return deferred.promise;
        }

        function getPostsByUserId(id) {
            var cmd = "posts?userId=" + parseInt(id);
            var deferred = $q.defer();

            $http.get(host + cmd).then(function (response) {
                deferred.resolve({
                    status: response.status,
                    statusText: response.statusText,
                    posts: response.data
                });
            }).catch(function (msg) {
                deferred.reject(msg);
            });

            return deferred.promise;
        }
    }
})();