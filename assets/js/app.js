/**
 * Created by IvanRuskevich on 01.07.2015
 */

var ContactManager = new Marionette.Application();

//ContactManager.addRegions({
//    mainRegion: "#main-region"
//});

ContactManager.on("before:start", function () {
    var RegionContainer = Marionette.LayoutView.extend({
        el: "app-container",
        regions: {
            main: "#main-region"
        }
    });
    ContactManager.regions = new RegionContainer();
});

// initialize:after - does not work =\
ContactManager.on("start", function () {
    ContactManager.ContactsApp.List.Controller.listContacts();
});
