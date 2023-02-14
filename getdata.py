import requests
import json
from function import index
def getUser(user):
  dat = index(user)
  return(dat)
