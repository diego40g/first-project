import { Document } from "mongoose";

export interface Task extends Document{
    id ?: number
    title: String
    description: String
    done: Boolean
}