;(function (window, document) {

  'use strict';

  var Instagram = (function () {

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
                var template = document.getElementById('template').innerHTML;
                var output = Mustache.render(template, data);
                document.getElementById('instagram').insertAdjacentHTML('beforeend', output);
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
        _pagination();
      }
    }

  })();

  Instagram.init();

})(window, document);
