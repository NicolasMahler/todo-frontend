export const stringify = function(variableToString) {
    if (variableToString !== null) {
        variableToString = `"${variableToString}"`; 
    }
    return variableToString;
}