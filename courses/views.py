from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from models import Course, CourseForm


@login_required()
def course_index(request):
    return render(request, 'courses/course_index.html', {})


@login_required()
def create_course(request):
    status = False
    if request.method == 'POST':  # If the form has been submitted...
        # CourseForm was defined in the previous section
        form = CourseForm(request.POST)  # A form bound to the POST data
        if form.is_valid():  # All validation rules pass
            c = Course(
                subject=form.cleaned_data['subject'],
                number=form.cleaned_data['number'],
                subject_code=form.cleaned_data['subject_code'],
                title=form.cleaned_data['title'],
                term=form.cleaned_data['term'],
                students=form.cleaned_data['students'],
                course_staff=form.cleaned_data['course_staff'],
            )
            c.save()
            status = True
    else:
        form = CourseForm()  # An unbound form

    return render(request, 'courses/course_form.html', {'status': status, 'form': form})