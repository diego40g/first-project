import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/Task";
//Como si fuera express
import { Request, Response } from "express";

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    @Get() 
    getTasks(): Task[]{
        return this.taskService.getTasks()
    }
    @Get(':taskId')
    getTask(@Param('taskId') id: string){
        return this.taskService.getTask(parseInt(id))
    }
    @Get('/test')
    getTest() {
        return "Retrieving /tasks/Test"
    }
    @Get('/string')
    getString(): string{
        //return 123
        return "Retrienving /tasks/String"
    }
    @Get('/object')
    getObject(): {}{
        return {"object": "Hello World"}
    }
    @Get('/specificObject')
    getSpecifcObject(): {especific: string}{
        return {"especific": "String specific"}
    }

    @Post()
    postCreatingTask(@Body() task: CreateTaskDto):string{
        console.log(task)
        console.log(task.done)
        console.log(task.title)
        console.log(task.description)
        return "Creating a task"
    }

    @Delete()
    deleteTask(): string{
        return 'Deleting a task'
    }
    @Delete(':idByUrl')
    deleteTaskIdUrl(@Param('idByUrl') idParam): string{
        return `Deleting a task with id = ${idParam}`
    }

    @Put()
    updateTask():string{
        return "Updating a task"
    }
    @Put(':idUrl')
    updateIdBodyTask(@Body() task:CreateTaskDto, @Param('idUrl') idParam): string{
        console.log(task)
        return `Updating a task with id = ${idParam}\n ${task.title}\n ${task.description}\n ${task.done}`
    }

    //similar a express
    @Get('/express')
    getTaskExpress(@Req() req, @Res() res): Response{
        console.log(req.body)
        return res.send("Hello express")
    }
}
