export const profile = {
  name: 'Abdul Rehman',
  roles: ['Data Scientist', 'ML Enthusiast', 'Python Developer', 'Insight Hunter'],
  location: 'Mandi Bahauddin, Punjab, Pakistan',
  education: 'BS Data Science — Virtual University of Pakistan',
  email: 'datawithabdulrehman@gmail.com',
  github: 'https://github.com/datawithabdulrehman',
  linkedin: 'https://www.linkedin.com/in/datawithabdulrehman',
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
    title: 'London House Price Prediction',
    description:
      'A regression-based model trained on London housing data to estimate property prices from location, size, and other listing features.',
    tags: ['Python', 'Regression', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/datawithabdulrehman/London_House_Predection',
    live: null,
    accent: 'orange',
  },
  {
    id: '05',
    title: 'Self-Made Billionaires Analysis',
    description:
      'An exploratory data analysis project uncovering patterns behind the world\'s self-made billionaires — industries, ages, countries, and paths to wealth.',
    tags: ['Python', 'Pandas', 'Data Analysis', 'Matplotlib'],
    github: 'https://github.com/datawithabdulrehman/Selfmade-billionaires-analysis',
    live: null,
    accent: 'cyan',
  },
  {
    id: '06',
    title: 'Waste Management System',
    description:
      'A web application for tracking and managing waste collection, built to explore practical, deployable solutions beyond notebooks and models.',
    tags: ['Web App', 'JavaScript'],
    github: null,
    live: 'https://abxwastemanagment.netlify.app/',
    accent: 'purple',
  },
]

export const stats = [
  { label: 'Projects Shipped', value: projects.length, suffix: '' },
  { label: 'Core Skills', value: skillGroups.reduce((n, g) => n + g.items.length, 0), suffix: '+' },
  { label: 'Dedication', value: 100, suffix: '%' },
]
