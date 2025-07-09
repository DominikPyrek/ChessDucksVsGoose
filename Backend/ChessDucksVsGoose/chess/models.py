from django.db import models

class ChessBoard(models.Model):
    black = models.CharField(max_length=50)
    white = models.CharField(max_length=50)
    moves = models.CharField(max_length=5000)
    winner = models.CharField()

# Create your models here.
