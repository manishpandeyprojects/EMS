const employees = [
  {
    id: 1,
    firstname: "Arjun",
    email: "arjun@app.com",
    password: "123",
    taskLists: [
      {
        id: 101,
        title: "Prepare Project Documentation",
        description:
          "Complete the project documentation for the new feature rollout.",
        category: "Documentation",
        active: true,
        failed: false,
        completed: false,
        newTask: false,
        date: "01 Jan 2025",
        priority: "High",
        bgColor: "blue",
      },
      {
        id: 102,
        title: "Resolve Login Bugs",
        description:
          "Fix critical bugs identified in the login module during testing.",
        category: "Development",
        active: false,
        failed: false,
        completed: true,
        newTask: false,
        date: "30 Dec 2024",
        priority: "Medium",
        bgColor: "yellow",
      },
    ],
    taskCount: {
      active: 1,
      failed: 0,
      completed: 1,
      newTask: 0,
    },
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskLists: [
      {
        id: 201,
        title: "Homepage Layout Design",
        description:
          "Create a visually appealing and user-friendly homepage layout.",
        category: "Design",
        active: true,
        failed: false,
        completed: false,
        newTask: false,
        date: "02 Jan 2025",
        priority: "High",
        bgColor: "red",
      },
      {
        id: 202,
        title: "Payment Gateway Testing",
        description:
          "Ensure the payment gateway is secure and processes transactions correctly.",
        category: "Testing",
        active: false,
        failed: true,
        completed: false,
        newTask: false,
        date: "29 Dec 2024",
        priority: "High",
        bgColor: "green",
      },
      {
        id: 203,
        title: "Social Media Strategy",
        description:
          "Prepare a comprehensive strategy for social media engagement.",
        category: "Marketing",
        active: false,
        failed: false,
        completed: true,
        newTask: true,
        date: "31 Dec 2024",
        priority: "Medium",
        bgColor: "blue",
      },
    ],
    taskCount: {
      active: 1,
      failed: 1,
      completed: 1,
      newTask: 0,
    },
  },
  {
    id: 3,
    firstname: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskLists: [
      {
        id: 301,
        title: "Write Blog on Culture",
        description:
          "Write an engaging blog post on our company culture and values.",
        category: "Content",
        active: false,
        failed: false,
        completed: true,
        newTask: false,
        date: "28 Dec 2024",
        priority: "Low",
        bgColor: "yellow",
      },
      {
        id: 302,
        title: "Client Presentation Preparation",
        description:
          "Design a presentation highlighting project achievements for the client meeting.",
        category: "Presentation",
        active: true,
        failed: false,
        completed: false,
        newTask: false,
        date: "03 Jan 2025",
        priority: "Medium",
        bgColor: "red",
      },
    ],
    taskCount: {
      active: 1,
      failed: 0,
      completed: 1,
      newTask: 0,
    },
  },
  {
    id: 4,
    firstname: "Anjali",
    email: "employee4@example.com",
    password: "123",
    taskLists: [
      {
        id: 401,
        title: "Analyze Sales Data",
        description:
          "Review and analyze the quarterly sales data for trends and insights.",
        category: "Analytics",
        active: true,
        failed: false,
        completed: false,
        newTask: false,
        date: "01 Jan 2025",
        priority: "High",
        bgColor: "green",
      },
      {
        id: 402,
        title: "Plan Team Building Event",
        description:
          "Organize a fun and interactive team-building event for the department.",
        category: "HR",
        active: false,
        failed: false,
        completed: true,
        newTask: false,
        date: "27 Dec 2024",
        priority: "Medium",
        bgColor: "blue",
      },
    ],
    taskCount: {
      active: 1,
      failed: 0,
      completed: 1,
      newTask: 0,
    },
  },
  {
    id: 5,
    firstname: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskLists: [
      {
        id: 501,
        title: "Server Configuration Updates",
        description:
          "Update server configurations to improve performance and security.",
        category: "IT",
        active: true,
        failed: false,
        completed: false,
        newTask: false,
        date: "02 Jan 2025",
        priority: "High",
        bgColor: "yellow",
      },
      {
        id: 502,
        title: "Conduct Market Analysis",
        description:
          "Research and analyze market trends for the new product launch.",
        category: "Marketing",
        active: false,
        failed: true,
        completed: false,
        newTask: false,
        date: "29 Dec 2024",
        priority: "Medium",
        bgColor: "red",
      },
    ],
    taskCount: {
      active: 1,
      failed: 1,
      completed: 0,
      newTask: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
