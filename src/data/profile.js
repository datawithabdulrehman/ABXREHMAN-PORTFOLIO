export const profile = {
  name: 'Abdul Rehman',
  roles: ['Data Scientist', 'ML Enthusiast', 'Python Developer', 'Insight Hunter'],
  location: 'Mandi Bahauddin, Punjab, Pakistan',
  education: 'BS Data Science — Virtual University of Pakistan',
  email: 'datawithabdulrehman@gmail.com',
  github: 'https://github.com/datawithabdulrehman',
  linkedin: 'https://www.linkedin.com/in/datawithabdulrehman',
  kaggle: 'https://www.kaggle.com/datawithabxrehman',
}

export const skillGroups = [
  {
    title: 'languages & core',
    items: ['Python', 'SQL', 'NumPy', 'Pandas', 'Git & GitHub'],
  },
  {
    title: 'machine learning',
    items: ['Scikit-learn', 'TensorFlow / Keras', 'Regression & Classification', 'Model Evaluation'],
  },
  {
    title: 'computer vision & data',
    items: ['OpenCV', 'Object Detection', 'Feature Engineering', 'Data Cleaning'],
  },
  {
    title: 'visualization & delivery',
    items: ['Matplotlib', 'Seaborn', 'Streamlit', 'Jupyter Notebook'],
  },
]

export const projects = [
  {
    id: '01',
    title: 'F1 2026 WDC Prediction',
    description:
      'A machine learning model predicting the 2026 Formula 1 World Drivers\' Championship, wrapped in an interactive Streamlit app for live standings and predictions.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    github: 'https://github.com/datawithabdulrehman/F1_WDC_Prediction_2026',
    live: 'https://f1wdcprediction2026-abxrehman.streamlit.app/',
    accent: 'cyan',
  },
  {
    id: '02',
    title: 'Mental Health Score',
    description:
      'A machine learning model that estimates a mental health score from lifestyle and survey data, wrapped in an interactive app for quick, judgment-free self-checks.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    github: 'https://github.com/datawithabdulrehman/Mentel_Health_Score',
    live: 'https://datawithabdulrehman.github.io/Mentel_Health_Score/',
    accent: 'purple',
  },
  {
    id: '03',
    title: 'Food Delivery Time Prediction',
    description:
      'A regression model that predicts food delivery times from order and route data, deployed as an interactive Streamlit app for real-time estimates.',
    tags: ['Python', 'Regression', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/datawithabdulrehman/Food-Delivery-Time-Prediction',
    live: 'https://food-delivery-time-prediction-byabxrehman.streamlit.app/',
    accent: 'pink',
  },
  {
    id: '04',
    title: 'Waste Management System',
    description:
      'A web application for tracking and managing waste collection, built to explore practical, deployable solutions beyond notebooks and models.',
    tags: ['Web App', 'JavaScript'],
    github: https://github.com/datawithabdulrehman/Waste_Managment,
    live: 'https://abxwastemanagment.netlify.app/',
    accent: 'orange',
  },
  {
    id: '05',
    title: 'Heart Disease Prediction',
    description:
      'A classification model that estimates the risk of heart disease from patient health parameters, deployed as an interactive Streamlit app.',
    tags: ['Python', 'Scikit-learn', 'Classification', 'Streamlit'],
    github: 'https://github.com/datawithabdulrehman/Heart_Disease',
    live: 'https://heart-disease-by-abxrehman.streamlit.app/',
    accent: 'cyan',
  },
  {
    id: '06',
    title: 'Pakistan Car Price Prediction',
    description:
      'A regression model that predicts used-car prices in the Pakistani market from features like make, model, year, and mileage, with a live Streamlit app.',
    tags: ['Python', 'Regression', 'Pandas', 'Streamlit'],
    github: 'https://github.com/datawithabdulrehman/Pakistan-Car-Prediction',
    live: 'https://pakistan-car-prediction-abxrehman.streamlit.app/',
    accent: 'purple',
  },
]

export const stats = [
  { label: 'Projects Shipped', value: projects.length, suffix: '' },
  { label: 'Core Skills', value: skillGroups.reduce((n, g) => n + g.items.length, 0), suffix: '+' },
  { label: 'Dedication', value: 100, suffix: '%' },
]