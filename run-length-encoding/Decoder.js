import AbstractRunLength from './Abstract-Run-Length'

class Decoder extends AbstractRunLength {

    constructor(originalData) {
        super(originalData);
        this._tool = '';
    }

    _isDecodable() {
        return (/\d/.test(this._originalData));
    }

    _isPrintable(item) {
        return isNaN(Number(item)) || /\s/.test(item);
    }

    _padChars(length, content) {
        return this._output = this._output + this._tool.padEnd(length, content);
    }

    _serializeAndValidateChars() {
        return this._originalData.split(/(\d*)/).filter(item => item !== '');
    }

    toDecode() {
        this._isEmptyString();

        if (!this._isDecodable) {
            return this._originalData;
        }

        let decodableData = this._serializeAndValidateChars();

        decodableData.forEach((item, index) => {
            this._isPrintable(item) ? this._output = this._output + item : this._padChars(item - 1, decodableData[index + 1]);
        })

        return this._output;
    }
}

export default Decoder;