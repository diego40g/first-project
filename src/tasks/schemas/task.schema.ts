/*import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TaskDocument = Task & Document

@Schema()
export class Task {
    @Prop()
    title: String
    @Prop()
    description: String
    @Prop()
    done: Boolean
}
export const TaskSchema = SchemaFactory.createForClass(Task)*/
import { Schema } from "mongoose";
export const TaskSchema = new Schema({
    title: String,
    description: String,
    done: Boolean
})