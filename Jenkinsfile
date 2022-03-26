pipeline{
    agent{
        label "ubuntu"
    }
    stages{
        stage("Checkout"){
            steps{
                echo "========executing Checkout========"
                git{
                    url "https://github.com/mohamedanwer006/nodejs_pipeline.git"
                }
            }
        }
        stage("Build"){
            steps{
                echo "========Executing Build========"
                sh "docker build -t nodejs_pipeline ."
            }
        }
        stage("Deploy"){
            steps{
                echo "========Executing Deploy========"
                sh "docker push mohameddev006/nodejs_pipeline"
            }
        }

    }
}