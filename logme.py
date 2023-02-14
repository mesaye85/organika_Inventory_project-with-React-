from datetime import datetime
from pytz import timezone
tz = timezone('EST')
f1 = 'log.txt'

def gettime():
  return(datetime.now(tz).strftime('%m/%d %H:%M:%S'))
  
class logme:
  def user(user):
    data = f"[{gettime()}] [GETUSER] User {user}'s bio was requested."
    with open(f1, 'a') as file:
      file.write(data + '\n')
      file.close()
  def ratelimit():
    data = f"[{gettime()}] [RATELIMIT] Ratelimit of 15/1 exceeded."
    with open(f1, 'a') as file:
      file.write(data + '\n')
      file.close()
  def blacklisted(user):
    data = f"[{gettime()}] [BLACKLISTED] Blacklisted user {user} requested."
    with open(f1, 'a') as file:
      file.write(data + '\n')
      file.close()
  def index():
    data = f"[{gettime()}] [INDEX] Index visited."
    with open(f1, 'a') as file:
      file.write(data + '\n')
      file.close()