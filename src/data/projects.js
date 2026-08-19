// src/data/projects.js

// ===== SQL Project Images =====
import architecture from "../assets/DataWarehouse_structure_and_Flow.png";
import dataFlow from "../assets/Data_flow.png";
import integrationModel from "../assets/integration_Model.png";
import silverLayer from "../assets/Silver Layer.png";
import starSchema from "../assets/star_schema.png";
import retailSales from "../assets/Retail_Sales.jpeg";
import retailCustomer from "../assets/Retail_Cust.jpeg";
import Retail_Data_Source from "../assets/Retail_Data_Source.jpeg";
import Pizza_Sales from "../assets/Pizza_Sales.jpeg";
import Pizza_Sales_revenue from "../assets/Revenue_based_pizza_sales.jpeg";
import Car_Sales from "../assets/Car_Sales.jpeg";

// Uncomment this after adding a dashboard image
// import dashboard from "../assets/dashboard.png";

const projects = [
  {
    id: "sql",
    category: "data-engineer",
    title: "ETL Data Warehouse",

    subtitle: "Modern SQL Server Data Warehouse using SQL Server & ETL",

    description:
      "Designed and implemented a scalable SQL Server data warehouse using ETL pipelines, Medallion Architecture, and dimensional modeling for analytical reporting.",

    overview: `
This project demonstrates the complete development of a modern SQL Server Data Warehouse.

The solution follows the Medallion Architecture by organizing data into Bronze, Silver, and Gold layers. Raw ERP and CRM datasets are extracted from CSV files, cleaned and transformed using SQL-based ETL processes, and loaded into a business-ready star schema.

The final warehouse enables efficient analytical reporting for customer behavior, product performance, and sales trends while maintaining high data quality and scalability.
`,

    github:
      "https://github.com/Fahadkhan2450/ETL_SQL_Data_Warehouse",

    demo: "",

    technologies: [
      "SQL Server",
      "SSMS",
      "T-SQL",
      "ETL",
      "Data Warehouse",
      "Medallion Architecture",
      "Star Schema",
      "Data Modeling",
      "Draw.io",
      "Git",
      "GitHub"
    ],

    features: [
      "Bronze Layer for Raw Data",
      "Silver Layer for Data Cleaning",
      "Gold Layer for Analytics",
      "ETL Pipeline",
      "Data Validation",
      "Fact & Dimension Tables",
      "Star Schema Design",
      "SQL Analytics",
      "Sales Reporting",
      "Customer Analysis",
      "Product Performance Analysis"
    ],

    images: [
      architecture,
      dataFlow,
      integrationModel,
      silverLayer,
      starSchema,
      // dashboard
    ],


    learnings:
      "Built a complete SQL Server data warehouse from scratch, implemented ETL pipelines, performed data cleansing, designed a star schema, and optimized SQL queries for business intelligence reporting.",
  },
  {
  id: "autism",
  category: "data-science",

  title: "Autism Prediction System",

  subtitle: "Machine Learning Classification",

  description:
    "A machine learning application that predicts autism spectrum disorder using supervised learning algorithms.",

  overview:
    "Developed a machine learning system to predict autism using clinical and behavioral datasets. The project involved data preprocessing, feature engineering, model training, evaluation, and deployment using FastAPI.",

  github: "https://github.com/Fahadkhan2450/Autism-Prediction-Model",

  demo: "",

  technologies: [
    "Python",
    "Scikit-Learn",
    "FastAPI",
    "Docker",
    "Pandas",
    "NumPy"
  ],

  features: [
    "Data Cleaning",
    "Feature Engineering",
    "Model Training",
    "Model Evaluation",
    "REST API",
    "Docker Deployment"
  ],

  images: [],

  codes: [
    {
      title: "Model Training",
      code: `model = RandomForestClassifier()
model.fit(X_train, y_train)
predictions = model.predict(X_test)`
    }
  ],

  learnings:
    "Learned the complete machine learning workflow including preprocessing, feature engineering, model evaluation, and API deployment."
},
{
  id: "catdog",
  category: "data-science",

  title: "Cat vs Dog Image Classification",

  subtitle: "Deep Learning using PyTorch",

  description:
    "CNN-based image classification model built using PyTorch.",

  overview:
    "Implemented a Convolutional Neural Network to classify cat and dog images. The project covers dataset preprocessing, model training, validation, and testing using PyTorch.",

  github: "https://github.com/Fahadkhan2450/Cat-And-Dog-Classification-using-CNN",

  demo: "",

  technologies: [
    "Python",
    "PyTorch",
    "CNN",
    "OpenCV",
    "NumPy"
  ],

  features: [
    "Image Preprocessing",
    "CNN Architecture",
    "Training & Validation",
    "Accuracy Evaluation",
    "Prediction"
  ],

  images: [],

  codes: [
    {
      title: "CNN Model",
      code: `class CNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv = nn.Conv2d(3,32,3)`
    }
  ],

  learnings:
    "Built CNN architectures from scratch and learned deep learning fundamentals using PyTorch."
},

{
  id: "workhive",
  category: "web",

  title: "WorkHive Project Management",

  subtitle: "Full Stack MERN Application",

  description:
    "A project management platform for creating, assigning, and tracking tasks with team collaboration.",

  overview:
    "Built a full-stack MERN application featuring authentication, project management, task assignment, and collaboration using React, Express, Node.js, and MongoDB.",

  github: "https://github.com/Fahadkhan2450/WorkHive-Project-Management-Platform",

  demo: "",

  technologies: [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "JWT",
    "REST API"
  ],

  features: [
    "Authentication",
    "Project Management",
    "Task Assignment",
    "Team Collaboration",
    "Responsive UI",
    "REST APIs"
  ],

  images: [],

  codes: [
    {
      title: "Express Route",
      code: `router.post("/login", loginUser);
router.post("/register", registerUser);`
    }
  ],

  learnings:
    "Improved full-stack development skills, authentication, API development, and database design."
},

{
  id: "yolo",
    category: "data-science",
  title: "Object Detection using YOLOv8",

  subtitle: "Computer Vision",

  description:
    "Real-time object detection system using YOLOv8 and OpenCV.",

  overview:
    "Developed an object detection application capable of detecting objects in images and videos using YOLOv8. Integrated OpenCV for real-time visualization and inference.",

  github: "https://github.com/Fahadkhan2450/Open-CV-Object-Detection",

  demo: "",

  technologies: [
    "Python",
    "YOLOv8",
    "OpenCV",
    "Ultralytics",
    "Deep Learning"
  ],

  features: [
    "Real-Time Detection",
    "Image Detection",
    "Video Detection",
    "Bounding Boxes",
    "Confidence Scores"
  ],

  images: [],

  codes: [
    {
      title: "YOLO Prediction",
      code: `from ultralytics import YOLO

model = YOLO("yolov8n.pt")
results = model("image.jpg")`
    }
  ],

  learnings:
    "Gained hands-on experience with object detection, computer vision, and deploying deep learning models using YOLOv8."
},
{
  id: "rainfall",
category: "data-science",
  title: "Rainfall Prediction Model",

  subtitle: "Machine Learning Weather Prediction System",

  description:
    "A machine learning application that predicts the likelihood of rainfall using historical weather data. The project includes data preprocessing, model training, Streamlit UI, and FastAPI deployment.",

  overview:
    "Developed an end-to-end rainfall prediction system using historical weather datasets. The project includes data cleaning, feature engineering, exploratory data analysis, Random Forest model training, hyperparameter tuning, model evaluation, and deployment through both Streamlit and FastAPI. The application allows users to input weather parameters and receive real-time rainfall predictions.",

  github:
    "https://github.com/Fahadkhan2450/Rainfall-Prediction-Model",

  demo: "",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "Random Forest",
    "FastAPI",
    "Streamlit",
    "Matplotlib",
    "Seaborn",
    "Pickle",
    "Google Colab"
  ],

  features: [
    "Weather Data Preprocessing",
    "Feature Engineering",
    "Exploratory Data Analysis",
    "Random Forest Classifier",
    "Hyperparameter Tuning",
    "Model Evaluation",
    "FastAPI REST API",
    "Interactive Streamlit Interface",
    "Model Serialization using Pickle"
  ],

  images: [],

  codes: [
    {
      title: "Train Random Forest Model",
      code: `from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(
    n_estimators=200,
    random_state=42
)

model.fit(X_train, y_train)
predictions = model.predict(X_test)`
    },
    {
      title: "FastAPI Prediction Endpoint",
      code: `@app.post("/rainfall_prediction")
def predict(data: WeatherData):
    prediction = model.predict([[
        data.temperature,
        data.humidity,
        data.pressure
    ]])

    return {"prediction": int(prediction[0])}`
    }
  ],

  learnings:
    "Built a complete machine learning pipeline from data preprocessing to deployment. Learned feature engineering, hyperparameter tuning, API development using FastAPI, and building interactive applications using Streamlit."
},
{
  id: "research-agent",
category: "data-science",
  title: "Research Q&A Agent",

  subtitle: "AI Research Assistant using LangGraph & LangChain",

  description:
    "An AI-powered research agent that gathers information from Google, Wikipedia, and Reddit, analyzes each source with LLMs, and generates structured evidence-based research reports.",

  overview:
    "Developed an intelligent multi-agent research system using LangGraph and LangChain. The application searches Google through SerpAPI, retrieves structured knowledge from Wikipedia, collects community discussions from Reddit, and independently analyzes each source using Groq LLMs. A synthesis agent combines all analyses into a single evidence-based report with reasoning and references. The workflow is implemented as a modular state graph, enabling scalable and maintainable execution.",

  github:
    "https://github.com/Fahadkhan2450/Reseacrh-Q-A-Agent-",

  demo: "",

  technologies: [
    "Python",
    "LangGraph",
    "LangChain",
    "Groq",
    "SerpAPI",
    "Wikipedia API",
    "Reddit API",
    "LLMs",
    "REST APIs",
    "State Graphs"
  ],

  features: [
    "Google Search Integration",
    "Wikipedia Search",
    "Reddit Community Search",
    "Multi-Agent Workflow",
    "Independent Source Analysis",
    "Evidence-Based Report Generation",
    "Research Synthesis",
    "LangGraph State Machine",
    "Prompt Engineering",
    "Structured AI Responses"
  ],

  images: [],

  codes: [
    {
      title: "Run Research Agent",
      code: `from multisearchagent import app

state = {
    "user_question":
    "What are the health impacts of intermittent fasting?"
}

result = app.invoke(state)

print(result["final_answer"])`
    },

    {
      title: "LangGraph Workflow",
      code: `START
   ↓
Google Search
Wikipedia Search
Reddit Search
   ↓
LLM Analysis
   ↓
Evidence Synthesis
   ↓
Final Research Report`
    }
  ],

  learnings:
    "Built a production-style multi-agent AI system using LangGraph. Learned workflow orchestration, retrieval-augmented generation, prompt engineering, API integration, state management, and evidence synthesis across multiple knowledge sources."
},
{
  id: "car-sales",

  category: "data-analyst",

  title: "Car Sales Analytics Dashboard",

  subtitle: "Interactive Business Intelligence Dashboard using Tableau",

  description:
    "Designed an interactive Tableau dashboard to analyze Year-to-Date (YTD) car sales performance through dynamic KPIs and business visualizations.",

  overview: `
Developed an interactive Car Sales Analytics Dashboard in Tableau to monitor Year-to-Date (YTD) business performance using dynamic KPIs and interactive visualizations.

The dashboard enables business users to analyze total sales, average selling price, vehicles sold, weekly sales trends, regional dealer performance, company-wise sales, and customer purchasing patterns.

Built after data preparation and validation, the dashboard provides a comprehensive view of sales performance, helping stakeholders make faster and data-driven business decisions.
`,

  github: "",

  demo: "",

  technologies: [
    "Tableau",
    "SQL",
    "Data Visualization",
    "Data Modeling",
    "Business Intelligence",
    "Dashboard Design",
    "KPI Design",
    "Sales Analytics",
    "Data Cleaning",
    "Excel"
  ],

  features: [
    "Year-to-Date Sales KPIs",
    "Cars Sold Analysis",
    "Average Selling Price",
    "Weekly Sales Trend",
    "Dealer Region Performance",
    "Company-wise Sales",
    "Body Style Distribution",
    "Colour Distribution",
    "Interactive Filters",
    "Business Insights"
  ],

  images: [
    Car_Sales
  ],

  learnings:
    "Strengthened skills in Tableau, SQL, KPI development, business intelligence, dashboard design, data modeling, and interactive data visualization for sales performance analysis."
},
{
  id: "pizza-sales",

  category: "data-analyst",

  title: "Pizza Sales Analytics Dashboard",

  subtitle: "Restaurant Business Intelligence Dashboard",

  description:
    "Interactive Tableau dashboard providing sales insights, customer ordering patterns, and product performance using SQL Server and Tableau.",

  overview: `
Designed and developed a Pizza Sales Analytics Dashboard using SQL Server and Tableau.

The project involved SQL-based data exploration, cleaning, aggregation, and business metric calculations before building interactive dashboards.

The dashboard presents revenue trends, order patterns, hourly sales, weekly sales, pizza category performance, pizza size analysis, and Top/Bottom selling pizzas to support operational and strategic business decisions.
`,

  github: "",

  demo: "",

  technologies: [
    "SQL Server",
    "Tableau",
    "SQL",
    "Business Intelligence",
    "Data Modeling",
    "Dashboard Design",
    "Data Visualization",
    "Sales Analytics",
    "Restaurant Analytics"
  ],

  features: [
    "Revenue KPIs",
    "Average Order Value",
    "Total Orders",
    "Total Pizzas Sold",
    "Hourly Sales Trend",
    "Weekly Sales Trend",
    "Pizza Category Analysis",
    "Pizza Size Analysis",
    "Top 5 Best Sellers",
    "Bottom 5 Best Sellers",
    "Interactive Dashboard"
  ],

  
    images: [
        Pizza_Sales,
        Pizza_Sales_revenue
  ],
  

  learnings:
    "Applied SQL for business analysis and Tableau for interactive visualization while improving dashboard design, KPI development, and restaurant sales analytics."
},
{
  id: "retail-dashboard",

  category: "data-analyst",

  title: "Retail Sales Analytics Dashboard",

  subtitle: "Customer & Sales Business Intelligence Dashboard",

  description:
    "Developed interactive Tableau dashboards to analyze retail sales performance, customer behavior, and profitability through dynamic KPIs and visual analytics.",

  overview: `
Built a Retail Sales Analytics Dashboard by integrating, cleaning, and modeling retail datasets using SQL and Tableau.

The project transformed raw sales and customer data into meaningful business insights through a structured data model and interactive visualizations.

Two dashboards were developed:

• Sales Dashboard — displays sales KPIs, weekly sales trends, product sub-category performance, profit analysis, and sales distribution.

• Customer Dashboard — analyzes customer purchasing behavior, order distribution, customer contribution, sales trends, and profitability over time.

The dashboards include interactive filters, drill-down capabilities, and intuitive navigation to support faster business analysis and decision-making.
`,

  github: "",

  demo: "",

  technologies: [
    "SQL",
    "Tableau",
    "Data Modeling",
    "Business Intelligence",
    "Data Visualization",
    "Dashboard Design",
    "Sales Analytics",
    "Customer Analytics",
    "KPI Design",
    "SQL Queries"
  ],

  features: [
    "Sales Dashboard",
    "Customer Dashboard",
    "Sales KPIs",
    "Profit KPIs",
    "Quantity KPIs",
    "Weekly Sales Trends",
    "Product Sub-category Analysis",
    "Customer Order Analysis",
    "Sales & Profit Trends",
    "Interactive Filters",
    "Business Insights"
  ],

  images: [
    retailSales,
    retailCustomer,
    Retail_Data_Source 
  ],

  learnings:
    "Enhanced expertise in SQL, Tableau, data modeling, business intelligence, KPI development, customer analytics, sales analytics, and designing interactive dashboards for decision support."
},
{
  id: "sleep-disorder",
  category: "data-science",

  title: "Sleep Disorder Diagnosis",

  subtitle: "Optimized Machine Learning Approaches",

  description:
    "A comparative machine learning study for sleep disorder diagnosis using optimized classification algorithms and healthcare-related lifestyle features.",

  overview: `
Developed a machine learning-based system for diagnosing sleep disorders using demographic, lifestyle, and health-related attributes.

The project focuses on data preprocessing, exploratory data analysis, feature engineering, model development, hyperparameter optimization, and performance evaluation.

Multiple supervised learning algorithms were evaluated and optimized to identify an effective approach for sleep disorder classification. The study demonstrates how machine learning can be applied to healthcare-related tabular data for predictive analysis and decision support.
`,

  github:
    "https://github.com/Fahadkhan2450/Sleep-disorder-diagnosis-through-optimized-machine-learning-approaches",

  demo: "",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "Matplotlib",
    "Seaborn",
    "Machine Learning",
    "Feature Engineering",
    "Hyperparameter Tuning",
    "Google Colab"
  ],

  features: [
    "Healthcare Data Preprocessing",
    "Exploratory Data Analysis",
    "Feature Engineering",
    "Multiple ML Algorithms",
    "Model Optimization",
    "Hyperparameter Tuning",
    "Cross-Validation",
    "Performance Evaluation",
    "Classification Analysis",
    "Comparative Model Evaluation"
  ],

  images: [],

  codes: [
    {
      title: "Optimized Random Forest",
      code: `from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(
    n_estimators=300,
    max_depth=10,
    min_samples_split=5,
    min_samples_leaf=1,
    random_state=42
)

model.fit(X_train, y_train)

predictions = model.predict(X_test)`
    }
  ],

  learnings:
    "Developed practical expertise in healthcare-oriented machine learning, feature engineering, model comparison, cross-validation, and hyperparameter optimization for classification problems."
},


