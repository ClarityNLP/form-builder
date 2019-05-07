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
      evidence_bundle: {
        group_1_product: [
          'question_1_name_of_productfor_most_assertion',
          'question_1_name_of_productfor_most_coded'
        ]
      }
    },
    {
      question_name:
        'Date of actual contact with the recipient to determine medical status for this follow-up report',
      question_type: 'DATE',
      question_number: '2',
      group: 'Survival',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        "Specify the recipient's survival status at the date of last contact",
      question_type: 'MULTIPLE_CHOICE',
      question_number: '3',
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
      evidence_bundle: {}
    },
    {
      question_name:
        'Has the recipient received a new course of cellular therapy (unplanned) since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '4',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify the reason for which cellular therapy was given',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '5',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of cellular therapy:',
      question_type: 'DATE',
      question_number: '6',
      group: 'Subsequent Cellular Infusions',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Did the recipient receive an HCT since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '7',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of HCT:',
      question_type: 'DATE',
      question_number: '8',
      group: 'Subsequent Cellular Infusions',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'What was the best response to the cellular therapy?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '9',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Was the date of best response previously reported?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '10',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date response established',
      question_type: 'DATE',
      question_number: '11',
      group: 'Best Response to Cellular Therapy',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Was a disease relapse or progression detected since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '12',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date documented:',
      question_type: 'DATE',
      question_number: '13',
      group: 'Disease Relapse or Progression',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Was there evidence of initial recovery?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '14',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date ANC >= 500/mm3 (first of 3 lab values)',
      question_type: 'DATE',
      question_number: '15',
      group: 'Peripheral Blood Count Recovery',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Was an initial platelet count >= 20 x 109/L achieved?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '16',
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
      evidence_bundle: {
        group_6_peripheral_blood_count_recovery: [
          'question_16_was_an_initial_platelet_assertion',
          'question_16_was_an_initial_platelet_coded'
        ]
      }
    },
    {
      question_name: 'Date platelets >= 20 x 109/L',
      question_type: 'DATE',
      question_number: '17',
      group: 'Peripheral Blood Count Recovery',
      answers: [],
      evidence_bundle: {
        group_6_peripheral_blood_count_recovery: [
          'question_17_date_platelets20_x_109l_assertion'
        ]
      }
    },
    {
      question_name: 'Date of most recent complete blood count',
      question_type: 'DATE',
      question_number: '18',
      group: 'Current Hematologic Findings',
      answers: [],
      evidence_bundle: {
        group_6_peripheral_blood_count_recovery: [
          'question_18_date_of_most_recent_assertion',
          'question_18_date_of_most_recent_coded'
        ]
      }
    },
    {
      question_name: 'WBC',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '19',
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
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_19_wbc_assertion',
          'question_19_wbc_coded'
        ]
      }
    },
    {
      question_name: 'WBC',
      question_type: 'TEXT_WITH_MULTIPLE_CHOICE',
      question_number: '20',
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: '',
          value: ''
        }
      ],
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_20_wbc_assertion',
          'question_20_wbc_coded'
        ]
      }
    },
    {
      question_name: 'Neutrophils',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '21',
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
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_21_neutrophils_assertion',
          'question_21_neutrophils_coded'
        ]
      }
    },
    {
      question_name: 'Neutrophils',
      question_type: 'TEXT',
      question_number: '22',
      group: 'Current Hematologic Findings',
      answers: [],
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_22_neutrophils_assertion',
          'question_22_neutrophils_coded'
        ]
      }
    },
    {
      question_name: 'Lymphocytes',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '23',
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
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_23_lymphocytes_assertion',
          'question_23_lymphocytes_coded'
        ]
      }
    },
    {
      question_name: 'Lymphocytes',
      question_type: 'TEXT',
      question_number: '24',
      group: 'Current Hematologic Findings',
      answers: [],
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_24_lymphocytes_assertion',
          'question_24_lymphocytes_coded'
        ]
      }
    },
    {
      question_name: 'Hemoglobin',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '25',
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
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_25_hemoglobin_assertion',
          'question_25_hemoglobin_coded'
        ]
      }
    },
    {
      question_name: 'Hemoglobin',
      question_type: 'TEXT_WITH_MULTIPLE_CHOICE',
      question_number: '26',
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: '',
          value: ''
        }
      ],
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_26_hemoglobin_assertion',
          'question_26_hemoglobin_coded'
        ]
      }
    },
    {
      question_name: 'Hematocrit',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '27',
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
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_27_hematocrit_assertion',
          'question_27_hematocrit_coded'
        ]
      }
    },
    {
      question_name: 'Hematocrit',
      question_type: 'TEXT',
      question_number: '28',
      group: 'Current Hematologic Findings',
      answers: [],
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_28_hematocrit_assertion',
          'question_28_hematocrit_coded'
        ]
      }
    },
    {
      question_name: 'Was RBC transfused <= 30 days before date of test?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '29',
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
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_29_was_rbc_transfused30_days_assertion',
          'question_29_was_rbc_transfused30_days_coded'
        ]
      }
    },
    {
      question_name: 'Platelets',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '30',
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
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_30_platelets_assertion',
          'question_30_platelets_coded'
        ]
      }
    },
    {
      question_name: 'Platelets',
      question_type: 'TEXT_WITH_MULTIPLE_CHOICE',
      question_number: '31',
      group: 'Current Hematologic Findings',
      answers: [
        {
          text: '',
          value: ''
        }
      ],
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_31_platelets_assertion',
          'question_31_platelets_coded'
        ]
      }
    },
    {
      question_name: 'Were platelets transfused <= 7 days before date of test?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '32',
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
      evidence_bundle: {
        group_7_current_hematologic_findings: [
          'question_32_were_platelets_transfused7_days_assertion'
        ]
      }
    },
    {
      question_name:
        'Did a new malignancy, myelodysplastic, myeloproliferative, or lymphoproliferative disease / disorder occur that is different from the disease / disorder for which the HCT or cellular therapy was performed? (include clonal cytogenetic abnormalities, and post-transplant lymphoproliferative disorders)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '33',
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
      evidence_bundle: {}
    },
    {
      question_name:
        'Were tests performed to detect persistence of the cellular product since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '34',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Was persistence evaluated by molecular assay? (e.g. PCR)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '35',
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
      evidence_bundle: {
        group_9_persistence_of_cells: [
          'question_35_was_persistence_evaluated_by_assertion'
        ]
      }
    },
    {
      question_name: 'Date sample collected',
      question_type: 'DATE',
      question_number: '36',
      group: 'Persistence of Cells',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify the cell source',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '37',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other cell source',
      question_type: 'TEXT',
      question_number: '38',
      group: 'Persistence of Cells',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Were the infused cells detected?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '39',
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
      evidence_bundle: {}
    },
    {
      question_name:
        'Was persistence evaluated by flow cytometry testing? (immunophenotyping)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '40',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected',
      question_type: 'DATE',
      question_number: '41',
      group: 'Persistence of Cells',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify the cell source',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '42',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other cell source',
      question_type: 'TEXT',
      question_number: '43',
      group: 'Persistence of Cells',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Were the infused cells detected?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '44',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Was persistence evaluated by immunohistochemistry?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '45',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected',
      question_type: 'DATE',
      question_number: '46',
      group: 'Persistence of Cells',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify the cell source',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '47',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other cell source',
      question_type: 'TEXT',
      question_number: '48',
      group: 'Persistence of Cells',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Were the infused cells detected?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '49',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Was persistence evaluated by other method?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '50',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other method',
      question_type: 'TEXT',
      question_number: '51',
      group: 'Persistence of Cells',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected',
      question_type: 'DATE',
      question_number: '52',
      group: 'Persistence of Cells',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify the cell source',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '53',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other cell source',
      question_type: 'TEXT',
      question_number: '54',
      group: 'Persistence of Cells',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Were the infused cells detected?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '55',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Did acute GVHD develop since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '56',
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
      evidence_bundle: {
        group_9_persistence_of_cells: [
          'question_56_did_acute_gvhd_develop_assertion',
          'question_56_did_acute_gvhd_develop_coded'
        ]
      }
    },
    {
      question_name: 'Date of acute GVHD diagnosis',
      question_type: 'DATE',
      question_number: '57',
      group: 'Graft vs. Host Disease',
      answers: [],
      evidence_bundle: {
        'group_10_graft_vs._host_disease': [
          'question_57_date_of_acute_gvhd_diagnosis_assertion',
          'question_57_date_of_acute_gvhd_diagnosis_coded'
        ]
      }
    },
    {
      question_name: 'Did acute GVHD persist since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '58',
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
      evidence_bundle: {
        'group_10_graft_vs._host_disease': [
          'question_58_did_acute_gvhd_persist_assertion',
          'question_58_did_acute_gvhd_persist_coded'
        ]
      }
    },
    {
      question_name: 'Overall grade of acute GVHD at diagnosis',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '59',
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
      evidence_bundle: {
        'group_10_graft_vs._host_disease': [
          'question_59_overall_grade_of_acute_assertion'
        ]
      }
    },
    {
      question_name: 'Skin',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '60',
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
      evidence_bundle: {
        'group_10_graft_vs._host_disease': ['question_60_skin_assertion']
      }
    },
    {
      question_name:
        'Lower intestinal tract (use mL/day for adult recipients and mL/kg/day for pediatric recipients)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '61',
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
      evidence_bundle: {
        'group_10_graft_vs._host_disease': [
          'question_61_lower_intestinal_tractuse_mlday_assertion'
        ]
      }
    },
    {
      question_name: 'Upper intestinal tract',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '62',
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
      evidence_bundle: {
        'group_10_graft_vs._host_disease': [
          'question_62_upper_intestinal_tract_assertion'
        ]
      }
    },
    {
      question_name: 'Liver',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '63',
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
      evidence_bundle: {
        'group_10_graft_vs._host_disease': ['question_63_liver_assertion']
      }
    },
    {
      question_name: 'Other site(s) involved with acute GVHD',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '64',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other site(s)',
      question_type: 'TEXT',
      question_number: '65',
      group: 'Graft vs. Host Disease',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Maximum overall grade of acute GVHD',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '66',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date maximum overall grade of acute GVHD:',
      question_type: 'TEXT',
      question_number: '67',
      group: 'Graft vs. Host Disease',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Did chronic GVHD develop since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '68',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of chronic GVHD diagnosis',
      question_type: 'DATE',
      question_number: '69',
      group: 'Graft vs. Host Disease',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Did chronic GVHD persist since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '70',
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
      evidence_bundle: {}
    },
    {
      question_name:
        'Maximum grade of chronic GVHD (according to best clinical judgment)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '71',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify if chronic GVHD was limited or extensive',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '72',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of maximum grade of chronic GVHD',
      question_type: 'DATE',
      question_number: '73',
      group: 'Graft vs. Host Disease',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Is the recipient still taking systemic steroids? (Do not report steroids for adrenal insufficiency, <= 10 mg/day for adults, < 0.1 mg/kg/day for children)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '74',
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
      evidence_bundle: {}
    },
    {
      question_name:
        'Is the recipient still taking (non-steroid) immunosuppressive agents (including PUVA) for GVHD?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '75',
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
      evidence_bundle: {}
    },
    {
      question_name:
        'Did the recipient develop Cytokine Release Syndrome (CRS) since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '76',
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
      evidence_bundle: {
        'group_10_graft_vs._host_disease': [
          'question_76_did_the_recipient_develop_assertion',
          'question_76_did_the_recipient_develop_coded'
        ]
      }
    },
    {
      question_name: 'Date of diagnosis:',
      question_type: 'DATE',
      question_number: '77',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Was therapy given? (for CRS)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '78',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify therapy given for CRS (check all that apply)',
      question_type: 'TEXT',
      question_number: '79',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other therapy:',
      question_type: 'TEXT',
      question_number: '80',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Fevers (>= 100.4 degrees F or >= 38 degrees C)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '81',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_81_fevers100.4_degrees_f_or38_assertion',
          'question_81_fevers100.4_degrees_f_or38_coded'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '82',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Hypotension requiring therapy',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '83',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_83_hypotension_requiring_therapy_assertion',
          'question_83_hypotension_requiring_therapy_coded'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '84',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Intravenous fluids',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '85',
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
      evidence_bundle: {
        group_11_toxicities: ['question_85_intravenous_fluids_assertion']
      }
    },
    {
      question_name: 'Vasopressor(s)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '86',
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
      evidence_bundle: {
        group_11_toxicities: ['question_86_vasopressor(s)_assertion']
      }
    },
    {
      question_name: 'Specify the number of vasopressors used for therapy',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '87',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Other therapy',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '88',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other therapy:',
      question_type: 'TEXT',
      question_number: '89',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Was hypotension controlled with therapy?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '90',
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
      evidence_bundle: {}
    },
    {
      question_name:
        'Hypoxia requiring minimal supplemental oxygen (FiO2 <40%)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '91',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_91_hypoxia_requiring_minimal_supplemental_oxygenfio240%)_assertion',
          'question_91_hypoxia_requiring_minimal_supplemental_oxygenfio240%)_coded'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '92',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {
        group_11_toxicities: ['question_92_date_of_onset:_assertion']
      }
    },
    {
      question_name:
        'Hypoxia requiring more than minimal supplemental oxygen (FiO2 >=40%)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '93',
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
      evidence_bundle: {
        group_11_toxicities: ['question_93_hypoxia_requiring_more_than_coded']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '94',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {
        group_11_toxicities: ['question_94_date_of_onset:_assertion']
      }
    },
    {
      question_name:
        'Was positive pressure ventilatory support required? (CPAP, BiPAP, intubation and mechanical ventilation)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '95',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date started:',
      question_type: 'DATE',
      question_number: '96',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {
        group_11_toxicities: ['question_96_date_started:_assertion']
      }
    },
    {
      question_name: 'Did cytokine release syndrome resolve?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '97',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date resolved:',
      question_type: 'DATE',
      question_number: '98',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Neurotoxicity',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '99',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_99_neurotoxicity_assertion',
          'question_99_neurotoxicity_coded'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '100',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Was a CARTOX-10 neurologic assessment performed?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '101',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_101_was_a_cartox-10_neurologic_assertion'
        ]
      }
    },
    {
      question_name: 'What was the lowest CARTOX score?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '102',
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
      evidence_bundle: {
        group_11_toxicities: ['question_102_what_was_the_lowest_assertion']
      }
    },
    {
      question_name: 'Depressed level of consciousness',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '103',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_103_depressed_level_of_consciousness_assertion'
        ]
      }
    },
    {
      question_name: 'Dysphasia / aphasia',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '104',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_104_dysphasiaaphasia_assertion',
          'question_104_dysphasiaaphasia_coded'
        ]
      }
    },
    {
      question_name: 'Grade',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '105',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Seizure',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '106',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_106_seizure_assertion',
          'question_106_seizure_coded'
        ]
      }
    },
    {
      question_name: 'Type',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '107',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other type:',
      question_type: 'TEXT',
      question_number: '108',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Severity',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '109',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Hemiparesis / paraparesis / other motor deficit',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '110',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_110_hemiparesisparaparesisother_motor_deficit_assertion',
          'question_110_hemiparesisparaparesisother_motor_deficit_coded'
        ]
      }
    },
    {
      question_name: 'Cerebral edema',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '111',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_111_cerebral_edema_assertion',
          'question_111_cerebral_edema_coded'
        ]
      }
    },
    {
      question_name: 'Grade',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '112',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Hallucinations',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '113',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_113_hallucinations_assertion',
          'question_113_hallucinations_coded'
        ]
      }
    },
    {
      question_name: 'Tremors',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '114',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_114_tremors_assertion',
          'question_114_tremors_coded'
        ]
      }
    },
    {
      question_name: 'Cerebral vascular accident (stroke)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '115',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_115_cerebral_vascular_accidentstroke)_assertion',
          'question_115_cerebral_vascular_accidentstroke)_coded'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '116',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Type',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '117',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Leukoencephalopathy',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '118',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_118_leukoencephalopathy_assertion',
          'question_118_leukoencephalopathy_coded'
        ]
      }
    },
    {
      question_name: 'Other symptom',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '119',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other symptom:',
      question_type: 'DATE',
      question_number: '120',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Did neurotoxicity resolve?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '121',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date resolved:',
      question_type: 'DATE',
      question_number: '122',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Specify therapy given for neurotoxicity (check all that apply)',
      question_type: 'MULTIPLE_SELECT',
      question_number: '123',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other therapy:',
      question_type: 'TEXT',
      question_number: '124',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Hypogammaglobulinemia',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '125',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_125_hypogammaglobulinemia_assertion',
          'question_125_hypogammaglobulinemia_coded'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '126',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Did hypogammaglobulinema resolve?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '127',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date resolved:',
      question_type: 'DATE',
      question_number: '128',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Did recipient require immunoglobulin replacement therapy?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '129',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Is the recipient still requiring replacement therapy?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '130',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Tumor lysis syndrome',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '131',
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
      evidence_bundle: {
        group_11_toxicities: [
          'question_131_tumor_lysis_syndrome_assertion',
          'question_131_tumor_lysis_syndrome_coded'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '132',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Grade',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '133',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Other toxicity',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '134',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other toxicity:',
      question_type: 'TEXT',
      question_number: '135',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '136',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Has the recipient developed any grade 3 organ toxicity?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '137',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Gastrointestinal (GI)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '138',
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
      evidence_bundle: {
        group_11_toxicities: ['question_138_gastrointestinalgi)_coded']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '139',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Heart',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '140',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '141',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Kidneys',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '142',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '143',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Liver',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '144',
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
      evidence_bundle: {
        group_11_toxicities: ['question_144_liver_coded']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '145',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Lungs',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '146',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '147',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Musculoskeletal',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '148',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '149',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Neurologic',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '150',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '151',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Other organ',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '152',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '153',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other organ:',
      question_type: 'TEXT',
      question_number: '154',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Has the recipient developed any grade 4 organ toxicity?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '155',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Gastrointestinal (GI)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '156',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '157',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Heart',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '158',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '159',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Kidneys',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '160',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '161',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Liver',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '162',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '163',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Lungs',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '164',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '165',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Musculoskeletal',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '166',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '167',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Neurologic',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '168',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '169',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Other organ',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '170',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '171',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other organ:',
      question_type: 'TEXT',
      question_number: '172',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Interleukin-6',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '173',
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
      evidence_bundle: {}
    },
    {
      question_name: 'pg/mL',
      question_type: 'TEXT',
      question_number: '174',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '175',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Interferon gamma IFN gamma',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '176',
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
      evidence_bundle: {}
    },
    {
      question_name: 'IU/mL',
      question_type: 'TEXT',
      question_number: '177',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '178',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Soluble interleukin-2 receptor alpha (sIL2RA or soluble CD25)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '179',
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
      evidence_bundle: {}
    },
    {
      question_name: 'U/mL',
      question_type: 'TEXT',
      question_number: '180',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '181',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Total serum ferritin',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '182',
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
      evidence_bundle: {}
    },
    {
      question_name: 'ng/mL(ug/L)',
      question_type: 'TEXT',
      question_number: '183',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '184',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'C-reactive protein',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '185',
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
      evidence_bundle: {}
    },
    {
      question_name: 'mg/dL',
      question_type: 'TEXT',
      question_number: '186',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '187',
      group: 'Toxicities',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Did the recipient develop a clinically significant infection since the date of last report?',
      question_type: 'TEXT',
      question_number: '188',
      group: 'Infection',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Organism',
      question_type: 'TEXT',
      question_number: '189',
      group: 'Infection',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other organism:',
      question_type: 'TEXT',
      question_number: '190',
      group: 'Infection',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Site (check all that apply)',
      question_type: 'MULTIPLE_SELECT',
      question_number: '191',
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
      evidence_bundle: {}
    },
    {
      question_name: 'Date of diagnosis:',
      question_type: 'DATE',
      question_number: '192',
      group: 'Infection',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Was the recipient pregnant at any time in this reporting period? (Female only)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '193',
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
      evidence_bundle: {
        group_12_infection: [
          'question_193_was_the_recipient_pregnant_assertion'
        ]
      }
    },
    {
      question_name:
        "Was the recipient's female partner pregnant at any time in this reporting period? (Male only)",
      question_type: 'MULTIPLE_CHOICE',
      question_number: '194',
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
      evidence_bundle: {
        group_13_functional_status: [
          "question_194_was_the_recipient's_female_assertion"
        ]
      }
    }
  ],
  questions_with_evidence_count: 55
};
