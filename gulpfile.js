var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require("url");


gulp.task("server", function () {
    gulp.src(".")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            middleware: function (req, res, next) {
                var pathName = url.parse(req.url).pathname;
                console.log(pathName);
                if (pathName == "/api") {
                    var data = [
                        {
                            "id": 1,
                            "name": "后街标配",
                            "image": "http://localhost:8080/Content/img/img1.png",
                            "addr": "北京",
                            "state": true,
                            "num": 1,
                            "price": 1500,
                            "size": "M",
                            "color": "red"
                        },
                        {
                            "id": 2,
                            "name": "后街舒适",
                            "image": "http://localhost:8080/Content/img/img2.png",
                            "addr": "北京",
                            "state": true,
                            "num": 1,
                            "price": 2300,
                            "size": "L",
                            "color": "green"
                        },
                        {
                            "id": 3,
                            "name": "后街豪华",
                            "image": "http://localhost:8080/Content/img/img3.png",
                            "addr": "北京",
                            "state": false,
                            "num": 1,
                            "price": 3600,
                            "size": "s",
                            "color": "blue"
                        }
                    ];
                    res.writeHead(200, {
                        "Content-type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*"
                    });
                    res.write(JSON.stringify(data));
                    res.end();
                }
                next()
            },
            open: "/index.html",
            port: 8080
        }))
});