const main_input = document.getElementById('input');
const main_search = document.getElementById('main_search');

main_input.addEventListener('focus', () =>{
    main_search.classList.add('hover_effect');
});

main_search.addEventListener('focusout', () =>{
    main_search.classList.remove('hover_effect');
});