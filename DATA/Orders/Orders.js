import DiabloGirl from '../../assets/Drawings/DiabloGirl.jpg';
import FireGirl from '../../assets/Drawings/FireGirl.jpg';
import ForestDrawing from '../../assets/Drawings/Forest.jpeg';


export const ORDERS = [
    {
      id: "1",
      date: Date.now(),
      total: 1800,
      items: [
        {
            id:3,
            category: 3,
            name:'Fire Girl',
            description: 'Watercolor Drawing',
            format:'.jpg',
            image: FireGirl,
            price: 1000,
        },
        {
            id: 4,
            category: 3,
            name:'Forest Drawing',
            description:'Watercolor Drawing',
            format:'.jpeg',
            image: ForestDrawing,
            price: 800,
        },
      ],
    },
    {
      id: "2",
      date: Date.now(),
      total: 1400,
      items: [
          {
            id: 2,
            category: 2,
            name: 'Diablo Girl',
            description: 'Tempera Drawing',
            format: '.jpg',
            image: DiabloGirl,
            price: 1400,
          }
      ]
    }
  ];