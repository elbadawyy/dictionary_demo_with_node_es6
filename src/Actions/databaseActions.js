import fs from 'fs';
var dictionaryPath = "Database/dict.json";
var dictionary = JSON.parse(fs.readFileSync(dictionaryPath, 'utf8'));

export function updateJsonObject(updatedJsonObject) {
    if (updatedJsonObject) {
        var jsonString = JSON.stringify(updatedJsonObject);
        fs.writeFile(dictionaryPath, jsonString, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }

            console.log("Dictionary Updated");
        });

    }
}
