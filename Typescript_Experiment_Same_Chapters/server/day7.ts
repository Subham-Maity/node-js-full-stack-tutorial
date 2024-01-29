/*
// another way
import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';

function controller(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World\n");
    res.end();
}

http.createServer(controller).listen(3000);

*/

import * as http from "http";

http.createServer((req, res) => {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello World\n");
        res.end();
    }
).listen(3000);
