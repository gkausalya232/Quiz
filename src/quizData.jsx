
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const quizData = [
  {
    id: 1,
    questionText: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system",
      "A styling framework"
    ],
    answer: 0  // Index of the correct answer in the options array
  },
  {
    id: 2,
    questionText: "What is JSX?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON Syntax Extension",
      "JavaScript Extension"
    ],
    answer: 0
  },
  {
    id: 3,
    questionText: "What are props in React?",
    options: [
      "Properties that are passed to a component",
      "Methods to update state",
      "HTML elements",
      "CSS styles"
    ],
    answer: 0
  },
  {
    id: 4,
    questionText: "What is state in React?",
    options: [
      "An object that is managed within a component",
      "A global variable",
      "A function to render elements",
      "An external library"
    ],
    answer: 0
  },
  {
    id: 5,
    questionText: "What lifecycle method is used for fetching data in React?",
    options: [
      "componentDidMount",
      "componentWillMount",
      "componentDidUpdate",
      "componentWillReceiveProps"
    ],
    answer: 0
  },
  {
    id: 6,
    questionText: "What is the purpose of shouldComponentUpdate() method in React?",
    options: [
      "To let React know if a component's output is not affected by the current change in state or props",
      "To update the state of a component",
      "To update the props of a component",
      "To check if the component will unmount"
    ],
    answer: 0
  },
  {
    id: 7,
    questionText: "How can you update the state of a component?",
    options: [
      "Using this.setState()",
      "Direct assignment like this.state = {}",
      "By calling forceUpdate()",
      "State cannot be updated in React"
    ],
    answer: 0
  },
  {
    id: 8,
    questionText: "What is the purpose of componentDidMount() method in React?",
    options: [
      "To perform any DOM operations or interact with APIs after the component has been mounted",
      "To initialize state of the component",
      "To update the state of the component",
      "To receive props from the parent component"
    ],
    answer: 0
  },
  {
    id: 9,
    questionText: "What is the virtual DOM (VDOM) in React?",
    options: [
      "A lightweight copy of the actual DOM",
      "A feature to render components without JSX",
      "A built-in DOM manipulation library in React",
      "A replacement for the real DOM"
    ],
    answer: 0
  },
  {
    id: 10,
    questionText: "What is the purpose of key prop in React lists?",
    options: [
      "To give a unique identity to each child in a list",
      "To style each child element in a list",
      "To create nested lists",
      "To create event handlers for list items"
    ],
    answer: 0
  }
];

export default quizData;
