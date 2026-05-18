"""
Connect4

Connect4 is a game where two players take turns placing a token on columns that drop to the bottom.
When a player forms 4 of his tokens in a line - horizontally, vertically,or diagonally - the player wins.

[Visualization](https://i.ebayimg.com/images/g/DzMAAOSwSjxj6m0e/s-l1600.jpg)

Implement Connect 4 with the class below.
"""

PLAYER_ONE = "1"
PLAYER_TWO = "2"
EMPTY = "-"

class Connect4:
  def __init__(self, width = 10, height = 10):
    self.width = width
    self.height = height
    self.board = [[EMPTY] * width for i in range(height)]
    self.current_player = PLAYER_ONE
  def get_value(self, row, col):
    return self.board[row][col]

  def get_first_free(self, col):
    if col < 0 or col >= self.width:
        return None
    for i in range(self.height -1 , -1, -1):
      if self.board[i][col] == EMPTY:
        return i
    return None


  def play(self, col):
    row = self.get_first_free(col)

    if row is None:
      return row

    self.board[row][col] = self.current_player

    if self.is_winner(self.current_player, row, col):
      return self.current_player

    self.current_player = PLAYER_ONE if self.current_player == PLAYER_TWO else PLAYER_TWO

  def count_direction(self, player, row, col, dr, dc):
    count = 0
    r = row + dr
    c = col + dc
    while 0 <= r < self.height and 0<= c < self.width and self.board[r][c] == player:
      count += 1
      r += dr
      c += dc

    return count

  def is_winner(self, player, row, col):
    dirs = [(1, 0), (0, 1), (1, 1), (1, -1)]

    for dr, dc in dirs:
      total = 1
      total += self.count_direction(player, row, col, dr, dc)
      total += self.count_direction(self.current_player, row, col, -dr, -dc)
      if total >= 4:
        return True

    return False

  def display(self):
    c = ""
    for row in range(self.height):
      for col in range(self.width):
        c += self.board[row][col] + " "
      c += "\n"
    print(c)

t = Connect4()
t.display()
