from django.db import models
from django.contrib.auth.models import User


class Notification(models.Model):
    """
    Model representing a single notification for a user.
    """
    to_user = models.ForeignKey(User, unique=False, related_name='to_user')
    date_time = models.DateTimeField(auto_now=True)
    heading = models.TextField()
    message_text = models.TextField()
    more_url = models.URLField()
    is_unread = models.BooleanField()

