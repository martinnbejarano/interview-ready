from connect4 import Connect4, PLAYER_ONE, PLAYER_TWO

def test_play_within_bounds():
    c4 = Connect4(width=10, height=10)
    assert not c4.get_value(10, 1)
    c4.play(1)
    assert c4.get_value(10, 1) == PLAYER_ONE


def test_play_out_of_bounds():
    c4 = Connect4(width=10, height=10)
    c4.play(100)
    assert not c4.get_value(100, 1)


def test_horizontal_winning():
    c4 = Connect4(width=10, height=10)
    for i in range(1, 5):
        c4.play(i)
        c4.play(i)
    assert c4.winner() == PLAYER_ONE


def test_vertical_winning():
    c4 = Connect4(width=10, height=10)
    for _ in range(4):
        c4.play(1)
        c4.play(2)
    assert c4.winner() == PLAYER_ONE


def test_diagonal_winning():
    c4 = Connect4(width=10, height=10)
    plays = [1, 2, 2, 3, 4, 3, 3, 4, 5, 4, 4]
    for p in plays:
        c4.play(p)
    assert c4.winner() == PLAYER_ONE


def test_diagonal_winning_reverse():
    c4 = Connect4(width=10, height=10)
    plays = list(reversed([1, 2, 2, 3, 4, 3, 3, 4, 5, 4, 4]))
    for p in plays:
        c4.play(p)
    assert c4.winner() == PLAYER_ONE
