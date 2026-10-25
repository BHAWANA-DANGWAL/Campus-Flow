
const form = document.getElementById("assignmentForm");
const titleInput = document.getElementById("title");
const subjectInput = document.getElementById("subject");
const deadlineInput = document.getElementById("deadline");
const assignmentList = document.getElementById("assignmentList");
const emptyMessage = document.getElementById("emptyMessage");

let assignments = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const assignment = {
        title: titleInput.value.trim(),
        subject: subjectInput.value.trim(),
        deadline: deadlineInput.value,
        completed: false
    };

    assignments.push(assignment);
    renderAssignments();
    form.reset();
});

function renderAssignments() {
    assignmentList.replaceChildren();

    emptyMessage.hidden = assignments.length > 0;

    for (const assignment of assignments) {
        const card = document.createElement("div");

        const heading = document.createElement("h3");
        heading.textContent = assignment.title;

        const subject = document.createElement("p");
        subject.textContent = "Subject: " + assignment.subject;

        const deadline = document.createElement("p");
        deadline.textContent = "Deadline: " + assignment.deadline;

        card.append(heading, subject, deadline);
        assignmentList.appendChild(card);
    }
}
