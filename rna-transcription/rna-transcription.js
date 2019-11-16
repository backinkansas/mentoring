class RNA {
    constructor(DNA) {
        this.DNA = DNA,
        this.DATA_RNA = {
            'G': 'C',
            'C': 'G',
            'T': 'A',
            'A': 'U',
        },
        this.SERIALIZED_DNA_KEYS = this.createIterableKeys(),
        this.formatedInputDNA = this.createDNAarray();
    }

    createIterableKeys() {
        return Object.keys(this.DATA_RNA);
    }    

    createDNAarray() {
        return Array.from(this.DNA);
    }

    validatesInputDNA() {
        return this.formatedInputDNA.find(nucleotide => {
            return !this.SERIALIZED_DNA_KEYS.includes(nucleotide);
        });
    }

    invalid() {    
        const invalidRNA = this.validatesInputDNA();

        if (invalidRNA === undefined) {
            return false;
        }
        
        return true;
    }

    createRNA() {
        if (this.DNA === '') {
            return '';
        }

        if (this.invalid()) {
            throw 'Invalid input DNA.';
        }
        
        return this.formatedInputDNA.map(nucleotide => this.DATA_RNA[nucleotide]).join('');
    }
}

module.exports = {
    toRna(DNA) {
        const newRNA = new RNA(DNA);
        return newRNA.createRNA();
    }
}