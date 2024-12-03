db.internacao.aggregate([
    {
      $match: {
        $expr: {
          $gt: ["$Efetiva_alta", "$Previsao_alta"]
        }
        /*$expr é utilizado para fazer consultas*/
      }
    }
  ])

  db.internacao.aggregate([
    {
      $match: {
        $expr: {
          $gt: ["$Efetiva_alta", "$Previsao_alta"]
        }
        /*$expr é utilizado para fazer consultas*/
      }
    }
  ])
  
  
  db.internacao.aggregate([
    {
      $project: {
        qntd_dias: {
          $dateDiff: {
            startDate: "$Data_entrada",
            endDate: "$Efetiva_alta",
            unit: "day"
          }
        },
        todosDados: "$$ROOT"
      }
    },
    {
      $unionWith: {
        coll: "quartos",
        pipeline: [
          {
            $project: {
              _id: 1,
              quarto: "$$ROOT",
              valorTotal: {
                $multiply: ['$qntd_dias', '$Valor_Diario']
              }
            }
          }
        ]
      }
    }
  ])
  
/*----------------------------------------------------------------------------------------------------*/
  
  db.internacao.aggregate([
    {
      $project: {
        qntd_dias: {
          $dateDiff: {
            startDate: "$Data_entrada",
            endDate: "$Efetiva_alta",
            unit: "day"
          }
        },
        Quarto_id: 1
      }
    },
    {
      $lookup: {
        from: "quartos",
        localField: "Quarto_id",
        foreignField: "_id",
        as: "quartoInfo"
      }
    },
    {
      $unwind: "$quartoInfo"
    },
    {
      $addFields: {
        valorTotal: {
          $multiply: ["$qntd_dias", "$quartoInfo.Valor_Diario"]
        }
      }
    },
  
    {
      $unionWith: {
        coll: "quartos",
        pipeline: [
          {
            $project: {
              _id: 1,
              quartosDados: "$$ROOT"
            }
          }
        ]
      }
    },
  
    {
      $project: {
        _id: 1,
        internacao: "$ROOT"
      }
    }
  ])
  
  
  db.internacao.aggregate([
    {
      $lookup: {
        from: "pacientes",
        localField: "Paciente_id",
        foreignField: "_id",
        as: "paciente_info"
      }
    },
    {
      $unwind: "$paciente_info"
    },
    {
      $lookup: {
        from: "medicos",
        localField: "medico_responsavel",
        foreignField: "_id",
        as: "medico_info"
      }
    },
    {
      $unwind: "$medico_info"
    },
    {
      $project: {
        Data_entrada: 1,
        "paciente_info.Data_Nascimento": 1,
        "paciente_info.Nome": 1,
        idade: {
          $dateDiff: {
            startDate: "$paciente_info.Data_Nascimento",
            endDate: "$Data_entrada",
            unit: "year"
          }
        },
        "medico_info.especialidades": 1
      }
    },
    {
      $match: {
        idade: { $lt: 18 }
      }
    },
    {
      $sort: { Data_entrada: -1 }
    },
    {
      $limit: 1
    },
  ]);
  
  
  db.internacao.aggregate([
    {
      $lookup: {
        from: "medicos",
        localField: "medico_responsavel",
        foreignField: "_id",
        as: "medico_info"
      }
    },
    {
      $unwind: "$medico_info"
    },
    {
      $lookup: {
        from: "pacientes",
        localField: "Paciente_id",
        foreignField: "_id",
        as: "paciente_info"
      }
    },
    {
      $unwind: "$paciente_info"
    },
    {
      $project: {
        "paciente_info.Nome": 1,
        "medico_info.nome": 1,
        Data_entrada: 1,
        Procedimento: 1,
        especialidades: "$medico_info.especialidades"
      }
    },
    {
      $match: {
        $expr: {
          $in: [
            "gastroenterologia",
            { $map: { input: "$especialidades", as: "especialidade", in: { $isLower: "$$especialidade" } } }
            /* $map aplica uma expressão a cada item em um array e retorna outro array, ou seja,
            no campo input é o antigo array "especialidades" e retorna outro array agora como "especialidade".
            O campo in representa cada elemento desse novo array e define que todos os elementos que estão 
            dentro do array especialidade seja minusculas. Tornando-as case insensetive
            */
          ]
        }
      }
    }
  ])

/*------------------------------------------------------------------------------------------------------*/

db.internacao.aggregate([
    {
      $unwind: "$Enfermeiros_responsaveis"
    },
    {
      $group: {
        _id: "$Enfermeiros_responsaveis",
        numInternacao: { $sum: 1 }
      }
    },
    {
      $lookup: {
        from: "enfermeiros",
        localField: "_id", // A lista de enfermeiros responsaveis foi destruida e reconstruida em um objeto, fazendo com o que antes era 0, 1 seja _id, _id
        foreignField: "_id",
        as: "enfermeiro_info"
      }
    },
    {
      $unwind: "$enfermeiro_info"
    },
    {
      $project: {
        "enfermeiro_nome": "$enfermeiro_info.nome",
        "enfermeiro_COREN": "$enfermeiro_info.Registro_COREN",
        numInternacao: 1
      }
    }
  ])