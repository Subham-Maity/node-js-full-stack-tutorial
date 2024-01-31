import * as http from "http";
import {data_dummy} from "./data/data";

http.createServer(
    (_,
     res) => {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(data_dummy));
        res.end();
    }
).listen(3000);