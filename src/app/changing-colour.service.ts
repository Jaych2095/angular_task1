export class changingColourService{
    setcolor(salary:number)
    {
        if(salary<=10000)
            return 'red';
        else if(salary>10000 && salary<=20000)
            return 'green';
        else
            return 'blue';
    }
}