pipeline {
    agent any
    stages {
        stage('Build And Push') {
            
            environment {
                DOCKER_REGISTRY_CREDENTIALS = credentials('docker-registry-credentials')
                DOCKER_REGISTRY_URL = "registry.melaine-gerard.fr"
                DOCKER_PROJECT_NAME = "portfolio-fo"
                DOCKER_PROJECT_TAG = "latest"
            }
            steps {
                script {
                    sh "npm install"
                    sh "npm run build"
                    sh 'echo $DOCKER_REGISTRY_CREDENTIALS_PSW | docker login -u $DOCKER_REGISTRY_CREDENTIALS_USR --password-stdin ${DOCKER_REGISTRY_URL}'
                    sh "docker build -t ${DOCKER_REGISTRY_URL}/${DOCKER_PROJECT_NAME}:${DOCKER_PROJECT_TAG} -f docker/Dockerfile ."
                    sh "docker push ${DOCKER_REGISTRY_URL}/${DOCKER_PROJECT_NAME}:${DOCKER_PROJECT_TAG}"
                }   
            }
        }
    }
}