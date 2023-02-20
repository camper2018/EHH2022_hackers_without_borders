# The Project was created as a team work during European Health Care Hackathon.
It serves as a platform for sharing medical information between doctors and patients. It keeps the records of patient's informed consents about the treatments proposed by their doctors. It is a full-stack app built using React JS frontend and MySQL + NodeJS backend.The backend was connected via FHIR to the central registry of patients data where it could fetch patients’ records and store their informed consents.

The Problem Statement: According to the law, medical care providers are obliged to make sure that the patient is sufficiently informed in an intelligible manner about his or her state of health and the proposed individual treatment and all its changes. To provide all of the comprehensive information in detail takes a lot of time. Due to the time constraints medical providers usually provide limited amounts or no information at all.
Proposed Solution: Doctor's shield app provides patients with comprehensive information about his medical conditions and the proposed treatments to be able to make informed decisions about the proposed treatment. Patients can also accept or reject the proposed treatments which will be stored, together with all of his medical records, in the RHIF database and can be used as a proof of patients consent with the treatment and therefore protecting the medical practitioner for any future litigation.

## How to run the project

1. Navigate to the project's root directory and in the terminal run :
   npm install
2. Navigate to /client directory and run
   npm install
3. Go back to root directory and run:
   npm run dev
   It will start your project in the browser.
