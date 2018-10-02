import AbstractRunLength from './Abstract-Run-Length';

class Encoder extends AbstractRunLength {

    constructor(originalData) {
        super(originalData);
        this._serialCharacters = Array.from(this._originalData);
    }

     _notEncodable() {
        let diffChars = [];

        for (let i = 1; i <= this._serialCharacters.length; i++) {
            if (this._serialCharacters[i] === this._serialCharacters[i - 1]) {
                diffChars.push(1);
            }
            diffChars.push(this._serialCharacters[i]);
        }

        if (diffChars.includes(1)) {
            return false;
        }
        return this._originalData;
    }

    toEncode() { 
        this._isEmptyString();
        this._notEncodable();

        let encodableData = this._originalData;
        this._output = '';

        while (encodableData.length > 0) {
            let currentChar = new RegExp(encodableData[0] + '+');
            let chars = encodableData.match(currentChar)[0];
            let numberCode = chars.length;

            if (numberCode === 1) {
                this._output = this._output + chars[0];
            } else {
                this._output = this._output + numberCode + chars[0];
            }

            encodableData = encodableData.replace(encodableData.match(currentChar)[0], '');
        }
        return this._output;
    }
}

export default Encoder;