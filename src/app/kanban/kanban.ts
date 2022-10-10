import { kanban_column } from "../kanban-column/kanban-column";

export interface kanban_model{
    title:string;
    columns:kanban_column[];
};