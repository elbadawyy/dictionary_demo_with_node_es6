import fs from 'fs';
import * as DatabaseActions from './databaseActions'



export function addKeyAndName(dictionary, keyName, ValueName) {
    dictionary[keyName] = ValueName;
    DatabaseActions.updateJsonObject(dictionary);
}
export function listKeysWithValues(dictionary) {
    for (var key in dictionary) {
        var value = dictionary[key];
        console.log(key, " ==> ", value)
    }

}

export function getValueWithKey(dictionary, keyName) {
    if (dictionary && keyName && dictionary[keyName]) {
        console.log('The Value is :', dictionary[keyName])
    }
    else {
        throw new Error("Key Not Found")
    }

}

export function removeWithKey(dictionary, key) {

    delete dictionary[key];
    DatabaseActions.updateJsonObject(dictionary);
}

export function clearDictionary() {
    DatabaseActions.updateJsonObject({});

}
