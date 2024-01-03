export interface IJob {
    Id: string
    Title: string
    Company_Name: string
    Time : String
    City : String
    Age: string
    Sexual: string
    Probation_Time: string
    Work_Way: string
    Right: string
    Job: string
    Place: string
    Number_Employee: string
    Experience: string
    Level: string
    Salary: string
    Education: string
    Description: string
    Requirement: string
    Deadline: string
    Source_Picture: string
}
export interface IJobUpdate {
    Id?: string
    Title?: string
    Company_Name?: string
    Time?: String
    City?: String
    Age?: string
    Sexual?: string
    Probation_Time?: string
    Work_Way?: string
    Right?: string
    Job?: string
    Place?: string
    Number_Employee?: string
    Experience?: string
    Level?: string
    Salary?: string
    Education?: string
    Description?: string
    Requirement?: string
    Deadline?: string
    Source_Picture?: string
}
export interface IPronvince {
    name: string
    code: number
}
export interface IPagination {
    data: IJob[],
    totalPages: number,
    currentPage: number,
    pageSize: number
}