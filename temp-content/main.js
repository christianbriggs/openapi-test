function hitApi(url, callback) {
    var req = new XMLHttpRequest();

    req.addEventListener('load', onLoad);
    req.addEventListener('error', onFail);
    req.addEventListener('abort', onFail);

    req.open('GET', url);
    req.send();

    function onLoad(event) {
        if (req.status >= 400) {
            onFail(event);
        } else {
            var json = JSON.parse(this.responseText);
            callback(null, json);
        }
    }

    function onFail(event) {
        callback(new Error('...'));
    }
}

hitApi('https://christianbriggs.github.io/openapi-test/content/posts.json', function (error, data) {
    if (error) {
        console.log('there was an error', error);
        $('#results').text = error;
    } else {
        console.log('data is', data);
        // $('#results').text = data;

        $.each(data, function (key, val) {
            console.log(val.title);
            $("#results").append('<li>'+val.title+'</li>');
        });
        // var myresult = JSON.parse(data)
        // $("#results").text("data" + myresult);
    }
});