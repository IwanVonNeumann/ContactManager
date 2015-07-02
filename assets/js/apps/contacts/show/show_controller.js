/**
 * Created by IvanRuskevich on 02.07.2015
 */

ContactManager.module("ContactsApp.Show",
    function (Show, ContactManager, Backbone, Marionette, $, _) {
        Show.Controller = {
            showContact: function(model) {
                var contactView = new Show.Contact({
                    model: model
                });

                ContactManager.regions.main.show(contactView);
            }
        }
    }
);
