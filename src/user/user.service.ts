import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private dbService: PrismaService){}

    /**
     * get user
     * @returns 
     */
    async findAll(){
        return await this.dbService.user.findMany();
    }
    /**
     * create user
     * @param data 
     */
    async createData(data: CreateUserDto){
        return await this.dbService.user.create({
            data
        })
    }

    /**
     * 
     * @param id 
     * @param data 
     * @returns 
     */
    async updateData(id: number, data: any){
        return await this.dbService.user.update({
            data,
            where: {
                id
            }
        })
    }
    /**
     * 
     * @param id 
     * @returns 
     */
    async deleteData(id: number){
        return await this.dbService.user.delete({
            where: {
                id
            }
        })
    }
}
