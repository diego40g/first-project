import { Injectable } from '@nestjs/common';
import { Task } from "./interfaces/Task"
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    //         - - - - - - - - v  igual al nombre del Modulo 
    constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

    async getTasks():Promise<Task[]>{
        return await this.taskModel.find().exec()
    }

    async getTask(id: string):Promise<Task>{
        return await this.taskModel.findById(id).exec()
    }

    async createTask(task: CreateTaskDto): Promise<Task>{
        const newTask = new this.taskModel(task)
        console.log(newTask)
        console.log('saved')
        return await newTask.save() //para guardar en la base mongo
    }
    /*
    //Sin Base Mongo
    private tasks: Task[] = [
        {
            id: 1,
            title: "Testing",
            description: "testing descri",
            done: true
        },
        {
            id: 2,
            title: "Testing",
            description: "testing descri",
            done: true
        },
        {
            id: 3,
            title: "Testing",
            description: "testing descri",
            done: true
        }
    ]
    
    getTasks(): Task[]{
        return this.tasks
    }

    getTask(id: number): Task{
        return this.tasks.find(task => task.id === id)
    }*/
    
}
