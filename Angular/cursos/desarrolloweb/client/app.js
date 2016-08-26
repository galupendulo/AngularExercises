
angular.module('controlCajaApp', []);
(function() {
    var controlCajaCtrl = function (movimientosFactory, maestrosFactory){
         console.log("hola jur");
        var vm = this;
        vm.titulo = "Controla tu Cash Flow";
        vm.nuevoMovimiento = {
            esIngreso: 1,
            esGasto:0,
            importe: 0,
            fecha: new Date()
            
        };
        
        vm.guardarMovimiento = function() {
            var auxCopyMov = angular.copy(vm.nuevoMovimiento);
            auxCopyMov.tipo = vm.tipo(auxCopyMov);
            movimientosFactory.postMovimiento(auxCopyMov);
            movimientosFactory.getMovimientos().success(function(data){
                
                vm.movimientos = data;
                  
            });
            vm.nuevoMovimiento.importe = 0;
            
        }
        
        vm.tipo = function (movimiento){
            return movimiento.esIngreso && 'Ingreso' || 'Gasto'
        }
        
        maestrosFactory.getMaestros().success(function (data){
           
            console.log("hola gustavo");
            vm.maestros = data; 
        });
        console.log("hola javi");
        movimientosFactory.getMovimientos().success(function(data){
            vm.movimientos = data;
        });
    }
    angular.module('controlCajaApp').controller('ControlCajaCtrl', 
               ['movimientosFactory',
               'maestrosFactory',
               controlCajaCtrl]);
}());
(function (){
    var maestrosFactory = function ($http){
        var urlBase = "http://localhost:3000/api/";
        var factory = {};
        factory.getMaestros = function () {
            console.log("hola irene");
            return $http.get(urlBase+'pub/maestros');
            
        };
        return factory;
        
    };
   angular.module('controlCajaApp').factory('maestrosFactory',['$http',maestrosFactory]);
}());

( function (){
    var movimientosFactory = function($http){
        var urlBase = "http://localhost:3000/api/";
        var factory = {};
        factory.getMovimientos = function(){
            return $http.get(urlBase + 'priv/movimientos');
        };
        factory.postMovimiento =function (movimiento){
            return $http.post(urlBase + 'priv/movimientos', movimiento);
        };
        return factory
    };
   angular.module('controlCajaApp').factory('movimientosFactory',['$http',movimientosFactory]);
}());