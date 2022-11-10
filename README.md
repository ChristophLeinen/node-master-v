# Download and installation
Open git bash:
```console
git clone git@github.com:ChristophLeinen/node-master-v.git && ls node-master-v && npm i
```

# Run the server
```console
npm run devStart
```
http://localhost:3000/

# Known Issues

- The registration mail is not getting send
  As a workaround, create the activation link your self: http://localhost:3000/activate?uuid=<user-id> (see the <user-id> in the accounts.json for your newly created user)
  
# Work in Process
- The image upload is not working yet
- Login is still with the User name and not with the email address
- Images are not yet stored on the server
- Currently json files are used, but a sql database might be added later
