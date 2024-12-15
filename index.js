const words = [
  "I",
  "YOU",
  "HE",
  "SHE",
  "WE",
  "THEY",
  "THIS",
  "THAT",
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
  "SPRING",
  "SUMMER",
  "FALL",
  "WINTER",
  "MORNING",
  "AFTERNOON",
  "EVENING",
  "NIGHT",
  "YEAR",
  "MONTH",
  "DAY",
  "WEEK",
  "TIME",
  "MINUTE",
  "FAMILY",
  "FATHER",
  "MOTHER",
  "BROTHER",
  "SISTER",
  "ANIMAL",
  "DOG",
  "CAT",
  "BREAKFAST",
  "LUNCH",
  "DINNER",
  "HOUSE",
  "KITCHEN",
  "WINDOW",
  "ROOM",
  "COMPUTER",
  "DESK",
  "TABLE",
  "CHAIR",
  "DOOR",
  "BED",
  "GARDEN",
  "CAR",
  "BIKE",
  "TRAIN",
  "BUS",
  "SPORT",
  "BASEBALL",
  "BALL",
  "BASKETBALL",
  "SOCCER",
  "TENNIS",
  "SWIMMING",
  "MUSIC",
  "PIANO",
  "GUITAR",
  "ORGAN",
  "APPLE",
  "ORANGE",
  "EGG",
  "GRAPE",
  "COUNTRY",
  "AMERICA",
  "AUSTRALIA",
  "JAPAN",
  "SCHOOL",
  "CLASS",
  "TEACHER",
  "STUDENT",
  "MATH",
  "JAPANESE",
  "ENGLISH",
  "BAG",
  "CAMERA",
  "CAP",
  "NOTEBOOK",
  "PEN",
  "PICTURE",
  "TREE",
  "BIRTHDAY",
  "TOWN",
  "CITY",
  "PARK",
  "PEOPLE",
  "FRIEND",
  "WOMAN",
  "MAN",
];

const main = () => {
  let question = words[Math.floor(Math.random() * words.length)];

  const $question = document.getElementById("question");
  $question.textContent = question;

  const $input = document.querySelector("input");
  let pre = "";
  $input.addEventListener("input", (e) => {
    const upper = e.target.value.toUpperCase();
    if (!question.startsWith(upper)) {
      $input.value = pre;
      return;
    }

    pre = upper;
    $input.value = upper;

    if (question === upper) {
      question = words[Math.floor(Math.random() * words.length)];
      $question.textContent = question;
      $input.value = "";
      pre = "";
    }
  });
};

main();
