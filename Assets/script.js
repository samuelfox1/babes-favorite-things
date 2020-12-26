$(document).ready(function () {

    console.log('linked!')

    var currentURL
    var pictures = [
        {
            URL: "https://i.imgur.com/L2BB78a.jpg"
        }, {
            URL: "https://i.imgur.com/3jxw671.jpg"
        }, {
            URL: "https://i.imgur.com/Mk4L4FD.jpg"
        }, {
            URL: "https://i.imgur.com/G4CNSNk.jpg"
        }, {
            URL: "https://i.imgur.com/x17Uhf0.jpg"
        }, {
            URL: "https://i.imgur.com/KAyr6pB.jpg"
        }
    ]

    //if local storage is empty, load a random picture
    if (localStorage.getItem('babes-favorite-things') !== null) {
        console.log('loading Existing')
        loadExisting()
        //if local storage has data, load data fromn local storage
    } else {
        console.log('loding New')
        loadNew()
    }


    function loadExisting() {
        currentURL = localStorage.getItem('babes-favorite-things')
        $('#new-pic').attr('src', currentURL)
    }

    function loadNew() {
        var i = Math.floor(Math.random() * pictures.length)
        currentURL = pictures[i].URL
        $('#new-pic').attr('src', currentURL)
        localStorage.setItem('babes-favorite-things', currentURL)
    }

    $(document).on('click', '#new-pic', function (event) {
        event.preventDefault()
        loadNew()
    })

    $(document).on('click', '#pic-button', function (event) {
        event.preventDefault(event)
        loadNew()
    })

})

