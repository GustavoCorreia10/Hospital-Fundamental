db.consultas.insertMany(
    [
      {
        "Data_realizacao": "2024-10-01T09:30:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750833"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b521"),
        "Valor_consulta": 250.00,
        "Convenio": true,
        "Especialidade_buscada": "Dermatologia",
        "Descricao": "Consulta para avaliação de manchas na pele.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c79",
          "Medicamentos": ["Pomada A", "Creme Hidratante"],
          "Quantidade": 2,
          "Instrucoes": "Aplicar na pele 2 vezes ao dia.",
          "Tratamentos": ["Evitar exposição ao sol", "Uso de protetor solar diariamente"]
        }
      },
      {
        "Data_realizacao": "2024-10-02T10:00:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750832"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b522"),
        "Valor_consulta": 300.00,
        "Convenio": false,
        "Especialidade_buscada": "Gastroenterologia",
        "Descricao": "Consulta para investigação de dores abdominais.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c82",
          "Medicamentos": ["Antiespasmódico", "Protetor gástrico"],
          "Quantidade": 2,
          "Instrucoes": "Tomar antes das refeições.",
          "Tratamentos": ["Dieta leve", "Evitar alimentos gordurosos"]
        }
      },
      {
        "Data_realizacao": "2024-10-03T15:30:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750831"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b523"),
        "Valor_consulta": 200.00,
        "Convenio": true,
        "Especialidade_buscada": "Pediatria",
        "Descricao": "Consulta de rotina para acompanhamento infantil.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c85",
          "Medicamentos": ["Vitamina D", "Suplemento de Ferro"],
          "Quantidade": 2,
          "Instrucoes": "Administrar diariamente.",
          "Tratamentos": ["Manter boa alimentação", "Estimular atividades físicas"]
        }
      },
      {
        "Data_realizacao": "2024-10-04T08:45:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750834"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b524"),
        "Valor_consulta": 150.00,
        "Convenio": true,
        "Especialidade_buscada": "Clínica Geral",
        "Descricao": "Consulta para avaliação geral de saúde.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c88",
          "Medicamentos": ["Polivitamínico"],
          "Quantidade": 1,
          "Instrucoes": "Tomar 1 cápsula ao dia.",
          "Tratamentos": ["Praticar exercícios físicos regulares"]
        }
      },
      {
        "Data_realizacao": "2024-10-05T14:00:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750833"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b525"),
        "Valor_consulta": 280.00,
        "Convenio": false,
        "Especialidade_buscada": "Dermatologia",
        "Descricao": "Consulta para tratamento de acne severa.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c91",
          "Medicamentos": ["Antibiótico", "Sabonete Específico"],
          "Quantidade": 2,
          "Instrucoes": "Tomar 2 vezes ao dia.",
          "Tratamentos": ["Manter a pele limpa e seca"]
        }
      },
      {
        "Data_realizacao": "2024-10-06T11:30:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750834"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b526"),
        "Valor_consulta": 320.00,
        "Convenio": true,
        "Especialidade_buscada": "Gastroenterologia",
        "Descricao": "Consulta para tratamento de refluxo gástrico.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c94",
          "Medicamentos": ["Inibidor de bomba de prótons"],
          "Quantidade": 1,
          "Instrucoes": "Tomar em jejum.",
          "Tratamentos": ["Evitar bebidas gaseificadas"]
        }
      },
      {
        "Data_realizacao": "2024-10-07T10:00:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750831"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b527"),
        "Valor_consulta": 210.00,
        "Convenio": true,
        "Especialidade_buscada": "Pediatria",
        "Descricao": "Consulta de acompanhamento para recém-nascido.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c97",
          "Medicamentos": ["Vitamina A", "Vitamina C"],
          "Quantidade": 2,
          "Instrucoes": "Administrar diariamente em gotas.",
          "Tratamentos": ["Aleitamento materno exclusivo"]
        }
      },
      {
        "Data_realizacao": "2024-10-08T13:30:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750830"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b528"),
        "Valor_consulta": 260.00,
        "Convenio": false,
        "Especialidade_buscada": "Clínica Geral",
        "Descricao": "Consulta para avaliação de dores musculares.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c100",
          "Medicamentos": ["Analgésico"],
          "Quantidade": 1,
          "Instrucoes": "Tomar em caso de dor.",
          "Tratamentos": ["Fisioterapia"]
        }
      },
      {
        "Data_realizacao": "2024-10-09T17:45:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750833"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b529"),
        "Valor_consulta": 230.00,
        "Convenio": true,
        "Especialidade_buscada": "Dermatologia",
        "Descricao": "Consulta para tratamento de alergia cutânea.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c103",
          "Medicamentos": ["Antialérgico", "Loção Hidratante"],
          "Quantidade": 2,
          "Instrucoes": "Aplicar nas áreas afetadas 2 vezes ao dia.",
          "Tratamentos": ["Evitar contato com produtos irritantes"]
        }
      },
      {
        "Data_realizacao": "2024-10-10T16:15:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da3075082e"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b52a"),
        "Valor_consulta": 220.00,
        "Convenio": false,
        "Especialidade_buscada": "Gastroenterologia",
        "Descricao": "Consulta para controle de gastrite crônica.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c106",
          "Medicamentos": ["Protetor gástrico"],
          "Quantidade": 1,
          "Instrucoes": "Tomar antes das refeições.",
          "Tratamentos": ["Dieta sem alimentos ácidos"]
        }
      },
      {
        "Data_realizacao": "2024-10-11T11:00:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da3075082f"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b52b"),
        "Valor_consulta": 250.00,
        "Convenio": true,
        "Especialidade_buscada": "Pediatria",
        "Descricao": "Consulta de acompanhamento para vacinas.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c109",
          "Medicamentos": ["Suplemento de Vitamina B"],
          "Quantidade": 1,
          "Instrucoes": "Administrar semanalmente.",
          "Tratamentos": ["Calendário de vacinas atualizado"]
        }
      },
      {
        "Data_realizacao": "2024-10-12T14:00:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750830"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b52b"),
        "Valor_consulta": 275.00,
        "Convenio": false,
        "Especialidade_buscada": "Clínica Geral",
        "Descricao": "Consulta de acompanhamento para hipertensão.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c112",
          "Medicamentos": ["Antihipertensivo"],
          "Quantidade": 1,
          "Instrucoes": "Tomar diariamente.",
          "Tratamentos": ["Dieta com pouco sódio"]
        }
      },
      {
        "Data_realizacao": "2024-10-13T09:30:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750833"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b52c"),
        "Valor_consulta": 265.00,
        "Convenio": true,
        "Especialidade_buscada": "Dermatologia",
        "Descricao": "Consulta para tratamento de psoríase.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c115",
          "Medicamentos": ["Corticosteroide"],
          "Quantidade": 1,
          "Instrucoes": "Aplicar nas áreas afetadas.",
          "Tratamentos": ["Hidratação da pele"]
        }
      },
      {
        "Data_realizacao": "2024-10-14T08:45:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da3075082e"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b52d"),
        "Valor_consulta": 240.00,
        "Convenio": false,
        "Especialidade_buscada": "Gastroenterologia",
        "Descricao": "Consulta para controle de síndrome do intestino irritável.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c118",
          "Medicamentos": ["Probióticos", "Antiespasmódico"],
          "Quantidade": 2,
          "Instrucoes": "Tomar antes das refeições.",
          "Tratamentos": ["Dieta sem alimentos picantes"]
        }
      },
      {
        "Data_realizacao": "2024-10-15T12:30:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da3075082e"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b52e"),
        "Valor_consulta": 220.00,
        "Convenio": true,
        "Especialidade_buscada": "Pediatria",
        "Descricao": "Consulta para controle de asma infantil.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c121",
          "Medicamentos": ["Bombinha de asma"],
          "Quantidade": 1,
          "Instrucoes": "Usar em caso de crise.",
          "Tratamentos": ["Ambiente limpo e sem poeira"]
        }
      },
      {
        "Data_realizacao": "2024-10-16T16:00:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da3075082e"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b52f"),
        "Valor_consulta": 280.00,
        "Convenio": false,
        "Especialidade_buscada": "Dermatologia",
        "Descricao": "Consulta para avaliação de queda de cabelo.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c124",
          "Medicamentos": ["Tônico Capilar"],
          "Quantidade": 1,
          "Instrucoes": "Aplicar no couro cabeludo 2 vezes ao dia.",
          "Tratamentos": ["Manter dieta rica em vitaminas"]
        }
      }
    ]
  )

 /*-----------------------------------------------------------------------------------------*/

  db.consultas.insertMany(
    [
      {
        "Data_realizacao": "2017-05-14T10:30:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750833"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b526"),
        "Valor_consulta": 280.00,
        "Convenio": false,
        "Especialidade_buscada": "Dermatologia",
        "Descricao": "Consulta para tratamento de eczema.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c132",
          "Medicamentos": ["Corticosteroide", "Hidratante"],
          "Quantidade": 2,
          "Instrucoes": "Aplicar duas vezes ao dia.",
          "Tratamentos": ["Manter a pele sempre hidratada"]
        }
      },
      {
        "Data_realizacao": "2016-08-20T14:00:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750832"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b521"),
        "Valor_consulta": 350.00,
        "Convenio": true,
        "Especialidade_buscada": "Gastroenterologia",
        "Descricao": "Consulta para diagnóstico de intolerância à lactose.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c135",
          "Medicamentos": ["Enzima lactase"],
          "Quantidade": 1,
          "Instrucoes": "Tomar antes das refeições com derivados de leite.",
          "Tratamentos": ["Evitar alimentos que contenham lactose"]
        }
      },
      {
        "Data_realizacao": "2018-03-12T09:15:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750834"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b521"),
        "Valor_consulta": 240.00,
        "Convenio": false,
        "Especialidade_buscada": "Clínica Geral",
        "Descricao": "Consulta para controle de diabetes.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c138",
          "Medicamentos": ["Metformina"],
          "Quantidade": 1,
          "Instrucoes": "Tomar diariamente após o café da manhã.",
          "Tratamentos": ["Dieta balanceada", "Atividades físicas regulares"]
        }
      },
      {
        "Data_realizacao": "2021-11-22T15:45:00Z",
        "Medico_responsavel_id": ObjectId("671ab5260122e9da30750831"),
        "Paciente_id": ObjectId("671ab98d138e508c8103b522"),
        "Valor_consulta": 290.00,
        "Convenio": true,
        "Especialidade_buscada": "Pediatria",
        "Descricao": "Consulta de acompanhamento para alergia alimentar em criança.",
        "Receita": {
          "_id": "60d5ec2e8b1b3c001d6f9c141",
          "Medicamentos": ["Antialérgico"],
          "Quantidade": 1,
          "Instrucoes": "Administrar em caso de reação alérgica.",
          "Tratamentos": ["Evitar alimentos alergênicos", "Revisão trimestral"]
        }
      }
    ]
  )

