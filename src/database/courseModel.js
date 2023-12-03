// Updated courseModel
const courseModel = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      dueDate: 'In Next 8 Weeks',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content: 'Overview of React Native, setting up your development environment.',
          
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content: 'Creating a simple mobile app using React Native components.',
          
        },
        {
            week: 3,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },
        {
            week: 4,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },
        {
            week: 5,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },
        {
            week: 6,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },
        {
            week: 7,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },
        {
            week: 8,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },
    ],
      students: [
        {
          id: 101,
          name: 'Alice Johnson',
          email: 'alice@example.com',
          courses: [1]  
        },
        {
          id: 102,
          name: 'Bob Smith',
          email: 'bob@example.com',
          courses: [1,2]
        },
        
        
      ],
    },
    {
      id: 2,
      name: 'Advanced React Development',
      instructor: 'Jane Smith',
      description: 'Deepen your knowledge in React and explore advanced concepts in front-end development.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      dueDate: 'In Next 8 Weeks',
      prerequisites: ['Completion of Introduction to React Native', 'Intermediate JavaScript skills'],
      syllabus: [
        {
          week: 1,
          topic: 'Advanced React Concepts',
          content: 'Diving into advanced React concepts like Hooks, Context, and Render Props.',
          
          
        },
        {
          week: 2,
          topic: 'State Management with Redux',
          content: 'Implementing state management in large-scale applications using Redux.',
          
        },
        {
            week: 3,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },
          {
            week: 4,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 5,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 6,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 7,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 8,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 9,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 10,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },
      ],
      students: [
        {
          id: 201,
          name: 'Eleanor Davis',
          email: 'eleanor@example.com',
          courses: [1,2]
        },
        {
          id: 202,
          name: 'Felix Brown',
          email: 'felix@example.com',
          courses: [1]
        },
        
      ],
        
    },
    {
      id: 3,
      name: 'Advanced node Development',
      instructor: 'Jane Smith',
      description: 'Deepen your knowledge in React and explore advanced concepts in back-end development.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      dueDate: 'In Next 8 Weeks',
      prerequisites: ['Completion of Introduction to React Native', 'Intermediate JavaScript skills'],
      syllabus: [
        {
          week: 1,
          topic: 'Advanced React Concepts',
          content: 'Diving into advanced React concepts like Hooks, Context, and Render Props.',
          
          
        },
        {
          week: 2,
          topic: 'State Management with Redux',
          content: 'Implementing state management in large-scale applications using Redux.',
          
        },
        {
            week: 3,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },
          {
            week: 4,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 5,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 6,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 7,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 8,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 9,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 10,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },
      ],
      students: [
        {
          id: 205,
          name: 'Wilsman Perry',
          email: 'wilsman@example.com',
          courses: [1,2,3]
        },
        {
          id: 206,
          name: 'Johny James',
          email: 'johny@example.com',
          courses: [1]
        },
        
      ],
        
    },
    {
      id: 4,
      name: 'Android Development',
      instructor: 'Jimmy James',
      description: 'Deepen your knowledge in Android and explore advanced concepts in android development.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      dueDate: 'In Next 8 Weeks',
      prerequisites: ['Completion of Introduction to React Native', 'Intermediate JavaScript skills'],
      syllabus: [
        {
          week: 1,
          topic: 'Advanced React Concepts',
          content: 'Diving into advanced React concepts like Hooks, Context, and Render Props.',
          
          
        },
        {
          week: 2,
          topic: 'State Management with Redux',
          content: 'Implementing state management in large-scale applications using Redux.',
          
        },
        {
            week: 3,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },
          {
            week: 4,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 5,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 6,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 7,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 8,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 9,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },{
            week: 10,
            topic: 'Dummy text',
            content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
            
          },
      ],
      students: [
        {
          id: 204,
          name: 'Mavis David',
          email: 'mavis@example.com',
          courses: [1,2]
        },
        {
          id: 203,
          name: 'Tom Brown',
          email: 'tom@example.com',
          courses: [1]
        },
        
      ],
        
    },
    // Additional courses...
  ];
  
  export default courseModel;
  