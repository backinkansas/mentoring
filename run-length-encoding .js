class Encoding {
    constructor(originalData) {
        this._originalData = originalData;
        this._serialCharacters = Array.from(this._originalData);
        this._tool = '';
        this._output = '';
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

    _isPrintable(item) {
        return isNaN(Number(item)) || /\s/.test(item);
    }

    _padChars(length, content) {
        this._output = this._output + this._tool.padEnd(length, content);
    }

    _isEmptyString() {
        this._originalData === '' ? '' : false
    }

    toEncode() { 

        this._isEmptyString();
        this._notEncodable();

        let encodableData = this._originalData;
        let output = '';

        while (encodableData.length > 0) {
            let currentChar = new RegExp(encodableData[0] + '+');
            let chars = encodableData.match(currentChar);
            let numberCode = chars[0].length;

            if (numberCode === 1) {
                output = output + chars[0][0];
            } else {
                output = output + numberCode + chars[0][0];
            }

            encodableData = encodableData.replace(encodableData.match(currentChar)[0], '');
        }

        return output;

    }

    toDecode() {

        this._isEmptyString();

        if (!(/\d/.test(this._originalData))) {
            return this._originalData;
        }

        let decodableData = this._originalData.split(/(\d*)/).filter(item => item !== '');

        decodableData.forEach((item, index) => {
            
            this._isPrintable(item) ? this._output = this._output + item : this._padChars(item - 1, decodableData[index + 1]);
            
        })

        return this._output;
    }
}

module.exports = {
    encode(data) {
        const toRun = new Encoding(data);
        return toRun.toEncode();
    },
    decode(data) {
        const toRun = new Encoding(data);
        return toRun.toDecode();
    }
}