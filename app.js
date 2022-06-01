onload = () => {

    let transition = document.querySelector('#transition');
    let anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition.classList.remove('transition__active');
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        let anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let targetUrl = e.target.href;

            setTimeout(() => {
                location.href = targetUrl;
            }, 500);
        });
    };
}