'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateJsonObject = updateJsonObject;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dictionaryPath = "Database/dict.json";
var dictionary = JSON.parse(_fs2.default.readFileSync(dictionaryPath, 'utf8'));

function updateJsonObject(updatedJsonObject) {
    if (updatedJsonObject) {
        var jsonString = JSON.stringify(updatedJsonObject);
        _fs2.default.writeFile(dictionaryPath, jsonString, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }

            console.log("Dictionary Updated");
        });
    }
}