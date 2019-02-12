import mongoose from 'mongoose';
import { hash } from 'bcryptjs';
const userSchema = new mongoose.Schema({
email: String,
userName: String,
name: String,
password: String

}, {
timestamps:true
})
// pre runs before save method when we call create method
userSchema.pre('save' , async function(next) {
   try {
    if(this.isModified('password')){
        this.password = await hash(this.password, 10)
      }
   } catch (error) {
       next(error);
   }

    next();
})

export default mongoose.model('User',userSchema)