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


class MachineProblems(models.Model):
    course = models.ForeignKey('Course')
    name = models.TextField(verbose_name="Name of MP")
    source_path = models.FilePathField(verbose_name="Path for source files")
    due_date = models.DateField(verbose_name="Due Date")
    publish_date = models.DateField(verbose_name="Publish Date")


class GradeSheet(models.Model):
    machine_problem = models.ForeignKey('MachineProblems')
    student = models.ForeignKey(User, limit_choices_to={'groups': 'Student'}, related_name="grade_students")
    grade_fields = models.ManyToManyField('GradeFields')


class GradeFields(models.Model):
    grade_sheet = models.ForeignKey('GradeSheet')
    criteria = models.TextField(verbose_name="Rubric criteria")
    value = models.IntegerField(verbose_name="Criteria Grade")


class CourseForm(ModelForm):
    class Meta:
        model = Course
        fields = ['number', 'subject', 'subject_code', 'title', 'term', 'students', 'course_staff']