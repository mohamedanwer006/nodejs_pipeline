pipeline{
    agent{
        label "ubuntu"
    }
    stages{
        stage("Checkout"){
            steps{
                echo "========executing Checkout========"
                git pull "https://github.com/mohamedanwer006/nodejs_pipeline.git"
                cd nodejs_pipeline          
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
