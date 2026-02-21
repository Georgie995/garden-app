// Simple browser-based garden advice program.
//
// This script asks the user which season it is and what type of plant
// they are interested in, then shows basic gardening advice based on
// those choices. The logic is stored in a function and uses objects
// so that it can be extended more easily.

/**
 * Generate gardening advice for a given season and plant type.
 * @param {string} season - The current season (spring, summer, autumn, winter).
 * @param {string} plantType - The plant type (flower or vegetable).
 * @returns {string} A short advice message.
 */
function generateAdvice(season, plantType) {
    // Normalise to lower case to make comparisons easier.
    const normalisedSeason = season.trim().toLowerCase();
    const normalisedPlantType = plantType.trim().toLowerCase();

    // Advice based on the season.
    const seasonAdvice = {
        spring: "Spring is a good time to plant new seeds and tidy up beds.",
        summer: "Water your plants regularly and provide some shade during hot days.",
        autumn: "Clear fallen leaves and prepare the soil for winter.",
        winter: "Protect your plants from frost with covers or bring pots indoors.",
    };

    // Advice based on the plant type.
    const plantAdvice = {
        flower: "Use fertiliser to encourage strong blooms.",
        vegetable: "Keep an eye out for pests and harvest vegetables regularly.",
    };

    let advice = "";

    // Look up advice for the given season, or fall back to a generic message.
    advice += (seasonAdvice[normalisedSeason] || "No specific advice for this season.") + "\n";

    // Look up advice for the given plant type, or fall back to a generic message.
    advice += plantAdvice[normalisedPlantType] || "No specific advice for this type of plant.";

    return advice;
}

// Ask the user for input using prompt dialogs.
const userSeason = prompt("Enter the current season (spring/summer/autumn/winter):", "summer");
const userPlantType = prompt("Enter the plant type (flower/vegetable):", "flower");

// Generate and display the advice.
const adviceMessage = generateAdvice(userSeason || "", userPlantType || "");

console.log("Garden advice:");
console.log(adviceMessage);
alert(adviceMessage);
