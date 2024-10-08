import { queryFuel, roommateTinder, speakSphere , covidStack} from './hero.const';
import roommatetinderimg from '../images/Dona_Desk.png';
import speaksphereimg from '../images/UTech.png';
import queryfuelimg from '../images/queryfuel.png';
import covid from '../images/img.png';

export const introData = {
  introLine: `Reeti Jha: coding by day, hacking her way into the digital wild west by night—armed with a debugger and a passion for cybersecurity!`,
  gitHubLink: 'https://github.com/Reeti1605',
  linkedInLink: 'https://www.linkedin.com/in/reeti-jha/',
  sequence: [
    '👨🏻‍💻 Backend Developer',
    2000,
    '👨🏻‍💻 Cybersecurity Analyst',
    2000,
    '👨🏻‍💻 Cloud Engineer',
    2000,
  ],
  gitHubUsername: 'Reeti1605',
};

export const aboutData = {
  aboutLine: 'A driven Software Engineer and Cybersecurity Enthusiast',
  aboutDescription: `A software developer and cybersecurity enthusiast currently pursuing 
  my Master of Engineering in Computer Science at Cornell University. I’ve gained diverse experience, 
  from developing a machine learning-based trading tool to enhancing cloud security. 
  My technical toolkit includes Python, C++, Node.js, and AWS, and I’ve contributed to impactful projects like a traffic simulation system and a query-solving platform.
  I’m passionate about creating innovative and secure software solutions`,
};

export const experienceData = [
    {
        timeline: 'Aug 2024 - Present, Ithaca, New york',
        companyName: 'UTech Project - Cornell University',
        role: 'Backend Developer',
        description: [
            'Served as a backend developer on a New York State-funded traffic simulation project, architecting scalable systems with Node.js to handle high volumes of traffic data.\n' +
            '\n',
            'Utilized Express.js to build RESTful APIs for data retrieval and transfer, facilitating real-time communication between traffic simulation modules and external data sources.',
            'Integrated AWS S3 for secure data storage and AWS Lambda for serverless data processing, ensuring efficient handling of large data sets and reducing latency.',
            'Employed MongoDB for scalable data storage, enabling fast data access and retrieval, while ensuring data consistency and integrity.',
            'Implemented AWS CloudWatch monitoring and logging, allowing proactive system monitoring and quick troubleshooting to maintain continuous operational performance.'
        ],
    },
  {
    timeline: 'Jul 2023 - Dec 2023, Pune, India',
    companyName: 'Barclays Global Service Centre',
    role: 'Software Analyst',
    description: [
        'Developed a machine learning-based trading tool using Python and C++, leveraging supervised learning models such as random\n' +
        'forests and gradient boosting to enhance stock prediction accuracy by 15%. The tool analyzed real-time market data to make\n' +
        'precise stock predictions.',
        'Conducted multithreaded programming to optimize the performance of trading systems, ensuring scalability and fault-tolerance in\n' +
        'high-frequency financial environments.',
        'Utilized distributed programming techniques and integrated AI-driven risk management to detect and mitigate potential market\n' +
        'disruptions, ensuring the integrity and security of financial transactions.',
        'Implemented unit testing and code reviews, ensuring system robustness while adhering to security protocols.'
    ],
  },
  {
    timeline: 'Aug 2022 - Mar 2023, Noida,India',
    companyName: 'SecLogic INC',
    role: 'Associate Cloud Security Analyst',
    description: [
        'Designed and deployed data protection protocols using advanced encryption algorithms (AES-256, RSA) and network security measures (TLS, IPsec), bolstering overall security posture against unauthorized access and data breaches.',
        'Integrated AWS Key Management Service (KMS) and Identity and Access Management (IAM) roles to implement automated security policies, providing granular access control and ensuring data privacy. ',
        'Configured compliance-driven policies aligned with financial industry regulations, enhancing secure cloud infrastructure and facilitating robust identity management across services.'
    ],
  },
  {
    timeline: 'Jun 2022 - Aug 2022, Pune, India',
    companyName: 'Barclays Global Service Centre',
    role: 'Graduate Summer Intern (Technology)',
    description: [
        'Implemented asynchronous processing and multi-threading in backend workflows, reducing latency in high-throughput systems.',
        'Optimized load balancing and resource allocation, enhancing data processing speed and improving system efficiency.',
        'Integrated Elasticsearch for real-time log management, enabling efficient log indexing and rapid data retrieval.',
        'Developed custom log filtering and parsing algorithms to streamline data ingestion, minimizing indexing delays.',
        'Utilized optimized query patterns and caching mechanisms, improving Elasticsearch performance by 25%.',
        'Implemented enhanced security controls on Elasticsearch, securing sensitive log data and restricting unauthorized access.',
        'Configured data retention policies and automated purging, maintaining storage efficiency while preserving critical logs.'
    ],
  },
  {
    timeline: 'Oct 2021 - May 2022, Noida, India',
    companyName: 'Seclogic INC',
    role: 'Cybersecurity Researcher',
    description: [
        'Designed and implemented a diverse range of phishing simulation templates, leveraging HTML and CSS to mimic real-world phishing tactics, aimed at enhancing cybersecurity awareness and training effectiveness.',
        'Developed interactive, module-based educational courses for phishing attack victims, incorporating threat analysis and incident response strategies to reduce future vulnerability.',
        'Conducted research on emerging phishing techniques, including spear-phishing and social engineering methods, to inform content updates and promote advanced cybersecurity literacy among end-users.'
    ],
  },
  {
    timeline: 'Jun 2021 - May 2022, Mumbai, India',
    companyName: 'Campcard Solutions',
    role: 'Software Developer',
    description: [
        'Designed a scalable backend with Node.js and Express.js, handling 100,000+ concurrent users with non-blocking I/O for real-time data processing.',
        'Deployed NGINX load balancing and Redis caching for optimized API performance under high-traffic conditions.',
        'Implemented horizontal scaling to ensure backend resilience and maintain consistent uptime during peak loads.',
        'Secured transaction data with JWT-based authentication, AES-256 encryption, and strict input validation protocols.',
        'Ensured compliance with financial data protection standards, reducing risks of unauthorized access and data breaches.'
    ],
  },
    {
        timeline: 'Jun 2021  - Feb 2022,  India',
        companyName: 'Sudans tech',
        role: 'Student Intern',
        description: [
            'Engineered responsive event websites with HTML, CSS, and JavaScript, optimizing for cross-device compatibility and UX consistency.',
            'Employed CSS Flexbox and Grid for adaptive layouts, ensuring seamless rendering across mobile, tablet, and desktop devices.',
            'Curated and managed dynamic content for the flagship hackathon, utilizing lazy loading and optimized media assets to enhance performance.',
            'Implemented content structure improvements and SEO best practices to boost user engagement and search visibility.'
        ],
    },

    {
        timeline: 'Mar 2021  - Apr 2021,  Singapore',
        companyName: 'Sparks Foundation',
        role: 'Web Developer and Design Intern',
        description: [
            'Developed a donation platform for The Sparks Foundation with Stripe API integration, implementing secure, PCI-compliant card payment processing.',
            'Built an intuitive front end with HTML, CSS, and JavaScript, leveraging responsive design principles to enhance user accessibility across devices.',
            'Configured Stripe’s Payment Intents API for real-time transaction handling and utilized Webhooks for status updates and error management.',
            'Integrated data validation and client-side tokenization to ensure secure handling of donor payment information.'
        ],
    }
];

