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
        }, {
            URL: "https://i.imgur.com/E7JD9yk.jpg"
        }, {
            URL: "https://i.imgur.com/qReKxMl.jpg"
        }, {
            URL: "https://i.imgur.com/MHO9t4b.jpg"
        }, {
            URL: "https://i.imgur.com/E7zF3xX.png"
        }, {
            URL: "https://i.imgur.com/SM0pqgt.png"
        }, {
            URL: "https://i.imgur.com/sggjp6R.png"
        }, {
            URL: "https://i.imgur.com/R5dAgd9.jpg"
        }, {
            URL: "https://i.imgur.com/v77fPIe.png"
        }, {
            URL: "https://i.imgur.com/fYVxUp0.jpg"
        }, {
            URL: "https://i.imgur.com/Al3haUL.jpg"
        }, {
            URL: "https://i.imgur.com/aRz9siz.jpg"
        }, {
            URL: "https://i.imgur.com/2bA5goR.jpg"
        }, {
            URL: "https://i.imgur.com/aX3uTpo.jpg"
        }, {
            URL: "https://i.imgur.com/DfDbLNL.png"
        }, {
            URL: "https://i.imgur.com/6SFh5mv.jpg"
        }, {
            URL: "https://i.imgur.com/HvOVOdx.jpg"
        }, {
            URL: "https://i.imgur.com/GD3j7UW.jpg"
        }, {
            URL: "https://i.imgur.com/XYQnzab.jpg"
        }, {
            URL: "https://i.imgur.com/EYFZgCx.jpg"
        }, {
            URL: "https://i.imgur.com/WO90rs2.jpg"
        }, {
            URL: "https://i.imgur.com/48QOGil.jpg"
        }, {
            URL: "https://i.imgur.com/RKga6NB.jpg"
        }, {
            URL: "https://i.imgur.com/hS9PYek.jpg"
        }, {
            URL: "https://i.imgur.com/MMfmTIY.jpg"
        }, {
            URL: "https://i.imgur.com/RsTIcfE.jpg"
        }, {
            URL: "https://i.imgur.com/AUMJZ4w.jpg"
        }, {
            URL: "https://i.imgur.com/ldtivdw.jpg"
        }, {
            URL: "https://i.imgur.com/uLE1mJD.jpg"
        }, {
            URL: "https://i.imgur.com/y0tn6br.jpg"
        }, {
            URL: "https://i.imgur.com/XmZYGSJ.jpg"
        }, {
            URL: "https://i.imgur.com/Dj2Sv6W.jpg"
        }, {
            URL: "https://i.imgur.com/wllD7lG.jpg"
        }, {
            URL: "https://i.imgur.com/M5ULsbP.jpg"
        }, {
            URL: "https://i.imgur.com/kHGJJpq.jpg"
        }, {
            URL: "https://i.imgur.com/Ll8DeCz.jpg"
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

