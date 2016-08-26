app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Basic buttons bootstrap';
    $scope.title2 = 'Basic labels bootstrap';
    $scope.title3 = 'Custom labels bootstrap';
    $scope.title4 = 'Pill labels bootstrap';
    $scope.title5 = 'Alerts';
    $scope.title6 = 'Cards';
    $scope.title7 = '';
    $scope.promo = 'Hot promo';
    $scope.labels=[
        {name:"default"},
        {name:"primary"},
        {name:"success"},
        {name:"info"},
        {name:"warning"},
        {name:"danger"},
       
    ];
    $scope.alerts=[
        
        {name:"success"},
        {name:"info"},
        {name:"warning"},
        {name:"danger"},
       
    ];
    $scope.products = [{
            name: 'The Book of Trees',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            cover: 'img/book-of-trees.jpg',
            likes:0,
            dislikes:0

        }, {
            name: 'Program or be Programmed',
            price: 8,
            pubdate: new Date('2013', '08', '01'),
            cover: 'img/programmed.jpg',
            likes:0,
            dislikes:0

        }, {
            name: 'Como saber si tu gato planea matarte',
            price: 12,
            pubdate: new Date('2014', '04', '02'),
            cover: 'img/gato.jpg',
            likes:0,
            dislikes:0

        }, {
            name: 'The book of bunny suicides',
            price: 8,
            pubdate: new Date('2011', '06', '01'),
            cover: 'img/bunnySuicides.jpg',
            likes:0,
            dislikes:0

        }
    

                      ];
    $scope.buttons=[
        {name:"default"},
        {name:"primary"},
        {name:"success"},
        {name:"info"},
        {name:"warning"},
        {name:"danger"},
        {name:"link"}
    ];
    $scope.plusOne = function(index){
      $scope.products[index].likes += 1;  
    };
    $scope.minusOne = function(index){
      $scope.products[index].dislikes +=1;
    };
   


}]);
