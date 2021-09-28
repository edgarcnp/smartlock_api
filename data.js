// UMN Student Data
const users = [{
  "nim": "00000015547",
  "uid": "28-3170098",
  "first_name": "Amii",
  "last_name": "Plumb",
  "email": "amii@student.umn.ac.id",
  "password": "$2b$10$vamU7qwKOH/Its5tL9.NgOGPOk21i8U2WD2YXJVxBjeMTbPAe7JMa"
}, {
  "nim": "00000020590",
  "uid": "72-4059076",
  "first_name": "Dulciana",
  "last_name": "Pigdon",
  "email": "dulciana@student.umn.ac.id",
  "password": "ouWREv5vwswz"
}, {
  "nim": "00000013455",
  "uid": "37-8569398",
  "first_name": "Hallsy",
  "last_name": "Kearey",
  "email": "hallsy@student.umn.ac.id",
  "password": "GaALXOd"
}, {
  "nim": "00000017573",
  "uid": "48-9419177",
  "first_name": "Blanche",
  "last_name": "Franckton",
  "email": "blanche@student.umn.ac.id",
  "password": "CPhorjEi7"
}, {
  "nim": "00000018799",
  "uid": "48-7665831",
  "first_name": "Corrie",
  "last_name": "Tune",
  "email": "corrie@student.umn.ac.id",
  "password": "mZXVtpzpyA"
}, {
  "nim": "00000021028",
  "uid": "69-0194194",
  "first_name": "Berkley",
  "last_name": "Greenmon",
  "email": "berkley@student.umn.ac.id",
  "password": "K0oIti"
}, {
  "nim": "00000024894",
  "uid": "96-3834721",
  "first_name": "Christiane",
  "last_name": "Fullun",
  "email": "christiane@student.umn.ac.id",
  "password": "1xERndW"
}, {
  "nim": "00000014684",
  "uid": "17-0880290",
  "first_name": "Jocko",
  "last_name": "Zannuto",
  "email": "jocko@student.umn.ac.id",
  "password": "QeeZJk6ooI"
}, {
  "nim": "00000014229",
  "uid": "07-1838952",
  "first_name": "Nora",
  "last_name": "Innes",
  "email": "nora@student.umn.ac.id",
  "password": "uEETV9KeOO"
}, {
  "nim": "00000019127",
  "uid": "65-0886926",
  "first_name": "Philis",
  "last_name": "Paxman",
  "email": "philis@student.umn.ac.id",
  "password": "10Xmjci3Wjak"
}]

//Booking Data
const booking = [{
  "id": 1,
  "room_num": "C75",
  "start_date": "2021-04-29 11:06:59",
  "end_date": "2021-01-25 20:28:46",
  "duration": "2 hour",
  "room_status": 2,
  "borrower_uid": "72-9490252",
  "participants": [

  ],
  "timestamp": "2021-02-24 01:28:40"
}, {
  "id": 2,
  "room_num": "C95",
  "start_date": "2020-12-08 21:42:23",
  "end_date": "2021-09-01 06:38:06",
  "duration": "3 hour",
  "room_status": 3,
  "borrower_uid": "58-1195546",
  "participants": [

  ],
  "timestamp": "2021-01-22 20:20:44"
}, {
  "id": 3,
  "room_num": "S23",
  "start_date": "2021-07-02 06:03:04",
  "end_date": "2021-08-06 13:07:44",
  "duration": "1 hour",
  "room_status": 1,
  "borrower_uid": "79-8996899",
  "participants": [

  ],
  "timestamp": "2020-10-02 12:08:59"
}, {
  "id": 4,
  "room_num": "N22",
  "start_date": "2021-06-12 06:38:23",
  "end_date": "2021-01-08 22:08:51",
  "duration": "3 hour",
  "room_status": 2,
  "borrower_uid": "03-5604077",
  "participants": [

  ],
  "timestamp": "2021-08-27 08:41:25"
}, {
  "id": 5,
  "room_num": "P15",
  "start_date": "2021-07-04 01:05:32",
  "end_date": "2021-08-16 18:19:29",
  "duration": "2 hour",
  "room_status": 2,
  "borrower_uid": "72-2805049",
  "participants": [

  ],
  "timestamp": "2021-08-25 22:18:48"
}]

module.exports = { users, booking }