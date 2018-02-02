;(function (window, document) {

  'use strict';

  var Instagram = (function () {

    var _grid;
    var _vue = new Vue({
      el: '#js-instagram',
      data: {
        medias: []
      },
      updated: function () {
        _grid.reloadItems();
        _grid.layout();
      }
    });

    var _gallery = function () {
      _grid = new Masonry('#js-instagram', {
        itemSelector: '.instagram__link',
        gutter: 10,
        fitWidth: true
      });
    };

    var _pagination = function () {
      var paginationMedias = true;
      window.addEventListener('scroll', function () {
        var result = document.body.getBoundingClientRect().height - window.outerHeight;
        if (paginationMedias && window.scrollY >= result) {
          function onload () {
            if (this.status === 200) {
              var data = JSON.parse(this.responseText);
              paginationMedias = !!data.medias;
              if (paginationMedias) {
                _vue.medias.push.apply(_vue.medias, data.medias);
              }
            }
          };
          
          var req = new XMLHttpRequest();
          req.onload = onload;
          req.open('get', '/pagination', true);
          req.send();
        }
      });
    };

    return {
      init: function () {
        _gallery();
        _pagination();
      }
    }

  })();

  Instagram.init();

})(window, document);
