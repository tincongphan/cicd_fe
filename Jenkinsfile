pipeline {
 agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
  stages {
      
      stage("Build images") {
        steps {
          sh 'docker build -t congtin/cicd_fe:v1.0 .'
        }
      }
      stage('Login') {
        steps {
          sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        }
      }
      stage('Push') {
        steps {
          sh 'docker push congtin/cicd_fe:v1.0'
        }
      }
      stage('ssh server') {
        steps {
          sshagent(['ssh_ubuntu']) {
           sh "ssh -o StrichHostKeyChecking=no ubuntu 54.254.203.176 bash ./deploy.sh"
         }
        }
      }
  }
}