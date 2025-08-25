function checkGrade() {
      const score = parseInt(document.getElementById('score').value);
      if (isNaN(score) || score < 0 || score > 100) {
        document.getElementById('result').textContent = "Enter a valid score!";
        document.getElementById('result').style.color = "red";
        return;
      }

      let grade;
      if (score >= 90) grade = 'A';
      else if (score >= 80) grade = 'B';
      else if (score >= 70) grade = 'C';
      else if (score >= 60) grade = 'D';
      else grade = 'F';

      document.getElementById('result').textContent = "Your Grade: " + grade;
      document.getElementById('result').style.color = "#042c57ff";

    }