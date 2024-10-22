// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const imageUpload = document.getElementById('imageUpload') as HTMLInputElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const linkedIn = (document.getElementById('linkedIn') as HTMLInputElement).value;
    const github = (document.getElementById('github') as HTMLInputElement).value;
    const objective = (document.getElementById('objective')as HTMLTextAreaElement).value
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;

     // Convert education, experience, skills, and projects to list items
    const educationList = education.split(/[\n,]+/).map(education => `<li>${education.trim()}</li>`).join('');
    const experienceList = experience ? experience.split(/[\n,]+/).map(experience => `<li>${experience.trim()}</li>`).join(''):'';
    const skillList = skills.split(/[\n,]+/).map(skill => `<li>${skill.trim()}</li>`).join('');
    const projectList = projects ? projects.split(',').map(project => { const [projectName, projectUrl] = project.split('|').map(part => part.trim());
        return `<li><b>${projectName}</b>: <a href="${projectUrl}" target="_blank">${projectUrl}</a></li>`;
    }).join(''):'';

    // Handle image upload
    const reader = new FileReader();
    if (imageUpload.files && imageUpload.files[0]) {
        reader.readAsDataURL(imageUpload.files[0]);
        reader.onload = () => {
            const imageData = reader.result;

            // Generate the resume content dynamically
            const resumeHTML = `
            <div class="resume-portfolio">
             <!-- Left Section -->
            <aside class="sidebar">
            <img src="${imageData}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%;">
            <h1><b></b><span contenteditable="true"> ${name}</h1>
            <section>
            <h2>Contact</h2>
            <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <p>Email:<span contenteditable="true"> <a href=mailto:"${email}">${email}</a></p>
            </div>
             <div class="contact-item">
            <i class="fas fa-phone"></i>
            <p>Phone:<span contenteditable="true"> ${phone}</p>
            </div>
             ${linkedIn ? `<div class="contact-item">
            <i class="fab fa-linkedin"></i>
            <p>LinkedIn:<span contenteditable="true"> <a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
            </div>`:''}
             ${github ? `<div class="contact-item">
            <i class="fab fa-github"></i>
            <p>Github:<span contenteditable="true"> <a href="${github}" target="_blank">${github}</a></p>
            </div>`:''}
            </section>
            </aside>

            <main class="core-content">
            <section contenteditable="true">
            <h3>Objective</h3>
            <p>${objective}</p>
            </section>

            <section contenteditable="true">
            <h3>Education</h3>
            <ul>${educationList}</ul>
            </section>
            
            ${experienceList ? `<section contenteditable="true">
            <h3>Experience</h3>
            <ul>${experienceList}</ul>
            </section>`: ''}

            <section contenteditable="true">
            <h3>Skills</h3>
            <ul>${skillList}</ul>
            </section>

            ${projectList ? `<section contenteditable="true">
            <h3>Projects</h3>
            <ul>${projectList}</ul>
            </section>`:''}
            </div>
            `;

            // Display the generated resume
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            } else {
                console.error('The resume display element is missing.');
            }
        };
    } else {
        // Generate the resume without image if none is uploaded
        const resumeHTML = `
        <h2><b>Resume</b></h2>
        <p><b>Name:</b><span contenteditable="true"> ${name}</p>
        <h3>Contact</h3>
        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <p><b>Email:</b><span contenteditable="true"> <a href=mailto:"${email}">${email}</a></p>
        </div>
            <div class="contact-item">
            <i class="fas fa-phone"></i>
            <p><b>Phone:</b><span contenteditable="true"> ${phone}</p>
        </div>
             ${linkedIn ? `<div class="contact-item">
            <i class="fab fa-linkedin"></i>
            <p><b>LinkedIn:</b><span contenteditable="true"> <a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
        </div>`:''}
            ${github ? `<div class="contact-item">
            <i class="fab fa-github"></i>
            <p><b>Github:</b><span contenteditable="true"> <a href="${github}" target="_blank">${github}</a></p>
        </div>`:''}
        <section contenteditable="true">
        <h3>Objective</h3>
        <p>${objective}</p>
        </section>

        <section contenteditable="true">
        <h3>Education</h3>
        <ul>${educationList}</ul>
        </section>

        ${experienceList ? `<section contenteditable="true">
        <h3>Experience</h3>
        <ul>${experienceList}</ul>
        </section>`:''}

        <section contenteditable="true">
        <h3>Skills</h3>
        <ul>${skillList}</ul>
        </section>

         ${projectList ? `<section contenteditable="true">
        <h3>Projects</h3>
        <ul contenteditable="true">${projectList}</ul>
        </section>`:''}
        `;

        // Display the generated resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        } else {
            console.error('The resume display element is missing.');
        }
    }    
});
