import { rename, renameSync } from "node:fs";
import { readdir, rmdir } from "node:fs/promises";
import { mkdir } from "node:fs/promises";
import { readFile, writeFile } from "node:fs/promises";

const read = await readFile("./blog1.txt", "utf-8")
console.log(read);



writeFile("./blog2.txt", "Good Night")

// try {
//     mkdir(("./assets"))

// } catch (error) {
//     throw error
// }

try {
    if (readdir("./assets")) {
        rmdir("./assets")
    }
} catch (error) {
    throw error
}


try {
    writeFile("./delete.txt", "")

} catch (error) {
    throw error
}


writeFile("./Hello.txt", "I love Backend!!!")

try {
    renameSync("Hello.txt", "Helloworld.txt")

} catch (error) {
    throw error
}