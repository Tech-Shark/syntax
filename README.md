# Syntax: Technical Documentation

Syntax is an innovative web application designed to assist users in improving their writing skills and creating effective CVs. The app utilizes advanced AI technology to provide grammar and syntax correction, CV generation, and analysis.

Our major aim is to see the quick adoption of blockchain technologies by the end users by developing Dapps that are essential to their personal and success growth.

1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Architecture](#architecture)
4. [Tools and Technologies](#tools-and-technologies)
5. [Functionalities and Workflow](#functionalities-and-workflow)
    - [Grammar Checker](#grammar-checker)
        - [Backend Definition for Grammar Analysis](#backend-definition-for-grammar-analysis)
    - [CV Enhancer](#cv-enhancer)
        - [Backend Definition for CV Analysis](#backend-definition-for-cv-analysis)
6. [Setting Up Your Environment](#setting-up-your-environment)
7. [User Authentication](#user-authentication)
8. [Error Handling](#error-handling)
9. [Future Development Plans](#future-development-plans)
10. [Conclusion](#conclusion)


## Overview

**Syntax** is a web application built on the **Internet Computer (ICP)** platform, designed to provide **three** main functionalities: **Grammar Checking**, **CV Enhancement** and **ATS Capabilities**. The application utilizes **artificial intelligence (AI)** to perform grammar checks on text and optimize CVs (resumes) to better match specific job descriptions. This document provides a comprehensive overview of the application, detailing its functionalities, architecture, and the technologies used in its development.


## Key Features

1. **Grammar Checker:** Allows users to paste text and receive feedback on syntactic and grammatical errors, along with suggestions for improvement and a rewritten version of the text.

2. **CV Enhancer:** Enables users to optimize their CVs based on a job description by highlighting relevant skills, rewriting work experience sections, and generating a professional summary tailored to the job.experience, summary, and skills.

<!-- 3. **ATS-Friendly Resume Formatting:** The app offers customizable templates to ensure compatibility with Applicant Tracking Systems.

4. **Multi-Language Support:** The app initially supports popular languages, with plans for expansion to others. -->


## Architecture

**Syntax** is an Internet Computer (ICP) application, which means it is hosted on a decentralized network that provides scalability and security for web services. The application comprises two main components:

1. **`Frontend`:** Built using **React.js**, the frontend provides a user interface (UI) for interacting with the grammar checker and CV enhancer. It handles user input and displays analysis results from the backend services.

2. **`Backend`:** Developed in **Rust**, the backend is deployed as a canister on the Internet Computer. It processes requests for grammar analysis and CV enhancement and stores the results.

### Tools and Technologies

  -  **`Internet Computer (ICP)`::** The underlying platform provides a decentralized environment for hosting the app's services.
  -  **`Backend`:** `Rust` The primary language used for backend development, offering safety and performance benefits. The backend handles processing for grammar and CV analyses.. 
  -  **`Frontend`:** `React.js` A JavaScript library used for building the user interface of the web application..
  -  **`Libraries`:** React Router, React Router Dom.
  -  **`Authorization`:** `Internet Identity`.
  -  **`Function Service Endpoint and Proxy`:** FastAPI (Python) deployed on Fly.io
  -  **`AI Model`:** OpenAI GPT 3.5


## Functionalities and Workflow

1. **Grammar Checker**
The Grammar Checker allows users to analyze text for grammatical correctness and style. Here's how it works:
   - **`User Input`** The user pastes a paragraph of text into the grammar checker interface.
   - **`Analysis Request`** Upon clicking `Analyze`, a request is sent to the backend AI service to process the text.
   - **`AI Processing`**: The backend service analyzes the text for `grammatical and syntactic errors`, provides suggestions for improvements, and generates a rewritten version of the text.
   - **`Result Display`**: The results are sent back to the frontend, where users can view grammatical errors, syntactic errors, suggestions, and the rewritten text.

    ### Backend Definition for Grammar Analysis:
      - **Data Structures:**
         - `GrammarUserInput`: Contains the user-provided text for analysis.
         - `GrammarCheckResult`: Includes details about grammatical errors, syntactic errors, suggestions, and a rewritten version of the text.
         - `GrammarAnalysisResponse`: Combines the request and result, indexed by a unique identifier.
         - `GrammarResponse`: A variant type representing either a successful result (Ok) or an error (Err).

      - **Backend Functions:**
         - `analyze_grammar`: Accepts a text index and GrammarUserInput, returns a GrammarResponse.
         - `get_grammar_analysis`: Retrieves a specific grammar analysis based on index and user identifier.
         - `get_all_grammar_analysis_for_identity`: Fetches all grammar analyses for a specific user identity.
         - `delete_grammar_analysis`: Deletes a specific grammar analysis based on index and user identifier.

2. **CV Enhancer**
The CV Enhancer is designed to help users tailor their CVs to match a job description more effectively. Here’s how it functions:
   - **`User Input`**: Users provide a job description, job title, and their CV (or relevant sections) through the UI.
   - **`Analysis Request`**: After inputting the necessary information, the user initiates the CV enhancement process.
   - **`AI Processing`**: The backend service analyzes the CV in the context of the provided job description and job title. It identifies relevant
   - **`skills`**, rewrites work experience sections, and generates a professional summary that aligns with the job description.
   - **`Result Display`**: The results are returned to the frontend, highlighting key skills, providing rewritten work experience, and a professional summary. Users can download the enhanced CV or make further adjustments.

   ### Backend Definition for CV Analysis:
      - **Data Structures:**
         - `CVUserInput`: Contains the job title, job description, and CV text provided by the user.
         - `AnalysisResult`: Includes the extracted and highlighted skills, rewritten work experience, and a professional summary.
         - `CVAnalysisResponse`: Combines the request and result, indexed by a unique identifier.
         - `CVResponse`: A variant type representing either a successful result (Ok) or an error (Err).

      - **Backend Functions:**
         - `analyze_cv`: Accepts a text index and `CVUserInput`, returns a `CVResponse`.
         - `get_cv_analysis`: Retrieves a specific CV analysis based on index and user identifier.
         - `get_cv_aget_all_cv_analysis_for_identitynalysis`: Fetches all CV analyses for a specific user identity.
         - `delete_cv_analysis`: Deletes a specific CV analysis based on index and user identifier.

  ## Setting Up Your Environment

  To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

  - **Node.js** Install the latest node version from the official websit.
  - **IC SDK** [Install the latest IC SDK. Refer to this guide](https://internetcomputer.org/docs/current/developer-docs/getting-started/install/)
  - **Rust CDK** Rust programming language and Cargo as described in the [Rust installation instructions](https://doc.rust-lang.org/book/ch01-01-installation.html) for your operating system.
```bash
    curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
  ```
  - **Wasm** You have installed the wasm32-unknown-unknown target.
```bash 
    rustup target add wasm32-unknown-unknown
  ```
  - **Clone project** You can now clone the project from the base repo [Syntax](https://github.com/Tech-Shark/syntax.git)
  - **Deploy** You can deploy the project with 
```bash
    dfx start
    dfx deploy
    npm start
  ```

## User Authentication

User authentication is managed using the AuthClient from the @dfinity/auth-client library, which is a standard method for handling authentication on the Internet Computer. This ensures that user sessions are secure and that data access is properly restricted based on user identity.


## Error Handling

Errors in both grammar and CV analyses are managed through a structured Error type in the backend. The Error record contains a message field, providing details about the nature of the error, which helps in debugging and user feedback.


## Future Development Plans

1. Integration of additional AI models or services
2. Expansion of language support
3. Development of collaboration/multi-user features
4. Introduction of premium features or subscription-based services


## Conclusion

`Syntax` leverages AI to offer advanced grammar checking and CV enhancement functionalities. By integrating a robust Rust backend with a React.js frontend, `Syntax` provides users with an intuitive and effective tool for improving their written content and optimizing CVs for job applications. The use of ICP technology ensures scalability, security, and reliability, making `Syntax` a versatile tool for users looking to enhance their writing and job application materials.
