const fs = require('fs');

const watcher = fs.watch('events_watch_itself.js');

watcher.on('change', ()=> {
  console.log('Hello Hacked File has changed');
});
