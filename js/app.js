var myApp = angular.module('app', []);



myApp.factory('Data', function(){
  var result = [];
    return {
        getresult: function () {
            return result;
        },
        setresult: function (newObj) {
            result.push(newObj);
        }
    };

    
});
//Continent Controller
myApp.controller('ContinentCtlr',function($scope,Data,Files){
    
	Files.get('continent.json').then(function(data){
		$scope.items=data;
        
    });
    Files.get('countries.json').then(function(data1){
        $scope.countries=data1;
        console.log($scope.countries);        
	});
    
    //Getting the selected Continent and reutrning the countries realted to the selected continent
	$scope.name="";
	$scope.onItemSelected=function(){
		console.log('selected='+$scope.name);
        angular.forEach($scope.countries, function(value, key){
      if(value.id == $scope.name){
            Data.setresult(value);
      }
        });
        
	
	}
    
    
    
});
//Countries Controller
myApp.controller('CountryCtlr',function($scope,Data,Files){
    
    Files.get('countries.json').then(function(data1){
        $scope.countries=data1;
        console.log($scope.countries);        
	});
    //Getting the countries realted to the Contienent
    $scope.final=Data.getresult();
    angular.forEach($scope.final,function(value, key){
        console.log(value.name);
    });

//Getting the selected Country
$scope.cname="";
	$scope.onCountrySelected=function(){
		console.log('selectedcity='+$scope.cname);
	}
});

myApp.directive('myapp', function($timeout) {
  return {
    restrict: 'AEC',
    scope: {
		items: '=',
		prompt:'@',
		topic: '@',
		model: '=',
        select: '&',
		onSelect:'&'
	},
    //Linking the scope 
	link:function(scope,elem,attrs){
	   scope.handleSelection=function(selectedItem){
		 scope.model=selectedItem;
		 scope.current=0;
		 scope.selected=true;        
		 $timeout(function(){
			 scope.onSelect();
		  },200);
	  };
	  scope.current=0;
	  scope.selected=true;
	  scope.isCurrent=function(index){
		 return scope.current==index;};
	  scope.setCurrent=function(index){
		 scope.current=index;};
        elem.on("keyup", "[selectable]", function(event) {
        var $this = $(this);
        var selectedElement = scope.isCurrent(event);

        scope.$apply(function() {
          if (event.which === 40) {
            selectedElement = $this.next("[selectable]");
            if (selectedElement.length > 0) {
              scope.select({
                element: selectedElement
              });
            }
          } else if (event.which === 38) {
            selectedElement = $this.prev("[selectable]");
            if (selectedElement.length > 0) {
              scope.select({
                element: $this.prev("[selectable]")
              });
            }
          } else {

          }
        });

        if (selectedElement.length > 0) {
          $this.blur();
          selectedElement.focus();
        }

      });
    
        
	},
    templateUrl: 'templates/templatefile.html'
  }
});

//Factory to read the json files
myApp.factory('Files', function($http) {
  return {
    get: function(url) {
      return $http.get(url).then(function(response) {
        return response.data;
      });
    }
  };
});
