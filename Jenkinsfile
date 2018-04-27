pipeline {
  agent {
    docker {
        image 'node:9.11.1-alpine'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
      }
    }
    stage('test') {
      steps {
        sh 'yarn test'
      }
    }
  }
  environment {
    CI = 'true'
  }
}