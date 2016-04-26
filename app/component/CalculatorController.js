app.controller('CalculatorController', function($scope) {
    var cc = this;
    
    cc.show = '';
    
    $scope.showController = function(str) {
        cc.show = str;
    }
    
});

app.controller('MileKilometer', function($scope) {
    var mk = this;
    
    mk.miles = .6214 * mk.kilometers;
    
    mk.kilometers = mk.miles / .6214;
    
    mk.convert = function() {
        
    }
});

app.controller('FahrenheitCelsius', function($scope) {
   var fc = this;
   
   fc.convert = function() {
       
   } 
});

app.controller('PoundsKilograms', function($scope) {
    var pk = this;
    
    pk.convert = function() {
        
    }
});

app.controller('FeetInches', function($scope) {
   var fi = this; 
   
   fi.convert = function() {
       
   }
   
});

app.controller('Bmi', function($scope) {
   var bmi = this;
   
   bmi.convert = function() {
       
   } 
});