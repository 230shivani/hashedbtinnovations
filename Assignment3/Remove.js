let states = ["Andhra Pradesh", "Uttar Pradesh", "Odisha", "Karnataka", "Maharashtra", "Assam", "Rajasthan"];

let filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log(filteredStates);
