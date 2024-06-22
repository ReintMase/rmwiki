document.addEventListener('DOMContentLoaded', function() {
    var questions = document.querySelectorAll('.questions');

    questions.forEach(function(question) {
        var answer = question.nextElementSibling;
        question.addEventListener('click', function(e) {
            e.preventDefault();
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        })
    })

    document.addEventListener('DOMContentLoaded', function() // <--- added the missing }
    {
        var questions = document.querySelectorAll('.questions');

        questions.forEach(function(question) {
            var answer = question.nextElementSibling;
            question.addEventListener('click', function(e) {
                e.preventDefault();
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            });
        });

        document.addEventListener('click', function(e) {
            questions.forEach(function(question) {
                var answer = question.nextElementSibling;
                if (!question.contains(e.target) && !answer.contains(e.target)) {
                    answer.style.display = 'none';
                }
            });
        });

        var effectsLink = document.getElementById('effectsLink');
        var effectsDropdown = document.getElementById('effectsDropdown');

        effectsLink.addEventListener('click', function(e) {
            e.preventDefault();
            effectsDropdown.style.display = effectsDropdown.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', function(e) {
            if (!effectsLink.contains(e.target) && !effectsDropdown.contains(e.target)) {
                effectsDropdown.style.display = 'none';
            }
        });
    });})