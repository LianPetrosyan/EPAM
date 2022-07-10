function times (array: Array<number>, howManyTimes?: number){
    let result : Array<number> = [];
    if(howManyTimes === undefined){
        howManyTimes = 2
    }
    for(let i = 0 ; i < howManyTimes ; i++){
        for(let j = 0 ; j < array.length ; j++){
            result.push(array[j])
        }
    }return result
}


function logger ( data : Array<string>, serviceInfo?: {serviceName: string , serviceId: number}){
    if(serviceInfo === undefined){
        serviceInfo = {
            serviceName: "global",
            serviceId: 1,
        }
    }
    let obj = {}
    for(let index = 0 ; index < data.length ; index++){
        obj[serviceInfo.serviceId + "-" + index]  = "["+[serviceInfo.serviceName]+"] " + data[index]
    }
    return obj
}

console.log(logger(['Wrong email', 'Wrong password', 'Success login'], {serviceName: 'auth_service', serviceId: 3}))
console.log(logger(['Fatal error', 'Data corrupted']))


function everyNth (array: Array<number>, nTh?: number){
    if(nTh === undefined){
        return array
    }
    let result = []
    for(let i = nTh-1 ; i < array.length ; array = array.slice(i+1)){
        result.push(array[i])
    }
    return result
}



function getDaysToNewYear(date : string | Date ){
    let newYear = new Date(2022, 12, 31)
    if(typeof date === "string"){
        // @ts-ignore
        date = new Date( date.slice(6), date.slice(3,5), date.slice(0,2) )
    }
    let difference = (newYear.getTime() - date.getTime())/(1000 * 3600 * 24)
    return difference
}

function lastToFirst(str: string){
    let result :string = ""
    for(let i = str.length-1 ; i >= 0; i--){
        result += str[i]
    }return result
}

function group (arr: Array<Object>){
    let result = {}
    let employeesResult = []
    let contractorResult = []
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].type === "EMPLOYEE"){
            employeesResult.push(arr[i])
        }
        else {
            contractorResult.push(arr[i])
        }
    }
    result.employees = employeesResult
    result.contractor = contractorResult
    return result
}
const users = [
    {name: 'Bill', login: 'bill01', surname: 'Jobs', type: 'EMPLOYEE', address: {officeId: 123, placeId: 1222}},
    {name: 'Fill', login: 'fill007', surname: 'Filler', type: 'CONTRACTOR', contractorCompanyName: 'Microsoft'},
    {name: 'Alex', login: 'alex777', type: 'EMPLOYEE', address: {officeId: 222, placeId: 333}},
    {name: 'John', login: 'coolJohn', type: 'CONTRACTOR', contractorCompanyName: 'Apple'},
];





interface BaseVehicle  {
    name: string;
    vendorName: string;
    fuelLevel: number;
    fuelConsumptionStart(): void;
    fuelConsumptionEnd(): void;
    refueling(): void
}

class Cars implements BaseVehicle{
    constructor(public name: string, public vendorName: string, public tankCapacity: number ,public fuelLevel: number, public counter?: number) {
        this.name = name
        this.vendorName = vendorName
        this.tankCapacity = tankCapacity
        this.fuelLevel = fuelLevel
    }
    fuelConsumptionStart(): void {
        let fuelLevel = this.fuelLevel
        let counter = this.counter
        counter = setInterval(setInt, 1000);
        function setInt() {
            if (fuelLevel === 0) {
                clearInterval(counter);
                console.log("No fuel")
            }else {
                fuelLevel--;
                console.log(fuelLevel)
            }
        }
    }
    fuelConsumptionEnd(): void {
        clearInterval(this.counter)
    }
    refueling(){
        this.fuelLevel = this.tankCapacity
    }
}



class Counter {
    private static instance: Counter | null;
    private constructor(public count: number = 0) {}
    public static getInstance(): Counter {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }
        return Counter.instance;
    }
    public increase(): number  {
        return ++this.count
    }
    public decrease(): number  {
        return --this.count
    }
    public getState(): number  {
        return this.count
    }
    public static destroy(): void {
        Counter.instance = null
    }
}