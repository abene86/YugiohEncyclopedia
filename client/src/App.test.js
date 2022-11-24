import { getByTestId, getQueriesForElement, render, screen } from '@testing-library/react';
import DisplayCardInformation from './DisplayCardInformation';
import DisplayCardImage from './CardImage';

test('Test prop that is based is not processed correctly', () => {
  const name=""
  const {container}= render(
    <DisplayCardInformation name={name}/>
  );
  // eslint-disable-next-line jest/valid-expect
 expect(container.textContent).toBe("\"Hello\"");
});

test('Test content div is not empty', () => {
  const name="Blue-Eyes White Dragon"
  const {container}= render(
  <DisplayCardImage name={name} height={100}/>
  );
  // eslint-disable-next-line jest/valid-expect
 expect(container).not.toBeEmptyDOMElement()

});