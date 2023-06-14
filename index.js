
function stringify(json) {
    if (typeof json !== 'object') throw new Error('Please Provide Valid JSON Object')
    console.log("Original Stringify", JSON.stringify(json).length)
    let keys = ""
    let values = ""
    function jsonToStr(obj) {
        const isArray = Array.isArray(obj);

        if (!isArray) {
            values += '{'
            keys += '{'
        } else {
            keys += '['
            values += '['
        }

        for (const index in obj) {
            if (!isArray) keys += index + ";"

            switch(typeof obj[index]) {
                case "string":
                    values += '"' + obj[index] + '";'
                    break;
                case "number":
                    values += obj[index].toString() + ';'
                    break;
                case "bigint":
                    values += obj[index].toString() + ';'
                    break;
                case "boolean":
                    values += (obj[index] ? "T" : "F") + ';'
                    break;
                case "undefined":
                    values += "U;"
                    break;
                case "object":
                    if (obj[index] === null) {
                        values += "N;"
                    } else {
                        jsonToStr(obj[index])
                    }
                    break;
                default:       
            }
            if(!isArray) keys += index + ";"
        }

        if (!isArray) {
            values += '}'
            keys += '}'
        } else {
            values += ']'
            keys += ']'
        }
    }

    jsonToStr(json)
    console.log(values)
    console.log(keys)

}

function parse(str) {
    
}

export {stringify, parse}