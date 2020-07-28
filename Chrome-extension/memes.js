var meme = $.get("https://meme-api.herokuapp.com/gimme?nsfw=false");

meme.done(function(res) 
{
    $('body').css({
        "background":`url(${res.url}) no-repeat center center fixed`,
        "background-size":'auto 100%'
        
    })
});




