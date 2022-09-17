import csv
import json

counter_reports = 1



def create_content_from_row(row):
    content = ""




def convert_csv_file(csv_file, dest_file):
    csv_reader = csv.reader(csv_file)
    for row in csv_reader:
        content = create_content_from_row(row)
        dest_file.write(content)


def convert_json_file(json_file, dest_file):
    pass


with open("final.txt", "w") as final_file:
    test_reports_csv = open("test_reports.csv")
    test_reports_json = open("test_reports.json")
    convert_csv_file(test_reports_csv, final_file)
    convert_json_file(test_reports_json, final_file)


