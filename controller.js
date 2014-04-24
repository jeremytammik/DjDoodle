(function(db) {

    var addBtn = document.querySelector("#add-btn");
    var input = document.querySelector("#djname");

    var list = document.querySelector(".list");

    addBtn.addEventListener('click', function() {
        var name = input.value;
        if(name) {
            db.post({
                name: name
            }).then(function() {
                alert("Doc Saved");
            }, function() {
                alert("ERROR");
            });
        }
    });

    function render(resp) {

        console.log("render");

        list.innerHTML = "";

        var fragment = document.createDocumentFragment();

        resp.rows.forEach(function(row) {
            var li = document.createElement("li");
            li.textContent = row.key;
            fragment.appendChild(li);
        });

        list.appendChild(fragment);
    }

    db.changes({
        live: true,
        onChange: function(change) {
            query();
        }
    });

    function query() {
        db.query("views/byName", {reduce: false}, function(err, response) {
            if(!err) {
                render(response);
            } else {
                alert("ERROR")
            }
        });
    }

})(db);
