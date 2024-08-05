
export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1 : Passenger={
    name :'Gustavo'
} 

const passenger2 : Passenger={
    name : 'Melisa',
    children : ['Nati', 'Rafa'],
}

const returnChildrenNumber = (passenger : Passenger):number=>{
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

returnChildrenNumber(passenger1)

returnChildrenNumber(passenger2)