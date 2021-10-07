var nameOfStudents = [];
function  submit(){
    for (var j=1; j<=4; j++){
        var student_name = document.getElementById("name_of_the_student_"+j).value;
        console.log(student_name);
        nameOfStudents.push(student_name);
    }
    console.log(nameOfStudents);
    var displayStudentName = [];
    var lengthStudentArray = nameOfStudents.length;

    for (var k=0;k<lengthStudentArray; k++){
        displayStudentName.push("<h4>NAME - "+nameOfStudents[k]+"</h4>");
    }
    console.log(displayStudentName);
    document.getElementById("display_name_with_commas").innerHTML=displayStudentName;
    var remove_commas = displayStudentName.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function  sorting(){
    nameOfStudents.sort();
    var displayStudentName = [];
    var lengthStudentArray = nameOfStudents.length;

    for (var k=0;k<lengthStudentArray; k++){
        displayStudentName.push("<h4>NAME - "+nameOfStudents[k]+"</h4>");
    }
    console.log(displayStudentName);
    document.getElementById("display_name_with_commas").innerHTML=displayStudentName;
    var remove_commas = displayStudentName.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}