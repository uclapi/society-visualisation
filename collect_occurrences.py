import json
import re
import operator
import ciso8601

with open('bookings.json') as f:
    json_data = json.loads(f.read())

bookings = json_data["bookings"]


def extract_society_name(name):
    pattern = ".*- UCLU (.*)"
    match = re.match(pattern, name)
    if match:
        return match.groups()[0]
    else:
        return None


def number_of_bookings():
    societies = {}

    for booking in bookings:
        society_name = extract_society_name(booking["contact"])
        if society_name:
            if society_name in societies.keys():
                societies[society_name] += 1
            else:
                societies[society_name] = 1
        else:
            continue

    sorted_societies = sorted(
        societies.items(),
        key=operator.itemgetter(1),
        reverse=True
    )
    for society in sorted_societies:
        print(society[0], society[1])


def bookings_over_time():
    dates = {}

    for booking in bookings:
        start = ciso8601.parse_datetime(booking["start_time"])
        formatted_date = "{year}-{month}-{day}".format(
            year=start.year,
            month=str(start.month).zfill(2),
            day=str(start.day).zfill(2)
        )
        if formatted_date in dates.keys():
            dates[formatted_date] += 1
        else:
            dates[formatted_date] = 1

    with open("bookings_over_time.json", "w") as f:
        f.write(json.dumps({
            "rows": [[key, value] for key, value in dates.items()]
        }))


bookings_over_time()
