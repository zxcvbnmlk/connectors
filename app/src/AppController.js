/**
 * Main App Controller for the AngularJS Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */




function AppController() {
    const _this = this;

    const gridGroupData = [
        {GroupName: 'Google', PerentGroups: '', CreationDate: '10.05.2018'},
        {GroupName: 'Admins', PerentGroups: 'Cisco/NewDep', CreationDate: '10.05.2018'},
        {GroupName: 'Develoupers', PerentGroups: 'Google/NewDep', CreationDate: '10.05.2018'},
    ]
    const treeviewData = {
        google: [
            {
                text: "Google", id: 123123, items: [
                    {
                        text: "NewDep", id: 334, items: [
                            {text: 'Develoupers', id: 144523123},
                            {text: 'Admins', id: 12354123},
                        ]
                    },
                    {text: "OldDep", id: 12354123},
                ]
            },
        ],
        admins: [
            {
                text: "Admins", id: 12354123, items: [
                    {text: "Old Admins", id: 12354123},
                    {text: "New Old Admins", id: 12354123},
                ]
            },
        ]
    }
    const gridOptoons = {
        // height: 400,
        sortable: true,
        pageable: true,
        scrollable: true,
        navigatable: true,
        filterable: true,
    }

    $("#grid").kendoGrid({
        dataSource: {
            transport: {
                read: function (options) {
                    options.success(gridGroupData);
                }
            },
            pageSize: 50
        },
        columns: [{
            field: "GroupName",
            title: "Group Name",
        }, {
            field: "PerentGroups",
            title: "Perent Groups"
        }, {
            field: "CreationDate",
            title: "Creation Date"
        }
        ]
    });

    var grid = $("#grid").data("kendoGrid");
    grid.setOptions(gridOptoons);


    $("#personGrid").kendoGrid({
        dataSource: {
            transport: {
                read: function (options) {
                    options.success(gridGroupData);
                }
            },
            pageSize: 50
        },

        columns: [
            {"field":"PersonSelect", title:"Person Select", "template": "<input type=\"checkbox\" />" },
        {
            field: "Id",
            title: "Id Group",
            hidden: true,
        },
            {
            field: "FirstName",
            title: "First Name",
        }, {
            field: "LastName",
            title: "Last Name"
        }, {
            field: "Group",
            title: "Group"
        }, {
            field: "CreationDate",
            title: "Creation Date"
        }
        ]

    });

    var grid = $("#personGrid").data("kendoGrid");
    grid.setOptions(gridOptoons);


    $("#grid tbody").on("click", "tr", function (e) {
        var rowElement = this;
        var savedTargetsGrid = $("#grid").data("kendoGrid");
        var row = $(rowElement);
        $("#grid tr").removeClass("ob-selected")
        row.addClass("ob-selected");
        var group = savedTargetsGrid.dataItem(row);
        console.log('group', group)
        var treeView = $("#treeview").data("kendoTreeView");
        var arr = treeviewData[group.GroupName.toLowerCase()];

        console.log('arr', arr)
        treeView.dataSource.data(arr);
        $("#personGrid").hide();
    });

    $("#DataSource").click(function () {

        var grid = $("#grid").data("kendoGrid");
        var data = grid.dataSource.data();
        console.log(data)
    });


    var treeview = $("#treeview").kendoTreeView({
            template: "#= item.text #<input type='hidden' class='data-id' value='#= item.id #' />",
            dataSource: {
                data: []
            },
            select: onSelectTreeview,
            loadOnDemand: false
        }).data("kendoTreeView"),

        handleTextBox = function (callback) {
            return function (e) {
                if (e.type != "keypress" || kendo.keys.ENTER == e.keyCode) {
                    callback(e);
                }
            };
        };

    function onSelectTreeview(e) {
        var treeview = $("#treeview").data("kendoTreeView");
        treeview.select(e.node);
        var selected = treeview.select();
        var item = treeview.dataItem(selected);
        console.log("selected item", item);
        if (item.id) {

            var grid = $("#personGrid").data("kendoGrid");
            var data = [{
                Id: item.id,
                FirstName: 'Tom',
                LastName: 'Black',
                Group: item.text,
                CreationDate: '10.05.2018',

            }];
            var newDataSource = new kendo.data.DataSource({ pageSize: 50, data: data });
            grid.setDataSource(newDataSource);
            $("#personGrid").show();

        }
    }

    var filter = handleTextBox(function (e) {
        var filterText = $("#filterText").val();

        if (filterText !== "") {
            treeview.dataSource.filter({
                field: "text",
                operator: "contains",
                value: filterText
            });
        } else {
            treeview.dataSource.filter({});
        }
    });

    $("#filterDataSource").click(filter);
    $("#filterText").keypress(filter);


//Usage example:

    // function dataURLtoFile(dataurl, filename) {
    //     var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    //         bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    //     while(n--){
    //         u8arr[n] = bstr.charCodeAt(n);
    //     }
    //     return new File([u8arr], filename, {type:mime});
    // }

    // $("#saveReport").click(function () {
    //     var file = dataURLtoFile('data:text/plain;base64,aGVsbG8gd29ybGQ=', 'hello.txt');
    //     var  filename = 'myExcel.xlsx';
    //     console.log(file);
    //     // var file = new Blob([data], {type: type});
    //             console.log('Others')
    //             var a = document.createElement("a"),
    //                 url = URL.createObjectURL(file);
    //             a.href = url;
    //             a.download = filename;
    //             document.body.appendChild(a);
    //             a.click();
    //             setTimeout(function() {
    //                 document.body.removeChild(a);
    //                 window.URL.revokeObjectURL(url);
    //             }, 0);
    // })
    // $("#download").click(download('file1111 text', '111.txt', 'text/plain'));
    // Function to download data to a file
    // $("#saveReport").click(function () {
    //     var myFile = $('#fileinput').prop('files');
    //     var  data = myFile;
    //     console.log('data',data)
    //     var  filename = 'myExcel.xlsx';
    //     var  type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    //
    //     var file = new Blob([data], {type: type});
    //     if (window.navigator.msSaveOrOpenBlob) { // IE10+
    //         console.log('window.navigator.msSaveOrOpenBlob')
    //         window.navigator.msSaveOrOpenBlob(file, filename);
    //     }
    //     else { // Others
    //         console.log('Others')
    //         var a = document.createElement("a"),
    //             url = URL.createObjectURL(file);
    //         a.href = url;
    //         a.download = filename;
    //         document.body.appendChild(a);
    //         a.click();
    //         setTimeout(function() {
    //             document.body.removeChild(a);
    //             window.URL.revokeObjectURL(url);
    //         }, 0);
    //     }
    // });

}

export default ["UsersDataService", "$mdSidenav", AppController];
