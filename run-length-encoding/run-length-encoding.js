import Encoder from './Encoder';
import Decoder from './Decoder';

module.exports = {

    encode(data) {
        const toRun = new Encoder(data);
        return toRun.toEncode();
    },

    decode(data) {
        const toRun = new Decoder(data);
        return toRun.toDecode();
    }

}