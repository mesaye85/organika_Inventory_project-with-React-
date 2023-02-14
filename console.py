from time import sleep
from rich.panel import Panel
from rich import print
from rich.align import Align


def alert(text, color1, color2, center=False, title=False):
  if center == True:
    if title != False:
      print(Panel(Align.center(text), style=f'{color1} on {color2}', title=title))
    elif title == False:
      print(Panel(Align.center(text), style=f'{color1} on {color2}'))
  elif center != True:
    if title != False:
      print(Panel(text, style=f'{color1} on {color2}', title=title))
    elif title == False:
      print(Panel(text, style=f'{color1} on {color2}'))