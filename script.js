/* =========================================================
   ASCB CERTIFICATE OF ENROLLMENT SYSTEM
========================================================= */


/* =========================================================
   SUBJECT DATABASE
========================================================= */

const subjects = {

    COMMON: [

        {
            code: "GE 1",
            description: "Understanding the Self",
            units: 3
        },

        {
            code: "GE 2",
            description: "Readings in Philippine History",
            units: 3
        },

        {
            code: "GE 3",
            description: "The Contemporary World",
            units: 3
        },

        {
            code: "GE 4",
            description: "Mathematics in the Modern World",
            units: 3
        },

        {
            code: "GE 5",
            description: "Purposive Communication",
            units: 3
        },

        {
            code: "GE 6",
            description: "Art Appreciation",
            units: 3
        },

        {
            code: "GE 7",
            description: "Science, Technology and Society",
            units: 3
        },

        {
            code: "GE 8",
            description: "Ethics",
            units: 3
        },

        {
            code: "GE 9",
            description: "Gender and Society",
            units: 3
        },

        {
            code: "GE 10",
            description: "Philippine Popular Culture",
            units: 3
        },

        {
            code: "GE 11",
            description: "Living in an IT Era",
            units: 3
        },

        {
            code: "GE 12",
            description: "Life and Works of Rizal",
            units: 3
        },

        {
            code: "NSTP 1",
            description: "Civic Welfare Training Service 1",
            units: 3
        },

        {
            code: "NSTP 2",
            description: "Civic Welfare Training Service 2",
            units: 3
        },

        {
            code: "PATH Fit 1",
            description: "Movement Competency Training",
            units: 2
        },

        {
            code: "PATH Fit 2",
            description: "Exercise-based Fitness Activity",
            units: 2
        },

        {
            code: "PATH Fit 3",
            description: "Dance and Sports",
            units: 2
        },

        {
            code: "PATH Fit 4",
            description: "Outdoor and Adventure Activities",
            units: 2
        }

    ],


    BSIT: [

        {
            code: "CC 101",
            description: "Introduction to Computing",
            units: 3
        },

        {
            code: "CSS 1",
            description: "Install and Configure Computer Network",
            units: 3
        },

        {
            code: "CC 102",
            description: "Computer Programming 1",
            units: 3
        },

        {
            code: "CSS 2",
            description: "Set-up Computer Server / Maintain Computer Systems and Networks",
            units: 3
        },

        {
            code: "CC 103",
            description: "Computer Programming 2",
            units: 3
        },

        {
            code: "MS 101",
            description: "Discrete Mathematics",
            units: 3
        },

        {
            code: "PF 101",
            description: "Object-Oriented Programming",
            units: 3
        },

        {
            code: "CC 104",
            description: "Data Structures and Algorithms",
            units: 3
        },

        {
            code: "IT 101",
            description: "Platform Technologies",
            units: 3
        },

        {
            code: "CC 105",
            description: "Information Management",
            units: 3
        },

        {
            code: "IM 101",
            description: "Fundamentals of Database Systems",
            units: 3
        },

        {
            code: "NET 101",
            description: "Networking 1",
            units: 3
        },

        {
            code: "IPT 101",
            description: "Integrative Programming and Technologies",
            units: 3
        },

        {
            code: "SAD 101",
            description: "Systems Analysis, Design and Development",
            units: 3
        },

        {
            code: "IAS 101",
            description: "Information Assurance and Security",
            units: 3
        },

        {
            code: "SA 101",
            description: "System Integration and Architecture 1",
            units: 3
        },

        {
            code: "HCI 101",
            description: "Introduction to Human Computer Interaction",
            units: 3
        },

        {
            code: "MS 102",
            description: "Quantitative Methods Including Modelling and Simulation",
            units: 3
        },

        {
            code: "STAT",
            description: "Statistics",
            units: 3
        },

        {
            code: "CC 106",
            description: "Application Development and Emerging Technologies",
            units: 3
        }
    ],


    BSA: [

        {
            code: "A1",
            description: "Conceptual Framework and Accounting Standards",
            units: 3
        },

        {
            code: "A1A",
            description: "Fundamentals of Accounting",
            units: 3
        },

        {
            code: "BA 1",
            description: "Managerial Economics",
            units: 3
        },

        {
            code: "A2",
            description: "Fundamentals of Partnership and Corporation Accounting",
            units: 3
        },

        {
            code: "A3",
            description: "Cost Accounting and Control",
            units: 3
        },

        {
            code: "A4",
            description: "Financial Accounting and Reporting",
            units: 3
        },

        {
            code: "BA 2",
            description: "Law on Obligations and Contracts",
            units: 3
        },

        {
            code: "BA 3",
            description: "Management Science",
            units: 3
        },

        {
            code: "BA 4",
            description: "Economic Development",
            units: 3
        },

        {
            code: "BA 5",
            description: "Business Laws and Regulations",
            units: 3
        },

        {
            code: "A5",
            description: "Intermediate Accounting 1",
            units: 3
        },

        {
            code: "BA 6",
            description: "Income Taxation",
            units: 3
        },

        {
            code: "A6",
            description: "Intermediate Accounting 2",
            units: 3
        },

        {
            code: "A7",
            description: "Strategic Cost Management",
            units: 3
        },

        {
            code: "BA 7",
            description: "Business Taxation",
            units: 3
        },

        {
            code: "A8",
            description: "Regulatory Framework and Legal Issues in Business",
            units: 3
        },

        {
            code: "A9",
            description: "Intermediate Accounting 3",
            units: 3
        },

        {
            code: "BA 8",
            description: "Financial Management",
            units: 3
        },

        {
            code: "BA 9",
            description: "IT Application Tools in Business",
            units: 3
        },

        {
            code: "BA 10",
            description: "Financial Markets",
            units: 3
        },

        {
            code: "PA 1",
            description: "Auditing and Assurance Principles",
            units: 3
        },

        {
            code: "BA 11",
            description: "Statistical Analysis with Software Application",
            units: 3
        },

        {
            code: "PA 2",
            description: "Auditing and Assurance: Concepts and Applications 1",
            units: 3
        },

        {
            code: "PA 3",
            description: "Auditing and Assurance: Specialized Industries",
            units: 3
        },

        {
            code: "PA 4",
            description: "Accounting for Business Combinations",
            units: 3
        },

        {
            code: "PA 5",
            description: "Auditing in CIS Environment",
            units: 3
        },

        {
            code: "PA 6",
            description: "Accounting for Special Transactions",
            units: 3
        }
    ],


    "BSBA-FM": [

        {
            code: "BA 1",
            description: "Basic Microeconomics",
            units: 3
        },

        {
            code: "FM 101",
            description: "Financial Management",
            units: 3
        },

        {
            code: "BA 2",
            description: "Obligations and Contracts",
            units: 3
        },

        {
            code: "FM 102",
            description: "Financial Analysis",
            units: 3
        },

        {
            code: "FM 103",
            description: "Banking and Financial Institutions",
            units: 3
        },

        {
            code: "BA 3",
            description: "Human Behavior in an Organization with Case Analysis",
            units: 3
        },

        {
            code: "BA 4",
            description: "Income Taxation",
            units: 3
        },

        {
            code: "FM 104",
            description: "Money, Policy and Central Bank",
            units: 3
        },

        {
            code: "FM 105",
            description: "Investment and Portfolio Management",
            units: 3
        },

        {
            code: "BA 5",
            description: "Good Governance and Social Responsibility",
            units: 3
        },

        {
            code: "BA 6",
            description: "Human Resource Management",
            units: 3
        },

        {
            code: "BA 7",
            description: "International Trade and Agreement",
            units: 3
        },

        {
            code: "FM 106",
            description: "Credit and Collection",
            units: 3
        },

        {
            code: "FM 107",
            description: "Capital Market",
            units: 3
        },

        {
            code: "BA 8",
            description: "Business Research",
            units: 3
        },

        {
            code: "A&B 1",
            description: "Strategic Management",
            units: 3
        },

        {
            code: "FM 108",
            description: "Strategic Financial Management",
            units: 3
        },

        {
            code: "Elec 2",
            description: "Cooperative Management",
            units: 3
        },

        {
            code: "Elec. 1",
            description: "Entrepreneurial Management",
            units: 3
        },

        {
            code: "BA 10",
            description: "Graphic Design in Business",
            units: 3
        },

        {
            code: "FM 109",
            description: "Special Topics in Financial Management",
            units: 3
        },

        {
            code: "Elec 4",
            description: "E-Commerce and Internet Marketing",
            units: 3
        },

        {
            code: "Elec 3",
            description: "Franchising",
            units: 3
        },

        {
            code: "BA 11",
            description: "Application Tools in Business",
            units: 3
        },

        {
            code: "Practicum",
            description: "Work Integrated Learning",
            units: 6
        }
    ],


    "BSBA-HRDM": [

        {
            code: "HRDM 101",
            description: "Administrative and Office Management",
            units: 3
        },

        {
            code: "HRDM 102",
            description: "Labor Law and Legislation",
            units: 3
        },

        {
            code: "HRDM 103",
            description: "Recruitment and Selection",
            units: 3
        },

        {
            code: "HRDM 104",
            description: "Training and Development",
            units: 3
        },

        {
            code: "HRDM 105",
            description: "Compensation Administration",
            units: 3
        },

        {
            code: "HRDM 106",
            description: "Labor Relations and Negotiations",
            units: 3
        },

        {
            code: "HRDM 107",
            description: "Organizational Development",
            units: 3
        },

        {
            code: "HRDM 108",
            description: "Strategic Human Resource Management",
            units: 3
        },

        {
            code: "Elec 2",
            description: "Personal Finance",
            units: 3
        },

        {
            code: "Elec. 1",
            description: "Entrepreneurial Management",
            units: 3
        },

        {
            code: "BA 10",
            description: "Graphic Designs in Business",
            units: 3
        },

        {
            code: "HRDM 109",
            description: "Special Topics in Human Resource Management",
            units: 3
        },

        {
            code: "Elec 4",
            description: "Project Management",
            units: 3
        },

        {
            code: "Elec 3",
            description: "Global / International Trade",
            units: 3
        },

        {
            code: "BA 11",
            description: "IT Tools in Business",
            units: 3
        },

        {
            code: "Practicum",
            description: "Work Integrated Learning",
            units: 6
        }
    ],


    "BSBA-MM": [

        {
            code: "BA 8",
            description: "Business Research",
            units: 3
        },

        {
            code: "A&B 1",
            description: "Strategic Management",
            units: 3
        },

        {
            code: "MM 108",
            description: "Pricing Strategy",
            units: 3
        },

        {
            code: "Elec 2",
            description: "Cooperative Management",
            units: 3
        },

        {
            code: "Elec. 1",
            description: "Entrepreneurial Management",
            units: 3
        },

        {
            code: "BA 10",
            description: "Graphic Designs in Business",
            units: 3
        },

        {
            code: "A&B 2",
            description: "Operations Management (TQM) with Field Trip",
            units: 3
        },

        {
            code: "BA 9",
            description: "Thesis or Feasibility Study",
            units: 3
        },

        {
            code: "MM 109",
            description: "Special Topics in Marketing Management",
            units: 3
        },

        {
            code: "Elec 4",
            description: "E-Commerce and Internet Marketing",
            units: 3
        },

        {
            code: "Elec 3",
            description: "Franchising",
            units: 3
        },

        {
            code: "BA 11",
            description: "Application Tools in Business",
            units: 3
        },

        {
            code: "Practicum",
            description: "Work Integrated Learning",
            units: 6
        }
    ],


    BEED: [

        {
            code: "CoEd 100",
            description: "The Child and Adolescent Learners and Learning Principles",
            units: 3
        },

        {
            code: "CoEd 101",
            description: "Building and Enhancing New Literacies Across the Curriculum",
            units: 3
        },

        {
            code: "CoEd 102",
            description: "The Teaching Profession",
            units: 3
        },

        {
            code: "CoEd 103",
            description: "Facilitating Learner-Centered Teaching",
            units: 3
        },

        {
            code: "CoEd 104",
            description: "The Teacher and the School Curriculum",
            units: 3
        },

        {
            code: "CoEd 105",
            description: "Teaching Social Studies in Elementary Grades",
            units: 3
        },

        {
            code: "CoEd 204",
            description: "Good Manners and Right Conduct Education",
            units: 3
        },

        {
            code: "CoEd 301",
            description: "Assessment in Learning 2",
            units: 3
        },

        {
            code: "CoEd 302",
            description: "Seminar in Teaching MEFSS 1",
            units: 3
        },

        {
            code: "CoEd 303",
            description: "Teaching PE and Health in the Elementary Grades",
            units: 3
        },

        {
            code: "CoEd 304",
            description: "Research in Education",
            units: 3
        },

        {
            code: "CoEd 305",
            description: "Seminar in Teaching MEFSS 2",
            units: 3
        },

        {
            code: "CoEd 306",
            description: "Thesis Writing",
            units: 3
        },

        {
            code: "Elective 1",
            description: "Multi-Grade Classes",
            units: 3
        },

        {
            code: "Elective 2",
            description: "English for Specific Purposes",
            units: 3
        }
    ],


    "BSED-ENGLISH": [

        {
            code: "CSEE 101",
            description: "Introduction to Linguistics",
            units: 3
        },

        {
            code: "CSEE 102",
            description: "Teaching and Assessment of the Macro Skills",
            units: 3
        },

        {
            code: "CSEE 201",
            description: "Children and Adolescent Literature",
            units: 3
        },

        {
            code: "CSEE 202",
            description: "Theater Arts",
            units: 3
        },

        {
            code: "CSEE 203",
            description: "Speech and Language",
            units: 3
        },

        {
            code: "CSEE 204",
            description: "Teaching English in the Secondary School",
            units: 3
        },

        {
            code: "CSEE 205",
            description: "Language and Literature",
            units: 3
        },

        {
            code: "CSEE 301",
            description: "Research 1",
            units: 3
        },

        {
            code: "CSEE 302",
            description: "Research 2",
            units: 3
        },

        {
            code: "CSEE 305",
            description: "Principles and Theories of Language Acquisition",
            units: 3
        }
    ],


    "BSED-MATH": [

        {
            code: "CSEM 101",
            description: "College and Advanced Algebra",
            units: 3
        },

        {
            code: "CSEM 102",
            description: "Trigonometry",
            units: 3
        },

        {
            code: "CSEM 103",
            description: "Logic and Set Theory",
            units: 3
        },

        {
            code: "CSEM 104",
            description: "Geometry",
            units: 3
        },

        {
            code: "CSEM 201",
            description: "Plane and Solid Geometry",
            units: 3
        },

        {
            code: "CSEM 202",
            description: "Calculus I",
            units: 3
        },

        {
            code: "CSEM 203",
            description: "Calculus II",
            units: 3
        },

        {
            code: "CSEM 204",
            description: "Calculus III",
            units: 3
        },

        {
            code: "CSEM 205",
            description: "Elementary Statistics and Probability",
            units: 3
        },

        {
            code: "CSEM 301",
            description: "Mathematics of Investment",
            units: 3
        },

        {
            code: "CSEM 302",
            description: "Research in Mathematics",
            units: 3
        }
    ],


    "BSED-SOCIAL": [

        {
            code: "CSES 101",
            description: "Foundation of Social Studies",
            units: 3
        },

        {
            code: "CSES 102",
            description: "Government and Politics",
            units: 3
        },

        {
            code: "CSES 103",
            description: "Technology in Teaching and Learning",
            units: 3
        },

        {
            code: "CSES 201",
            description: "Teaching Approaches in Secondary Social Studies",
            units: 3
        },

        {
            code: "CSES 203",
            description: "Teaching Strategies in Social Studies",
            units: 3
        },

        {
            code: "CSES 204",
            description: "The Teacher and the School Curriculum",
            units: 3
        },

        {
            code: "CSES 205",
            description: "Research in Social Studies",
            units: 3
        },

        {
            code: "CSES 206",
            description: "Teaching Methods in Social Science",
            units: 3
        },

        {
            code: "CSES 207",
            description: "Physical Geography",
            units: 3
        },

        {
            code: "CSES 303",
            description: "Production of Social Studies Instructional Materials",
            units: 3
        },

        {
            code: "CSES 304",
            description: "Seminar in Social Studies",
            units: 3
        },

        {
            code: "CSES 305",
            description: "Research in Social Studies",
            units: 3
        }
    ],


    BSCRIM: [

        {
            code: "Crim 1",
            description: "Introduction to Criminology",
            units: 3
        },

        {
            code: "EC 1",
            description: "Reading Comprehension",
            units: 3
        },

        {
            code: "DEFTAC 1",
            description: "Fundamentals of Martial Arts",
            units: 2
        },

        {
            code: "LEA 1",
            description: "Law and Administration",
            units: 4
        },

        {
            code: "CLJ 1",
            description: "Introduction to Criminal Justice System",
            units: 3
        },

        {
            code: "DEFTAC 2",
            description: "Arms and Disarming Technique",
            units: 2
        },

        {
            code: "EC 2",
            description: "Basic Computer Software",
            units: 3
        },

        {
            code: "CLJ 2",
            description: "Human Rights Education",
            units: 3
        },

        {
            code: "Crim 2",
            description: "Theories of Crime Causation",
            units: 3
        },

        {
            code: "CDI 1",
            description: "Fundamentals of Investigation and Intelligence",
            units: 4
        },

        {
            code: "LEA 2",
            description: "Comparative Models in Policing",
            units: 3
        },

        {
            code: "DEFTAC 3",
            description: "First Aid and Water Safety",
            units: 2
        },

        {
            code: "CDI 2",
            description: "Specialized Crime Investigation / Legal Medicine",
            units: 3
        },

        {
            code: "CLJ 3",
            description: "Criminal Law Book 1",
            units: 3
        },

        {
            code: "Chem 1",
            description: "General Chemistry (Organic)",
            units: 3
        },

        {
            code: "Forensic 1",
            description: "Forensic Photography",
            units: 3
        },

        {
            code: "LEA 3",
            description: "Introduction to Industrial Security Concepts",
            units: 3
        },

        {
            code: "DEFTAC 4",
            description: "Marksmanship and Combat Shooting",
            units: 2
        },

        {
            code: "Crim 3",
            description: "Human Behavior and Victimology",
            units: 3
        },

        {
            code: "Crim 4",
            description: "Professional Conduct and Ethical Standards",
            units: 3
        },

        {
            code: "CLJ 4",
            description: "Criminal Law Book 2",
            units: 3
        },

        {
            code: "Forensic 2",
            description: "Personal Identification Techniques",
            units: 3
        },

        {
            code: "CDI 3",
            description: "Specialized Crime Investigation 2 with Simulation on Interrogation and Interview",
            units: 3
        },

        {
            code: "CA 1",
            description: "Institutional Corrections",
            units: 3
        },

        {
            code: "Forensic",
            description: "Forensic Chemistry and Toxicology",
            units: 5
        },

        {
            code: "CDI 4",
            description: "Traffic Management and Accident Investigation with Driving",
            units: 3
        },

        {
            code: "CA 2",
            description: "Non-Institutional Corrections",
            units: 3
        },

        {
            code: "Crim 5",
            description: "Juvenile Delinquency and Juvenile Justice System",
            units: 3
        },

        {
            code: "Crim 6",
            description: "Dispute Resolution and Crisis/Incidents Management",
            units: 3
        },

        {
            code: "CFLM",
            description: "Character Formation, Nationalism and Patriotism",
            units: 3
        },

        {
            code: "LEA 4",
            description: "Law Enforcement Operation and Planning with Crime Mapping",
            units: 3
        },

        {
            code: "CLJ 5",
            description: "Evidence",
            units: 3
        },

        {
            code: "CFLM 2",
            description: "Character Formation with Leadership, Decision Making, Management and Administration",
            units: 3
        },

        {
            code: "CDI 5",
            description: "Technical English 1 - Technical Report Writing and Presentation",
            units: 3
        },

        {
            code: "CDI 6",
            description: "Fire Protection and Arson Investigation",
            units: 3
        },

        {
            code: "CA 3",
            description: "Therapeutic Modalities",
            units: 3
        },

        {
            code: "Forensic 4",
            description: "Questioned Documents Examination",
            units: 3
        },

        {
            code: "Crim 7",
            description: "Criminological Research 1",
            units: 3
        },

        {
            code: "Forensic 5",
            description: "Lie Detection Techniques",
            units: 3
        },

        {
            code: "Crim 8",
            description: "Criminological Research 2",
            units: 3
        },

        {
            code: "CDI 7",
            description: "Vice and Drug Education and Control",
            units: 3
        },

        {
            code: "CLJ 6",
            description: "Criminal Procedure and Court Testimony",
            units: 3
        },

        {
            code: "Forensic 6",
            description: "Forensic Ballistics",
            units: 3
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
        document.getElementById(
            "enrollmentDate"
        );

    if (!dateInput.value) {

        const today =
            new Date();

        const year =
            today.getFullYear();

        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                today.getDate()
            ).padStart(2, "0");

        dateInput.value =
            `${year}-${month}-${day}`;
    }
}


/* =========================================================
   GET CURRENT SUBJECTS
========================================================= */

function getCurrentSubjects() {

    const program =
        document.getElementById(
            "program"
        ).value;

    let list = [
        ...subjects.COMMON
    ];

    if (
        program &&
        subjects[program]
    ) {

        list = [
            ...list,
            ...subjects[program]
        ];

    }

    return list;
}


/* =========================================================
   LOAD SUBJECT DROPDOWNS
========================================================= */

function loadSubjects() {

    const selects =
        document.querySelectorAll(
            ".subject-select"
        );

    const list =
        getCurrentSubjects();

    selects.forEach(
        select => {

            const oldValue =
                select.value;

            select.innerHTML =
                `
                <option value="">
                    Select Subject
                </option>

                <option value="__CUSTOM__">
                    + Add Custom Subject
                </option>
                `;

            list.forEach(
                subject => {

                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value =
                        JSON.stringify(
                            subject
                        );

                    option.textContent =
                        `${subject.code} — ${subject.description} (${subject.units} units)`;

                    select.appendChild(
                        option
                    );
                }
            );

            if (
                oldValue &&
                [...select.options]
                    .some(
                        o =>
                            o.value ===
                            oldValue
                    )
            ) {

                select.value =
                    oldValue;
            }

        }
    );
}


/* =========================================================
   ADD SUBJECT ROW
========================================================= */

function addSubjectRow(
    subjectData = null
) {

    const tbody =
        document.getElementById(
            "subjectRows"
        );

    const row =
        document.createElement(
            "tr"
        );

    row.className =
        "subject-row";


    row.innerHTML =
        `
        <td>

            <select
                class="subject-select"
                onchange="selectSubject(this)"
            >

                <option value="">
                    Select Subject
                </option>

            </select>

        </td>


        <td>

            <input
                type="text"
                class="subject-description"
                placeholder="Course Description"
            >

        </td>


        <td>

            <input
                type="text"
                class="subject-grade"
                placeholder="—"
            >

        </td>


        <td>

            <input
                type="number"
                class="subject-units"
                min="0"
                step="1"
                value="0"
                oninput="calculateTotalUnits()"
            >

        </td>


        <td style="text-align:center">

            <button
                type="button"
                class="btn btn-danger"
                onclick="removeSubjectRow(this)"
            >
                Remove
            </button>

        </td>
        `;


    tbody.appendChild(row);


    loadSubjects();


    if (subjectData) {

        const select =
            row.querySelector(
                ".subject-select"
            );

        const description =
            row.querySelector(
                ".subject-description"
            );

        const units =
            row.querySelector(
                ".subject-units"
            );

        select.value =
            JSON.stringify(
                subjectData
            );

        description.value =
            subjectData.description;

        units.value =
            subjectData.units;

    }


    calculateTotalUnits();
}


/* =========================================================
   SELECT SUBJECT
========================================================= */

function selectSubject(select) {

    const row =
        select.closest(
            ".subject-row"
        );

    if (
        select.value ===
        "__CUSTOM__"
    ) {

        const code =
            prompt(
                "Enter Course Code:"
            );

        if (!code) {

            select.value = "";

            return;
        }


        const description =
            prompt(
                "Enter Course Description:"
            );

        if (!description) {

            select.value = "";

            return;
        }


        const units =
            prompt(
                "Enter Units:",
                "3"
            );


        row.querySelector(
            ".subject-description"
        ).value =
            description;


        row.querySelector(
            ".subject-units"
        ).value =
            units || 0;


        /*
            Store custom code
            on row itself.
        */

        row.dataset.customCode =
            code;


        calculateTotalUnits();

        return;
    }


    if (!select.value) {

        row.querySelector(
            ".subject-description"
        ).value = "";

        row.querySelector(
            ".subject-units"
        ).value = 0;

        delete row.dataset.customCode;

        calculateTotalUnits();

        return;
    }


    try {

        const subject =
            JSON.parse(
                select.value
            );


        row.querySelector(
            ".subject-description"
        ).value =
            subject.description;


        row.querySelector(
            ".subject-units"
        ).value =
            subject.units;


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
        document.querySelectorAll(
            ".subject-row"
        );


    if (rows.length <= 1) {

        alert(
            "At least one subject row is required."
        );

        return;
    }


    button
        .closest(
            ".subject-row"
        )
        .remove();


    calculateTotalUnits();
}


/* =========================================================
   TOTAL UNITS
========================================================= */

function calculateTotalUnits() {

    const unitsInputs =
        document.querySelectorAll(
            ".subject-units"
        );

    let total = 0;


    unitsInputs.forEach(
        input => {

            const value =
                parseFloat(
                    input.value
                ) || 0;

            total += value;

        }
    );


    document.getElementById(
        "totalUnitsInput"
    ).textContent =
        total;
}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(
    dateString
) {

    if (!dateString) {

        return "________________";
    }


    const date =
        new Date(
            dateString +
            "T00:00:00"
        );


    return date.toLocaleDateString(
        "en-US",
        {
            month: "long",
            day: "numeric",
            year: "numeric"
        }
    );
}


/* =========================================================
   GENERATE CERTIFICATE
========================================================= */

function generateCertificate() {

    const studentName =
        document.getElementById(
            "studentName"
        ).value.trim();

    const studentId =
        document.getElementById(
            "studentId"
        ).value.trim();

    const program =
        document.getElementById(
            "program"
        ).value;

    const yearLevel =
        document.getElementById(
            "yearLevel"
        ).value;

    const trimester =
        document.getElementById(
            "trimester"
        ).value;

    const academicYear =
        document.getElementById(
            "academicYear"
        ).value.trim();

    const enrollmentDate =
        document.getElementById(
            "enrollmentDate"
        ).value;

    const status =
        document.getElementById(
            "status"
        ).value;


    /* ==========================================
       VALIDATION
    ========================================== */

    if (!studentName) {

        alert(
            "Please enter the student's name."
        );

        return;
    }


    if (!studentId) {

        alert(
            "Please enter the Student ID."
        );

        return;
    }


    if (!program) {

        alert(
            "Please select a Course / Program."
        );

        return;
    }


    if (!yearLevel) {

        alert(
            "Please select the Year Level."
        );

        return;
    }


    if (!trimester) {

        alert(
            "Please select the Trimester."
        );

        return;
    }


    /* ==========================================
       BASIC INFORMATION
    ========================================== */

    document.getElementById(
        "previewStudentName"
    ).textContent =
        studentName;


    document.getElementById(
        "previewName2"
    ).textContent =
        studentName;


    document.getElementById(
        "previewStudentId"
    ).textContent =
        studentId;


    document.getElementById(
        "previewProgram"
    ).textContent =
        programNames[program];


    document.getElementById(
        "previewCourse"
    ).textContent =
        getShortProgram(program);


    document.getElementById(
        "previewYearLevel"
    ).textContent =
        yearLevel;


    document.getElementById(
        "previewTrimester"
    ).textContent =
        `${trimester}, AY ${academicYear}`;


    document.getElementById(
        "previewTerm"
    ).textContent =
        `${trimester}, AY ${academicYear}`;


    document.getElementById(
        "previewAcademicYear"
    ).textContent =
        academicYear;


    document.getElementById(
        "previewEnrollmentDate"
    ).textContent =
        formatDate(
            enrollmentDate
        );


    document.getElementById(
        "previewStatus"
    ).textContent =
        status;


    /* ==========================================
       SUBJECTS
    ========================================== */

    const rows =
        document.querySelectorAll(
            ".subject-row"
        );


    const previewBody =
        document.getElementById(
            "previewSubjects"
        );


    previewBody.innerHTML = "";


    let totalUnits = 0;


    rows.forEach(
        row => {

            const select =
                row.querySelector(
                    ".subject-select"
                );

            const description =
                row.querySelector(
                    ".subject-description"
                );

            const grade =
                row.querySelector(
                    ".subject-grade"
                );

            const units =
                row.querySelector(
                    ".subject-units"
                );


            if (
                !description.value.trim() &&
                (!select.value ||
                    select.value === "__CUSTOM__")
            ) {

                return;
            }


            let code = "";


            if (
                row.dataset.customCode
            ) {

                code =
                    row.dataset.customCode;

            } else if (
                select.value &&
                select.value !==
                    "__CUSTOM__"
            ) {

                try {

                    const subject =
                        JSON.parse(
                            select.value
                        );

                    code =
                        subject.code;

                } catch (error) {

                    code = "";

                }

            }


            const unitValue =
                parseFloat(
                    units.value
                ) || 0;


            totalUnits +=
                unitValue;


            const tr =
                document.createElement(
                    "tr"
                );


            tr.innerHTML =
                `
                <td>
                    ${escapeHTML(code)}
                </td>

                <td>
                    ${escapeHTML(
                        description.value
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        grade.value || "—"
                    )}
                </td>

                <td>
                    ${unitValue}
                </td>
                `;


            previewBody.appendChild(
                tr
            );

        }
    );


    document.getElementById(
        "previewTotalUnits"
    ).textContent =
        totalUnits;


    /* ==========================================
       ISSUED DATE
    ========================================== */

    document.getElementById(
        "previewIssuedDate"
    ).textContent =
        formatDate(
            new Date()
                .toISOString()
                .split("T")[0]
        );


    /* ==========================================
       OPEN MODAL
    ========================================== */

    document.getElementById(
        "certificateModal"
    ).classList.add(
        "active"
    );

}


/* =========================================================
   SHORT PROGRAM
========================================================= */

function getShortProgram(
    program
) {

    const shortNames = {

        "BSIT":
            "BSIT",

        "BSCRIM":
            "BS Crim",

        "BSA":
            "BSA",

        "BSBA-FM":
            "BSBA-FM",

        "BSBA-HRDM":
            "BSBA-HRDM",

        "BSBA-MM":
            "BSBA-MM",

        "BEED":
            "BEED",

        "BSED-ENGLISH":
            "BSED-English",

        "BSED-MATH":
            "BSED-Mathematics",

        "BSED-SOCIAL":
            "BSED-Social Studies"

    };


    return shortNames[program]
        || program;
}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
    value
) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* =========================================================
   CLOSE CERTIFICATE
========================================================= */

function closeCertificate() {

    document.getElementById(
        "certificateModal"
    ).classList.remove(
        "active"
    );
}


/* =========================================================
   PRINT
========================================================= */

function printCertificate() {

    window.print();

}


/* =========================================================
   CLEAR FORM
========================================================= */

function clearForm() {

    const confirmation =
        confirm(
            "Clear all enrollment information and subjects?"
        );


    if (!confirmation) {

        return;
    }


    document.getElementById(
        "studentName"
    ).value = "";


    document.getElementById(
        "studentId"
    ).value = "";


    document.getElementById(
        "program"
    ).value = "";


    document.getElementById(
        "yearLevel"
    ).value = "";


    document.getElementById(
        "trimester"
    ).value = "";


    document.getElementById(
        "academicYear"
    ).value =
        "2026–2027";


    document.getElementById(
        "status"
    ).value =
        "OFFICIALLY ENROLLED";


    setToday();


    document.getElementById(
        "subjectRows"
    ).innerHTML = "";


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