{
  id: "mental-health-classification",
  category: "data-science",

  title: "Mental Health Text Classification",

  subtitle: "Comparative Study of RNN, LSTM, BiLSTM & DistilBERT",

  description:
    "A comparative deep learning study evaluating RNN, LSTM, BiLSTM, and DistilBERT models for multi-class mental health text classification.",

  overview: `
Conducted a comparative deep learning study for multi-class mental health text classification using four different neural network architectures: Recurrent Neural Network (RNN), Long Short-Term Memory (LSTM), Bidirectional LSTM (BiLSTM), and DistilBERT.

The project includes text preprocessing, tokenization, sequence preparation, model training, validation, and comprehensive performance evaluation.

The RNN, LSTM, and BiLSTM models were developed using TensorFlow/Keras, while DistilBERT was implemented using the Hugging Face Transformers framework.

The models were evaluated using accuracy, precision, recall, F1-score, confusion matrices, and multi-class ROC-AUC analysis to provide a systematic comparison between recurrent neural networks and transformer-based language models.
`,

  github:
    "https://github.com/Fahadkhan2450/deep-learning-mental-health-classification",

  demo: "",

  technologies: [
    "Python",
    "TensorFlow",
    "Keras",
    "Hugging Face Transformers",
    "DistilBERT",
    "RNN",
    "LSTM",
    "BiLSTM",
    "NLP",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn"
  ],

  features: [
    "Text Preprocessing",
    "Tokenization",
    "Sequence Padding",
    "RNN Text Classification",
    "LSTM Text Classification",
    "BiLSTM Text Classification",
    "DistilBERT Fine-Tuning",
    "Multi-Class Classification",
    "Confusion Matrix Analysis",
    "Classification Report",
    "Multi-Class ROC Curve",
    "Model Comparison",
    "Performance Evaluation"
  ],

  images: [],

  codes: [
    {
      title: "RNN Text Classification",
      code: `model = Sequential([
    Input(shape=(MAX_LEN,)),

    Embedding(
        input_dim=MAX_WORDS,
        output_dim=128
    ),

    SpatialDropout1D(0.25),

    SimpleRNN(
        128,
        return_sequences=True
    ),

    GlobalMaxPooling1D(),

    Dropout(0.5),

    Dense(64, activation="relu"),

    Dropout(0.4),

    Dense(
        num_classes,
        activation="softmax"
    )
])

model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)`
    },

    {
      title: "LSTM Text Classification",
      code: `model = Sequential([
    Input(shape=(MAX_LEN,)),

    Embedding(
        input_dim=MAX_WORDS,
        output_dim=128
    ),

    SpatialDropout1D(0.25),

    LSTM(
        128,
        return_sequences=True
    ),

    GlobalMaxPooling1D(),

    Dropout(0.5),

    Dense(64, activation="relu"),

    Dropout(0.4),

    Dense(
        num_classes,
        activation="softmax"
    )
])

model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)`
    },

    {
      title: "BiLSTM Text Classification",
      code: `model = Sequential([
    Input(shape=(MAX_LEN,)),

    Embedding(
        input_dim=MAX_WORDS,
        output_dim=48
    ),

    Bidirectional(
        LSTM(
            32,
            return_sequences=True,
            dropout=0.20
        )
    ),

    GlobalMaxPooling1D(),

    Dropout(0.5),

    Dense(64, activation="relu"),

    Dropout(0.4),

    Dense(
        num_classes,
        activation="softmax"
    )
])

model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)`
    },

    {
      title: "DistilBERT Fine-Tuning",
      code: `from transformers import (
    DistilBertForSequenceClassification
)

model = DistilBertForSequenceClassification.from_pretrained(
    "distilbert-base-uncased",
    num_labels=num_classes
)`
    }
  ],

  learnings:
    "Developed and compared RNN, LSTM, BiLSTM, and transformer-based DistilBERT architectures for multi-class NLP classification. Gained practical experience in sequence modeling, text preprocessing, transformer fine-tuning, model evaluation, overfitting control, and comparative deep learning analysis."
},

