// Code your solution here
function findMatching (names, string) {
    return names.filter(function(name){
        return name.toLowerCase() === string.toLowerCase();
    })
}
function fuzzyMatch(names, string) {
    return names.filter(function(name) {
        return name[0].slice(0, 2) === string[0].slice(0, 2);
    })
}
function matchName(drivers, string) {
    return drivers.filter(function(drivers) {
      return drivers.name === string;
    }
)} 