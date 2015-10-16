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

ContactManager.navigate = function (route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};

ContactManager.getCurrentRoute = function () {
    return Backbone.history.fragment;
};

// initialize:after - does not work any more, replaced with "start"
ContactManager.on("start", function () {
    if (Backbone.history) {
        Backbone.history.start();
    }

    if (this.getCurrentRoute() === "") {
        this.navigate("contacts");
        ContactManager.trigger("contacts:list");
    }
});
