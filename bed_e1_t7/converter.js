export const milesToKilometers = miles => miles * 1.60934;   //export in order to use in file index.jf

export const kilometersToMiles = (kilometers) => {
    return kilometers / 1.60934
};

export const converter = {          //package 2 functions to converter, using in server.js file
    milesToKilometers,
    kilometersToMiles
};