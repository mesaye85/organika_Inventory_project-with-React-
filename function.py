import requests
import json
import os
from replit import db

def index(username):
  try:
    db[username] = db[username]+1
  except:
    db[username] = 1
  data = requests.post("https://replit.com/graphql", json = {
  			"query": os.getenv('gql'),
  			"variables": """{ "username": "%s" }""" % username
  		},
  headers = {
    "X-Requested-With": "ReplitApi",
    "referer": "https://replit.com/",
    "User-Agent": "Mozilla/5.0"
  })
  data = json.loads(data.text)["data"]["userByUsername"]
  try:
    dat = {
      "name":data["displayName"],
      "bio":data["bio"],
      "location":data["location"],
      "hacker":data["isHacker"],
      "followers":data["followerCount"],
      "github":False,
      "youtube":False,
      "website":False,
      "linkedin":False,
      "twitter":False,
      "pfp":data["image"],
      "profileviews":str(db[username])
    }
    for social in data["socials"]:
      dat[f'{social["type"]}'] = social["url"]
  except:
    dat = {
      "name":"None",
      "bio":"No user was found with that username",
      "location":"",
      "hacker":False,
      "followers":"None",
      "github":False,
      "youtube":False,
      "website":False,
      "linkedin":False,
      "twitter":False,
      "pfp":"https://mybio.jacebillingsley.repl.co/pfp",
      "profileviews":str(db[username])
    }
  return(dat)