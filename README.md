# KaraokeAnytime
## Developer's Setup Guide:
- In the main folder, run the following command: `npm install`
  - If you encounter trouble running the command, try deleting package-lock.json then run `npm install` again.
  - If you still encounter trouble, try running `npm install --legacy-peer-deps` (shouldn't be necessary in this version of the project, but the instruction is here in case it's still needed)
- Navigate in the terminal to the server folder, and run `npm install` 
- To start the socket server (to allow video and audio peer-to-peer communication), run `npm start` in the server folder.
- To start the main website server, run `npm start` in the main folder.
