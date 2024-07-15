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
- [Implementation🚀](#implementation)
- [Results Analysis Screenshots📈](#results-analysis-screenshots)
- [Further Works💫](#further-works)
- [Contributing is fun🧡](#contributing-is-fun)
<br>


</div>


<!-- --------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<h2>Introduction📌</h2>
- Fashion today is intricately intertwined with the influence of social media and the rise of influential figures known as influencers. Among Gen-Z, these influencers play a pivotal role in shaping micro trends—subtle yet powerful shifts in style and personal expression. To navigate this dynamic landscape effectively, we've developed an Automated Machine Learning Ecosystem. This system identifies and tracks the top fashion influencers across our country, continuously updating to include emerging talents based on their performance metrics.


**Methodology:**
- Our approach is structured around the Gen-Z Story Canvas, a series of 5-6 visually engaging story slides shared quarterly on social media. These stories vividly capture the shopping habits and aesthetic preferences of our users, resonating deeply within their community. Utilizing advanced AI capabilities, our recommendation system analyzes extensive data including purchase histories, customer preferences, and real-time market trends to tailor bespoke product suggestions. Transparency is key; our use of Explainable AI ensures users understand how and why each recommendation is made.

**Enhanced User Experience:**
- We prioritize inclusivity and accessibility with a multilingual, audio-supported interface that adapts to diverse user needs in real-time. Central to our ecosystem is the Style-based studio, where AI-generated human models with customizable size proportions allow users to virtually try on clothing tailored to their unique body shapes. This innovative feature empowers Gen-Z to make informed fashion choices confidently, revolutionizing their online shopping experience.

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
<h2>⚡GenZ Fashion Trends Forecasting ⚡</h2>

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

<h2>⚡ AI virtual Recommendation System ⚡ </h2>
Recommending Clothes with NCF and ResNet50

#### Neural Collaborative Filtering (NCF)

Neural Collaborative Filtering (NCF) is employed to recommend clothes based on user preferences and historical data. Here's how it works:

1. **Data Preparation:**
   - Utilize a dataset containing user interactions (e.g., purchases, likes) with clothes.
   - Features include `Product_id`, `Ratings`, `Reviews`, `SizeOption`, `Category`, `category_by_Gender`, `BrandName`.

2. **Model Training:**
   - Train the NCF model using TensorFlow or PyTorch.
   - Incorporate user-item interactions to learn embeddings for products and users.
   - Use implicit feedback (e.g., purchase history) to predict user preferences.

3. **Recommendation Generation:**
   - Generate personalized recommendations based on learned embeddings.
   - Prioritize items with higher predicted ratings for each user.
   - Enhance recommendations with contextual information such as current trends and seasonal preferences.

#### ResNet50 for Image Recommendations

ResNet50 is utilized for recommending clothes based on visual features extracted from images. Here’s the approach:

1. **Image Dataset:**
   - Collect and preprocess a dataset of 44,441 clothing images.
   - Images include various categories and styles of clothing.

2. **Model Architecture:**
   - Implement ResNet50, a deep convolutional neural network.
   - Fine-tune the network on the clothing dataset to extract high-level features.

3. **Feature Extraction:**
   - Use the trained ResNet50 model to extract features from clothing images.
   - Represent each item with a feature vector capturing its visual attributes.

4. **Similarity Matching:**
   - Calculate similarities between items based on their feature vectors.
   - Recommend visually similar clothes to users based on their preferences and browsing history.

<p align="right">(<a href="#top">back to top</a>)</p>

This project follows the [MIT License](/LICENSE).

<p align="right">(<a href="#top">Back to top</a>)</p>
