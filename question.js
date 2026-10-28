const QUIZ_DATA = [
  {
    id: "web-dev",
    title: "Programming & Web Development",
    description: "Test your core knowledge of HTML, CSS, JavaScript, and computer science fundamentals.",
    timeLimit: 180, // 3 minutes in seconds
    questions: [
      {
        question: "Which HTML5 element is semantically best for the primary navigation links of a website?",
        options: ["<navigation>", "<nav>", "<menu>", "<header>"],
        answer: 1,
        explanation: "The <nav> element represents a section of a page whose purpose is to provide navigation links."
      },
      {
        question: "What is the output of `typeof null` in JavaScript?",
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        answer: 2,
        explanation: "Due to a legacy bug in the original JavaScript implementation, `typeof null` returns 'object'."
      },
      {
        question: "Which array method creates a new array populated with the results of calling a provided function on every element?",
        options: ["forEach()", "filter()", "map()", "reduce()"],
        answer: 2,
        explanation: "Array.prototype.map() transforms every element and returns a new array of the same length."
      },
      {
        question: "In CSS Flexbox, which property aligns items along the main axis?",
        options: ["align-items", "justify-content", "flex-direction", "align-content"],
        answer: 1,
        explanation: "`justify-content` defines alignment along the main axis, whereas `align-items` operates on the cross axis."
      },
      {
        question: "What does the '=== ' operator check in JavaScript?",
        options: ["Value only", "Type only", "Both value and type", "Memory reference only"],
        answer: 2,
        explanation: "Strict equality (===) checks whether its two operands are equal in both value and data type without type coercion."
      },
      {
        question: "What is the worst-case time complexity of binary search on a sorted array of size n?",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
        answer: 2,
        explanation: "Binary search halves the search space on each step, resulting in logarithmic O(log n) time complexity."
      },
      {
        question: "Which Web API allows storing key-value pairs in the browser that persist even after the browser window is closed?",
        options: ["sessionStorage", "localStorage", "cookies", "CacheControl"],
        answer: 1,
        explanation: "`localStorage` persists data across browser sessions until explicitly cleared."
      },
      {
        question: "What does a HTTP status code of 404 indicate?",
        options: ["Internal Server Error", "Unauthorized Access", "Resource Not Found", "Bad Request"],
        answer: 2,
        explanation: "404 Not Found indicates that the server cannot find the requested resource."
      },
      {
        question: "Which keyword declares a block-scoped variable in JavaScript that can be reassigned?",
        options: ["var", "const", "let", "static"],
        answer: 2,
        explanation: "`let` is block-scoped and permits reassignment, unlike `const` (cannot be reassigned) and `var` (function-scoped)."
      },
      {
        question: "What is the purpose of `event.preventDefault()` in DOM event handling?",
        options: [
          "Stops the event from bubbling up the DOM tree",
          "Cancels the browser's default action associated with the event",
          "Removes the event listener after one execution",
          "Pauses JavaScript execution"
        ],
        answer: 1,
        explanation: "`preventDefault()` stops default browser actions, such as refreshing the page when a <form> is submitted."
      }
    ]
  },
  {
    id: "general-knowledge",
    title: "Science & General Knowledge",
    description: "Challenge yourself with questions covering space, physics, geography, and modern computing history.",
    timeLimit: 180,
    questions: [
      {
        question: "Which planet in our solar system has the most confirmed moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: 1,
        explanation: "Saturn leads the solar system with over 140 confirmed moons, surpassing Jupiter."
      },
      {
        question: "What is the chemical symbol for Gold?",
        options: ["Gd", "Go", "Ag", "Au"],
        answer: 3,
        explanation: "Au comes from the Latin word for gold, 'aurum'."
      },
      {
        question: "Who is widely credited with inventing the World Wide Web in 1989?",
        options: ["Alan Turing", "Vint Cerf", "Tim Berners-Lee", "Dennis Ritchie"],
        answer: 2,
        explanation: "Sir Tim Berners-Lee invented the World Wide Web while working at CERN in 1989."
      },
      {
        question: "Which atmospheric layer contains the ozone layer that absorbs most of the Sun's ultraviolet radiation?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        answer: 1,
        explanation: "The ozone layer is mainly found in the lower portion of the stratosphere, roughly 15 to 35 km above Earth."
      },
      {
        question: "What is the SI unit of electrical resistance?",
        options: ["Volt", "Ampere", "Watt", "Ohm"],
        answer: 3,
        explanation: "The Ohm (Ω) is the SI derived unit of electrical resistance, named after German physicist Georg Simon Ohm."
      },
      {
        question: "Which gas makes up approximately 78% of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        answer: 2,
        explanation: "Earth's atmosphere is composed of about 78% nitrogen, 21% oxygen, and 1% other gases."
      },
      {
        question: "In which Indian state is the Satish Dhawan Space Centre (Sriharikota) located?",
        options: ["Tamil Nadu", "Andhra Pradesh", "Odisha", "Kerala"],
        answer: 1,
        explanation: "Sriharikota is a barrier island off the Bay of Bengal coast located in the Tirupati district of Andhra Pradesh."
      },
      {
        question: "Which blood type is known as the universal red blood cell donor?",
        options: ["AB+", "O+", "O-", "A-"],
        answer: 2,
        explanation: "O-negative red blood cells lack A, B, and Rh antigens, allowing them to be safely transfused to almost any patient."
      },
      {
        question: "Light travels from the Sun to Earth in approximately how much time?",
        options: ["8 seconds", "8 minutes 20 seconds", "1 hour", "24 minutes"],
        answer: 1,
        explanation: "At ~300,000 km/s across 149.6 million km, sunlight takes roughly 499 seconds (8 minutes and 19 seconds) to reach Earth."
      },
      {
        question: "Which protocol is primarily responsible for translating domain names (like iiti.ac.in) into IP addresses?",
        options: ["HTTP", "DHCP", "DNS", "FTP"],
        answer: 2,
        explanation: "The Domain Name System (DNS) acts as the phonebook of the Internet, resolving human-readable hostnames into IP addresses."
      }
    ]
  }
];