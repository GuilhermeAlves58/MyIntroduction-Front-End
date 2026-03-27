import inquirer from "inquirer";
import qr from "qr-image"
import fs from 'fs';

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter your text to generate a QR code: ',
    },
];

inquirer.prompt(questions).then((answers) => {
    const text = answers.text;

    const qr_png = qr.image(text, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('myqrcode.png'));

    fs.writeFile('myfile.txt', text, (err) => {
        if (err) throw err;
        console.log('Successfully wrote to the file!');
    });
});

