
import fs from 'fs';
import * as userActions from './Actions/userActions'

var dictionaryPath = "Database/dict.json";
var dictionary = JSON.parse(fs.readFileSync(dictionaryPath, 'utf8'));
var actionName = process.argv[2] ? process.argv[2] : "";
var keyName = process.argv[3] ? process.argv[3] : "";
var valueName = process.argv[4] ? process.argv[4] : "";

if (!actionName)
    throw new Error("Action Name Not Been Defined");

switch (actionName) {
    case "add":
        if (dictionary && keyName && valueName)
            userActions.addKeyAndName(dictionary, keyName, valueName);
        break;
    case "list":
        if (dictionary)
            userActions.listKeysWithValues(dictionary);
        break;
    case "get":
        if (dictionary && keyName)
            userActions.getValueWithKey(dictionary, keyName);
        break;
    case "remove":
        if (dictionary && keyName)
            userActions.removeWithKey(dictionary, keyName);
        break;
    case "clear":
        userActions.clearDictionary();
        break;

    default:
        console.error("Action Name Not Been Recognized");
}