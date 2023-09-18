import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:victor1907@ehoje.hc2uv9e.mongodb.net/ehoje")
// A função connect guarda a string de conexão dentro dos parênses

let db = mongoose.connection;
// Agora criamos uma variável que guarda a ação de conectar nosso usuário como mongodb
export default db;