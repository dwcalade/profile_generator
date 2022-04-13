// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

// const rl = readline.createInterface({ input, output });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
    console.log(`Your name is ${answer1}`);
    rl.question('What is your hobby? ', (answer2) => {
      console.log(`Your hobby is ${answer2}`);
      rl.question('What is your favorite snack ', (answer3) => {
        console.log(`Your favorite snack is ${answer3}`);
        console.log(`Your name is ${answer1}. Your hobby is ${answer2}, and your favorite snack is ${answer3}`);
        rl.close();
      });
    });
  });