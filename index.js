"use strict";
var mysql = require("mysql");
var kernelmysql = (function () {
    function kernelmysql(obj) {
        this.version = require("./package.json").version;
        if (obj.auth) {
            this.user = obj.auth.user;
            this.password = obj.auth.password;
            this.database = obj.auth.database;
            if (obj.origin.hostname) {
                this.host = obj.origin.hostname.split(":")[0];
                this.port = parseInt(obj.origin.hostname.split(":")[1]);
                this.hostname = obj.origin.hostname;
            }
            else if (obj.origin.host && obj.origin.port) {
                this.hostname = obj.origin.host + ":" + obj.origin.port;
                this.host = obj.origin.host;
                this.port = obj.origin.port;
            }
        }
    }
    kernelmysql.prototype.init = function () {
        this.connection = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
        return true;
    };
    kernelmysql.prototype.reconnect = function () {
        if (this.connection) {
            this.connection.connect();
            return true;
        }
        else {
            throw Error("no init");
        }
    };
    kernelmysql.prototype.connect = function () {
        if (this.connection) {
            this.connection.connect();
            return true;
        }
        else {
            throw Error("no init");
        }
    };
    kernelmysql.prototype.disconnect = function () {
        if (this.connection) {
            this.connection.end();
            return true;
        }
        else {
            throw Error("no init");
        }
    };
    return kernelmysql;
}());
module.exports = kernelmysql;

//# sourceMappingURL=data:application/json;base64,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QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUdsQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBR3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFHaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0IsQ0FBQztJQUVMLENBQUM7SUFHTCxrQkFBQztBQUFELENBM0dBLEFBMkdDLElBQUE7QUFFRCxpQkFBUyxXQUFXLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQcm9taXNlIGZyb20gXCJibHVlYmlyZFwiO1xubGV0IG15c3FsID0gcmVxdWlyZShcIm15c3FsXCIpO1xuXG5cblxuY2xhc3Mga2VybmVsbXlzcWwge1xuICAgIHVzZXI6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIHRva2VuOiBzdHJpbmc7XG4gICAgc2VjcmV0OiBzdHJpbmc7XG4gICAgZGF0YWJhc2U6IHN0cmluZztcbiAgICBjb25uZWN0aW9uOiBhbnk7XG4gICAgaG9zdDogc3RyaW5nO1xuICAgIHBvcnQ6IG51bWJlcjtcbiAgICBob3N0bmFtZTogc3RyaW5nO1xuICAgIHZlcnNpb246IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG9iajogeyBwYXRoPzogc3RyaW5nLCBhdXRoPzogeyB1c2VyOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGRhdGFiYXNlOiBzdHJpbmcgfSwgb3JpZ2luOiB7IHBvcnQ/OiBudW1iZXIsIGhvc3Q/OiBzdHJpbmcsIGhvc3RuYW1lPzogc3RyaW5nIH0gfSkge1xuICAgICAgICB0aGlzLnZlcnNpb24gPSByZXF1aXJlKFwiLi9wYWNrYWdlLmpzb25cIikudmVyc2lvbjtcbiAgICAgICAgaWYgKG9iai5hdXRoKSB7XG5cbiAgICAgICAgICAgIHRoaXMudXNlciA9IG9iai5hdXRoLnVzZXI7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkID0gb2JqLmF1dGgucGFzc3dvcmQ7XG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlID0gb2JqLmF1dGguZGF0YWJhc2U7XG5cbiAgICAgICAgICAgIGlmIChvYmoub3JpZ2luLmhvc3RuYW1lKSB7IC8vIHRvZG9cbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QgPSBvYmoub3JpZ2luLmhvc3RuYW1lLnNwbGl0KFwiOlwiKVswXTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcnQgPSBwYXJzZUludChvYmoub3JpZ2luLmhvc3RuYW1lLnNwbGl0KFwiOlwiKVsxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0bmFtZSA9IG9iai5vcmlnaW4uaG9zdG5hbWU7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqLm9yaWdpbi5ob3N0ICYmIG9iai5vcmlnaW4ucG9ydCkgeyAvLyB0b2RvXG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0bmFtZSA9IG9iai5vcmlnaW4uaG9zdCArIFwiOlwiICsgb2JqLm9yaWdpbi5wb3J0O1xuICAgICAgICAgICAgICAgIHRoaXMuaG9zdCA9IG9iai5vcmlnaW4uaG9zdDtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcnQgPSBvYmoub3JpZ2luLnBvcnQ7XG5cbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgICAgICAgICBob3N0OiB0aGlzLmhvc3QsXG4gICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXIsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIGRhdGFiYXNlOiB0aGlzLmRhdGFiYXNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfVxuXG4gICAgcmVjb25uZWN0KCkge1xuXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24pIHtcblxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLmNvbm5lY3QoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwibm8gaW5pdFwiKTtcblxuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcblxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG5cblxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLmNvbm5lY3QoKTtcblxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJubyBpbml0XCIpO1xuXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG5cblxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG5cblxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLmVuZCgpO1xuXG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwibm8gaW5pdFwiKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgPSBrZXJuZWxteXNxbDsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
