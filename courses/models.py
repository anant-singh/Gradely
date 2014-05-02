from django.contrib.auth.models import User
from django.db import models
from django.forms import ModelForm


class Course(models.Model):

    term_choices = (
        ('SP14', 'Spring 2014'),
        ('FA14', 'Fall 2014'),
        ('SP15', 'Spring 2015')
    )

    id = models.AutoField(primary_key=True)
    subject = models.CharField(max_length=100, verbose_name="Course Subject")
    number = models.IntegerField(verbose_name="Course Number")
    subject_code = models.CharField(max_length=4, verbose_name="Subject Code")
    title = models.CharField(max_length=100, verbose_name="Course Title")
    term = models.CharField(max_length=4, verbose_name="Course Term", choices=term_choices)
    students = models.ManyToManyField(User, related_name="course_students")
    course_staff = models.ManyToManyField(User, related_name="course_staff")


class CourseForm(ModelForm):
    class Meta:
        model = Course
        fields = ['number', 'subject', 'subject_code', 'title', 'term', 'students', 'course_staff']