{
  id: "brain-tumor",
  category: "data-science",

  title: "Brain Tumor Classification",

  subtitle: "CNN & VGG16 Transfer Learning",

  description:
    "A deep learning-based brain tumor classification system comparing a custom CNN with VGG16 transfer learning for MRI image classification.",

  overview: `
Developed a deep learning system for classifying brain MRI images using Convolutional Neural Networks and transfer learning.

The project compares a custom CNN architecture with the VGG16 pre-trained network to investigate the effectiveness of transfer learning for medical image classification.

The workflow includes MRI image preprocessing, resizing, normalization, data augmentation, model training, validation, and performance evaluation.

VGG16 was initialized with ImageNet pre-trained weights and fine-tuned for the target brain tumor classification task. Model performance was analyzed using accuracy, loss curves, confusion matrices, and classification metrics.
`,

  github:
    "https://github.com/Fahadkhan2450/Brain-Tumor-Classification-CNN-Transfer-Learning",

  demo: "",

  technologies: [
    "Python",
    "TensorFlow",
    "Keras",
    "CNN",
    "VGG16",
    "Transfer Learning",
    "Computer Vision",
    "Medical Imaging",
    "OpenCV",
    "NumPy",
    "Matplotlib",
    "Scikit-Learn"
  ],

  features: [
    "MRI Image Preprocessing",
    "Image Resizing",
    "Image Normalization",
    "Data Augmentation",
    "Custom CNN Architecture",
    "VGG16 Transfer Learning",
    "Model Fine-Tuning",
    "Training & Validation",
    "Confusion Matrix",
    "Classification Report",
    "Accuracy & Loss Analysis",
    "Model Comparison"
  ],

  images: [],

  codes: [
    {
      title: "Custom CNN",
      code: `model = Sequential([
    Input(shape=(224, 224, 3)),

    Conv2D(32, (3, 3), activation="relu"),
    MaxPooling2D(),

    Conv2D(64, (3, 3), activation="relu"),
    MaxPooling2D(),

    Conv2D(128, (3, 3), activation="relu"),
    MaxPooling2D(),

    Flatten(),
    Dense(128, activation="relu"),
    Dropout(0.5),

    Dense(num_classes, activation="softmax")
])`
    },

    {
      title: "VGG16 Transfer Learning",
      code: `from tensorflow.keras.applications import VGG16

base_model = VGG16(
    weights="imagenet",
    include_top=False,
    input_shape=(224, 224, 3)
)

base_model.trainable = False

model = Sequential([
    base_model,
    GlobalAveragePooling2D(),
    Dense(128, activation="relu"),
    Dropout(0.5),
    Dense(num_classes, activation="softmax")
])`
    }
  ],

  learnings:
    "Gained practical experience in medical image classification, CNN architecture design, transfer learning, VGG16 fine-tuning, image augmentation, and evaluation of deep learning models for healthcare applications."
},

