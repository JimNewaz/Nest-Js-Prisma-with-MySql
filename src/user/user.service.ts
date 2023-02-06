import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

    constructor(private readonly prismaService: PrismaService){

    }

    async createUser(){
        return this.prismaService.user.create({
            data: {
                name : "Jim Newaz",
                email : "test@gmail.com"
            }
        })
    }
}
