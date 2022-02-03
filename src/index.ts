
import SerialPort, { parsers } from 'serialport';
const { Readline } = parsers;

const portPath = 'COM5'

const port = new SerialPort(portPath, { baudRate: 9600 });

const parser = port.pipe(new Readline({ delimiter: '\n' }));

port.on("open", () => {
  console.log(`Port ${portPath} is open, waiting for data`);
});

parser.on('data', data =>{
  console.log('Arduino data :', data);
});