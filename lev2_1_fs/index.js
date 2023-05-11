import { readFile, writeFile } from "node:fs/promises";

try {

    const filePath = new URL("./data.json", import.meta.url);


    const dataToObj = await readFile(filePath, {
        encoding: "utf8",
    });

    console.log(dataToObj);

    const newArr = JSON.parse(dataToObj);

    const results = newArr.map((elt) => {
        return elt.id + " - " + elt.title + elt.description
    })
    // console.log(results.join("\n"));

    writeFile("output.txt", results.join("\n"));

} catch (err) {
    console.error(err.message);
}

