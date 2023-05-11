import { mkdir, writeFile } from "node:fs/promises"
import { existsSync, } from "node:fs";

// console.log("HI");

async function createNewFolder(path) {
    try {
        await mkdir(path);
        console.log(`Created a new Folder: ${path}`);
    } catch (error) {
        console.error(`Sorry, creating a new folder is not possible. ${error.message}`);
    }

    try {
        if (existsSync("./content.txt")) {
            console.log("File exists :)");
        } else {
            writeFile("./assets/content.txt", "I <3 BACKEND!!");
            console.log("Created a new file");
        }
    } catch (error) {
        throw error
    }
    
}
createNewFolder("assets")



