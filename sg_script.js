var target_div = document.getElementById('display_area');
var running_grade_total =0;
var running_grade_count=0;

function add_record()
{
    var student_container = document.createElement('div'); //a container that holds a single student's information
    student_container.classList.add("student_container");
    
    var student_name = document.createElement ('span'); //a container that holds a student's name
    
    var grade_input =document.createElement('span'); //a container that holds a student's grade
    
    var class_input=document.createElement('span'); //a container that holds a student's class name
    
    student_name.textContent=document.getElementById('student_name').value;
    var current_student_grade =document.getElementById('grade_input').value;
    
    current_student_grade = parseInt(current_student_grade);
    grade_input.textContent = current_student_grade;
    class_input.textContent = document.getElementById('class_input').value;
    
    
    running_grade_total+= current_student_grade;
    running_grade_count++;
    
    var average = running_grade_total/running_grade_count;
    document.getElementById('average_element').textContent="Average : " + average;
    
    student_container.appendChild(student_name);
    student_container.appendChild(class_input);
    student_container.appendChild(grade_input);
    target_div.appendChild(student_container);
}