import '../stylesheets/main.scss';

let nav = 0;
let clicked = null;
// Webブラウザにデータを保存する領域。ブラウザを閉じても保存されたままで、データを保存したり取得が可能。getItem()とセット。
let events = localStorage.getItem('events')
  ? JSON.parse(localStorage.getItem('events'))
  : [];

const calendar = document.getElementById('calendar');
// For a new event Modal
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
// const saveEvent = document.getElementById("")
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// Modalを開く関数
function openModal(date) {
  clicked = date; // 上で定義してる null の状態から dateに変える

  const eventForDay = events.find((e) => e.date === clicked);

  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }
  backDrop.style.display = 'block';
}

function load() {
  const dt = new Date(); // crate current time

  //   ?
  if (nav !== 0) {
    // setMonth()は、現在設定されている年に基づき、指定された日付の「月」を設定。
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();
  // console.log(day, month + 1, year);

  //  今月の最初の日付と曜日を取得
  const firstDayOfMonth = new Date(year, month, 1);
  // console.log(firstDayOfMonth); // Thu Dec 01 2022 00:00:00

  // 年、　月＋１、　日にちは０から始まる　(全て取得)
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // get String by getDate()
  // console.log(daysInMonth); // Sat Dec 31 2022

  // 今月の最初の日付と曜日を,　指定した型で、取得
  const dateString = firstDayOfMonth.toLocaleDateString('en-au', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  // console.log(dateString); // Thursday, 01/12/2022

  // 現在の月の空日 (padding days) を取得
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]); //文字列を分割してString型の配列を返す
  // console.log(paddingDays); // 5 (その月に寄る)

  //  現在の年と月を表示 -----------------------------------
  document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString(
    'en-au',
    { month: 'long' }
  )}
         ${year}`;

  //
  // Wipe all out when you go next or back month button pressed
  //
  calendar.innerHTML = ''; // Not work

  // Padding days in each month を取得する
  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div'); //divを生成
    daySquare.classList.add('day'); //生成したdivにクラスを付与

    const dayString = `${month + 1} 月 ${i - paddingDays} 日 ${year}`;

    // 1日〜のそれぞれの日数をprint outする？
    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;

      const eventForDay = events.find((e) => e.date === dayString);


    //   現在日を光らせる
    if ( i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay'; // id名を付与
    }

      if (eventForDay) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventForDay.title;
        daySquare.appendChild(eventDiv);
      }

      daySquare.addEventListener('click', () => openModal(dayString));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);
  }
}

// Close Modal
function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  load();
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });

    // json形式にして、入力されたものをブラウザに保存
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}

function deleteEvent() {
  events = events.filter((e) => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

// when you press buttons go to next or back month
function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    load();
  });
  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });

  // キャンセルボタンが押されたらモーダルをクローズさせる上で定義した saveEvent()を発火
  document.getElementById('saveButton').addEventListener('click', saveEvent);
  // キャンセルボタンが押されたらモーダルをクローズさせる上で定義した closeModal()を発火
  document.getElementById('cancelButton').addEventListener('click', closeModal);

  document
    .getElementById('deleteButton')
    .addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}

initButtons();

load();
