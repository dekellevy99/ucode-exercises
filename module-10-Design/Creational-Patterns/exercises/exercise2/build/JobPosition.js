"use strict";
class JobPosition {
    constructor(builder) {
        this.publishedDate = builder.publishedDate;
        this.title = builder.title;
        this.isRemote = builder.isRemote;
        this.description = builder.description;
        this.location = builder.location;
        this.salary = builder.salary;
        this.requiredYearsExperience = builder.requiredYearsExperience;
    }
}
JobPosition.Builder = class {
    constructor(publishedDate, title, isRemote) {
        this.description = "-";
        this.location = "Tel Aviv";
        this.salary = 0;
        this.requiredYearsExperience = -1;
        this.publishedDate = publishedDate;
        this.title = title;
        this.isRemote = isRemote;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setLocation(location) {
        this.location = location;
        return this;
    }
    setSalary(salary) {
        this.salary = salary;
        return this;
    }
    setRequiredYearsExperience(years) {
        this.requiredYearsExperience = years;
        return this;
    }
    build() {
        return new JobPosition(this);
    }
};
const jobPosition = new JobPosition.Builder('10/04/88', 'A Creative Title', true)
    .setDescription("very good description")
    .setLocation("Jerusalem")
    .setRequiredYearsExperience(5)
    .setSalary(2500);
console.log(jobPosition);
