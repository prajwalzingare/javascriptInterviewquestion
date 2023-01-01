// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

// Ans
let grade = prompt("Enter Your marks to know the grade");

gradeCheck = () => {
  if (grade >= 90 && grade <= 100) {
    alert("congratulations, You have passed with garde A ");
  } else if (grade >= 70 && grade < 90) {
    alert("congratulations, You have passed with garde B ");
  } else if (grade >= 60 && grade < 70) {
    alert("congratulations, You have passed with garde C ");
  } else if (grade >= 50 && grade < 60) {
    alert("congratulations, You have passed with garde D");
  } else if (grade > 0 && grade <= 49) {
    alert("congratulations, You have passed with garde F");
  } else if (grade > 100) {
    alert("Enter the proper value");
  }
};

gradeCheck();
