import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Gql, GqlDocument } from './schemas/gql.schema';
//import { GqlDTO } from './dto/gql.dto';

@Injectable()
export class GqlService {
  constructor(@InjectModel(Gql.name) private catModel: Model<GqlDocument>) {}
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!!!';
  }
}
