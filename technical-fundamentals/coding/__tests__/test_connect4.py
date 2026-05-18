from connect4 import Connect4, PLAYER_ONE, PLAYER_TWO, EMPTY


# ── get_first_free ────────────────────────────────────────────────────────────

def test_get_first_free_empty_column():
    c4 = Connect4(width=10, height=10)
    assert c4.get_first_free(0) == 9

def test_get_first_free_after_one_token():
    c4 = Connect4(width=10, height=10)
    c4.board[9][0] = PLAYER_ONE
    assert c4.get_first_free(0) == 8

def test_get_first_free_full_column():
    c4 = Connect4(width=10, height=10)
    for row in range(10):
        c4.board[row][0] = PLAYER_ONE
    assert c4.get_first_free(0) is None

def test_get_first_free_out_of_bounds():
    c4 = Connect4(width=10, height=10)
    assert c4.get_first_free(100) is None


# ── count_direction ───────────────────────────────────────────────────────────

def test_count_direction_empty():
    c4 = Connect4(width=10, height=10)
    assert c4.count_direction(PLAYER_ONE, 9, 0, 0, 1) == 0

def test_count_direction_right():
    c4 = Connect4(width=10, height=10)
    c4.board[9][1] = PLAYER_ONE
    c4.board[9][2] = PLAYER_ONE
    c4.board[9][3] = PLAYER_ONE
    assert c4.count_direction(PLAYER_ONE, 9, 0, 0, 1) == 3

def test_count_direction_up():
    c4 = Connect4(width=10, height=10)
    c4.board[8][0] = PLAYER_ONE
    c4.board[7][0] = PLAYER_ONE
    assert c4.count_direction(PLAYER_ONE, 9, 0, -1, 0) == 2

def test_count_direction_stops_at_opponent():
    c4 = Connect4(width=10, height=10)
    c4.board[9][1] = PLAYER_ONE
    c4.board[9][2] = PLAYER_TWO
    c4.board[9][3] = PLAYER_ONE
    assert c4.count_direction(PLAYER_ONE, 9, 0, 0, 1) == 1

def test_count_direction_does_not_wrap_negative():
    # bug to watch: Python acepta indices negativos en listas
    # desde col 0 yendo a la izquierda no deberia contar nada
    c4 = Connect4(width=10, height=10)
    c4.board[9][9] = PLAYER_ONE  # ultima columna
    assert c4.count_direction(PLAYER_ONE, 9, 0, 0, -1) == 0


# ── is_winner ─────────────────────────────────────────────────────────────────

def test_is_winner_horizontal():
    c4 = Connect4(width=10, height=10)
    # 4 en fila en el fondo: cols 0,1,2,3
    for col in range(4):
        c4.board[9][col] = PLAYER_ONE
    assert c4.is_winner(PLAYER_ONE, 9, 0)

def test_is_winner_horizontal_checks_both_sides():
    c4 = Connect4(width=10, height=10)
    # token en el medio: cols 1,2,3,4 — chequear desde col 2
    for col in range(1, 5):
        c4.board[9][col] = PLAYER_ONE
    assert c4.is_winner(PLAYER_ONE, 9, 2)

def test_is_winner_vertical():
    c4 = Connect4(width=10, height=10)
    # 4 apilados en col 0: filas 6,7,8,9
    for row in range(6, 10):
        c4.board[row][0] = PLAYER_ONE
    assert c4.is_winner(PLAYER_ONE, 9, 0)

def test_is_winner_diagonal_down_right():
    c4 = Connect4(width=10, height=10)
    # diagonal: (6,0),(7,1),(8,2),(9,3)
    for i in range(4):
        c4.board[6 + i][i] = PLAYER_ONE
    assert c4.is_winner(PLAYER_ONE, 9, 3)

def test_is_winner_diagonal_down_left():
    c4 = Connect4(width=10, height=10)
    # diagonal: (6,3),(7,2),(8,1),(9,0)
    for i in range(4):
        c4.board[6 + i][3 - i] = PLAYER_ONE
    assert c4.is_winner(PLAYER_ONE, 9, 0)

def test_is_winner_no_winner_only_3():
    c4 = Connect4(width=10, height=10)
    c4.board[9][0] = PLAYER_ONE
    c4.board[9][1] = PLAYER_ONE
    c4.board[9][2] = PLAYER_ONE
    assert not c4.is_winner(PLAYER_ONE, 9, 2)

def test_is_winner_does_not_mix_directions():
    # 2 tokens arriba + 2 a la derecha no deberia contar como ganador
    c4 = Connect4(width=10, height=10)
    c4.board[9][0] = PLAYER_ONE
    c4.board[8][0] = PLAYER_ONE  # 2 hacia arriba
    c4.board[9][1] = PLAYER_ONE
    c4.board[9][2] = PLAYER_ONE  # 2 a la derecha
    assert not c4.is_winner(PLAYER_ONE, 9, 0)


# ── play ──────────────────────────────────────────────────────────────────────

def test_play_places_token_at_bottom():
    c4 = Connect4(width=10, height=10)
    c4.play(0)
    assert c4.get_value(9, 0) == PLAYER_ONE

def test_play_alternates_players():
    c4 = Connect4(width=10, height=10)
    c4.play(0)
    c4.play(1)
    assert c4.get_value(9, 0) == PLAYER_ONE
    assert c4.get_value(9, 1) == PLAYER_TWO

def test_play_stacks_tokens():
    c4 = Connect4(width=10, height=10)
    c4.play(0)  # P1 → fila 9
    c4.play(0)  # P2 → fila 8
    assert c4.get_value(9, 0) == PLAYER_ONE
    assert c4.get_value(8, 0) == PLAYER_TWO

def test_play_out_of_bounds_returns_none():
    c4 = Connect4(width=10, height=10)
    result = c4.play(100)
    assert result is None

def test_play_returns_winner():
    c4 = Connect4(width=10, height=10)
    # P1 gana horizontal en cols 0,1,2,3
    for i in range(3):
        c4.play(i)   # P1
        c4.play(i)   # P2 (apila en la misma columna)
    result = c4.play(3)  # jugada ganadora de P1
    assert result == PLAYER_ONE

def test_play_no_winner_returns_none():
    c4 = Connect4(width=10, height=10)
    result = c4.play(0)
    assert result is None
