const employees = [
  {
    id: 1,
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-06-15",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile navigation menu issue.",
        taskDate: "2026-06-12",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect login form with backend API.",
        taskDate: "2026-06-10",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Build employee dashboard with cards and charts.",
        taskDate: "2026-06-15",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Search Feature",
        taskDescription: "Implement search functionality in task list.",
        taskDate: "2026-06-16",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Routing",
        taskDescription: "Configure React Router in application.",
        taskDate: "2026-06-11",
        category: "React"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Employee Form",
        taskDescription: "Develop employee registration form.",
        taskDate: "2026-06-15",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Validate Inputs",
        taskDescription: "Add validation to all form fields.",
        taskDate: "2026-06-13",
        category: "Validation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Images",
        taskDescription: "Reduce image sizes for better performance.",
        taskDate: "2026-06-09",
        category: "Performance"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Profile Page",
        taskDescription: "Create employee profile management page.",
        taskDate: "2026-06-15",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode Support",
        taskDescription: "Implement dark mode throughout app.",
        taskDate: "2026-06-18",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Footer Component",
        taskDescription: "Create reusable footer component.",
        taskDate: "2026-06-12",
        category: "Component"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup Authentication",
        taskDescription: "Implement login and logout functionality.",
        taskDate: "2026-06-15",
        category: "Authentication"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Context API",
        taskDescription: "Manage global state using Context API.",
        taskDate: "2026-06-14",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Project",
        taskDescription: "Deploy application to Netlify.",
        taskDate: "2026-06-08",
        category: "Deployment"
      }
    ]
  }
];

 const admin = {
  id: 1,
  email: "admin@gmail.com",
  password: "123"
};


export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
 const employees  = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))

 return {employees,admin} 
}
