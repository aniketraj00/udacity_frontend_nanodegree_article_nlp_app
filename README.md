
# Article Sentiment Analysis App (powered by MeaningCloud)

This is a simple natural language processing(NLP) application which uses meaningcloud  
api to analyze the sentiments associated with any article. The application uses either  
article's URL or text as input to analyze it and produces output that quantifies the  
sentiments associated with the article. For more info visit the meaning cloud website  
[MeaningCloud Sentiment Analysis API](https://www.meaningcloud.com/developer/sentiment-analysis)

# Screenshot

![Home](https://raw.githubusercontent.com/aniketraj00/udacity_frontend_nanodegree_article_nlp_app/master/screenshots/screenshot-1.png)  
![Workings](https://raw.githubusercontent.com/aniketraj00/udacity_frontend_nanodegree_article_nlp_app/master/screenshots/screenshot-2.png)  

# Table of Contents

- [Project Title](#article-sentiment-analysis-app-powered-by-meaningcloud)
- [Screenshots](#screenshot)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)


# Installation
[(Back to top)](#table-of-contents)

The application uses node.js(express). First download and install node.js using the  
link given below  
[Download Node.js](https://nodejs.org/en/download)  

After downloading and installing node.js, make a copy of this project on your local    
machine, you can either download this repository or use the git bash to make a pull    
request. To use git bash make sure git is installed on your machine. Use the following    
link to download the git.    
[Download Git](https://git-scm.com/downloads)  

After downloading and installing the git, open git bash and type the following code  
`git init`  
`git clone https://github.com/aniketraj00/udacity_frontend_nanodegree_article_nlp_app.git`   

Open terminal and navigate to the project directory and type the following commands  
`npm install && npm run build-prod`

Once the installation is finished, type the following code to boot up the server
`npm start`  

After that you can access the application locally at this address http://localhost:3000  

You can also access the live version of the app using the link given below    
[Open App](https://article-nlp-app.onrender.com/)  

# Usage
[(Back to top)](#table-of-contents)

This is a simple article sentiment analysis app that uses meaningcloud api to analyze  
the articles. The application UI provides user with two options to send the article text  
or it's source URL to the api and then parses the response to display the quantified   
version of the analysis using parameters like 'CONFIDENCE', 'POLARITY', 'SUBJECTIVITY'  
etc. It also provides a list of detailed analysis of each sentences of the articles.  

# Development
[(Back to top)](#table-of-contents)
  
This project is open to anyone who wants to contribute. If you like this project then   
give it a star.
