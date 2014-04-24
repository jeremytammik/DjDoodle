var remoteURL = 'http://username:password@127.0.0.1:5984/djdoodle';

var db = PouchDB("dj-doodle");

db.post({
    title: "hello dj"
}, function(res) {
    console.log("result", res);
});

db.replicate.from(remoteURL, {
    live: true,
    onChange: function() {
        console.log("changes from", arguments);
    },
    complete: function() {
        console.log("complete from");
    }
});

db.replicate.to(remoteURL, {
    create_target: true,
    live: true,
    complete: function() {
        console.log("complete to");
    },
    onChange: function() {
        console.log("changes to", arguments);
    }
});
