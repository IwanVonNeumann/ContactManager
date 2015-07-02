/**
 * Created by IvanRuskevich on 02.07.2015
 */

ContactManager.module("ContactsApp.Show",
    function (Show, ContactManager, Backbone, Marionette, $, _) {
        Show.Contact = Marionette.ItemView.extend({
            template: "#contact-view"
        });
    }
);
