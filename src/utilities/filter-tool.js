function filterSearch(queryTerm, sourceData, dataSection=null) {
    let filterResults = [];
    
    if (Array.isArray(sourceData) && dataSection) {
        const extractedData = sourceData.map((item, index) => {
            return {id: index+1, findings: item[dataSection].join(" ")};
        })

        extractedData.forEach((el) => {
            if (el.findings.includes(queryTerm)) filterResults.push(el.id);
        })
    } else if (Array.isArray(sourceData)) {
        let isFound = false;
        sourceData.forEach((item) => {
            const trimmedItem = { ...item, features: [], intro: "", description: "", promotional_catch: "" }
            const stringifiedItem = JSON.stringify(trimmedItem).toLocaleLowerCase();
            if (stringifiedItem.includes(queryTerm)) {
                filterResults.push(item.id);
                isFound = true;
            }
        })

        if (!isFound) filterResults.push(null);
    }

    return filterResults;
}

export class FilterTool {
    sourceData = null;
    sourceDataType = null;
    filterResults = [];

    constructor(sourceData) {
        this.sourceData = sourceData;
        this.sourceDataType = this.sourceData instanceof Array ? "array" : typeof this.sourceData;
    }

    query(term) {
        try {
            this.init();
        } catch(err) {
            console.log(err);
        }
    }

    reset() {
        this.filterResults = [];
    }

    static declareVoidSearch() {
        this.filterResults = [null];
    }

    static init() {
        if (this.sourceDataType !== 'string') {
            throw new Error("Data provided is not suitable for filtering!");
        }
        return true;
    }
}

export class ArrayFilterTool extends FilterTool {
    constructor(sourceData) {
        super(sourceData);
    }

    query(term) {
        try {
            this.init();
            extractedData = sourceData.map((el) => {
                const stringifiedEl = JSON.stringify(el);
                if (stringifiedEl.includes(term)) return el;
            })
        } catch(err) {
            console.log(err);
        }
    }

    static init() {
        if (this.sourceDataType !== 'array') {
            throw new Error("Data provided is not suitable for filtering!");
        }
        return true;
    }
}

export class ObjectFilterTool extends FilterTool {
    skippedKeys = [];

    constructor(sourceData, skippedKeys) {
        super(sourceData);
        this.skippedKeys = skippedKeys;
    }

    query(term) {
        try {
            this.init();
        } catch(err) {
            console.log(err);
        }
    }

    static trimObj() {
        
    }

    static init() {
        if (this.sourceDataType !== 'object') {
            throw new Error("Data provided is not suitable for filtering!");
        }
        return true;
    }
}