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
  }
}