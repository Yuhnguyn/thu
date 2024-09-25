let correctAnswers = window.localStorage.getItem("correctAnswers") || 0;

function checkAnswer(answer) {
  if (answer === "correct") {
    correctAnswers++;
  }

  window.localStorage.setItem("correctAnswers", correctAnswers); // Lưu kết quả vào localStorage
  if (window.location.href.includes("test1.html")) {
    window.location.href = "test2.html";
  } else if (window.location.href.includes("test2.html")) {
    window.location.href = "test3.html";
  } else if (window.location.href.includes("test3.html")) {
    window.location.href = "result.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.href.includes("result.html")) {
    let totalQuestions = 3;
    let correctAnswers = window.localStorage.getItem("correctAnswers") || 0;

    if (correctAnswers == totalQuestions) {
      document.getElementById("result").innerText = "Bạn thật xuất sắc!";
    } else {
      document.getElementById(
        "result"
      ).innerText = `Bạn trả lời ${correctAnswers} câu đúng.`;
    }
    window.localStorage.removeItem("correctAnswers");
  }
});
