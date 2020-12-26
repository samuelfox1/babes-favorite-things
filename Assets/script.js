$(document).ready(function () {

    console.log('linked!')

    var currentURL
    var pictures = [
        {
            URL: "https://www.dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg"
        }, {
            URL: "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2020/04/shelter-dog-cropped-1.jpg"
        }, {
            URL: "https://cdn.royalcanin-weshare-online.io/UCImMmgBaxEApS7LuQnZ/v2/eukanuba-market-image-puppy-beagle?w=5596&h=2317&rect=574,77,1850,1045&auto=compress,enhance"
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
})

