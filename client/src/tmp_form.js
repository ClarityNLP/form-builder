export default {
  name: 'Form 4100 R4.0',
  owner: 'gatech',
  allocated_users: ['admin'],
  groups: [
    'Persistence of Cells',
    'Peripheral Blood Count Recovery',
    'Current Hematologic Findings',
    'Functional Status',
    'Subsequent Cellular Infusions',
    'Graft vs. Host Disease',
    'New Malignancy, Lymphoproliferative or Myeloproliferative Disease / Disorder',
    'Survival',
    'Infection',
    'Toxicities',
    'Best Response to Cellular Therapy',
    'Disease Relapse or Progression',
    'Product'
  ],
  questions: [
    {
      question_name: 'Name of product (for most recent cell therapy infusion)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '1',
      group: 'cellular_therapy_infusion',
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
        cellular_therapy_infusion: [
          'yescarta_terms',
          'yescarta_codes',
          'kymriah_terms',
          'kymriah_codes',
          'cart_cell_terms',
          'bb2121_terms'
        ]
      }
    },
    {
      question_name:
        'Date of actual contact with the recipient to determine medical status for this follow-up report',
      question_type: 'DATE',
      question_number: '2',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        "Specify the recipient's survival status at the date of last contact",
      question_type: 'MULTIPLE_CHOICE',
      question_number: '3',
      group: '',
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
      group: '',
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
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Did the recipient receive an HCT since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '7',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'What was the best response to the cellular therapy?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '9',
      group: '',
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
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Was a disease relapse or progression detected since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '12',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Was there evidence of initial recovery?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '14',
      group: 'anc_recovery',
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
      group: 'anc_recovery',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Was an initial platelet count >= 20 x 109/L achieved?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '16',
      group: 'initial_platelet_count',
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
        initial_platelet_count: ['platelet_count_unstructured']
      }
    },
    {
      question_name: 'Date platelets >= 20 x 109/L',
      question_type: 'DATE',
      question_number: '17',
      group: '',
      answers: [],
      evidence_bundle: {
        initial_platelet_count: ['platelet_count_unstructured']
      }
    },
    {
      question_name: 'Date of most recent complete blood count',
      question_type: 'DATE',
      question_number: '18',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'WBC',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '19',
      group: 'wbc_hematologic_findings',
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
        wbc_hematologic_findings: ['wbc_hematologic_findings_value_extraction']
      }
    },
    {
      question_name: 'WBC',
      question_type: 'TEXT_WITH_MULTIPLE_CHOICE',
      question_number: '20',
      group: 'wbc_hematologic_findings',
      answers: [
        {
          text: '',
          value: ''
        }
      ],
      evidence_bundle: {
        wbc_hematologic_findings: ['wbc_hematologic_findings_value_extraction']
      }
    },
    {
      question_name: 'Neutrophils',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '21',
      group: 'neutrophils_hematologic_findings',
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
        neutrophils_hematologic_findings: [
          'neutrophils_hematologic_findings_value_extraction'
        ]
      }
    },
    {
      question_name: 'Neutrophils',
      question_type: 'TEXT',
      question_number: '22',
      group: 'neutrophils_hematologic_findings',
      answers: [],
      evidence_bundle: {
        neutrophils_hematologic_findings: [
          'neutrophils_hematologic_findings_value_extraction'
        ]
      }
    },
    {
      question_name: 'Lymphocytes',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '23',
      group: 'lymphocytes_hematologic_findings',
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
        lymphocytes_hematologic_findings: [
          'lymphocytes_hematologic_findings_value_extraction'
        ]
      }
    },
    {
      question_name: 'Lymphocytes',
      question_type: 'TEXT',
      question_number: '24',
      group: 'lymphocytes_hematologic_findings',
      answers: [],
      evidence_bundle: {
        lymphocytes_hematologic_findings: [
          'lymphocytes_hematologic_findings_value_extraction'
        ]
      }
    },
    {
      question_name: 'Hemoglobin',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '25',
      group: 'hemoglobin_hematologic_findings',
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
        hemoglobin_hematologic_findings: [
          'hemoglobin_hematologic_findings_value_extraction'
        ]
      }
    },
    {
      question_name: 'Hemoglobin',
      question_type: 'TEXT_WITH_MULTIPLE_CHOICE',
      question_number: '26',
      group: 'hemoglobin_hematologic_findings',
      answers: [
        {
          text: '',
          value: ''
        }
      ],
      evidence_bundle: {
        hemoglobin_hematologic_findings: [
          'hemoglobin_hematologic_findings_value_extraction'
        ]
      }
    },
    {
      question_name: 'Hematocrit',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '27',
      group: 'hematocrit_hematologic_findings',
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
        hematocrit_hematologic_findings: [
          'hematocrit_hematologic_findings_value_extraction'
        ]
      }
    },
    {
      question_name: 'Hematocrit',
      question_type: 'TEXT',
      question_number: '28',
      group: 'hematocrit_hematologic_findings',
      answers: [],
      evidence_bundle: {
        hematocrit_hematologic_findings: [
          'hematocrit_hematologic_findings_value_extraction'
        ]
      }
    },
    {
      question_name: 'Was RBC transfused <= 30 days before date of test?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '29',
      group: 'rbc_transfused_test',
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
        rbc_transfused_test: ['rbc_transfused_test_unstructured']
      }
    },
    {
      question_name: 'Platelets',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '30',
      group: 'platelets_hematologic_findings',
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
        rbc_transfused_test: ['rbc_transfused_test_unstructured'],
        platelets_hematologic_findings: [
          'platelets_hematologic_findings_value_extraction',
          'platelets_hematologic_findings_structured'
        ]
      }
    },
    {
      question_name: 'Platelets',
      question_type: 'TEXT_WITH_MULTIPLE_CHOICE',
      question_number: '31',
      group: 'platelets_hematologic_findings',
      answers: [
        {
          text: '',
          value: ''
        }
      ],
      evidence_bundle: {
        platelets_hematologic_findings: [
          'platelets_hematologic_findings_value_extraction'
        ]
      }
    },
    {
      question_name: 'Were platelets transfused <= 7 days before date of test?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '32',
      group: 'platelets_transfused_test',
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
        platelets_hematologic_findings: [
          'platelets_hematologic_findings_value_extraction'
        ],
        platelets_transfused_test: ['platelets_transfused_test_unstructured']
      }
    },
    {
      question_name:
        'Did a new malignancy, myelodysplastic, myeloproliferative, or lymphoproliferative disease / disorder occur that is different from the disease / disorder for which the HCT or cellular therapy was performed? (include clonal cytogenetic abnormalities, and post-transplant lymphoproliferative disorders)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '33',
      group: 'new_malignancy_myelodysplastic_myeloproliferative',
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
      evidence_bundle: {
        platelets_transfused_test: ['platelets_transfused_test_unstructured'],
        new_malignancy_myelodysplastic_myeloproliferative: [
          'new_malignancy_myelodysplastic_myeloproliferative_unstructured'
        ]
      }
    },
    {
      question_name:
        'Were tests performed to detect persistence of the cellular product since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '34',
      group: '',
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
      group: 'persistence_evaluated_molecular_assay_pcr',
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
        persistence_evaluated_molecular_assay_pcr: [
          'persistence_evaluated_molecular_assay_pcr_unstructured'
        ]
      }
    },
    {
      question_name: 'Date sample collected',
      question_type: 'DATE',
      question_number: '36',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify the cell source',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '37',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Were the infused cells detected?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '39',
      group: '',
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
      group: 'persistence_evaluated_flow_cytometry',
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
        persistence_evaluated_flow_cytometry: [
          'persistence_evaluated_flow_cytometry_unstructured'
        ]
      }
    },
    {
      question_name: 'Date sample collected',
      question_type: 'DATE',
      question_number: '41',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify the cell source',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '42',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Were the infused cells detected?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '44',
      group: '',
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
      group: 'persistence_evaluated_immunohistochemistry',
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
        persistence_evaluated_immunohistochemistry: [
          'persistence_evaluated_immunohistochemistry_unstructured'
        ]
      }
    },
    {
      question_name: 'Date sample collected',
      question_type: 'DATE',
      question_number: '46',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify the cell source',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '47',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Were the infused cells detected?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '49',
      group: '',
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
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected',
      question_type: 'DATE',
      question_number: '52',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify the cell source',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '53',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Were the infused cells detected?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '55',
      group: '',
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
      group: 'acute_gvhd_develop_last_report',
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
        acute_gvhd_develop_last_report: [
          'acute_gvhd_develop_last_report_unstructured'
        ]
      }
    },
    {
      question_name: 'Date of acute GVHD diagnosis',
      question_type: 'DATE',
      question_number: '57',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Did acute GVHD persist since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '58',
      group: 'acute_gvhd_persist_last_report',
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
        acute_gvhd_persist_last_report: [
          'acute_gvhd_persist_last_report_unstructured'
        ]
      }
    },
    {
      question_name: 'Overall grade of acute GVHD at diagnosis',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '59',
      group: 'overall_grade_acute_gvhd_diagnosis',
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
        overall_grade_acute_gvhd_diagnosis: [
          'overall_grade_acute_gvhd_diagnosis_unstructured'
        ]
      }
    },
    {
      question_name: 'Skin',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '60',
      group: 'skin_graft_vs_host_disease',
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
        skin_graft_vs_host_disease: ['skin_graft_vs_host_disease_unstructured']
      }
    },
    {
      question_name:
        'Lower intestinal tract (use mL/day for adult recipients and mL/kg/day for pediatric recipients)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '61',
      group: 'lower_intestinal_tract_use',
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
        lower_intestinal_tract_use: ['lower_intestinal_tract_use_unstructured']
      }
    },
    {
      question_name: 'Upper intestinal tract',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '62',
      group: 'upper_intestinal_tract',
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
        upper_intestinal_tract: ['upper_intestinal_tract_unstructured']
      }
    },
    {
      question_name: 'Liver',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '63',
      group: 'liver_graft_vs_host_disease',
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
        liver_graft_vs_host_disease: ['billrubin_value', 'gvhd_liver_mixed']
      }
    },
    {
      question_name: 'Other site(s) involved with acute GVHD',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '64',
      group: '',
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
        liver_graft_vs_host_disease: ['billrubin_value', 'gvhd_liver_mixed']
      }
    },
    {
      question_name: 'Specify other site(s)',
      question_type: 'TEXT',
      question_number: '65',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Maximum overall grade of acute GVHD',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '66',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Did chronic GVHD develop since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '68',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Did chronic GVHD persist since the date of last report?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '70',
      group: '',
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
      group: '',
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
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Is the recipient still taking systemic steroids? (Do not report steroids for adrenal insufficiency, <= 10 mg/day for adults, < 0.1 mg/kg/day for children)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '74',
      group: '',
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
      group: '',
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
      group: 'recipient_develop_cytokine_release',
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
        recipient_develop_cytokine_release: [
          'recipient_develop_cytokine_release_unstructured'
        ]
      }
    },
    {
      question_name: 'Date of diagnosis:',
      question_type: 'DATE',
      question_number: '77',
      group: '',
      answers: [],
      evidence_bundle: {
        recipient_develop_cytokine_release: [
          'recipient_develop_cytokine_release_unstructured'
        ]
      }
    },
    {
      question_name: 'Was therapy given? (for CRS)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '78',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other therapy:',
      question_type: 'TEXT',
      question_number: '80',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Fevers (>= 100.4 degrees F or >= 38 degrees C)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '81',
      group: 'fevers_degrees_degrees',
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
        fevers_degrees_degrees: ['fevers_degrees_degrees_value_extraction']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '82',
      group: '',
      answers: [],
      evidence_bundle: {
        fevers_degrees_degrees: ['fevers_degrees_degrees_value_extraction']
      }
    },
    {
      question_name: 'Hypotension requiring therapy',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '83',
      group: 'hypotension_requiring_therapy',
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
        hypotension_requiring_therapy: [
          'hypotension_requiring_therapy_unstructured'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '84',
      group: '',
      answers: [],
      evidence_bundle: {
        hypotension_requiring_therapy: [
          'hypotension_requiring_therapy_unstructured'
        ]
      }
    },
    {
      question_name: 'Intravenous fluids',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '85',
      group: 'intravenous_fluids_toxicities',
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
        intravenous_fluids_toxicities: [
          'intravenous_fluids_toxicities_unstructured'
        ]
      }
    },
    {
      question_name: 'Vasopressor(s)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '86',
      group: 'vasopressors_toxicities',
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
        vasopressors_toxicities: ['vasopressors_toxicities_unstructured']
      }
    },
    {
      question_name: 'Specify the number of vasopressors used for therapy',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '87',
      group: '',
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
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Was hypotension controlled with therapy?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '90',
      group: '',
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
      group: 'hypoxia_requiring_minimal_supplemental',
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
        hypoxia_requiring_minimal_supplemental: [
          'hypoxia_requiring_minimal_supplemental_value_extraction'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '92',
      group: '',
      answers: [],
      evidence_bundle: {
        hypoxia_requiring_minimal_supplemental: [
          'hypoxia_requiring_minimal_supplemental_value_extraction'
        ]
      }
    },
    {
      question_name:
        'Hypoxia requiring more than minimal supplemental oxygen (FiO2 >=40%)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '93',
      group: 'hypoxia_requiring_minimal_supplemental',
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
        hypoxia_requiring_minimal_supplemental: [
          'hypoxia_requiring_minimal_supplemental_value_extraction'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '94',
      group: '',
      answers: [],
      evidence_bundle: {
        hypoxia_requiring_minimal_supplemental: [
          'hypoxia_requiring_minimal_supplemental_value_extraction'
        ]
      }
    },
    {
      question_name:
        'Was positive pressure ventilatory support required? (CPAP, BiPAP, intubation and mechanical ventilation)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '95',
      group: 'positive_pressure_ventilatory_support',
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
        positive_pressure_ventilatory_support: [
          'positive_pressure_ventilatory_support_unstructured'
        ]
      }
    },
    {
      question_name: 'Date started:',
      question_type: 'DATE',
      question_number: '96',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Did cytokine release syndrome resolve?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '97',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Neurotoxicity',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '99',
      group: 'neurotoxicity_toxicities',
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
        neurotoxicity_toxicities: ['neurotoxicity_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '100',
      group: '',
      answers: [],
      evidence_bundle: {
        neurotoxicity_toxicities: ['neurotoxicity_toxicities_unstructured']
      }
    },
    {
      question_name: 'Was a CARTOX-10 neurologic assessment performed?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '101',
      group: 'cartox10_neurologic_assessment_performed',
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
        cartox10_neurologic_assessment_performed: [
          'cartox10_neurologic_assessment_performed_unstructured'
        ]
      }
    },
    {
      question_name: 'What was the lowest CARTOX score?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '102',
      group: 'lowest_cartox_score',
      answers: [
        {
          text: '10',
          value: '10'
        },
        {
          text: '7-9',
          value: '7-9'
        },
        {
          text: '3--6',
          value: '3--6'
        },
        {
          text: '0--2',
          value: '0--2'
        },
        {
          text: 'Unable to be assessed',
          value: 'unable_to_be_assessed'
        }
      ],
      evidence_bundle: {
        lowest_cartox_score: ['lowest_cartox_score_value_extraction']
      }
    },
    {
      question_name: 'Depressed level of consciousness',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '103',
      group: 'depressed_level_consciousness',
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
        depressed_level_consciousness: [
          'depressed_level_consciousness_unstructured'
        ]
      }
    },
    {
      question_name: 'Dysphasia / aphasia',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '104',
      group: 'dysphasia_aphasia_toxicities',
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
        dysphasia_aphasia_toxicities: [
          'dysphasia_aphasia_toxicities_unstructured'
        ]
      }
    },
    {
      question_name: 'Grade',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '105',
      group: 'grade_toxicities',
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
      evidence_bundle: {
        grade_toxicities: ['grade_toxicities_value_extraction']
      }
    },
    {
      question_name: 'Seizure',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '106',
      group: 'seizure_toxicities',
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
        seizure_toxicities: ['seizure_toxicities_unstructured']
      }
    },
    {
      question_name: 'Type',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '107',
      group: '',
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
      evidence_bundle: {
        seizure_toxicities: ['seizure_toxicities_unstructured']
      }
    },
    {
      question_name: 'Specify other type:',
      question_type: 'TEXT',
      question_number: '108',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Severity',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '109',
      group: 'severity_toxicities',
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
      evidence_bundle: {
        severity_toxicities: ['severity_toxicities_value_extraction']
      }
    },
    {
      question_name: 'Hemiparesis / paraparesis / other motor deficit',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '110',
      group: 'hemiparesis_paraparesis_motor_deficit',
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
        hemiparesis_paraparesis_motor_deficit: [
          'hemiparesis_paraparesis_motor_deficit_unstructured'
        ]
      }
    },
    {
      question_name: 'Cerebral edema',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '111',
      group: 'cerebral_edema_toxicities',
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
        cerebral_edema_toxicities: ['cerebral_edema_toxicities_unstructured']
      }
    },
    {
      question_name: 'Grade',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '112',
      group: '',
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
      evidence_bundle: {
        cerebral_edema_toxicities: ['cerebral_edema_toxicities_unstructured']
      }
    },
    {
      question_name: 'Hallucinations',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '113',
      group: 'hallucinations_toxicities',
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
        hallucinations_toxicities: ['hallucinations_toxicities_unstructured']
      }
    },
    {
      question_name: 'Tremors',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '114',
      group: 'tremors_toxicities',
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
        hallucinations_toxicities: ['hallucinations_toxicities_unstructured'],
        tremors_toxicities: ['tremors_toxicities_unstructured']
      }
    },
    {
      question_name: 'Cerebral vascular accident (stroke)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '115',
      group: 'cerebral_vascular_accident_stroke',
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
        tremors_toxicities: ['tremors_toxicities_unstructured'],
        cerebral_vascular_accident_stroke: [
          'cerebral_vascular_accident_stroke_unstructured'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '116',
      group: '',
      answers: [],
      evidence_bundle: {
        cerebral_vascular_accident_stroke: [
          'cerebral_vascular_accident_stroke_unstructured'
        ]
      }
    },
    {
      question_name: 'Type',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '117',
      group: '',
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
      group: 'leukoencephalopathy_toxicities',
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
        leukoencephalopathy_toxicities: [
          'leukoencephalopathy_toxicities_unstructured'
        ]
      }
    },
    {
      question_name: 'Other symptom',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '119',
      group: '',
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
        leukoencephalopathy_toxicities: [
          'leukoencephalopathy_toxicities_unstructured'
        ]
      }
    },
    {
      question_name: 'Specify other symptom:',
      question_type: 'DATE',
      question_number: '120',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Did neurotoxicity resolve?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '121',
      group: 'neurotoxicity_resolve_toxicities',
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
        neurotoxicity_resolve_toxicities: [
          'neurotoxicity_resolve_toxicities_unstructured'
        ]
      }
    },
    {
      question_name: 'Date resolved:',
      question_type: 'DATE',
      question_number: '122',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Specify therapy given for neurotoxicity (check all that apply)',
      question_type: 'MULTIPLE_SELECT',
      question_number: '123',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Hypogammaglobulinemia',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '125',
      group: 'hypogammaglobulinemia_toxicities',
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
        hypogammaglobulinemia_toxicities: [
          'hypogammaglobulinemia_toxicities_unstructured'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '126',
      group: '',
      answers: [],
      evidence_bundle: {
        hypogammaglobulinemia_toxicities: [
          'hypogammaglobulinemia_toxicities_unstructured'
        ]
      }
    },
    {
      question_name: 'Did hypogammaglobulinema resolve?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '127',
      group: 'hypogammaglobulinema_resolve_toxicities',
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
        hypogammaglobulinema_resolve_toxicities: [
          'hypogammaglobulinema_resolve_toxicities_unstructured'
        ]
      }
    },
    {
      question_name: 'Date resolved:',
      question_type: 'DATE',
      question_number: '128',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Did recipient require immunoglobulin replacement therapy?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '129',
      group: '',
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
      group: '',
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
      group: 'tumor_lysis_syndrome',
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
        tumor_lysis_syndrome: ['tumor_lysis_syndrome_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '132',
      group: '',
      answers: [],
      evidence_bundle: {
        tumor_lysis_syndrome: ['tumor_lysis_syndrome_unstructured']
      }
    },
    {
      question_name: 'Grade',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '133',
      group: '',
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
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '136',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Has the recipient developed any grade 3 organ toxicity?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '137',
      group: '',
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
      group: 'gastrointestinal_gi_toxicities',
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
        gastrointestinal_gi_toxicities: [
          'gastrointestinal_gi_toxicities_unstructured'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '139',
      group: '',
      answers: [],
      evidence_bundle: {
        gastrointestinal_gi_toxicities: [
          'gastrointestinal_gi_toxicities_unstructured'
        ]
      }
    },
    {
      question_name: 'Heart',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '140',
      group: 'heart_toxicities',
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
        heart_toxicities: ['heart_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '141',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Kidneys',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '142',
      group: 'kidneys_toxicities',
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
        kidneys_toxicities: ['kidneys_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '143',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Liver',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '144',
      group: 'liver_toxicities',
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
        liver_toxicities: ['liver_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '145',
      group: '',
      answers: [],
      evidence_bundle: {
        liver_toxicities: ['liver_toxicities_unstructured']
      }
    },
    {
      question_name: 'Lungs',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '146',
      group: 'lungs_toxicities',
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
        lungs_toxicities: ['lungs_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '147',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Musculoskeletal',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '148',
      group: 'musculoskeletal_toxicities',
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
        musculoskeletal_toxicities: ['musculoskeletal_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '149',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Neurologic',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '150',
      group: 'neurologic_toxicities',
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
        neurologic_toxicities: ['neurologic_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '151',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Other organ',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '152',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other organ:',
      question_type: 'TEXT',
      question_number: '154',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Has the recipient developed any grade 4 organ toxicity?',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '155',
      group: 'recipient_developed_grade_organ_toxicity',
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
        recipient_developed_grade_organ_toxicity: [
          'recipient_developed_grade_organ_toxicity_unstructured'
        ]
      }
    },
    {
      question_name: 'Gastrointestinal (GI)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '156',
      group: 'gastrointestinal_gi_toxicities',
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
        gastrointestinal_gi_toxicities: [
          'gastrointestinal_gi_toxicities_unstructured'
        ]
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '157',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Heart',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '158',
      group: 'heart_toxicities',
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
        heart_toxicities: ['heart_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '159',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Kidneys',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '160',
      group: 'kidneys_toxicities',
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
        kidneys_toxicities: ['kidneys_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '161',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Liver',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '162',
      group: 'liver_toxicities',
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
        liver_toxicities: ['liver_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '163',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Lungs',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '164',
      group: 'lungs_toxicities',
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
        lungs_toxicities: ['lungs_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '165',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Musculoskeletal',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '166',
      group: 'musculoskeletal_toxicities',
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
        musculoskeletal_toxicities: ['musculoskeletal_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '167',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Neurologic',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '168',
      group: 'neurologic_toxicities',
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
        neurologic_toxicities: ['neurologic_toxicities_unstructured']
      }
    },
    {
      question_name: 'Date of onset:',
      question_type: 'DATE',
      question_number: '169',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Other organ',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '170',
      group: '',
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other organ:',
      question_type: 'TEXT',
      question_number: '172',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Interleukin-6',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '173',
      group: 'interleukin6_toxicities',
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
        interleukin6_toxicities: ['interleukin6_toxicities_unstructured']
      }
    },
    {
      question_name: 'pg/mL',
      question_type: 'TEXT',
      question_number: '174',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '175',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Interferon gamma IFN gamma',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '176',
      group: 'interferon_gamma_ifn_gamma',
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
        interferon_gamma_ifn_gamma: ['interferon_gamma_ifn_gamma_unstructured']
      }
    },
    {
      question_name: 'IU/mL',
      question_type: 'TEXT',
      question_number: '177',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '178',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Soluble interleukin-2 receptor alpha (sIL2RA or soluble CD25)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '179',
      group: 'soluble_interleukin2_receptor_alpha',
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
        soluble_interleukin2_receptor_alpha: [
          'soluble_interleukin2_receptor_alpha_unstructured'
        ]
      }
    },
    {
      question_name: 'U/mL',
      question_type: 'TEXT',
      question_number: '180',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '181',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Total serum ferritin',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '182',
      group: 'total_serum_ferritin',
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
        total_serum_ferritin: ['total_serum_ferritin_unstructured']
      }
    },
    {
      question_name: 'ng/mL(ug/L)',
      question_type: 'TEXT',
      question_number: '183',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '184',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'C-reactive protein',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '185',
      group: 'creactive_protein_toxicities',
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
        creactive_protein_toxicities: [
          'creactive_protein_toxicities_unstructured'
        ]
      }
    },
    {
      question_name: 'mg/dL',
      question_type: 'TEXT',
      question_number: '186',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Date sample collected:',
      question_type: 'DATE',
      question_number: '187',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Did the recipient develop a clinically significant infection since the date of last report?',
      question_type: 'TEXT',
      question_number: '188',
      group: 'recipient_develop_clinically_significant',
      answers: [],
      evidence_bundle: {
        recipient_develop_clinically_significant: [
          'recipient_develop_clinically_significant_unstructured'
        ]
      }
    },
    {
      question_name: 'Organism',
      question_type: 'TEXT',
      question_number: '189',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Specify other organism:',
      question_type: 'TEXT',
      question_number: '190',
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name: 'Site (check all that apply)',
      question_type: 'MULTIPLE_SELECT',
      question_number: '191',
      group: '',
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
          value: 'eyes'
        },
        {
          text: 'Genital area',
          value: 'genital_area'
        },
        {
          text: 'GI tract-Lower',
          value: 'gi_tract-lower'
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
      group: '',
      answers: [],
      evidence_bundle: {}
    },
    {
      question_name:
        'Was the recipient pregnant at any time in this reporting period? (Female only)',
      question_type: 'MULTIPLE_CHOICE',
      question_number: '193',
      group: 'recipient_pregnant_time_reporting',
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
        recipient_pregnant_time_reporting: [
          'recipient_pregnant_time_reporting_value_extraction'
        ]
      }
    }
  ],
  evidence_bundles: [
    'hypogammaglobulinema_resolve_toxicities',
    'hypotension_requiring_therapy',
    'persistence_evaluated_flow_cytometry',
    'hypoxia_requiring_minimal_supplemental',
    'hallucinations_toxicities',
    'neurotoxicity_resolve_toxicities',
    'rbc_transfused_test',
    'cellular_therapy_infusion',
    'lowest_cartox_score',
    'severity_toxicities',
    'soluble_interleukin2_receptor_alpha',
    'cartox10_neurologic_assessment_performed',
    'hypogammaglobulinemia_toxicities',
    'acute_gvhd_persist_last_report',
    'liver_graft_vs_host_disease',
    'positive_pressure_ventilatory_support',
    'skin_graft_vs_host_disease',
    'seizure_toxicities',
    'new_malignancy_myelodysplastic_myeloproliferative',
    'persistence_evaluated_immunohistochemistry',
    'total_serum_ferritin',
    'recipient_developed_grade_organ_toxicity',
    'cerebral_vascular_accident_stroke',
    'persistence_evaluated_molecular_assay_pcr',
    'wbc_hematologic_findings',
    'hemoglobin_hematologic_findings',
    'lower_intestinal_tract_use',
    'overall_grade_acute_gvhd_diagnosis',
    'musculoskeletal_toxicities',
    'acute_gvhd_develop_last_report',
    'depressed_level_consciousness',
    'lymphocytes_hematologic_findings',
    'interleukin6_toxicities',
    'vasopressors_toxicities',
    'recipient_pregnant_time_reporting',
    'platelets_hematologic_findings',
    'upper_intestinal_tract',
    'neurotoxicity_toxicities',
    'interferon_gamma_ifn_gamma',
    'platelets_transfused_test',
    'recipient_develop_cytokine_release',
    'neutrophils_hematologic_findings',
    'lungs_toxicities',
    'cerebral_edema_toxicities',
    'anc_recovery',
    'heart_toxicities',
    'creactive_protein_toxicities',
    'initial_platelet_count',
    'fevers_degrees_degrees',
    'grade_toxicities',
    'tremors_toxicities',
    'leukoencephalopathy_toxicities',
    'intravenous_fluids_toxicities',
    'hemiparesis_paraparesis_motor_deficit',
    'dysphasia_aphasia_toxicities',
    'tumor_lysis_syndrome',
    'recipients_female_partner_pregnant',
    'neurologic_toxicities',
    'liver_toxicities',
    'gastrointestinal_gi_toxicities',
    'recipient_develop_clinically_significant',
    'kidneys_toxicities',
    'hematocrit_hematologic_findings'
  ],
  questions_with_evidence_count: 0
};
