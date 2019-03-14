/**
 * Main App Controller for the AngularJS Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
var propertis = {
    "ConnectorType": 0,
    "PropertyList": [
        {
            "PropertyName": "Filter Name",
            "PropertType": 1,
            "Type": null,
            "JsonName": "FilterName"
        },
        {
            "PropertyName": "File Name",
            "PropertType": 1,
            "Type": null,
            "JsonName": "Name"
        },
        {
            "PropertyName": "3 long",
            "PropertType": 3,
            "Type": 'long',
            "JsonName": "3long"
        },
        {
            "PropertyName": "3 bool",
            "PropertType": 3,
            "Type": 'bool',
            "JsonName": "3bool"
        },
        {
            "PropertyName": "File Extension",
            "PropertType": 2,
            "Type": ["Audio", "Document", "Drawing", "Form", "File",
                "Fusiontable", "Presentation", "Photo", "Spreadsheet",
                "Script", "Sites", "Video", "Unknown", "Other"],
            "JsonName": "Extension"
        },
        {
            "PropertyName": "File Creation Date",
            "PropertType": 4,
            "Type": "DateTime",
            "JsonName": "Created"
        },
        {
            "PropertyName": "Modified Date",
            "PropertType": 4,
            "Type": "DateTime",
            "JsonName": "Modified"
        },
        {
            "PropertyName": "File Size (bytes)",
            "PropertType": 4,
            "Type": "long",
            "JsonName": "Size"
        },
        {
            "PropertyName": "File Path",
            "PropertType": 1,
            "Type": null,
            "JsonName": "Path"
        },
        {
            "PropertyName": "Owner",
            "PropertType": 1,
            "Type": null,
            "JsonName": "Owner"
        },
        {
            "PropertyName": "Namber",
            "PropertType": 0,
            "Type": "long",
            "JsonName": "Namber"
        },
        {
            "PropertyName": "Keywords",
            "PropertType": 5,
            "Type": null,
            "JsonName": "Keywords"
        },

        {
            "PropertyName": "ValueCriterion",
            "PropertType": 3,
            "Type": null,
            "JsonName": "ValueCriterion"
        },
        {
            "PropertyName": "ContainerStringCriterion",
            "PropertType": 6,
            "Type": null,
            "JsonName": "ContainerStringCriterion"
        },
    ]
};


function AppController() {
    const _this = this;

    _this.filterClude = [];


    _this.filterConnectors = [
        {
            name: 'Box',
            ConnectorType: 0,
            ico: 'connector_box.png',
            filterCrit: {
                0: [
                    {FilterName: 'eee'}

                ],
                1: []
            },
        },
        {
            name: 'Google Drive',
            ConnectorType: 1,
            ico: 'connector_googledrive.png',
            filterCrit: {
                0: [],
                1: []
            }
        },

    ];
    console.log(_this.filterConnectors);
    _this.StringOperator = ['Contains', 'DoesNotContain'];
    _this.ValueOperator = ['Equals', 'NotEquals', 'LessThan', 'GreaterThan', 'Between', 'OutsideOf'];
    _this.StringKeywordOperator = ['Any', 'All', 'None', 'Regex'];

    _this.filterConnectors[0].active = true;
    _this.connectorTitle = _this.filterConnectors[0].name;
    _this.filterCrit = _this.filterConnectors[0].filterCrir;

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

        getPropertis
            .then(
                result => {
                    console.log('response', result);
                    _this.connectorTypes = result.PropertyList;
                    console.log('_this.connectorTypes', _this.connectorTypes);
                },
                error => {
                    alert("Rejected: " + error);
                }
            );


    };

    _this.openFilter = function (open, item, filterClude) {
        _this.filterClude.key = filterClude;
        _this.filterClude.name = filterClude === 0 ? 'Include' : 'Exclude';
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
    };


    _this.UseValue2 = function (item) {
        console.log('item', item);
        if (item.Operator === 'Between' || item.Operator === 'OutsideOf') {
            item.UseValue2 = true;
        } else {
            item.UseValue2 = false;
        }
        return item;

    };


    _this.openConnector(0)


}

export default ['UsersDataService', '$mdSidenav', AppController];
