from django.contrib import admin

# Register your models here.
from models import *

admin.site.register(Course)
admin.site.register(MachineProblem)
admin.site.register(GradeSheet)
admin.site.register(GradeField)