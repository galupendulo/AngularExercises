'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")

        .service('menuFactory',['$resource','baseURL',
        function($resource,baseURL) {
            var that = this;


            that.getDishes = function(){

                  return $resource(baseURL+"dishes/:id",null,
                  {'update':{method:'PUT' }});

                };


                that.getPromotion = function(){

                  return $resource(baseURL+"promotions/:id",null,
                  {'update':{method:'PUT' }});

                };
                // implement a function named getPromotion
                // that returns a selected promotion.


        }])

        .service('corporateFactory',['$resource','baseURL',
         function($resource,baseURL) {

           this.getFormData = function(){

             return $resource(baseURL+"feedback/:id",null,
             {'update':{method:'PUT' }});

           };



          this.getLeaders = function(){

            return $resource(baseURL+"leadership/:id",null,
            {'update':{method:'PUT' }});

          };


            this.getLeader = function (index) {

                return leadership[index];
            };


        }])

        .service('feedBackFactory',['$resource','baseURL',
         function($resource,baseURL) {

           this.getDataForm = function(){

             return $resource(baseURL+"feedback/");

           };


        }])

;
