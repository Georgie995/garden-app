"""Simple command-line garden advice program.

This script asks the user for a season and plant type, then prints
basic gardening advice based on those choices.
"""

def get_user_choices():
    """Prompt the user for a season and plant type and normalise the input."""
    season = input("Enter the current season (spring/summer/autumn/winter): ").strip().lower()
    plant_type = input("Enter the plant type (flower/vegetable): ").strip().lower()
    return season, plant_type


def generate_advice(season, plant_type):
    """Generate gardening advice based on the given season and plant type.

    The advice for seasons and plant types is stored in dictionaries so that
    it is easy to extend the program later (for example, to add more seasons
    or more plant types).
    """
    # Advice based on the season
    season_advice = {
        "spring": "Spring is a good time to plant new seeds and tidy up beds.",
        "summer": "Water your plants regularly and provide some shade during hot days.",
        "autumn": "Clear fallen leaves and prepare the soil for winter.",
        "winter": "Protect your plants from frost with covers or bring pots indoors.",
    }

    # Advice based on the plant type
    plant_advice = {
        "flower": "Use fertiliser to encourage strong blooms.",
        "vegetable": "Keep an eye out for pests and harvest regularly.",
    }

    advice_lines = []

    # Look up advice for the given season, or fall back to a generic message.
    advice_lines.append(season_advice.get(season, "No specific advice for this season."))

    # Look up advice for the given plant type, or fall back to a generic message.
    advice_lines.append(plant_advice.get(plant_type, "No specific advice for this type of plant."))

    return "\n".join(advice_lines)


def main():
    """Entry point for the program."""
    season, plant_type = get_user_choices()
    advice = generate_advice(season, plant_type)
    print("\nGarden advice:")
    print(advice)


if __name__ == "__main__":
    main()
