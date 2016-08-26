'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope','menuFactory',
        function($scope,menuFactory) {

            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
            $scope.showMenu = true;
            $scope.message = "Loading..."

        $scope.dishes = menuFactory.getDishes().query(
          function(response){
            $scope.dishes=response;
            $scope.showMenu=true;
        },
      function(response){

        $scope.message = "Error: " +response.status + " " + response.statusText;
      });
            $scope.select = function(setTab) {
                $scope.tab = setTab;

                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };

            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", author:"", lastName:"", agree:false, email:"" };

            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];

            $scope.channels = channels;
            $scope.invalidChannelSelection = false;

        }])

        .controller('FeedbackController', ['$scope','feedBackFactory', function($scope,feedBackFactory) {

            $scope.sendFeedback = function() {

                console.log($scope.feedback);



                if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    feedBackFactory.getDataForm().save($scope.feedback);
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", author:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";


                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);


                }
            };
        }])

        .controller('DishDetailController', ['$scope','$stateParams','menuFactory',
        function($scope,$stateParams,menuFactory) {



           $scope.showDish= false;
           $scope.message="Loading ...";
          $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})
          .$promise.then(
                      function(response){
                        $scope.dish = response;
                        $scope.showDish = true;
                      },
                      function(response){
                        $scope.message="Error: "+response.status + " " + response.statusText;
                      }
          );

        }])

        .controller('DishCommentController', ['$scope','menuFactory', function($scope,menuFactory) {
          $scope.radio = ['1', '2', '3','4','5'];


            $scope.feedback = {

                                rating:3,
                                comment:'',
                                author:'',
                                date:''
                              };

            $scope.submitComment = function () {

                          $scope.feedback.date= Date.now();
                          $scope.dish.comments.push($scope.feedback);
                           menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
                          $scope.feedback = {
                                              rating:5,
                                              comment:'',
                                              author:'',
                                              date:''
                                            };

                          $scope.feedbackForm.$setPristine();

                                                };

        }])

        // implement the IndexController and About Controller here
        .controller('IndexController', ['$scope','menuFactory','corporateFactory', function($scope,menuFactory,corporateFactory) {


           $scope.showDish = false;
           $scope.message= "Loading ...";
           $scope.featureddish =
           menuFactory.getDishes().get({id:0})
           .$promise.then(
            function(response){
              $scope.featureddish=response;
              $scope.showDish=true;
         },
            function(response){
              $scope.message="Error: "+response.status + " " + response.statusText;

         });

          $scope.showPromo = false;
           $scope.featuredpromotion= menuFactory.getPromotion().get({id:0})
                .$promise.then(
                 function(response){
                   $scope.featuredpromotion=response;
                   $scope.showPromo=true;
              },
                 function(response){
                   $scope.message="Error: "+response.status + " " + response.statusText;

              });

            $scope.showChef = false;
           $scope.featuredchef =
            corporateFactory.getLeaders().get({id:0})


                 .$promise.then(
                  function(response){
                    $scope.featuredchef=response;
                    $scope.showChef=true;
               },
                  function(response){
                    $scope.message="Error: "+response.status + " " + response.statusText;

               });
           ;


        }])

        .controller('AboutController', ['$scope','corporateFactory', function($scope,corporateFactory) {

                   $scope.showLeader=false;

                   $scope.leaders = corporateFactory.getLeaders().query(
                     function(response){
                       $scope.leaders=response;
                       $scope.showLeader=true;
                   },
                 function(response){

                   $scope.message = "Error: " +response.status + " " + response.statusText;
                 });


        }])


;
