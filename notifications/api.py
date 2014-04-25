from models import Notification


def send_notification(to_user, heading, message_text, more_url):
    """
    Send a notification to a user.
    """
    n = Notification(to_user=to_user, heading=heading, message_text=message_text, more_url=more_url, is_unread=True)
    n.save()
