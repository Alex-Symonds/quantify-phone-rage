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

export function cssClassTidying(
    { passedIn, classesToAdd, conditionalClasses }
    : { passedIn? : string[], classesToAdd? : string[], conditionalClasses? : (string|undefined)[] }
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