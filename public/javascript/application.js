$(function () {

  var response;

  $.ajax({
    method: 'get',
    url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=lighthouse&format=json',
    data: {
      api_key:'b0739d83d22e1a2550a877d51c0c0eb1'
      },
    dataType: 'jsonp',
    jsonpCallback: 'jsonFlickrApi',
    success: function (response) {
      var result = response.photos.photo;
      var tempLimit = 4;
      $.each(result,function(key, value) {
        if(key>tempLimit) return false;

        $('<img class="dynamic">').attr('src','https://farm'+result[key]["farm"]+'.staticflickr.com/'+result[key]["server"]+'/'+result[key]["id"]+'_'+result[key]["secret"]+'.jpg').appendTo('.lighthouse-pics').fadeOut(1500);

      });
    }
  });
});