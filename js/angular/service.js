sleek.service('productService', function () {
    var products = {
        "1": {
            "code": "XX7TUSPHAS",
            "pName": "AXE Men"
        },
        "2": {
            "code": "AB4NAKCTYCTY",
            "pName": "Hailey's LipKit"
        },
        "3": {
            "code": "C9BNAKRALTMB",
            "pName": "Nivea Lip Gloss"
        }
    };

    var sCode = {
        "1": {
            "code": "TUSP",
            "shop": "Tuskys Pioneer"
        },
        "2": {
            "code": "NAKCTY",
            "shop": "Nakumatt City Hall"
        },
        "3": {
            "code": "NAKRAL",
            "shop": "Nakumatt Railways"
        }
    };

    var lCode = {
        "1": {
            "code": "HAS",
            "location": "Haile Selasie"
        },
        "2": {
            "code": "CTY",
            "location": "City Hall Way"
        },
        "3": {
            "code": "TMB",
            "location": "Tom Mboya"
        }
    };

    var location = ["City Hall Way", "Tom Mboya", "Haile Selasie"];

    var results = {};

    // Locations for drop down list
    var getLocations = function () {
        return location;
    };

    // Product details getter
    var getProducts = function () {
        return products
    };

    var getLocation = function(){
        return lCode;
    };

    var getShop = function () {
        return sCode;
    };

    var setResults = function (data) {
        results = data;
    };

    var getResults = function () {
        return results;
    };

    return {
        getProducts: getProducts,
        setResults: setResults,
        getResults: getResults,
        getLocation: getLocation,
        getShop: getShop,
        getLocations: getLocations
    }
});