/*----------------------------------------------------------------------------------------------*/

db.consultas.insertOne({
    Data_realizacao: ISODate("2015-06-15T00:00:00Z"),
    Medico_responsavel_id: ObjectId("671ab5260122e9da30750835"),
    Paciente_id: ObjectId("6728c0bc7dc0528695933146"),
    Convenio: true,
    Especialidade_buscada: "Dermatologia",
    Descricao: "Consulta para avaliação de problemas de pele",
    Receita: {
      _id: ObjectId("60d5f4c32f8fb814b56fa190"),
      Medicamentos: ["Pomada para acne", "Antibiótico oral"],
      Quantidade: 2,
      Instrucoes: "Aplicar a pomada duas vezes ao dia e tomar o antibiótico conforme prescrição.",
      Tratamentos: [
        { Nome: "Aplicação de pomada", Frequencia: "Duas vezes ao dia" },
        { Nome: "Antibiótico oral", Frequencia: "Uma vez ao dia" }
      ]
    }
  });

/*------------------------------------------------------------------------------------------------*/

db.consultas.aggregate([
    {
      $match: {
        Data_realizacao: {
          $gte: ISODate("2020-01-01"),
          $lt: ISODate("2021-01-01")
        }
      }
    },
  
    {
      $group: {
        _id: null,
        totalConsultas: { $push: "$$ROOT" },
        mediaValorConsulta: { $avg: "$Valor_consulta" },
        qntdConvenio: { $sum: { $cond: [{ $eq: ["$Convenio", true] }, 1, 0] } }
      }
    },
  ])

