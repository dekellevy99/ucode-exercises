class JobPosition{
    private publishedDate: string;
    private title: string;
    private isRemote: boolean;
    private description: string;
    private location: string;
    private salary: number;
    private requiredYearsExperience: number;

    public static Builder = class{
        private publishedDate: string;
        private title: string;
        private isRemote: boolean;

        private description: string = "-";
        private location: string = "Tel Aviv";
        private salary: number = 0;
        private requiredYearsExperience: number = -1;

        public constructor(publishedDate: string, title: string, isRemote: boolean) {
            this.publishedDate = publishedDate;
            this.title = title;
            this.isRemote = isRemote
        }

        setDescription(description: string){
            this.description = description;
            return this;
        }

        setLocation(location: string){
            this.location = location;
            return this;
        }

        setSalary(salary: number){
            this.salary = salary;
            return this;
        }

        setRequiredYearsExperience(years: number){
            this.requiredYearsExperience = years;
            return this;
        }

        build(): JobPosition{
            return new JobPosition(this)
        }
    }

    private constructor(builder: any){
        this.publishedDate = builder.publishedDate;
        this.title = builder.title;
        this.isRemote = builder.isRemote;
        this.description = builder.description;
        this.location = builder.location;
        this.salary = builder.salary;
        this.requiredYearsExperience = builder.requiredYearsExperience;
    }
}

const jobPosition = new JobPosition.Builder('10/04/88', 'A Creative Title', true)
                            .setDescription("very good description")
                            .setLocation("Jerusalem")
                            .setRequiredYearsExperience(5)
                            .setSalary(2500)
console.log(jobPosition);