export default {
  name: 'Form 4100 R4.0',
  owner: 'gatech',
  allocated_users: ['admin'],
  groups: [
    'Product',
    'Survival',
    'Subsequent Cellular Infusions',
    'Best Response to Cellular Therapy',
    'Disease Relapse or Progression',
    'Peripheral Blood Count Recovery',
    'Current Hematologic Findings',
    'New Malignancy, Lymphoproliferative or Myeloproliferative Disease / Disorder',
    'Persistence of Cells',
    'Graft vs. Host Disease',
    'Toxicities',
    'Infection',
    'Functional Status'
  ],
  questions: [
    {
      question_name: 'Name of product (for most recent cell therapy infusion)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '1',
      has_cql: true,
      has_nlpql: false,
      group: 'Product',
      answers: [
        {
          text: 'Tisagenlecleucel (Kymriah)',
          value: 'tisagenlecleucel_kymriah'
        },
        {
          text: 'Axicabtagene Ciloleucel (Yescarta)',
          value: 'axicabtagene_ciloleucel_yescarta'
        },
        {
          text: 'Other product',
          value: 'other_product'
        }
      ],
      nlpql_feature: 'form_4100_question_1'
    },
    {
      question_name:
        'Date of actual contact with the recipient to determine medical status for this follow-up report',
      question_type: 'DATE',
      question_number: '2',
      has_cql: false,
      has_nlpql: false,
      group: 'Survival',
      answers: [],
      nlpql_feature: 'form_4100_question_2'
    },
    {
      question_name:
        "Specify the recipient's survival status at the date of last contact",
      question_type: 'MULTIPLE_CHOICE',
      question_number: '3',
      has_cql: false,
      has_nlpql: false,
      group: 'Survival',
      answers: [
        {
          text: 'Alive',
          value: 'alive'
        },
        {
          text: 'Dead',
          value: 'dead'
        }
      ],
      nlpql_feature: 'form_4100_question_3'
    },
    {
      question_name:
        'Has the recipient received a new course of cellular therapy (unplanned) since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '4',
      has_cql: true,
      has_nlpql: false,
      group: 'Subsequent Cellular Infusions',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_4'
    },
    {
      question_name: 'Specify the reason for which cellular therapy was given',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '5',
      has_cql: true,
      has_nlpql: true,
      group: 'Subsequent Cellular Infusions',
      answers: [
        {
          text: 'Failure to respond or in response to disease assessment',
          value: 'failure_to_respond_or_in_response_to_disease_assessment'
        },
        {
          text: 'New indication',
          value: 'new_indication'
        }
      ],
      nlpql_feature: 'form_4100_question_5'
    },
    {
      question_name: 'Date of cellular therapy:',
      question_type: 'DATE',
      question_number: '6',
      has_cql: true,
      has_nlpql: false,
      group: 'Subsequent Cellular Infusions',
      answers: [],
      nlpql_feature: 'form_4100_question_6'
    },
    {
      question_name:
        'Did the recipient receive an HCT since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '7',
      has_cql: true,
      has_nlpql: false,
      group: 'Subsequent Cellular Infusions',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_7'
    },
    {
      question_name: 'Date of HCT:',
      question_type: 'DATE',
      question_number: '8',
      has_cql: true,
      has_nlpql: false,
      group: 'Subsequent Cellular Infusions',
      answers: [],
      nlpql_feature: 'form_4100_question_8'
    },
    {
      question_name: 'What was the best response to the cellular therapy?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '9',
      has_cql: false,
      has_nlpql: true,
      group: 'Best Response to Cellular Therapy',
      answers: [
        {
          text: 'Complete response',
          value: 'complete_response'
        },
        {
          text: 'Normalization of organ function',
          value: 'normalization_of_organ_function'
        },
        {
          text: 'Partial response',
          value: 'partial_response'
        },
        {
          text: 'Partial normalization of organ function',
          value: 'partial_normalization_of_organ_function'
        },
        {
          text: 'No response',
          value: 'no_response'
        },
        {
          text: 'Disease progression or worsening of organ function',
          value: 'disease_progression_or_worsening_of_organ_function'
        },
        {
          text: 'Not applicable (e.g. infection prophylaxis)',
          value: 'not_applicable_eg_infection_prophylaxis'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_9'
    },
    {
      question_name: 'Was the date of best response previously reported?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '10',
      has_cql: false,
      has_nlpql: false,
      group: 'Best Response to Cellular Therapy',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_10'
    },
    {
      question_name: 'Date response established',
      question_type: 'DATE',
      question_number: '11',
      has_cql: false,
      has_nlpql: false,
      group: 'Best Response to Cellular Therapy',
      answers: [],
      nlpql_feature: 'form_4100_question_11'
    },
    {
      question_name:
        'Was a disease relapse or progression detected since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '12',
      has_cql: false,
      has_nlpql: true,
      group: 'Disease Relapse or Progression',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_12'
    },
    {
      question_name: 'Date documented:',
      question_type: 'DATE',
      question_number: '13',
      has_cql: false,
      has_nlpql: true,
      group: 'Disease Relapse or Progression',
      answers: [],
      nlpql_feature: 'form_4100_question_13'
    },
    {
      question_name: 'Was there evidence of initial recovery?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '14',
      has_cql: true,
      has_nlpql: true,
      group: 'Peripheral Blood Count Recovery',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        },
        {
          text: 'Previously Reported',
          value: 'previously_reported'
        }
      ],
      nlpql_feature: 'form_4100_question_14'
    },
    {
      question_name: 'Date ANC >= 500/mm3 (first of 3 lab values)',
      question_type: 'DATE',
      question_number: '15',
      has_cql: false,
      has_nlpql: true,
      group: 'Peripheral Blood Count Recovery',
      answers: [],
      nlpql_feature: 'form_4100_question_15'
    },
    {
      question_name: 'Was an initial platelet count >= 20 x 109/L achieved?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '16',
      has_cql: false,
      has_nlpql: true,
      group: 'Peripheral Blood Count Recovery',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        },
        {
          text: 'Previously Reported',
          value: 'previously_reported'
        }
      ],
      nlpql_feature: 'form_4100_question_16'
    },
    {
      question_name: 'Date platelets >= 20 x 109/L',
      question_type: 'DATE',
      question_number: '17',
      has_cql: true,
      has_nlpql: true,
      group: 'Peripheral Blood Count Recovery',
      answers: [],
      nlpql_feature: 'form_4100_question_17'
    },
    {
      question_name: 'Date of most recent complete blood count',
      question_type: 'DATE',
      question_number: '18',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [],
      nlpql_feature: 'form_4100_question_18'
    },
    {
      question_name: 'WBC',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '19',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: 'Known',
          value: 'known'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_19'
    },
    {
      question_name: 'WBC',
      question_type: 'TEXT_WITH_MULTIPLE_CHOICE',
      question_number: '20',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: '',
          value: ''
        }
      ],
      nlpql_feature: 'form_4100_question_20'
    },
    {
      question_name: 'Neutrophils',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '21',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: 'Known',
          value: 'known'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_21'
    },
    {
      question_name: 'Neutrophils',
      question_type: 'TEXT',
      question_number: '22',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [],
      nlpql_feature: 'form_4100_question_22'
    },
    {
      question_name: 'Lymphocytes',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '23',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: 'Known',
          value: 'known'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_23'
    },
    {
      question_name: 'Lymphocytes',
      question_type: 'TEXT',
      question_number: '24',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [],
      nlpql_feature: 'form_4100_question_24'
    },
    {
      question_name: 'Hemoglobin',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '25',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: 'Known',
          value: 'known'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_25'
    },
    {
      question_name: 'Hemoglobin',
      question_type: 'TEXT_WITH_MULTIPLE_CHOICE',
      question_number: '26',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: '',
          value: ''
        }
      ],
      nlpql_feature: 'form_4100_question_26'
    },
    {
      question_name: 'Hematocrit',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '27',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: 'Known',
          value: 'known'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_27'
    },
    {
      question_name: 'Hematocrit',
      question_type: 'TEXT',
      question_number: '28',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [],
      nlpql_feature: 'form_4100_question_28'
    },
    {
      question_name: 'Was RBC transfused <= 30 days before date of test?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '29',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_29'
    },
    {
      question_name: 'Platelets',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '30',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: 'Known',
          value: 'known'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_30'
    },
    {
      question_name: 'Platelets',
      question_type: 'TEXT_WITH_MULTIPLE_CHOICE',
      question_number: '31',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: '',
          value: ''
        }
      ],
      nlpql_feature: 'form_4100_question_31'
    },
    {
      question_name: 'Were platelets transfused <= 7 days before date of test?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '32',
      has_cql: true,
      has_nlpql: true,
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_32'
    },
    {
      question_name:
        'Did a new malignancy, myelodysplastic, myeloproliferative, or lymphoproliferative disease / disorder occur that is different from the disease / disorder for which the HCT or cellular therapy was performed? (include clonal cytogenetic abnormalities, and post-transplant lymphoproliferative disorders)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '33',
      has_cql: true,
      has_nlpql: true,
      group:
        'New Malignancy, Lymphoproliferative or Myeloproliferative Disease / Disorder',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Previously Reported',
          value: 'previously_reported'
        }
      ],
      nlpql_feature: 'form_4100_question_33'
    },
    {
      question_name:
        'Were tests performed to detect persistence of the cellular product since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '34',
      has_cql: true,
      has_nlpql: true,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_34'
    },
    {
      question_name: 'Was persistence evaluated by molecular assay? (e.g. PCR)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '35',
      has_cql: true,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_35'
    },
    {
      question_name: 'Date sample collected',
      question_type: 'DATE',
      question_number: '36',
      has_cql: true,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [],
      nlpql_feature: 'form_4100_question_36'
    },
    {
      question_name: 'Specify the cell source',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '37',
      has_cql: true,
      has_nlpql: true,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'Bone marrow',
          value: 'bone_marrow'
        },
        {
          text: 'Peripheral blood',
          value: 'peripheral_blood'
        },
        {
          text: 'Tumor',
          value: 'tumor'
        },
        {
          text: 'Other source',
          value: 'other_source'
        }
      ],
      nlpql_feature: 'form_4100_question_37'
    },
    {
      question_name: 'Specify other cell source',
      question_type: 'TEXT',
      question_number: '38',
      has_cql: false,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [],
      nlpql_feature: 'form_4100_question_38'
    },
    {
      question_name: 'Were the infused cells detected?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '39',
      has_cql: true,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_39'
    },
    {
      question_name:
        'Was persistence evaluated by flow cytometry testing? (immunophenotyping)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '40',
      has_cql: true,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_40'
    },
    {
      question_name: 'Date sample collected',
      question_type: 'DATE',
      question_number: '41',
      has_cql: false,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [],
      nlpql_feature: 'form_4100_question_41'
    },
    {
      question_name: 'Specify the cell source',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '42',
      has_cql: false,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'Bone marrow',
          value: 'bone_marrow'
        },
        {
          text: 'Peripheral blood',
          value: 'peripheral_blood'
        },
        {
          text: 'Tumor',
          value: 'tumor'
        },
        {
          text: 'Other source',
          value: 'other_source'
        }
      ],
      nlpql_feature: 'form_4100_question_42'
    },
    {
      question_name: 'Specify other cell source',
      question_type: 'TEXT',
      question_number: '43',
      has_cql: false,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [],
      nlpql_feature: 'form_4100_question_43'
    },
    {
      question_name: 'Were the infused cells detected?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '44',
      has_cql: false,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_44'
    },
    {
      question_name: 'Was persistence evaluated by immunohistochemistry?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '45',
      has_cql: true,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_45'
    },
    {
      question_name: 'Date sample collected',
      question_type: 'DATE',
      question_number: '46',
      has_cql: true,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [],
      nlpql_feature: 'form_4100_question_46'
    },
    {
      question_name: 'Specify the cell source',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '47',
      has_cql: true,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'Bone marrow',
          value: 'bone_marrow'
        },
        {
          text: 'Peripheral blood',
          value: 'peripheral_blood'
        },
        {
          text: 'Tumor',
          value: 'tumor'
        },
        {
          text: 'Other source',
          value: 'other_source'
        }
      ],
      nlpql_feature: 'form_4100_question_47'
    },
    {
      question_name: 'Specify other cell source',
      question_type: 'TEXT',
      question_number: '48',
      has_cql: true,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [],
      nlpql_feature: 'form_4100_question_48'
    },
    {
      question_name: 'Were the infused cells detected?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '49',
      has_cql: false,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_49'
    },
    {
      question_name: 'Was persistence evaluated by other method?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '50',
      has_cql: false,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_50'
    },
    {
      question_name: 'Specify other method',
      question_type: 'TEXT',
      question_number: '51',
      has_cql: false,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [],
      nlpql_feature: 'form_4100_question_51'
    },
    {
      question_name: 'Date sample collected',
      question_type: 'DATE',
      question_number: '52',
      has_cql: false,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [],
      nlpql_feature: 'form_4100_question_52'
    },
    {
      question_name: 'Specify the cell source',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '53',
      has_cql: false,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'bone marrow',
          value: 'bone_marrow'
        },
        {
          text: 'Peripheral blood',
          value: 'peripheral_blood'
        },
        {
          text: 'Tumor',
          value: 'tumor'
        },
        {
          text: 'Other source',
          value: 'other_source'
        }
      ],
      nlpql_feature: 'form_4100_question_53'
    },
    {
      question_name: 'Specify other cell source',
      question_type: 'TEXT',
      question_number: '54',
      has_cql: false,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [],
      nlpql_feature: 'form_4100_question_54'
    },
    {
      question_name: 'Were the infused cells detected?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '55',
      has_cql: false,
      has_nlpql: false,
      group: 'Persistence of Cells',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_55'
    },
    {
      question_name: 'Did acute GVHD develop since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '56',
      has_cql: true,
      has_nlpql: true,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_56'
    },
    {
      question_name: 'Date of acute GVHD diagnosis',
      question_type: 'DATE',
      question_number: '57',
      has_cql: true,
      has_nlpql: true,
      group: 'Graft vs. Host Disease',
      answers: [],
      nlpql_feature: 'form_4100_question_57'
    },
    {
      question_name: 'Did acute GVHD persist since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '58',
      has_cql: false,
      has_nlpql: false,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_58'
    },
    {
      question_name: 'Overall grade of acute GVHD at diagnosis',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '59',
      has_cql: true,
      has_nlpql: true,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'I',
          value: 'i'
        },
        {
          text: 'II',
          value: 'ii'
        },
        {
          text: 'III',
          value: 'iii'
        },
        {
          text: 'IV',
          value: 'iv'
        },
        {
          text: 'Not applicable',
          value: 'not_applicable'
        }
      ],
      nlpql_feature: 'form_4100_question_59'
    },
    {
      question_name: 'Skin',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '60',
      has_cql: true,
      has_nlpql: true,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Stage 0',
          value: 'stage_0'
        },
        {
          text: 'Stage 1',
          value: 'stage_1'
        },
        {
          text: 'Stage 2',
          value: 'stage_2'
        },
        {
          text: 'Stage 3',
          value: 'stage_3'
        },
        {
          text: 'Stage 4',
          value: 'stage_4'
        }
      ],
      nlpql_feature: 'form_4100_question_60'
    },
    {
      question_name:
        'Lower intestinal tract (use mL/day for adult recipients and mL/kg/day for pediatric recipients)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '61',
      has_cql: true,
      has_nlpql: true,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Stage 0',
          value: 'stage_0'
        },
        {
          text: 'Stage 1',
          value: 'stage_1'
        },
        {
          text: 'Stage 2',
          value: 'stage_2'
        },
        {
          text: 'Stage 3',
          value: 'stage_3'
        },
        {
          text: 'Stage 4',
          value: 'stage_4'
        }
      ],
      nlpql_feature: 'form_4100_question_61'
    },
    {
      question_name: 'Upper intestinal tract',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '62',
      has_cql: true,
      has_nlpql: true,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Stage 0',
          value: 'stage_0'
        },
        {
          text: 'Stage 1',
          value: 'stage_1'
        }
      ],
      nlpql_feature: 'form_4100_question_62'
    },
    {
      question_name: 'Liver',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '63',
      has_cql: true,
      has_nlpql: true,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Stage 0',
          value: 'stage_0'
        },
        {
          text: 'Stage 1',
          value: 'stage_1'
        },
        {
          text: 'Stage 2',
          value: 'stage_2'
        },
        {
          text: 'Stage 3',
          value: 'stage_3'
        },
        {
          text: 'Stage 4',
          value: 'stage_4'
        },
        {
          text: 'Other Site',
          value: 'other_site'
        }
      ],
      nlpql_feature: 'form_4100_question_63'
    },
    {
      question_name: 'Other site(s) involved with acute GVHD',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '64',
      has_cql: true,
      has_nlpql: true,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_64'
    },
    {
      question_name: 'Specify other site(s)',
      question_type: 'TEXT',
      question_number: '65',
      has_cql: false,
      has_nlpql: false,
      group: 'Graft vs. Host Disease',
      answers: [],
      nlpql_feature: 'form_4100_question_65'
    },
    {
      question_name: 'Maximum overall grade of acute GVHD',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '66',
      has_cql: true,
      has_nlpql: true,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'I',
          value: 'i'
        },
        {
          text: 'II',
          value: 'ii'
        },
        {
          text: 'III',
          value: 'iii'
        },
        {
          text: 'IV',
          value: 'iv'
        },
        {
          text: 'Not applicable',
          value: 'not_applicable'
        }
      ],
      nlpql_feature: 'form_4100_question_66'
    },
    {
      question_name: 'Date maximum overall grade of acute GVHD:',
      question_type: 'TEXT',
      question_number: '67',
      has_cql: true,
      has_nlpql: true,
      group: 'Graft vs. Host Disease',
      answers: [],
      nlpql_feature: 'form_4100_question_67'
    },
    {
      question_name: 'Did chronic GVHD develop since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '68',
      has_cql: true,
      has_nlpql: false,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_68'
    },
    {
      question_name: 'Date of chronic GVHD diagnosis',
      question_type: 'DATE',
      question_number: '69',
      has_cql: true,
      has_nlpql: false,
      group: 'Graft vs. Host Disease',
      answers: [],
      nlpql_feature: 'form_4100_question_69'
    },
    {
      question_name: 'Did chronic GVHD persist since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '70',
      has_cql: false,
      has_nlpql: false,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_70'
    },
    {
      question_name:
        'Maximum grade of chronic GVHD (according to best clinical judgment)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '71',
      has_cql: false,
      has_nlpql: true,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Mild',
          value: 'mild'
        },
        {
          text: 'Moderate',
          value: 'moderate'
        },
        {
          text: 'Severe',
          value: 'severe'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_71'
    },
    {
      question_name: 'Specify if chronic GVHD was limited or extensive',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '72',
      has_cql: false,
      has_nlpql: true,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Limited',
          value: 'limited'
        },
        {
          text: 'Extensive',
          value: 'extensive'
        }
      ],
      nlpql_feature: 'form_4100_question_72'
    },
    {
      question_name: 'Date of maximum grade of chronic GVHD',
      question_type: 'DATE',
      question_number: '73',
      has_cql: false,
      has_nlpql: false,
      group: 'Graft vs. Host Disease',
      answers: [],
      nlpql_feature: 'form_4100_question_73'
    },
    {
      question_name:
        'Is the recipient still taking systemic steroids? (Do not report steroids for adrenal insufficiency, <= 10 mg/day for adults, < 0.1 mg/kg/day for children)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '74',
      has_cql: true,
      has_nlpql: false,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Not Applicable',
          value: 'not_applicable'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_74'
    },
    {
      question_name:
        'Is the recipient still taking (non-steroid) immunosuppressive agents (including PUVA) for GVHD?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '75',
      has_cql: true,
      has_nlpql: false,
      group: 'Graft vs. Host Disease',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Not Applicable',
          value: 'not_applicable'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_75'
    },
    {
      question_name:
        'Did the recipient develop Cytokine Release Syndrome (CRS) since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '76',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_76'
    },
    {
      question_name: 'Date of diagnosis:',
      question_type: 'DATE',
      question_number: '77',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_77'
    },
    {
      question_name: 'Was therapy given? (for CRS)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '78',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_78'
    },
    {
      question_name: 'Specify therapy given for CRS (check all that apply)',
      question_type: 'TEXT',
      question_number: '79',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_79'
    },
    {
      question_name: 'Specify other therapy:',
      question_type: 'TEXT',
      question_number: '80',
      has_cql: false,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_80'
    },
    {
      question_name: 'Fevers (>= 100.4 degrees F or >= 38 degrees C)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '81',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_81'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '82',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_82'
    },
    {
      question_name: 'Hypotension requiring therapy',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '83',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_83'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '84',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_84'
    },
    {
      question_name: 'Intravenous fluids',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '85',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_85'
    },
    {
      question_name: 'Vasopressor(s)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '86',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_86'
    },
    {
      question_name: 'Specify the number of vasopressors used for therapy',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '87',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: '1',
          value: '1'
        },
        {
          text: '>=2',
          value: '>=2'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_87'
    },
    {
      question_name: 'Other therapy',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '88',
      has_cql: false,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_88'
    },
    {
      question_name: 'Specify other therapy:',
      question_type: 'TEXT',
      question_number: '89',
      has_cql: false,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_89'
    },
    {
      question_name: 'Was hypotension controlled with therapy?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '90',
      has_cql: false,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_90'
    },
    {
      question_name:
        'Hypoxia requiring minimal supplemental oxygen (FiO2 <40%)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '91',
      has_cql: false,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_91'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '92',
      has_cql: false,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_92'
    },
    {
      question_name:
        'Hypoxia requiring more than minimal supplemental oxygen (FiO2 >=40%)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '93',
      has_cql: false,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_93'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '94',
      has_cql: false,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_94'
    },
    {
      question_name:
        'Was positive pressure ventilatory support required? (CPAP, BiPAP, intubation and mechanical ventilation)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '95',
      has_cql: false,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_95'
    },
    {
      question_name: 'Date started:',
      question_type: 'DATE',
      question_number: '96',
      has_cql: false,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_96'
    },
    {
      question_name: 'Did cytokine release syndrome resolve?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '97',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_97'
    },
    {
      question_name: 'Date resolved:',
      question_type: 'DATE',
      question_number: '98',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_98'
    },
    {
      question_name: 'Neurotoxicity',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '99',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_99'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '100',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_100'
    },
    {
      question_name: 'Was a CARTOX-10 neurologic assessment performed?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '101',
      has_cql: false,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_101'
    },
    {
      question_name: 'What was the lowest CARTOX score?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '102',
      has_cql: false,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: '10',
          value: '10'
        },
        {
          text: '7-9',
          value: '_7-9'
        },
        {
          text: '3-6',
          value: '_3-6'
        },
        {
          text: '0-2',
          value: '_0-2'
        },
        {
          text: 'Unable to be assessed',
          value: '_unable_to_be_assessed'
        }
      ],
      nlpql_feature: 'form_4100_question_102'
    },
    {
      question_name: 'Depressed level of consciousness',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '103',
      has_cql: false,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_103'
    },
    {
      question_name: 'Dysphasia / aphasia',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '104',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_104'
    },
    {
      question_name: 'Grade',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '105',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: '1',
          value: '1'
        },
        {
          text: '2',
          value: '2'
        },
        {
          text: '3 (aphasia)',
          value: '3_aphasia'
        }
      ],
      nlpql_feature: 'form_4100_question_105'
    },
    {
      question_name: 'Seizure',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '106',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_106'
    },
    {
      question_name: 'Type',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '107',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Complex partial',
          value: 'complex_partial'
        },
        {
          text: 'Generalized tonic-clonic',
          value: 'generalized_tonic-clonic'
        },
        {
          text: 'Non-convulsive status epliepticus',
          value: 'non-convulsive_status_epliepticus'
        },
        {
          text: 'Simple partial',
          value: 'simple_partial'
        },
        {
          text: 'Status epilepticus',
          value: 'status_epilepticus'
        },
        {
          text: 'Other type',
          value: 'other_type'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_107'
    },
    {
      question_name: 'Specify other type:',
      question_type: 'TEXT',
      question_number: '108',
      has_cql: false,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_108'
    },
    {
      question_name: 'Severity',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '109',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Grade 3',
          value: 'grade_3'
        },
        {
          text: 'Grade 4',
          value: 'grade_4'
        }
      ],
      nlpql_feature: 'form_4100_question_109'
    },
    {
      question_name: 'Hemiparesis / paraparesis / other motor deficit',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '110',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_110'
    },
    {
      question_name: 'Cerebral edema',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '111',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_111'
    },
    {
      question_name: 'Grade',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '112',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: '3',
          value: '3'
        },
        {
          text: '4',
          value: '4'
        }
      ],
      nlpql_feature: 'form_4100_question_112'
    },
    {
      question_name: 'Hallucinations',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '113',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_113'
    },
    {
      question_name: 'Tremors',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '114',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_114'
    },
    {
      question_name: 'Cerebral vascular accident (stroke)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '115',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_115'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '116',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_116'
    },
    {
      question_name: 'Type',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '117',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Hemorrhagic',
          value: 'hemorrhagic'
        },
        {
          text: 'Ischemic',
          value: 'ischemic'
        }
      ],
      nlpql_feature: 'form_4100_question_117'
    },
    {
      question_name: 'Leukoencephalopathy',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '118',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_118'
    },
    {
      question_name: 'Other symptom',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '119',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_119'
    },
    {
      question_name: 'Specify other symptom:',
      question_type: 'DATE',
      question_number: '120',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_120'
    },
    {
      question_name: 'Did neurotoxicity resolve?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '121',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_121'
    },
    {
      question_name: 'Date resolved:',
      question_type: 'DATE',
      question_number: '122',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_122'
    },
    {
      question_name:
        'Specify therapy given for neurotoxicity (check all that apply)',
      question_type: 'MULTIPLE_SELECT',
      question_number: '123',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [
        {
          text: 'Anti-epileptics',
          value: 'anti-epileptics'
        },
        {
          text: 'Corticosteroids',
          value: 'corticosteroids'
        },
        {
          text: 'Other therapy',
          value: 'other_therapy'
        }
      ],
      nlpql_feature: 'form_4100_question_123'
    },
    {
      question_name: 'Specify other therapy:',
      question_type: 'TEXT',
      question_number: '124',
      has_cql: false,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_124'
    },
    {
      question_name: 'Hypogammaglobulinemia',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '125',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_125'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '126',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_126'
    },
    {
      question_name: 'Did hypogammaglobulinema resolve?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '127',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_127'
    },
    {
      question_name: 'Date resolved:',
      question_type: 'DATE',
      question_number: '128',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_128'
    },
    {
      question_name:
        'Did recipient require immunoglobulin replacement therapy?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '129',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_129'
    },
    {
      question_name: 'Is the recipient still requiring replacement therapy?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '130',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ],
      nlpql_feature: 'form_4100_question_130'
    },
    {
      question_name: 'Tumor lysis syndrome',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '131',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_131'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '132',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_132'
    },
    {
      question_name: 'Grade',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '133',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: '3',
          value: '3'
        },
        {
          text: '4',
          value: '4'
        },
        {
          text: '5',
          value: '5'
        }
      ],
      nlpql_feature: 'form_4100_question_133'
    },
    {
      question_name: 'Other toxicity',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '134',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_134'
    },
    {
      question_name: 'Specify other toxicity:',
      question_type: 'TEXT',
      question_number: '135',
      has_cql: false,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_135'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '136',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_136'
    },
    {
      question_name: 'Has the recipient developed any grade 3 organ toxicity?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '137',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_137'
    },
    {
      question_name: 'Gastrointestinal (GI)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '138',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_138'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '139',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_139'
    },
    {
      question_name: 'Heart',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '140',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_140'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '141',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_141'
    },
    {
      question_name: 'Kidneys',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '142',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_142'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '143',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_143'
    },
    {
      question_name: 'Liver',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '144',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_144'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '145',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_145'
    },
    {
      question_name: 'Lungs',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '146',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_146'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '147',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_147'
    },
    {
      question_name: 'Musculoskeletal',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '148',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_148'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '149',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_149'
    },
    {
      question_name: 'Neurologic',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '150',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_150'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '151',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_151'
    },
    {
      question_name: 'Other organ',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '152',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_152'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '153',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_153'
    },
    {
      question_name: 'Specify other organ:',
      question_type: 'TEXT',
      question_number: '154',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_154'
    },
    {
      question_name: 'Has the recipient developed any grade 4 organ toxicity?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '155',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_155'
    },
    {
      question_name: 'Gastrointestinal (GI)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '156',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_156'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '157',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_157'
    },
    {
      question_name: 'Heart',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '158',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_158'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '159',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_159'
    },
    {
      question_name: 'Kidneys',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '160',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_160'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '161',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_161'
    },
    {
      question_name: 'Liver',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '162',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_162'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '163',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_163'
    },
    {
      question_name: 'Lungs',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '164',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_164'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '165',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_165'
    },
    {
      question_name: 'Musculoskeletal',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '166',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_166'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '167',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_167'
    },
    {
      question_name: 'Neurologic',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '168',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_168'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '169',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_169'
    },
    {
      question_name: 'Other organ',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '170',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_170'
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '171',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_171'
    },
    {
      question_name: 'Specify other organ:',
      question_type: 'TEXT',
      question_number: '172',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_172'
    },
    {
      question_name: 'Interleukin-6',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '173',
      has_cql: false,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [
        {
          text: 'Known',
          value: 'known'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_173'
    },
    {
      question_name: 'pg/mL',
      question_type: 'TEXT',
      question_number: '174',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_174'
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '175',
      has_cql: true,
      has_nlpql: true,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_175'
    },
    {
      question_name: 'Interferon gamma IFN gamma',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '176',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [
        {
          text: 'Known',
          value: 'known'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_176'
    },
    {
      question_name: 'IU/mL',
      question_type: 'TEXT',
      question_number: '177',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_177'
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '178',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_178'
    },
    {
      question_name:
        'Soluble interleukin-2 receptor alpha (sIL2RA or soluble CD25)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '179',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [
        {
          text: 'Known',
          value: 'known'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_179'
    },
    {
      question_name: 'U/mL',
      question_type: 'TEXT',
      question_number: '180',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_180'
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '181',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_181'
    },
    {
      question_name: 'Total serum ferritin',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '182',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [
        {
          text: 'Known',
          value: 'known'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_182'
    },
    {
      question_name: 'ng/mL(ug/L)',
      question_type: 'TEXT',
      question_number: '183',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_183'
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '184',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_184'
    },
    {
      question_name: 'C-reactive protein',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '185',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [
        {
          text: 'Known',
          value: 'known'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        }
      ],
      nlpql_feature: 'form_4100_question_185'
    },
    {
      question_name: 'mg/dL',
      question_type: 'TEXT',
      question_number: '186',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_186'
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '187',
      has_cql: true,
      has_nlpql: false,
      group: 'Toxicities',
      answers: [],
      nlpql_feature: 'form_4100_question_187'
    },
    {
      question_name:
        'Did the recipient develop a clinically significant infection since the date of last report?',
      question_type: 'TEXT',
      question_number: '188',
      has_cql: true,
      has_nlpql: true,
      group: 'Infection',
      answers: [],
      nlpql_feature: 'form_4100_question_188'
    },
    {
      question_name: 'Organism',
      question_type: 'TEXT',
      question_number: '189',
      has_cql: false,
      has_nlpql: true,
      group: 'Infection',
      answers: [],
      nlpql_feature: 'form_4100_question_189'
    },
    {
      question_name: 'Specify other organism:',
      question_type: 'TEXT',
      question_number: '190',
      has_cql: false,
      has_nlpql: true,
      group: 'Infection',
      answers: [],
      nlpql_feature: 'form_4100_question_190'
    },
    {
      question_name: 'Site (check all that apply)',
      question_type: 'MULTIPLE_SELECT',
      question_number: '191',
      has_cql: false,
      has_nlpql: true,
      group: 'Infection',
      answers: [
        {
          text: 'Blood',
          value: 'blood'
        },
        {
          text: 'Bone',
          value: 'bone'
        },
        {
          text: 'CNS',
          value: 'cns'
        },
        {
          text: 'Eyes',
          value: '_eyes'
        },
        {
          text: 'Genital area',
          value: 'genital_area'
        },
        {
          text: 'GI tract-Lower',
          value: '_gi_tract-lower'
        },
        {
          text: 'GI tract-Upper',
          value: 'gi_tract-upper'
        },
        {
          text: 'Joints',
          value: 'joints'
        },
        {
          text: 'Liver/Spleen',
          value: 'liver/spleen'
        },
        {
          text: 'Lung',
          value: 'lung'
        },
        {
          text: 'Sinus and/or Upper respiratory tract',
          value: 'sinus_and/or_upper_respiratory_tract'
        },
        {
          text: 'Skin-cellulitis',
          value: 'skin-cellulitis'
        },
        {
          text: 'Skin-necrotizing fasciitis',
          value: 'skin-necrotizing_fasciitis'
        },
        {
          text: 'Urinary tract-Lower',
          value: 'urinary_tract-lower'
        },
        {
          text: 'Urinary tract-Upper',
          value: 'urinary_tract-upper'
        }
      ],
      nlpql_feature: 'form_4100_question_191'
    },
    {
      question_name: 'Date of diagnosis:',
      question_type: 'DATE',
      question_number: '192',
      has_cql: false,
      has_nlpql: true,
      group: 'Infection',
      answers: [],
      nlpql_feature: 'form_4100_question_192'
    },
    {
      question_name:
        'Was the recipient pregnant at any time in this reporting period? (Female only)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '193',
      has_cql: false,
      has_nlpql: true,
      group: 'Functional Status',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        },
        {
          text: 'Previously Reported',
          value: 'previously_reported'
        }
      ],
      nlpql_feature: 'form_4100_question_193'
    },
    {
      question_name:
        "Was the recipient's female partner pregnant at any time in this reporting period? (Male only)",
      question_type: 'MULTIPLE_CHOICE',
      question_number: '194',
      has_cql: false,
      has_nlpql: true,
      group: 'Functional Status',
      answers: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        },
        {
          text: 'Unknown',
          value: 'unknown'
        },
        {
          text: 'Previously Reported',
          value: 'previously_reported'
        }
      ],
      nlpql_feature: 'form_4100_question_194'
    }
  ]
};
