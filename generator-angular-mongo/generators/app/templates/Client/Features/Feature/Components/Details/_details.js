var <%=data.camelCase%>Details = {
    bindings: {
        allowChanges: '@'
    },
    controllerAs: "vm",
    template: require('raw-loader!./<%=data.camelCase%>DetailsTemplate.Html'),
    controller: function (<%=data.serviceName%>, __AppConfig,  $stateParams) {
        var vm = this;
        vm.id = $stateParams.id;

        // vm.<%=data.camelCase%> = {};
        // vm.status = {
        //     isError: false,
        //     message: ''
        // };

        // vm.<%=data.camelCase%>Tags = [];
        // vm.attachedVolunteers = [];


        vm.$onInit = function () {
            //vm.loadLookuplists()
            vm.load<%=data.name%>Details();
        };

        // vm.loadVolunteerDetails = function () {
        //     var promise = contactsDataService.GetById($stateParams.id, "Volunteer");
        //     promise.then(function (response) {
        //         vm.<%=data.camelCase%> = response.data;
        //     });
        // };


        vm.load<%=data.name%>Details = function () {
            var promise = <%=data.serviceName%>.GetById($stateParams.id);
            promise.then(function (response) {
                vm.<%=data.camelCase%> = response.data;
            });
        };


        // vm.save = function () {
        //     saveVolunteerDetails();
        // }

        // var saveVolunteerDetails = function () {
        //     var modifyPromise = contactsDataService.Modify(vm.<%=data.camelCase%>);
        //     modifyPromise.then(function (response) {
        //         vm.status.message = "Volunteer Saved";
        //         vm.status.isError = false;
        //     }).catch(function (error) {
        //         vm.status.message = "Error";
        //         vm.status.isError = true;
        //     });
        // };

        // vm.loadLookuplists = function () {

        //     var promise = lookupListsDataService.ReadAllByParent("Volunteer")
        //     promise.then(function (response) {
        //         vm.lookuplists = response.data;

        //         //vm.tags = vm.lookuplists;
        //        vm.<%=data.camelCase%>Tags = lookupListsDataService.FilterLookupList("Tag", vm.lookuplists);

        //     })


        //     //Load Common LookupLists
        //     var promise = lookupListsDataService.ReadAllByParent("Common")
        //     promise.then(function (response) {
        //         vm.commonLookuplists = response.data;

        //         //populate seperate lookuplists
        //         vm.areaOptions = lookupListsDataService.FilterLookupList("Area", vm.commonLookuplists);
        //     })
        // }

        // //auto save
        // $interval(saveVolunteerDetails, __AppConfig.autoSaveTimeout);
    }
};


angular.module('app').component('<%=data.camelCase%>Details', <%=data.camelCase%>Details);