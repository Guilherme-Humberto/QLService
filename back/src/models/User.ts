import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number
})

export default mongoose.model("User", UserSchema)