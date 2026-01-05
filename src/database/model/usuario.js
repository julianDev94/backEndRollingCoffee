import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 12,
  },
});

const Usuario = mongoose.model('usuario',usuarioSchema);
export default Usuario;
