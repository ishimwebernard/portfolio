export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  disclaimer?: string;
  updatedLabel?: string;
  summary: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  references?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ml-in-transportation-engineering",
    title: "Where do we stand? Machine Learning in Transportation Engineering",
    author: "I. Bernard",
    disclaimer:
      "The content in this document reflects my personal views and does not necessarily represent the views, positions, or policies of any organization, institution, or employer with which I am affiliated.",
    updatedLabel: "From v2_ml.pdf",
    summary:
      "A concise overview of machine learning fundamentals and why traffic engineering is especially well-suited for data-driven methods, with a practical view on what comes next: predictive/prescriptive models, real-time multi-source data, and interpretability.",
    sections: [
      {
        heading: "Machine Learning – Status Quo",
        paragraphs: [
          "Machine learning involves using existing data to build models that can predict or infer patterns in new or unseen data, such as recommendation systems used by platforms like YouTube and TikTok.",
          "Machine learning enables data-driven decision-making by learning from existing data. Models are trained on a training dataset and evaluated on validation or test datasets using appropriate metrics (e.g., MAE/RMSE for regression; accuracy/precision/recall/F1-score for classification).",
          "The choice of learning approach depends on whether labeled data is available. Supervised learning uses labeled data to learn mappings between inputs and outputs, while unsupervised learning discovers patterns or groupings in unlabeled data.",
          "Logistic regression is a foundational supervised method for binary classification, producing probabilities via a sigmoid activation function.",
          "Neural networks learn complex nonlinear relationships through layered representations (input, hidden, output). Feedforward neural networks are commonly trained using backpropagation for classification/regression tasks such as traffic flow prediction.",
          "When labeled categories exist, classification assigns points to known classes; clustering groups similar points without labels (e.g., K-means, DBSCAN).",
          "Bootstrapping can assess model stability and uncertainty in noisy real-world regression settings by repeatedly resampling and fitting multiple models.",
          "Decision trees perform hierarchical feature-based splits guided by entropy and information gain to reduce uncertainty and improve predictions.",
        ],
      },
      {
        heading: "What’s in it for Transportation Engineering?",
        paragraphs: [
          "Traffic engineering shows high potential for machine learning due to large, heterogeneous, continuously generated data from sensors, cameras, and connected vehicles. ML can support real-time decision-making, performance optimization, and safety improvement.",
          "Convolutional Neural Networks (CNNs) are effective for image/video traffic analysis because they preserve spatial structure for feature extraction.",
          "In image-based traffic analysis, CNNs support traffic sign localization and classification; object detectors can handle localization and recognition jointly.",
          "In video-based traffic analysis, CNNs have been applied to vehicle classification in UAV imagery with lightweight architectures, reducing false detections compared to hand-crafted feature approaches and enabling practical monitoring systems.",
        ],
      },
      {
        heading: "Way forward",
        paragraphs: [
          "Transportation engineering should move from descriptive analysis toward predictive and prescriptive ML models by integrating ML with simulation, control, and optimization frameworks to proactively manage congestion, safety risks, and system efficiency.",
          "Greater integration of real-time and multi-source data (cameras, sensors, connected vehicles, mobile devices) can improve robustness and enable responsive ML-driven traffic management for control, incident detection, and demand management.",
          "Model interpretability and reliability should be prioritized for engineering adoption through explainable ML, uncertainty quantification, and validation frameworks aligned with standards and regulations.",
        ],
      },
    ],
    references: [
      "Yinhai Wang, Zhiyong Cui, Ruimin Ke: Machine learning for transportation research and applications, 2023",
      "Shaun V. Ault, Soohyun Nam Liao, Larry Musolino: Principles of Data Science",
    ],
  },
];

