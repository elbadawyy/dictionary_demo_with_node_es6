'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _userActions = require('./Actions/userActions');

var userActions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dictionaryPath = "Database/dict.json";
var dictionary = JSON.parse(_fs2.default.readFileSync(dictionaryPath, 'utf8'));
var actionName = process.argv[2] ? process.argv[2] : "";
var keyName = process.argv[3] ? process.argv[3] : "";
var valueName = process.argv[4] ? process.argv[4] : "";

if (!actionName) throw new Error("Action Name Not Been Defined");

switch (actionName) {
    case "add":
        if (dictionary && keyName && valueName) userActions.addKeyAndName(dictionary, keyName, valueName);
        break;
    case "list":
        if (dictionary) userActions.listKeysWithValues(dictionary);
        break;
    case "get":
        if (dictionary && keyName) userActions.getValueWithKey(dictionary, keyName);
        break;
    case "remove":
        if (dictionary && keyName) userActions.removeWithKey(dictionary, keyName);
        break;
    case "clear":
        userActions.clearDictionary();
        break;

    default:
        console.error("Action Name Not Been Recognized");
}