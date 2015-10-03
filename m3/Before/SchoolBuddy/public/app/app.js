(function() {

    var app = angular.module('app', []);

    app.config(['$logProvider', function ($logProvider) {

        $logProvider.debugEnabled(true);

    }]);

}());