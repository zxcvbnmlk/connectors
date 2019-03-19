/**
 * Main App Controller for the AngularJS Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
var propertis = {
    data: {
        "ConnectorType": 0,
        "PropertyList": [
            {
                "PropertyName": "Filter Name",
                "PropertyType": 1,
                "Type": null,
                "JsonName": "FilterName"
            },
            {
                "PropertyName": "File Name",
                "PropertyType": 1,
                "Type": null,
                "JsonName": "Name"
            },
            {
                "PropertyName": "long 3",
                "PropertyType": 3,
                "Type": "long",
                "JsonName": "long3"
            },
            {
                "PropertyName": "bool 3",
                "PropertyType": 3,
                "Type": "bool",
                "JsonName": "bool3"
            },
            {
                "PropertyName": "File Extension1",
                "PropertyType": 2,
                "Type": null,
                "JsonName": "Extension1"
            },
            {
                "PropertyName": "File Extension",
                "PropertyType": 2,
                "Type": ["Audio", "Document", "Drawing", "Form", "File",
                    "Fusiontable", "Presentation", "Photo", "Spreadsheet",
                    "Script", "Sites", "Video", "Unknown", "Other"],
                "JsonName": "Extension"
            },
            {
                "PropertyName": "File Creation Date",
                "PropertyType": 4,
                "Type": "DateTime",
                "JsonName": "Created"
            },
            {
                "PropertyName": "Modified Date",
                "PropertyType": 4,
                "Type": "DateTime",
                "JsonName": "Modified"
            },
            {
                "PropertyName": "File Size (bytes)",
                "PropertyType": 4,
                "Type": "long",
                "JsonName": "Size"
            },
            {
                "PropertyName": "File Path",
                "PropertyType": 1,
                "Type": null,
                "JsonName": "Path"
            },
            {
                "PropertyName": "Owner",
                "PropertyType": 1,
                "Type": null,
                "JsonName": "Owner"
            },
            {
                "PropertyName": "Namber",
                "PropertyType": 0,
                "Type": "long",
                "JsonName": "Namber"
            },
            {
                "PropertyName": "Keywords",
                "PropertyType": 5,
                "Type": null,
                "JsonName": "Keywords"
            },

            {
                "PropertyName": "ValueCriterion",
                "PropertyType": 3,
                "Type": null,
                "JsonName": "ValueCriterion"
            },
            {
                "PropertyName": "ContainerStringCriterion",
                "PropertyType": 6,
                "Type": null,
                "JsonName": "ContainerStringCriterion"
            },
        ]
    }
};

const connectorsArr = [
    {
        name: "Box",
        ConnectorType: 0,
        JsonName: "box",
        ico: "connector_box.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "Docus Share",
        ConnectorType: 1,
        JsonName: "docushare",
        ico: "connector_docushare.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "Druva",
        ConnectorType: 2,
        JsonName: "druva",
        ico: "connector_druva.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "Enterprise Vault",
        ConnectorType: 3,
        JsonName: "enterprisevault",
        ico: "connector_enterprisevault.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "Google Drive",
        ConnectorType: 4,
        JsonName: "googledrive",
        ico: "connector_googledrive.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "Gmail",
        ConnectorType: 5,
        JsonName: "gmail",
        ico: "connector_gmail.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "Open text",
        ConnectorType: 6,
        JsonName: "livelink ",
        ico: "connector_googledrive.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "One Drive",
        ConnectorType: 7,
        JsonName: "onedrive",
        ico: "connector_onedrive.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "Oracle Urm",
        ConnectorType: 8,
        JsonName: "oracleurm",
        ico: "connector_googledrive.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "AWSS3",
        ConnectorType: 9,
        JsonName: "AWSS3",
        ico: "connector_googledrive.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "Salesforce",
        ConnectorType: 10,
        JsonName: "salesforce",
        ico: "connector_googledrive.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "Share Point",
        ConnectorType: 11,
        JsonName: "sharepoint",
        ico: "connector_sharepoint.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "CMIS",
        ConnectorType: 12,
        JsonName: "cmis",
        ico: "connector_cmis.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "Exchange",
        ConnectorType: 13,
        JsonName: "exchange",
        ico: "connector_exchange.png",
        filterCrit: {0: [], 1: []},
    },
    {
        name: "Cloud Mail",
        ConnectorType: 14,
        JsonName: "imappop",
        ico: "connector_googledrive.png",
        filterCrit: {0: [], 1: []},
    },{
        name: "File Net",
        ConnectorType: 15,
        JsonName: "filenet",
        ico: "connector_googledrive.png",
        filterCrit: {0: [], 1: []},
    }
];


function AppController() {
    const _this = this;

    _this.filterConnectors = [];


    var ConnectorType = ["box", "googledrive","CMIS"];

    function diffResult(a1, a2) {
        return a1.filter(i => a2.includes(i.JsonName))
    };

    _this.conCheck = function () {

        if (_this.filterConnectors === []) {
            _this.filterConnectors = diffResult(connectorsArr, ConnectorType);
        } else {

            let filterConnectorsOld = diffResult(_this.filterConnectors, ConnectorType);
            _this.filterConnectors = [];
            let filterConnectorsNew = diffResult(connectorsArr, ConnectorType);
            filterConnectorsNew.forEach((itemNew, index) => {
                filterConnectorsOld.forEach(itemOld => {
                    if (itemNew.JsonName === itemOld.JsonName) {
                        itemNew.filterCrit = itemOld.filterCrit
                    }
                })
            });
            _this.filterConnectors = filterConnectorsNew;

        }


        console.log(_this.filterConnectors);

        _this.openConnector(0)


    };


    _this.filterClude = [];


    _this.rewriteFilters = function (ConnectorType) {
        // ConnectorType

        var connector = _this.filterConnectors.filter(item => item.ConnectorType === ConnectorType)[0];
        console.log("connector", connector)
        for (let i = 0; i < 2; i++) {
            connector.filterCrit[i].forEach(filterCrit => {
                // console.log("filterCrit", filterCrit)

                filterCrit = Object.keys(filterCrit).map(function (key) {
                    console.log("filterCrit[key] case", filterCrit[key]);
                    if (filterCrit[key] == "") {
                        delete filterCrit[key]
                    } else if (filterCrit[key].hasOwnProperty("Values") && filterCrit[key].Values === []) {
                        delete filterCrit[key]
                    } else if (filterCrit[key].hasOwnProperty("Value") && filterCrit[key].Value === null) {
                        delete filterCrit[key]
                    } else if (filterCrit[key].hasOwnProperty("PropertyType")) {

                        switch (filterCrit[key].PropertyType) {
                            case 2:
                                if (!filterCrit[key].hasOwnProperty("Values")) {
                                    delete filterCrit[key];
                                    break;
                                }
                                var OtherType = [];
                                var Values = Object.keys(filterCrit[key].Values);
                                if (Values.indexOf("Other") !== -1) {
                                    OtherType = filterCrit[key].hasOwnProperty("OtherType") ? filterCrit[key].OtherType.split(",") : [];

                                    Values.splice(Values.indexOf("Other"), 1);
                                }

                                filterCrit[key] = {
                                    Values: Values.concat(OtherType),
                                    Operator: filterCrit[key].Operator
                                };
                                filterCrit[key].Values.splice(filterCrit[key].Values.indexOf(""), 1);
                                break;
                            case 3:
                                if (!filterCrit[key].hasOwnProperty("Value")) {
                                    delete filterCrit[key];
                                    break;
                                }

                                break;
                            case 4:
                                if (!filterCrit[key].hasOwnProperty("Value")) {
                                    delete filterCrit[key];
                                    break;
                                }

                                break;
                            case 5:
                                if (!filterCrit[key].hasOwnProperty("Values")) {
                                    delete filterCrit[key];
                                    break;
                                }
                                filterCrit[key] = {
                                    Values: filterCrit[key].Values.split(","),
                                    Operator: filterCrit[key].Operator
                                }
                                break;
                            case 6:
                                if (!filterCrit[key].hasOwnProperty("Values")) {
                                    delete filterCrit[key];
                                    break;
                                }
                                filterCrit[key] = {
                                    Values: filterCrit[key].Values.split(","),
                                    Operator: filterCrit[key].Operator
                                }
                                break;


                        }
                    }

                    return filterCrit[key];
                });


            });
        }

        console.log("connector", connector.filterCrit)

    };


    _this.StringOperator = ["Contains", "DoesNotContain"];
    _this.ValueOperator = ["Equals", "NotEquals", "LessThan", "GreaterThan", "Between", "OutsideOf"];
    _this.ValueOperatorSingle = ["Equals", "NotEquals", "LessThan", "GreaterThan"];
    _this.StringKeywordOperator = ["Any", "All", "None", "Regex"];


    const getPropertis = new Promise((resolve) => {
        resolve(propertis);
    });


    _this.openConnector = function ($index) {
        _this.filterConnectors.forEach((item, i) => {
            _this.filterConnectors[i].active = false;
        });
        _this.filterConnectors[$index].active = true;
        _this.connectorTitle = _this.filterConnectors[$index].name;
        _this.filterCrit = _this.filterConnectors[$index].filterCrit;
        _this.openFilterToggle = false;

        // let url = 'filterjson/' + _this.filterConnectors[$index].ConnectorType;
        // this.apiServer.get(url)

        getPropertis.then(
            result => {
                console.log("response", result);
                _this.connectorTypes = result.data.PropertyList;
                console.log("_this.connectorTypes", _this.connectorTypes);
            },
            error => {
                alert("Rejected: " + error);
            }
        );


    };

    _this.openFilter = function (open, item, filterClude) {
        _this.filterClude.key = filterClude;
        _this.filterClude.name = filterClude === 0 ? "Include" : "Exclude";
        if (open) {
            _this.openFilterToggle = true;
            _this.filterInputOptions = item;
        } else {
            _this.openFilterToggle = false;
            _this.filterInputOptions = [];
        }

    };
    _this.delFilter = function (filer) {
        _this.filterConnectors.forEach(item => {
            if (item.active) {
                var filterIndex = item.filterCrit[_this.filterClude.key].findIndex(elmnt => elmnt.$$hashKey === filer.$$hashKey);
                item.filterCrit[_this.filterClude.key].splice(filterIndex, 1);
            }
        });
    };

    _this.saveFilter = function () {
        console.log("_this.filterInputOptions", _this.filterInputOptions)
        _this.filterConnectors.forEach(item => {
            if (item.active) {
                var filterIndex = item.filterCrit[_this.filterClude.key].findIndex(elmnt => elmnt.$$hashKey === _this.filterInputOptions.$$hashKey);
                if (filterIndex === -1) {
                    item.filterCrit[_this.filterClude.key].push(_this.filterInputOptions)
                } else {
                    item.filterCrit[_this.filterClude.key][filterIndex] = _this.filterInputOptions;
                }
            }
        });
        _this.openFilterToggle = false;
        _this.filterInputOptions = [];

        console.log("_this.filterInputOptions", _this.filterInputOptions)
        console.log("_this.filterConnectors", _this.filterConnectors)
    };

    _this.UseValue2 = function (item) {
        console.log("item", item);
        if (item.Operator === "Between" || item.Operator === "OutsideOf") {
            item.UseValue2 = true;
        } else {
            item.UseValue2 = false;
        }
        return item;

    };


}

export default ["UsersDataService", "$mdSidenav", AppController];
