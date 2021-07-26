export class List{
    private task: string;
    private id: number;
    private listType: 'home'| 'shopping'| 'work'| 'others';

    constructor(task: string,id: number, listType: 'home'| 'shopping'| 'work'| 'others')
    {
        this.task=task;
        this.id=id;
        this.listType=listType;
    }

    getTask():string {
        return this.task;
    }

    getId(): number{
        return this.id;
    }

    getListType(): string{
        return this.listType;
    }

    setTask(task: string):void{
        this.task=task;
    }

    setId(id: number):void{
        this.id=id;
    }

    setType(listType: 'home'| 'shopping'| 'work'| 'others'):void{
        this.listType=listType;
    }
}