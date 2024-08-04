
const skills : string[] = ['Bash', 'Counter'];

interface Character{
    name:string;
    hp:number;
    skills : string[];
    hometown?: string;
}

const strider : Character ={
    name:'Strider',
    hp:100,
    skills:['Bash','Counter'],
    //hometown : 'Lima',
};

strider.hometown = 'Lima';

console.table(strider);





export {}