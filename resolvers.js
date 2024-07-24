
// Example data (in-memory)
const employeesData = [
  { id: '1', name: 'John Doe', department: 'IT', email: 'john.doe@example.com', phone: '123-456-7890' },
  { id: '2', name: 'Jane Smith', department: 'HR', email: 'jane.smith@example.com', phone: '987-654-3210' },
  // Add more employees as needed
];
const resolvers = {
    hello: () => 'Hello, world!',
    employees: () => employeesData,
    employee: ({ id }) => employeesData.find(employee => employee.id === id),
  };
  
  module.exports = resolvers;
  