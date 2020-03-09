export default {
    "name": "Sickle Cell",
    "owner": "gatech",
    "allocated_users": [
        "admin"
    ],
    "groups": [
        "SCDC"
    ],
    "questions": [
        {
            "question_name": "Sickle Cell",
            "question_type": "MULTIPLE_CHOICE",
            "question_number": "1",
            "group": "SCDC",
            "answers": [
                {
                    "text": "Yes",
                    "value": "yes"
                },
                {
                    "text": "No",
                    "value": "no"
                }
            ],
            "evidence_bundle": {
                "sickle_cell": [
                    "sickle_cell_structured",
                    "sickle_cell_unstructured"
                ]
            },
            "nlpql_grouping": "sickle_cell"
        },
        {
            "question_name": "Sickle Cell Trait",
            "question_type": "MULTIPLE_CHOICE",
            "question_number": "2",
            "group": "SCDC",
            "answers": [
                {
                    "text": "Yes",
                    "value": "yes"
                },
                {
                    "text": "No",
                    "value": "no"
                }
            ],
            "evidence_bundle": {
                "sickle_cell_trait": [
                    "sickle_cell_trt_structured"
                ]
            },
            "nlpql_grouping": "sickle_cell_trait"
        },
        {
            "question_name": "Sickle Cell Trait",
            "question_type": "MULTIPLE_CHOICE",
            "question_number": "2",
            "group": "SCDC",
            "answers": [
                {
                    "text": "Yes",
                    "value": "yes"
                },
                {
                    "text": "No",
                    "value": "no"
                }
            ],
            "evidence_bundle": {
                "sickle_cell_trait": [
                    "sickle_cell_trt_unstructured"
                ]
            },
            "nlpql_grouping": "sickle_cell_trait"
        }
    ],
    "evidence_bundles": [
        "sickle_cell",
        "sickle_cell_trait"
    ],
    "version": "0.0.1",
    "questions_with_evidence_count": 0
}
