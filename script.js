

function selectOffer(event) {
    if (event == 'discountOffer50') {
        document.getElementById('singleItemSelect').checked = true;
        addActiveOffer('discountOffer50', 'singleItemOffer');
    }
    else {
        document.getElementById('singleItemSelect').checked = false;
        removeActiveOffer('discountOffer50', 'singleItemOffer');
    }

    if (event == 'discountOffer40') {
        document.getElementById('twoItemSelect').checked = true;
        addActiveOffer('discountOffer40', 'twoItemOffer');
    }
    else {
        document.getElementById('twoItemSelect').checked = false;
        removeActiveOffer('discountOffer40', 'twoItemOffer');
    }

    if (event == 'discountOffer60') {
        document.getElementById('threeItemSelect').checked = true;
        addActiveOffer('discountOffer60', 'threeItemOffer');
    }
    else {
        document.getElementById('threeItemSelect').checked = false;
        removeActiveOffer('discountOffer60', 'threeItemOffer');
    }
}

function addActiveOffer(offer, items) {
    document.getElementById(offer).classList.add('active');
    document.getElementById(items).style.display = 'block';
}

function removeActiveOffer(offer, items) {
    document.getElementById(offer).classList.remove('active')
    document.getElementById(items).style.display = 'none';
}
