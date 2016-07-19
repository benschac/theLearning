var app = angular.module('app', []);



app.controller("MainController", function() {
    var that = this;

    that.title = 'AngularJS Tutorial Example!'

    that.searchInputfield = '';

    that.shows = [
        {
            title: 'Game of Thrones',
            year: 2011,
            favorite: true
        },
        {
            title: 'Walking Dead',
            year: 2010,
            favorite: false
        },
        {
            title: 'Firefly',
            year: 2002,
            favorite: true
        },
        {
            title: 'Banshee',
            year: 2013,
            favorite: true
        },
        {
            title: 'Greys Anatomy',
            year: 2005,
            favorite: false
        }
    ];

    that.orders = [
    {
        id: 1,
        title: 'Year Ascending',
        key: 'year',
        reverse: false
    },
    {
        id: 2,
        title: 'Year Descending',
        key: 'year',
        reverse: true
    },
    {
        id: 3,
        title: 'Title Ascending',
        key: 'title',
        reverse: false
    },
    {
        id: 4,
        title: 'Title Descending',
        key: 'title',
        reverse: true
    }
];

that.order = that.orders[0];



that.new = {};

that.addShow = function() {
  that.shows.push(that.new);
  that.new = {};
}
});
