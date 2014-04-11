from django.contrib.auth.models import User
from django.db import models


class Courses(models.Model):
    id = models.AutoField(primary_key=True)
    number = models.IntegerField(verbose_name="Course Number")
    subject = models.TextField(verbose_name="Course Subject")
    subject_code = models.TextField(verbose_name="Subject Code")
    title = models.TextField(verbose_name="Course Title")
    term = models.TextField(verbose_name="Course Term")
    students = models.ManyToManyField(User, related_name="course_students")
    course_staff = models.ManyToManyField(User, related_name="course_staff")