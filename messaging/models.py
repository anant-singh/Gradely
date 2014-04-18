from django.db import models
from django.contrib.auth.models import User


class Message(models.Model):
    """
    Model representing a message sent to a user from another user.
    """
    sender = models.ForeignKey(User, related_name='sent_messages')
    receiver = models.ForeignKey(User, related_name='received_messages')
    message_text = models.TextField()
    date_time = models.DateTimeField(auto_now=True)
