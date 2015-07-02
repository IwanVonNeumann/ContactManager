/**
 * Created by IvanRuskevich on 01.07.2015
 */

// TODO fix this (p.202)
ContactManager.module("ContactsApp.List.Templates",
    function (Templates, ContactManager, Backbone, Marionette, $, _) {
        Templates.listItemView = "<%= firstName %> <%= lastName %>";
    }
);
