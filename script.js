const featureBtn = document.querySelector('.feature_btn');
const companyBtn = document.querySelector('.company_btn');
const hiddenFeatures = document.querySelector('.hidden_features');
const hiddenCompany = document.querySelector('.hidden_company');

featureBtn.addEventListener('click', function(event) {
	hiddenFeatures.classList.toggle('active');
})

companyBtn.addEventListener('click', function(event) {
	hiddenCompany.classList.toggle('active');
})