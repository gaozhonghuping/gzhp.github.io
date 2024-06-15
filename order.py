import json

paths = ["aoqu.json", "taiqu.json", "gangqu.json", "jiaqu.json", "meiqu.json", "qita.json", "xinqu.json", "yingqu.json", "zhongqu.json", "riqu.json", "maqu.json"]

character_to_remove = '·'

for json_file_path in paths:
    # Read the JSON file
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)

    # Extract all headings and convert them to lowercase
    headings = [list(item.keys())[0] for item in data]

    # Sort headings alphabetically in lowercase
    sorted_headings_lower = sorted(headings, key=str.lower)

    rearranged_data = []
    for heading in sorted_headings_lower:
        for item in data:
            if list(item.keys())[0].lower() == heading.lower():
                original_value = next(iter(item.values()))
                if isinstance(original_value, list):
                    cleaned_value = [v.replace(character_to_remove, '') if isinstance(
                        v, str) else v for v in original_value]
                elif isinstance(original_value, str):
                    cleaned_value = original_value.replace(
                        character_to_remove, '')
                else:
                    cleaned_value = original_value
                rearranged_data.append({heading: cleaned_value})

    # Rewrite the JSON file with rearranged items
    with open(json_file_path, 'w', encoding='utf-8') as file:
        json.dump(rearranged_data, file, indent=4, ensure_ascii=False)
