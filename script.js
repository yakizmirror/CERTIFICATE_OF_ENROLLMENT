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
            ]
        },
        {
            year: "2nd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "BA 5", description: "Good Governance and Social Responsibility", units: 3 },
                { code: "BA 6", description: "Human Resource Management", units: 3 },
                { code: "BA 7", description: "International Trade and Agreement", units: 3 },
                { code: "HRDM 106", description: "Labor Relations & Negotiations", units: 3 },
                { code: "HRDM 107", description: "Organizational Development", units: 3 },
                { code: "PATH Fit 4", description: "Outdoor and Adventure Activities", units: 2 }
            ]
        },
        {
            year: "3rd Year", trimester: "1st Trimester",
            subjects: [
                { code: "BA 8", description: "Business Research", units: 3 },
                { code: "A&B 1", description: "Strategic Management", units: 3 },
                { code: "HRDM 108", description: "Strategic Human Resource Management", units: 3 },
                { code: "Elec 2", description: "Personal Finance", units: 3 },
                { code: "Elec. 1", description: "Entrepreneurial Management", units: 3 },
                { code: "BA 10", description: "Graphic Designs in Business", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "A&B 2", description: "Operations Management (TQM) with fieldtrip", units: 3 },
                { code: "BA 9", description: "Thesis or Feasibility", units: 3 },
                { code: "HRDM 109", description: "Special Topics in Human Resource Management", units: 3 },
                { code: "Elec 4", description: "Project Management", units: 3 },
                { code: "Elec 3", description: "Global / International Trade", units: 3 },
                { code: "BA 11", description: "IT Tools in Business", units: 3 }
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
       BSBA-MM — Effective SY 2024-2025, CMO No. 17 s.2017
    ===================================================== */
    "BSBA-MM": [
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
                { code: "MM 101", description: "Professional Salesmanship", units: 3 },
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
                { code: "MM 102", description: "Marketing Research", units: 3 },
                { code: "MM 103", description: "Marketing Management", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "GE Elec3", description: "Arts and Humanities", units: 3 },
                { code: "BA 3", description: "Human Behavior in an Organization with Case Analysis", units: 3 },
                { code: "BA 4", description: "Income Taxation", units: 3 },
                { code: "MM 104", description: "Distribution Management", units: 3 },
                { code: "MM 105", description: "Advertisement", units: 3 },
                { code: "PATH Fit 3", description: "Dance & Sports", units: 2 }
            ]
        },
        {
            year: "2nd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "BA 5", description: "Good Governance and Social Responsibility", units: 3 },
                { code: "BA 6", description: "Human Resource Management", units: 3 },
                { code: "BA 7", description: "International Trade and Agreement", units: 3 },
                { code: "MM 106", description: "Product Management", units: 3 },
                { code: "MM 107", description: "Retail Management", units: 3 },
                { code: "PATH Fit 4", description: "Outdoor and Adventure Activities", units: 2 }
            ]
        },
        {
            year: "3rd Year", trimester: "1st Trimester",
            subjects: [
                { code: "BA 8", description: "Business Research", units: 3 },
                { code: "A&B 1", description: "Strategic Management", units: 3 },
                { code: "MM 108", description: "Pricing Strategy", units: 3 },
                { code: "Elec 2", description: "Cooperative Management", units: 3 },
                { code: "Elec. 1", description: "Entrepreneurial Management", units: 3 },
                { code: "BA 10", description: "Graphic Design in Business", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "A&B 2", description: "Operations Management (TQM) with fieldtrip", units: 3 },
                { code: "BA 9", description: "Thesis or Feasibility Study", units: 3 },
                { code: "MM 109", description: "Special Topics in Marketing Management", units: 3 },
                { code: "Elec 4", description: "E-Commerce and Internet Marketing", units: 3 },
                { code: "Elec 3", description: "Franchising", units: 3 },
                { code: "BA 11", description: "Application Tools in Business", units: 3 }
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
       BEED — Effective SY 2024-2025, CMO 74 s.2017
    ===================================================== */
    BEED: [
        {
            year: "1st Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 1", description: "Understanding the Self", units: 3 },
                { code: "GE 2", description: "Readings in Philippine History", units: 3 },
                { code: "GE 3", description: "The Contemporary World", units: 3 },
                { code: "NSTP 1", description: "Civic Welfare Training Service 1", units: 3 },
                { code: "CoEd 100", description: "The Child and Adolescent Learners and Learning Principles", units: 3 },
                { code: "CoEd 101", description: "Building and Enhancing New Literacies Across the Curriculum", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "2nd Trimester",
            subjects: [
                { code: "GE 4", description: "Mathematics in the Modern World", units: 3 },
                { code: "GE 5", description: "Purposive Communication", units: 3 },
                { code: "GE 6", description: "Art Appreciation", units: 3 },
                { code: "PATH Fit 1", description: "Movement Competency Training", units: 2 },
                { code: "NSTP 2", description: "Civic Welfare Training Service 2", units: 3 },
                { code: "CoEd 102", description: "Teaching Math in the Primary Grades", units: 3 },
                { code: "CoEd 103", description: "Facilitating Learner-Centered Teaching", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 7", description: "Science, Technology and Society", units: 3 },
                { code: "GE 8", description: "Ethics", units: 3 },
                { code: "PATH Fit 2", description: "Exercise-based Fitness Activity", units: 2 },
                { code: "CoEd 104", description: "The Teaching Profession", units: 3 },
                { code: "CoEd 105", description: "Good Manners and Right Conduct (Edukasyon sa Pagpapakatao)", units: 3 },
                { code: "CoEd 106", description: "Teaching Social Studies in Elementary Grades (Culture and Geography)", units: 3 },
                { code: "CoEd 107", description: "Teaching Social Studies in Elementary Grades (Philippine History and Government)", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 9", description: "Gender and Society", units: 3 },
                { code: "GE 10", description: "Philippine Popular Culture", units: 3 },
                { code: "GE 11", description: "Living in an IT Era", units: 3 },
                { code: "PATH Fit 3", description: "Dance and Sports", units: 2 },
                { code: "CoEd 200", description: "Content and Pedagogy for the Mother-Tongue", units: 3 },
                { code: "CoEd 201", description: "Foundations of Special and Inclusive Education", units: 3 },
                { code: "CoEd 202", description: "The Teacher and the School Curriculum", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "PATH Fit 4", description: "Outdoor and Adventure Activities", units: 2 },
                { code: "TTL 1", description: "Technology for Teaching & Learning 1", units: 3 },
                { code: "CoEd 203", description: "Teaching Science in Elementary Grades (Biology and Chemistry)", units: 3 },
                { code: "CoEd 204", description: "Pagtuturo ng Filipino sa Elementarya (I) Estruktura at Gamit ng Wikang Filipino", units: 3 },
                { code: "CoEd 205", description: "Teaching English in the Elementary Grades (Language Arts)", units: 3 },
                { code: "CoEd 206", description: "Teaching English in Elementary Grades Through Literature", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 12", description: "The Life and Works of Rizal", units: 3 },
                { code: "TTL 2", description: "Technology for Teaching and Learning in the Elementary Grades", units: 3 },
                { code: "CAL 1", description: "Assessment in Learning 1 (BEED)", units: 3 },
                { code: "CoEd 207", description: "Teaching Science in Elementary Grades (Physics, Earth and Space Science)", units: 3 },
                { code: "CoEd 208", description: "Pagtuturo ng Filipino sa Elementarya (II) Panitikan ng Pilipinas", units: 3 },
                { code: "CoEd 209", description: "Teaching Math in the Intermediate Grades", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "1st Trimester",
            subjects: [
                { code: "CAL 2", description: "Assessment in Learning 2 (BEED)", units: 3 },
                { code: "SEM 1", description: "Seminar in Teaching MEFSS 1", units: 3 },
                { code: "CoEd 300", description: "Teaching PE and Health in the Elementary Grades", units: 3 },
                { code: "CoEd 301", description: "Edukasyong Pantahanan at Pangkabuhayan", units: 3 },
                { code: "CoEd 302", description: "Teaching Arts in the Elementary Grades", units: 3 },
                { code: "CoEd 303", description: "Teaching Music in the Elementary Grades", units: 3 },
                { code: "CoEd 304", description: "Research in Education", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "Elective 1", description: "Teaching Multi-Grade Classes", units: 3 },
                { code: "Elective 2", description: "English for Specific Purposes", units: 3 },
                { code: "Research 1", description: "Introduction to Thesis Writing", units: 3 },
                { code: "SEM 2", description: "Seminar in Teaching MEFSS 2", units: 3 },
                { code: "CoEd 305", description: "The Teacher and the Community, School Culture and Organizational Leadership", units: 3 },
                { code: "CoEd 306", description: "Edukasyong Pantahanan at Pangkabuhayan with Entrepreneurship", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "Research 2", description: "Thesis Writing", units: 3 },
                { code: "FS 1", description: "Observation of Teaching-Learning in Actual School Environment", units: 3 },
                { code: "FS 2", description: "Participation and Teaching Assistantship", units: 3 }
            ]
        },
        {
            year: "4th Year", trimester: "1st Trimester",
            subjects: [
                { code: "PRACTICUM", description: "Teaching Internship", units: 6 }
            ]
        }
    ],


    /* =====================================================
       BSED-ENGLISH — Effective SY 2024-2025, CMO 75 s.2017
    ===================================================== */
    "BSED-ENGLISH": [
        {
            year: "1st Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 1", description: "Understanding the Self", units: 3 },
                { code: "GE 2", description: "Readings in Philippine History", units: 3 },
                { code: "GE 3", description: "The Contemporary World", units: 3 },
                { code: "GE 4", description: "Mathematics in the Modern World", units: 3 },
                { code: "NSTP 1", description: "Civic Welfare Training Service 1", units: 3 },
                { code: "CoEd 100", description: "The Child and Adolescent Learners and Learning Principles", units: 3 },
                { code: "CSEE 101", description: "Introduction to Linguistics", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "2nd Trimester",
            subjects: [
                { code: "GE 5", description: "Purposive Communication (with speech lab)", units: 3 },
                { code: "GE 6", description: "Art Appreciation", units: 3 },
                { code: "GE 7", description: "Science, Technology and Society", units: 3 },
                { code: "PATH Fit 1", description: "Movement Competency Training", units: 2 },
                { code: "NSTP 2", description: "Civic Welfare Training Service 2", units: 3 },
                { code: "CSEE 102", description: "Language Culture & Society", units: 3 },
                { code: "CSEE 103", description: "Structure of English", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 8", description: "Ethics", units: 3 },
                { code: "GE 9", description: "Gender and Society", units: 3 },
                { code: "GE 10", description: "Philippine Popular Culture", units: 3 },
                { code: "PATH Fit 2", description: "Exercise-based Fitness Activity", units: 2 },
                { code: "CoEd 103", description: "Facilitating Learner-Centered Teaching", units: 3 },
                { code: "CoEd 104", description: "The Teaching Profession", units: 3 },
                { code: "CSEE 104", description: "Principles and Theories of Language Acquisition and Learning", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 11", description: "Living in an IT Era", units: 3 },
                { code: "PATH Fit 3", description: "Dance and Sports", units: 2 },
                { code: "Elective 1E", description: "Stylistics & Discourse Analysis", units: 3 },
                { code: "CoEd 202", description: "The Teacher and the School Curriculum", units: 3 },
                { code: "CSEE 201", description: "Teaching and Assessment of the Macro Skills", units: 3 },
                { code: "CSEE 202", description: "Speech and Theater Arts (with Speech Lab)", units: 3 },
                { code: "CSEE 203", description: "Children and Adolescent Literature", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "PATH Fit 4", description: "Outdoor and Adventure Activities", units: 2 },
                { code: "Elective 2E", description: "Creative Writing", units: 3 },
                { code: "TTL 1", description: "Technology for Teaching and Learning 1", units: 3 },
                { code: "CoEd 201", description: "Foundation of Special and Inclusive Education", units: 3 },
                { code: "CSEE 204", description: "Contemporary, Popular, and Emergent Literature", units: 3 },
                { code: "CSEE 205", description: "Teaching and Assessment of Grammar", units: 3 },
                { code: "CSEE 305", description: "Survey of Philippine Literature in English", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 12", description: "The Life and Works of Rizal", units: 3 },
                { code: "TTL 2E", description: "Technology for Teaching and Learning 2 (Technology in Language Education) with computer lab", units: 3 },
                { code: "CALE 1", description: "Assessment of Learning 1 (English)", units: 3 },
                { code: "CSEE 206", description: "Language Programs and Policies in Multilingual Societies", units: 3 },
                { code: "CSEE 207", description: "Mythology and Folklore", units: 3 },
                { code: "CSEE 208", description: "Survey of Afro-Asian Literature", units: 3 },
                { code: "CSEE 209", description: "Technical Writing", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "1st Trimester",
            subjects: [
                { code: "Research 1", description: "Introduction to Thesis Writing", units: 3 },
                { code: "CALE 2", description: "Assessment in Learning 2 (English)", units: 3 },
                { code: "SEM 1", description: "Seminar in Teaching MEFSS 1", units: 3 },
                { code: "CoEd 101", description: "Building and Enhancing New Literacies Across the Curriculum", units: 3 },
                { code: "CoEd 305", description: "The Teacher and the Community, School Culture and Organizational Leadership", units: 3 },
                { code: "CSEE 301", description: "Survey of English and American Literature", units: 3 },
                { code: "CSEE 303", description: "Campus Journalism (with Speech Lab)", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "SEM 2", description: "Seminar in Teaching MEFSS 2", units: 3 },
                { code: "CSEE 302", description: "Literary Criticism", units: 3 },
                { code: "CSEE 304", description: "Teaching and Assessment of Literature Studies", units: 3 },
                { code: "CSEE 306", description: "Language Learning Materials Development", units: 3 },
                { code: "CSEE 307", description: "Language Education Research", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "Research 2", description: "Thesis Writing", units: 3 },
                { code: "FS 1", description: "Observation of Teaching-Learning in Actual School Environment", units: 3 },
                { code: "FS 2", description: "Participation and Teaching Assistantship", units: 3 }
            ]
        },
        {
            year: "4th Year", trimester: "1st Trimester",
            subjects: [
                { code: "PRACTICUM", description: "Teaching Internship", units: 6 }
            ]
        }
    ],


    /* =====================================================
       BSED-MATH — Effective SY 2024-2025, CMO 75 s.2017
    ===================================================== */
    "BSED-MATH": [
        {
            year: "1st Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 1", description: "Understanding the Self", units: 3 },
                { code: "GE 2", description: "Readings in Philippine History", units: 3 },
                { code: "GE 3", description: "The Contemporary World", units: 3 },
                { code: "GE 4", description: "Mathematics in the Modern World", units: 3 },
                { code: "NSTP 1", description: "Civic Welfare Training Service 1", units: 3 },
                { code: "CSEM 101", description: "History of Mathematics", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "2nd Trimester",
            subjects: [
                { code: "GE 5", description: "Purposive Communication (with speech lab)", units: 3 },
                { code: "GE 6", description: "Art Appreciation", units: 3 },
                { code: "GE 7", description: "Science, Technology and Society", units: 3 },
                { code: "PATH Fit 1", description: "Movement Competency Training", units: 2 },
                { code: "NSTP 2", description: "Civic Welfare Training Service 2", units: 3 },
                { code: "CoEd 100", description: "The Child and Adolescent Learners and Learning Principles", units: 3 },
                { code: "CSEM 102", description: "College and Advanced Algebra", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 8", description: "Ethics", units: 3 },
                { code: "GE 9", description: "Gender and Society", units: 3 },
                { code: "PATH Fit 2", description: "Exercise-based Fitness Activity", units: 2 },
                { code: "CoEd 101", description: "Building and Enhancing New Literacies Across the Curriculum", units: 3 },
                { code: "CoEd 104", description: "The Teaching Profession", units: 3 },
                { code: "CSEM 103", description: "Logic and Set Theory", units: 3 },
                { code: "CSEM 104", description: "Mathematics of Investment", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 10", description: "Philippine Popular Culture", units: 3 },
                { code: "GE 11", description: "Living in an IT Era", units: 3 },
                { code: "PATH Fit 3", description: "Dance and Sports", units: 2 },
                { code: "CoEd 103", description: "Facilitating Learner-Centered Teaching", units: 3 },
                { code: "CSEM 201", description: "Plane and Solid Geometry", units: 3 },
                { code: "CSEM 203", description: "Trigonometry", units: 3 },
                { code: "CSEM 205", description: "Elementary Statistics & Probability", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "PATH Fit 4", description: "Outdoor and Adventure Activities", units: 2 },
                { code: "CALM 1", description: "Assessment in Learning 1 (Mathematics)", units: 3 },
                { code: "CSEM 204", description: "Modern Geometry", units: 3 },
                { code: "CSEM 210", description: "Advanced Statistics", units: 3 },
                { code: "CSEM 206", description: "Number Theory", units: 3 },
                { code: "CSEM 207", description: "Linear Algebra", units: 3 },
                { code: "CSEM 202", description: "Abstract Algebra", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 12", description: "The Life and Works of Rizal", units: 3 },
                { code: "CALM 2", description: "Assessment in Learning 2 (Mathematics)", units: 3 },
                { code: "CSEM 208", description: "Calculus 1 (with Analytic Geometry)", units: 4 },
                { code: "CSEM 209", description: "Problem Solving, Mathematical Investigations and Modelling", units: 3 },
                { code: "CSEM 303", description: "Assessment and Evaluation in Mathematics", units: 3 },
                { code: "CSEM 301", description: "Principle and Strategies of Teaching Mathematics", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "1st Trimester",
            subjects: [
                { code: "SEM 1", description: "Seminar in Teaching MEFSS 1", units: 3 },
                { code: "CoEd 201", description: "Foundations of Special and Inclusive Education", units: 3 },
                { code: "TTL 1", description: "Technology for Teaching and Learning 1", units: 3 },
                { code: "CSEM 302", description: "Calculus II", units: 4 },
                { code: "CSEM 304", description: "Research in Mathematics", units: 4 }
            ]
        },
        {
            year: "3rd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "Research 1", description: "Introduction to Thesis Writing", units: 3 },
                { code: "SEM 2", description: "Seminar in Teaching MEFSS 2", units: 3 },
                { code: "CoEd 202", description: "The Teacher and the School Curriculum", units: 3 },
                { code: "CoEd 305", description: "The Teacher and the Community, School Culture and Organizational Leadership", units: 3 },
                { code: "CSEM 305", description: "Calculus III", units: 3 },
                { code: "TTL 2M", description: "Technology for Teaching and Learning 2 (Instrumentation and Technology in Mathematics) with computer lab", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "Research 2", description: "Thesis Writing", units: 3 },
                { code: "FS 1", description: "Observation of Teaching-Learning in Actual School Environment", units: 3 },
                { code: "FS 2", description: "Participation and Teaching Assistantship", units: 3 }
            ]
        },
        {
            year: "4th Year", trimester: "1st Trimester",
            subjects: [
                { code: "PRACTICUM", description: "Teaching Internship", units: 6 }
            ]
        }
    ],


    /* =====================================================
       BSED-SOCIAL — Effective SY 2024-2025, CMO 75 s.2017
    ===================================================== */
    "BSED-SOCIAL": [
        {
            year: "1st Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 1", description: "Understanding the Self", units: 3 },
                { code: "GE 2", description: "Readings in Philippine History", units: 3 },
                { code: "GE 3", description: "The Contemporary World", units: 3 },
                { code: "GE 4", description: "Mathematics in the Modern World", units: 3 },
                { code: "NSTP 1", description: "Civic Welfare Training Service 1", units: 3 },
                { code: "CSES 101", description: "Geography 1 (Human Geography)", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "2nd Trimester",
            subjects: [
                { code: "GE 5", description: "Purposive Communication (with speech lab)", units: 3 },
                { code: "GE 6", description: "Art Appreciation", units: 3 },
                { code: "GE 7", description: "Science, Technology and Society", units: 3 },
                { code: "PATH Fit 1", description: "Movement Competency Training", units: 2 },
                { code: "NSTP 2", description: "Civic Welfare Training Service 2", units: 3 },
                { code: "CoEd 100", description: "The Child and Adolescent Learners and Learning Principles", units: 3 },
                { code: "CSES 102", description: "Geography 2 (Physical Geography)", units: 3 }
            ]
        },
        {
            year: "1st Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 8", description: "Ethics", units: 3 },
                { code: "GE 9", description: "Gender and Society", units: 3 },
                { code: "GE 10", description: "Philippine Popular Culture", units: 3 },
                { code: "CoEd 103", description: "Facilitating Learner-Centered Teaching", units: 3 },
                { code: "CoEd 104", description: "The Teaching Profession", units: 3 },
                { code: "CSES 103", description: "Geography 3 (Urban Geography)", units: 3 },
                { code: "PATH Fit 2", description: "Exercise-based Fitness Activity", units: 2 }
            ]
        },
        {
            year: "2nd Year", trimester: "1st Trimester",
            subjects: [
                { code: "GE 11", description: "Living in an IT Era", units: 3 },
                { code: "PATH Fit 3", description: "Dance and Sports", units: 2 },
                { code: "CoEd 202", description: "The Teacher and the School Curriculum", units: 3 },
                { code: "CSES 201", description: "Foundation of Social Studies", units: 3 },
                { code: "CSES 202", description: "Asian Studies", units: 3 },
                { code: "CSES 203", description: "Places and Landscape in a Changing World", units: 3 },
                { code: "CSES 204", description: "Micro Economics", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "PATH Fit 4", description: "Outdoor and Adventure Activities", units: 2 },
                { code: "CALS 1", description: "Assessment of Learning 1 (Social Studies)", units: 3 },
                { code: "CoEd 201", description: "Foundations of Special and Inclusive Education", units: 3 },
                { code: "CSES 205", description: "World History 1 (Ancient & Medieval Era)", units: 3 },
                { code: "CSES 206", description: "Macro Economics", units: 3 },
                { code: "CSES 207", description: "Integrative Methods in Teaching Social Science discipline in Basic Education", units: 3 }
            ]
        },
        {
            year: "2nd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "GE 12", description: "The Life and Works of Rizal", units: 3 },
                { code: "CSES 301", description: "Assessment and Evaluation in the Social Sciences", units: 3 },
                { code: "CALS 2", description: "Assessment of Learning 2 (Social Studies)", units: 3 },
                { code: "CSES 208", description: "World History 2 (Modern & Contemporary Era)", units: 3 },
                { code: "CSES 209", description: "Law-Related Studies", units: 3 },
                { code: "CSES 210", description: "Comparative Government and Politics", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "1st Trimester",
            subjects: [
                { code: "TTL 1", description: "Technology for Teaching and Learning 1", units: 3 },
                { code: "SEM 1", description: "Seminar in Teaching MEFSS", units: 3 },
                { code: "CoEd 101", description: "Building and Enhancing New Literacies Across the Curriculum", units: 3 },
                { code: "Elective 1S", description: "Basic of School Management and Administration", units: 3 },
                { code: "CSES 302", description: "Production of Social Studies Instructional Materials", units: 3 },
                { code: "CSES 303", description: "Research in Social Studies", units: 3 },
                { code: "CSES 304", description: "Socio-Cultural Anthropology", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "2nd Trimester",
            subjects: [
                { code: "Research 1", description: "Introduction to Thesis Writing", units: 3 },
                { code: "Elective 2S", description: "Human Resources Management", units: 3 },
                { code: "TTL 2S", description: "Technology for Teaching and Learning 2 (Social Studies) with computer lab", units: 3 },
                { code: "SEM 2", description: "Seminar in Teaching MEFSS", units: 3 },
                { code: "CoEd 305", description: "The Teacher and the Community, School Culture and Organizational Leadership", units: 3 },
                { code: "CSES 305", description: "Teaching Approach in Secondary Social Studies", units: 3 },
                { code: "CSES 306", description: "Comparative Economic Planning", units: 3 },
                { code: "CSES 307", description: "Trends and Issues in Social Studies", units: 3 }
            ]
        },
        {
            year: "3rd Year", trimester: "3rd Trimester",
            subjects: [
                { code: "Research 2", description: "Thesis Writing", units: 3 },
                { code: "FS 1", description: "Observation of Teaching-Learning in Actual School Environment", units: 3 },
                { code: "FS 2", description: "Participation and Teaching Assistantship", units: 3 }
            ]
        },
        {
            year: "4th Year", trimester: "1st Trimester",
            subjects: [
                { code: "PRACTICUM", description: "Teaching Internship", units: 6 }
            ]
        }
    ]

};


/* =========================================================
   PROGRAM NAMES
========================================================= */

const programNames = {

    "BSCS":
        "Bachelor of Science in Computer Science (BSCS)",

    "BSIS":
        "Bachelor of Science in Information Systems (BSIS)",

    "BSIT":
        "Bachelor of Science in Information Technology (BSIT)",

    "BSCRIM":
        "Bachelor of Science in Criminology (BS Crim)",

    "BSA":
        "Bachelor of Science in Accountancy (BSA)",

    "BSBA-FM":
        "Bachelor of Science in Business Administration Major in Financial Management",

    "BSBA-HRDM":
        "Bachelor of Science in Business Administration Major in Human Resource Development Management",

    "BSBA-MM":
        "Bachelor of Science in Business Administration Major in Marketing Management",

    "BEED":
        "Bachelor of Elementary Education (BEED)",

    "BSED-ENGLISH":
        "Bachelor of Secondary Education Major in English",

    "BSED-MATH":
        "Bachelor of Secondary Education Major in Mathematics",

    "BSED-SOCIAL":
        "Bachelor of Secondary Education Major in Social Studies"
};


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadSubjects();

        addSubjectRow();

        setToday();

    }
);


/* =========================================================
   SET TODAY
========================================================= */

function setToday() {

    const dateInput =
        document.getElementById("enrollmentDate");

    if (!dateInput.value) {

        const today = new Date();

        const year = today.getFullYear();

        const month =
            String(today.getMonth() + 1).padStart(2, "0");

        const day =
            String(today.getDate()).padStart(2, "0");

        dateInput.value = `${year}-${month}-${day}`;
    }
}


/* =========================================================
   LOAD SUBJECT DROPDOWNS
   Every program is now a structured program (Year/Trimester
   optgroups), sourced directly from each program's official
   ASCB curriculum prospectus.
========================================================= */

/* =========================================================
   LOAD SUBJECT DROPDOWNS
   Fine-filtered by Program + Year Level + Trimester.
========================================================= */

function loadSubjects() {

    const selects =
        document.querySelectorAll(".subject-select");

    const program =
        document.getElementById("program").value;

    const isStructured =
        program && structuredPrograms[program];

    selects.forEach(
        select => {

            const oldValue = select.value;

            select.innerHTML =
                `
                <option value="">Select Subject</option>
                <option value="__CUSTOM__">+ Add Custom Subject</option>
                `;

            if (isStructured) {

                structuredPrograms[program].forEach(
                    group => {

                        const optgroup =
                            document.createElement("optgroup");

                        optgroup.label =
                            `${group.year} — ${group.trimester}`;

                        group.subjects.forEach(
                            subject => {

                                const option =
                                    document.createElement("option");

                                option.value =
                                    JSON.stringify(subject);

                                option.textContent =
                                    `${subject.code} — ${subject.description} (${subject.units} units)`;

                                optgroup.appendChild(option);
                            }
                        );

                        select.appendChild(optgroup);
                    }
                );

            }

            if (
                oldValue &&
                [...select.options].some(o => o.value === oldValue)
            ) {

                select.value = oldValue;
            }

        }
    );
}


/* =========================================================
   HANDLE FILTER CHANGE
   Triggered when Program, Year Level, or Trimester changes.
   Refreshes dropdowns AND auto-fills the subject table with
   the matching prospectus subjects for that term.
========================================================= */

function handleFilterChange() {

    loadSubjects();

    autoPopulateSubjectsForTerm();
}


/* =========================================================
   AUTO-POPULATE SUBJECTS FOR THE SELECTED TERM
========================================================= */

/* =========================================================
   QUICK ADD SUBJECTS BY TERM
   For irregular students — appends the subjects of a chosen
   Year Level + Trimester to the existing table, without
   clearing what's already there. Skips subjects already
   added (matched by course code) to avoid duplicates.
========================================================= */

function addSubjectsForTerm() {

    const program =
        document.getElementById("program").value;

    const year =
        document.getElementById("quickAddYear").value;

    const trimester =
        document.getElementById("quickAddTrimester").value;

    if (!program) {
        alert("Pumili muna ng Course / Program.");
        return;
    }

    if (!year || !trimester) {
        alert("Pumili ng Year Level at Trimester na idadagdag.");
        return;
    }

    if (!structuredPrograms[program]) {
        alert("Walang structured prospectus ang program na ito.");
        return;
    }

    const group =
        structuredPrograms[program].find(
            g => g.year === year && g.trimester === trimester
        );

    if (!group) {
        alert("Walang nakatalang subjects para sa Year Level at Trimester na ito.");
        return;
    }

    /* Collect codes already present sa table, para
       hindi na madoble kapag pinindot ulit. */

    const existingCodes = new Set();

    document.querySelectorAll(".subject-row").forEach(
        row => {

            const code =
                row.dataset.customCode || getRowSubjectCode(row);

            if (code) {
                existingCodes.add(code);
            }
        }
    );

    let addedCount = 0;

    group.subjects.forEach(
        subject => {

            if (existingCodes.has(subject.code)) {
                return;
            }

            addSubjectRow(subject);

            addedCount++;
        }
    );

    calculateTotalUnits();

    if (addedCount === 0) {

        alert("Naidagdag na lahat ng subjects para sa term na ito.");
    }
}


/* =========================================================
   GET ROW SUBJECT CODE
   Helper — reads the course code currently selected in a
   subject row's dropdown (used for duplicate checking).
========================================================= */

function getRowSubjectCode(row) {

    const select = row.querySelector(".subject-select");

    if (!select || !select.value || select.value === "__CUSTOM__") {
        return null;
    }

    try {

        return JSON.parse(select.value).code;

    } catch (error) {

        return null;
    }
}


/* =========================================================
   ADD SUBJECT ROW
========================================================= */

function addSubjectRow(subjectData = null) {

    const tbody =
        document.getElementById("subjectRows");

    const row = document.createElement("tr");

    row.className = "subject-row";

    row.innerHTML =
        `
        <td>
            <select class="subject-select" onchange="selectSubject(this)">
                <option value="">Select Subject</option>
            </select>
        </td>

        <td>
            <input type="text" class="subject-description" placeholder="Course Description">
        </td>

        <td>
            <input type="text" class="subject-grade" placeholder="—">
        </td>

        <td>
            <input type="number" class="subject-units" min="0" step="1" value="0" oninput="calculateTotalUnits()">
        </td>

        <td style="text-align:center">
            <button type="button" class="btn btn-danger" onclick="removeSubjectRow(this)">Remove</button>
        </td>
        `;

    tbody.appendChild(row);

    loadSubjects();

    if (subjectData) {

        const select = row.querySelector(".subject-select");
        const description = row.querySelector(".subject-description");
        const units = row.querySelector(".subject-units");

        select.value = JSON.stringify(subjectData);
        description.value = subjectData.description;
        units.value = subjectData.units;
    }

    calculateTotalUnits();
}


/* =========================================================
   SELECT SUBJECT
========================================================= */

function selectSubject(select) {

    const row = select.closest(".subject-row");

    if (select.value === "__CUSTOM__") {

        const code = prompt("Enter Course Code:");

        if (!code) {
            select.value = "";
            return;
        }

        const description = prompt("Enter Course Description:");

        if (!description) {
            select.value = "";
            return;
        }

        const units = prompt("Enter Units:", "3");

        row.querySelector(".subject-description").value = description;
        row.querySelector(".subject-units").value = units || 0;

        /* Store custom code on row itself. */
        row.dataset.customCode = code;

        calculateTotalUnits();

        return;
    }

    if (!select.value) {

        row.querySelector(".subject-description").value = "";
        row.querySelector(".subject-units").value = 0;

        delete row.dataset.customCode;

        calculateTotalUnits();

        return;
    }

    try {

        const subject = JSON.parse(select.value);

        row.querySelector(".subject-description").value = subject.description;
        row.querySelector(".subject-units").value = subject.units;

        delete row.dataset.customCode;

        calculateTotalUnits();

    } catch (error) {

        console.error(error);
    }
}


/* =========================================================
   REMOVE SUBJECT
========================================================= */

function removeSubjectRow(button) {

    const rows =
        document.querySelectorAll(".subject-row");

    if (rows.length <= 1) {

        alert("At least one subject row is required.");

        return;
    }

    button.closest(".subject-row").remove();

    calculateTotalUnits();
}


/* =========================================================
   TOTAL UNITS
========================================================= */

function calculateTotalUnits() {

    const unitsInputs =
        document.querySelectorAll(".subject-units");

    let total = 0;

    unitsInputs.forEach(
        input => {

            const value = parseFloat(input.value) || 0;

            total += value;
        }
    );

    document.getElementById("totalUnitsInput").textContent = total;
}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(dateString) {

    if (!dateString) {

        return "________________";
    }

    const date = new Date(dateString + "T00:00:00");

    return date.toLocaleDateString(
        "en-US",
        { month: "long", day: "numeric", year: "numeric" }
    );
}


/* =========================================================
   GENERATE CERTIFICATE
========================================================= */

/* =========================================================
   CERTIFICATE TYPE
========================================================= */

function changeCertificateType() {

    const certificateType =
        document.getElementById("certificateType").value;

    const title =
        document.getElementById("previewCertificateTitle");

    const intro =
        document.getElementById("certificateIntro");

    if (certificateType === "REGISTRATION") {

        title.textContent = "CERTIFICATE OF REGISTRATION";

        intro.innerHTML = `
            This is to certify that

            <strong id="previewStudentName">
                ______________________________
            </strong>

            is officially enrolled at

            <strong>
                Andres Soriano Colleges of Bislig, Inc.
            </strong>

            in the

            <strong id="previewProgram">
                ______________________________
            </strong>

            program for the

            <strong id="previewTrimester">
                ______________________________
            </strong>,

            Academic Year

            <strong id="previewAcademicYear">
                ____________
            </strong>.
        `;

    } else {

        title.textContent = "CERTIFICATE OF ENROLLMENT";

        intro.innerHTML = `
            This is to certify that

            <strong id="previewStudentName">
                ______________________________
            </strong>

            is officially enrolled at

            <strong>
                Andres Soriano Colleges of Bislig, Inc.
            </strong>

            in the

            <strong id="previewProgram">
                ______________________________
            </strong>

            program for the

            <strong id="previewTrimester">
                ______________________________
            </strong>,

            Academic Year

            <strong id="previewAcademicYear">
                ____________
            </strong>.
        `;
    }
}

function generateCertificate() {

    const certificateType =
        document.getElementById("certificateType").value;

    changeCertificateType();

    const studentName =
        document.getElementById("studentName").value.trim();

    const studentId =
        document.getElementById("studentId").value.trim();

    const program =
        document.getElementById("program").value;

    const yearLevel =
        document.getElementById("yearLevel").value;

    const trimester =
        document.getElementById("trimester").value;

    const academicYear =
        document.getElementById("academicYear").value.trim();

    const enrollmentDate =
        document.getElementById("enrollmentDate").value;

    const status =
        document.getElementById("status").value;


    /* ========================================== VALIDATION */

    if (!studentName) {
        alert("Please enter the student's name.");
        return;
    }

    if (!studentId) {
        alert("Please enter the Student ID.");
        return;
    }

    if (!program) {
        alert("Please select a Course / Program.");
        return;
    }

    if (!yearLevel) {
        alert("Please select the Year Level.");
        return;
    }

    if (!trimester) {
        alert("Please select the Trimester.");
        return;
    }


    /* ========================================== BASIC INFO */

    document.getElementById("previewStudentName").textContent = studentName;
    document.getElementById("previewName2").textContent = studentName;
    document.getElementById("previewStudentId").textContent = studentId;
    document.getElementById("previewProgram").textContent = programNames[program];
    document.getElementById("previewCourse").textContent = getShortProgram(program);
    document.getElementById("previewYearLevel").textContent = yearLevel;
    document.getElementById("previewTrimester").textContent =
        `${trimester}, AY ${academicYear}`;
    document.getElementById("previewTerm").textContent =
        `${trimester}, AY ${academicYear}`;
    document.getElementById("previewAcademicYear").textContent = academicYear;
    document.getElementById("previewEnrollmentDate").textContent =
        formatDate(enrollmentDate);
    document.getElementById("previewStatus").textContent = status;


    /* ========================================== SUBJECTS */

    const rows =
        document.querySelectorAll(".subject-row");

    const previewBody =
        document.getElementById("previewSubjects");

    previewBody.innerHTML = "";

    let totalUnits = 0;

    rows.forEach(
        row => {

            const select = row.querySelector(".subject-select");
            const description = row.querySelector(".subject-description");
            const grade = row.querySelector(".subject-grade");
            const units = row.querySelector(".subject-units");

            if (
                !description.value.trim() &&
                (!select.value || select.value === "__CUSTOM__")
            ) {
                return;
            }

            let code = "";

            if (row.dataset.customCode) {

                code = row.dataset.customCode;

            } else if (select.value && select.value !== "__CUSTOM__") {

                try {

                    const subject = JSON.parse(select.value);

                    code = subject.code;

                } catch (error) {

                    code = "";
                }
            }

            const unitValue = parseFloat(units.value) || 0;

            totalUnits += unitValue;

            const tr = document.createElement("tr");

            tr.innerHTML =
                `
                <td>${escapeHTML(code)}</td>
                <td>${escapeHTML(description.value)}</td>
                <td>${escapeHTML(grade.value || "—")}</td>
                <td>${unitValue}</td>
                `;

            previewBody.appendChild(tr);
        }
    );

    document.getElementById("previewTotalUnits").textContent = totalUnits;


    /* ========================================== ISSUED DATE */

    document.getElementById("previewIssuedDate").textContent =
        formatDate(new Date().toISOString().split("T")[0]);


    /* ========================================== OPEN MODAL */

    document.getElementById("certificateModal").classList.add("active");
}


/* =========================================================
   SHORT PROGRAM
========================================================= */

function getShortProgram(program) {

    const shortNames = {

        "BSCS": "BSCS",
        "BSIS": "BSIS",
        "BSIT": "BSIT",
        "BSCRIM": "BS Crim",
        "BSA": "BSA",
        "BSBA-FM": "BSBA-FM",
        "BSBA-HRDM": "BSBA-HRDM",
        "BSBA-MM": "BSBA-MM",
        "BEED": "BEED",
        "BSED-ENGLISH": "BSED-English",
        "BSED-MATH": "BSED-Mathematics",
        "BSED-SOCIAL": "BSED-Social Studies"
    };

    return shortNames[program] || program;
}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   CLOSE CERTIFICATE
========================================================= */

function closeCertificate() {

    document.getElementById("certificateModal").classList.remove("active");
}


/* =========================================================
   PRINT CERTIFICATE — ONE COPY ONLY
========================================================= */

function printCertificate() {

    const printArea = document.getElementById("printArea");

    if (!printArea) {
        alert("Certificate print area not found.");
        return;
    }

    const printWindow = window.open(
        "",
        "_blank",
        "width=900,height=1000"
    );

    if (!printWindow) {
        alert("Please allow pop-ups for this website to print the certificate.");
        return;
    }

    const styles = [...document.querySelectorAll("link[rel='stylesheet'], style")]
        .map(style => {
            if (style.tagName === "STYLE") {
                return `<style>${style.innerHTML}</style>`;
            }

            return `<link rel="stylesheet" href="${style.href}">`;
        })
        .join("");

    printWindow.document.open();

    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>

            <meta charset="UTF-8">

            <title>${document.getElementById("previewCertificateTitle").textContent}</title>

            ${styles}

            <style>

                @page {
                    size: Letter portrait;
                    margin: 0;
                }

                html,
                body {
                    width: 8.5in;
                    height: 11in;
                    margin: 0;
                    padding: 0;
                    background: #ffffff;
                    overflow: hidden;
                }

                body {
                    font-family: Arial, sans-serif;
                }

                .print-area {
                    width: 8.5in !important;
                    height: 11in !important;
                    min-height: 11in !important;
                    max-height: 11in !important;

                    margin: 0 !important;
                    padding: 0 !important;

                    overflow: hidden !important;

                    box-shadow: none !important;
                    background: #ffffff !important;
                }

                /* WATERMARK */

                .watermark-container {
                    position: absolute !important;

                    left: 0 !important;
                    right: 0 !important;

                    top: 2.20in !important;
                    bottom: 0 !important;

                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;

                    overflow: hidden !important;

                    z-index: 1 !important;
                    pointer-events: none !important;
                }

                .document-watermark {
                    position: relative !important;

                    width: 4.35in !important;
                    height: 4.35in !important;

                    max-width: 4.35in !important;
                    max-height: 4.35in !important;

                    transform: none !important;

                    display: block !important;
                    visibility: visible !important;

                    object-fit: contain !important;

                    opacity: 0.055 !important;

                    z-index: 1 !important;
                    pointer-events: none !important;
                }

                .document-content {
                    position: relative !important;
                    z-index: 3 !important;
                }

                .document-header {
                    position: relative !important;
                    z-index: 5 !important;
                }

                .student-details,
                .certificate-title,
                .certificate-intro,
                .summary-title,
                .certificate-table,
                .certification-text,
                .signature-area {
                    position: relative !important;
                    z-index: 3 !important;
                }

                /* HIDE UI CONTROLS */

                button,
                .btn,
                .modal-toolbar,
                .modal-overlay {
                    display: none !important;
                }

                /* PRINT COLORS */

                * {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }

            </style>

        </head>

        <body>

            ${printArea.outerHTML}

        </body>
        </html>
    `);

    printWindow.document.close();

    printWindow.focus();

    /*
       Wait for logo/fonts/images to finish loading
       before opening print dialog.
    */

    setTimeout(() => {

        printWindow.print();

        /*
           Close the temporary print window
           after printing.
        */

        setTimeout(() => {
            printWindow.close();
        }, 500);

    }, 700);
}

/* =========================================================
   CLEAR FORM
========================================================= */

function clearForm() {

    const confirmation =
        confirm("Clear all enrollment information and subjects?");

    if (!confirmation) {
        return;
    }

    document.getElementById("studentName").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("program").value = "";
    document.getElementById("yearLevel").value = "";
    document.getElementById("trimester").value = "";
    document.getElementById("academicYear").value = "2026–2027";
    document.getElementById("status").value = "OFFICIALLY ENROLLED";

    setToday();

    document.getElementById("subjectRows").innerHTML = "";

    addSubjectRow();

    calculateTotalUnits();
}

function closeModal() {

    const modal = document.getElementById("certificateModal");

    if (modal) {

        modal.classList.remove("active");
        modal.style.display = "none";
    }
}

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeModal();
    }
});
