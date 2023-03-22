export const rows = [
  {
    id: 1,
    status: 'Approved',
    title: 'Marketing',
    avatar: 'love-song-icon.png',
    sub_forums: '4',
    topics: '5',
    posts: '9',
    language: 'English',
    status_color: 'Green',
    full_name: "PCM",
    instructor: 'Mr. Deepak',
    start_time: '10:00 AM',
    start_date: '',
    class: '6th',
    board: 'CBSE'
  },
  {
    id: 7,
    status: 'Pending',
    title: 'Music',
    avatar: 'advertising-icon.png',
    sub_forums: '0',
    topics: '5',
    posts: '9',
    language: 'English',
    status_color: 'blue',
    full_name: "PCB",
    instructor: 'Mr. Pradeep',
    start_time: '11:00 AM',
    start_date: '',
    class: '8th',
    board: 'ICSE',
  },
  {
    id: 11,
    status: 'Rejected',
    title: 'Lifestyle',
    avatar: 'makeup-icon.png',
    sub_forums: '3',
    topics: '5',
    posts: '9',
    language: 'Hindi',
    status_color: 'Red',
    full_name: "Physics",
    instructor: 'Mr. Yogesh',
    start_time: '10:00 AM',
    start_date: '',
    class: '10th',
    board: 'ICSE',
  }
]

const customDates = [
  new Date("2022-01-01"),
  new Date("2022-02-15"),
  new Date("2022-03-20"),
  new Date("2022-05-20")
];

for (let i = 0; i < rows.length; i++) {
  if (customDates[i]) {
    const customDate = customDates[i];
    const day = customDate.getDate();
    const month = customDate.getMonth() + 1; // Adding 1 since January is 0
    const year = customDate.getFullYear();
    const customDateFormatted = `${day}/${month}/${year}`;

    start_time: '10:00 AM',rows[i].
    start_date = customDateFormatted;
  }
}
