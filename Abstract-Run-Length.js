class AbstractRunLength {

    constructor(originalData) {

        this._originalData = originalData;
        this._output = '';

    }

    _isEmptyString() {
        this._originalData === '' ? '' : false
    }
}

export default AbstractRunLength;