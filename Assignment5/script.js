var videoObj = document.getElementById("video");

function playPause() {
    if (videoObj.paused) {
        videoObj.play();
    } else {
        videoObj.pause();
    }
}

function volumeUp() {
    if (videoObj.volume < 1) {
        videoObj.volume += 0.1;
    }
}

function volumeDown() {
    if (videoObj.volume > 0) {
        videoObj.volume -= 0.1;
    }
}

function mute() {
    if (videoObj.muted) {
        videoObj.muted = false;
    } else {
        videoObj.muted = true;
    }
}

function fullScreen() {
    videoObj.requestFullscreen();
}

var currentTab = 0;
showTab(currentTab);

function showTab(n) {
    var x = $(".tab");
    x.eq(n).attr("style", "display: block;");
    if (n == 0) {
        $("#prevBtn").attr("style", "display: none;");
    } else {
        $("#prevBtn").attr("style", "display: inline;");
    }
    if (n == (x.length - 1)) {
        $("#nextBtn .next-step").hide();
        $("#nextBtn .submit-step").show();
    } else {
        $("#nextBtn .submit-step").hide();
        $("#nextBtn .next-step").show();
    }
}

function nextPrev(n) {
    var x = $(".tab");
    if (n == 1 && !validateForm()) return false;
    x.eq(currentTab).attr("style", "display: none;");
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        $("#regForm").submit();
        return false;
    }
    showTab(currentTab);
}

function homeEnd(n) {
    var x = $(".tab");
    // if (n == 1 && !validateAllForm()) return false;
    if(n == 0){
        currentTab = 0;
    }else{
        currentTab = x.length -1;
    }
    x.attr("style", "display: none;");
    // currentTab = n;
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = $(".tab");
    y = x.eq(currentTab).find("input");
    z = x.eq(currentTab).find("textarea");
    for (i = 0; i < y.length; i++) {
        if (y.eq(i).val() == "") {
            y.eq(i).addClass("invalid");
            valid = false;
        }
    }
    for (i = 0; i < z.length; i++) {
        if (z.eq(i).val() == "") {
            z.eq(i).addClass("invalid");
            valid = false;
        }
    }
    return valid;
}

function validateAllForm() {
    var x, y, i, valid = true;
    x = $(".tab");
    y = x.find("input");
    z = x.find("textarea");
    for (i = 0; i < y.length; i++) {
        if (y.eq(i).val() == "") {
            y.eq(i).addClass("invalid");
            valid = false;
        }
    }
    for (i = 0; i < z.length; i++) {
        if (z.eq(i).val() == "") {
            z.eq(i).addClass("invalid");
            valid = false;
        }
    }
    return valid;
}

$("#regForm input, #regForm textarea").on("input", function(){
    $(this).removeClass("invalid");
});

$(".language a").on("click", function(){
    $(".language a").removeClass("active");
    $(this).addClass("active");
    $(".lang-changing .lang").hide();
    $(".lang-changing ." + $(this).attr("lang")).show();
    $(".tab-lang a").removeClass("active");
    $(".tab-lang a:lang(" + $(this).attr("lang") + ")").addClass("active");
    return false;
});

$(".tab-lang a").on("click", function(){
    $(this).siblings("a").removeClass("active");
    $(this).addClass("active");
    $(this).closest(".tab").find(".lang").hide();
    $(this).closest(".tab").find(".lang." + $(this).attr("lang")).show();
    return false;
});
