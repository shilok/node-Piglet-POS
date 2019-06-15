
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Shift').del()
    .then(function () {
      // Inserts seed entries 
      return knex('Shift').insert(
        [{ "employeeID": 35, "start": "2018-11-09 03:00:19", "end": "2018-12-01 22:32:52", "shiftStatusID": 3 },
        { "employeeID": 16, "start": "2019-03-29 09:47:11", "end": "2018-06-24 15:42:49", "shiftStatusID": 1 },
        { "employeeID": 76, "start": "2018-11-03 22:46:10", "end": "2018-07-16 19:12:09", "shiftStatusID": 3 },
        { "employeeID": 41, "start": "2019-02-23 08:18:00", "end": "2019-02-27 17:15:03", "shiftStatusID": 3 },
        { "employeeID": 5, "start": "2018-10-07 05:19:43", "end": "2018-08-22 04:55:08", "shiftStatusID": 1 },
        { "employeeID": 59, "start": "2019-05-05 10:35:59", "end": "2019-05-13 00:51:32", "shiftStatusID": 2 },
        { "employeeID": 1, "start": "2019-04-26 14:19:13", "end": "2019-03-15 18:00:31", "shiftStatusID": 1 },
        { "employeeID": 32, "start": "2019-05-03 00:12:15", "end": "2018-06-14 08:00:31", "shiftStatusID": 1 },
        { "employeeID": 36, "start": "2018-05-12 20:04:01", "end": "2019-01-01 13:38:22", "shiftStatusID": 3 },
        { "employeeID": 45, "start": "2019-02-09 12:18:25", "end": "2019-01-23 10:02:51", "shiftStatusID": 2 },
        { "employeeID": 8, "start": "2019-01-22 17:21:07", "end": "2019-02-27 17:35:10", "shiftStatusID": 1 },
        { "employeeID": 12, "start": "2018-08-20 23:11:15", "end": "2018-09-22 02:56:06", "shiftStatusID": 2 },
        { "employeeID": 77, "start": "2018-09-19 00:58:46", "end": "2018-08-03 00:49:54", "shiftStatusID": 1 },
        { "employeeID": 12, "start": "2019-02-13 08:47:16", "end": "2018-10-18 01:07:03", "shiftStatusID": 1 },
        { "employeeID": 26, "start": "2018-11-23 23:00:43", "end": "2018-11-04 18:03:24", "shiftStatusID": 1 },
        { "employeeID": 94, "start": "2019-05-07 03:52:14", "end": "2019-04-03 17:50:24", "shiftStatusID": 3 },
        { "employeeID": 89, "start": "2018-06-03 03:35:02", "end": "2019-01-12 03:08:48", "shiftStatusID": 2 },
        { "employeeID": 80, "start": "2019-01-19 10:01:30", "end": "2019-06-07 08:33:24", "shiftStatusID": 3 },
        { "employeeID": 4, "start": "2019-01-10 03:12:57", "end": "2019-04-17 19:16:35", "shiftStatusID": 3 },
        { "employeeID": 14, "start": "2018-09-14 05:16:58", "end": "2019-01-09 05:25:44", "shiftStatusID": 1 },
        { "employeeID": 9, "start": "2018-05-14 16:55:20", "end": "2018-08-08 17:57:42", "shiftStatusID": 3 },
        { "employeeID": 1, "start": "2018-05-11 19:26:59", "end": "2019-01-03 02:03:46", "shiftStatusID": 2 },
        { "employeeID": 44, "start": "2018-06-06 03:32:45", "end": "2019-01-01 10:52:27", "shiftStatusID": 1 },
        { "employeeID": 2, "start": "2018-06-15 12:43:23", "end": "2018-12-29 13:51:25", "shiftStatusID": 2 },
        { "employeeID": 30, "start": "2018-05-19 18:53:38", "end": "2019-01-21 12:42:20", "shiftStatusID": 2 },
        { "employeeID": 9, "start": "2018-11-06 02:52:53", "end": "2018-08-05 18:19:13", "shiftStatusID": 1 },
        { "employeeID": 26, "start": "2018-06-24 16:25:14", "end": "2018-10-12 16:40:41", "shiftStatusID": 3 },
        { "employeeID": 85, "start": "2018-07-23 01:10:19", "end": "2018-08-28 08:56:05", "shiftStatusID": 2 },
        { "employeeID": 40, "start": "2018-12-05 10:35:27", "end": "2019-03-28 05:02:18", "shiftStatusID": 3 },
        { "employeeID": 60, "start": "2019-01-22 01:46:36", "end": "2018-09-29 14:29:54", "shiftStatusID": 2 },
        { "employeeID": 66, "start": "2018-12-06 08:41:12", "end": "2018-08-01 22:40:51", "shiftStatusID": 3 },
        { "employeeID": 81, "start": "2018-05-29 14:17:22", "end": "2019-03-31 19:33:36", "shiftStatusID": 3 },
        { "employeeID": 88, "start": "2018-12-30 10:30:18", "end": "2019-01-27 01:47:42", "shiftStatusID": 1 },
        { "employeeID": 50, "start": "2019-04-01 06:23:56", "end": "2019-04-12 18:25:09", "shiftStatusID": 2 },
        { "employeeID": 23, "start": "2019-04-26 14:52:42", "end": "2018-11-05 19:16:50", "shiftStatusID": 1 },
        { "employeeID": 45, "start": "2019-02-21 09:55:19", "end": "2018-12-19 12:29:00", "shiftStatusID": 3 },
        { "employeeID": 16, "start": "2018-08-28 16:22:15", "end": "2018-10-25 20:55:15", "shiftStatusID": 3 },
        { "employeeID": 37, "start": "2019-01-09 16:36:12", "end": "2018-08-19 19:12:03", "shiftStatusID": 2 },
        { "employeeID": 78, "start": "2018-08-06 12:24:02", "end": "2018-09-02 12:29:36", "shiftStatusID": 1 },
        { "employeeID": 85, "start": "2018-06-23 20:12:59", "end": "2018-08-01 04:08:22", "shiftStatusID": 3 },
        { "employeeID": 41, "start": "2018-11-30 03:11:23", "end": "2018-10-31 06:13:19", "shiftStatusID": 1 },
        { "employeeID": 13, "start": "2018-10-18 22:10:41", "end": "2018-06-28 02:37:39", "shiftStatusID": 1 },
        { "employeeID": 45, "start": "2019-04-18 14:43:05", "end": "2019-03-27 12:09:58", "shiftStatusID": 3 },
        { "employeeID": 27, "start": "2018-07-27 16:38:09", "end": "2018-07-07 04:35:26", "shiftStatusID": 2 },
        { "employeeID": 27, "start": "2019-02-26 20:44:33", "end": "2018-08-10 18:33:28", "shiftStatusID": 2 },
        { "employeeID": 81, "start": "2019-03-22 00:09:25", "end": "2018-12-16 13:08:09", "shiftStatusID": 1 },
        { "employeeID": 70, "start": "2018-12-22 12:41:35", "end": "2019-02-17 16:12:20", "shiftStatusID": 2 },
        { "employeeID": 96, "start": "2018-05-13 11:00:03", "end": "2019-01-11 17:47:15", "shiftStatusID": 3 },
        { "employeeID": 67, "start": "2018-05-19 19:39:50", "end": "2019-05-14 14:40:27", "shiftStatusID": 1 },
        { "employeeID": 38, "start": "2019-04-12 02:52:15", "end": "2018-08-21 13:39:38", "shiftStatusID": 1 },
        { "employeeID": 98, "start": "2019-03-25 13:48:11", "end": "2019-05-28 13:01:54", "shiftStatusID": 3 },
        { "employeeID": 67, "start": "2018-06-23 17:42:51", "end": "2018-08-26 12:10:07", "shiftStatusID": 3 },
        { "employeeID": 24, "start": "2019-02-20 06:14:38", "end": "2019-01-15 12:53:28", "shiftStatusID": 3 },
        { "employeeID": 1, "start": "2018-10-10 02:40:59", "end": "2019-04-04 10:34:13", "shiftStatusID": 1 },
        { "employeeID": 12, "start": "2018-08-05 11:28:37", "end": "2019-02-26 04:03:13", "shiftStatusID": 2 },
        { "employeeID": 98, "start": "2018-10-15 12:31:29", "end": "2018-11-04 06:07:36", "shiftStatusID": 1 },
        { "employeeID": 46, "start": "2018-10-26 06:30:39", "end": "2018-10-05 16:22:48", "shiftStatusID": 1 },
        { "employeeID": 83, "start": "2018-09-27 10:40:04", "end": "2019-03-13 16:41:54", "shiftStatusID": 3 },
        { "employeeID": 57, "start": "2018-10-28 19:54:34", "end": "2019-01-27 21:44:47", "shiftStatusID": 2 },
        { "employeeID": 44, "start": "2018-12-16 14:40:06", "end": "2018-11-16 11:34:11", "shiftStatusID": 2 },
        { "employeeID": 71, "start": "2018-12-14 19:01:33", "end": "2018-08-20 17:05:28", "shiftStatusID": 1 },
        { "employeeID": 4, "start": "2018-11-17 02:39:25", "end": "2018-11-01 17:22:44", "shiftStatusID": 1 },
        { "employeeID": 7, "start": "2018-12-26 09:46:47", "end": "2018-12-05 13:15:37", "shiftStatusID": 3 },
        { "employeeID": 29, "start": "2019-02-23 15:44:13", "end": "2018-06-23 17:53:48", "shiftStatusID": 1 },
        { "employeeID": 63, "start": "2018-06-01 01:42:56", "end": "2019-05-05 00:54:39", "shiftStatusID": 1 },
        { "employeeID": 73, "start": "2018-08-04 21:53:07", "end": "2019-02-12 14:24:17", "shiftStatusID": 3 },
        { "employeeID": 24, "start": "2019-03-05 07:51:59", "end": "2018-12-11 15:16:51", "shiftStatusID": 1 },
        { "employeeID": 62, "start": "2019-03-30 20:53:37", "end": "2019-03-17 04:31:25", "shiftStatusID": 3 },
        { "employeeID": 82, "start": "2018-10-07 12:31:35", "end": "2019-02-14 22:40:38", "shiftStatusID": 3 },
        { "employeeID": 17, "start": "2019-03-05 09:31:12", "end": "2018-08-25 02:39:19", "shiftStatusID": 2 },
        { "employeeID": 12, "start": "2018-09-24 06:43:34", "end": "2019-03-31 06:06:31", "shiftStatusID": 3 },
        { "employeeID": 14, "start": "2018-06-02 08:14:58", "end": "2018-09-27 16:35:11", "shiftStatusID": 1 },
        { "employeeID": 11, "start": "2019-03-09 02:41:05", "end": "2018-12-02 05:56:32", "shiftStatusID": 2 },
        { "employeeID": 52, "start": "2018-11-27 09:44:10", "end": "2018-10-10 15:53:35", "shiftStatusID": 1 },
        { "employeeID": 30, "start": "2019-01-16 08:14:38", "end": "2018-08-02 20:29:52", "shiftStatusID": 1 },
        { "employeeID": 47, "start": "2019-02-06 06:17:22", "end": "2018-09-09 22:36:09", "shiftStatusID": 3 },
        { "employeeID": 36, "start": "2018-05-08 04:16:21", "end": "2019-01-31 20:06:43", "shiftStatusID": 1 },
        { "employeeID": 72, "start": "2019-03-08 06:02:05", "end": "2018-06-14 08:27:08", "shiftStatusID": 2 },
        { "employeeID": 54, "start": "2019-04-26 00:15:37", "end": "2018-12-31 05:41:25", "shiftStatusID": 2 },
        { "employeeID": 52, "start": "2019-02-27 06:24:35", "end": "2018-11-29 00:49:47", "shiftStatusID": 3 },
        { "employeeID": 34, "start": "2018-09-20 05:57:16", "end": "2018-07-28 06:55:35", "shiftStatusID": 1 },
        { "employeeID": 7, "start": "2018-12-01 22:02:27", "end": "2018-07-10 13:09:56", "shiftStatusID": 1 },
        { "employeeID": 77, "start": "2019-03-30 01:56:24", "end": "2018-06-16 01:17:42", "shiftStatusID": 2 },
        { "employeeID": 49, "start": "2018-10-14 15:04:00", "end": "2018-12-09 13:37:04", "shiftStatusID": 3 },
        { "employeeID": 18, "start": "2018-06-30 19:14:29", "end": "2018-06-14 05:20:32", "shiftStatusID": 1 },
        { "employeeID": 64, "start": "2018-07-15 08:35:16", "end": "2018-08-05 06:21:13", "shiftStatusID": 2 },
        { "employeeID": 5, "start": "2018-12-26 04:35:46", "end": "2018-06-23 03:27:39", "shiftStatusID": 3 },
        { "employeeID": 48, "start": "2019-04-24 02:45:59", "end": "2018-06-11 10:32:48", "shiftStatusID": 3 },
        { "employeeID": 53, "start": "2018-09-10 02:51:05", "end": "2018-07-22 00:43:11", "shiftStatusID": 1 },
        { "employeeID": 75, "start": "2018-12-25 01:55:13", "end": "2018-10-28 05:07:31", "shiftStatusID": 3 },
        { "employeeID": 44, "start": "2018-08-04 08:24:13", "end": "2019-03-31 15:23:49", "shiftStatusID": 2 },
        { "employeeID": 28, "start": "2019-04-10 01:49:32", "end": "2018-11-01 06:18:46", "shiftStatusID": 2 },
        { "employeeID": 99, "start": "2018-05-25 07:04:37", "end": "2019-03-02 08:17:30", "shiftStatusID": 1 },
        { "employeeID": 88, "start": "2019-01-10 14:36:58", "end": "2019-01-12 19:44:58", "shiftStatusID": 1 },
        { "employeeID": 8, "start": "2018-08-26 09:24:59", "end": "2018-08-14 22:04:33", "shiftStatusID": 3 },
        { "employeeID": 86, "start": "2018-12-13 13:34:03", "end": "2018-12-26 17:20:24", "shiftStatusID": 2 },
        { "employeeID": 32, "start": "2018-09-23 12:27:36", "end": "2019-03-21 05:38:02", "shiftStatusID": 2 },
        { "employeeID": 66, "start": "2018-09-08 02:34:11", "end": "2018-12-02 14:21:06", "shiftStatusID": 2 },
        { "employeeID": 79, "start": "2019-05-06 18:44:22", "end": "2018-12-27 06:21:09", "shiftStatusID": 1 },
        { "employeeID": 75, "start": "2018-05-16 04:40:21", "end": "2018-10-03 14:28:36", "shiftStatusID": 3 },
        { "employeeID": 29, "start": "2019-02-21 06:53:25", "end": "2019-02-24 08:08:53", "shiftStatusID": 3 },
        { "employeeID": 95, "start": "2019-04-09 05:41:26", "end": "2018-09-17 09:39:13", "shiftStatusID": 1 },
        { "employeeID": 19, "start": "2018-07-08 06:23:46", "end": "2018-07-24 02:30:48", "shiftStatusID": 2 },
        { "employeeID": 75, "start": "2019-02-14 00:13:15", "end": "2019-01-07 14:07:27", "shiftStatusID": 2 },
        { "employeeID": 53, "start": "2019-02-27 08:12:46", "end": "2018-11-30 02:55:52", "shiftStatusID": 1 },
        { "employeeID": 47, "start": "2018-06-29 12:02:12", "end": "2019-01-29 00:49:03", "shiftStatusID": 2 },
        { "employeeID": 46, "start": "2018-11-07 13:44:24", "end": "2018-11-26 00:47:53", "shiftStatusID": 2 },
        { "employeeID": 37, "start": "2018-10-28 00:28:28", "end": "2018-08-24 10:13:54", "shiftStatusID": 2 },
        { "employeeID": 89, "start": "2018-08-08 21:41:43", "end": "2018-11-23 19:56:59", "shiftStatusID": 1 },
        { "employeeID": 97, "start": "2018-10-14 07:43:36", "end": "2018-06-18 05:55:23", "shiftStatusID": 3 },
        { "employeeID": 16, "start": "2018-05-30 21:53:28", "end": "2018-08-23 01:15:05", "shiftStatusID": 1 },
        { "employeeID": 69, "start": "2018-10-08 08:28:20", "end": "2019-04-17 07:18:57", "shiftStatusID": 3 },
        { "employeeID": 21, "start": "2018-11-17 06:05:14", "end": "2018-11-22 23:13:33", "shiftStatusID": 2 },
        { "employeeID": 89, "start": "2018-09-24 21:00:02", "end": "2018-08-26 00:50:09", "shiftStatusID": 1 },
        { "employeeID": 96, "start": "2018-06-22 23:48:51", "end": "2018-06-30 14:27:57", "shiftStatusID": 1 },
        { "employeeID": 65, "start": "2018-09-16 16:40:40", "end": "2019-04-12 23:59:06", "shiftStatusID": 2 },
        { "employeeID": 83, "start": "2018-06-27 04:18:40", "end": "2019-03-11 10:39:52", "shiftStatusID": 1 },
        { "employeeID": 55, "start": "2018-12-18 13:58:32", "end": "2019-03-22 19:54:35", "shiftStatusID": 1 },
        { "employeeID": 70, "start": "2018-07-10 13:42:13", "end": "2018-09-18 20:15:03", "shiftStatusID": 2 },
        { "employeeID": 50, "start": "2019-04-17 23:28:17", "end": "2019-05-13 21:13:04", "shiftStatusID": 3 },
        { "employeeID": 72, "start": "2019-01-10 14:40:40", "end": "2019-01-28 09:43:34", "shiftStatusID": 3 },
        { "employeeID": 52, "start": "2018-09-18 18:07:45", "end": "2018-08-10 05:07:45", "shiftStatusID": 3 },
        { "employeeID": 85, "start": "2018-08-22 16:52:54", "end": "2018-08-19 00:43:54", "shiftStatusID": 1 },
        { "employeeID": 48, "start": "2018-09-17 11:28:01", "end": "2018-12-22 20:15:42", "shiftStatusID": 1 },
        { "employeeID": 64, "start": "2018-12-03 12:46:18", "end": "2019-01-05 06:03:01", "shiftStatusID": 2 },
        { "employeeID": 76, "start": "2018-06-09 11:37:52", "end": "2019-01-24 09:29:56", "shiftStatusID": 3 },
        { "employeeID": 90, "start": "2018-10-28 18:15:24", "end": "2019-03-22 18:29:35", "shiftStatusID": 2 },
        { "employeeID": 68, "start": "2018-05-10 04:36:34", "end": "2018-12-29 02:22:32", "shiftStatusID": 1 },
        { "employeeID": 72, "start": "2018-08-01 02:44:03", "end": "2019-02-24 04:11:20", "shiftStatusID": 1 },
        { "employeeID": 93, "start": "2018-08-31 21:35:03", "end": "2018-08-29 18:49:38", "shiftStatusID": 1 },
        { "employeeID": 76, "start": "2018-12-31 08:44:40", "end": "2018-06-16 16:59:06", "shiftStatusID": 1 },
        { "employeeID": 52, "start": "2018-08-07 13:59:44", "end": "2019-03-16 21:00:06", "shiftStatusID": 3 },
        { "employeeID": 7, "start": "2019-05-05 06:39:57", "end": "2018-11-30 02:23:47", "shiftStatusID": 2 },
        { "employeeID": 71, "start": "2018-12-30 19:08:46", "end": "2018-12-21 22:35:50", "shiftStatusID": 3 },
        { "employeeID": 11, "start": "2018-11-29 17:05:20", "end": "2019-03-30 23:48:52", "shiftStatusID": 3 },
        { "employeeID": 7, "start": "2018-09-13 21:46:02", "end": "2018-10-26 03:54:19", "shiftStatusID": 1 },
        { "employeeID": 53, "start": "2018-11-08 03:21:39", "end": "2018-08-10 22:49:25", "shiftStatusID": 1 },
        { "employeeID": 32, "start": "2018-07-18 07:45:02", "end": "2019-04-05 15:12:48", "shiftStatusID": 2 },
        { "employeeID": 96, "start": "2018-08-26 07:33:33", "end": "2018-08-21 19:38:02", "shiftStatusID": 3 },
        { "employeeID": 8, "start": "2018-05-09 09:41:54", "end": "2019-02-06 07:50:45", "shiftStatusID": 1 },
        { "employeeID": 79, "start": "2018-07-04 11:45:51", "end": "2018-07-27 21:45:55", "shiftStatusID": 1 },
        { "employeeID": 56, "start": "2018-10-01 05:11:13", "end": "2019-01-03 21:39:47", "shiftStatusID": 3 },
        { "employeeID": 15, "start": "2018-11-11 16:06:45", "end": "2018-08-03 19:50:14", "shiftStatusID": 1 },
        { "employeeID": 19, "start": "2018-08-19 13:57:54", "end": "2018-09-25 05:33:00", "shiftStatusID": 1 },
        { "employeeID": 7, "start": "2018-11-19 10:05:59", "end": "2018-08-27 08:56:07", "shiftStatusID": 1 },
        { "employeeID": 11, "start": "2018-05-30 16:39:09", "end": "2019-04-22 18:56:18", "shiftStatusID": 3 },
        { "employeeID": 20, "start": "2019-04-25 07:55:37", "end": "2018-09-22 23:03:14", "shiftStatusID": 2 },
        { "employeeID": 8, "start": "2018-08-31 01:39:05", "end": "2019-01-04 19:26:55", "shiftStatusID": 1 },
        { "employeeID": 16, "start": "2018-08-12 21:12:01", "end": "2018-11-19 23:46:41", "shiftStatusID": 3 },
        { "employeeID": 73, "start": "2018-06-12 01:12:43", "end": "2018-12-19 01:52:34", "shiftStatusID": 1 }]
      );
    });
};
