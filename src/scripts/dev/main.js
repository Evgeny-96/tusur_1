document.addEventListener('DOMContentLoaded', () => {
   "use strict";

   // Навигация + фильтр
   const root = document.documentElement,
      navToggle = document.querySelector("#js-navToggle"),
      filterToggle = document.querySelectorAll(".js-filterToggle");

      function navShow (el, cl) {
         el.addEventListener("click", function () {
            root.classList.toggle(cl);
            console.log('el: ', el);
         });
      }

   if (navToggle) {
      navToggle.addEventListener("click", function () {
         root.classList.toggle("show-nav");
      });
   }
   if (filterToggle) {
      filterToggle.forEach(el => {
         el.addEventListener("click", function () {
            root.classList.toggle("show-filter");
         });
      });
   }

   // Активные избранное и корзина
   const galleryCardLink = document.querySelectorAll('.gallery__card-link');
   if (galleryCardLink) {
      galleryCardLink.forEach(el => {
         el.addEventListener('click', function() {
            this.classList.toggle("active");
         });
      });
   }

   // Слайдер
   const swipers = document.querySelectorAll(".js-swiper"),
      jsCenteredSlides = document.querySelector('.js-centeredSlides');
      
      let cntr = false;
   if (jsCenteredSlides) cntr = true;

   if (swipers) {
      swipers.forEach(function (swpr) {
         new Swiper(swpr, {
            loop: true,
            updateOnWindowResize: true,
            centeredSlides: cntr,   //центировать активный слайд
            slidesPerView: "auto",
            freeMode: true,
            spaceBetween: 0,
            speed: 500,
            grabCursor: true,
            navigation: {
               nextEl: ".swiper-arrow-next",
               prevEl: ".swiper-arrow-prev",
               disabledClass: "arrow--disabled"
            }
         });
      }); 
   }

   // Select
   const jsSelectric = $(".js-selectric");
   if (jsSelectric.length) {
      jsSelectric.selectric({
         nativeOnMobile: false
      });
   }

   // Маска ввода номера телефона
   const mobileMask = $('.js-mobileMask');
   if (mobileMask.length) {
      mobileMask.mask('+7 (000) 000 00 00', { placeholder: "Укажи свой телефон" });
   }

   // Календарь
   const dateField = $(".js-dateField");
   if (dateField.length) {
      const pickerInit = function (pick) {
         const dateInput = pick.find(".js-dateInput");
         const dateDay = pick.find(".js-dateDay");
         const dateMonth = pick.find(".js-dateMonth");
         const dateYear = pick.find(".js-dateYear");
         const dateConfig = {
            autoClose: true,
            maxDate: new Date(),
            navTitles: {
               days: "MMMM <i>yyyy</i>"
            },
            onSelect: function ({ date }) {
               dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
               dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
               dateYear.val(date ? date.getFullYear() : "");
            }
         };
         new AirDatepicker(dateInput[0], dateConfig);
      };
      $.each(dateField, function (i) {
         pickerInit($(this));
      });
   }

   // Валидация формы попап
   const loginForm = $('#js-loginForm');
   if (loginForm.length) {
      loginForm.validate({
         errorElement: "span"
      });
   }

   // Отправка данных формы на сервер
   const loginFormAll = $("#js-loginForm");
   if (loginFormAll.length) {
      const loginAction = loginFormAll.attr("action"),
         loginEmail = loginFormAll.find("#js-registrationEmail"),
         loginTel = loginFormAll.find("#js-registrationTel"),
         loginName = loginFormAll.find("#js-registrationName"),
         loginSurname = loginFormAll.find("#js-registrationSurname");

      loginFormAll.validate({
         errorElement: "span",
         submitHandler: function (form, event) {
            event.preventDefault();
            $.ajax({
               url: subscribeAction,
               method: "POST",
               data: {
                  email: loginEmail.val(),
                  tel: loginTel.val(),
                  name: loginName.val(),
                  surname: loginSurname.val()
               },
               success: function () {
                  loginEmail.val("");
                  loginEmail.blur();
                  alert("Вы успешно зарегистрировались");
               },
               error: function () {
                  alert("Что-то пошло не так, попробуйте еще раз");
               }
            });
         }
      });
   }
   
});