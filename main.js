let tab = function() {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
    tabContent = document.querySelectorAll('.tab'),
    tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item=>{
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
    
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') :
            item.classList.remove('is-active');
        })

    }
};

tab();

const K = 22;
const ARR = [10, 15, 18, 24, 38];

function findBestMatch(K, ARR) {
    const closest = ARR.reduce((prev, curr) => {
    return (Math.abs(curr - K) < Math.abs(prev - K) ? curr : prev);
});
console.log(closest)
}

const bestMatch = findBestMatch(K, ARR);