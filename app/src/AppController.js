/**
 * Main App Controller for the AngularJS Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
var propertis = [{
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
            "PropertType": 2,
            "Type": null,
            "JsonName": "Name"
        },
        {
            "PropertyName": "File Extension",
            "PropertType": 2,
            "Type": null,
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
            "PropertyName": "File Path",
            "PropertType": 2,
            "Type": null,
            "JsonName": "Path"
        },
        {
            "PropertyName": "Owner",
            "PropertType": 2,
            "Type": null,
            "JsonName": "Owner"
        },
        {
            "PropertyName": "File Size (bytes)",
            "PropertType": 4,
            "Type": "long",
            "JsonName": "Size"
        },
        {
            "PropertyName": "Keywords",
            "PropertType": 5,
            "Type": null,
            "JsonName": "Keywords"
        }
    ]
}
]


function AppController(UsersDataService, $mdSidenav) {
    var _this = this;


    _this.filterConnectors = [
        {
            name: 'Box',
            ConnectorType: 0,
            id: 'rfjobtargetsconnetorsearchbtnbox',
            ico: 'connector_box.png',
            filter: {
                0: [
                    {FilterName:'eee'}

                ],
                1: [
                ]
            },
        },
        {
            name: 'Google Drive',
            ConnectorType: 1,
            id: 'rfjobtargetsconnetorsearchbtngoogledrive',
            ico: 'connector_googledrive.png',
            filter: {
                0: [
                ],
                1: [
                ]
            }
        },

    ];

    _this.filterConnectors[0].active = true;
    _this.connectorTitle = _this.filterConnectors[0].name;
    _this.filter = _this.filterConnectors[0].filter;


    function getPropertis(connectorType) {


        // _this.filterConnectors.filter.include

        _this.filterConnectors.forEach(item =>{

        })

    }


    _this.openConnector = function (item, $index) {
        _this.filterConnectors.forEach((item, i) => {
            _this.filterConnectors[i].active = false;
        });
        _this.filterConnectors[$index].active = true;
        _this.connectorTitle = _this.filterConnectors[$index].name;
        _this.filter = _this.filterConnectors[$index].filter;


    };

    _this.openFilter = function (open, item) {
        if (open) {
            _this.openFilterToggle = true;
            _this.filterInputOptions = item;
        } else {
            _this.openFilterToggle = false;
            _this.filterInputOptions = [];
        }

    }
    _this.delFilter = function (item) {

        
        

    }


    _this.addFilter = function (item) {
        
    }



}

export default ['UsersDataService', '$mdSidenav', AppController];
