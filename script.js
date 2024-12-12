
        function showJoke() {
            const hiddenContent = document.getElementById('hiddenContent');
            hiddenContent.style.display = 'block';
        }

        function moveButton(button) {
            const x = Math.random() * (window.innerWidth - button.offsetWidth);
            const y = Math.random() * (window.innerHeight - button.offsetHeight);
            button.style.position = 'absolute';
            button.style.left = `${x}px`;
            button.style.top = `${y}px`;
        }
