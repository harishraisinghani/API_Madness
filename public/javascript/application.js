$(function () {

  $.ajax({
    method: 'get',
    url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=lighthouse&format=json',
    data: {
      api_key:'b0739d83d22e1a2550a877d51c0c0eb1'
      },
    dataType: 'jsonp',
    jsonpCallback: 'jsonFlickrApi',
    success: function(someJSON) {
      console.log(someJSON);
    }
  });
});