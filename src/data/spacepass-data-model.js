// SPACEPASS CLASS FOR NEW ACCOUNT CREATION

export default class Spacepass {
    passNum = "AAA000000";
    category = "D";
    issueDate = Date.now();
    expiryDate = Date.now();
    namePrint = "<<<<<";
    serialNum = "<<<<<";
    
    constructor(name, surname, race, issuePlace = "EAS", status = "initial") {
        this.name = name;
        this.surname = surname;
        this.race = race;
        this.issuePlace = issuePlace;
        this.status = status;
    }

    generateNumber() {
        
    }

    determineCategory() {
        switch(this.race) {
            case '':
                break;
            default: // race == humanoid
                this.category = "A+";
        }
    }

    determineExpiry() {
    
    }

    // Private method to be used by 'generateNamePrint' and 'generateSerial' methods
    #determineFilling (fillingReps, actualStringLength) {
        const symbolRepetition = fillingReps - actualStringLength;
        const symbolArray = [];
        for (let i=0; i < symbolRepetition; i++) {
            symbolArray.push("<")
        }
        return symbolArray.join("");
    }

    generateNamePrint() {
        const printData = `P<SF${this.surname}<${this.name}`;
        const printFilling = this.#determineFilling(53, printData.length);

        this.namePrint = printData + printFilling;
    }
    
    generateSerial() {

    }
}