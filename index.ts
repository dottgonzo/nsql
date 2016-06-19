import * as Promise from "bluebird";
let mysql = require("mysql");



class kernelmysql {
    user: string;
    password: string;
    token: string;
    secret: string;
    database: string;
    connection: any;
    host: string;
    port: number;
    hostname: string;
    version: string;

    constructor(obj: { path?: string, auth?: { user: string, password: string, database: string }, origin: { port?: number, host?: string, hostname?: string } }) {
        this.version = require("./package.json").version;
        if (obj.auth) {

            this.user = obj.auth.user;
            this.password = obj.auth.password;
            this.database = obj.auth.database;

            if (obj.origin.hostname) { // todo
                this.host = obj.origin.hostname.split(":")[0];
                this.port = parseInt(obj.origin.hostname.split(":")[1]);
                this.hostname = obj.origin.hostname;

            } else if (obj.origin.host && obj.origin.port) { // todo
                this.hostname = obj.origin.host + ":" + obj.origin.port;
                this.host = obj.origin.host;
                this.port = obj.origin.port;

            }



        }

    }

    init() {
        this.connection = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });

        return true;

    }

    reconnect() {

        if (this.connection) {

            this.connection.connect();

            return true;

        } else {
            throw Error("no init");

        }



    }

    connect() {

        if (this.connection) {


            this.connection.connect();


            return true;

        } else {
            throw Error("no init");

        }




    }

    disconnect() {


        if (this.connection) {


            this.connection.end();


            return true;


        } else {
            throw Error("no init");

        }

    }


}

export = kernelmysql;