import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    getTasks(){
        return "Retrieving Task"
    }
    @Get('/test')
    getTest() {
        return "Retrieving /tasks/Test"
    }
    @Get('/string')
    getString(): String{
        //return 123
        return "Retrienving /tasks/String"
    }

    @Post()
    postCreatingTask():String{
        return "Creating a task"
    }
}
