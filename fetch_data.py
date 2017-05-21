import requests
import os
import json

from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

token = os.environ["UCLAPI_TOKEN"]

params = {
    "token": token,
    "results_per_page": "1000",
    "contact": "Society"
}

req = requests.get(
    "https://uclapi.com/roombookings/bookings",
    params=params
)
resp = req.json()

bookings = resp["bookings"]

next_page = resp["next_page_exists"]
counter = 0
while next_page:
    page_token = resp["page_token"]
    params = {
        "token": token,
        "page_token": page_token
    }
    pagination_req = requests.get(
        "https://uclapi.com/roombookings/bookings",
        params=params
    )
    pagination_resp = pagination_req.json()
    bookings += pagination_resp["bookings"]
    if pagination_resp["next_page_exists"] and counter < 11:
        next_page = True
        counter += 1
    else:
        next_page = False

with open('bookings.json', 'w') as f:
    f.write(
        json.dumps({
            "bookings": bookings
        }, sort_keys=True, indent=4)
    )
