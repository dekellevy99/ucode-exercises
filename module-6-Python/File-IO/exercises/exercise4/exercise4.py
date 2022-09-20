import csv
import json

counter_reports = 1


def create_content_from_row(row):
    headers = ["Report", "Number", "Time", "Owner", "Category", "Status"]
    content = "==================================\n"
    for index in range(len(headers)):
        if index == 4:
            sub_category = row[index + 1] if row[index + 1] != "" else "**"
            content += headers[index] + ": " + row[index] + " - " + sub_category
        elif index == 5:
            status = "PASS" if row[index + 1] == "1" else "FAIL"
            content += status
        else:
            content += headers[index] + ": " + row[index]
        content += "\n"

    return content


def convert_csv_file(csv_file, dest_file):
    global counter_reports
    csv_reader = csv.reader(csv_file)
    next(csv_file)
    for row in csv_reader:
        row.insert(1, str(counter_reports))
        report_content = create_content_from_row(row)
        dest_file.write(report_content)
        counter_reports += 1


def create_content_from_dict(report):
    headers = ["Report", "Number", "Time", "Owner", "Category", "Status"]
    content = "==================================\n"
    content += headers[0] + ": " + report["name"] + "\n"
    content += headers[1] + ": " + report["number"] + "\n"
    content += headers[2] + ": " + report["time"] + "\n"
    content += headers[3] + ": " + report["owner"] + "\n"
    sub_category = report["sub-cat"] if report["sub-cat"] != "" else "**"
    content += headers[4] + ": " + report["cat"] + " - " + sub_category + "\n"
    status = "Pass" if report["status"] == 1 else "Fail"
    content += headers[5] + ": " + status + "\n"
    return content


def convert_json_file(json_file, dest_file):
    global counter_reports
    reports = json.load(json_file)
    for report in reports:
        report["number"] = str(counter_reports)
        report_content = create_content_from_dict(report)
        dest_file.write(report_content)
        counter_reports += 1


with open("final.txt", "w") as final_file:
    test_reports_csv = open("test_reports.csv")
    convert_csv_file(test_reports_csv, final_file)
    test_reports_json = open("test_reports.json")
    convert_json_file(test_reports_json, final_file)