import path from 'path';
import url from 'url';
import fs from "fs"

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.mkdir(path.resolve(__dirname,'dir'),(err)=>{
        if(err){
            console.log(err)
        }
    }
)