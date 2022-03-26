pipeline{
    agent{
        label "ubuntu"
    }
    stages{
        stage("Checkout"){
            steps{
                echo "========executing Checkout========"
                sh " git pull https://github.com/mohamedanwer006/nodejs_pipeline.git"
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

                withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                     sh "docker login -u ${USERNAME} -p ${PASSWORD}"
                     sh "docker push mohameddev006/nodejs_pipeline"
                    }
               
            }
        }

    }
}
