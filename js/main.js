const rates = document.querySelectorAll('.rates')
const submitButton = document.querySelector('.btn_submit')
const submitSection = document.querySelector('.thankSection')
const ratingSection = document.querySelector('.ratingSection')
const current_rating = document.querySelector('.ratesText')

rates.forEach((rate, i) =>{
    rate.onclick = function () {
        let current_rate = i + 1;
        current_rating.innerText = `You selected ${current_rate} out of 5`

        rates.forEach(rate=>{
            rate.classList.remove('active')
        })
        rate.classList.add('active')
    }
})

submitButton.addEventListener('click', ()=>{
    submitSection.classList.remove('sctHidden');
    submitSection.classList.add('sctShow');
    ratingSection.classList.add('sctHidden');
})