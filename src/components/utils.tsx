export function stylesArrToString(arrayOfStyles : string[]){
    return arrayOfStyles && typeof arrayOfStyles
        ? arrayOfStyles.reduce((acc, style) => {
            return acc = `${acc} ${style}`;
        }, "")
        : "";
}

// export function addOneCSS(
//     { argStyles, selectedStyle } 
//     : { argStyles : string[] | undefined, selectedStyle : string | undefined }
// ) : string[] {

//     const argStylesArray : string[] = Array.isArray(argStyles)
//         ? structuredClone(argStyles)
//         : [];

//     if (selectedStyle !== undefined){
//         argStylesArray.push(selectedStyle);
//     }

//     return argStylesArray;
// }


interface I_MergeStyleArrays {
    passedIn? : string[], 
    classesToAdd? : string[], 
    conditionalClasses? : (string|undefined)[]
}

export function mergeStyleArraysIntoString(
    { passedIn, classesToAdd, conditionalClasses }
    : I_MergeStyleArrays
){
    const mergedArray = mergeStyleArrays({ passedIn, classesToAdd, conditionalClasses });
    return stylesArrToString(mergedArray);
}


export function mergeStyleArrays(
    { passedIn, classesToAdd, conditionalClasses }
    : I_MergeStyleArrays
){
    const argInToArr = getArrayEvenIfUndefined(passedIn);
    const strArrToArr = getArrayEvenIfUndefined(classesToAdd);
    const strUndefToStr = conditionalClasses === undefined 
        ? []
        : conditionalClasses.filter(ele => ele !== undefined);
    return argInToArr.concat(strArrToArr).concat(strUndefToStr);
}

function getArrayEvenIfUndefined(arrOrUndefined : any[] | undefined) : any[] {
    return arrOrUndefined && Array.isArray(arrOrUndefined)
        ? arrOrUndefined
        : []
    ;
}


export function formatIntegerForDisplay(number : number) : string {
    /* Goal: 
        * Keep the number to 3 digits
        * 1M+ = "1M+"
        * Hundreds of K = in thousands, zero decimals
        * Tens of K = in thousands, with one decimal
        * Units of K = in thousands, with two decimals
        * Below 1k = display number
    */

    const MIN_K_OF_K = Math.pow(10, 6);
    const MIN_HUNDREDS_OF_K = Math.pow(10, 5);
    const MIN_TENS_OF_K = Math.pow(10, 4);
    const MIN_UNITS_OF_K = Math.pow(10, 3);

    const isNegative = number < 0;
    number = Math.abs(number);

    const signPrefix = isNegative ? "-" : "";
    const excessPrefix = number <= MIN_K_OF_K
        ? ""
        : isNegative
            ? "<"
            : ">"
    ;

    const unsignedStr : string = number < MIN_UNITS_OF_K
        ? number.toLocaleString()
        : number < MIN_TENS_OF_K
            ? `${ (number / 1000).toFixed(2) }k`
            : number < MIN_HUNDREDS_OF_K
                ? `${ (number / 1000).toFixed(1) }k`
                : number < MIN_K_OF_K
                    ? `${ Math.round(number / 1000) }k`
                    : "1M"
    ;

    return `${excessPrefix}${signPrefix}${unsignedStr}`;
}


interface I_GetCSS{
    key? : string,
    styles : { [key: string]: string },
    fallback : string
}

export function getCSS({ 
    key, styles, fallback 
} : I_GetCSS){

    return key && key in styles
        ? styles[key]
        : fallback
    ;
}


export function getNumOptions(
    options : any[] | null | undefined 
    ) : number {

    return options ? options.length : 0;
}