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
    title: 'Mental Health Score',
    description:
      'A machine learning model that estimates a mental health score from lifestyle and survey data, wrapped in an interactive app for quick, judgment-free self-checks.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    github: 'https://github.com/datawithabdulrehman/Mentel_Health_Score',
    live: 'https://datawithabdulrehman.github.io/Mentel_Health_Score/',
    accent: 'cyan',
  },
  {
    id: '02',
    title: 'Object Detection',
    description:
      'A computer vision project focused on locating and classifying objects in images, built while exploring detection pipelines beyond plain image classification.',
    tags: ['Python', 'OpenCV', 'Computer Vision'],
    github: 'https://github.com/datawithabdulrehman/Object-detection',
    live: null,
    accent: 'purple',
  },
  {
    id: '03',
    title: 'Gold Price Prediction',
    description:
      'A regression-based forecasting model trained on historical gold price data to study trend patterns and predict near-term price movement.',
    tags: ['Python', 'Regression', 'Time Series', 'Pandas'],
    github: 'https://github.com/datawithabdulrehman/Gold-Price-Prediction',
    live: null,
    accent: 'pink',
  },
  {
    id: '04',
    title: 'Movie Recommender System',
    description:
      'A content-based recommendation engine that suggests similar movies using similarity scoring over film metadata and features.',
    tags: ['Python', 'Recommender Systems', 'Scikit-learn'],
    github: 'https://github.com/datawithabdulrehman/Movie-Recommender-System',
    live: null,
    accent: 'orange',
  },
]

export const stats = [
  { label: 'Projects Shipped', value: projects.length, suffix: '' },
  { label: 'Core Skills', value: skillGroups.reduce((n, g) => n + g.items.length, 0), suffix: '+' },
  { label: 'Dedication', value: 100, suffix: '%' },
]
