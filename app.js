(function () {
    'use strict';

    angular.module('funwithjson', ['funwithjson.users'])

        .controller('MainCtrl', MainCtrl);

    MainCtrl.inject = ['Users'];

    function MainCtrl(Users) {
        var vm = this;
        vm.getPostsByUserId = getPostsByUserId;
        vm.users = [];
        vm.posts = [];
        vm.error = null;

        getUsers();

        function getUsers() {
            Users.getAllUsers().then(function (data) {
                if (data.status === 200) {
                    vm.users = data.users;
                } else {
                    vm.error = data.statusText;
                }
            }).catch(function (data) {
                vm.error = data;
            });
        }

        function getPostsByUserId(id) {
            Users.getPostsByUserId(id).then(function (data) {
                if (data.status === 200) {
                    vm.posts = data.posts;
                } else {
                    vm.error = data.statusText;
                }
            }).catch(function (data) {
                vm.error = data;
            });
        }
    }
})();