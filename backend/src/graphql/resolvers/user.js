import { User } from '../../model';
import mongoose from 'mongoose';
import { UserInputError } from 'apollo-server-core';


export default {

    Query: {
         users: async (root, args, context, info) => {
           
           return  await User.find({})
        },
        user: async (root, { id }, context, info) => {
            if(!mongoose.Types.ObjectId.isValid(id)){
                throw new UserInputError(`${id} is not a Valid User Id`);
            }
            return await User.findById(id);
        }

         
    },

    Mutation: {
        signUp: async (root, args, context, info) => {
           
            return await User.create(args);
        },


         updateUser: async (root, {id , input}, context , info) => {

            return await User.findOneAndUpdate({_id:id}, input, {new: true}, (err ,doc) => {
                if (err) {
                    console.log("Something wrong when updating data!");
                }else{
                    console.log(doc);
                }
            
                
            })
        },

        deleteUser: async (root, {id}, context, info) => {

            return await User.findOneAndDelete({_id:id})
        }
    }

}