import json

paths = ["aoqu.json", "taiqu.json", "gangqu.json", "jiaqu.json", "meiqu.json", "qita.json", "xinqu.json", "yingqu.json", "zhongqu.json", "riqu.json"]

for json_file_path in paths:
    # Read the JSON file
    with open(json_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)

    # Extract all headings and convert them to lowercase
    headings = [list(item.keys())[0] for item in data]

    # Sort headings alphabetically in lowercase
    sorted_headings_lower = sorted(headings, key=str.lower)

    # Rearrange the items based on the sorted headings while retaining the original case
    rearranged_data = [{heading: next(iter(item.values()))} for heading in sorted_headings_lower for item in data if list(item.keys())[0].lower() == heading.lower()]

    # Rewrite the JSON file with rearranged items
    with open(json_file_path, 'w', encoding='utf-8') as file:
        json.dump(rearranged_data, file, indent=4, ensure_ascii=False)
