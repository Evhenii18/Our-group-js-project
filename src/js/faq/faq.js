// faq.js

document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the class 'question-box'
  const questionBoxes = document.querySelectorAll('.question-box');
  
  // Event listener for each question box
  questionBoxes.forEach(questionBox => {
    questionBox.addEventListener('click', () => {
      const questionElement = questionBox.parentElement; // Get the parent element (.question-element)
      const answer = questionElement.querySelector('.answer'); // Get the associated answer element
      
      // Toggle the visibility of the clicked question's answer
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      questionElement.classList.toggle('open'); // Add/remove the open class for styling
      
      // Close other open elements
      questionBoxes.forEach(otherBox => {
        const otherElement = otherBox.parentElement;
        if (otherElement !== questionElement) {
          otherElement.classList.remove('open');
          otherElement.querySelector('.answer').style.display = 'none';
        }
      });
    });
  });

  // Automatically expand the first question on page load
  const firstQuestion = document.querySelector('.question-element'); // Select the first question element
  if (firstQuestion) {
    const firstAnswer = firstQuestion.querySelector('.answer');
    firstAnswer.style.display = 'block'; // Make the answer visible
    firstQuestion.classList.add('open'); // Apply the open class
  }
  
});



  // document.querySelectorAll('.question').forEach(question => {
  //   question.addEventListener('click', () => {
  //     const parent = question.parentElement; // Отримуємо батьківський елемент li
  //     const answer = question.nextElementSibling; // Відповідний блок відповіді
  
  //     // Закриваємо всі інші відкриті питання
  //     document.querySelectorAll('.question-element').forEach(item => {
  //       if (item !== parent) {
  //         item.classList.remove('open');
  //         item.querySelector('.answer').style.display = 'none';
  //       }
  //     });
  
  //     // Відкриваємо/закриваємо поточне запитання
  //     if (parent.classList.contains('open')) {
  //       parent.classList.remove('open');
  //       answer.style.display = 'none';
  //     } else {
  //       parent.classList.add('open');
  //       answer.style.display = 'block';
  //     }
  //   });
  // });