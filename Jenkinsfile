pipeline {
 agent any
  stages {
      stage("Clone github") {
        steps {
          git 'https://github.com/tincongphan/cicd_fe.git'
        }
      }
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
  }
}