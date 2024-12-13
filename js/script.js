document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        { id: 'html-bar', level: '30%' },
        { id: 'css-bar', level: '30%' },
        { id: 'python-bar', level: '25%' },
        { id: 'java-bar', level: '30%' },
        { id: 'cpp-bar', level: '20%' }
    ];

    skills.forEach(skill => {
        const bar = document.getElementById(skill.id);
        if (bar) {
            bar.style.width = skill.level;
        }
    });
});
