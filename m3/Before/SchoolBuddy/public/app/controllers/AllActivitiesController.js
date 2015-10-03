(function () {

    angular.module('app')
        .controller('AllActivitiesController', ['dataService', 'notifier', AllActivitiesController]);

    function AllActivitiesController(dataService, notifier) {

        var vm = this;

        vm.selectedMonth = 1; // default to January

        dataService.getAllClassrooms()
            .then(function(classrooms) {
                vm.allClassrooms = classrooms;
                vm.selectedClassroom = classrooms[0];
            })
            .catch(showError);

        dataService.getAllActivities()
            .then(function(activities) {
                vm.allActivities = activities;
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());