/*-------------------------------------------------------------------------------------------------*/

db.consultas.aggregate([
    {
      $group: {
        _id: null,
        mindate: { $min: "$Data_realizacao" }
      }
    },
  
    {
      $lookup: {
        from: "consultas",
        let: { minDate: "$mindate" },
        pipeline: [
          {
            $match: {
              $expr: { $eq: ["$Data_realizacao", "$$minDate"] }
            }
          },
          {
            $project: { _id: 0, Receita: 1 }
          }
        ],
        as: "receitaAntiga"
      }
    },
  
    {
      $project: {
        _id: 0,
        minDate: 1,
        receitaAntiga: "$receitaAntiga.Receita"
      }
    }
  ])
  
  
  db.consultas.aggregate([
    {
      $match: {
        Convenio: false
      }
    },
  
    {
      $sort: { Valor_consulta: -1 }
    },
  
    {
      $limit: 1
    },
  
    {
      $unionWith: {
        //Combina 2 agregações em uma unica agregação
        coll: "consultas",
        pipeline: [
          {
            $match: {
              Convenio: false
            }
          },
          {
            $sort: { Valor_consulta: 1 }
          },
          {
            $limit: 1
          }
        ]
      }
    }
  ]);

  db.consultas.aggregate([
    {
      $group: {
        _id: "$Medico_responsavel_id",
        numConsulta: { $sum: 1 }
      }
    },
    {
      $lookup: {
        from: "medicos",
        localField: "_id",
        foreignField: "_id",
        as: "medico_info"
      }
    },
    {
      $unwind: "$medico_info"
    },
    {
      $project: {
        "medico_nome": "$medico_info.nome",
        "medico_CRM": "$medico_info.documentos.CRM",
        numConsulta: 1
      }
    }
  ])
