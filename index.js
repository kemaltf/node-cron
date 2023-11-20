const cron = require("node-cron");

// BASIC THE SYNTAX
// cron.schedule("2 * * * * *", () => {
//   console.log("running a task every second");
// });

// USING RANGES
// cron.schedule("10-40 * * * February *", () => {
//   console.log(
//     "ini berjalan pada saat detik ke 10 sampai detik ke 40 pada bulan desember"
//   );
// });

// SELECTING CERTAIN TIME POINTS
// cron.schedule("10,12,40 * * * February *", () => {
//   console.log("running setiap detik menunjukan 10,12,dan 40");
// });

// STEP VALUES
// cron.schedule("*/2 * * * February *", () => {
//   console.log("running setiap 2 detik");
// });

// CRON METHOD
// STOP
// const task = cron.schedule("* * * * * *", () => {
//   console.log("running");
// });

// setTimeout(function () {
//   task.stop();
//   console.log("Stopping task");
// }, 5000);
//START

// const task = cron.schedule("* * * * *", function () {
//   console.log("Running a task every minute");
// });

// task.stop();
// console.log("Stopping task");

// setTimeout(function () {
//   task.start();
//   console.log("Starting task");
// }, 5000);

// DESTROY
// const task = cron.schedule("* * * * * *", function () {
//   console.log("Running a task every second");
// });

// task.start();
// setTimeout(function () {
//   task.destroy();
//   console.log("Destroying task");
// }, 5000);

// task.start(); //gaakan bisa

// TIMEZONEs
cron.schedule(
  "0 1 * * *",
  () => {
    console.log("Running a job at 01:00 at America/Sao_Paulo timezone");
  },
  {
    scheduled: true,
    timezone: "America/Sao_Paulo",
  }
);
