/* =========================================================
   ASCB CERTIFICATE OF ENROLLMENT SYSTEM
========================================================= */


/* =========================================================
   SUBJECT DATABASE — STRUCTURED PROGRAMS
   Sourced directly from each program's ASCB Revised
   Curriculum Prospectus. Grouped by Year > Trimester so the
   dropdown can show the subjects in official curriculum order.
========================================================= */

const structuredPrograms = {

    /* =====================================================
       BSIT — Effective SY 2022-2023, CMO No. 25 s.2015
    ===================================================== */
    BSIT: [
        {
            year: "1st Year", trimester: "1st Trimester",
            subjects: [
                { code: "CC 101", description: "Introduction to Computing with Keyboarding", units: 3 },
                { code: "CSS 1", description: "Install and Configure Computers/Set-up Computer Networks", units: 3 },
                { code: "GE 1", description: "Understanding the Self", units: 3 },
                { code: "GE 2", description: "Reading in Philippine History", units: 3 },
                { code: "GE 3", description: "The Contemporary World", units: 3 },
                { code: "PATH Fit 1", description: "Movement Competency Training", units: 2 }
            ]
        },
        {
            year: "1st Year", trimester: "2nd Trimester",
            subjects: [
                { code: "CC 102", description: "Computer Programming 1", units: 3 },
                { code: "GE 4", description: "Mathematics in the Modern World", units: 3 },
                { code: "GE 5", description: "Purposive Communication", units: 3 },
                { code: "CSS 2", description: "Set-up Computer Servers/Maintain Computer Systems and Networks", units: 3 },
                { code: "PATH Fit 2", description: "Exercise-based Fitness", units: 2 },
                { code: "NSTP 1", description: "Civic Welfare Training Service I", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "3rd Trimester",
            subjects: [
                { code: "CC 103", description: "Computer Programming 2", units: 3 },
                { code: "MS 101", description: "Discrete Mathematics", units: 3 },
                { code: "GE 6", description: "Art Appreciation", units: 3 },
                { code: "GE 7", description: "Science, Technology & Society", units: 3 },
                { code: "GE 8", description: "Ethics", units: 3 },
                { code: "PATH Fit 3", description: "Dance and Sports", units: 2 },
                { code: "NSTP 2", description: "Civic Welfare Training Service II", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "1st Trimester",
            subjects: [
                { code: "PF 101", description: "Object Oriented Programming", units: 3 },
                { code: "CC 104", description: "Data Structures & Algorithms", units: 3 },
                { code: "PT 101", description: "Platform Technologies", units: 3 },
                { code: "CC 105", description: "Information Management", units: 3 },
                { code: "GE 10", description: "Philippine Popular Culture", units: 3 },
                { code: "GE 9", description: "Gender and Society", units: 3 },
                { code: "PATH Fit 4", description: "Outdoor and Adventure Activities", units: 2 }
            ]
        },
        {
            year: "2nd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "IM 101", description: "Fundamentals of Database Systems", units: 3 },
                { code: "Net 101", description: "Networking 1", units: 3 },
                { code: "IPT 101", description: "Integrative Programming and Technologies", units: 3 },
                { code: "GE 11", description: "Living in an IT Era", units: 3 },
                { code: "GE 12", description: "Life & Works of Rizal", units: 3 },
                { code: "SAD", description: "System Analysis, Design and Development", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "IAS 101", description: "Information Assurance & Security", units: 3 },
                { code: "SIA 101", description: "System Integration and Architecture 1", units: 3 },
                { code: "HCI 101", description: "Introduction to Human Computer Interaction 1", units: 3 },
                { code: "MS 102", description: "Quantitative Methods (include Modelling & Simulation)", units: 3 },
                { code: "Stat 1", description: "Statistics", units: 3 },
                { code: "CC 106", description: "Application Development and Emerging Technologies", units: 3 },
                { code: "DM", description: "Data Mining", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "1st Trimester",
            subjects: [
                { code: "BD 101", description: "Business Intelligence", units: 3 },
                { code: "SP 101", description: "Social and Professional Issues", units: 3 },
                { code: "Net 102", description: "Networking 2", units: 3 },
                { code: "SA 101", description: "System Administration and Maintainance", units: 3 },
                { code: "Cap 101", description: "Capstone Project and Research 1", units: 3 },
                { code: "IT Elec 1", description: "Web Systems and Technologies", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "CAP 102", description: "Capstone Project and Research 2", units: 3 },
                { code: "IT Elec 2", description: "Integrative Programming and Technologies 2", units: 3 },
                { code: "IAS 102", description: "Information Assurance & Security 2", units: 3 },
                { code: "Acctg. 1", description: "Basic Accounting 1", units: 3 },
                { code: "IT Elec 3", description: "Human Computer Interaction 2", units: 3 },
                { code: "PDC", description: "Parallel and Distributed Computing", units: 3 },
                { code: "OS 101", description: "Operating Systems", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "PR 101", description: "Practicum (486 hrs.)", units: 3 },
                { code: "IT Elec 4", description: "System Integration and Architecture 2", units: 3 }
            ]
        }
    ],


    /* =====================================================
       BSIS — Effective SY 2022-2023, CMO No. 25 s.2015
    ===================================================== */
    BSIS: [
        {
            year: "1st Year", trimester: "1st Trimester",
            subjects: [
                { code: "CC 101", description: "Introduction to Computing with Keyboarding", units: 3 },
                { code: "CSS 1", description: "Install and Configure Computers/Set-up Computer Networks", units: 3 },
                { code: "GE 1", description: "Understanding the Self", units: 3 },
                { code: "GE 2", description: "Readings in Philippine History", units: 3 },
                { code: "GE 3", description: "The Contemporary World", units: 3 },
                { code: "PATH Fit 1", description: "Movement Competency Training", units: 2 }
            ]
        },
        {
            year: "1st Year", trimester: "2nd Trimester",
            subjects: [
                { code: "CC 102", description: "Computer Programming 1 (Fundamentals of Programming)", units: 3 },
                { code: "GE 4", description: "Mathematics in the Modern World", units: 3 },
                { code: "GE 5", description: "Purposive Communication", units: 3 },
                { code: "CSS 2", description: "Set-up Computer Servers/Maintain Computer Systems & Networks", units: 0 },
                { code: "PATH Fit 2", description: "Exercise-based Fitness", units: 2 },
                { code: "NSTP 1", description: "Civic Welfare Training Service I", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "3rd Trimester",
            subjects: [
                { code: "CC 103", description: "Computer Programming 2 (Intermediate Programming)", units: 3 },
                { code: "IS 101", description: "Fundamentals of Information Systems", units: 3 },
                { code: "GE 6", description: "Art Appreciation", units: 3 },
                { code: "GE 7", description: "Science, Technology & Society", units: 3 },
                { code: "GE 8", description: "Ethics", units: 3 },
                { code: "PATH Fit 3", description: "Dance and Sports", units: 2 },
                { code: "NSTP 2", description: "Civic Welfare Training Service II", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "1st Trimester",
            subjects: [
                { code: "PF 101", description: "Object Oriented Programming", units: 3 },
                { code: "CC 104", description: "Data Structures and Algorithms", units: 3 },
                { code: "IS 103", description: "IT Infrastructure and Network Technologies", units: 3 },
                { code: "IS 102", description: "Professional Issues in Information Systems", units: 3 },
                { code: "GE 9", description: "Gender and Society", units: 3 },
                { code: "GE 10", description: "Philippine Popular Culture", units: 3 },
                { code: "PATH Fit 4", description: "Outdoor and Adventure Activities", units: 2 }
            ]
        },
        {
            year: "2nd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "IM 101", description: "Fundamentals of Database Systems", units: 3 },
                { code: "CC 105", description: "Information Management", units: 3 },
                { code: "IS 104", description: "System Analysis, Design and Development", units: 3 },
                { code: "DM 101", description: "Organization and Management Concepts", units: 3 },
                { code: "IPT 101", description: "Integrative Programming & Technologies", units: 3 },
                { code: "GE 11", description: "Living in an IT Era", units: 3 },
                { code: "GE 12", description: "Life & Works of Rizal", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "IAS 101", description: "Information Assurance & Security", units: 3 },
                { code: "HCI 101", description: "Human Computer Interaction", units: 3 },
                { code: "QUAMET", description: "Quantitative Methods", units: 3 },
                { code: "Stat 1", description: "Statistics", units: 3 },
                { code: "IS 105", description: "Enterprise Architecture", units: 3 },
                { code: "IS Elec 1", description: "Data Mining", units: 3 },
                { code: "DM 102", description: "Financial Management", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "1st Trimester",
            subjects: [
                { code: "CAP 101", description: "Capstone Project 1", units: 3 },
                { code: "IS 106", description: "IS Project Management 1", units: 3 },
                { code: "ITAC", description: "IT Audit and Controls", units: 3 },
                { code: "BD 101", description: "Business Intelligence", units: 3 },
                { code: "IS 107", description: "IS Strategy, Management and Acquisition", units: 3 },
                { code: "DM 103", description: "Business Process Design & Management", units: 3 },
                { code: "Research", description: "Methods of Research in Computing", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "CAP 102", description: "Capstone Project 2", units: 3 },
                { code: "CC 106", description: "Applications Devt. & Emerging Technologies", units: 3 },
                { code: "ISI", description: "IS Innovation and New Technologies", units: 3 },
                { code: "Acctg. 1", description: "Basic Accounting 1", units: 3 },
                { code: "IS Elec 2", description: "Enterprise Resource Planning", units: 3 },
                { code: "IS Elec 3", description: "IS Project Management 2", units: 3 },
                { code: "Techno", description: "Technopreneurship", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "DM 104", description: "Evaluation of Business Performance", units: 3 },
                { code: "IS Elec 4", description: "Customer Relationship Management", units: 3 },
                { code: "Prac 101", description: "Practicum for Information System (486 hours)", units: 6 }
            ]
        }
    ],


    /* =====================================================
       BSCS — Effective SY 2022-2023, CMO No. 25 s.2015
    ===================================================== */
    BSCS: [
        {
            year: "1st Year", trimester: "1st Trimester",
            subjects: [
                { code: "CC 101", description: "Introduction to Computing with Keyboarding", units: 3 },
                { code: "CSS 1", description: "Install and Configure Computers/Set-up Computer Networks", units: 3 },
                { code: "GE 1", description: "Understanding Self", units: 3 },
                { code: "GE 2", description: "Reading in Philippine History", units: 3 },
                { code: "GE 3", description: "The Contemporary World", units: 3 },
                { code: "PATH Fit 1", description: "Movement Competency Training", units: 2 }
            ]
        },
        {
            year: "1st Year", trimester: "2nd Trimester",
            subjects: [
                { code: "CC 102", description: "Fundamentals of Programming", units: 3 },
                { code: "GE 4", description: "Mathematics in Modern World", units: 3 },
                { code: "GE 5", description: "Purposive Communication", units: 3 },
                { code: "NSTP 1", description: "Civic Welfare Training Service", units: 3 },
                { code: "CSS 2", description: "Set-up Computer Servers/Maintain Computer Systems and Networks", units: 3 },
                { code: "PATH Fit 2", description: "Exercise-based Fitness", units: 2 }
            ]
        },
        {
            year: "1st Year", trimester: "3rd Trimester",
            subjects: [
                { code: "CC 103", description: "Intermediate Programming", units: 3 },
                { code: "DS 101", description: "Discrete Structure 1", units: 3 },
                { code: "GE 6", description: "Art Appreciation", units: 3 },
                { code: "GE 7", description: "Science, Technology & Society", units: 3 },
                { code: "GE 8", description: "Ethics", units: 3 },
                { code: "PATH Fit 3", description: "Dance and Sports", units: 2 },
                { code: "NSTP 2", description: "Civic Welfare Training Service II", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "1st Trimester",
            subjects: [
                { code: "SDF 104", description: "Object Oriented Programming", units: 3 },
                { code: "CC 104", description: "Data Structures & Algorithms", units: 3 },
                { code: "CC 105", description: "Information Management", units: 3 },
                { code: "GE 9", description: "Gender and Society", units: 3 },
                { code: "GE 10", description: "Philippine Popular Culture", units: 3 },
                { code: "PATH Fit 4", description: "Outdoor and Adventure Activities", units: 2 },
                { code: "PT 101", description: "Platform Technologies", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "AL 101", description: "Algorithms & Complexity", units: 3 },
                { code: "Math 2A", description: "Math Elective (Differential Calculus)", units: 3 },
                { code: "AR 101", description: "Architecture & Organization", units: 3 },
                { code: "SAD 101", description: "System Analysis, Design and Development", units: 3 },
                { code: "GE 11", description: "Living in an IT Era", units: 3 },
                { code: "SE 101", description: "Software Engineering 1", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "AL 102", description: "Automata Theory & Formal Languages", units: 3 },
                { code: "CC 106", description: "Application Development and Emerging Technologies", units: 3 },
                { code: "IAS 101", description: "Information Assurance & Security", units: 3 },
                { code: "HCI", description: "Human Computer Interaction", units: 3 },
                { code: "Stat 1", description: "Statistics", units: 3 },
                { code: "SE 102", description: "Software Engineering 2", units: 3 },
                { code: "DS 102", description: "Discrete Structure 2", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "1st Trimester",
            subjects: [
                { code: "THS 101", description: "CS Thesis Writing 1", units: 3 },
                { code: "BD 101", description: "Business Intelligence", units: 3 },
                { code: "DM", description: "Data Mining", units: 3 },
                { code: "SP 101", description: "Social Issues & Professional Practice", units: 3 },
                { code: "NC 101", description: "Networks and Communication", units: 3 },
                { code: "CS Elec 1", description: "System Fundamentals", units: 3 },
                { code: "CS Elec 2", description: "Graphics and Visual Computing", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "THS 102", description: "CS Thesis Writing 2", units: 3 },
                { code: "CS Elec 3", description: "Computational Science", units: 3 },
                { code: "PDC 101", description: "Parallel and Distributed Computing", units: 3 },
                { code: "IS 101", description: "Intelligent System", units: 3 },
                { code: "OS 101", description: "Operating Systems", units: 3 },
                { code: "Acctg 101", description: "Basic Accounting", units: 3 },
                { code: "PL 101", description: "Programming Languages", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "PRC", description: "Practicum (486 hrs.)", units: 6 },
                { code: "G12", description: "Life & Works of Rizal", units: 3 }
            ]
        }
    ],


    /* =====================================================
       BSCRIM — Effective SY 2022-2023, CMO No. 5 s.2018
    ===================================================== */
    BSCRIM: [
        {
            year: "1st Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 1", description: "Understanding the Self", units: 3 },
                { code: "GE 2", description: "Readings in Philippine History", units: 3 },
                { code: "GE 3", description: "The Contemporary World", units: 3 },
                { code: "GE 4", description: "Mathematics in Modern World", units: 3 },
                { code: "Crim 1", description: "Introduction to Criminology", units: 3 },
                { code: "EC 1", description: "Reading Comprehension", units: 3 },
                { code: "DEFTAC 1", description: "Fundamentals of Martial Arts", units: 2 },
                { code: "NSTP 1", description: "ROTC 1", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "2nd Trimester",
            subjects: [
                { code: "GE 5", description: "Purposive Communication", units: 3 },
                { code: "GE 6", description: "Art Appreciation", units: 3 },
                { code: "GE 7", description: "Science, Technology and Society", units: 3 },
                { code: "LEA 1", description: "Law Enforcement Organization and Administration", units: 4 },
                { code: "CLJ 1", description: "Introduction to Philippine Criminal Justice System", units: 3 },
                { code: "DEFTAC 2", description: "Arnis and Disarming Technique", units: 2 },
                { code: "NSTP 2", description: "ROTC 2", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 8", description: "Ethics", units: 3 },
                { code: "EC 2", description: "Basic Computer Software", units: 3 },
                { code: "CLJ 2", description: "Human Rights Education", units: 3 },
                { code: "Crim 2", description: "Theories of Crime Causation", units: 3 },
                { code: "CDI 1", description: "Fundamentals of Investigation and Intelligence", units: 4 },
                { code: "LEA 2", description: "Comparative Models in Policing", units: 3 },
                { code: "DEFTAC 3", description: "First Aid and Water Safety", units: 2 }
            ]
        },
        {
            year: "2nd Year", trimester: "1st Trimester",
            subjects: [
                { code: "PC 1", description: "Life and Works of Rizal", units: 3 },
                { code: "CDI 2", description: "Specialized Crime Investigation 1 w/ Legal Medicine", units: 3 },
                { code: "CLJ 3", description: "Criminal Law (Book 1)", units: 3 },
                { code: "Chem 1", description: "General Chemistry (Organic)", units: 3 },
                { code: "Forensic 1", description: "Forensic Photography", units: 3 },
                { code: "LEA 3", description: "Introduction to Industrial Security Concepts", units: 3 },
                { code: "DEFTAC 4", description: "Marksmanship and Combat Shooting", units: 2 }
            ]
        },
        {
            year: "2nd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "EC 3", description: "Politics & Governance with Philippine Constitution", units: 3 },
                { code: "Crim 3", description: "Human Behavior and Victimology", units: 3 },
                { code: "Crim 4", description: "Professional Conduct and Ethical Standards", units: 3 },
                { code: "CLJ 4", description: "Criminal Law (Book 2)", units: 4 },
                { code: "Forensic 2", description: "Personal Identification Techniques", units: 3 },
                { code: "CDI 3", description: "Specialized Crime Investigation 2 w/ Simulation on Interrogation and Interview", units: 3 },
                { code: "CA 1", description: "Institutional Corrections", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "Forensic 3", description: "Forensic Chemistry and Toxicology", units: 5 },
                { code: "CDI 4", description: "Traffic Management and Accident Investigation w/ Driving", units: 3 },
                { code: "CA 2", description: "Non-Institutional Corrections", units: 3 },
                { code: "Crim 5", description: "Juvenile Delinquency and Juvenile Justice System", units: 3 },
                { code: "Crim 6", description: "Dispute Resolution and Crises/Incidents Management", units: 3 },
                { code: "CFLM 1", description: "Character Formation, Nationalism and Patriotism", units: 3 },
                { code: "LEA 4", description: "Law Enforcement Operation and Planning w/ Crime Mapping", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "1st Trimester",
            subjects: [
                { code: "CLJ 5", description: "Evidence", units: 3 },
                { code: "CFLM 2", description: "Character Formation w/ Leadership, Decision Making, Management and Administration", units: 3 },
                { code: "CDI 5", description: "Technical English 1 (Technical Report Writing & Presentation)", units: 3 },
                { code: "CDI 6", description: "Fire Protection & Arson Investigation", units: 3 },
                { code: "CA 3", description: "Therapeutic Modalities", units: 2 },
                { code: "Forensic 4", description: "Questioned Documents Examination", units: 3 },
                { code: "Crim 7", description: "Criminological Research 1 (Research Methods with Applied Statistics)", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "Forensic 5", description: "Lie Detection Techniques", units: 3 },
                { code: "Crim 8", description: "Criminological Research 2 (Thesis Writing and Presentation)", units: 3 },
                { code: "CDI 7", description: "Vice and Drug Education and Control", units: 3 },
                { code: "CLJ 6", description: "Criminal Procedure & Court Testimony", units: 3 },
                { code: "Forensic 6", description: "Forensic Ballistics", units: 3 },
                { code: "CDI 8", description: "Technical English 2 (Legal Forms)", units: 3 },
                { code: "CDI 9", description: "Introduction to Cybercrime and Environmental Laws and Protection", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "Criminology Practicum 1", description: "Internship (On-the Job Training 1)", units: 3 },
                { code: "Sem 1", description: "Seminar 1", units: 3 }
            ]
        },
        {
            year: "4th Year", trimester: "1st Trimester",
            subjects: [
                { code: "Criminology Practicum 2", description: "Internship (On-the Job Training 2)", units: 3 },
                { code: "Sem 2", description: "Seminar 2", units: 3 }
            ]
        }
    ],


    /* =====================================================
       BSA — Effective SY 2024-2025, CMO No. 27 s.2017
    ===================================================== */
    BSA: [
        {
            year: "1st Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 1", description: "Understanding Self", units: 3 },
                { code: "GE 2", description: "Readings in Philippine History", units: 3 },
                { code: "GE 3", description: "The Contemporary World", units: 3 },
                { code: "GE 4", description: "Mathematics in the Modern World", units: 3 },
                { code: "A1", description: "Conceptual Framework and Accounting Standards", units: 3 },
                { code: "A1a", description: "Fundamentals of Accounting", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "2nd Trimester",
            subjects: [
                { code: "GE 5", description: "Purposive Communication", units: 3 },
                { code: "GE 6", description: "Art Appreciation", units: 3 },
                { code: "BA 1", description: "Managerial Economics", units: 3 },
                { code: "A2", description: "Fundamentals of Partnership & Corporation Accounting", units: 3 },
                { code: "NSTP 1", description: "National Service Training Program", units: 3 },
                { code: "PATH Fit 1", description: "Movement Competency Training", units: 2 },
                { code: "BAb", description: "Principles of Management (Non-ABM & GAS graduates)", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 7", description: "Science, Technology, and Society", units: 3 },
                { code: "A3", description: "Cost of Accounting and Control", units: 3 },
                { code: "A4", description: "Financial Accounting and Reporting", units: 3 },
                { code: "BA 2", description: "Law on Obligations and Contracts", units: 3 },
                { code: "BA 3", description: "Management Science", units: 3 },
                { code: "PATH Fit 2", description: "Exercise-based Fitness Activity", units: 2 },
                { code: "NSTP 2", description: "National Service Training Program", units: 3 },
                { code: "BAa", description: "Principles of Marketing (Non-ABM graduates)", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 8", description: "Ethics", units: 3 },
                { code: "GE 9", description: "Business Logic", units: 3 },
                { code: "BA 4", description: "Economic Development", units: 3 },
                { code: "BA 5", description: "Business Laws and Regulations", units: 3 },
                { code: "A5", description: "Intermediate Accounting 1", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "GE 10", description: "Philippine Popular Culture", units: 3 },
                { code: "GE 11", description: "Living In An IT Era", units: 3 },
                { code: "BA 6", description: "Income Taxation", units: 3 },
                { code: "A6", description: "Intermediate Accounting 2", units: 3 },
                { code: "A7", description: "Strategic Cost Management", units: 3 },
                { code: "PATH Fit 3", description: "Dance and Sports", units: 2 }
            ]
        },
        {
            year: "2nd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 12", description: "Life and Works of Rizal", units: 3 },
                { code: "BA 7", description: "Business Taxation", units: 3 },
                { code: "A8", description: "Regulatory Framework and Legal Issues in Business", units: 3 },
                { code: "A9", description: "Intermediate Accounting 3", units: 3 },
                { code: "BA 8", description: "Financial Management", units: 3 },
                { code: "PATH Fit 4", description: "Outdoor and Adventure Activities", units: 2 }
            ]
        },
        {
            year: "3rd Year", trimester: "1st Trimester",
            subjects: [
                { code: "A&B1", description: "Operational Management and TQM with field trip", units: 3 },
                { code: "A10", description: "Governance, Business Ethics, Risk Management, and Internal Control", units: 3 },
                { code: "BA 9", description: "IT Application Tools in Business", units: 3 },
                { code: "BA 10", description: "Financial Markets", units: 3 },
                { code: "PA 1", description: "Auditing and Assurance Principles", units: 3 },
                { code: "BA 11", description: "Statistical Analysis with Software Application", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "A&B2", description: "Strategic Management", units: 3 },
                { code: "A11", description: "Accounting Information System", units: 3 },
                { code: "BA 12", description: "International Business and Trade", units: 3 },
                { code: "PA 2", description: "Auditing and Assurance: Concepts and Applications 1", units: 3 },
                { code: "PA 3", description: "Auditing and Assurance: Specialized Industries", units: 3 },
                { code: "PA 4", description: "Accounting for Business Combinations", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "A12*", description: "Accounting Research Methods", units: 3 },
                { code: "PA 5", description: "Auditing in CIS Environment", units: 3 },
                { code: "PA 6", description: "Accounting for Special Transactions", units: 3 },
                { code: "PA 7", description: "Auditing and Assurance: Concepts and Applications 2", units: 3 },
                { code: "PA 8", description: "Accounting for Government and Non-Profit Organizations", units: 3 }
            ]
        },
        {
            year: "4th Year", trimester: "1st Trimester",
            subjects: [
                { code: "A13", description: "Accountancy Research", units: 3 },
                { code: "A14", description: "Accounting Internship", units: 6 },
                { code: "PA Elec1", description: "Valuation Concepts & Methods", units: 3 }
            ]
        },
        {
            year: "4th Year", trimester: "2nd Trimester",
            subjects: [
                { code: "PA Elec2", description: "Updates in Financial Reporting", units: 3 },
                { code: "PA Elec3", description: "Operations Auditing", units: 3 },
                { code: "BA 13", description: "Strategic Business Analysis", units: 3 },
                { code: "Review 1", description: "Review on Management Services", units: 3 },
                { code: "Review 2", description: "Review on Financial Accounting & Reporting", units: 3 }
            ]
        },
        {
            year: "4th Year", trimester: "3rd Trimester",
            subjects: [
                { code: "PA Elec4", description: "Human Behavior in an Organization", units: 3 },
                { code: "Review 3", description: "Review on Auditing", units: 3 },
                { code: "Review 4", description: "Review on Advance Financial Accounting and Reporting", units: 3 },
                { code: "Review 5", description: "Review on Taxation", units: 3 },
                { code: "Review 6", description: "Review on Business Law", units: 3 }
            ]
        }
    ],


    /* =====================================================
       BSBA-FM — Effective SY 2024-2025, CMO No. 17 s.2017
    ===================================================== */
    "BSBA-FM": [
        {
            year: "1st Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 1", description: "Understanding Self", units: 3 },
                { code: "GE 2", description: "Readings in Philippine History", units: 3 },
                { code: "GE 3", description: "The Contemporary World", units: 3 },
                { code: "GE 4", description: "Mathematics in the Modern World", units: 3 },
                { code: "GE 5", description: "Purposive Communication", units: 3 },
                { code: "A1a", description: "Fundamentals of Accounting", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "2nd Trimester",
            subjects: [
                { code: "GE 6", description: "Art Appreciation", units: 3 },
                { code: "GE 7", description: "Science, Technology & Society", units: 3 },
                { code: "GE 8", description: "Ethics", units: 3 },
                { code: "A1*", description: "Fundamentals of Partnership & Corporation Accounting", units: 3 },
                { code: "NSTP 1", description: "National Service Training Program", units: 3 },
                { code: "PATH Fit 1", description: "Movement Competency Training", units: 2 },
                { code: "BAa", description: "Principles of Management (Non-ABM & GAS graduates)", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 9", description: "Gender and Society", units: 3 },
                { code: "GE 10", description: "Philippine Popular Culture", units: 3 },
                { code: "GE 11", description: "Living in an IT Era", units: 3 },
                { code: "BA 1", description: "Basic Microeconomics", units: 3 },
                { code: "FM 101", description: "Financial Management", units: 3 },
                { code: "PATH Fit 2", description: "Exercise-based Fitness Activity", units: 2 },
                { code: "NSTP 2", description: "National Service Training Program", units: 3 },
                { code: "BAb", description: "Principles of Marketing (Non-ABM & GAS graduates)", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 12", description: "Life and Works of Rizal", units: 3 },
                { code: "GE Elec1", description: "Mathematics, Science & Technology", units: 3 },
                { code: "GE Elec2", description: "Social Science and Philosophy", units: 3 },
                { code: "BA 2", description: "Obligations and Contract", units: 3 },
                { code: "FM 102", description: "Financial Analysis & Reporting", units: 3 },
                { code: "FM 103", description: "Banking & Financial Institution", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "GE Elec3", description: "Arts and Humanities", units: 3 },
                { code: "BA 3", description: "Human Behavior in an Organization with Case Analysis", units: 3 },
                { code: "BA 4", description: "Income Taxation", units: 3 },
                { code: "FM 104", description: "Monetary Policy & Central Banking", units: 3 },
                { code: "FM 105", description: "Investment & Portfolio Management", units: 3 },
                { code: "PATH Fit 3", description: "Dance & Sports", units: 2 }
            ]
        },
        {
            year: "2nd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "BA 5", description: "Good Governance and Social Responsibility", units: 3 },
                { code: "BA 6", description: "Human Resource Management", units: 3 },
                { code: "BA 7", description: "International Trade and Agreement", units: 3 },
                { code: "FM 106", description: "Credit & Collection", units: 3 },
                { code: "FM 107", description: "Capital Market", units: 3 },
                { code: "PATH Fit 4", description: "Outdoor and Adventure Activities", units: 2 }
            ]
        },
        {
            year: "3rd Year", trimester: "1st Trimester",
            subjects: [
                { code: "BA 8", description: "Business Research", units: 3 },
                { code: "A&B 1", description: "Strategic Management", units: 3 },
                { code: "FM 108", description: "Strategic Financial Management", units: 3 },
                { code: "Elec 2", description: "Cooperative Management", units: 3 },
                { code: "Elec. 1", description: "Entrepreneurial Management", units: 3 },
                { code: "BA 10", description: "Graphic Design in Business", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "A&B 2", description: "Operations Management (TQM)", units: 3 },
                { code: "BA 9", description: "Thesis or Feasibility", units: 3 },
                { code: "FM 109", description: "Special Topics in Financial Management", units: 3 },
                { code: "Elec 4", description: "E-commerce and Internet Marketing", units: 3 },
                { code: "Elec 3", description: "Franchising", units: 3 },
                { code: "BA 11", description: "IT Application Tools in Business", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "Practicum", description: "Work Integrated Learning", units: 6 }
            ]
        }
    ],


    /* =====================================================
       BSBA-HRDM — Effective SY 2024-2025, CMO No. 17 s.2017
    ===================================================== */
    "BSBA-HRDM": [
        {
            year: "1st Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 1", description: "Understanding Self", units: 3 },
                { code: "GE 2", description: "Readings in Philippine History", units: 3 },
                { code: "GE 3", description: "The Contemporary World", units: 3 },
                { code: "GE 4", description: "Mathematics in the Modern World", units: 3 },
                { code: "GE 5", description: "Purposive Communication", units: 3 },
                { code: "A1a", description: "Fundamentals of Accounting", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "2nd Trimester",
            subjects: [
                { code: "GE 6", description: "Art Appreciation", units: 3 },
                { code: "GE 7", description: "Science, Technology & Society", units: 3 },
                { code: "GE 8", description: "Ethics", units: 3 },
                { code: "A1*", description: "Fundamentals of Partnership & Corporation Accounting", units: 3 },
                { code: "NSTP 1", description: "National Service Training Program", units: 3 },
                { code: "PATH Fit 1", description: "Movement Competency Training", units: 2 },
                { code: "BAa", description: "Principles of Management (Non-ABM & GAS graduates)", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 9", description: "Gender and Society", units: 3 },
                { code: "GE 10", description: "Philippine Popular Culture", units: 3 },
                { code: "GE 11", description: "Living in an IT Era", units: 3 },
                { code: "BA 1", description: "Basic Microeconomics", units: 3 },
                { code: "HRDM 101", description: "Administrative and Office Management", units: 3 },
                { code: "PATH Fit 2", description: "Exercise-based Fitness Activity", units: 2 },
                { code: "NSTP 2", description: "National Service Training Program", units: 3 },
                { code: "BAb", description: "Principles of Marketing (Non-ABM & GAS graduates)", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 12", description: "Life & Works of Rizal", units: 3 },
                { code: "GE Elec1", description: "Mathematics, Science & Technology", units: 3 },
                { code: "GE Elec2", description: "Social Science and Philosophy", units: 3 },
                { code: "BA 2", description: "Obligations and Contract", units: 3 },
                { code: "HRDM 102", description: "Labor Law & Legislation", units: 3 },
                { code: "HRDM 103", description: "Recruitment & Selection", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "GE Elec3", description: "Arts and Humanities", units: 3 },
                { code: "BA 3", description: "Human Behavior in an Organization with Case Analysis", units: 3 },
                { code: "BA 4", description: "Income Taxation", units: 3 },
                { code: "HRDM 104", description: "Training & Development", units: 3 },
                { code: "HRDM 105", description: "Compensation Administration", units: 3 },
                { code: "PATH Fit 3", description: "Dance & Sports", units: 2 }
           
