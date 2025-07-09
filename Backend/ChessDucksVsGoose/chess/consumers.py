import json
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from asgiref.sync import async_to_sync
from .models import ChessBoard

class ChessConsumer(AsyncJsonWebsocketConsumer):
    moves = []

    async def connect(self, id):
        self.chess_board_id = id
        user = self.scope["user"]
        
        self.chess_board, created = await ChessBoard.objects.aget_or_create(
            id=self.chess_board_id,
            defaults={
                'white': user.username,
                'black': '',
                'moves': '[]',
                'winner': ''
            }
        )

        if user.username in [self.chess_board.white, self.chess_board.black]:
            await self.accept()
            color = 'white' if user.username == board.white else 'black'
            await self.send_json({'type': 'reconnected', 'color': color})
            return

        if created:
            await self.send_json({
                'type': 'color_assignment',
                'color': 'white',
            })

        if not created:
            if self.chess_board.black and self.chess_board.white:
                await send_json({
                    'type': 'error', 
                    'message': 'Game is full'
                    })

            self.chess_board.black = user.username

            await self.chess_board.asave()

            await self.send_json({
                'type': 'color_assignment',
                'color': 'black',
                'opponent': self.chess_board.white
            })

        await self.accept()
        await self.channel_layer.group_add(
            self.chess_board_id,
            self.channel_name
        )

        await self.send_json({
            'type': 'connection_established',
            'message': 'You are now connected',
        })


    def receive(self, move):
        move = json.loads(move)
        moves.append(move)
        
        async_to_sync(self.channel_layer.group_send)(
            self.chess_board_id,
            {
                'type': 'chess_move',
                'move': move
            }
        )
