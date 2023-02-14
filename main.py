from flask import Flask, render_template, url_for, send_file, redirect
from getdata import getUser
import logging
import sys
import os
from console import alert
from logme import logme

from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

blacklistedusers = ['vukl']
fakeusers = ['favicon.ico', 'robots.txt']

app = Flask('')

log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)


limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://",
)


@app.errorhandler(429)
def ratelimit(error):
  logme.ratelimit()
  alert(f'❌ [APP] RATELIMIT - \'/\' - Code 200', 'yellow', 'red', False, 'Routes - \'/\'')
  return render_template(
    '500.html',
    name='Ratelimit',
    pfp='https://mybio.jacebillingsley.repl.co/pfp',
    text='To make sure the replit graphql is not abused there is a ratelimit of 15 profile calls per minute per user.',
    website=False,
    twitter=False,
    github=False,
    linkedin=False,
    youtube=False
  ), 429

@app.route('/blacklisted/<user>')
def ratelimit(user):
  return render_template(
    '500.html',
    name='Blacklisted',
    pfp='https://mybio.jacebillingsley.repl.co/pfp',
    text=f'The user {user} is blacklisted from myBio',
    website=False,
    twitter=False,
    github=False,
    linkedin=False,
    youtube=False
  ), 429

@app.route('/')
@limiter.exempt
def index():
  alert(f'✅ [APP] Index - \'/\' - Code 200', 'blue', 'purple', False, 'Routes - \'/\'')
  logme.index()
  return render_template(
    'index.html',
    name='myBio',
    pfp="https://mybio.jacebillingsley.repl.co/pfp",
    text="A webserver that takes a users replit profile and makes it look nicer! It just pulls the data from your account, so theres nothing you have to do! If you would like to see more updates and customization abilities in the future please like the repl post!\n\nThanks to VulcanWM for the GQL schema!",
    website="https://mybio.jacebillingsley.repl.co/@JaceBillingsley",
    twitter=False,
    youtube=False,
    github=False,
    linkedin=False
  )

@app.route('/pfp')
def pfp():
  return send_file('static/mb.png')

@app.route('/<user>')
@limiter.limit("15 per minute")
def user(user):
  if user in blacklistedusers:
    alert(f'❌ [APP] BLACKLISTED - \'/{user}\' - Code 200', 'red', 'yellow', False, 'Routes - \'/\'')
    logme.blacklisted(user)
    return( redirect(f'/blacklisted/{user}'))
  if user in fakeusers:
    return('')
  alert(f'✅ [APP] User - \'/{user}\' - Code 200', 'red', 'green', False, 'Routes - \'/user\'')
  data = getUser(user)
  logme.user(user)
  return render_template(
    'bio.html',
    name = data["name"],
    text = data["bio"],
    location = data["location"],
    replit_bio = f"https://replit.com/@{user}",
    website = data["website"],
    youtube = data["youtube"],
    twitter = data["twitter"],
    github = data["github"],
    linkedin = data["linkedin"],
    pfp=data["pfp"],
    followers=data["followers"],
    profileviews=data["profileviews"]
  )


@app.route('/@<user>')
@limiter.limit("15 per minute")
def user2(user):
  if user in blacklistedusers:
    alert(f'❌ [APP] BLACKLISTED - \'/@{user}\' - Code 200', 'red', 'yellow', False, 'Routes - \'/\'')
    logme.blacklisted(user)
    return( redirect(f'/blacklisted/{user}'))
  if user in fakeusers:
    return('')
  alert(f'✅ [APP] User - \'/@{user}\' - Code 200', 'red', 'green', False, 'Routes - \'/@user\'')
  data = getUser(user)
  logme.user(user)
  return render_template(
    'bio.html',
    name = data["name"],
    text = data["bio"],
    location = data["location"],
    replit_bio = f"https://replit.com/@{user}",
    website = data["website"],
    youtube = data["youtube"],
    twitter = data["twitter"],
    github = data["github"],
    linkedin = data["linkedin"],
    pfp=data["pfp"],
    followers=data["followers"],
    profileviews=data["profileviews"]
  )

@app.route('/cover1.png')
def cover1():
  return send_file('ss.png')

@app.route('/test1')
@limiter.limit("2 per 1 minute")
def test4():
  return('Hello!')

if __name__ == '__main__':
  os.system('clear')
  cli = sys.modules['flask.cli']
  cli.show_server_banner = lambda *x: None
  alert('Starting System Processes', 'red', 'blue', True, "System Alert")
  app.run('0.0.0.0')