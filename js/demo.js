angular.module('MyApp', ['ngMaterial', 'ngMdIcons', 'ngTableTree'])
    .controller('MyController', function ($scope, $timeout) {
        $scope.tree = [{
            imgId: 'fateZero',
            name: 'zero',
            children: [{
                imgId: 'saber',
                name: 'saber',
                peiYin: '川澄绫子',
                height: '154cm',
                weight: '42'
            }, {
                imgId: 'kilizi',
                name: '卫宫切嗣',
                peiYin: '小山力也 ',
                height: '175cm',
                weight: '67',
                children: [{
                    imgId: 'yiliya',
                    name: '依莉雅',
                    peiYin: '门胁舞以',
                    height: '133cm',
                    weight: '29'
                }, {
                    imgId: 'shiro',
                    name: '卫宫士郎',
                    peiYin: '杉山纪彰',
                    height: '167cm',
                    weight: '58'
                }]
            }, {
                imgId: 'qili',
                name: '言峰绮礼',
                peiYin: '中田让治',
                height: '185cm',
                weight: '82'
            }]
        }, {
            imgId: 'ubw',
            name: 'fate stay night UBW',
            children: [{
                imgId: 'shiro',
                name: '卫宫士郎',
                peiYin: '杉山纪彰',
                height: '167cm',
                weight: '58'
            }, {
                imgId: 'lin',
                name: '远返凛',
                peiYin: '植田佳奈',
                height: '159cm',
                weight: '47'
            }, {
                imgId: 'saber',
                name: 'saber',
                peiYin: '川澄绫子',
                height: '154cm',
                weight: '42'
            }]
        }];



        // $scope.tree2 = angular.copy($scope.tree);

        // $scope.tree = $scope.tree.concat($scope.tree);
        // $scope.tree = $scope.tree.concat($scope.tree);
        // $scope.tree = $scope.tree.concat($scope.tree);
        // $scope.tree = $scope.tree.concat($scope.tree);
        // $scope.tree = $scope.tree.concat($scope.tree);
        // $scope.tree = $scope.tree.concat($scope.tree);
        // $scope.tree = $scope.tree.concat($scope.tree);
        // $scope.tree = $scope.tree.concat($scope.tree);
        // $scope.tree = $scope.tree.concat($scope.tree);

        // console.log($scope.tree.length);

        // $scope.addAge = function (event, branch) {
        //     branch.age += 1;
        // };
        //
        // $scope.insertRow = function (event, branch) {
        //     $scope.tree[0].children.push({
        //         name: 'frank cc',
        //         age: 44,
        //         address: 'Kezhu Road 192',
        //         contact: '13600010009'
        //     });
        // };
        //
        // $scope.insertRow2 = function (event, branch) {
        //     $scope.tree2[0].children.push({
        //         name: 'frank cc',
        //         age: 44,
        //         address: 'Kezhu Road 192',
        //         contact: '13600010009'
        //     });
        // };
    });
