export const data = [
  {
    id: 1,
    title: 'list 1',
    cards: [
      {
        id: 1,
        title: 'card 1'
      },
      {
        id: 2,
        title: 'card 2'
      }
    ]
  },
  {
    id: 2,
    title: 'list 2',
    cards: [
      {
        id: 1,
        title: 'card 1-2'
      },
      {
        id: 2,
        title: 'card 2-2'
      }
    ]
  }
]


// move card item in same list
// find list
const clonedData = [...data]
const listItem = clonedData.find(item => item.id === 1);

// find card
const source = 1;
const destination = 2;
const sourceIndex = listItem.cards.findIndex(item => item.id === source);
const destinationIndex = listItem.cards.findIndex(item => item.id === destination);

const cardSource = listItem.cards.splice(sourceIndex, 1); // delete item
listItem.cards.splice(destinationIndex, 0, cardSource[0]); // insert item into index
console.log('cardSource: ', { sourceIndex, destinationIndex, cardSource, listItem })
