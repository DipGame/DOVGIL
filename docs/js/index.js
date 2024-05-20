document.addEventListener("DOMContentLoaded", function () {

    function addActive(element) {
        element.classList.add("active");
    }

    function removeActive(element) {
        element.classList.remove("active");
    }

    function toggleActive(element) {
        element.classList.toggle("active");
    }

    function addOpen(element) {
        element.classList.add("open");
    }

    function removeOpen(element) {
        element.classList.remove("open");
    }

    function toggleOpen(element) {
        element.classList.toggle("open");
    }

    function addInvise(element) {
        element.classList.add("invise");
    }

    function removeInvise(element) {
        element.classList.remove("invise");
    }

    function toggleInvise(element) {
        element.classList.toggle("invise");
    }

    function clearInputValue(input) {
        input.value = "";
    }

    ymaps.ready(init);

    function init() {
        // Создание карты.
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
        if (document.querySelector("#map")) {
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчнию: «широта, долгота».
                center: [55.754172, 37.635143],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 16,
                // Элементы управления
                // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
                controls: [

                    //    'rulerControl',  Линейка
                    //    'routeButtonControl', // Панель маршрутизации
                    //    'trafficControl',  Пробки
                    //    'typeSelector',  Переключатель слоев карты
                    //    'fullscreenControl',  Полноэкранный режим

                    // Поисковая строка
                    // new ymaps.control.SearchControl({
                    //     options: {
                    //         // вид - поисковая строка
                    //         size: 'large',
                    //         // Включим возможность искать не только топонимы, но и организации.
                    //         provider: 'yandex#search'
                    //     }
                    // })

                ]
            });

            // Добавление метки
            // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
            var myPlacemark = new ymaps.Placemark([55.754172, 37.635143], null, {
                iconLayout: 'default#image',
                iconImageHref: "./../img/point_map.svg",
                iconImageSize: [32, 50],
                iconImageOffset: [-15, -44]
            });

            // После того как метка была создана, добавляем её на карту.
            myMap.geoObjects.add(myPlacemark);

            var zoomControl = new ymaps.control.ZoomControl({ options: { position: { right: 5, top: 10 }, size: "small" } });

            myMap.controls.add(zoomControl);
            var geolocationControl = new ymaps.control.GeolocationControl({ options: { position: { right: 5, top: 80 } } });

            myMap.controls.add(geolocationControl);
        }

        if (document.querySelector("#map_2")) {
            var myMap_2 = new ymaps.Map("map_2", {
                // Координаты центра карты.
                // Порядок по умолчнию: «широта, долгота».
                center: [61.256553, 73.420745],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 16,
                // Элементы управления
                // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
                controls: [

                    //    'rulerControl',  Линейка
                    //    'routeButtonControl', // Панель маршрутизации
                    //    'trafficControl',  Пробки
                    //    'typeSelector',  Переключатель слоев карты
                    //    'fullscreenControl',  Полноэкранный режим

                    // Поисковая строка
                    // new ymaps.control.SearchControl({
                    //     options: {
                    //         // вид - поисковая строка
                    //         size: 'large',
                    //         // Включим возможность искать не только топонимы, но и организации.
                    //         provider: 'yandex#search'
                    //     }
                    // })

                ]
            });

            // Добавление метки
            // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
            var myPlacemark = new ymaps.Placemark([61.256553, 73.420745], null, {
                iconLayout: 'default#image',
                iconImageHref: "./../img/point_map.svg",
                iconImageSize: [32, 50],
                iconImageOffset: [-15, -44]
            });

            // После того как метка была создана, добавляем её на карту.
            myMap_2.geoObjects.add(myPlacemark);

            var zoomControl = new ymaps.control.ZoomControl({ options: { position: { right: 5, top: 10 }, size: "small" } });

            myMap_2.controls.add(zoomControl);
            var geolocationControl = new ymaps.control.GeolocationControl({ options: { position: { right: 5, top: 80 } } });

            myMap_2.controls.add(geolocationControl);
        }


    }

    Fancybox.bind('[data-fancybox]', {
        // Custom options
    });

    let dovgSwiper = new Swiper(".dovgSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        // loop: true,
        centeredSlides: false,
        slidesPerView: 'auto',
        spaceBetween: 40,
        // navigation: {
        //     nextEl: ".swiper-button-next-slider_2",
        //     prevEl: ".swiper-button-prev-slider_2",
        // },
        breakpoints: {
            600: {
                slidesPerView: 'auto',
                spaceBetween: 70,
            }
        }
    });
    let publSwiper = new Swiper(".publSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        loop: true,
        centeredSlides: false,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next-publSwiper",
            prevEl: ".swiper-button-prev-publSwiper",
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            940: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    // Скрипт копирования меню для мобилки
    if (document.getElementById('menu_mob') && document.getElementById('menu_desk')) {
        const menuDesk = document.getElementById('menu_desk');
        const menuMob = document.getElementById('menu_mob');
        menuMob.innerHTML = menuDesk.innerHTML;
    }
    // Скрипт открытия мобильного меню
    const overlay = document.querySelector('.overlay');
    const burger = document.getElementById('burger');
    const hiddMenu = document.getElementById('hidd_menu');
    const closeMenuBtn = document.getElementById('close_btn');




    burger.addEventListener('click', () => {
        addOpen(overlay);
        addOpen(hiddMenu);
    })
    closeMenuBtn.addEventListener('click', () => {
        removeOpen(overlay);
        removeOpen(hiddMenu);
    })

    overlay.addEventListener('click', () => {
        removeOpen(overlay);
        document.querySelectorAll('.open').forEach(element => {
            removeOpen(element);
        });
    })

    //Скрипт открытия адреса в скрытом меню
    if (document.querySelector(".adress__mob")) {
        const adressMob = document.querySelector(".adress__mob");
        const adressPunkt = adressMob.querySelectorAll("li");

        adressPunkt.forEach(element => {
            element.addEventListener('click', () => {
                toggleOpen(element);
            })
        });
    }
    if (document.querySelector(".footer__container")) {
        const footerCont = document.querySelector(".footer__container");
        if (footerCont.querySelector(".menu_3")) {
            const footerList = footerCont.querySelectorAll(".menu_3");
            footerList.forEach(element => {
                element.addEventListener('click', () => {
                    toggleOpen(element);
                })
            });
        }
    }
    // if (document.querySelector(".razdels")) {
    //     const razdelsCont = document.querySelector(".razdels");
    //     if (razdelsCont.querySelector(".card")) {
    //         const cardList = razdelsCont.querySelectorAll(".card");
    //         cardList.forEach(element => {
    //             element.addEventListener('click', () => {
    //                 toggleOpen(element);
    //             })
    //         });
    //     }
    // }
    if (document.querySelector(".contacts")) {
        const contacts = document.querySelector(".contacts");
        if (contacts.querySelector(".contacts__title")) {
            const contTitle = contacts.querySelectorAll(".contacts__title");
            contTitle.forEach(element => {
                element.addEventListener('click', () => {
                    toggleOpen(element.parentNode.parentNode);
                })
            });
        }
    }


    //Скрипт попап документов
    if (document.querySelector("#doc")) {
        const doc = document.querySelectorAll("#doc");
        const popupImgCont = document.querySelector('.popup.img');
        const popupImg = popupImgCont.querySelector("img");
        const closePopupImgBtn = popupImgCont.querySelector(".close-btn");

        doc.forEach(element => {
            element.addEventListener('click', () => {
                popupImg.src = element.getAttribute('data-src')
                addOpen(overlay);
                addOpen(popupImgCont);
            })
        });

        closePopupImgBtn.addEventListener('click', () => {
            removeOpen(overlay);
            removeOpen(popupImgCont);
        })
    }

    //Скрипт табы
    if (document.querySelector(".tabs_1")) {
        const tabsCont = document.querySelector(".tabs_1");
        const tab = tabsCont.querySelectorAll(".tab");
        const clientDiv = document.querySelector(".client");
        const clientCont = clientDiv.querySelectorAll(".container");



        tab.forEach(element => {
            element.addEventListener('click', () => {
                if (!element.classList.contains("active")) {
                    tab.forEach(el => {
                        removeActive(el);
                    });
                    clientCont.forEach(el => {
                        removeActive(el);
                    });
                    clientCont.forEach(el => {
                        if (element.id == el.id) {
                            addActive(el);
                        }
                    });
                    addActive(element);
                }
            })
        });
    }

    // Скрипт показать еще
    if (document.querySelector('.card-for-service')) {
        const cardForService = document.querySelectorAll('.card-for-service');

        cardForService.forEach(element => {
            let contSize = element.querySelector('.cont-size');
            let contShadow = element.querySelector('.shadow');
            let moreText = element.querySelector('.more');
            if (contSize.offsetHeight > 200) {
                removeInvise(contShadow);
                removeInvise(moreText);

                moreText.addEventListener('click', () => {
                    toggleOpen(moreText.parentNode);
                    if (moreText.parentNode.classList.contains('open')) {
                        moreText.textContent = 'Скрыть';
                    } else {
                        moreText.textContent = 'Показать еще';
                    }
                })
            }
        });
    }

    //Скрипт для вопросов с ответами
    if (document.querySelector('.answ__cont')) {
        const answCont = document.querySelectorAll('.answ__cont');

        answCont.forEach(element => {
            element.addEventListener('click', () => {
                toggleOpen(element);

            })
        });

    }



    //Скрипт для форм обраной связи

    window.addEventListener("DOMContentLoaded", function () {
        [].forEach.call(document.querySelectorAll('[name="phone"]'), function (input) {
            var keyCode;
            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                var pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                var matrix = "+7 (___) ___ ____",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function (a) {
                        return i < val.length ? val.charAt(i++) : a
                    });
                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i)
                }
                var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                    function (a) {
                        return "\\d{1," + a.length + "}"
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                    this.value = new_value;
                }
                if (event.type == "blur" && this.value.length < 5) {
                    this.value = "";
                }
            }

            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false);

        });

    });

    if (document.querySelector('form')) {
        const form = document.querySelectorAll('form');

        form.forEach(oneForm => {
            let nameInp = oneForm.querySelector("[name='name']");
            let phoneInp = oneForm.querySelector("[name='phone']");
            let nameCont = nameInp.parentNode;
            let phoneCont = phoneInp.parentNode;

            $(function () {
                $(nameInp).keyup(function () {
                    sergey = $(this).val().toLowerCase(), spout = 'http://,https,url,.ru,.com,.net,.tk,php,.ucoz,www,.ua,.tv,.info,.org,.su,.ру,.су,.ком,.инфо,//'.split(',');
                    for (litvinov = 0; litvinov < spout.length; litvinov++) {
                        if (sergey.search(spout[litvinov]) != -1) {
                            $(this).val(sergey.replace(spout[litvinov], '[Запрещено]'));
                            return true;
                        }
                    }
                });
            });

            function checkInputsValid(input, num) {
                if (input.value.length < num) {
                    input.parentNode.classList.add("active");
                    return false;
                } else {
                    input.parentNode.classList.remove("active");
                    return true;
                }
            }

            let check;

            function addLisInput(input, num) {
                checkInputsValid(input, num);
                input.addEventListener('input', check = () => checkInputsValid(input, num))
            }

            function removeLisInput(input) {
                input.removeEventListener('input', check)
            }

            function handleTextGood() {
                clearInputValue(nameInp);
                clearInputValue(phoneInp);
                document.querySelector('.popupGood').querySelector('h3').textContent = 'Заявка Успешно отправлена!';
                document.querySelector('.popupGood').querySelector('p').textContent = 'Скоро мы свяжемся с вами';
                removeOpen(oneForm.parentNode.parentNode);
                addOpen(document.querySelector('.popupGood'));
                setTimeout(() => {
                    removeOpen(document.querySelector('.popupGood'));
                    removeOpen(overlay);
                }, 5000);
            }

            function handleTextNoGood() {
                removeOpen(oneForm.parentNode.parentNode);
                document.querySelector('.popupGood').querySelector('h3').textContent = 'Повторите попытку позже';
                addOpen(document.querySelector('.popupGood'));
                setTimeout(() => {
                    removeOpen(document.querySelector('.popupGood'));
                    if (overlay.classList.contains("open")) {
                        addOpen(oneForm.parentNode.parentNode);
                    }
                }, 5000);
            }

            function handleTextError() {
                removeOpen(oneForm.parentNode.parentNode);
                document.querySelector('.popupGood').querySelector('h3').textContent = 'Что-то пошло не так';
                addOpen(document.querySelector('.popupGood'));
                setTimeout(() => {
                    removeOpen(document.querySelector('.popupGood'));
                    if (overlay.classList.contains("open")) {
                        addOpen(oneForm.parentNode.parentNode);
                    }
                }, 5000);
            }

            oneForm.addEventListener('submit', (e) => {
                e.preventDefault();
                removeLisInput(nameInp);
                removeLisInput(phoneInp);

                addLisInput(nameInp, 1);
                addLisInput(phoneInp, 17);

                if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17)) {

                    console.log('good');
                    handleTextGood();
                    // grecaptcha.ready(function () {
                    //     grecaptcha.execute('6Lfk9qspAAAAALXnyJqhAd6kX-ZFapXhfIN0DmQ-', { action: 'submit' }).then(function (token) {
                    //         let formData = new FormData();
                    //         formData.append('name', nameInp.value);
                    //         formData.append('phone', phoneInp.value);
                    //         formData.append('token', token);
                    //         fetch('/local/templates/main/tools/send.php', {
                    //             method: 'POST',
                    //             body: formData,
                    //         })
                    //             .then((res) => {
                    //                 return res.json();
                    //             })
                    //             .then(result => {
                    //                 if (result > 0.5) {
                    //                     handleTextGood();
                    //                 } else {
                    //                     handleTextNoGood();
                    //                 }
                    //             })
                    //             .catch((err) => {
                    //                 handleTextError();
                    //                 console.log(err);
                    //             })
                    //     });
                    // });

                }
            })

        });
    }

    // Скрипт показать еще ОТЫЗВЫ
    if (document.querySelector('.client_2')) {
        const rewCont = document.querySelector('.client_2');

        if (rewCont.querySelector('.button')) {
            const openMoreBtn = rewCont.querySelectorAll('.button');
            openMoreBtn.forEach(element => {
                element.addEventListener('click', () => {
                    let inviseCardRew = element.parentNode.querySelectorAll('.card.invise');
                    let num = 0;
                    inviseCardRew.forEach(el => {
                        if (element.parentNode.id == 1 && num < 6) {
                            removeInvise(el);
                            num++;
                        }
                        if (element.parentNode.id == 2 && num < 8) {
                            removeInvise(el);
                            num++;
                        }
                    });
                    if (!element.parentNode.querySelector('.card.invise')) {
                        addInvise(element);
                    }
                })
            });
        }
    }

    //Скрипт открытия/закрытия формы попап
    if (document.querySelector('.popupForm')) {
        const popupForm = document.querySelectorAll('.popupForm');
        let popupFormOpenBtn = document.querySelectorAll('.open-form-btn'); //Кнопки с таким классом будут вызывать попап
        popupForm.forEach(popup => {
            let popupFormCloseBtn = popup.querySelector('.close-btn');
            popupFormCloseBtn.addEventListener('click', () => {
                removeOpen(popup);
                removeOpen(overlay);
            })
            if (popup.querySelector('form')) {
                popupFormOpenBtn.forEach(element => {
                    element.addEventListener('click', () => {
                        addOpen(popup);
                        addOpen(overlay);
                    })
                });
            }
        });

    }
});
