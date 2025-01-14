# VulnLogin
A simulation exercise to demonstrate dictionary attack against a vulnerable login page 

## Usage
### Server
Initialisation:
```
npm init -y
npm install express
npm install body-parser
```
Running the server:
```
node server.js
```
### Attacker
```
python3 dict_attack.py --username <username> --url <url> --wordlist <path/to/wordlist> --verbose
```
Result:
![image](https://github.com/user-attachments/assets/07ff4d7f-353d-452b-b0b8-ab42ebce09a0)
