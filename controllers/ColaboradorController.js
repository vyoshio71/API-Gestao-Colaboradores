const { Colaborador: ColaboradorModel } = require("../models/Colaborador");

const colaboradorController = {
  create: async (req, res) => {
    try {
      const colaborador = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        email: req.body.email,
        telefone: req.body.telefone,
        data_nascimento: req.body.data_nascimento,
        estado_civil: req.body.estado_civil,
        data_entrada: req.body.data_entrada,
        turnos: req.body.turnos,
        banco_horas: req.body.banco_horas,
        faltas: req.body.faltas,
        ferias: req.body.ferias,
        remuneracao: req.body.remuneracao,
        avaliacao_desempenho: req.body.avaliacao_desempenho,
        regime_trabalho: req.body.regime_trabalho,
      };

      const response = await ColaboradorModel.create(colaborador);

      res
        .status(201)
        .json({ response, msg: "Colaborador adicionado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const colaborador = await ColaboradorModel.find();

      res.json(colaborador);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;

      const colaborador = await ColaboradorModel.findById(id);

      if (!colaborador) {
        res.status(404).json({ msg: "Colaborador não encontrado!" });
        return;
      } else {
        res.json(colaborador);
      }
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;

    const colaborador = {
      nome: req.body.nome,
      endereco: req.body.endereco,
      email: req.body.email,
      telefone: req.body.telefone,
      data_nascimento: req.body.data_nascimento,
      estado_civil: req.body.estado_civil,
      data_entrada: req.body.data_entrada,
      turnos: req.body.turnos,
      banco_horas: req.body.banco_horas,
      faltas: req.body.faltas,
      ferias: req.body.ferias,
      remuneracao: req.body.remuneracao,
      avaliacao_desempenho: req.body.avaliacao_desempenho,
      regime_trabalho: req.body.regime_trabalho,
    };

    const updateColaborador = await ColaboradorModel.findByIdAndUpdate(
      id,
      colaborador
    );

    if (!updateColaborador) {
      res.status(404).json({ msg: "Colaborador não encontrado!" });
      return;
    }

    res.status(200).json({ colaborador, msg: "Dados alterados com sucesso!" });
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const colaborador = await ColaboradorModel.findById(id);

      if (!colaborador) {
        res.status(404).json({ msg: "Colaborador não encontrado!" });
        return;
      }

      const deleteColaborador = await ColaboradorModel.findByIdAndDelete(id);

      res
        .status(200)
        .json({ deleteColaborador, msg: "Colaborador excluído com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = colaboradorController;
