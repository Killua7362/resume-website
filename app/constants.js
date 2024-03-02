const experience = [
  {
    title: "Software Engineer Intern",
    company_name: "Unify Ivy",
    company_site: "https://unify.ai/",
    company_color: "#00C435",
    img_src: "/experience/icons/ivy.png",
    date: "Jun 2023 - Nov 2023",
    points: [
      "Implemented Audio Spectrogram transformer which transforms audio into spectrogram and runs image classification using transformer architecture",
      "Implemented torch mobile support for Ivy's autotuner",
      "Created a keyword arguments expander which let's user supply variable number of keyword arguments to torch script",
    ],
  },
  {
    title: "Machine Learning Research Intern",
    company_name: "HALE lab",
    company_site: "https://halelabnitk.github.io/",
    company_color: "#0275D8",
    img_src: "/experience/icons/hale.png",
    date: "May 2022 - Aug 2022",
    points: [
      "Interned at The Healthcare Analytics and Language Engineering lab, where I implemented a domain-specific pre-trained language model for classifying self-reporting tweets as potential COVID-19 cases",
      "Conducted experiments with various Huggingface transformer models on a dataset comprising over 18,000 tweets, addressing data imbalance through oversampling and augmentation techniques.",
    ],
  },
];
const ml_projects = [
  {
    title:"Companion",
    techstack:"Torch, Transformers, LangChain, ONNX, Redis",
    github_link:"https://github.com/Killua7362/wise-companion.git",
    points:[
      "Developed a data analyst companion for Yelp dataset which comprises 15,000 data points. using RAG architecture, incorporating a series of Gemma-7b models to trigger a chain of thought process.",
      "Integrated ElasticSearch to efficiently store embeddings, enhancing semantic search and experience.",
      "Implemented bark and whisper ai models for audio output and transcribing.",
      "Added a redis memory buffer and self query retriever algorithm using Langchain to persist chat history, facilitating seamless interaction.",
      "Utilized the ONNX backend compiler in conjunction with TensorRT runtime and static quantization to achieve decreased latency and a more compact memory footprint."
    ]   
  },
  {
    title:"Remover",
    techstack:"Torch, OpenCV, Ultralystics, Transformers, bitsandbytes",
    github_link:"https://github.com/Killua7362/Remover-Inpainter.git",
    points:[
      "Implemented an image segmentation pipeline to remove the foreground from the image.",
      "Integrated a two-step segmentation approach by predicting the bounding box prompt for SAM model using YOLOv8 model.",
      "Employed a Stable Diffusion X1 model with ControlNet to seamlessly fill a segmented part of the image.",
      "Fine Tuned the pipeline on Stanford Background Dataset of over 4000 outdoor scene images with mixed precision training for reduced training time."
    ]   
  },
  {
    title:"Jailbreak",
    techstack:"Transformers, GPTQ, React, Flask, Jenkins, GCP, Kubernetes, Terraform",
    github_link:"https://github.com/Killua7362/llm-jailbreak.git",
    points:[
      "Implemented a black-box prompt attacker architecture to get uncensored output from a LLAMA2 model.",
      "Utilized Mistral-7B as an attacker to predict prompts for jailbreaking the target model and employed the MAMBA model as a judge for calculating loss between the two models.",
      "Created a robust backend using flask and frontend using reactjs for seamless user experience.",
      "Deployed the architecture on GCP using Kubernetes and docker for scalability and reusability.",
      "Added github workflow to trigger jenkins workflow for continuous deployment of the architecture."
    ]   
  },
  {
    title:"Multimodal classification",
    techstack:"Torch, PEFT, PySpark",
    github_link:"https://github.com/Killua7362/multimodal-classification.git",
    points:[
      "Implemented multi modal classification pipeline by fine tuning and optimizing BakLLaVA model.",
      "Utilized QLORA for fine tuning the model  to decrease training time and reduce model weights.",
      "Integrated PySpark to efficiently clean and process fakeddit dataset which comprises 15,000 images and captions of scraped reddit posts for fine tuning of the model.",
      "Leveraged reinforcement training with DPO technique to align the model with the classification loss."
    ]   
  }
];

const web_dev_projects = [
  {
    title:"Blogger",
    techstack:"NextJs, Typescript, TailwindCSS, Prisma, Axios, Clerk, Zod, Recoil, MySQL",
    github_link:"https://github.com/Killua7362/blogger",
    points:[
      "Developed and deployed a Next.js blogging web app for seamless article creation using markdown.",
      "Utilized Prisma ORM and MySQL for data storage with zod form validation.",
      "Managed admin state efficiently with recoil and employed tailwind for styling.",
    ]   
  }
]

const skills = [
  {
    title:"Languages",
    data:"Python, Java, JavaScript, TypeScript, SQL, HTML/CSS, C++",
    image_path:"/icons/language.png"
  },
  {
    title:"Frameworks",
    data:"Pytorch, Tensorflow, Jax, React.Js, NextJS, Node.JS, Express, Flask, redux, recoil, Vite, ThreeJS, GraphQL, MySQL, MongoDB, Redis, Jenkins",
    image_path:"/icons/webdev.png"
  },
  {
    title:"Tools",
    data:"Git, Linux, Docker, Vim, Terraform, Google Cloud platform, Kubernetes, Ansible",
    image_path:"/icons/tools.png"
  }
]

const aboutMe = "Testing";
export { experience, aboutMe, ml_projects,skills,web_dev_projects};