export const projectData = [
    {
        img: speaksphereimg,
        title: 'UTech Traffic Simulation',
        description: [
            'Built a scalable backend with Node.js, leveraging AWS services for seamless traffic data transfer and storage in S3 buckets.',
            'Configured S3 for secure data storage with access control policies, ensuring both data integrity and compliance with privacy standards.',
            'Employed AWS Lambda for automated data processing, enabling efficient handling of real-time traffic data and reducing latency.',
            'Integrated SUMO (Simulation of Urban Mobility) to model and analyze traffic patterns across New York State with high accuracy.\n' +
            '\n',
            'Developed automated data pipelines to streamline data ingestion, processing, and analysis, optimizing simulation workflows.',
            'Enhanced traffic simulation accuracy with real-time data feeds, enabling proactive urban traffic management solutions',
            'Utilized AWS CloudWatch for monitoring data pipeline performance, ensuring reliability and quick response to potential issues.'
        ],
        link: '',
        stack: speakSphere,
    },
  {
    img: queryfuelimg,
    title: 'Query Fuel: In-house query solver',
    description: [
      'Developed a Query Solver platform that can be installed at multiple institutes and communities at once to act as a doubt solving platform.',
      'Novelty includes the Search-as-type feature and enhanced Security Features.',
    ],
    link: 'https://github.com/shvam0000/Query-Fuel',
    stack: queryFuel,
  },
  {
    img: roommatetinderimg,
    title: 'Dona Desk',
    description: [
      'Built a donation platform with Stripe API integration, enabling secure, multi-currency card payments for various causes through a user-friendly interface.\n' +
      '\n',
        'Configured Stripe\'s Payment Intents API and Webhooks for real-time transaction processing, status updates, and instant feedback.',
        'Implemented client-side tokenization for secure payment handling and integrated automated email notifications for donation confirmation.',
        'Designed a backend with Node.js and Express.js to manage donations, track user engagement, and provide detailed reporting.'
    ],
    link: 'https://github.com/Reeti1605/Website-with-Payment-Gateway-Integration.-Sparks-Foundation',
    stack: roommateTinder,
  },
    {
        img: covid,
        title: 'COVID - 19 Prediction',
        description: [
            'Developed a Convolutional Neural Network (CNN) model in TensorFlow/Keras, achieving 82% accuracy for COVID-19 detection from X-ray and CT scan images.',
            'Utilized ReLU activation functions in convolutional layers to introduce non-linearity, enhancing the model\'s capability to learn complex features.',
            'Conducted feature extraction with max-pooling layers to reduce spatial dimensions, enabling efficient processing and focus on critical patterns in medical images.',
            'Tuned hyperparameters, including learning rate, batch size, and dropout rates, to optimize model performance and prevent overfitting.'
        ],
        link: 'https://ieeexplore.ieee.org/document/10047601',
        stack: covidStack,
    }
];

export const contactData = {
  place: 'New York, NY',
  email: 'rj398@cornell.edu',
};

export const footerData = {
  linkedIn: 'https://www.linkedin.com/in/reeti-jha/',
  github: 'https://github.com/Reeti1605',
};
