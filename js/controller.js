var summaryCtr = ['$scope', '$http', function ($scope, $http) {
    $http.get('data/data.json').then((res) => {
        // console.log(res.data);
        $scope.txt = res.data.summary;
    });
}];
var signupCtr = ['$scope', '$http', function ($scope, $http) {
    $http.get('data/data.json').then((res) => {
        console.log(res.data);
        $scope.txt2 = res.data.signup;
    });
}];
var storeyCtr = ['$scope', '$http', function ($scope, $http) {
    $http.get('data/data.json').then((res) => {
        console.log(res.data);
        $scope.txt3 = res.data.storey;
    });
}];
var coursesCtr = ['$scope', '$http', function ($scope, $http) {
    $http.get('data/data.json').then((res) => {
        console.log(res.data);
        $scope.txt4 = res.data.courses;
    });
}];
var inquiryCtr = ['$scope', '$http', function ($scope, $http) {
    $http.get('data/data.json').then((res) => {
        console.log(res.data);
        $scope.txt5 = res.data.inquiry;
        console.log($scope.txt5)
    });
}];
var teachCtr = ['$scope', '$http', function ($scope, $http) {
    $http.get('data/data.json').then((res) => {
        console.log(res.data);
        $scope.txt6 = res.data.teach;
    });
}];