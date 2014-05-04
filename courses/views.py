from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from models import MachineProblem, GradeSheet


@login_required()
def add_mp_grade(request, mp_id, student_id):
    mp = get_object_or_404(MachineProblem, pk=mp_id)
    student = get_object_or_404(User, pk=student_id)
    gradesheet = get_object_or_404(GradeSheet, machine_problem=mp, student=student)
    return render(request, 'courses/mp_grade_sheet_form.html', {'gradesheet': gradesheet})


@login_required()
def course_index(request):
    return render(request, 'courses/course_index.html', {})