{
id: "diabetic-retinopathy",
category: "data-science",

title: "Diabetic Retinopathy Classification",

subtitle: "Deep Learning for Retinal Fundus Image Analysis",

description:
"A deep learning-based medical imaging system for classifying diabetic retinopathy from retinal fundus images.",

overview: `
Developed a deep learning system for automated diabetic retinopathy classification using retinal fundus images.

The project focuses on retinal image preprocessing, data augmentation, model training, validation, and performance evaluation for medical image classification.

Deep learning techniques were applied to learn relevant retinal features and classify images according to diabetic retinopathy severity. Model performance was evaluated using accuracy, precision, recall, F1-score, confusion matrix, and classification metrics.
`,

github:
"https://github.com/Fahadkhan2450/Evaluating-Vision-Transformers-for-Ordinal-Diabetic-Retinopathy-Classification-on-Fundus-Images",

demo: "",

technologies: [
"Python",
"TensorFlow",
"Keras",
"CNN",
"Deep Learning",
"Computer Vision",
"Medical Imaging",
"OpenCV",
"NumPy",
"Pandas",
"Matplotlib",
"Scikit-Learn"
],

features: [
"Retinal Image Preprocessing",
"Image Resizing",
"Image Normalization",
"Data Augmentation",
"CNN-Based Classification",
"Model Training & Validation",
"Diabetic Retinopathy Detection",
"Confusion Matrix",
"Classification Report",
"Accuracy & Loss Analysis",
"Performance Evaluation"
],

images: [],

codes: [
{
title: "CNN Model",
code: `model = Sequential([
Input(shape=(224, 224, 3)),

Conv2D(32, (3, 3), activation="relu"),
MaxPooling2D(),

Conv2D(64, (3, 3), activation="relu"),
MaxPooling2D(),

Conv2D(128, (3, 3), activation="relu"),
MaxPooling2D(),

GlobalAveragePooling2D(),

Dense(128, activation="relu"),
Dropout(0.5),

Dense(num_classes, activation="softmax")
])`
}
],

learnings:
"Gained practical experience in medical image analysis, retinal image preprocessing, CNN-based classification, data augmentation, model evaluation, and applying deep learning techniques to diabetic retinopathy detection."
},

];

export default projects;