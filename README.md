# __Quizto__

Quizto is a site built for restless minds who always want to discover more fun facts about human knowledge, going through diverse topics such as science, history, geography and pop culture. 

The quiz is intended to have fun questions but is also challenging, being composed of ten questions and four possible answers, presenting feedback with the user score at the end of the quiz. Quizto is a fully responsive JavaScript website, easily navigated and user-friendly.

![Responsice Mockup](/assets/images/ResponsiceMockup.png)

## Features

### Existing Features

- __The Quizto Land Page__
 
  - The Land Page is made such as the logo to catch the user's eyes and persuade them with a instigate phrase.

![Land Page](/assets/images/landPage.png)

- __The Quizto logo and Heading__
  
  - It is displayed on the top of the page and was designed to catch the user's eyes and made a remarkable brand name.

![Quiz Logo and Heading](/assets/images/LogoHeading.png)

- __The Question and Current Question Counter__
  
  - The question section is where the user will be able to see the question, that is picked randomly among the questions list.
  - Additionally, the user can also see the progress through the quiz.

![Question and Counter](/assets/images/QuestionAndCounter.png)

- __The Answers Area__

  - The answers section is where all four possible answers are displayed, answers will change the colour according to the accuracy of the user answer, happening when the box of an answer is clicked.
  - The user has just one attempt to guess the right one, if the user answers wrong, the right one will be showed, then the interactions with the answers will no longer exist.

![Answers Area](/assets/images/answersBox.png)

- __The Game Over Page__

  - The game over page congrats the user to finish the quiz and show them how many questions were answered right.
  - The user is able to restart the quiz, just clicking on the Restart Button.

![Game Over Page](/assets/images/GameOverPage.png)

### Features Left to Implement

- Would be a good idea to implement a note with a straightforward explanation about the answer.  
- The quiz could also have a clickable list with all questions in the game over page so the user could check their answers.
- Would be great to have a timer implemented to the quiz, making the quiz more dynamic.

## Testing

- I conducted many tests from a diverse range of width devices, and the site is very responsive, working perfectly fine with different devices such as tablets, smartphones and computers, a problem that I faced was displaying the land and the game over page, however the best way I found was to hide the quiz main elements such as questions, counter, answers, and show only the static pages, and after the user clicks on the start or restart button,  the static page is hidden. It is also worth mentioning the function that locks attempts at one and shows the right question for the user, finally let's talk about the next button that is hidden and shown depending on whether the user answered the question or not.

## Validator Testing

- No errors were returned when passing through the official [W3C](https://validator.w3.org/) validator.
- No errors were found when passing through the official [Jigsaw](https://jigsaw.w3.org/css-validator/) validator
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 9 functions in this file
      - Function with the largest signature take 1 arguments, while the median is 0.
      - Largest function has 8 statements in it, while the median is 6.
      - The most complex function has a cyclomatic complexity value of 3 while the median is 2.


# Deployment

> The site was deployed to GitHub pages. The steps are:
> In the GitHub repository, navigate to the Settings tab
> From the source section drop-down menu, select the Master Branch
> Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

- The live link can be found here: [My Site](https://felipezanini.github.io/Quiz/)

## Credits:

- __Content__ 
    -The icons were taken from Font Awesome
