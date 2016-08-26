$(function () {

  var PHOTO_LIMIT = 10;
  var API_KEY = 'b0739d83d22e1a2550a877d51c0c0eb1';

  var photoURL = function(photo) {
    return 'https://farm'+ photo.farm +'.staticflickr.com/'+ photo.server +'/'+photo.id +'_'+ photo.secret+'.jpg';
  }


  var showPhoto = function(index) {
    $('#photo'+index).fadeIn(2500);
    if (index < PHOTO_LIMIT) {
      $('#photo'+index).fadeOut(2500,function(){
        showPhoto(index+1);
      });
    }
  }

  $.ajax({
    method: 'get',
    url: 'https://api.flickr.com/services/rest/',
    data: {
      api_key: API_KEY,
      tags: 'lighthouse',
      format: 'json',
      method: 'flickr.photos.search'
      },
    dataType: 'jsonp',
    jsonpCallback: 'jsonFlickrApi',
    success: function (response) {
      var result = response.photos.photo;
      $.each(result,function(key, value) {
        if(key>PHOTO_LIMIT) return false;
        $('<img>')
          .attr("id",'photo'+ key)
          .attr('src', photoURL(value))
          .appendTo('.lighthouse-pics').hide();
      });
      showPhoto(0);
    }
  });
});

