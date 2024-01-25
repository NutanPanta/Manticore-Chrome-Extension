// Function to check if the inner text is one of the specified values
const isTargetButton = (element) => {
  const targetText = element.innerText.trim();
  return ['Unsnooze', 'In Progress', 'Start'].includes(targetText);
};

// Function to delete availability
const deleteAvaibility = () => {
  const pathExpression =
    '//*[@id="modalDefaultId"]/div[2]/div/div[2]/div/div[2]';
  const result = document.evaluate(
    pathExpression,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  const selectedElement = result.singleNodeValue;

  if (selectedElement) {
    // Check the text content of the first div
    const firstDivText = selectedElement
      .querySelector('div:first-child')
      .textContent.trim();

    if (
      firstDivText === 'Upcoming availability blocks over the next 24 hours.'
    ) {
      // Select all divs with the specified class
      const divsWithClass = selectedElement.querySelectorAll(
        'div.flex.items-center.gap-x-4'
      );

      // Calculate the number of divs to remove (all except the last 6)
      const divsToRemoveCount = Math.max(0, divsWithClass.length - 6);

      // Remove all divs except the last 6
      for (let i = 0; i < divsToRemoveCount; i++) {
        divsWithClass[i].remove();
      }

      console.log('Deleted Every availability except for the last 6');
    }
  }
};

// Add a click event listener to the document
document.addEventListener('click', (event) => {
  // Check if the clicked element is a button with inner text "Unsnooze":wq
  if (isTargetButton(event.target)) {
    event.preventDefault();
    // Call the deleteAvaibility function
    deleteAvaibility();
  }
});
