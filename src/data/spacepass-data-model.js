import { add } from 'date-fns';
import { shuffle } from 'lodash';
import { pickRandomFromArray } from "../utilities/utils";

// SPACEPASS CLASS FOR NEW ACCOUNT CREATION

export default class Spacepass {
    passNum = "AAA000000";
    category = "D";
    authority = "SF / EAS";
    issueDate = add(Date.now(), { years: 100 });
    expiryDate = this.issueDate;
    namePrint = "<<<<<";
    serialNum = "<<<<<";
    picture = "profile-default";
    
    constructor(name, surname, avatar, race, issuePlace = "EAS", status = "initial") {
        this.name = name;
        this.surname = surname;
        this.picture = avatar;
        this.race = race;
        this.issuePlace = issuePlace;
        this.status = status;
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

    // Private method to be used by 'generatePassNum' and 'generateSerial' methods
    #generateRandomChar(repertoire) {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        if (repertoire === 'letters') return pickRandomFromArray(letters);
        if (repertoire === 'numbers') return pickRandomFromArray(numbers);
        if (repertoire === 'mixed') return pickRandomFromArray(shuffle(letters.concat(numbers)));
        throw new Error('Only characters allowed either letters or numbers!');
    }

    generatePassNum() {
        const letterSection = [];
        const numericSection = [];

        for (let i=0; i < 3; i++) {
            letterSection.push(this.#generateRandomChar('letters'));
        }

        for (let i=0; i < 6; i++) {
            numericSection.push(this.#generateRandomChar('numbers'));
        }

        this.passNum = letterSection.concat(numericSection);
    }

    determineCategory() {
        switch(this.race) {
            case "big_headed_gray":
            case "leonian":
                this.category = "B1";
                this.expiryDate = add(this.issueDate, { years: 4 });
                break;
            case "green_little_man":
                this.category = "B2";
                this.expiryDate = add(this.issueDate, { years: 4 });
            case "amoebian":
            case "insectoid":
                this.category = "C";
                this.expiryDate = add(this.issueDate, { years: 2 });
            case "aetherian":
            case "cephalopodian":
                this.category = "A";
                this.expiryDate = add(this.issueDate, { years: 5 });
            case "polymorphic":
            case "reptilian":
                this.category = "D";
                this.expiryDate = add(this.issueDate, { years: 1 });
            default: // race == humanoid
                this.category = "A+";
                this.expiryDate = "N/A"
        }
    }

    determineAuthority() {
        this.authority = `SF / ${this.issuePlace}`;
    }

    generateNamePrint() {
        const printData = `P<SF${this.surname}<${this.name}`;
        const printFilling = this.#determineFilling(53, printData.length);

        this.namePrint = printData + printFilling;
    }
    
    generateSerial() {
        const serialCore = [];
        for (let i=0; i < 17; i++) {
            serialCore.push(this.#generateRandomChar('mixed'));
        }

        this.serialNum = `${this.passNum}SF${serialCore}${this.#determineFilling(11, 0)}${this.issuePlace}${this.#determineFilling(13, 0)}`;
    }
}