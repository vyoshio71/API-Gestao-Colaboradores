const mongoose = require("mongoose");

const { Schema } = mongoose;

const colaboradorSchema = new Schema({
  nome: String,
  endereco: String,
  email: String,
  telefone: Number,
  data_nascimento: Date,
  estado_civil: String,
  data_entrada: Date,
  turnos: String,
  banco_horas: String,
  faltas: Number,
  ferias: String,
  remuneracao: Number,
  avaliacao_desempenho: String,
  regime_trabalho: String,
});

const Colaborador = mongoose.model("Colaborador", colaboradorSchema);

module.exports = {
  Colaborador,
  colaboradorSchema,
};
