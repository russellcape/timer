 
const timer = function() {
	const timers = process.argv.slice(2); // used to read input from terminal
  for (let time = 0; time < timers.length; time++) {
  if(timers[time] < 0 || undefined || isNaN(timers[time])) {
  	return;
  } 
  setTimeout(()=> {process.stdout.write('\x07')},timers[time]*1000);
	}
};

 timer();