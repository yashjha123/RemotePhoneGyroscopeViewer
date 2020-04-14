# RemotePhoneGyroscopeViewer
This communicate rotation of an android phone to a private network user (computer).

Make sure you have node.js and npm installed with you. \
Run command `npm install` in your console. \

Get to know your local IP address \
Use `ipconfig` on windows and `ifconfig` it usually begins with 192.168.1.* \
In my case it is 192.168.1.13 \ 

Run command `node main.js` \

On your phone visit `https://192.168.1.13:3000` \
and tap on "Start" \
On your computer visit `https://192.168.1.13:3000` \
and click on "See" \

The plane will intimate the Rotation of your phone. \


