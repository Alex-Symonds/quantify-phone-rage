/**
 * Helper functions for comboboxes
*/

import { T_OptionId, T_OptionData } from "./types";

/** 
 * Converts an array of objects with an optionId key into an array of optionIDs (strings).
 * Returns arrays of strings as-is, making no changes.
 * Use it when you don't necessarily know how the options were formatted to start with,
 * but now you need a list of IDs.
 * Note: doesn't check the strings for uniqueness or suitability for use in HTML attributes
 */

/**
 * Converts an array of options data into an array of option IDs.
 * Options data as an object array = objectIds are extracted into an array.
 * Options data as a string array = strings are assumed to work as object IDs
 * @param options - array describing options or selected options
 * @returns {string[Array]}- array of optionIds
 */
export function getOptionIds(options : string[] | T_OptionId[]) : string[]{
    return options === undefined || options.length === 0
        ? []
        : options.every(option => typeof option === "string")
            ? options
            : options.every(option => "optionId" in option)
                ? options.map(ele  => ele.optionId)
                : [];
}

/**
 * Converts a string into OptionData format; leaves existing OptionData alone.
 * @param option - Either a string or a T_OptionData
 * @returns - T_OptionData
 */
export function getOptionDataObject(option : string | T_OptionData){
    if(typeof option !== 'string' && 'optionId' in option && 'displayText' in option){
        return option;
    }
    return {
        displayText: option,
        optionId: option.replaceAll(" ", ""),
    }
}