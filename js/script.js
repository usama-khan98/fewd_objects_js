var college = { //hotel
    // Object properties
    name: 'Dorset College', 
    students:300, //rooms
     //booked
    failed: 50, //gym boolean
    courses: ['Computer Science', 'Business Management', 'Nursing', 'Human Resources'], //roomTypes
    checkPassed: function() { //checkAvailaibility
        return this.students - this.failed;
    }
};

var elName = document.getElementById('collegeName');
elName.textContent = college.name;

var elPass = document.getElementById('passed');
elPass.textContent = college.checkPassed();

var elcourses = document.getElementById('courseNames');
elcourses.textContent = college.courses;