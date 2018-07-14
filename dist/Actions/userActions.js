'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addKeyAndName = addKeyAndName;
exports.listKeysWithValues = listKeysWithValues;
exports.getValueWithKey = getValueWithKey;
exports.removeWithKey = removeWithKey;
exports.clearDictionary = clearDictionary;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _databaseActions = require('./databaseActions');

var DatabaseActions = _interopRequireWildcard(_databaseActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addKeyAndName(dictionary, keyName, ValueName) {
    dictionary[keyName] = ValueName;
    DatabaseActions.updateJsonObject(dictionary);
}
function listKeysWithValues(dictionary) {
    for (var key in dictionary) {
        var value = dictionary[key];
        console.log(key, " ==> ", value);
    }
}

function getValueWithKey(dictionary, keyName) {
    if (dictionary && keyName && dictionary[keyName]) {
        console.log('The Value is :', dictionary[keyName]);
    } else {
        throw new Error("Key Not Found");
    }
}

function removeWithKey(dictionary, key) {

    delete dictionary[key];
    DatabaseActions.updateJsonObject(dictionary);
}

function clearDictionary() {
    DatabaseActions.updateJsonObject({});
}