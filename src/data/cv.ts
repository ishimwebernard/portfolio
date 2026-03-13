export type CvSocial = {
  label: string;
  href?: string;
};

export type CvEducation = {
  school: string;
  location?: string;
  degreeOrProgram: string;
  dates: string;
  details?: string[];
};

export type CvExperience = {
  title: string;
  organization: string;
  dates: string;
  highlights: string[];
};

export type CvSectionList = {
  title: string;
  items: string[];
};

export const cv = {
  name: "Bernard Ishimwe",
  contact: {
    email: "isbernard2001@gmail.com",
    phone: "+250784342620",
    socials: [
      { label: "GitHub", href: "https://github.com/ishimwebernard" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/bernardishimwe/" },
    ],
  },
  education: [
    {
      school: "University of Rwanda, College of Science and Technology",
      dates: "September 2019 – June 2024",
      degreeOrProgram: "BSc. Civil and Transportation Engineering",
      details: [
        "Relevant Coursework: Traffic Engineering and Safety, Intelligent Transport Systems, Project Planning and Scheduling, Pavement Materials and Asphalt Mix Design, Spatial Planning, Construction Materials and Technology, Finite Element Modelling (FEM), Reinforced Concrete Design, AutoCAD Civil 3D, Design of Drainage Structures, C programming language.",
      ],
    },
  ] satisfies CvEducation[],
  skills: [
    {
      title: "Machine Learning",
      items: ["CVAT", "Roboflow", "Pytorch", "JupyterNotebook"],
    },
    {
      title: "Civil Engineering Software",
      items: [
        "PTV Vissim & Visum",
        "AutoCAD Civil3D",
        "QGIS",
        "HEC-RAS",
        "ASTRA Pro",
      ],
    },
    {
      title: "Programming Languages",
      items: ["Python", "JavaScript", "Java", "C/C++"],
    },
    {
      title: "Research",
      items: [
        "Research Formulation",
        "Feature selection",
        "EndNote",
        "Mendley",
        "SurveyMonkey",
      ],
    },
  ] satisfies CvSectionList[],
  experience: [
    {
      title: "Computational Researcher",
      organization: "ML Collective",
      dates: "January 2026 - Present",
      highlights: [
        "Parking Site Occupancy Analysis with Machine Learning (YOLOv8): Used Computer Vision Annotation Tool (CVAT) to annotate and label 50 images of parking lot with different states (Occupied or not occupied), used the data to train You Only-Look-Once (YOLO) API model to classify occupancy.",
        "Generated confusion matrix to diagnose the accuracy and precision of the model; used the data insights to adjust image resolution and re-annotating to improve the model fit.",
        "Occlusion-Aware Object Detection for Autonomous Robots Using Monocular Depth Estimation (Ongoing): Applied Cutout to randomly mask image regions, enhancing model generalization to partially visible objects.",
        "Developed GridMask augmentation pipeline, systematically masking multiple image patches, resulting in a measurable increase in model accuracy under occlusion.",
        "Evaluated augmentation effectiveness using mAP and occlusion-specific recall metrics, demonstrating improvement in detection performance by 15% over baseline.",
      ],
    },
    {
      title: "Transport Specialist Assistant (Internship)",
      organization: "World Bank Group",
      dates: "September 2024 – November 2025",
      highlights: [
        "Worked with European Space Agency (ESA) to manually annotate Sentinel-2 optical and Sentinel 1 Synthetic Aperture Radar (SAR) data; used the model for the automatic detection of water areas and 15% more unclassified road networks (Not in the National Gazette); integrated newly detected shapefiles into the Road Asset Management System (RAMS).",
        "Wrote Python Scripts for Road Network Inventory cleaning and Create-Read-Update-Delete (CRUD) operations; used refined shapefiles to model mining products export and other freight routes; results identified high return corridors expected to reduce transport costs by 30%.",
      ],
    },
    {
      title: "Research Assistant",
      organization: "Urban Electric Mobility Initiative and City of Kigali",
      dates: "June 2024 – November 2024",
      highlights: [
        "Reviewed the preliminary design for the improvement of National Bus Station; identified over reliance on assumptions as a key defect in the design.",
        "Conducted geospatial mapping of the city to identify optimal locations for charging stations for the 100 electric buses. The planning ensured infrastructure placement supported scalability and operational efficiency, while mitigating risks associated with limited electricity access.",
      ],
    },
    {
      title: "Engineering Intern",
      organization: "PRIMECS",
      dates: "December 2023 – June 2024",
      highlights: [
        "Carried out a desk review of Temporary works, Formwork, Cofferdams; provided first drafts for training materials; assisted in the dissemination of the training for 10 professionals.",
        "Analyzed technical drawings and blueprints for tunnel, walkways and rail infrastructure; calculated material quantities with MS Excel and Civil3D; provided financial proposal for the project; submission allowed to company to be awarded a civil works contract for the project.",
      ],
    },
  ] satisfies CvExperience[],
  advancedTraining: [
    "Machine Learning Collective: Computer Vision, Data Engineering",
    "Datacamp: Machine learning fundamentals in Python (Ongoing)",
    "World Bank Group: Leaders in Urban Transport Program (LUTP) (2025)",
    "Rwanda Ministry of Infrastructure: Geographical Information System with QGIS (2024)",
    "ALX Rwanda: Software Engineering (2022)",
    "Andela Rwanda: Andela Technical Leadership Program (2020-2021)",
  ],
  affiliations: [
    "Research Fellow, Urban Electric Mobility (UEMI), June 2024 - present",
    "Graduate Engineer, Institute of Engineers Rwanda (IER), July 2024 - present",
    "Technical Leadership, Andela Rwanda, July 2021 - present",
  ],
  awards: [
    "Principal Roll of Honours, Department of Civil, Environmental and Geomatics Engineering, Year 4 and Year 3 second term",
  ],
  mentorship: [
    "Civil3D for Road Design: Provided a 3 days training for young engineers on how to create road alignments, profiles, cross sections and quantity takeoffs in Civil 3D; provided a comprehensive training for the Design and Annotations with a focus on lines, polylines, hatches",
  ],
  conferences: [
    "Institute of Engineers Rwanda",
    "Walk21, Kigali, Rwanda",
    "Geo Enabling Initiative for Monitoring and Evaluation, Lilongwe, Malawi",
    "Leaders in Urban Transport, Lilongwe, Malawi",
  ],
} as const;

