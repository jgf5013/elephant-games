import * as elementsJson from './periodic-table.mock-data.json';

import { Element, ElementQuestion } from '../models';
import { AnswerChecker, GamePrompt } from "@elephant-games/game";
import { Text } from 'react-native'; // TODO: This should be framework (react vs react-native)-agnostic. Ideally, this should just be a .ts file and UI stuff should be in another place.

import { TABLE_COLUMNS, TABLE_ROWS } from '../constants';

// import { listElements } from '../../graphql/queries';
// import { createElement as mutationCreateElement, deleteElement as mutationDeleteElement } from '../../graphql/mutations';



// const addElement = async (tableElement: any): Promise<any> => {
//   const response = await API.graphql(graphqlOperation(mutationCreateElement, { input: tableElement }));
//   return response
// }

// const deleteAllElement = async (elements: any[]) => {
//   elements.forEach(async (e: any) => {
//     await API.graphql(graphqlOperation(mutationDeleteElement, { input: {id: e.id, _version: e._version } }));
//   });
// }


const elementListToElementMatrix = (elements: Element[]): ({atomicElement: Element} | undefined)[] => {
  const table: ({atomicElement: Element} | undefined)[] = new Array(TABLE_COLUMNS * TABLE_ROWS).fill(undefined);
  elements.forEach((atomicElement) => {
      table[(TABLE_COLUMNS * ((atomicElement.ypos ?? 0) - 1)) + (atomicElement.xpos ?? 0) - 1] = {
          atomicElement
      };
  });
  return table;
};


const fetchElements = async (): Promise<ElementQuestion[]> => {
    // const variables = { limit: 1000 };
    // const apiData: any = await API.graphql(graphqlOperation(listElements, variables));
    // const nonDeletedElements = apiData.data.listElements.items.filter((e: any) => !e._deleted);
    // return nonDeletedElements;
  return new Promise<any[]>((resolve, reject) => {
    resolve(elementsJson.data.listElements.items);
  });
}


function isAlreadySaved(savedElements: any[], e: any): boolean {
  return savedElements.map(se => se.name).indexOf(e.name) !== -1;
}

const isAnswerCorrect: AnswerChecker = (QuizState, answer) => (QuizState.quizItem.key === answer.toString());



// const fetchUnresolvedElements = (resolvedElements: any[]) => {
//   // only get the elements which we haven't yet save (loop through all elements and check if it's in saved)
//   elementsJson.elements.filter(elementToCheck => !isAlreadySaved(resolvedElements, elementToCheck))
//   .forEach((newElement) => {
//       addElement(newElement);
//   });
// }


const getGamePrompt: GamePrompt = (options) => {
    return <Text>{options.quiz.quizItem ? options.quiz.quizItem[options.quiz.promptCategory] : null}</Text>;
};

export { isAlreadySaved, fetchElements, isAnswerCorrect, elementListToElementMatrix, getGamePrompt };