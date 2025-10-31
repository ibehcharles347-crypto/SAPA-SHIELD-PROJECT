let cardTextCont1 = document.querySelector('.testimonial1');
let cardTextCont2 = document.querySelector('.testimonial2');
let cardTextCont3 = document.querySelector('.testimonial3');

let testimonial1 = document.createElement('p');
testimonial1.textContent = 'SapaShield helped me save enough money for my school fees without stress. No more calling home for urgent 2k!'
cardTextCont1.append(testimonial1);

let testimonial2 = document.createElement('p');
testimonial2.textContent = 'As a freelancer with regular income, I was always broke ny month-end. With SapaShield, I can now smooth out my spending and have emergency funds.'
cardTextCont2.append(testimonial2);

let testimonial3 = document.createElement('p');
testimonial3.textContent = "I've tried many finance apps, but SapaShield understands the Nigerian ecomnomy. The automated savings has helped me save for rent without thinking about it."
cardTextCont3.append(testimonial3);


testimonial1.className = 'testimonial'
testimonial2.className = 'testimonial'
testimonial3.className = 'testimonial'

let featuresCardTextCont1 = document.querySelector('.card1');
let featuresCardTextCont2 = document.querySelector('.card2');
let featuresCardTextCont3 = document.querySelector('.card3');
let featuresCardTextCont4 = document.querySelector('.card4');

let featuresTitle1 = document.createElement('h5');
featuresTitle1.textContent = 'Emergency Fund Protection'
featuresCardTextCont1.append(featuresTitle1);

let featuresbody1 = document.createElement('p');
featuresbody1.textContent = 'Automatically save for unexpected expenses and get interest on your savings.'
featuresCardTextCont1.append(featuresbody1);

let featuresTitle2 = document.createElement('h5');
featuresTitle2.textContent = 'Smart Budgeting Tools'
featuresCardTextCont2.append(featuresTitle2);
let featuresbody2 = document.createElement('p');
featuresbody2.textContent = 'Track your spending pattern and get personalised information.'
featuresCardTextCont2.append(featuresbody2);

let featuresTitle3 = document.createElement('h5');
featuresTitle3.textContent = 'Goal-based Saving'
featuresCardTextCont3.append(featuresTitle3);
let featuresbody3 = document.createElement('p');
featuresbody3.textContent = 'Create savings goals and watch your money grow toward your dreams.'
featuresCardTextCont3.append(featuresbody3);

let featuresTitle4 = document.createElement('h5');
featuresTitle4.textContent = 'Financial Insights'
featuresCardTextCont4.append(featuresTitle4);
let featuresbody4 = document.createElement('p');
featuresbody4.textContent = 'Get valuable insights to help you make better financial decisions.'
featuresCardTextCont4.append(featuresbody4);

featuresTitle1.className = 'testimonial';
featuresTitle2.className = 'testimonial';
featuresTitle3.className = 'testimonial';
featuresTitle4.className = 'testimonial';
featuresbody1.className = 'testimonial';
featuresbody2.className = 'testimonial';
featuresbody3.className = 'testimonial';
featuresbody4.className = 'testimonial';


let backToTopBtn = document.querySelector('#back_to_top');


window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'block';
    }
    else {
        backToTopBtn.style.display = 'none';
    }
}
backToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}