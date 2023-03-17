const views = {
    "about": `
    <section id="about" class="section">
    <h2>About</h2>
    </section>
    `,
    "skills": `
    <section id="skills" class="section">
    <h2>skills</h2>
    </section>
    `,
    "projects": `
    <section id="projects" class="section">
    <h2>projects</h2>
    </section>
    `,
    "contact": `
    <section id="contact" class="section">
    <h2>contact</h2>
    </section>
    `
}
const navLinks = document.querySelectorAll('a')
const main = document.querySelector('#main')

const changeView = evt => {
    let views = evt.target.id
    main.innerHTML = views[view]
}

for(let i =0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', changeView)
}
