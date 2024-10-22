// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var imageUpload = document.getElementById('imageUpload');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var linkedIn = document.getElementById('linkedIn').value;
    var github = document.getElementById('github').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var projects = document.getElementById('projects').value;
    // Convert education, experience, skills, and projects to list items
    var educationList = education.split(/[\n,]+/).map(function (education) { return "<li>".concat(education.trim(), "</li>"); }).join('');
    var experienceList = experience ? experience.split(/[\n,]+/).map(function (experience) { return "<li>".concat(experience.trim(), "</li>"); }).join('') : '';
    var skillList = skills.split(/[\n,]+/).map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
    var projectList = projects ? projects.split(',').map(function (project) {
        var _a = project.split('|').map(function (part) { return part.trim(); }), projectName = _a[0], projectUrl = _a[1];
        return "<li><b>".concat(projectName, "</b>: <a href=\"").concat(projectUrl, "\" target=\"_blank\">").concat(projectUrl, "</a></li>");
    }).join('') : '';
    // Handle image upload
    var reader = new FileReader();
    if (imageUpload.files && imageUpload.files[0]) {
        reader.readAsDataURL(imageUpload.files[0]);
        reader.onload = function () {
            var imageData = reader.result;
            // Generate the resume content dynamically
            var resumeHTML = "\n            <div class=\"resume-portfolio\">\n             <!-- Left Section -->\n            <aside class=\"sidebar\">\n            <img src=\"".concat(imageData, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 50%;\">\n            <h1><b></b><span contenteditable=\"true\"> ").concat(name, "</h1>\n            <section>\n            <h2>Contact</h2>\n            <div class=\"contact-item\">\n            <i class=\"fas fa-envelope\"></i>\n            <p>Email:<span contenteditable=\"true\"> <a href=mailto:\"").concat(email, "\">").concat(email, "</a></p>\n            </div>\n             <div class=\"contact-item\">\n            <i class=\"fas fa-phone\"></i>\n            <p>Phone:<span contenteditable=\"true\"> ").concat(phone, "</p>\n            </div>\n             ").concat(linkedIn ? "<div class=\"contact-item\">\n            <i class=\"fab fa-linkedin\"></i>\n            <p>LinkedIn:<span contenteditable=\"true\"> <a href=\"".concat(linkedIn, "\" target=\"_blank\">").concat(linkedIn, "</a></p>\n            </div>") : '', "\n             ").concat(github ? "<div class=\"contact-item\">\n            <i class=\"fab fa-github\"></i>\n            <p>Github:<span contenteditable=\"true\"> <a href=\"".concat(github, "\" target=\"_blank\">").concat(github, "</a></p>\n            </div>") : '', "\n            </section>\n            </aside>\n\n            <main class=\"core-content\">\n            <section contenteditable=\"true\">\n            <h3>Objective</h3>\n            <p>").concat(objective, "</p>\n            </section>\n\n            <section contenteditable=\"true\">\n            <h3>Education</h3>\n            <ul>").concat(educationList, "</ul>\n            </section>\n            \n            ").concat(experienceList ? "<section contenteditable=\"true\">\n            <h3>Experience</h3>\n            <ul>".concat(experienceList, "</ul>\n            </section>") : '', "\n\n            <section contenteditable=\"true\">\n            <h3>Skills</h3>\n            <ul>").concat(skillList, "</ul>\n            </section>\n\n            ").concat(projectList ? "<section contenteditable=\"true\">\n            <h3>Projects</h3>\n            <ul>".concat(projectList, "</ul>\n            </section>") : '', "\n            </div>\n            ");
            // Display the generated resume
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            }
            else {
                console.error('The resume display element is missing.');
            }
        };
    }
    else {
        // Generate the resume without image if none is uploaded
        var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</p>\n        <h3>Contact</h3>\n        <div class=\"contact-item\">\n            <i class=\"fas fa-envelope\"></i>\n            <p><b>Email:</b><span contenteditable=\"true\"> <a href=mailto:\"").concat(email, "\">").concat(email, "</a></p>\n        </div>\n            <div class=\"contact-item\">\n            <i class=\"fas fa-phone\"></i>\n            <p><b>Phone:</b><span contenteditable=\"true\"> ").concat(phone, "</p>\n        </div>\n             ").concat(linkedIn ? "<div class=\"contact-item\">\n            <i class=\"fab fa-linkedin\"></i>\n            <p><b>LinkedIn:</b><span contenteditable=\"true\"> <a href=\"".concat(linkedIn, "\" target=\"_blank\">").concat(linkedIn, "</a></p>\n        </div>") : '', "\n            ").concat(github ? "<div class=\"contact-item\">\n            <i class=\"fab fa-github\"></i>\n            <p><b>Github:</b><span contenteditable=\"true\"> <a href=\"".concat(github, "\" target=\"_blank\">").concat(github, "</a></p>\n        </div>") : '', "\n        <section contenteditable=\"true\">\n        <h3>Objective</h3>\n        <p>").concat(objective, "</p>\n        </section>\n\n        <section contenteditable=\"true\">\n        <h3>Education</h3>\n        <ul>").concat(educationList, "</ul>\n        </section>\n\n        ").concat(experienceList ? "<section contenteditable=\"true\">\n        <h3>Experience</h3>\n        <ul>".concat(experienceList, "</ul>\n        </section>") : '', "\n\n        <section contenteditable=\"true\">\n        <h3>Skills</h3>\n        <ul>").concat(skillList, "</ul>\n        </section>\n\n         ").concat(projectList ? "<section contenteditable=\"true\">\n        <h3>Projects</h3>\n        <ul contenteditable=\"true\">".concat(projectList, "</ul>\n        </section>") : '', "\n        ");
        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error('The resume display element is missing.');
        }
    }
});
