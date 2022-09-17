import json
import csv


def convert_to_json(data_file):
    json_data = []
    for data in data_file:
        item, price = data.split(" - ")
        json_data.append({item: price})
    
    with open("data_in_json.json", "w") as json_file:
        json.dump(json_data, json_file)


def convert_to_csv(data_file):
    with open("data_in_csv.csv", "w") as csv_file:
        csv_writer = csv.writer(csv_file)
        csv_writer.writerow(["ITEM", "PRICE"])
        for data in data_file:
            item, price = data.split(" - ")
            csv_writer.writerow([item, price])


file = open("data.txt")
data_file = file.read().split("\n")
convert_to_json(data_file)
convert_to_csv(data_file)