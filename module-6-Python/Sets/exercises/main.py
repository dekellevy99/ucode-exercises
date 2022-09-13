import json


with open("nyc_jobs.json") as jobs_file:
    jobs_data = json.load(jobs_file)


def find_jobs_by_word(word):
    return [job for job in jobs_data if word in job["job_description"]]


def junior_jobs_brooklin(): 
    entry_level_agencies = set([job["agency"] for job in jobs_data if job["career_level"] == "Entry-Level"])
    brooklin_jobs = set([job["agency"] for job in jobs_data if "Broadway" in job["work_location"]])
    return entry_level_agencies & brooklin_jobs


def max_hour_salery():
    not_entry_level_jobs = set([job["job_id"] for job in jobs_data if job["career_level"] != "Entry-Level"])
    hourly_jobs = set([job["job_id"] for job in jobs_data if job["salary_frequency"] == "Hourly"])
    not_entry_level_hourly_jobs = not_entry_level_jobs & hourly_jobs
    salaries = [job["salary_range_to"] for job in jobs_data if job["job_id"] in not_entry_level_hourly_jobs]
    return max(salaries)

    # not_entry_level_hourly_jobs = [job["salary_range_to"] for job in jobs_data if job["salary_frequency"] == "Hourly"
    #                                                                                  and job["career_level"] != "Entry-Level"]
    # return max(not_entry_level_hourly_jobs)



def salaries_in_range(min, max):
    is_in_range = lambda job: float(job["salary_range_from"]) >= min and float(job["salary_range_to"]) <= max

    agencies = set([job["agency"] for job in jobs_data if is_in_range(job)])
    return agencies




