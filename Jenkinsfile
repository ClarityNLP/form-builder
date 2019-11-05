#!/usr/bin/env groovy
pipeline{
    agent any

    environment {
      GTRI_IMAGE_REGISTRY = credentials('gtri-image-registry')
      GTRI_RANCHER_API_ENDPOINT = credentials('gtri-rancher-api-endpoint')
      GTRI_HDAP_ENV_ID = credentials('hdap-aws-rancher-env')
      CLARITYNLP_DOCKERHUB_CREDS = 'claritynlp-dockerhub'
      formImage = ''
      formImageVhost = ''
    }

    stages{
      stage('Building image') {
        steps{
          script {
            formImage = docker.build("claritynlp/form-builder:1.0", "--build-arg PUBLIC_URL=/form-v2 -f ./client/Dockerfile.prod ./client")
            formImageVhost = docker.build("claritynlp/form-builder:1.0-vhost", "--build-arg PUBLIC_URL=/ -f ./client/Dockerfile.prod ./client")
          }
        }
      }
      stage('Push image to private registry'){
        steps{
          script{
            docker.withRegistry("https://${GTRI_IMAGE_REGISTRY}"){
              formImage.push("latest")
              formImageVhost.push("latest-vhost")
            }
          }
        }
      }
      stage('Push image to public registry'){
        steps{
          script{
            docker.withRegistry('', CLARITYNLP_DOCKERHUB_CREDS){
              formImage.push("latest")
              formImageVhost.push("latest-vhost")
            }
          }
        }
      }
      stage('Notify orchestrator'){
        steps{
          script{
            rancher confirm: true, credentialId: 'gt-rancher-server', endpoint: "${GTRI_RANCHER_API_ENDPOINT}", environmentId: "${GTRI_HDAP_ENV_ID}", environments: '', image: "${GTRI_IMAGE_REGISTRY}/claritynlp/form-builder:latest-vhost", ports: '', service: 'ClarityNLP-Form/formbuilder', timeout: 120
          }
        }
      }
    }
}
