#!/usr/bin/env groovy
pipeline{
    agent any

    environment {
      GTRI_IMAGE_REGISTRY = credentials('gtri-image-registry')
      GTRI_RANCHER_API_ENDPOINT = credentials('gtri-rancher-api-endpoint')
      GTRI_CLARITY_ENV_ID = credentials('gtri-clarity-env-id')
      GTRI_HDAP_ENV_ID = credentials('gtri-hdap-env-id')
    }

    stages{
        stage('Deploy'){
            steps{
                script{
                    docker.withRegistry("https://${GTRI_IMAGE_REGISTRY}"){
                        def formBuilderImage = docker.build("form-builder:1.0", "-f ./client/Dockerfile ./client")
                        formBuilderImage.push('latest')
                    }
                }
            }
        }

        stage('Notify'){
            steps{
                script{
                    //deploy to GTRI HDAP
                    rancher confirm: true, credentialId: 'gt-rancher-server', endpoint: "${GTRI_RANCHER_API_ENDPOINT}", environmentId: "${GTRI_HDAP_ENV_ID}", environments: '', image: "${GTRI_IMAGE_REGISTRY}/form-builder:latest", ports: '', service: 'ClarityFormBuilder/formbuilder', timeout: 120
                }
            }
        }
    }
}