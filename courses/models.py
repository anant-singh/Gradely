from django.contrib.auth.models import User
from django.db import models


class Course(models.Model):

    term_choices = (
        ('SP14', 'Spring 2014'),
        ('FA14', 'Fall 2014'),
        ('SP15', 'Spring 2015')
    )

    id = models.AutoField(primary_key=True)
    department = models.CharField(max_length=100, verbose_name="Department")
    crn = models.IntegerField(unique=True, verbose_name="CRN")
    subject_code = models.CharField(max_length=4, verbose_name="Subject Code")
    number = models.IntegerField(verbose_name="Number")
    title = models.CharField(max_length=100, verbose_name="Course Title")
    term = models.CharField(max_length=4, verbose_name="Course Term", choices=term_choices)
    owner = models.ForeignKey(User, verbose_name="Course Owner")

    def __unicode__(self):
        return "{0}: {1} {2}".format(self.crn, self.subject_code, self.number)


class MachineProblem(models.Model):
    course = models.ForeignKey('Course')
    name = models.CharField(max_length=100, verbose_name="Name of MP")
    #source_path = models.FilePathField(verbose_name="Path for source files")
    due_date = models.DateField(verbose_name="Due Date")
    publish_date = models.DateField(verbose_name="Publish Date")

    def __unicode__(self):
        return "{0}: {1}".format(self.course, self.name)


class GradeSheet(models.Model):
    machine_problem = models.ForeignKey(MachineProblem)
    student = models.ForeignKey(User)
    grade_fields = models.ManyToManyField('GradeField')

    def __unicode__(self):
        return "MP: {0} Student: {1}".format(self.machine_problem, self.student)


class GradeField(models.Model):
    criteria = models.CharField(max_length=100, verbose_name="Rubric criteria")
    max_value = models.IntegerField(verbose_name="Max Grade")

    def __unicode__(self):
        return self.criteria