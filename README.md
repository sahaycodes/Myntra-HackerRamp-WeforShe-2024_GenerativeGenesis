# Genrative Genesis - Myntra WeforShe 2024
<div id="top"></div>
<div align="center">
<img src="https://forthebadge.com/images/badges/built-with-love.svg" />
<img src="https://forthebadge.com/images/badges/uses-brains.svg" />
<img src="https://forthebadge.com/images/badges/powered-by-responsibility.svg" />
  <br>
<img src="https://img.shields.io/github/repo-size/Myntra-WeforShe-2024_GenerativeGenesis/sahaycodes?style=for-the-badge" />

<h2>Table of Contents🧾</h2>

- [Introduction📌](#introduction)
- [Technology Used🚀](#technology-used)
- [Proposed Methodology⭐](#proposed-methodology)
- [Implementation🚀](#implementation)
- [Results Analysis Screenshots📈](#results-analysis-screenshots)
- [Further Works💫](#further-works)
- [Contributing is fun🧡](#contributing-is-fun)
<br>


</div>


<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<h2>Introduction📌</h2>

This is an innovative machine learning project that utilizes patient reviews with many other attributes to analyze and evaluate the effectiveness of different drugs in treating specific conditions. By training on a vast dataset of patient experiences, the model can provide insightful ratings for the available drugs, based on their real-world usage.<br><br>
The project demonstrates the power of advanced machine learning techniques to extract meaningful insights from unstructured data, ultimately enabling more informed decision-making in the healthcare industry.

<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

Data Science, Machine Learning, Deep Learning, Reinforcement Learning, and Open Source are all closely related, each building on the foundation of the previous concept.

Data Science involves the use of statistical and computational methods to analyze and interpret complex data sets. Open-source tools and libraries like Python and R, along with their respective ecosystems of libraries, have been critical to the democratization of data science, making it easier and more accessible for researchers, businesses, and individuals to analyze and make sense of data.

Machine Learning is a subfield of data science that focuses on the development of algorithms and models that can learn from data and make predictions or decisions without being explicitly programmed. Open-source tools like scikit-learn, TensorFlow, and Keras have been instrumental in the growth and innovation of machine learning, making it easier for researchers and developers to build and train models, and deploy them into real-world applications.

Deep Learning is a subfield of machine learning that focuses on building and training neural networks, which are capable of learning and making predictions from very large and complex data sets. Open-source libraries like TensorFlow and PyTorch have been instrumental in the development and democratization of deep learning, providing a vast array of tools and algorithms for building and training neural networks, and enabling researchers and businesses to develop cutting-edge AI applications.

Reinforcement Learning is a subfield of machine learning that involves training agents to make decisions in an environment to maximize a reward signal. Open-source libraries like OpenAI's Gym and Stable Baselines have made it easier for researchers and developers to experiment with and develop reinforcement learning algorithms and models, and deploy them into real-world applications.

Open Source has played a critical role in the growth and success of data science, machine learning, deep learning, and reinforcement learning. The collaborative nature of open source allows for faster development and innovation, enables customization and extension of existing tools and libraries, and fosters a supportive community of users and contributors. Additionally, open source promotes transparency and accountability, making it easier for researchers and developers to share their work and reproduce their results, advancing the field as a whole. Overall, open source has been essential to the democratization of AI, enabling more people to participate in its development and benefit from its applications.

<h2>Technology Used🚀</h2>


-`Python`
- `pandas`
- `numPy`
- `beautifulSoup`
- `sklearn`
- `seaborn` 
- `matplotlib`
- `Resnet50`
- `PowerBI`
- `Neural Collaborative Filtering`
- `Lightning AI Studio`
- `Stable Diffusion`
  


<h2>Implementation</h2>
<h2>1. GenZ Fashion Trends Forecasting</h2>

Our project involves the analysis and categorization of **GenZ fashion styles from Instagram posts** using a series of data science and machine learning techniques.

#### Stages

1. **Data Collection:**
   - Data is gathered from Instagram posts using the Apify platform. This includes images, likes, comments, and a sample of comments per post.

2. **Image Segmentation:**
   - Images from posts are processed using YOLO and SAM algorithms to isolate clothing items from the background. Resulting segmented images show only the clothes against a black background.

3. **Feature Extraction and Dimensionality Reduction:**
   - Segmented images are passed through an autoencoder to extract a compact representation (latent space) of the clothing items. PCA is then applied to reduce the dimensionality further.

4. **Clustering:**
   - The PCA-transformed latent spaces are clustered using the K-Means algorithm, creating distinct groups that represent different fashion styles.

5. **Sentiment Analysis:**
   - Comments associated with each post are analyzed using the AdaBoost algorithm to gauge public sentiment towards the fashion styles depicted in the posts.

6. **Data Visualization:**
   - A Power BI dashboard presents statistics for each fashion style cluster, including image counts, likes, comments, and sentiment distribution (positive, negative).

#### Folder Structure - GenZ Fashion Trends Forecasting

The folder is structured as follows:

- **data:** Contains datasets (raw and cleaned versions).
- **models:** Stores machine learning model weights (excluding large SAM model).
- **research:** Includes Jupyter notebooks used for clustering decisions and autoencoder training.
- **images:** Subdirectories for original and segmented images.
- **python scripts:** Series of scripts for data preprocessing, image downloading, segmentation, latent space creation, and clustering.
- **Dashboard:** Power BI dashboard file for data visualization.

#### Usage

To use the project:
1. Ensure Python environment is set up.
2. Run Python scripts in the following order:
   - `data_preprocessing.py`
   - `download_images.py`
   - `image_segmentation.py`
   - `latent_space_creator.py`
   - `latent_space_clustering.py`
3. Use Power BI to explore the dashboard and visualized results.

#### Technologies Used

- **Python:** Programming language for the project.
- **YOLO & SAM:** Algorithms for image segmentation.
- **PCA & KMeans:** Techniques for dimensionality reduction and clustering.
- **AdaBoost:** Algorithm for sentiment analysis.
- **Power BI:** Tool for data visualization and dashboard creation.
<p align="right">(<a href="#top">back to top</a>)</p>

This project follows the [MIT License](/LICENSE).

<p align="right">(<a href="#top">Back to top</a>)</p>
