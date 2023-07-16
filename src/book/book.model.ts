import { Prisma } from "@prisma/client";


    export class Book implements Prisma.bookCreateInput{
    id: number;
    title: string;
    description?: string;

}