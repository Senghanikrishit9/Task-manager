const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@gmail.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@gmail.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 3,
    firstName: "Aarav",
    email: "employee3@gmail.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@gmail.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@gmail.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 6,
    firstName: "Rohan",
    email: "employee6@gmail.com",
    password: "123",
    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 4,
      failed: 1
    }
  },
  {
    id: 7,
    firstName: "Kavya",
    email: "employee7@gmail.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 5,
      failed: 0
    }
  },
  {
    id: 8,
    firstName: "Arjun",
    email: "employee8@gmail.com",
    password: "123",
    taskNumber: {
      active: 4,
      newTask: 2,
      completed: 3,
      failed: 1
    }
  },
  {
    id: 9,
    firstName: "Sneha",
    email: "employee9@gmail.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 6,
      failed: 0
    }
  },
  {
    id: 10,
    firstName: "Aditya",
    email: "employee10@gmail.com",
    password: "123",
    taskNumber: {
      active: 5,
      newTask: 3,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 11,
    firstName: "Ishita",
    email: "employee11@gmail.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 4,
      failed: 2
    }
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
