/**
 * Created by Fab on 12/12/2015.
 */
sleek.controller('searchCtrl', function ($scope, $state, productService) {
    var products = productService.getProducts();
    var lCodes = productService.getLocation();
    var sCode = productService.getShop();

    $scope.sLocation = [];
    var results = {};
    var userPCode;
    var flag = 0;

    // Get all available locations
    $scope.sLocation = productService.getLocations();
    $scope.search = function (pCode, sName, location) {
        $scope.error = false;
        //Get Shop Code
        for(var shop in sCode){
            console.log();
            if(sName == sCode[shop].shop){
                userPCode = sCode[shop].code;
                flag = 1;
                console.log("Match");
            }
        }

        if(flag == 0){
            $scope.error = true;
        }
        console.log(userPCode);

        // Get Location Code
        for(var locale in lCodes){
            console.log();
            if(location == lCodes[locale].location){
                userPCode += lCodes[locale].code;
                console.log("Match");
            }
        }
        console.log(userPCode);

        //Check if Product Code matches location info
        if(pCode.indexOf(userPCode) > -1 ){
            console.log("Genuine");
            for(var product in products){
                if(pCode == products[product].code){
                    console.log("Product Found", products[product].pName);
                    results = {
                        "pCode": products[product].code,
                        "pName": products[product].pName,
                        "pStatus": "Genuine Product"
                    };
                }
            }
        }

        if(Object.keys(results).length == 0){
            results = {
                "pCode": pCode,
                "pName": "",
                "pStatus": "Counterfeit Product"
            };
        }

        console.log(results);
        productService.setResults(results);
        if($scope.error == false){
            $state.go('results');
        }
    }
});

sleek.controller('resultsCtrl', function ($state, $scope, productService) {
    var results = productService.getResults();
    console.log(results);
    $scope.message = false;
    $scope.counterfeitMes = false;

    if(Object.keys(results).length == 0){
        $scope.visibility = false;
        $state.go('search');
    }else {
        $scope.visibility = true;
        $scope.productName = results.pName;
        $scope.productStatus = results.pStatus;
        $scope.code = results.pCode;
        switch (results.pStatus){
            case "Genuine Product":
                $scope.message = true;
                break;
            case "Counterfeit Product":
                $scope.counterfeitMes = true;
                break;
            default:
                $scope.counterfeitMes = false;
                $scope.message = false;
                break;
        }
    }

});