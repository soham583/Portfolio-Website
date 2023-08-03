import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import compress from "../../Assets/Projects/compress.png";
import covid from "../../Assets/Projects/covid.png";
import credit from "../../Assets/Projects/credit.png";
import loco from "../../Assets/Projects/locos.png";
import steam from "../../Assets/Projects/steam.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant Disease Detection"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'Tensorflow' framework using CNN and Transfer Learning with 30 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 9 unique plants. I was able to achieve an accuracy of 92% by using InceptionV3 pretrained model."
              ghLink="https://github.com/soham583/Plant-Disease-Detection"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={credit}
              isBlog={false}
              title="Credit Card Fraud Detection"
              description="Build model to to recognize fraudulent credit card transactions. Preprocessed imbalanced dataset with Resembling techniques SMOTE and Tomek. Achieved precision of 88% and 80% recall with Random Forest"
              ghLink="https://github.com/soham583/Credit-Card-Fraud-Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={steam}
              isBlog={false}
              title="Game Recommender System"
              description="Project utilizes content-based filtering for a robust game recommender system, extracting game data through REST APIs of steamspy and steamstore. Leveraging NLTK and sklearn libraries, we performed word stemming and TF-IDF vectorization for efficient data processing."
              ghLink="https://github.com/soham583/game_recommender_system"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compress}
              isBlog={false}
              title="Compress Image"
              description="Implement Unsupervised learning algorithm K-Means Clustering to compress the user input image. Used scikit-learn library and Plot-utils library to perform data preprocessing and visualization of data."
              ghLink="https://github.com/soham583/compress_image"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Classification of COVID19 Chest X ray Images"
              description="Built multi-layer Convolutional Neural Network architecture to detect the covid-19 infected people. Used Tensorflow as backend with Keras library to preprocess and build the neural network architecture. Achieved 96.4% accuracy on the training set and 97.5% accuracy on the test set of the dataset"
              ghLink="https://github.com/soham583/Classification-of-COVID19-Chest-X-ray-Images"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loco}
              isBlog={false}
              title="Loco App Reviews Analysis"
              description="Conducted thorough analysis of user reviews for the Loco app posted on Google play store. Utilized unsupervised keyword extraction method YAKE to extract and analyze keywords from user eviews, providing additional insights into user sentiment and preferences. Built an interactive Tableau dashboard to summarize the results of the Loco app reviews analysis."
              ghLink="https://github.com/soham583/Loco-App-analysis"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
